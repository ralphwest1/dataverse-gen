/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity PhoneCall
export const phonecallMetadata = {
  typeName: "mscrm.phonecall",
  logicalName: "phonecall",
  collectionName: "phonecalls",
  primaryIdAttribute: "activityid",
  attributeTypes: {
    // Numeric Types
    actualdurationminutes: "Integer",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    onholdtime: "Integer",
    scheduleddurationminutes: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    dt_calloutcome: "Optionset",
    dt_calltype: "Optionset",
    dt_setactivitystatus: "Optionset",
    prioritycode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    actualend: "DateAndTime:UserLocal",
    actualstart: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
    dnbs_overriddencreatedon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    scheduledend: "DateAndTime:UserLocal",
    scheduledstart: "DateAndTime:UserLocal",
    sortdate: "DateAndTime:UserLocal",
  },
  navigation: {
    stageid_processstage: ["mscrm.processstage"],
    sla_phonecall_sla: ["mscrm.sla"],
    ownerid_phonecall: ["mscrm.principal"],
    activityid_activitypointer: ["mscrm.activitypointer"],
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    msdyncrm_associatedcustomerjourneyiteration: ["msdyncrm_customerjourneyiteration"],
    owningbusinessunit: ["businessunit"],
    owningteam: ["team"],
    owninguser: ["systemuser"],
    regardingobjectid: ["account","bookableresourcebooking","bookableresourcebookingheader","bulkoperation","campaign","campaignactivity","contact","contract","dt_artrequest","dt_canidate","dt_change","dt_design","dt_fixedasset","dt_incident","dt_order","dt_project","dt_purchaseorder","dt_todo","entitlement","entitlementtemplate","incident","invoice","knowledgearticle","knowledgebaserecord","lead","msdyncrm_contentsettings","msdyncrm_customerjourney","msdyncrm_leadscoremodel","msdyncrm_linkedinaccount","msdyncrm_linkedinactivity","msdyncrm_linkedinfieldmapping","msdyncrm_linkedinform","msdyncrm_linkedinformanswer","msdyncrm_linkedinformquestion","msdyncrm_linkedinformsubmission","msdyncrm_linkedinleadmatchingstrategy","msdyncrm_linkedinuserprofile","msdyncrm_marketingdynamiccontentmetadata","msdyncrm_marketingemaildynamiccontentmetadata","msdyncrm_marketingemailtestsend","msdyncrm_migration","msdyncrm_uicconfig","msdyn_bookingalertstatus","msdyn_bookingrule","msdyn_customerasset","msdyn_playbookinstance","msdyn_postalbum","msdyn_resourceterritory","msdyn_salessuggestion","msdyn_systemuserschedulersetting","msdyn_timegroup","msdyn_timegroupdetail","msevtmgt_checkin","msevtmgt_event","msevtmgt_eventpurchase","msevtmgt_eventpurchaseattendee","msevtmgt_eventpurchasepass","msevtmgt_eventregistration","msevtmgt_hotel","msevtmgt_hotelroomallocation","msevtmgt_hotelroomreservation","msevtmgt_layout","msevtmgt_room","msevtmgt_session","msevtmgt_sessionregistration","msevtmgt_sessiontrack","msevtmgt_speaker","msevtmgt_speakerengagement","msevtmgt_sponsorablearticle","msevtmgt_sponsorship","msevtmgt_venue","msevtmgt_webinarconfiguration","msevtmgt_webinarprovider","opportunity","oss_notification","powf_doubleoptin","po_achaccount","po_creditcard","ptm_automergeworkingitems","quote","salesorder","site"],
    serviceid: ["service"],
    slainvokedid: ["sla"],
    transactioncurrencyid: ["transactioncurrency"],
  },
};

