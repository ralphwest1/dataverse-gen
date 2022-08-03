/* eslint-disable*/

// Early Bound Interface for WebApi
export interface dt_QbAccount_apitype {
  // Created By LookupType Unique identifier of the user who created the record.
  _createdby_value?: string | null;
  "_createdby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_createdby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: string | null;
  "createdon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  _createdonbehalfby_value?: string | null;
  "_createdonbehalfby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_createdonbehalfby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_createdonbehalfby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
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
  _dt_parentaccount_value?: string | null;
  "_dt_parentaccount_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_dt_parentaccount_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_dt_parentaccount_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  dt_parentaccountname?: string | null;
  // QbAccount UniqueidentifierType Unique identifier for entity instances
  dt_qbaccountid?: string | null;
  // QbId StringType QuickBooks Id
  dt_qbid?: string | null;
  // SubAccount BooleanType
  dt_subaccount?: boolean | null;
  "dt_subaccount@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  "importsequencenumber@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Modified By LookupType Unique identifier of the user who modified the record.
  _modifiedby_value?: string | null;
  "_modifiedby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_modifiedby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_modifiedby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: string | null;
  "modifiedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  _modifiedonbehalfby_value?: string | null;
  "_modifiedonbehalfby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_modifiedonbehalfby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_modifiedonbehalfby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Organization Id LookupType Unique identifier for the organization
  _organizationid_value?: string | null;
  "_organizationid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_organizationid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_organizationid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  organizationidname?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: string | null;
  "overriddencreatedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Status dt_qbaccount_dt_qbaccount_statecode Status of the QbAccount
  statecode?: import("../enums/dt_qbaccount_dt_qbaccount_statecode").dt_qbaccount_dt_qbaccount_statecode | null;
  "statecode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Status Reason dt_qbaccount_dt_qbaccount_statuscode Reason for the status of the QbAccount
  statuscode?: import("../enums/dt_qbaccount_dt_qbaccount_statuscode").dt_qbaccount_dt_qbaccount_statuscode | null;
  "statuscode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  "timezoneruleversionnumber@OData.Community.Display.V1.FormattedValue"?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  "utcconversiontimezonecode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  "versionnumber@OData.Community.Display.V1.FormattedValue"?: string | null;
}
