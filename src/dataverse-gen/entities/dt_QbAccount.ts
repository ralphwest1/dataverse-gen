/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity dt_QbAccount
export const dt_qbaccountMetadata = {
  typeName: "mscrm.dt_qbaccount",
  logicalName: "dt_qbaccount",
  collectionName: "dt_qbaccounts",
  primaryIdAttribute: "dt_qbaccountid",
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
    organizationid: ["mscrm.organization"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    dt_ParentAccount: ["mscrm.dt_qbaccount"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
  },
};

export const dt_qbaccountCollections = {
  dt_qbaccount_SyncErrors: ["mscrm.syncerror"],
  dt_qbaccount_ProcessSession: ["mscrm.processsession"],
  dt_qbaccount_PrincipalObjectAttributeAccesses: ["mscrm.principalobjectattributeaccess"],
  dt_qbaccount_MailboxTrackingFolders: ["mscrm.mailboxtrackingfolder"],
  dt_qbaccount_DuplicateMatchingRecord: ["mscrm.duplicaterecord"],
  dt_qbaccount_DuplicateBaseRecord: ["mscrm.duplicaterecord"],
  dt_qbaccount_BulkDeleteFailures: ["mscrm.bulkdeletefailure"],
  dt_qbaccount_AsyncOperations: ["mscrm.asyncoperation"],
  dt_dt_QbAccount__dt_PurchaseOrderLine: ["mscrm.dt_purchaseorderline"],
  dt_dt_QbAccount__dt_PurchaseItem: ["mscrm.dt_purchaseitem"],
  dt_QbAccount_Parent_QbAccount: ["mscrm.dt_qbaccount"],
},

// Attribute constants
export const enum dt_QbAccountAttributes {
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  dt_AccountSubType = "dt_accountsubtype",
  dt_AccountType = "dt_accounttype",
  dt_AcctNumber = "dt_acctnumber",
  dt_Classification = "dt_classification",
  dt_Description = "dt_description",
  dt_DisplayName = "dt_displayname",
  dt_FullyQualifiedName = "dt_fullyqualifiedname",
  dt_Name = "dt_name",
  dt_ParentAccount = "dt_parentaccount",
  dt_ParentAccountName = "dt_parentaccountname",
  dt_QbAccountId = "dt_qbaccountid",
  dt_QbId = "dt_qbid",
  dt_SubAccount = "dt_subaccount",
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
export interface dt_QbAccount extends IEntity {
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
  // Account SubType StringType
  dt_accountsubtype?: string | null;
  // Account Type StringType
  dt_accounttype?: string | null;
  // Acct Number StringType Optional Qb Account Number Assignment
  dt_acctnumber?: string | null;
  // Classification StringType
  dt_classification?: string | null;
  // Description StringType
  dt_description?: string | null;
  // Display Name StringType Required name field
  dt_displayname?: string | null;
  // Fully Qualified Name StringType
  dt_fullyqualifiedname?: string | null;
  // Name StringType
  dt_name?: string | null;
  // Parent Account LookupType
  dt_parentaccount?: import("dataverse-ify").EntityReference | null;
  //  StringType
  dt_parentaccountname?: string | null;
  // QbAccount UniqueidentifierType Unique identifier for entity instances
  dt_qbaccountid?: import("dataverse-ify").Guid | null;
  // QbId StringType QuickBooks Id
  dt_qbid?: string | null;
  // SubAccount BooleanType
  dt_subaccount?: boolean | null;
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
  // Status dt_qbaccount_dt_qbaccount_statecode Status of the QbAccount
  statecode?: import("../enums/dt_qbaccount_dt_qbaccount_statecode").dt_qbaccount_dt_qbaccount_statecode | null;
  // Status Reason dt_qbaccount_dt_qbaccount_statuscode Reason for the status of the QbAccount
  statuscode?: import("../enums/dt_qbaccount_dt_qbaccount_statuscode").dt_qbaccount_dt_qbaccount_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
