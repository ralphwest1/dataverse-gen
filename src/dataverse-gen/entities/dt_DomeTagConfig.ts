/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity dt_DomeTagConfig
export const dt_dometagconfigMetadata = {
  typeName: "mscrm.dt_dometagconfig",
  logicalName: "dt_dometagconfig",
  collectionName: "dt_dometagconfigs",
  primaryIdAttribute: "dt_dometagconfigid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
  },
};

export const dt_dometagconfigCollections = {
  dt_dometagconfig_SyncErrors: ["mscrm.syncerror"],
  dt_dometagconfig_ProcessSession: ["mscrm.processsession"],
  dt_dometagconfig_PrincipalObjectAttributeAccesses: ["mscrm.principalobjectattributeaccess"],
  dt_dometagconfig_MailboxTrackingFolders: ["mscrm.mailboxtrackingfolder"],
  dt_dometagconfig_DuplicateMatchingRecord: ["mscrm.duplicaterecord"],
  dt_dometagconfig_DuplicateBaseRecord: ["mscrm.duplicaterecord"],
  dt_dometagconfig_BulkDeleteFailures: ["mscrm.bulkdeletefailure"],
  dt_dometagconfig_AsyncOperations: ["mscrm.asyncoperation"],
};

// Attribute constants
export const enum dt_DomeTagConfigAttributes {
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  dt_ConfigName = "dt_configname",
  dt_ConfigType = "dt_configtype",
  dt_ConfigValue = "dt_configvalue",
  dt_DomeTagConfigId = "dt_dometagconfigid",
  dt_EntityLogicalName = "dt_entitylogicalname",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  statecode = "statecode",
  statuscode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface dt_DomeTagConfig extends IEntity {
  // Created By LookupType Unique identifier of the user who created the record.
  createdby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Config Name [Required] StringType Required name field
  dt_configname?: string;
  // Config Type StringType
  dt_configtype?: string | null;
  // Value MemoType
  dt_configvalue?: string | null;
  // DomeTag Config UniqueidentifierType Unique identifier for entity instances
  dt_dometagconfigid?: import("dataverse-ify").Guid | null;
  // Entity Logical Name StringType
  dt_entitylogicalname?: string | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Modified By LookupType Unique identifier of the user who modified the record.
  modifiedby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Owner Id
  ownerid?: import("dataverse-ify").EntityReference | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("dataverse-ify").EntityReference | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("dataverse-ify").EntityReference | null;
  // Status dt_dometagconfig_dt_dometagconfig_statecode Status of the DomeTag Config
  statecode?: import("../enums/dt_dometagconfig_dt_dometagconfig_statecode").dt_dometagconfig_dt_dometagconfig_statecode | null;
  // Status Reason dt_dometagconfig_dt_dometagconfig_statuscode Reason for the status of the DomeTag Config
  statuscode?: import("../enums/dt_dometagconfig_dt_dometagconfig_statuscode").dt_dometagconfig_dt_dometagconfig_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
