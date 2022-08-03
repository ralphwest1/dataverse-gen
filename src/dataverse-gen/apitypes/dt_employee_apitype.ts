/* eslint-disable*/

// Early Bound Interface for WebApi
export interface dt_Employee_apitype {
  // DT_EmployeeClass StringType
  cr4ca_dt_employeeclass?: string | null;
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
  // City StringType
  dt_address1_city?: string | null;
  // Latitude DoubleType
  dt_address1_latitude?: number | null;
  "dt_address1_latitude@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Street 1 StringType
  dt_address1_line1?: string | null;
  // Street 2 StringType
  dt_address1_line2?: string | null;
  // Longitude DoubleType
  dt_address1_longitude?: number | null;
  "dt_address1_longitude@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Zip StringType
  dt_address1_postalcode?: string | null;
  // State StringType
  dt_address1_stateorprovince?: string | null;
  // Age DecimalType
  dt_age_calcfd?: number | null;
  "dt_age_calcfd@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Auto Number StringType
  dt_autonumber?: string | null;
  // 401k % Company DecimalType
  dt_benefits_401kcompanypercent?: number | null;
  "dt_benefits_401kcompanypercent@OData.Community.Display.V1.FormattedValue"?: string | null;
  // 401k % Employee DecimalType
  dt_benefits_401kemployeepercent?: number | null;
  "dt_benefits_401kemployeepercent@OData.Community.Display.V1.FormattedValue"?: string | null;
  // 401k Note StringType
  dt_benefits_401knote?: string | null;
  // 401k % StringType
  dt_benefits_401kpercent?: string | null;
  // Birthday DateTimeType DateOnly:DateOnly
  dt_birthday?: string | null;
  "dt_birthday@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Bookable Resource LookupType
  _dt_bookableresource_value?: string | null;
  "_dt_bookableresource_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_dt_bookableresource_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_dt_bookableresource_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  dt_bookableresourcename?: string | null;
  // Costing Hour Rate DecimalType
  dt_costinghourrate?: number | null;
  "dt_costinghourrate@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Emergency Contact Email StringType
  dt_emergencycontactemail?: string | null;
  // Emergency Contact Name StringType
  dt_emergencycontactname?: string | null;
  // Emergency Contact Phone StringType
  dt_emergencycontactphone?: string | null;
  // Emergency Contact Relationship StringType
  dt_emergencycontactrelationship?: string | null;
  // Employee UniqueidentifierType Unique identifier for entity instances
  dt_employeeid?: string | null;
  // Employee Type dt_employeetype
  dt_employeetype?: import("../enums/dt_employeetype").dt_employeetype | null;
  "dt_employeetype@OData.Community.Display.V1.FormattedValue"?: string | null;
  // End Date DateTimeType DateOnly:UserLocal
  dt_enddate?: string | null;
  "dt_enddate@OData.Community.Display.V1.FormattedValue"?: string | null;
  // First Name StringType
  dt_firstname?: string | null;
  // Gender dt_gender
  dt_gender?: import("../enums/dt_gender").dt_gender | null;
  "dt_gender@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Is Unlocked Image BooleanType
  dt_isunlockedimage?: boolean | null;
  "dt_isunlockedimage@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Last Name StringType
  dt_lastname?: string | null;
  // Manager LookupType
  _dt_manager_value?: string | null;
  "_dt_manager_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_dt_manager_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_dt_manager_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  dt_managername?: string | null;
  // Middle Name StringType
  dt_middlename?: string | null;
  // Name [Required] StringType Required name field
  dt_name?: string;
  // Pay Rate MoneyType
  dt_payrate?: number | null;
  "dt_payrate@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Pay Rate (Base) MoneyType Value of the Pay Rate in base currency.
  dt_payrate_base?: number | null;
  "dt_payrate_base@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Pay Rate Type dt_payratetype
  dt_payratetype?: import("../enums/dt_payratetype").dt_payratetype | null;
  "dt_payratetype@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Personal Email StringType
  dt_personalemail?: string | null;
  // Personal Phone StringType
  dt_personalphone?: string | null;
  // Position LookupType
  _dt_position_value?: string | null;
  "_dt_position_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_dt_position_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_dt_position_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  dt_positionname?: string | null;
  // Primary Image ImageType
  dt_primaryimage?: string | null;
  //  BigIntType
  dt_primaryimage_timestamp?: number | null;
  "dt_primaryimage_timestamp@OData.Community.Display.V1.FormattedValue"?: string | null;
  //  StringType
  dt_primaryimage_url?: string | null;
  //  UniqueidentifierType
  dt_primaryimageid?: string | null;
  // PTO Earned DecimalType
  dt_ptoearned?: number | null;
  "dt_ptoearned@OData.Community.Display.V1.FormattedValue"?: string | null;
  // QboEEID StringType
  dt_qboeeid?: string | null;
  // QboEmployeeId IntegerType
  dt_qboemployeeid?: number | null;
  "dt_qboemployeeid@OData.Community.Display.V1.FormattedValue"?: string | null;
  // QboPayrollNameKey StringType
  dt_qbopayrollnamekey?: string | null;
  // QboTimeUserId IntegerType
  dt_qbotimeuserid?: number | null;
  "dt_qbotimeuserid@OData.Community.Display.V1.FormattedValue"?: string | null;
  // RecordNumber StringType
  dt_recordnumber?: string | null;
  // Social Security Number StringType
  dt_socialsecuritynumber?: string | null;
  // Start Date DateTimeType DateOnly:UserLocal
  dt_startdate?: string | null;
  "dt_startdate@OData.Community.Display.V1.FormattedValue"?: string | null;
  // System User LookupType
  _dt_systemuser_value?: string | null;
  "_dt_systemuser_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_dt_systemuser_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_dt_systemuser_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  dt_systemusername?: string | null;
  //  StringType
  dt_systemuseryominame?: string | null;
  // Tenure DecimalType
  dt_tenure_calcfd?: number | null;
  "dt_tenure_calcfd@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Work Email StringType
  dt_workemail?: string | null;
  // Work Phone StringType
  dt_workphone?: string | null;
  // Work Phone Extension StringType
  dt_workphoneextension?: string | null;
  // Exchange Rate DecimalType Exchange rate for the currency associated with the entity with respect to the base currency.
  exchangerate?: number | null;
  "exchangerate@OData.Community.Display.V1.FormattedValue"?: string | null;
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
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: string | null;
  "overriddencreatedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Owner OwnerType Owner Id
  _ownerid_value?: string | null;
  "_ownerid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  _owningbusinessunit_value?: string | null;
  "_owningbusinessunit_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_owningbusinessunit_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_owningbusinessunit_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  _owningteam_value?: string | null;
  "_owningteam_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  _owninguser_value?: string | null;
  "_owninguser_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  // Status dt_employee_dt_employee_statecode Status of the Employee
  statecode?: import("../enums/dt_employee_dt_employee_statecode").dt_employee_dt_employee_statecode | null;
  "statecode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Status Reason dt_employee_dt_employee_statuscode Reason for the status of the Employee
  statuscode?: import("../enums/dt_employee_dt_employee_statuscode").dt_employee_dt_employee_statuscode | null;
  "statuscode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  "timezoneruleversionnumber@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Currency LookupType Unique identifier of the currency associated with the entity.
  _transactioncurrencyid_value?: string | null;
  "_transactioncurrencyid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  "utcconversiontimezonecode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  "versionnumber@OData.Community.Display.V1.FormattedValue"?: string | null;
}
