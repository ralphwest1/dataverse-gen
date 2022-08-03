/* eslint-disable camelcase */
import { DataverseGenOptions, defaultOptions } from "./MetadataGeneratorConfig";
import _merge = require("lodash.merge");
import ejs = require("ejs");
import path = require("path");
import * as fs from "fs";
import { SchemaGenerator } from "./SchemaGenerator";
import { XrmContextCdsServiceClient, setMetadataCache } from "dataverse-ify";
import { getAccessToken, WebApiStatic, NodeWebApiRequest } from "dataverse-ify/lib/webapi";

import { metadataCache } from "./dataverse-gen/metadata";
import { ComplexEntityMetadata } from "./dataverse-gen/complextypes/ComplexEntityMetadata";
import { RetrieveMetadataChangesResponse } from "./dataverse-gen/complextypes/RetrieveMetadataChangesResponse";
import { MetadataConditionOperator } from "./dataverse-gen/enums/MetadataConditionOperator";
import { LogicalOperator } from "./dataverse-gen/enums/LogicalOperator";
import { RetrieveMetadataChangesRequest } from "./dataverse-gen/functions/RetrieveMetadataChanges";

export class TypescriptGenerator {
  packageDir: string;
  projectDir: string;
  options: DataverseGenOptions;
  cdsService!: XrmContextCdsServiceClient;
  constructor(packageDir: string, projectDir: string, options: DataverseGenOptions) {
    this.packageDir = packageDir;
    this.projectDir = projectDir;
    this.options = _merge(defaultOptions, options) as DataverseGenOptions;
  }

  async generate(server: string): Promise<void> {
    const nodeWebApi = new WebApiStatic();
    await nodeWebApi.authoriseWithCdsAuthToken(server, "9.1");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.cdsService = new XrmContextCdsServiceClient((nodeWebApi as any) as Xrm.WebApi);

    // Load the template
    if (!this.options.output?.templateRoot) throw new Error("Missing templateRoot in config");
    if (!this.options.output?.outputRoot) throw new Error("Missing outputRoot in config");

    // Check output folder exists
    this.createDir(this.getOutputRoot());
    const genMetadataDir = path.join(this.getOutputRoot(), "genMetadata");
    this.createDir(genMetadataDir);
    fs.writeFileSync(
      path.join(genMetadataDir, "options.json"),
      // JSON.stringify(this.options, getCircularReplacer(), "\t"),
      JSON.stringify(this.options, null, "\t"),
    );

    // Set Metadata
    setMetadataCache(metadataCache);

    // Get the edmx metadata
    const metadataXml = await this.getEdmxMetadata(server);

    const schema = new SchemaGenerator(metadataXml, this.options, (logicalName: string) => {
      return this.getWebApiMetadata(logicalName);
    });
    await schema.generate();
    // console.log(schema);
    // console.log(JSON.stringify(schema, null, 2));
    // this.outputJsonFile("dev", "SchemaGenerator", schema.getData());
    this.outputEntities(schema);
    this.outputEnums(schema);
    this.outputActions(schema);
    this.outputFunctions(schema);
    this.outputComplexTypes(schema);
    this.outputFiles("metadata.ejs", ".", [{ ...schema, ...this.options }], function() {
      return "metadata";
    });
  }

  createDir(dirPath: string): void {
    try {
      fs.mkdirSync(dirPath);
    } catch (ex) {
      if (ex.code != "EEXIST") {
        throw ex;
      }
    }
  }