export const phonecallCollections = {
  slakpiinstance_phonecall: ["mscrm.slakpiinstance"],
  phonecall_principalobjectattributeaccess: ["mscrm.principalobjectattributeaccess"],
  phonecall_connections2: ["mscrm.connection"],
  phonecall_connections1: ["mscrm.connection"],
  phonecall_campaignresponse: ["mscrm.campaignresponse"],
  phonecall_activity_parties: ["mscrm.activityparty"],
  phonecall_actioncard: ["mscrm.actioncard"],
  phonecall_PostRegardings: ["mscrm.postregarding"],
  phonecall_PostFollows: ["mscrm.postfollow"],
  msdyn_phonecall_msdyn_recording_phone_call_activity: ["mscrm.msdyn_recording"],
  PhoneCall_SyncErrors: ["mscrm.syncerror"],
  PhoneCall_QueueItem: ["mscrm.queueitem"],
  PhoneCall_ProcessSessions: ["mscrm.processsession"],
  PhoneCall_DuplicateMatchingRecord: ["mscrm.duplicaterecord"],
  PhoneCall_DuplicateBaseRecord: ["mscrm.duplicaterecord"],
  PhoneCall_BulkDeleteFailures: ["mscrm.bulkdeletefailure"],
  PhoneCall_AsyncOperations: ["mscrm.asyncoperation"],
  PhoneCall_Annotation: ["mscrm.annotation"],
};

