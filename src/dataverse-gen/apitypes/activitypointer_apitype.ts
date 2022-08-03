/* eslint-disable*/

// Early Bound Interface for WebApi
export interface ActivityPointer_apitype {
  // Activity Additional Parameters MemoType Additional information provided by the external application as JSON. For internal use only.
  activityadditionalparams?: string | null;
  // Activity UniqueidentifierType Unique identifier of the activity.
  activityid?: string | null;
  // Activity Type EntityNameType Type of activity.
  activitytypecode?: string | null;
  // Actual Duration IntegerType Actual duration of the activity in minutes.
  actualdurationminutes?: number | null;
  "actualdurationminutes@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Actual End DateTimeType Actual end time of the activity. DateAndTime:UserLocal
  actualend?: string | null;
  "actualend@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Actual Start DateTimeType Actual start time of the activity. DateAndTime:UserLocal
  actualstart?: string | null;
  "actualstart@OData.Community.Display.V1.FormattedValue"?: string | null;
  // All Activity Parties PartyListType All activity parties associated with this activity.
  allparties?: any[] | null;
  // Social Channel socialprofile_community Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only.
  community?: import("../enums/socialprofile_community").socialprofile_community | null;
  "community@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Created By LookupType Unique identifier of the user who created the activity.
  _createdby_value?: string | null;
  "_createdby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_createdby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Date Created DateTimeType Date and time when the activity was created. DateAndTime:UserLocal
  createdon?: string | null;
  "createdon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the activitypointer.
  _createdonbehalfby_value?: string | null;
  "_createdonbehalfby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_createdonbehalfby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_createdonbehalfby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Date Delivery Last Attempted DateTimeType Date and time when the delivery of the activity was last attempted. DateAndTime:UserLocal
  deliverylastattemptedon?: string | null;
  "deliverylastattemptedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Delivery Priority activitypointer_deliveryprioritycode Priority of delivery of the activity to the email server.
  deliveryprioritycode?: import("../enums/activitypointer_deliveryprioritycode").activitypointer_deliveryprioritycode | null;
  "deliveryprioritycode@OData.Community.Display.V1.FormattedValue"?: string | null;
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
  "exchangerate@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Exchange WebLink StringType Shows the web link of Activity of type email.
  exchangeweblink?: string | null;
  // Recurring Instance Type activitypointer_activitypointer_instancetypecode Type of instance of a recurring series.
  instancetypecode?: import("../enums/activitypointer_activitypointer_instancetypecode").activitypointer_activitypointer_instancetypecode | null;
  "instancetypecode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Is Billed BooleanType Information regarding whether the activity was billed as part of resolving a case.
  isbilled?: boolean | null;
  "isbilled@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Is Private BooleanType For internal use only.
  ismapiprivate?: boolean | null;
  "ismapiprivate@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Is Regular Activity BooleanType Information regarding whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  "isregularactivity@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Is Workflow Created BooleanType Information regarding whether the activity was created from a workflow rule.
  isworkflowcreated?: boolean | null;
  "isworkflowcreated@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: string | null;
  "lastonholdtime@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Left Voice Mail BooleanType Left the voice mail
  leftvoicemail?: boolean | null;
  "leftvoicemail@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Modified By LookupType Unique identifier of user who last modified the activity.
  _modifiedby_value?: string | null;
  "_modifiedby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_modifiedby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_modifiedby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Last Updated DateTimeType Date and time when activity was last modified. DateAndTime:UserLocal
  modifiedon?: string | null;
  "modifiedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the activitypointer.
  _modifiedonbehalfby_value?: string | null;
  "_modifiedonbehalfby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_modifiedonbehalfby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_modifiedonbehalfby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  "onholdtime@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Owner OwnerType Unique identifier of the user or team who owns the activity.
  _ownerid_value?: string | null;
  "_ownerid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the activity.
  _owningbusinessunit_value?: string | null;
  "_owningbusinessunit_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_owningbusinessunit_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_owningbusinessunit_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier of the team that owns the activity.
  _owningteam_value?: string | null;
  "_owningteam_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  // Owning User LookupType Unique identifier of the user that owns the activity.
  _owninguser_value?: string | null;
  "_owninguser_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  // Delay activity processing until DateTimeType For internal use only. DateAndTime:UserLocal
  postponeactivityprocessinguntil?: string | null;
  "postponeactivityprocessinguntil@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Priority activitypointer_activitypointer_prioritycode Priority of the activity.
  prioritycode?: import("../enums/activitypointer_activitypointer_prioritycode").activitypointer_activitypointer_prioritycode | null;
  "prioritycode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Process UniqueidentifierType Unique identifier of the Process.
  processid?: string | null;
  // Regarding LookupType Unique identifier of the object with which the activity is associated.
  _regardingobjectid_value?: string | null;
  "_regardingobjectid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_regardingobjectid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_regardingobjectid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  regardingobjectidname?: string | null;
  //  StringType
  regardingobjectidyominame?: string | null;
  //  EntityNameType
  regardingobjecttypecode?: string | null;
  // Scheduled Duration IntegerType Scheduled duration of the activity, specified in minutes.
  scheduleddurationminutes?: number | null;
  "scheduleddurationminutes@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Due Date DateTimeType Scheduled end time of the activity. DateAndTime:UserLocal
  scheduledend?: string | null;
  "scheduledend@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Start Date DateTimeType Scheduled start time of the activity. DateAndTime:UserLocal
  scheduledstart?: string | null;
  "scheduledstart@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Sender's Mailbox LookupType Unique identifier of the mailbox associated with the sender of the email message.
  _sendermailboxid_value?: string | null;
  "_sendermailboxid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_sendermailboxid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_sendermailboxid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  sendermailboxidname?: string | null;
  // Date Sent DateTimeType Date and time when the activity was sent. DateAndTime:UserLocal
  senton?: string | null;
  "senton@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Series Id UniqueidentifierType Uniqueidentifier specifying the id of recurring series of an instance.
  seriesid?: string | null;
  // Service LookupType Unique identifier of an associated service.
  _serviceid_value?: string | null;
  "_serviceid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_serviceid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_serviceid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  serviceidname?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the case record.
  _slaid_value?: string | null;
  "_slaid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_slaid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_slaid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  _slainvokedid_value?: string | null;
  "_slainvokedid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_slainvokedid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_slainvokedid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: string | null;
  "sortdate@OData.Community.Display.V1.FormattedValue"?: string | null;
  // (Deprecated) Process Stage UniqueidentifierType Unique identifier of the Stage.
  stageid?: string | null;
  // Activity Status activitypointer_activitypointer_statecode Status of the activity.
  statecode?: import("../enums/activitypointer_activitypointer_statecode").activitypointer_activitypointer_statecode | null;
  "statecode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Status Reason activitypointer_activitypointer_statuscode Reason for the status of the activity.
  statuscode?: import("../enums/activitypointer_activitypointer_statuscode").activitypointer_activitypointer_statuscode | null;
  "statuscode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Subject [Required] StringType Subject associated with the activity.
  subject?: string;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  "timezoneruleversionnumber@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Currency LookupType Unique identifier of the currency associated with the activitypointer.
  _transactioncurrencyid_value?: string | null;
  "_transactioncurrencyid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  "utcconversiontimezonecode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Version Number BigIntType Version number of the activity.
  versionnumber?: number | null;
  "versionnumber@OData.Community.Display.V1.FormattedValue"?: string | null;
}