  async getWebApiMetadata(entity: string): Promise<ComplexEntityMetadata> {
    const projectDir = path.resolve(".");
    let metadataResponse: ComplexEntityMetadata;
    // Check if we have a cached value
    const entityMetadataFile = path.join(projectDir, entity + ".metadata.json");
    if (this.options.output?.useCache && fs.existsSync(entityMetadataFile)) {
      const cachedMetadataJSON = fs.readFileSync(entityMetadataFile).toString();
      metadataResponse = JSON.parse(cachedMetadataJSON) as ComplexEntityMetadata;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const response = await this.getEntityMetadata(entity, this.cdsService);
      if (!response.EntityMetadata) throw new Error("No metadata response");
      metadataResponse = response.EntityMetadata[0];
      if (this.options.output?.useCache) {
        // Save to file cache
        fs.writeFileSync(entityMetadataFile, JSON.stringify(metadataResponse));
      }
    }
    return metadataResponse;
  }
  async getEntityMetadata(
    logicalName: string,
    cdsService: XrmContextCdsServiceClient,
  ): Promise<RetrieveMetadataChangesResponse> {
    console.log(`Fetching CDS metadata for ${logicalName}`);
    const metadataQuery = {
      logicalName: "RetrieveMetadataChanges",
      Query: {
        Criteria: {
          Conditions: [
            {
              PropertyName: "LogicalName",
              ConditionOperator: MetadataConditionOperator.Equals,
              Value: {
                Value: logicalName,
                Type: "System.String",
              },
            },
          ],
          FilterOperator: LogicalOperator.And,
        },
        Properties: {
          PropertyNames: ["Attributes", "SchemaName", "EntitySetName"],
        },
        AttributeQuery: {
          Properties: {
            PropertyNames: [
              "SchemaName",
              "LogicalName",
              "OptionSet",
              "RequiredLevel",
              "AttributeType",
              "AttributeTypeName",
              "SourceType",
              "IsLogical",
              "AttributeOf",
              "Targets",
              "Description",
              "DateTimeBehavior",
              "Format",
              "DisplayName",
            ],
          },
        },
      },
    } as RetrieveMetadataChangesRequest;

    const metadataResponse = (await cdsService.execute(metadataQuery as any)) as RetrieveMetadataChangesResponse;

    // Sort properties
    metadataResponse.EntityMetadata?.forEach(m =>
      m.Attributes?.sort((a, b) => ((a.LogicalName as string) > (b.LogicalName as string) ? 1 : -1)),
    );
    return metadataResponse;
  }

  async getEdmxMetadata(server: string): Promise<string> {
    console.log("Fetching EDMX metadata");
    const edmxCachePath = path.resolve(".") + "\\cds-edmx.xml";
    let edmxString: string;
    if (this.options.output?.useCache && fs.existsSync(edmxCachePath)) {
      edmxString = fs.readFileSync(edmxCachePath).toString();
    } else {
      const accessToken = await getAccessToken(server.replace("https://", ""));
      const metadataUrl = server + "/api/data/v9.0/$metadata";
      const request = new NodeWebApiRequest(accessToken);
      edmxString = (await request.send("GET", metadataUrl)) as string;
      if (this.options.output?.useCache) {
        fs.writeFileSync(edmxCachePath, edmxString);
      }
    }
    return edmxString;
  }

  outputEntities(schema: SchemaGenerator): void {
    this.outputFiles("entity.ejs", "entities", schema.EntityTypes as unknown[], this.schemaNameKey);
  }

  outputApiTypes(schema: SchemaGenerator): void {
    this.outputFiles("webapitype.ejs", "apitypes", schema.EntityTypes as unknown[], this.schemaNameKey);
  }

  outputEnums(schema: SchemaGenerator): void {
    this.outputFiles("enum.ejs", "enums", schema.EnumTypes as unknown[], this.nameKey);
  }

  outputActions(schema: SchemaGenerator): void {
    this.outputFiles("action.ejs", "actions", schema.Actions as unknown[], this.nameKey);
  }

  outputFunctions(schema: SchemaGenerator): void {
    this.outputFiles("function.ejs", "functions", schema.Functions as unknown[], this.nameKey);
  }

