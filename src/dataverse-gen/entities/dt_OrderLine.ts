/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity dt_OrderLine
export const dt_orderlineMetadata = {
  typeName: "mscrm.dt_orderline",
  logicalName: "dt_orderline",
  collectionName: "dt_orderlines",
  primaryIdAttribute: "dt_orderlineid",
  attributeTypes: {
    // Numeric Types
    dt_boxes_estimate: "Decimal",
    dt_costperlabel: "Money",
    dt_costperlabel_base: "Money",
    dt_costperlabel_estimate: "Money",
    dt_costperlabel_estimate_base: "Money",
    dt_costpersquareinch: "Money",
    dt_costpersquareinch_base: "Money",
    dt_costpersquareinch_estimate: "Money",
    dt_costpersquareinch_estimate_base: "Money",
    dt_defaulthourlyrate: "Money",
    dt_defaulthourlyrate_base: "Money",
    dt_defect_cost: "Money",
    dt_defect_cost_base: "Money",
    dt_defect_labels: "Integer",
    dt_defect_percent: "Decimal",
    dt_defect_squareinches: "Integer",
    dt_defect_squareinchesinspected: "Decimal",
    dt_inkmillilitersperorder: "Decimal",
    dt_inkmilliliterspersheet: "Decimal",
    dt_labelsperdispense: "Integer",
    dt_labelspersheet: "Integer",
    dt_labelsquareinchespersheet: "Decimal",
    dt_orderedlabels: "Decimal",
    dt_orderedsheets: "Decimal",
    dt_orderedsquareinches: "Decimal",
    dt_orderlinecount: "Integer",
    dt_overagelabels: "Decimal",
    dt_overagelabels_estimate: "Decimal",
    dt_overagepercent: "Decimal",
    dt_overagepercent_estimate: "Decimal",
    dt_overagepercent_minimum: "Decimal",
    dt_overagesheets: "Decimal",
    dt_overagesheets_estimate: "Decimal",
    dt_overagesquareinches: "Decimal",
    dt_overagesquareinches_estimate: "Decimal",
    dt_price_override: "Money",
    dt_price_override_base: "Money",
    dt_priceadjustment_bypercent: "Decimal",
    dt_priceadjustment_bytotal: "Money",
    dt_priceadjustment_bytotal_base: "Money",
    dt_priceadjustment_perlabel: "Money",
    dt_priceadjustment_perlabel_base: "Money",
    dt_priceadjustment_persquareinch: "Money",
    dt_priceadjustment_persquareinch_base: "Money",
    dt_pricepersquareinch: "Money",
    dt_pricepersquareinch_base: "Money",
    dt_priceperunit: "Money",
    dt_priceperunit_adjustments: "Money",
    dt_priceperunit_adjustments_base: "Money",
    dt_priceperunit_base: "Money",
    dt_priceperunit_baseprice: "Money",
    dt_priceperunit_baseprice_base: "Money",
    dt_priceperunit_calcfd: "Money",
    dt_priceperunit_calcfd_base: "Money",
    dt_priceperunit_default: "Decimal",
    dt_priceperunit_options: "Money",
    dt_priceperunit_options_base: "Money",
    dt_primaryimage_timestamp: "BigInt",
    dt_quantityoverage: "Decimal",
    dt_quantityshipped: "Decimal",
    dt_sheetsperboard: "Integer",
    dt_squareinchesperlabel: "Decimal",
    dt_substratemsiperorder: "Decimal",
    dt_substratesquareinchespersheet: "Decimal",
    dt_taskminutes_actual: "Integer",
    dt_taskminutes_estimate: "Integer",
    dt_taskminutes_remaining: "Integer",
    dt_totalcost: "Money",
    dt_totalcost_art: "Money",
    dt_totalcost_art_base: "Money",
    dt_totalcost_base: "Money",
    dt_totalcost_estimate: "Money",
    dt_totalcost_estimate_base: "Money",
    dt_totalhours: "Decimal",
    dt_totalhours_estimate: "Decimal",
    dt_totallabels: "Decimal",
    dt_totalmargin: "Money",
    dt_totalmargin_base: "Money",
    dt_totalmargin_estimate: "Money",
    dt_totalmargin_estimate_base: "Money",
    dt_totalmarginpercent: "Decimal",
    dt_totalmarginpercent_estimate: "Decimal",
    dt_totalprice: "Money",
    dt_totalprice_adjustmentpercent: "Decimal",
    dt_totalprice_adjustments: "Money",
    dt_totalprice_adjustments_base: "Money",
    dt_totalprice_base: "Money",
    dt_totalprice_calcfd: "Money",
    dt_totalprice_calcfd_base: "Money",
    dt_totalprice_default: "Decimal",
    dt_totalsheets: "Decimal",
    dt_totalsquareinches: "Decimal",
    dt_totaltime: "Integer",
    dt_totaltime_art: "Integer",
    dt_totaltime_estimate: "Integer",
    dt_urethanelitersperorder: "Decimal",
    dt_weight_estimate: "Decimal",
    entityimage_timestamp: "BigInt",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    dt_dispensetype: "Optionset",
    dt_labelsperdispensetype: "Optionset",
    dt_orderlinetype: "Optionset",
    dt_orderpriority: "Optionset",
    dt_ordertasklist: "MultiSelect",
    dt_overagetype: "Optionset",
    dt_priceadjustmenttype: "Optionset",
    dt_pricingtype: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    dnbs_overriddencreatedon: "DateAndTime:UserLocal",
    dt_datefulfilled_flow: "DateOnly:UserLocal",
    dt_orderduedate: "DateOnly:UserLocal",
    dt_taskcompletetime: "DateAndTime:UserLocal",
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
    dt_Order: ["mscrm.dt_order"],
    dt_DesignLayout: ["mscrm.dt_designlayout"],
    dt_Design: ["mscrm.dt_design"],
    dt_Account: ["mscrm.account"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
  },
};

export const dt_orderlineCollections = {
  dt_orderline_SyncErrors: ["mscrm.syncerror"],
  dt_orderline_ProcessSession: ["mscrm.processsession"],
  dt_orderline_PrincipalObjectAttributeAccesses: ["mscrm.principalobjectattributeaccess"],
  dt_orderline_MailboxTrackingFolders: ["mscrm.mailboxtrackingfolder"],
  dt_orderline_DuplicateMatchingRecord: ["mscrm.duplicaterecord"],
  dt_orderline_DuplicateBaseRecord: ["mscrm.duplicaterecord"],
  dt_orderline_BulkDeleteFailures: ["mscrm.bulkdeletefailure"],
  dt_orderline_AsyncOperations: ["mscrm.asyncoperation"],
  dt_msdyn_resourcerequirement_OrderLine_dt_Or: ["mscrm.msdyn_resourcerequirement"],
  dt_OrderLine_dt_DesignProof: ["mscrm.dt_designproof"],
  dt_OrderLine_OrderTaskEstimate: ["mscrm.dt_ordertaskestimate"],
  dt_OrderLine_OrderTask: ["mscrm.dt_ordertask"],
  dt_OrderLine_OrderEstimateLine: ["mscrm.dt_orderestimateline"],
  dt_OrderLine_CostItemDetail: ["mscrm.dt_costitemdetail"],
  dt_OrderDefects_OrderLine_dt_OrderLine: ["mscrm.dt_orderdefects"],
  dt_BookableResourceBooking_dt_OrderLine_dt_O: ["mscrm.bookableresourcebooking"],
};

// Attribute constants
export const enum dt_OrderLineAttributes {
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
  dt_AdminNotes = "dt_adminnotes",
  dt_AutoNumber = "dt_autonumber",
  dt_AutoNumber_Prefixed = "dt_autonumber_prefixed",
  dt_Boxes_Estimate = "dt_boxes_estimate",
  dt_CostMessage = "dt_costmessage",
  dt_CostPerLabel = "dt_costperlabel",
  dt_costperlabel_Base = "dt_costperlabel_base",
  dt_CostPerLabel_Estimate = "dt_costperlabel_estimate",
  dt_costperlabel_estimate_Base = "dt_costperlabel_estimate_base",
  dt_CostPerSquareInch = "dt_costpersquareinch",
  dt_costpersquareinch_Base = "dt_costpersquareinch_base",
  dt_CostPerSquareInch_Estimate = "dt_costpersquareinch_estimate",
  dt_costpersquareinch_estimate_Base = "dt_costpersquareinch_estimate_base",
  dt_CreatedByExternalParty = "dt_createdbyexternalparty",
  dt_DateFulfilled_Flow = "dt_datefulfilled_flow",
  dt_DefaultHourlyRate = "dt_defaulthourlyrate",
  dt_defaulthourlyrate_Base = "dt_defaulthourlyrate_base",
  dt_Defect_Cost = "dt_defect_cost",
  dt_defect_cost_Base = "dt_defect_cost_base",
  dt_Defect_Labels = "dt_defect_labels",
  dt_Defect_Percent = "dt_defect_percent",
  dt_Defect_SquareInches = "dt_defect_squareinches",
  dt_Defect_SquareInchesInspected = "dt_defect_squareinchesinspected",
  dt_Design = "dt_design",
  dt_Design_Summary = "dt_design_summary",
  dt_DesignLayout = "dt_designlayout",
  dt_DesignLayout_Summary = "dt_designlayout_summary",
  dt_DesignLayoutName = "dt_designlayoutname",
  dt_DesignName = "dt_designname",
  dt_DesignSpecifications_Summary = "dt_designspecifications_summary",
  dt_DispenseIsRegistered = "dt_dispenseisregistered",
  dt_DispensePattern = "dt_dispensepattern",
  dt_DispenseType = "dt_dispensetype",
  dt_InkMillilitersPerOrder = "dt_inkmillilitersperorder",
  dt_InkMillilitersPerSheet = "dt_inkmilliliterspersheet",
  dt_IsAdjustedProductionSpecifications = "dt_isadjustedproductionspecifications",
  dt_IsLockedPrice = "dt_islockedprice",
  dt_LabelsPerDispense = "dt_labelsperdispense",
  dt_LabelsPerDispenseType = "dt_labelsperdispensetype",
  dt_LabelsPerSheet = "dt_labelspersheet",
  dt_LabelSquareInchesPerSheet = "dt_labelsquareinchespersheet",
  dt_Order = "dt_order",
  dt_Order_Summary = "dt_order_summary",
  dt_OrderDueDate = "dt_orderduedate",
  dt_OrderedLabels = "dt_orderedlabels",
  dt_OrderedSheets = "dt_orderedsheets",
  dt_OrderedSquareInches = "dt_orderedsquareinches",
  dt_OrderLineCount = "dt_orderlinecount",
  dt_OrderLineId = "dt_orderlineid",
  dt_OrderLineType = "dt_orderlinetype",
  dt_OrderName = "dt_ordername",
  dt_OrderPriority = "dt_orderpriority",
  dt_OrderStatus = "dt_orderstatus",
  dt_OrderTaskList = "dt_ordertasklist",
  dt_OverageLabels = "dt_overagelabels",
  dt_OverageLabels_Estimate = "dt_overagelabels_estimate",
  dt_OveragePercent = "dt_overagepercent",
  dt_OveragePercent_Estimate = "dt_overagepercent_estimate",
  dt_OveragePercent_Minimum = "dt_overagepercent_minimum",
  dt_OverageSheets = "dt_overagesheets",
  dt_OverageSheets_Estimate = "dt_overagesheets_estimate",
  dt_OverageSquareInches = "dt_overagesquareinches",
  dt_OverageSquareInches_Estimate = "dt_overagesquareinches_estimate",
  dt_OverageType = "dt_overagetype",
  dt_PID = "dt_pid",
  dt_Price_Override = "dt_price_override",
  dt_price_override_Base = "dt_price_override_base",
  dt_PriceAdjustment_ByPercent = "dt_priceadjustment_bypercent",
  dt_PriceAdjustment_ByTotal = "dt_priceadjustment_bytotal",
  dt_priceadjustment_bytotal_Base = "dt_priceadjustment_bytotal_base",
  dt_PriceAdjustment_PerLabel = "dt_priceadjustment_perlabel",
  dt_priceadjustment_perlabel_Base = "dt_priceadjustment_perlabel_base",
  dt_PriceAdjustment_PerSquareInch = "dt_priceadjustment_persquareinch",
  dt_priceadjustment_persquareinch_Base = "dt_priceadjustment_persquareinch_base",
  dt_PriceAdjustmentNote = "dt_priceadjustmentnote",
  dt_PriceAdjustmentType = "dt_priceadjustmenttype",
  dt_PriceMessage = "dt_pricemessage",
  dt_PricePerSquareInch = "dt_pricepersquareinch",
  dt_pricepersquareinch_Base = "dt_pricepersquareinch_base",
  dt_PricePerUnit = "dt_priceperunit",
  dt_PricePerUnit_Adjustments = "dt_priceperunit_adjustments",
  dt_priceperunit_adjustments_Base = "dt_priceperunit_adjustments_base",
  dt_priceperunit_Base = "dt_priceperunit_base",
  dt_PricePerUnit_BasePrice = "dt_priceperunit_baseprice",
  dt_priceperunit_baseprice_Base = "dt_priceperunit_baseprice_base",
  dt_PricePerUnit_CalcFd = "dt_priceperunit_calcfd",
  dt_priceperunit_calcfd_Base = "dt_priceperunit_calcfd_base",
  dt_PricePerUnit_Default = "dt_priceperunit_default",
  dt_PricePerUnit_Options = "dt_priceperunit_options",
  dt_priceperunit_options_Base = "dt_priceperunit_options_base",
  dt_PricingType = "dt_pricingtype",
  dt_PrimaryImage = "dt_primaryimage",
  dt_PrimaryImage_Timestamp = "dt_primaryimage_timestamp",
  dt_PrimaryImage_URL = "dt_primaryimage_url",
  dt_PrimaryImageId = "dt_primaryimageid",
  dt_QuantityOverage = "dt_quantityoverage",
  dt_QuantityShipped = "dt_quantityshipped",
  dt_SheetsPerBoard = "dt_sheetsperboard",
  dt_SquareInchesPerLabel = "dt_squareinchesperlabel",
  dt_SubstrateMSIPerOrder = "dt_substratemsiperorder",
  dt_SubstrateSquareInchesPerSheet = "dt_substratesquareinchespersheet",
  dt_TaskAssignedTo = "dt_taskassignedto",
  dt_TaskCompleteTime = "dt_taskcompletetime",
  dt_TaskMinutes_Actual = "dt_taskminutes_actual",
  dt_TaskMinutes_Estimate = "dt_taskminutes_estimate",
  dt_TaskMinutes_Remaining = "dt_taskminutes_remaining",
  dt_TotalCost = "dt_totalcost",
  dt_TotalCost_Art = "dt_totalcost_art",
  dt_totalcost_art_Base = "dt_totalcost_art_base",
  dt_totalcost_Base = "dt_totalcost_base",
  dt_TotalCost_Estimate = "dt_totalcost_estimate",
  dt_totalcost_estimate_Base = "dt_totalcost_estimate_base",
  dt_TotalHours = "dt_totalhours",
  dt_TotalHours_Estimate = "dt_totalhours_estimate",
  dt_TotalLabels = "dt_totallabels",
  dt_TotalMargin = "dt_totalmargin",
  dt_totalmargin_Base = "dt_totalmargin_base",
  dt_TotalMargin_Estimate = "dt_totalmargin_estimate",
  dt_totalmargin_estimate_Base = "dt_totalmargin_estimate_base",
  dt_TotalMarginPercent = "dt_totalmarginpercent",
  dt_TotalMarginPercent_Estimate = "dt_totalmarginpercent_estimate",
  dt_TotalPrice = "dt_totalprice",
  dt_TotalPrice_AdjustmentPercent = "dt_totalprice_adjustmentpercent",
  dt_TotalPrice_Adjustments = "dt_totalprice_adjustments",
  dt_totalprice_adjustments_Base = "dt_totalprice_adjustments_base",
  dt_totalprice_Base = "dt_totalprice_base",
  dt_TotalPrice_CalcFd = "dt_totalprice_calcfd",
  dt_totalprice_calcfd_Base = "dt_totalprice_calcfd_base",
  dt_TotalPrice_Default = "dt_totalprice_default",
  dt_TotalSheets = "dt_totalsheets",
  dt_TotalSquareInches = "dt_totalsquareinches",
  dt_TotalTime = "dt_totaltime",
  dt_TotalTime_Art = "dt_totaltime_art",
  dt_TotalTime_Estimate = "dt_totaltime_estimate",
  dt_UrethaneLitersPerOrder = "dt_urethanelitersperorder",
  dt_Weight_Estimate = "dt_weight_estimate",
  EntityImage = "entityimage",
  EntityImage_Timestamp = "entityimage_timestamp",
  EntityImage_URL = "entityimage_url",
  EntityImageId = "entityimageid",
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
export interface dt_OrderLine extends IEntity {
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
  // Account LookupType
  dt_account?: import("dataverse-ify").EntityReference | null;
  //  StringType
  dt_accountname?: string | null;
  //  StringType
  dt_accountyominame?: string | null;
  // Admin Notes StringType
  dt_adminnotes?: string | null;
  // Auto Number StringType
  dt_autonumber?: string | null;
  // Auto Number - Prefixed StringType
  dt_autonumber_prefixed?: string | null;
  // Boxes - Estimate DecimalType
  dt_boxes_estimate?: number | null;
  // Cost Message StringType Options:mercuryfree;deleteink;
  dt_costmessage?: string | null;
  // Cost Per Label MoneyType
  dt_costperlabel?: number | null;
  // Cost Per Label (Base) MoneyType Value of the Cost Per Label in base currency.
  dt_costperlabel_base?: number | null;
  // Cost Per Label - Estimate MoneyType
  dt_costperlabel_estimate?: number | null;
  // Cost Per Label - Estimate (Base) MoneyType Value of the Cost Per Label - Estimate in base currency.
  dt_costperlabel_estimate_base?: number | null;
  // Cost Per Square Inch MoneyType
  dt_costpersquareinch?: number | null;
  // Cost Per Square Inch (Base) MoneyType Value of the Cost Per Square Inch in base currency.
  dt_costpersquareinch_base?: number | null;
  // Cost Per Square Inch - Estimate MoneyType
  dt_costpersquareinch_estimate?: number | null;
  // Cost Per Square Inch - Estimate (Base) MoneyType Value of the Cost Per Square Inch - Estimate in base currency.
  dt_costpersquareinch_estimate_base?: number | null;
  // Created By External Party StringType
  dt_createdbyexternalparty?: string | null;
  // Date Fulfilled DateTimeType DateOnly:UserLocal
  dt_datefulfilled_flow?: Date | null;
  // Default Hourly Rate [Required] MoneyType
  dt_defaulthourlyrate?: number;
  // Default Hourly Rate (Base) MoneyType Value of the Default Hourly Rate in base currency.
  dt_defaulthourlyrate_base?: number | null;
  // Defect - Cost MoneyType
  dt_defect_cost?: number | null;
  // Defect - Cost (Base) MoneyType Value of the Defect_Cost in base currency.
  dt_defect_cost_base?: number | null;
  // Defect - Labels IntegerType
  dt_defect_labels?: number | null;
  // Defect - Percent DecimalType
  dt_defect_percent?: number | null;
  // Defect - SquareInches IntegerType
  dt_defect_squareinches?: number | null;
  // Defect - Square Inches Inspected DecimalType
  dt_defect_squareinchesinspected?: number | null;
  // Design [Required] LookupType
  dt_design?: import("dataverse-ify").EntityReference;
  // Design - Summary StringType
  dt_design_summary?: string | null;
  // Design Layout [Required] LookupType
  dt_designlayout?: import("dataverse-ify").EntityReference;
  // Design Layout - Summary StringType
  dt_designlayout_summary?: string | null;
  //  StringType
  dt_designlayoutname?: string | null;
  //  StringType
  dt_designname?: string | null;
  // Design Specifications - Summary StringType
  dt_designspecifications_summary?: string | null;
  // Dispense Is Registered BooleanType
  dt_dispenseisregistered?: boolean | null;
  // Dispense Pattern StringType
  dt_dispensepattern?: string | null;
  // Dispense Type dt_dispensetype
  dt_dispensetype?: import("../enums/dt_dispensetype").dt_dispensetype | null;
  // Ink Milliliters Per Order DecimalType
  dt_inkmillilitersperorder?: number | null;
  // Ink Milliliters Per Sheet  DecimalType
  dt_inkmilliliterspersheet?: number | null;
  // Is Adjusted Production Specifications BooleanType
  dt_isadjustedproductionspecifications?: boolean | null;
  // Is Locked Price BooleanType
  dt_islockedprice?: boolean | null;
  // Labels Per Dispense IntegerType
  dt_labelsperdispense?: number | null;
  // Labels Per Dispense Type dt_labelsperdispensetype
  dt_labelsperdispensetype?: import("../enums/dt_labelsperdispensetype").dt_labelsperdispensetype | null;
  // Labels Per Sheet IntegerType
  dt_labelspersheet?: number | null;
  // Label Square Inches Per Sheet DecimalType
  dt_labelsquareinchespersheet?: number | null;
  // Order LookupType
  dt_order?: import("dataverse-ify").EntityReference | null;
  // Order - Summary StringType
  dt_order_summary?: string | null;
  // Order Due Date DateTimeType DateOnly:UserLocal
  dt_orderduedate?: Date | null;
  // Ordered Labels [Required] DecimalType
  dt_orderedlabels?: number;
  // Ordered Sheets DecimalType
  dt_orderedsheets?: number | null;
  // Ordered Square Inches DecimalType
  dt_orderedsquareinches?: number | null;
  // Order Line Count IntegerType
  dt_orderlinecount?: number | null;
  // Order Line GUID UniqueidentifierType Unique identifier for entity instances
  dt_orderlineid?: import("dataverse-ify").Guid | null;
  // Order Line Type dt_orderlinetype
  dt_orderlinetype?: import("../enums/dt_orderlinetype").dt_orderlinetype | null;
  //  StringType
  dt_ordername?: string | null;
  // Order Priority dt_orderpriority
  dt_orderpriority?: import("../enums/dt_orderpriority").dt_orderpriority | null;
  // Order Status StringType
  dt_orderstatus?: string | null;
  // Order Task List dt_ordertasktype2
  dt_ordertasklist?: import("../enums/dt_ordertasktype2").dt_ordertasktype2[] | null;
  // Overage Labels DecimalType
  dt_overagelabels?: number | null;
  // Overage Labels - Estimate DecimalType
  dt_overagelabels_estimate?: number | null;
  // Overage Percent DecimalType
  dt_overagepercent?: number | null;
  // Overage Percent - Estimate DecimalType
  dt_overagepercent_estimate?: number | null;
  // Overage Percent - Minimum [Required] DecimalType
  dt_overagepercent_minimum?: number;
  // Overage Sheets DecimalType
  dt_overagesheets?: number | null;
  // Overage Sheets - Estimate DecimalType
  dt_overagesheets_estimate?: number | null;
  // Overage Square Inches DecimalType
  dt_overagesquareinches?: number | null;
  // Overage Square Inches - Estimate DecimalType
  dt_overagesquareinches_estimate?: number | null;
  // Overage Type dt_overagetype
  dt_overagetype?: import("../enums/dt_overagetype").dt_overagetype | null;
  // Order Line [Required] StringType Required name field
  dt_pid?: string;
  // Price - Override MoneyType
  dt_price_override?: number | null;
  // Price - Override (Base) MoneyType Value of the Price - Override in base currency.
  dt_price_override_base?: number | null;
  // Price Adjustment - By Percent DecimalType
  dt_priceadjustment_bypercent?: number | null;
  // Price Adjustment - By Total MoneyType
  dt_priceadjustment_bytotal?: number | null;
  // Price Adjustment - By Total (Base) MoneyType Value of the Price Adjustment - By Total in base currency.
  dt_priceadjustment_bytotal_base?: number | null;
  // Price Adjustment - Per Label MoneyType
  dt_priceadjustment_perlabel?: number | null;
  // Price Adjustment - Per Label (Base) MoneyType Value of the Price Adjustment - Per Label in base currency.
  dt_priceadjustment_perlabel_base?: number | null;
  // Price Adjustment - Per Square Inch MoneyType
  dt_priceadjustment_persquareinch?: number | null;
  // Price Adjustment - Per Square Inch (Base) MoneyType Value of the Price Adjustment - Per Square Inch in base currency.
  dt_priceadjustment_persquareinch_base?: number | null;
  // Price Adjustment Note StringType
  dt_priceadjustmentnote?: string | null;
  // Price Adjustment Type dt_priceadjustmenttype
  dt_priceadjustmenttype?: import("../enums/dt_priceadjustmenttype").dt_priceadjustmenttype | null;
  // PriceMessage StringType
  dt_pricemessage?: string | null;
  // Price Per Square Inch MoneyType
  dt_pricepersquareinch?: number | null;
  // Price Per Square Inch (Base) MoneyType Value of the Price Per Square Inch in base currency.
  dt_pricepersquareinch_base?: number | null;
  // Price MoneyType
  dt_priceperunit?: number | null;
  // Price Per Unit - Adjustments MoneyType
  dt_priceperunit_adjustments?: number | null;
  // Price Per Unit - Adjustments (Base) MoneyType Value of the Price Per Unit - Adjustments in base currency.
  dt_priceperunit_adjustments_base?: number | null;
  // Price Per Unit (Base) MoneyType Value of the Price Per Unit in base currency.
  dt_priceperunit_base?: number | null;
  // Price Per Unit - Base MoneyType
  dt_priceperunit_baseprice?: number | null;
  // Price Per Unit - Base (Base) MoneyType Value of the Price Per Unit - Base in base currency.
  dt_priceperunit_baseprice_base?: number | null;
  // Price. MoneyType
  dt_priceperunit_calcfd?: number | null;
  // Price. (Base) MoneyType Value of the Price. in base currency.
  dt_priceperunit_calcfd_base?: number | null;
  // Price Per Unit - Default DecimalType
  dt_priceperunit_default?: number | null;
  // Price Per Unit - Options MoneyType
  dt_priceperunit_options?: number | null;
  // Price Per Unit_Options (Base) MoneyType Value of the Price Per Unit_Options in base currency.
  dt_priceperunit_options_base?: number | null;
  // Pricing Type dt_pricingtype
  dt_pricingtype?: import("../enums/dt_pricingtype").dt_pricingtype | null;
  // Primary Image ImageType
  dt_primaryimage?: string | null;
  //  BigIntType
  dt_primaryimage_timestamp?: number | null;
  //  StringType
  dt_primaryimage_url?: string | null;
  //  UniqueidentifierType
  dt_primaryimageid?: import("dataverse-ify").Guid | null;
  // Quantity Overage DecimalType
  dt_quantityoverage?: number | null;
  // Quantity Shipped DecimalType
  dt_quantityshipped?: number | null;
  // Sheets Per Board IntegerType
  dt_sheetsperboard?: number | null;
  // Square Inches Per Label DecimalType
  dt_squareinchesperlabel?: number | null;
  // Substrate MSI Per Order DecimalType
  dt_substratemsiperorder?: number | null;
  // Substrate Square Inches Per Sheet DecimalType
  dt_substratesquareinchespersheet?: number | null;
  // Task Assigned To StringType
  dt_taskassignedto?: string | null;
  // Task Complete Time DateTimeType DateAndTime:UserLocal
  dt_taskcompletetime?: Date | null;
  // Task Time Actual IntegerType
  dt_taskminutes_actual?: number | null;
  // Task Time Estimate IntegerType
  dt_taskminutes_estimate?: number | null;
  // Task Time Remaining IntegerType
  dt_taskminutes_remaining?: number | null;
  // Total Cost MoneyType
  dt_totalcost?: number | null;
  // Total Cost - Art MoneyType
  dt_totalcost_art?: number | null;
  // Total Cost - Art (Base) MoneyType Value of the Total Cost - Art in base currency.
  dt_totalcost_art_base?: number | null;
  // Total Cost (Base) MoneyType Value of the Total Cost in base currency.
  dt_totalcost_base?: number | null;
  // Total Cost - Estimate MoneyType
  dt_totalcost_estimate?: number | null;
  // Total Cost - Estimate (Base) MoneyType Value of the Total Cost - Estimate in base currency.
  dt_totalcost_estimate_base?: number | null;
  // Total Hours DecimalType
  dt_totalhours?: number | null;
  // Total Hours - Estimate DecimalType
  dt_totalhours_estimate?: number | null;
  // Total Labels DecimalType
  dt_totallabels?: number | null;
  // Total Margin MoneyType
  dt_totalmargin?: number | null;
  // Total Margin (Base) MoneyType Value of the Total Margin in base currency.
  dt_totalmargin_base?: number | null;
  // Total Margin - Estimate MoneyType
  dt_totalmargin_estimate?: number | null;
  // Total Margin - Estimate (Base) MoneyType Value of the Total Margin - Estimate in base currency.
  dt_totalmargin_estimate_base?: number | null;
  // Total Margin Percent DecimalType
  dt_totalmarginpercent?: number | null;
  // Total Margin Percent - Estimate DecimalType
  dt_totalmarginpercent_estimate?: number | null;
  // Total Price MoneyType
  dt_totalprice?: number | null;
  // Total Price Adjustment Percent DecimalType
  dt_totalprice_adjustmentpercent?: number | null;
  // Total Price - Adjustments MoneyType
  dt_totalprice_adjustments?: number | null;
  // Total Price - Adjustments (Base) MoneyType Value of the Total Price - Adjustments in base currency.
  dt_totalprice_adjustments_base?: number | null;
  // Total Price (Base) MoneyType Value of the Total Price in base currency.
  dt_totalprice_base?: number | null;
  // Total Price. MoneyType
  dt_totalprice_calcfd?: number | null;
  // Total Price. (Base) MoneyType Value of the Total Price. in base currency.
  dt_totalprice_calcfd_base?: number | null;
  // Total Price - Default DecimalType
  dt_totalprice_default?: number | null;
  // Total Sheets DecimalType
  dt_totalsheets?: number | null;
  // Total Square Inches DecimalType
  dt_totalsquareinches?: number | null;
  // Total Time IntegerType
  dt_totaltime?: number | null;
  // Total Time - Art IntegerType
  dt_totaltime_art?: number | null;
  // Total Time - Estimate IntegerType
  dt_totaltime_estimate?: number | null;
  // Urethane Liters Per Order DecimalType
  dt_urethanelitersperorder?: number | null;
  // Weight - Estimate DecimalType
  dt_weight_estimate?: number | null;
  // EntityImage ImageType
  entityimage?: string | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  //  StringType
  entityimage_url?: string | null;
  //  UniqueidentifierType
  entityimageid?: import("dataverse-ify").Guid | null;
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
  // Status dt_orderline_dt_orderline_statecode Status of the Order Line
  statecode?: import("../enums/dt_orderline_dt_orderline_statecode").dt_orderline_dt_orderline_statecode | null;
  // Status Reason dt_orderline_dt_orderline_statuscode Reason for the status of the Order Line
  statuscode?: import("../enums/dt_orderline_dt_orderline_statuscode").dt_orderline_dt_orderline_statuscode | null;
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
