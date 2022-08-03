/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity ActivityPointer
export const activitypointerMetadata = {
  typeName: "mscrm.activitypointer",
  logicalName: "activitypointer",
  collectionName: "activitypointers",
  primaryIdAttribute: "activityid",
  attributeTypes: {
    // Numeric Types
    actualdurationminutes: "Integer",
    exchangerate: "Decimal",
    onholdtime: "Integer",
    scheduleddurationminutes: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    community: "Optionset",
    deliveryprioritycode: "Optionset",
    instancetypecode: "Optionset",
    prioritycode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    actualend: "DateAndTime:UserLocal",
    actualstart: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
    deliverylastattemptedon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    postponeactivityprocessinguntil: "DateAndTime:UserLocal",
    scheduledend: "DateAndTime:UserLocal",
    scheduledstart: "DateAndTime:UserLocal",
    senton: "DateAndTime:UserLocal",
    sortdate: "DateAndTime:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    sla_activitypointer_sla: ["mscrm.sla"],
    serviceid: ["mscrm.service"],
    sendermailboxid: ["mscrm.mailbox"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    regardingobjectid: ["account","bookableresourcebooking","bookableresourcebookingheader","bulkoperation","campaign","campaignactivity","contact","contract","dt_artrequest","dt_canidate","dt_change","dt_design","dt_fixedasset","dt_incident","dt_order","dt_project","dt_purchaseorder","dt_todo","entitlement","entitlementtemplate","incident","interactionforemail","invoice","knowledgearticle","knowledgebaserecord","lead","msdyncrm_contentsettings","msdyncrm_customerjourney","msdyncrm_leadscoremodel","msdyncrm_linkedinaccount","msdyncrm_linkedinactivity","msdyncrm_linkedinfieldmapping","msdyncrm_linkedinform","msdyncrm_linkedinformanswer","msdyncrm_linkedinformquestion","msdyncrm_linkedinformsubmission","msdyncrm_linkedinleadmatchingstrategy","msdyncrm_linkedinuserprofile","msdyncrm_marketingdynamiccontentmetadata","msdyncrm_marketingemaildynamiccontentmetadata","msdyncrm_marketingemailtestsend","msdyncrm_migration","msdyncrm_uicconfig","msdyn_bookingalertstatus","msdyn_bookingrule","msdyn_customerasset","msdyn_playbookinstance","msdyn_postalbum","msdyn_resourceterritory","msdyn_salessuggestion","msdyn_systemuserschedulersetting","msdyn_timegroup","msdyn_timegroupdetail","msevtmgt_checkin","msevtmgt_event","msevtmgt_eventpurchase","msevtmgt_eventpurchaseattendee","msevtmgt_eventpurchasepass","msevtmgt_eventregistration","msevtmgt_hotel","msevtmgt_hotelroomallocation","msevtmgt_hotelroomreservation","msevtmgt_layout","msevtmgt_room","msevtmgt_session","msevtmgt_sessionregistration","msevtmgt_sessiontrack","msevtmgt_speaker","msevtmgt_speakerengagement","msevtmgt_sponsorablearticle","msevtmgt_sponsorship","msevtmgt_venue","msevtmgt_webinarconfiguration","msevtmgt_webinarprovider","opportunity","oss_notification","powf_doubleoptin","po_achaccount","po_creditcard","ptm_automergeworkingitems","quote","salesorder","site"],
    slainvokedid: ["sla"],
  },
};

export const activitypointerCollections = {
  slakpiinstance_activitypointer: ["mscrm.slakpiinstance"],
  activitypointer_connections2: ["mscrm.connection"],
  activitypointer_connections1: ["mscrm.connection"],
  activitypointer_activity_parties: ["mscrm.activityparty"],
  activitypointer_FileAttachments: ["mscrm.fileattachment"],
  activity_pointer_task: ["mscrm.task"],
  activity_pointer_socialactivity: ["mscrm.socialactivity"],
  activity_pointer_service_appointment: ["mscrm.serviceappointment"],
  activity_pointer_recurringappointmentmaster: ["mscrm.recurringappointmentmaster"],
  activity_pointer_recurrencerule: ["mscrm.recurrencerule"],
  activity_pointer_rc_conversation: ["mscrm.rc_conversation"],
  activity_pointer_quote_close: ["mscrm.quoteclose"],
  activity_pointer_powf_webformactivity: ["mscrm.powf_webformactivity"],
  activity_pointer_po_creditcardtransaction: ["mscrm.po_creditcardtransaction"],
  activity_pointer_po_achtransaction: ["mscrm.po_achtransaction"],
  activity_pointer_phonecall: ["mscrm.phonecall"],
  activity_pointer_order_close: ["mscrm.orderclose"],
  activity_pointer_opportunity_close: ["mscrm.opportunityclose"],
  activity_pointer_msfp_surveyresponse: ["mscrm.msfp_surveyresponse"],
  activity_pointer_msfp_surveyinvite: ["mscrm.msfp_surveyinvite"],
  activity_pointer_msfp_alert: ["mscrm.msfp_alert"],
  activity_pointer_msdyn_ocsession: ["mscrm.msdyn_ocsession"],
  activity_pointer_msdyn_ocliveworkitem: ["mscrm.msdyn_ocliveworkitem"],
  activity_pointer_msdyn_bookingalert: ["mscrm.msdyn_bookingalert"],
  activity_pointer_li_pointdrivepresentationviewed: ["mscrm.li_pointdrivepresentationviewed"],
  activity_pointer_li_message: ["mscrm.li_message"],
  activity_pointer_li_inmail: ["mscrm.li_inmail"],
  activity_pointer_letter: ["mscrm.letter"],
  activity_pointer_incident_resolution: ["mscrm.incidentresolution"],
  activity_pointer_fax: ["mscrm.fax"],
  activity_pointer_email: ["mscrm.email"],
  activity_pointer_dt_WebFormActivity: ["mscrm.dt_webformactivity"],
  activity_pointer_dt_Update: ["mscrm.dt_update"],
  activity_pointer_dt_Note: ["mscrm.dt_note"],
  activity_pointer_dt_GenericSamples: ["mscrm.dt_genericsamples"],
  activity_pointer_chat: ["mscrm.chat"],
  activity_pointer_campaignresponse: ["mscrm.campaignresponse"],
  activity_pointer_campaignactivity: ["mscrm.campaignactivity"],
  activity_pointer_appointment: ["mscrm.appointment"],
  activity_pointer_activity_mime_attachment: ["mscrm.activitymimeattachment"],
  activity_pointer_BulkOperation_logs: ["mscrm.bulkoperationlog"],
  activity_pointer_BulkOperation: ["mscrm.bulkoperation"],
  activity_campaignresponse: ["mscrm.campaignresponse"],
  CreatedActivity_BulkOperationLogs: ["mscrm.bulkoperationlog"],
  ActivityPointer_QueueItem: ["mscrm.queueitem"],
  ActivityPointer_CampaignActivityItems: ["mscrm.campaignactivityitem"],
  ActivityPointer_BulkDeleteFailures: ["mscrm.bulkdeletefailure"],
  ActivityPointer_AsyncOperations: ["mscrm.asyncoperation"],
},

// Attribute constants
export const enum ActivityPointerAttributes {
  ActivityAdditionalParams = "activityadditionalparams",
  ActivityId = "activityid",
  ActivityTypeCode = "activitytypecode",
  ActualDurationMinutes = "actualdurationminutes",
  ActualEnd = "actualend",
  ActualStart = "actualstart",
  allparties = "allparties",
  Community = "community",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  DeliveryLastAttemptedOn = "deliverylastattemptedon",
  DeliveryPriorityCode = "deliveryprioritycode",
  Description = "description",
  DescriptionBlobId = "descriptionblobid",
  DescriptionBlobId_Name = "descriptionblobid_name",
  ExchangeItemId = "exchangeitemid",
  ExchangeRate = "exchangerate",
  ExchangeWebLink = "exchangeweblink",
  InstanceTypeCode = "instancetypecode",
  IsBilled = "isbilled",
  IsMapiPrivate = "ismapiprivate",
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
  OnHoldTime = "onholdtime",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  PostponeActivityProcessingUntil = "postponeactivityprocessinguntil",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  RegardingObjectId = "regardingobjectid",
  RegardingObjectIdName = "regardingobjectidname",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  ScheduledEnd = "scheduledend",
  ScheduledStart = "scheduledstart",
  SenderMailboxId = "sendermailboxid",
  SenderMailboxIdName = "sendermailboxidname",
  SentOn = "senton",
  SeriesId = "seriesid",
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
  Subject = "subject",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface ActivityPointer extends IEntity {
  // Activity Additional Parameters MemoType Additional information provided by the external application as JSON. For internal use only.
  activityadditionalparams?: string | null;
  // Activity UniqueidentifierType Unique identifier of the activity.
  activityid?: import("dataverse-ify").Guid | null;
  // Activity Type EntityNameType Type of activity.
  activitytypecode?: string | null;
  // Actual Duration IntegerType Actual duration of the activity in minutes.
  actualdurationminutes?: number | null;
  // Actual End DateTimeType Actual end time of the activity. DateAndTime:UserLocal
  actualend?: Date | null;
  // Actual Start DateTimeType Actual start time of the activity. DateAndTime:UserLocal
  actualstart?: Date | null;
  // All Activity Parties PartyListType All activity parties associated with this activity.
  allparties?: import("dataverse-ify").ActivityParty[] | null;
  // Social Channel socialprofile_community Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only.
  community?: import("../enums/socialprofile_community").socialprofile_community | null;
  // Created By LookupType Unique identifier of the user who created the activity.
  createdby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Date Created DateTimeType Date and time when the activity was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the activitypointer.
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Date Delivery Last Attempted DateTimeType Date and time when the delivery of the activity was last attempted. DateAndTime:UserLocal
  deliverylastattemptedon?: Date | null;
  // Delivery Priority activitypointer_deliveryprioritycode Priority of delivery of the activity to the email server.
  deliveryprioritycode?: import("../enums/activitypointer_deliveryprioritycode").activitypointer_deliveryprioritycode | null;
  // Description MemoType Description of the activity.
  description?: string | null;
  // Description File Id FileType File that contains description content.
  descriptionblobid?: FileType | null;
  //  StringType
  descriptionblobid_name?: string | null;
  // Exchange Item ID StringType The message id of activity which is returned from Exchange Server.
  exchangeitemid?: string | null;
  // Exchange Rate DecimalType Exchange rate for the currency associated with the activitypointer with respect to the base currency.
  exchangerate?: number | null;
  // Exchange WebLink StringType Shows the web link of Activity of type email.
  exchangeweblink?: string | null;
  // Recurring Instance Type activitypointer_activitypointer_instancetypecode Type of instance of a recurring series.
  instancetypecode?: import("../enums/activitypointer_activitypointer_instancetypecode").activitypointer_activitypointer_instancetypecode | null;
  // Is Billed BooleanType Information regarding whether the activity was billed as part of resolving a case.
  isbilled?: boolean | null;
  // Is Private BooleanType For internal use only.
  ismapiprivate?: boolean | null;
  // Is Regular Activity BooleanType Information regarding whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  // Is Workflow Created BooleanType Information regarding whether the activity was created from a workflow rule.
  isworkflowcreated?: boolean | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Left Voice Mail BooleanType Left the voice mail
  leftvoicemail?: boolean | null;
  // Modified By LookupType Unique identifier of user who last modified the activity.
  modifiedby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Last Updated DateTimeType Date and time when activity was last modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the activitypointer.
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Owner OwnerType Unique identifier of the user or team who owns the activity.
  ownerid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the activity.
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier of the team that owns the activity.
  owningteam?: import("dataverse-ify").EntityReference | null;
  // Owning User LookupType Unique identifier of the user that owns the activity.
  owninguser?: import("dataverse-ify").EntityReference | null;
  // Delay activity processing until DateTimeType For internal use only. DateAndTime:UserLocal
  postponeactivityprocessinguntil?: Date | null;
  // Priority activitypointer_activitypointer_prioritycode Priority of the activity.
  prioritycode?: import("../enums/activitypointer_activitypointer_prioritycode").activitypointer_activitypointer_prioritycode | null;
  // Process UniqueidentifierType Unique identifier of the Process.
  processid?: import("dataverse-ify").Guid | null;
  // Regarding LookupType Unique identifier of the object with which the activity is associated.
  regardingobjectid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  regardingobjectidname?: string | null;
  //  StringType
  regardingobjectidyominame?: string | null;
  //  EntityNameType
  regardingobjecttypecode?: string | null;
  // Scheduled Duration IntegerType Scheduled duration of the activity, specified in minutes.
  scheduleddurationminutes?: number | null;
  // Due Date DateTimeType Scheduled end time of the activity. DateAndTime:UserLocal
  scheduledend?: Date | null;
  // Start Date DateTimeType Scheduled start time of the activity. DateAndTime:UserLocal
  scheduledstart?: Date | null;
  // Sender's Mailbox LookupType Unique identifier of the mailbox associated with the sender of the email message.
  sendermailboxid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  sendermailboxidname?: string | null;
  // Date Sent DateTimeType Date and time when the activity was sent. DateAndTime:UserLocal
  senton?: Date | null;
  // Series Id UniqueidentifierType Uniqueidentifier specifying the id of recurring series of an instance.
  seriesid?: import("dataverse-ify").Guid | null;
  // Service LookupType Unique identifier of an associated service.
  serviceid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  serviceidname?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the case record.
  slaid?: import("dataverse-ify").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: Date | null;
  // (Deprecated) Process Stage UniqueidentifierType Unique identifier of the Stage.
  stageid?: import("dataverse-ify").Guid | null;
  // Activity Status activitypointer_activitypointer_statecode Status of the activity.
  statecode?: import("../enums/activitypointer_activitypointer_statecode").activitypointer_activitypointer_statecode | null;
  // Status Reason activitypointer_activitypointer_statuscode Reason for the status of the activity.
  statuscode?: import("../enums/activitypointer_activitypointer_statuscode").activitypointer_activitypointer_statuscode | null;
  // Subject [Required] StringType Subject associated with the activity.
  subject?: string;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Currency LookupType Unique identifier of the currency associated with the activitypointer.
  transactioncurrencyid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version number of the activity.
  versionnumber?: number | null;
}
