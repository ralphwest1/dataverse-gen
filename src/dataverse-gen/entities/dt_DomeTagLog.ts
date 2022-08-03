/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity dt_DomeTagLog
export const dt_dometaglogMetadata = {
  typeName: "mscrm.dt_dometaglog",
  logicalName: "dt_dometaglog",
  collectionName: "dt_dometaglogs",
  primaryIdAttribute: "dt_dometaglogid",
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
    dt_endtime: "DateAndTime:UserLocal",
    dt_starttime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    organizationid: ["mscrm.organization"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
  },
};

export const dt_dometaglogCollections = {
  dt_dometaglog_SyncErrors: ["mscrm.syncerror"],
  dt_dometaglog_ProcessSession: ["mscrm.processsession"],
  dt_dometaglog_PrincipalObjectAttributeAccesses: ["mscrm.principalobjectattributeaccess"],
  dt_dometaglog_MailboxTrackingFolders: ["mscrm.mailboxtrackingfolder"],
  dt_dometaglog_BulkDeleteFailures: ["mscrm.bulkdeletefailure"],
  dt_dometaglog_AsyncOperations: ["mscrm.asyncoperation"],
},

// Attribute constants
export const enum dt_DomeTagLogAttributes {
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  dt_Data = "dt_data",
  dt_DomeTagLogId = "dt_dometaglogid",
  dt_EndTime = "dt_endtime",
  dt_Group = "dt_group",
  dt_Name = "dt_name",
  dt_RecordNumber = "dt_recordnumber",
  dt_StartTime = "dt_starttime",
  dt_Status = "dt_status",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OrganizationId = "organizationid",
  OrganizationIdName = "organizationidname",
  OverriddenCreatedOn = "overriddencreatedon",
  statecode = "statecode",
  statuscode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface dt_DomeTagLog extends IEntity {
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
  // Data MemoType
  dt_data?: string | null;
  // DomeTagLog UniqueidentifierType Unique identifier for entity instances
  dt_dometaglogid?: import("dataverse-ify").Guid | null;
  // EndTime DateTimeType DateAndTime:UserLocal
  dt_endtime?: Date | null;
  // Group StringType
  dt_group?: string | null;
  // Name [Required] StringType
  dt_name?: string;
  // RecordNumber StringType
  dt_recordnumber?: string | null;
  // StartTime DateTimeType DateAndTime:UserLocal
  dt_starttime?: Date | null;
  // Status StringType
  dt_status?: string | null;
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
  // Organization Id LookupType Unique identifier for the organization
  organizationid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  organizationidname?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Status dt_dometaglog_dt_dometaglog_statecode Status of the DomeTagLog
  statecode?: import("../enums/dt_dometaglog_dt_dometaglog_statecode").dt_dometaglog_dt_dometaglog_statecode | null;
  // Status Reason dt_dometaglog_dt_dometaglog_statuscode Reason for the status of the DomeTagLog
  statuscode?: import("../enums/dt_dometaglog_dt_dometaglog_statuscode").dt_dometaglog_dt_dometaglog_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
