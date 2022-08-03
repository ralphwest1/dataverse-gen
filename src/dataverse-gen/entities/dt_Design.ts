/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity dt_Design
export const dt_designMetadata = {
  typeName: "mscrm.dt_design",
  logicalName: "dt_design",
  collectionName: "dt_designs",
  primaryIdAttribute: "dt_designid",
  attributeTypes: {
    // Numeric Types
    dt_createdbyexternalparty: "Integer",
    dt_labelheight: "Decimal",
    dt_labelwidth: "Decimal",
    dt_lastorder_rollup_state: "Integer",
    dt_orders_rollup: "Integer",
    dt_orders_rollup_state: "Integer",
    dt_perimeterinchesperlabel: "Decimal",
    dt_perimeterinchesperlabel_calculated: "Decimal",
    dt_perimeterinchesperlabel_exact: "Decimal",
    dt_primaryimage_timestamp: "BigInt",
    dt_quantityordered_rollup: "Decimal",
    dt_quantityordered_rollup_state: "Integer",
    dt_revenue_rollup: "Money",
    dt_revenue_rollup_base: "Money",
    dt_revenue_rollup_state: "Integer",
    dt_squareinchesperlabel: "Decimal",
    dt_squareinchesperlabel_calculated: "Decimal",
    dt_squareinchesperlabel_exact: "Decimal",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    dt_adhesive: "Optionset",
    dt_adhesivelaminate: "Optionset",
    dt_designtype: "Optionset",
    dt_dome: "Optionset",
    dt_domeheight: "Optionset",
    dt_emboss: "Optionset",
    dt_foilstamp: "Optionset",
    dt_layoutfor: "Optionset",
    dt_orderingoptions: "MultiSelect",
    dt_print: "Optionset",
    dt_printmaterial: "Optionset",
    dt_printsurface: "Optionset",
    dt_shape: "Optionset",
    dt_transfertape: "Optionset",
    dt_variabledata: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    dnbs_overriddencreatedon: "DateAndTime:UserLocal",
    dt_lastorder_rollup: "DateOnly:UserLocal",
    dt_lastorder_rollup_date: "DateAndTime:UserLocal",
    dt_orders_rollup_date: "DateAndTime:UserLocal",
    dt_quantityordered_rollup_date: "DateAndTime:UserLocal",
    dt_revenue_rollup_date: "DateAndTime:UserLocal",
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
    dt_DefaultLayout: ["mscrm.dt_designlayout"],
    dt_Account: ["mscrm.account"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
  },
};

export const dt_designCollections = {
  dt_design_rc_conversations: ["mscrm.rc_conversation"],
  dt_design_powf_webformactivities: ["mscrm.powf_webformactivity"],
  dt_design_po_creditcardtransactions: ["mscrm.po_creditcardtransaction"],
  dt_design_po_achtransactions: ["mscrm.po_achtransaction"],
  dt_design_msfp_surveyresponses: ["mscrm.msfp_surveyresponse"],
  dt_design_msfp_surveyinvites: ["mscrm.msfp_surveyinvite"],
  dt_design_msfp_alerts: ["mscrm.msfp_alert"],
  dt_design_msdyn_ocsessions: ["mscrm.msdyn_ocsession"],
  dt_design_msdyn_ocliveworkitems: ["mscrm.msdyn_ocliveworkitem"],
  dt_design_msdyn_bookingalerts: ["mscrm.msdyn_bookingalert"],
  dt_design_li_pointdrivepresentationvieweds: ["mscrm.li_pointdrivepresentationviewed"],
  dt_design_li_messages: ["mscrm.li_message"],
  dt_design_li_inmails: ["mscrm.li_inmail"],
  dt_design_dt_WebFormActivities: ["mscrm.dt_webformactivity"],
  dt_design_dt_Updates: ["mscrm.dt_update"],
  dt_design_dt_Notes: ["mscrm.dt_note"],
  dt_design_dt_GenericSampleses: ["mscrm.dt_genericsamples"],
  dt_design_chats: ["mscrm.chat"],
  dt_design_Tasks: ["mscrm.task"],
  dt_design_SyncErrors: ["mscrm.syncerror"],
  dt_design_SocialActivities: ["mscrm.socialactivity"],
  dt_design_SharePointDocumentLocations: ["mscrm.sharepointdocumentlocation"],
  dt_design_ServiceAppointments: ["mscrm.serviceappointment"],
  dt_design_RecurringAppointmentMasters: ["mscrm.recurringappointmentmaster"],
  dt_design_ProcessSession: ["mscrm.processsession"],
  dt_design_PrincipalObjectAttributeAccesses: ["mscrm.principalobjectattributeaccess"],
  dt_design_PhoneCalls: ["mscrm.phonecall"],
  dt_design_MailboxTrackingFolders: ["mscrm.mailboxtrackingfolder"],
  dt_design_Letters: ["mscrm.letter"],
  dt_design_Faxes: ["mscrm.fax"],
  dt_design_Emails: ["mscrm.email"],
  dt_design_DuplicateMatchingRecord: ["mscrm.duplicaterecord"],
  dt_design_DuplicateBaseRecord: ["mscrm.duplicaterecord"],
  dt_design_BulkDeleteFailures: ["mscrm.bulkdeletefailure"],
  dt_design_AsyncOperations: ["mscrm.asyncoperation"],
  dt_design_Appointments: ["mscrm.appointment"],
  dt_design_ActivityPointers: ["mscrm.activitypointer"],
  dt_OrderLine_Design_dt_Design: ["mscrm.dt_orderline"],
  dt_Incident_Design_dt_Design: ["mscrm.dt_incident"],
  dt_Design_MarketingPost: ["mscrm.dt_marketingpost"],
  dt_DesignProof_Design_dt_Design: ["mscrm.dt_designproof"],
  dt_DesignLayout_Design_dt_Design: ["mscrm.dt_designlayout"],
  dt_CartLine_Design: ["mscrm.dt_cartline"],
};

// Attribute constants
export const enum dt_DesignAttributes {
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  dnbs_overriddencreatedon = "dnbs_overriddencreatedon",
  dt_Account = "dt_account",
  dt_AccountName = "dt_accountname",
  dt_AccountYomiName = "dt_accountyominame",
  dt_Adhesive = "dt_adhesive",
  dt_AdhesiveLaminate = "dt_adhesivelaminate",
  dt_AutoNumber = "dt_autonumber",
  dt_AutoNumber_Prefixed = "dt_autonumber_prefixed",
  dt_ColorNotes = "dt_colornotes",
  dt_CornerRadius = "dt_cornerradius",
  dt_CreatedByExternalParty = "dt_createdbyexternalparty",
  dt_CustomerPartNumber = "dt_customerpartnumber",
  dt_DefaultLayout = "dt_defaultlayout",
  dt_DefaultLayoutName = "dt_defaultlayoutname",
  dt_Description = "dt_description",
  dt_Design_Summary = "dt_design_summary",
  dt_DesignId = "dt_designid",
  dt_DesignName = "dt_designname",
  dt_DesignOtherSpecifications_Summary = "dt_designotherspecifications_summary",
  dt_DesignSpecifications_Summary = "dt_designspecifications_summary",
  dt_DesignType = "dt_designtype",
  dt_Dome = "dt_dome",
  dt_DomeHeight = "dt_domeheight",
  dt_Emboss = "dt_emboss",
  dt_FoilStamp = "dt_foilstamp",
  dt_hasDocuments = "dt_hasdocuments",
  dt_ID = "dt_id",
  dt_ImageMetaData = "dt_imagemetadata",
  dt_LabelHeight = "dt_labelheight",
  dt_LabelWidth = "dt_labelwidth",
  dt_LastOrder_Rollup = "dt_lastorder_rollup",
  dt_LastOrder_Rollup_Date = "dt_lastorder_rollup_date",
  dt_LastOrder_Rollup_State = "dt_lastorder_rollup_state",
  dt_LayoutFor = "dt_layoutfor",
  dt_OrderingOptions = "dt_orderingoptions",
  dt_Orders_Rollup = "dt_orders_rollup",
  dt_Orders_Rollup_Date = "dt_orders_rollup_date",
  dt_Orders_Rollup_State = "dt_orders_rollup_state",
  dt_PerimeterInchesPerLabel = "dt_perimeterinchesperlabel",
  dt_PerimeterInchesPerLabel_Calculated = "dt_perimeterinchesperlabel_calculated",
  dt_PerimeterInchesPerLabel_Exact = "dt_perimeterinchesperlabel_exact",
  dt_PID = "dt_pid",
  dt_PID0 = "dt_pid0",
  dt_PrimaryImage = "dt_primaryimage",
  dt_PrimaryImage_Timestamp = "dt_primaryimage_timestamp",
  dt_PrimaryImage_URL = "dt_primaryimage_url",
  dt_PrimaryImageId = "dt_primaryimageid",
  dt_Print = "dt_print",
  dt_PrintMaterial = "dt_printmaterial",
  dt_PrintMaterial_Text = "dt_printmaterial_text",
  dt_PrintSurface = "dt_printsurface",
  dt_ProofFile = "dt_prooffile",
  dt_prooflink = "dt_prooflink",
  dt_QuantityOrdered_Rollup = "dt_quantityordered_rollup",
  dt_QuantityOrdered_Rollup_Date = "dt_quantityordered_rollup_date",
  dt_QuantityOrdered_Rollup_State = "dt_quantityordered_rollup_state",
  dt_Revenue_Rollup = "dt_revenue_rollup",
  dt_revenue_rollup_Base = "dt_revenue_rollup_base",
  dt_Revenue_Rollup_Date = "dt_revenue_rollup_date",
  dt_Revenue_Rollup_State = "dt_revenue_rollup_state",
  dt_Shape = "dt_shape",
  dt_SharePointFolder = "dt_sharepointfolder",
  dt_SquareInchesPerLabel = "dt_squareinchesperlabel",
  dt_SquareInchesPerLabel_Calculated = "dt_squareinchesperlabel_calculated",
  dt_SquareInchesPerLabel_Exact = "dt_squareinchesperlabel_exact",
  dt_TransferTape = "dt_transfertape",
  dt_VariableData = "dt_variabledata",
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
export interface dt_Design extends IEntity {
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
  // overriddencreatedon DateTimeType DateAndTime:UserLocal
  dnbs_overriddencreatedon?: Date | null;
  // Account [Required] LookupType
  dt_account?: import("dataverse-ify").EntityReference;
  //  StringType
  dt_accountname?: string | null;
  //  StringType
  dt_accountyominame?: string | null;
  // Adhesive dt_dsn_adhesive
  dt_adhesive?: import("../enums/dt_dsn_adhesive").dt_dsn_adhesive | null;
  // Other Adhesive dt_adhesivelaminate
  dt_adhesivelaminate?: import("../enums/dt_adhesivelaminate").dt_adhesivelaminate | null;
  // Auto Number StringType
  dt_autonumber?: string | null;
  // Auto Number - Prefixed StringType
  dt_autonumber_prefixed?: string | null;
  // Color Notes MemoType
  dt_colornotes?: string | null;
  // Corner Radius StringType
  dt_cornerradius?: string | null;
  // Created By (External Party) IntegerType
  dt_createdbyexternalparty?: number | null;
  // Customer Part Number StringType
  dt_customerpartnumber?: string | null;
  // Default Layout LookupType
  dt_defaultlayout?: import("dataverse-ify").EntityReference | null;
  //  StringType
  dt_defaultlayoutname?: string | null;
  // Description MemoType
  dt_description?: string | null;
  // Design - Summary StringType
  dt_design_summary?: string | null;
  // Design GUID UniqueidentifierType Unique identifier for entity instances
  dt_designid?: import("dataverse-ify").Guid | null;
  // Design Name StringType
  dt_designname?: string | null;
  // Design Other Specifications - Summary StringType
  dt_designotherspecifications_summary?: string | null;
  // Design Specifications - Summary StringType
  dt_designspecifications_summary?: string | null;
  // Design Type [Required] dt_dsn_designtype
  dt_designtype?: import("../enums/dt_dsn_designtype").dt_dsn_designtype;
  // Dome [Required] dt_dsn_dome
  dt_dome?: import("../enums/dt_dsn_dome").dt_dsn_dome;
  // Dome Height dt_domeheight
  dt_domeheight?: import("../enums/dt_domeheight").dt_domeheight | null;
  // Emboss dt_emboss
  dt_emboss?: import("../enums/dt_emboss").dt_emboss | null;
  // Foil Stamp dt_foilstamp
  dt_foilstamp?: import("../enums/dt_foilstamp").dt_foilstamp | null;
  // hasDocuments BooleanType
  dt_hasdocuments?: boolean | null;
  // Design ID StringType
  dt_id?: string | null;
  // ImageMetaData StringType
  dt_imagemetadata?: string | null;
  // Height [Required] DecimalType
  dt_labelheight?: number;
  // Width [Required] DecimalType
  dt_labelwidth?: number;
  // Last Order DateTimeType DateOnly:UserLocal
  dt_lastorder_rollup?: Date | null;
  // Last Order (Last Updated On) DateTimeType Last Updated time of rollup field Last Order. DateAndTime:UserLocal
  dt_lastorder_rollup_date?: Date | null;
  // Last Order (State) IntegerType State of rollup field Last Order.
  dt_lastorder_rollup_state?: number | null;
  // Layout For dt_layoutfor
  dt_layoutfor?: import("../enums/dt_layoutfor").dt_layoutfor | null;
  // Ordering Options dt_orderingoptions_design
  dt_orderingoptions?: import("../enums/dt_orderingoptions_design").dt_orderingoptions_design[] | null;
  // Orders IntegerType
  dt_orders_rollup?: number | null;
  // Orders (Last Updated On) DateTimeType Last Updated time of rollup field Orders. DateAndTime:UserLocal
  dt_orders_rollup_date?: Date | null;
  // Orders (State) IntegerType State of rollup field Orders.
  dt_orders_rollup_state?: number | null;
  // Perimeter Inches Per Label DecimalType
  dt_perimeterinchesperlabel?: number | null;
  // Perimeter Inches Per Label - Calculated DecimalType
  dt_perimeterinchesperlabel_calculated?: number | null;
  // Perimeter Inches Per Label - Exact DecimalType
  dt_perimeterinchesperlabel_exact?: number | null;
  // Design StringType Required name field
  dt_pid?: string | null;
  // Design PID StringType
  dt_pid0?: string | null;
  // Primary Image ImageType
  dt_primaryimage?: string | null;
  //  BigIntType
  dt_primaryimage_timestamp?: number | null;
  //  StringType
  dt_primaryimage_url?: string | null;
  //  UniqueidentifierType
  dt_primaryimageid?: import("dataverse-ify").Guid | null;
  // Print [Required] dt_dsn_print
  dt_print?: import("../enums/dt_dsn_print").dt_dsn_print;
  // Print Material [Required] dt_printmaterial
  dt_printmaterial?: import("../enums/dt_printmaterial").dt_printmaterial;
  // Print Material Text StringType
  dt_printmaterial_text?: string | null;
  // Print Surface dt_dsn_printsurface
  dt_printsurface?: import("../enums/dt_dsn_printsurface").dt_dsn_printsurface | null;
  // Proof File StringType
  dt_prooffile?: string | null;
  // Proof Link StringType
  dt_prooflink?: string | null;
  // Quantity Ordered DecimalType
  dt_quantityordered_rollup?: number | null;
  // Quantity Ordered (Last Updated On) DateTimeType Last Updated time of rollup field Quantity Ordered. DateAndTime:UserLocal
  dt_quantityordered_rollup_date?: Date | null;
  // Quantity Ordered (State) IntegerType State of rollup field Quantity Ordered.
  dt_quantityordered_rollup_state?: number | null;
  // Revenue MoneyType
  dt_revenue_rollup?: number | null;
  // Revenue (Base) MoneyType Value of the Revenue in base currency.
  dt_revenue_rollup_base?: number | null;
  // Revenue (Last Updated On) DateTimeType Last Updated time of rollup field Revenue. DateAndTime:UserLocal
  dt_revenue_rollup_date?: Date | null;
  // Revenue (State) IntegerType State of rollup field Revenue.
  dt_revenue_rollup_state?: number | null;
  // Shape [Required] dt_dsn_shape
  dt_shape?: import("../enums/dt_dsn_shape").dt_dsn_shape;
  // Share Point Folder BooleanType
  dt_sharepointfolder?: boolean | null;
  // Square Inches Per Label DecimalType
  dt_squareinchesperlabel?: number | null;
  // Square Inches Per Label - Calculated DecimalType
  dt_squareinchesperlabel_calculated?: number | null;
  // Square Inches Per Label - Exact DecimalType
  dt_squareinchesperlabel_exact?: number | null;
  // Transfer Tape dt_transfertape
  dt_transfertape?: import("../enums/dt_transfertape").dt_transfertape | null;
  // Variable  Data dt_dsn_variabledata
  dt_variabledata?: import("../enums/dt_dsn_variabledata").dt_dsn_variabledata | null;
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
  // Status dt_design_dt_design_statecode Status of the Design
  statecode?: import("../enums/dt_design_dt_design_statecode").dt_design_dt_design_statecode | null;
  // Status Reason dt_design_dt_design_statuscode Reason for the status of the Design
  statuscode?: import("../enums/dt_design_dt_design_statuscode").dt_design_dt_design_statuscode | null;
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
