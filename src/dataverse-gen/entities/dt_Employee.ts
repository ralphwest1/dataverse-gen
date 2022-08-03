/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity dt_Employee
export const dt_employeeMetadata = {
  typeName: "mscrm.dt_employee",
  logicalName: "dt_employee",
  collectionName: "dt_employees",
  primaryIdAttribute: "dt_employeeid",
  attributeTypes: {
    // Numeric Types
    dt_address1_latitude: "Double",
    dt_address1_longitude: "Double",
    dt_age_calcfd: "Decimal",
    dt_benefits_401kcompanypercent: "Decimal",
    dt_benefits_401kemployeepercent: "Decimal",
    dt_costinghourrate: "Decimal",
    dt_payrate: "Money",
    dt_payrate_base: "Money",
    dt_primaryimage_timestamp: "BigInt",
    dt_ptoearned: "Decimal",
    dt_qboemployeeid: "Integer",
    dt_qbotimeuserid: "Integer",
    dt_tenure_calcfd: "Decimal",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    dt_employeetype: "Optionset",
    dt_gender: "Optionset",
    dt_payratetype: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    dt_birthday: "DateOnly:DateOnly",
    dt_enddate: "DateOnly:UserLocal",
    dt_startdate: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    dt_SystemUser: ["mscrm.systemuser"],
    dt_Position: ["mscrm.position"],
    dt_Manager: ["mscrm.dt_employee"],
    dt_BookableResource: ["mscrm.bookableresource"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
  },
};

export const dt_employeeCollections = {
  dtld_Employee_TestResult: ["mscrm.dtld_testresult"],
  dtld_Employee_LearningActivity: ["mscrm.dtld_learningactivity"],
  dtld_Employee_Assessment: ["mscrm.dtld_assessment"],
  dt_employee_SyncErrors: ["mscrm.syncerror"],
  dt_employee_SharePointDocumentLocations: ["mscrm.sharepointdocumentlocation"],
  dt_employee_ProcessSession: ["mscrm.processsession"],
  dt_employee_PrincipalObjectAttributeAccesses: ["mscrm.principalobjectattributeaccess"],
  dt_employee_MailboxTrackingFolders: ["mscrm.mailboxtrackingfolder"],
  dt_employee_DuplicateMatchingRecord: ["mscrm.duplicaterecord"],
  dt_employee_DuplicateBaseRecord: ["mscrm.duplicaterecord"],
  dt_employee_BulkDeleteFailures: ["mscrm.bulkdeletefailure"],
  dt_employee_AsyncOperations: ["mscrm.asyncoperation"],
  dt_dt_Employee_dt_Paycheck: ["mscrm.dt_paycheck"],
  dt_TimeAndAttendance_Employee_dt_Employee: ["mscrm.dt_timeandattendance"],
  dt_PayChange_Employee_dt_Employee: ["mscrm.dt_paychange"],
  dt_LearningAndDevelopment_Employee_dt_Emp: ["mscrm.dt_learninganddevelopment"],
  dt_Employee_Payroll: ["mscrm.dt_payroll"],
  dt_Employee_Manager_Employee: ["mscrm.dt_employee"],
  dt_Employee_EmployeeReview: ["mscrm.dt_employeereview"],
  dt_EmployeePosition_Employee_dt_Employee: ["mscrm.dt_employeeposition"],
  dt_EmployeeAbsence_Manager_dt_Employee: ["mscrm.dt_employeeabsence"],
  dt_EmployeeAbsence_Employee_dt_Employee: ["mscrm.dt_employeeabsence"],
  dt_BODComp_EmployeeID_dt_Employee: ["mscrm.dt_bodcomp"],
},

// Attribute constants
export const enum dt_EmployeeAttributes {
  cr4ca_DT_EmployeeClass = "cr4ca_dt_employeeclass",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  dt_Address1_City = "dt_address1_city",
  dt_Address1_Latitude = "dt_address1_latitude",
  dt_Address1_Line1 = "dt_address1_line1",
  dt_Address1_Line2 = "dt_address1_line2",
  dt_Address1_Longitude = "dt_address1_longitude",
  dt_Address1_PostalCode = "dt_address1_postalcode",
  dt_Address1_StateOrProvince = "dt_address1_stateorprovince",
  dt_Age_CalcFd = "dt_age_calcfd",
  dt_AutoNumber = "dt_autonumber",
  dt_Benefits_401kCompanyPercent = "dt_benefits_401kcompanypercent",
  dt_Benefits_401kEmployeePercent = "dt_benefits_401kemployeepercent",
  dt_Benefits_401kNote = "dt_benefits_401knote",
  dt_Benefits_401kPercent = "dt_benefits_401kpercent",
  dt_Birthday = "dt_birthday",
  dt_BookableResource = "dt_bookableresource",
  dt_BookableResourceName = "dt_bookableresourcename",
  dt_CostingHourRate = "dt_costinghourrate",
  dt_EmergencyContactEmail = "dt_emergencycontactemail",
  dt_EmergencyContactName = "dt_emergencycontactname",
  dt_EmergencyContactPhone = "dt_emergencycontactphone",
  dt_EmergencyContactRelationship = "dt_emergencycontactrelationship",
  dt_EmployeeId = "dt_employeeid",
  dt_EmployeeType = "dt_employeetype",
  dt_EndDate = "dt_enddate",
  dt_FirstName = "dt_firstname",
  dt_Gender = "dt_gender",
  dt_IsUnlockedImage = "dt_isunlockedimage",
  dt_LastName = "dt_lastname",
  dt_Manager = "dt_manager",
  dt_ManagerName = "dt_managername",
  dt_MiddleName = "dt_middlename",
  dt_Name = "dt_name",
  dt_PayRate = "dt_payrate",
  dt_payrate_Base = "dt_payrate_base",
  dt_PayRateType = "dt_payratetype",
  dt_PersonalEmail = "dt_personalemail",
  dt_PersonalPhone = "dt_personalphone",
  dt_Position = "dt_position",
  dt_PositionName = "dt_positionname",
  dt_PrimaryImage = "dt_primaryimage",
  dt_PrimaryImage_Timestamp = "dt_primaryimage_timestamp",
  dt_PrimaryImage_URL = "dt_primaryimage_url",
  dt_PrimaryImageId = "dt_primaryimageid",
  dt_PTOEarned = "dt_ptoearned",
  dt_QboEEID = "dt_qboeeid",
  dt_QboEmployeeId = "dt_qboemployeeid",
  dt_QboPayrollNameKey = "dt_qbopayrollnamekey",
  dt_QboTimeUserId = "dt_qbotimeuserid",
  dt_RecordNumber = "dt_recordnumber",
  dt_SocialSecurityNumber = "dt_socialsecuritynumber",
  dt_StartDate = "dt_startdate",
  dt_SystemUser = "dt_systemuser",
  dt_SystemUserName = "dt_systemusername",
  dt_SystemUserYomiName = "dt_systemuseryominame",
  dt_Tenure_CalcFd = "dt_tenure_calcfd",
  dt_WorkEmail = "dt_workemail",
  dt_WorkPhone = "dt_workphone",
  dt_WorkPhoneExtension = "dt_workphoneextension",
  ExchangeRate = "exchangerate",
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
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface dt_Employee extends IEntity {
  // DT_EmployeeClass StringType
  cr4ca_dt_employeeclass?: string | null;
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
  // City StringType
  dt_address1_city?: string | null;
  // Latitude DoubleType
  dt_address1_latitude?: number | null;
  // Street 1 StringType
  dt_address1_line1?: string | null;
  // Street 2 StringType
  dt_address1_line2?: string | null;
  // Longitude DoubleType
  dt_address1_longitude?: number | null;
  // Zip StringType
  dt_address1_postalcode?: string | null;
  // State StringType
  dt_address1_stateorprovince?: string | null;
  // Age DecimalType
  dt_age_calcfd?: number | null;
  // Auto Number StringType
  dt_autonumber?: string | null;
  // 401k % Company DecimalType
  dt_benefits_401kcompanypercent?: number | null;
  // 401k % Employee DecimalType
  dt_benefits_401kemployeepercent?: number | null;
  // 401k Note StringType
  dt_benefits_401knote?: string | null;
  // 401k % StringType
  dt_benefits_401kpercent?: string | null;
  // Birthday DateTimeType DateOnly:DateOnly
  dt_birthday?: Date | null;
  // Bookable Resource LookupType
  dt_bookableresource?: import("dataverse-ify").EntityReference | null;
  //  StringType
  dt_bookableresourcename?: string | null;
  // Costing Hour Rate DecimalType
  dt_costinghourrate?: number | null;
  // Emergency Contact Email StringType
  dt_emergencycontactemail?: string | null;
  // Emergency Contact Name StringType
  dt_emergencycontactname?: string | null;
  // Emergency Contact Phone StringType
  dt_emergencycontactphone?: string | null;
  // Emergency Contact Relationship StringType
  dt_emergencycontactrelationship?: string | null;
  // Employee UniqueidentifierType Unique identifier for entity instances
  dt_employeeid?: import("dataverse-ify").Guid | null;
  // Employee Type dt_employeetype
  dt_employeetype?: import("../enums/dt_employeetype").dt_employeetype | null;
  // End Date DateTimeType DateOnly:UserLocal
  dt_enddate?: Date | null;
  // First Name StringType
  dt_firstname?: string | null;
  // Gender dt_gender
  dt_gender?: import("../enums/dt_gender").dt_gender | null;
  // Is Unlocked Image BooleanType
  dt_isunlockedimage?: boolean | null;
  // Last Name StringType
  dt_lastname?: string | null;
  // Manager LookupType
  dt_manager?: import("dataverse-ify").EntityReference | null;
  //  StringType
  dt_managername?: string | null;
  // Middle Name StringType
  dt_middlename?: string | null;
  // Name [Required] StringType Required name field
  dt_name?: string;
  // Pay Rate MoneyType
  dt_payrate?: number | null;
  // Pay Rate (Base) MoneyType Value of the Pay Rate in base currency.
  dt_payrate_base?: number | null;
  // Pay Rate Type dt_payratetype
  dt_payratetype?: import("../enums/dt_payratetype").dt_payratetype | null;
  // Personal Email StringType
  dt_personalemail?: string | null;
  // Personal Phone StringType
  dt_personalphone?: string | null;
  // Position LookupType
  dt_position?: import("dataverse-ify").EntityReference | null;
  //  StringType
  dt_positionname?: string | null;
  // Primary Image ImageType
  dt_primaryimage?: string | null;
  //  BigIntType
  dt_primaryimage_timestamp?: number | null;
  //  StringType
  dt_primaryimage_url?: string | null;
  //  UniqueidentifierType
  dt_primaryimageid?: import("dataverse-ify").Guid | null;
  // PTO Earned DecimalType
  dt_ptoearned?: number | null;
  // QboEEID StringType
  dt_qboeeid?: string | null;
  // QboEmployeeId IntegerType
  dt_qboemployeeid?: number | null;
  // QboPayrollNameKey StringType
  dt_qbopayrollnamekey?: string | null;
  // QboTimeUserId IntegerType
  dt_qbotimeuserid?: number | null;
  // RecordNumber StringType
  dt_recordnumber?: string | null;
  // Social Security Number StringType
  dt_socialsecuritynumber?: string | null;
  // Start Date DateTimeType DateOnly:UserLocal
  dt_startdate?: Date | null;
  // System User LookupType
  dt_systemuser?: import("dataverse-ify").EntityReference | null;
  //  StringType
  dt_systemusername?: string | null;
  //  StringType
  dt_systemuseryominame?: string | null;
  // Tenure DecimalType
  dt_tenure_calcfd?: number | null;
  // Work Email StringType
  dt_workemail?: string | null;
  // Work Phone StringType
  dt_workphone?: string | null;
  // Work Phone Extension StringType
  dt_workphoneextension?: string | null;
  // Exchange Rate DecimalType Exchange rate for the currency associated with the entity with respect to the base currency.
  exchangerate?: number | null;
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
  // Status dt_employee_dt_employee_statecode Status of the Employee
  statecode?: import("../enums/dt_employee_dt_employee_statecode").dt_employee_dt_employee_statecode | null;
  // Status Reason dt_employee_dt_employee_statuscode Reason for the status of the Employee
  statuscode?: import("../enums/dt_employee_dt_employee_statuscode").dt_employee_dt_employee_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Currency LookupType Unique identifier of the currency associated with the entity.
  transactioncurrencyid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