  outputComplexTypes(schema: SchemaGenerator): void {
    this.outputFiles("complextype.ejs", "complextypes", schema.ComplexTypes as unknown[], this.nameKey);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nameKey(item: any): string {
    return item?.Name;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schemaNameKey(item: any): string {
    return item?.SchemaName;
  }
  getOutputRoot(): string {
    if (this.options.output?.outputRoot) {
      return path.join(this.projectDir, this.options.output?.outputRoot);
    } else {
      throw new Error("outputRoot required");
    }
  }
  outputFiles(
    templateFileName: string,
    outputDir: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    itemArray: any[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getFileName: (item: any) => string,
  ): void {
    const outputRoot = this.getOutputRoot();

    // Create output directory
    const enumRootPath = path.join(outputRoot, outputDir);
    this.createDir(enumRootPath);
    // const webapiRootPath = path.join(outputRoot, "apitypes");
    // this.createDir(webapiRootPath);
    const genMetadataDir = path.join(outputRoot, "genMetadata", outputDir);
    this.createDir(genMetadataDir);

    // Read template from the current project if it exists
    const projectTemplatePath = path.join(
      this.projectDir,
      this.options.output?.templateRoot as string,
      templateFileName,
    );
    // const projectTemplatePath_WebApi = path.join(
    //   this.projectDir,
    //   this.options.output?.templateRoot as string,
    //   "webapitype.ejs",
    // );

    let template: string;
    if (fs.existsSync(projectTemplatePath)) {
      template = fs.readFileSync(projectTemplatePath).toString();
    } else {
      const packageTemplatePath = path.join(this.packageDir, "../_templates", templateFileName);
      template = fs.readFileSync(packageTemplatePath).toString();
    }
    // let webApiTemplate: string;
    // if (fs.existsSync(projectTemplatePath_WebApi)) {
    //   webApiTemplate = fs.readFileSync(projectTemplatePath).toString();
    // } else {
    //   // eslint-disable-next-line @typescript-eslint/camelcase
    //   const packageTemplatePath_WebApi = path.join(this.packageDir, "../_templates", "webapitype.ejs");
    //   webApiTemplate = fs.readFileSync(packageTemplatePath_WebApi).toString();
    // }
    for (const item of itemArray) {
      const fileName = getFileName(item);
      const outFile = path.join(enumRootPath, `${fileName}${this.options.output?.fileSuffix}`);
      // const outFile_WebApi = path.join(webapiRootPath, `${fileName}${this.options.output?.fileSuffix}`);
      const outFileGenMetadata = path.join(genMetadataDir, `${fileName}.json`);
      let output = "";
      try {
        console.log("Generating: " + outFile);
        output = ejs.render(template, { ...this.options, ...item });
        // console.log("Generating: " + outFile);
        // const output_apitype = ejs.render(webApiTemplate, { ...this.options, ...item });
        fs.writeFileSync(outFile, output);
        // fs.writeFileSync(outFile_WebApi, output_apitype);
        fs.writeFileSync(
          outFileGenMetadata,
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          JSON.stringify(item, getCircularReplacer(), "\t"),
        );
      } catch (ex) {
        output = ex.message;
        console.error(ex.message);
      }
    }
  }
  // outputJsonFile(outputDir: string, fileName: string, data: any): void {
  //   const getCircularReplacer = () => {
  //     const seen = new WeakSet();
  //     return (_: any, value: any) => {
  //       if (typeof value === "object" && value !== null) {
  //         if (seen.has(value)) {
  //           return;
  //         }
  //         seen.add(value);
  //       }
  //       return value;
  //     };
  //   };

  //   const outputRoot = this.getOutputRoot();

  //   // Create output directory
  //   const outputRootPath = path.join(outputRoot, outputDir);
  //   this.createDir(outputRootPath);
  //   const outFile = path.join(outputRootPath, `${fileName}.json`);
  //   let output = "";
  //   try {
  //     console.log("Generating: " + outFile);
  //     output = JSON.stringify(data, getCircularReplacer(), "\t");
  //   } catch (ex) {
  //     output = ex.message;
  //     console.error(ex.message);
  //   }
  //   fs.writeFileSync(outFile, output);
  // }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCircularReplacer = (): any => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