// Attribute constants
export const enum PhoneCallAttributes {
  ActivityAdditionalParams = "activityadditionalparams",
  ActivityId = "activityid",
  ActivityTypeCode = "activitytypecode",
  ActualDurationMinutes = "actualdurationminutes",
  ActualEnd = "actualend",
  ActualStart = "actualstart",
  Category = "category",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  Description = "description",
  DirectionCode = "directioncode",
  dnbs_bit = "dnbs_bit",
  dnbs_overriddencreatedon = "dnbs_overriddencreatedon",
  dt_CallOutcome = "dt_calloutcome",
  dt_CallType = "dt_calltype",
  dt_SetActivityStatus = "dt_setactivitystatus",
  dt_SetEndTime = "dt_setendtime",
  dt_SetStartTime = "dt_setstarttime",
  dt_ZohoID = "dt_zohoid",
  ExchangeRate = "exchangerate",
  from = "from",
  ImportSequenceNumber = "importsequencenumber",
  IsBilled = "isbilled",
  IsRegularActivity = "isregularactivity",
  IsWorkflowCreated = "isworkflowcreated",
  LastOnHoldTime = "lastonholdtime",
  LeftVoiceMail = "leftvoicemail",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msdyncrm_ActivityId = "msdyncrm_activityid",
  msdyncrm_associatedcustomerjourneyiteration = "msdyncrm_associatedcustomerjourneyiteration",
  msdyncrm_associatedcustomerjourneyiterationName = "msdyncrm_associatedcustomerjourneyiterationname",
  OnHoldTime = "onholdtime",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  PhoneNumber = "phonenumber",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  rc_CallDuration = "rc_callduration",
  rc_callrecording = "rc_callrecording",
  rc_CallStatus = "rc_callstatus",
  RegardingObjectId = "regardingobjectid",
  RegardingObjectIdName = "regardingobjectidname",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  ScheduledEnd = "scheduledend",
  ScheduledStart = "scheduledstart",
  ServiceId = "serviceid",
  ServiceIdName = "serviceidname",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  SortDate = "sortdate",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  Subcategory = "subcategory",
  Subject = "subject",
  SubscriptionId = "subscriptionid",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  to = "to",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface PhoneCall extends IEntity {
  // Additional Parameters MemoType For internal use only.
  activityadditionalparams?: string | null;
  // Phone Call UniqueidentifierType Unique identifier of the phone call activity.
  activityid?: import("dataverse-ify").Guid | null;
  // Activity Type EntityNameType Shows the type of activity.
  activitytypecode?: string | null;
  // Duration IntegerType Type the number of minutes spent on the phone call. The duration is used in reporting.
  actualdurationminutes?: number | null;
  // Actual End DateTimeType Enter the actual end date and time of the phone call. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the phone call. DateAndTime:UserLocal
  actualend?: Date | null;
  // Actual Start DateTimeType Enter the actual start date and time for the phone call. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the phone call. DateAndTime:UserLocal
  actualstart?: Date | null;
  // Category StringType Type a category to identify the phone call type, such as lead gathering or customer follow-up, to tie the phone call to a business group or function.
  category?: string | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Description MemoType Type additional information to describe the phone call, such as the primary message or the products and services discussed.
  description?: string | null;
  // Direction BooleanType Select the direction of the phone call as incoming or outbound.
  directioncode?: boolean | null;
  // bit BooleanType
  dnbs_bit?: boolean | null;
  // overriddencreatedon DateTimeType DateAndTime:UserLocal
  dnbs_overriddencreatedon?: Date | null;
  // Call Outcome dt_calloutcome
  dt_calloutcome?: import("../enums/dt_calloutcome").dt_calloutcome | null;
  // Call Type dt_calltype Orignating Sales  * An orignating call to a customer or a prospect with the purpose of generating a salesCustomer Service  * A call dealing with order details  * clarifying order quantites or art
  dt_calltype?: import("../enums/dt_calltype").dt_calltype | null;
  // Set Activity Status dt_setactivitystatus
  dt_setactivitystatus?: import("../enums/dt_setactivitystatus").dt_setactivitystatus | null;
  // Set End Time BooleanType
  dt_setendtime?: boolean | null;
  // Set Start Time BooleanType
  dt_setstarttime?: boolean | null;
  // Zoho ID StringType
  dt_zohoid?: string | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Call From [Required] PartyListType Enter the account, contact, lead, or user who made the phone call.
  from?: import("dataverse-ify").ActivityParty[];
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Is Billed BooleanType Information which specifies whether the phone call activity was billed as part of resolving a case.
  isbilled?: boolean | null;
  // Is Regular Activity BooleanType Information regarding whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  // Is Workflow Created BooleanType Indication which specifies if the phone call activity was created by a workflow rule.
  isworkflowcreated?: boolean | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Left Voice Mail BooleanType Select whether a voice mail was left for the person.
  leftvoicemail?: boolean | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // ActivityId StringType
  msdyncrm_activityid?: string | null;
  // Customer journey iteration LookupType Customer journey iteration
  msdyncrm_associatedcustomerjourneyiteration?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msdyncrm_associatedcustomerjourneyiterationname?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the phone call activity.
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier of the team that owns the phone call activity.
  owningteam?: import("dataverse-ify").EntityReference | null;
  // Owning User LookupType Unique identifier of the user that owns the phone call activity.
  owninguser?: import("dataverse-ify").EntityReference | null;
  // Phone Number StringType Type the phone number.
  phonenumber?: string | null;
  // Priority phonecall_phonecall_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/phonecall_phonecall_prioritycode").phonecall_phonecall_prioritycode | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("dataverse-ify").Guid | null;
  // Call Duration StringType Custom field for call duraction
  rc_callduration?: string | null;
  // Call Recording StringType Custom field for call recording
  rc_callrecording?: string | null;
  // Call Status StringType Custom field for call status
  rc_callstatus?: string | null;
  // Regarding LookupType Choose the record that the phone call relates to.
  regardingobjectid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  regardingobjectidname?: string | null;
  //  StringType
  regardingobjectidyominame?: string | null;
  //  EntityNameType
  regardingobjecttypecode?: string | null;
  // Scheduled Duration IntegerType Scheduled duration of the phone call activity, specified in minutes.
  scheduleddurationminutes?: number | null;
  // Due Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledend?: Date | null;
  // Start Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledstart?: Date | null;
  // Service LookupType Unique identifier for an associated service.
  serviceid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  serviceidname?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Phone Call record.
  slaid?: import("dataverse-ify").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this Phone Call. This field is for internal use only.
  slainvokedid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: Date | null;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("dataverse-ify").Guid | null;
  // Activity Status phonecall_phonecall_statecode Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited.
  statecode?: import("../enums/phonecall_phonecall_statecode").phonecall_phonecall_statecode | null;
  // Status Reason phonecall_phonecall_statuscode Select the phone call's status.
  statuscode?: import("../enums/phonecall_phonecall_statuscode").phonecall_phonecall_statuscode | null;
  // Sub-Category StringType Type a subcategory to identify the phone call type and relate the activity to a specific product, sales region, business group, or other function.
  subcategory?: string | null;
  // Subject [Required] StringType Type a short description about the objective or primary topic of the phone call.
  subject?: string;
  // Subscription UniqueidentifierType For internal use only.
  subscriptionid?: import("dataverse-ify").Guid | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Call To [Required] PartyListType Enter the account, contact, lead, or user recipients of the phone call.
  to?: import("dataverse-ify").ActivityParty[];
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version number of the phone call activity.
  versionnumber?: number | null;
}
