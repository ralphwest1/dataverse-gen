/* eslint-disable*/

// Early Bound Interface for WebApi
export interface PhoneCall_apitype {
  // Additional Parameters MemoType For internal use only.
  activityadditionalparams?: string | null;
  // Phone Call UniqueidentifierType Unique identifier of the phone call activity.
  activityid?: string | null;
  // Activity Type EntityNameType Shows the type of activity.
  activitytypecode?: string | null;
  // Duration IntegerType Type the number of minutes spent on the phone call. The duration is used in reporting.
  actualdurationminutes?: number | null;
  "actualdurationminutes@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Actual End DateTimeType Enter the actual end date and time of the phone call. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the phone call. DateAndTime:UserLocal
  actualend?: string | null;
  "actualend@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Actual Start DateTimeType Enter the actual start date and time for the phone call. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the phone call. DateAndTime:UserLocal
  actualstart?: string | null;
  "actualstart@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Category StringType Type a category to identify the phone call type, such as lead gathering or customer follow-up, to tie the phone call to a business group or function.
  category?: string | null;
  // Created By LookupType Shows who created the record.
  _createdby_value?: string | null;
  "_createdby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_createdby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: string | null;
  "createdon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  _createdonbehalfby_value?: string | null;
  "_createdonbehalfby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_createdonbehalfby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_createdonbehalfby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Description MemoType Type additional information to describe the phone call, such as the primary message or the products and services discussed.
  description?: string | null;
  // Direction BooleanType Select the direction of the phone call as incoming or outbound.
  directioncode?: boolean | null;
  "directioncode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // bit BooleanType
  dnbs_bit?: boolean | null;
  "dnbs_bit@OData.Community.Display.V1.FormattedValue"?: string | null;
  // overriddencreatedon DateTimeType DateAndTime:UserLocal
  dnbs_overriddencreatedon?: string | null;
  "dnbs_overriddencreatedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Call Outcome dt_calloutcome
  dt_calloutcome?: import("../enums/dt_calloutcome").dt_calloutcome | null;
  "dt_calloutcome@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Call Type dt_calltype Orignating Sales
  * An orignating call to a customer or a prospect with the purpose of generating a sales
Customer Service
  * A call dealing with order details
  * clarifying order quantites or art
  dt_calltype?: import("../enums/dt_calltype").dt_calltype | null;
  "dt_calltype@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Set Activity Status dt_setactivitystatus
  dt_setactivitystatus?: import("../enums/dt_setactivitystatus").dt_setactivitystatus | null;
  "dt_setactivitystatus@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Set End Time BooleanType
  dt_setendtime?: boolean | null;
  "dt_setendtime@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Set Start Time BooleanType
  dt_setstarttime?: boolean | null;
  "dt_setstarttime@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Zoho ID StringType
  dt_zohoid?: string | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  "exchangerate@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Call From [Required] PartyListType Enter the account, contact, lead, or user who made the phone call.
  from?: any[];
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  "importsequencenumber@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Is Billed BooleanType Information which specifies whether the phone call activity was billed as part of resolving a case.
  isbilled?: boolean | null;
  "isbilled@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Is Regular Activity BooleanType Information regarding whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  "isregularactivity@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Is Workflow Created BooleanType Indication which specifies if the phone call activity was created by a workflow rule.
  isworkflowcreated?: boolean | null;
  "isworkflowcreated@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: string | null;
  "lastonholdtime@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Left Voice Mail BooleanType Select whether a voice mail was left for the person.
  leftvoicemail?: boolean | null;
  "leftvoicemail@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Modified By LookupType Shows who last updated the record.
  _modifiedby_value?: string | null;
  "_modifiedby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_modifiedby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_modifiedby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: string | null;
  "modifiedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  _modifiedonbehalfby_value?: string | null;
  "_modifiedonbehalfby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_modifiedonbehalfby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_modifiedonbehalfby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // ActivityId StringType
  msdyncrm_activityid?: string | null;
  // Customer journey iteration LookupType Customer journey iteration
  _msdyncrm_associatedcustomerjourneyiteration_value?: string | null;
  "_msdyncrm_associatedcustomerjourneyiteration_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_msdyncrm_associatedcustomerjourneyiteration_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_msdyncrm_associatedcustomerjourneyiteration_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  msdyncrm_associatedcustomerjourneyiterationname?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  "onholdtime@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: string | null;
  "overriddencreatedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
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
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the phone call activity.
  _owningbusinessunit_value?: string | null;
  "_owningbusinessunit_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_owningbusinessunit_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_owningbusinessunit_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier of the team that owns the phone call activity.
  _owningteam_value?: string | null;
  "_owningteam_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  // Owning User LookupType Unique identifier of the user that owns the phone call activity.
  _owninguser_value?: string | null;
  "_owninguser_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  // Phone Number StringType Type the phone number.
  phonenumber?: string | null;
  // Priority phonecall_phonecall_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/phonecall_phonecall_prioritycode").phonecall_phonecall_prioritycode | null;
  "prioritycode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: string | null;
  // Call Duration StringType Custom field for call duraction
  rc_callduration?: string | null;
  // Call Recording StringType Custom field for call recording
  rc_callrecording?: string | null;
  // Call Status StringType Custom field for call status
  rc_callstatus?: string | null;
  // Regarding LookupType Choose the record that the phone call relates to.
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
  // Scheduled Duration IntegerType Scheduled duration of the phone call activity, specified in minutes.
  scheduleddurationminutes?: number | null;
  "scheduleddurationminutes@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Due Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledend?: string | null;
  "scheduledend@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Start Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledstart?: string | null;
  "scheduledstart@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Service LookupType Unique identifier for an associated service.
  _serviceid_value?: string | null;
  "_serviceid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_serviceid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_serviceid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  serviceidname?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Phone Call record.
  _slaid_value?: string | null;
  "_slaid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_slaid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_slaid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  // Last SLA applied LookupType Last SLA that was applied to this Phone Call. This field is for internal use only.
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
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: string | null;
  // Activity Status phonecall_phonecall_statecode Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited.
  statecode?: import("../enums/phonecall_phonecall_statecode").phonecall_phonecall_statecode | null;
  "statecode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Status Reason phonecall_phonecall_statuscode Select the phone call's status.
  statuscode?: import("../enums/phonecall_phonecall_statuscode").phonecall_phonecall_statuscode | null;
  "statuscode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Sub-Category StringType Type a subcategory to identify the phone call type and relate the activity to a specific product, sales region, business group, or other function.
  subcategory?: string | null;
  // Subject [Required] StringType Type a short description about the objective or primary topic of the phone call.
  subject?: string;
  // Subscription UniqueidentifierType For internal use only.
  subscriptionid?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  "timezoneruleversionnumber@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Call To [Required] PartyListType Enter the account, contact, lead, or user recipients of the phone call.
  to?: any[];
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
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
  // Version Number BigIntType Version number of the phone call activity.
  versionnumber?: number | null;
  "versionnumber@OData.Community.Display.V1.FormattedValue"?: string | null;
}
