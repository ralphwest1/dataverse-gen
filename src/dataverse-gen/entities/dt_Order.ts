/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity dt_Order
export const dt_orderMetadata = {
  typeName: "mscrm.dt_order",
  logicalName: "dt_order",
  collectionName: "dt_orders",
  primaryIdAttribute: "dt_orderid",
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
    dt_creditcardamount: "Money",
    dt_creditcardamount_base: "Money",
    dt_defect_cost: "Money",
    dt_defect_cost_base: "Money",
    dt_defect_labels: "Integer",
    dt_defect_percent: "Decimal",
    dt_defect_squareinches: "Decimal",
    dt_defect_squareinchesinspected: "Decimal",
    dt_inkmillilitersperorder: "Decimal",
    dt_leadtime_dateapproved: "Decimal",
    dt_leadtime_datesubmitted: "Decimal",
    dt_orderedlabels: "Decimal",
    dt_orderedsheets: "Decimal",
    dt_orderedsquareinches: "Decimal",
    dt_orderlines_count: "Integer",
    dt_orderlines_priceadjustmentpercent: "Decimal",
    dt_orderlines_priceadjustments: "Money",
    dt_orderlines_priceadjustments_base: "Money",
    dt_orderlines_totalprice: "Money",
    dt_orderlines_totalprice_base: "Money",
    dt_otherchargeamount: "Money",
    dt_otherchargeamount_base: "Money",
    dt_overagelabels: "Decimal",
    dt_overagelabels_estimate: "Decimal",
    dt_overagepercent: "Decimal",
    dt_overagepercent_estimate: "Decimal",
    dt_overagesheets: "Decimal",
    dt_overagesheets_estimate: "Decimal",
    dt_overagesquareinches: "Decimal",
    dt_overagesquareinches_estimate: "Decimal",
    dt_pricepersquareinch: "Money",
    dt_pricepersquareinch_base: "Money",
    dt_setupamount: "Money",
    dt_setupamount_base: "Money",
    dt_shippingactualamount: "Money",
    dt_shippingactualamount_base: "Money",
    dt_shippingchargedamount: "Money",
    dt_shippingchargedamount_base: "Money",
    dt_shippingestimatedamount: "Money",
    dt_shippingestimatedamount_base: "Money",
    dt_substratemsiperorder: "Decimal",
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
    dt_totalprice_base: "Money",
    dt_totalpricewithshipping_calcfield: "Money",
    dt_totalpricewithshipping_calcfield_base: "Money",
    dt_totalsheets: "Decimal",
    dt_totalsquareinches: "Decimal",
    dt_totaltime: "Integer",
    dt_totaltime_art: "Integer",
    dt_totaltime_estimate: "Integer",
    dt_urethanelitersperorder: "Decimal",
    dt_weight_estimate: "Decimal",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    dt_artrequired: "Optionset",
    dt_blankoptionset: "Optionset",
    dt_commissioncategory: "Optionset",
    dt_orderlines_priceadjustmenttypes: "MultiSelect",
    dt_ordertype: "Optionset",
    dt_ordertype2: "Optionset",
    dt_paymentmethod: "Optionset",
    dt_paymentterms: "Optionset",
    dt_pricingtype: "Optionset",
    dt_priority: "Optionset",
    dt_setreorderreminder: "Optionset",
    dt_shipfrom_lookup: "Optionset",
    dt_shippingmethod: "Optionset",
    dt_shippingvendor: "Optionset",
    dt_shipto_lookup: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    dnbs_overriddencreatedon: "DateAndTime:UserLocal",
    dt_dateapproved: "DateAndTime:UserLocal",
    dt_datecustomerrequested: "DateOnly:UserLocal",
    dt_dateemailedconfirmation: "DateAndTime:UserLocal",
    dt_dateemailedproof: "DateAndTime:UserLocal",
    dt_dateemailedtracking: "DateAndTime:UserLocal",
    dt_datefulfilled: "DateAndTime:UserLocal",
    dt_datesubmitted: "DateAndTime:UserLocal",
    dt_duedate: "DateOnly:UserLocal",
    dt_laststagetime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    stageid: ["mscrm.processstage"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    dt_Opportunity: ["mscrm.opportunity"],
    dt_Contact: ["mscrm.contact"],
    dt_AccountManager: ["mscrm.systemuser"],
    dt_Account: ["mscrm.account"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
  },
};

// Attribute constants
export const enum dt_OrderAttributes {
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  dnbs_overriddencreatedon = "dnbs_overriddencreatedon",
  dt_Account = "dt_account",
  dt_AccountingNote = "dt_accountingnote",
  dt_AccountManager = "dt_accountmanager",
  dt_AccountManagerName = "dt_accountmanagername",
  dt_AccountManagerYomiName = "dt_accountmanageryominame",
  dt_AccountName = "dt_accountname",
  dt_AccountYomiName = "dt_accountyominame",
  dt_Action1 = "dt_action1",
  dt_ArtRequired = "dt_artrequired",
  dt_AutoNumber = "dt_autonumber",
  dt_AutoNumber_Prefixed = "dt_autonumber_prefixed",
  dt_BillTo_Email = "dt_billto_email",
  dt_Bit = "dt_bit",
  dt_BlankOptionSet = "dt_blankoptionset",
  dt_Boxes_Estimate = "dt_boxes_estimate",
  dt_CommissionCategory = "dt_commissioncategory",
  dt_Contact = "dt_contact",
  dt_ContactName = "dt_contactname",
  dt_ContactYomiName = "dt_contactyominame",
  dt_CostPerLabel = "dt_costperlabel",
  dt_costperlabel_Base = "dt_costperlabel_base",
  dt_CostPerLabel_Estimate = "dt_costperlabel_estimate",
  dt_costperlabel_estimate_Base = "dt_costperlabel_estimate_base",
  dt_CostPerSquareInch = "dt_costpersquareinch",
  dt_costpersquareinch_Base = "dt_costpersquareinch_base",
  dt_CostPerSquareInch_Estimate = "dt_costpersquareinch_estimate",
  dt_costpersquareinch_estimate_Base = "dt_costpersquareinch_estimate_base",
  dt_CreditCardAmount = "dt_creditcardamount",
  dt_creditcardamount_Base = "dt_creditcardamount_base",
  dt_DateApproved = "dt_dateapproved",
  dt_DateCustomerRequested = "dt_datecustomerrequested",
  dt_DateEmailedConfirmation = "dt_dateemailedconfirmation",
  dt_DateEmailedProof = "dt_dateemailedproof",
  dt_DateEmailedTracking = "dt_dateemailedtracking",
  dt_DateFulfilled = "dt_datefulfilled",
  dt_DateSubmitted = "dt_datesubmitted",
  dt_Defect_Cost = "dt_defect_cost",
  dt_defect_cost_Base = "dt_defect_cost_base",
  dt_Defect_Labels = "dt_defect_labels",
  dt_Defect_Percent = "dt_defect_percent",
  dt_Defect_SquareInches = "dt_defect_squareinches",
  dt_Defect_SquareInchesInspected = "dt_defect_squareinchesinspected",
  dt_DueDate = "dt_duedate",
  dt_HasDocuments = "dt_hasdocuments",
  dt_ID = "dt_id",
  dt_InkMillilitersPerOrder = "dt_inkmillilitersperorder",
  dt_LastStageTime = "dt_laststagetime",
  dt_LeadTime_DateApproved = "dt_leadtime_dateapproved",
  dt_LeadTime_DateSubmitted = "dt_leadtime_datesubmitted",
  dt_OnlineCreatedBy = "dt_onlinecreatedby",
  dt_Opportunity = "dt_opportunity",
  dt_OpportunityName = "dt_opportunityname",
  dt_Order_ID = "dt_order_id",
  dt_Order_Summary = "dt_order_summary",
  dt_OrderConfirmation = "dt_orderconfirmation",
  dt_OrderedLabels = "dt_orderedlabels",
  dt_OrderedSheets = "dt_orderedsheets",
  dt_OrderedSquareInches = "dt_orderedsquareinches",
  dt_OrderId = "dt_orderid",
  dt_OrderLines_Count = "dt_orderlines_count",
  dt_OrderLines_PriceAdjustmentPercent = "dt_orderlines_priceadjustmentpercent",
  dt_OrderLines_PriceAdjustments = "dt_orderlines_priceadjustments",
  dt_orderlines_priceadjustments_Base = "dt_orderlines_priceadjustments_base",
  dt_OrderLines_PriceAdjustmentTypes = "dt_orderlines_priceadjustmenttypes",
  dt_OrderLines_TotalPrice = "dt_orderlines_totalprice",
  dt_orderlines_totalprice_Base = "dt_orderlines_totalprice_base",
  dt_OrderType = "dt_ordertype",
  dt_OrderType2 = "dt_ordertype2",
  dt_OtherChargeAmount = "dt_otherchargeamount",
  dt_otherchargeamount_Base = "dt_otherchargeamount_base",
  dt_OtherChargeNote = "dt_otherchargenote",
  dt_OverageLabels = "dt_overagelabels",
  dt_OverageLabels_Estimate = "dt_overagelabels_estimate",
  dt_OveragePercent = "dt_overagepercent",
  dt_OveragePercent_Estimate = "dt_overagepercent_estimate",
  dt_OverageSheets = "dt_overagesheets",
  dt_OverageSheets_Estimate = "dt_overagesheets_estimate",
  dt_OverageSquareInches = "dt_overagesquareinches",
  dt_OverageSquareInches_Estimate = "dt_overagesquareinches_estimate",
  dt_PaymentMethod = "dt_paymentmethod",
  dt_PaymentTerms = "dt_paymentterms",
  dt_PID = "dt_pid",
  dt_PricePerSquareInch = "dt_pricepersquareinch",
  dt_pricepersquareinch_Base = "dt_pricepersquareinch_base",
  dt_PricingType = "dt_pricingtype",
  dt_Priority = "dt_priority",
  dt_PurchaseOrder = "dt_purchaseorder",
  dt_QbTransactions = "dt_qbtransactions",
  dt_QuickBooksInvoice = "dt_quickbooksinvoice",
  dt_QuickBooksPayment = "dt_quickbookspayment",
  dt_Redo = "dt_redo",
  dt_SetReorderReminder = "dt_setreorderreminder",
  dt_SetupAmount = "dt_setupamount",
  dt_setupamount_Base = "dt_setupamount_base",
  dt_SharePointFolder = "dt_sharepointfolder",
  dt_ShipFrom = "dt_shipfrom",
  dt_ShipFrom_City = "dt_shipfrom_city",
  dt_ShipFrom_Company = "dt_shipfrom_company",
  dt_ShipFrom_ContactName = "dt_shipfrom_contactname",
  dt_ShipFrom_Country = "dt_shipfrom_country",
  dt_ShipFrom_Line1 = "dt_shipfrom_line1",
  dt_ShipFrom_Line2 = "dt_shipfrom_line2",
  dt_ShipFrom_Lookup = "dt_shipfrom_lookup",
  dt_ShipFrom_PostalCode = "dt_shipfrom_postalcode",
  dt_ShipFrom_StateOrProvince = "dt_shipfrom_stateorprovince",
  dt_Shipping_Text = "dt_shipping_text",
  dt_ShippingAccount = "dt_shippingaccount",
  dt_ShippingActualAmount = "dt_shippingactualamount",
  dt_shippingactualamount_Base = "dt_shippingactualamount_base",
  dt_ShippingChargedAmount = "dt_shippingchargedamount",
  dt_shippingchargedamount_Base = "dt_shippingchargedamount_base",
  dt_ShippingEstimatedAmount = "dt_shippingestimatedamount",
  dt_shippingestimatedamount_Base = "dt_shippingestimatedamount_base",
  dt_ShippingMethod = "dt_shippingmethod",
  dt_ShippingNote = "dt_shippingnote",
  dt_ShippingVendor = "dt_shippingvendor",
  dt_ShipStationRecord = "dt_shipstationrecord",
  dt_ShipTo_City = "dt_shipto_city",
  dt_ShipTo_Company = "dt_shipto_company",
  dt_ShipTo_ContactName = "dt_shipto_contactname",
  dt_ShipTo_Country = "dt_shipto_country",
  dt_ShipTo_Email = "dt_shipto_email",
  dt_ShipTo_Line1 = "dt_shipto_line1",
  dt_ShipTo_Line2 = "dt_shipto_line2",
  dt_ShipTo_Lookup = "dt_shipto_lookup",
  dt_ShipTo_PostalCode = "dt_shipto_postalcode",
  dt_ShipTo_StateOrProvince = "dt_shipto_stateorprovince",
  dt_SubstrateMSIPerOrder = "dt_substratemsiperorder",
  dt_TaskMinutes_Actual = "dt_taskminutes_actual",
  dt_TaskMinutes_Estimate = "dt_taskminutes_estimate",
  dt_TaskMinutes_Remaining = "dt_taskminutes_remaining",
  dt_This = "dt_this",
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
  dt_totalprice_Base = "dt_totalprice_base",
  dt_TotalPriceWithShipping_CalcField = "dt_totalpricewithshipping_calcfield",
  dt_totalpricewithshipping_calcfield_Base = "dt_totalpricewithshipping_calcfield_base",
  dt_TotalSheets = "dt_totalsheets",
  dt_TotalSquareInches = "dt_totalsquareinches",
  dt_TotalTime = "dt_totaltime",
  dt_TotalTime_Art = "dt_totaltime_art",
  dt_TotalTime_Estimate = "dt_totaltime_estimate",
  dt_TrackingNumber = "dt_trackingnumber",
  dt_UrethaneLitersPerOrder = "dt_urethanelitersperorder",
  dt_Weight_Estimate = "dt_weight_estimate",
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
  processid = "processid",
  stageid = "stageid",
  statecode = "statecode",
  statuscode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  traversedpath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface dt_Order extends IEntity {
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
  // Accounting Note StringType
  dt_accountingnote?: string | null;
  // Account Manager LookupType
  dt_accountmanager?: import("dataverse-ify").EntityReference | null;
  //  StringType
  dt_accountmanagername?: string | null;
  //  StringType
  dt_accountmanageryominame?: string | null;
  //  StringType
  dt_accountname?: string | null;
  //  StringType
  dt_accountyominame?: string | null;
  // Action 1 BooleanType
  dt_action1?: boolean | null;
  // Art Required dt_artrequired
  dt_artrequired?: import("../enums/dt_artrequired").dt_artrequired | null;
  // Auto Number StringType
  dt_autonumber?: string | null;
  // Auto Number - Prefixed StringType
  dt_autonumber_prefixed?: string | null;
  // Bill To Email StringType
  dt_billto_email?: string | null;
  // Bit BooleanType
  dt_bit?: boolean | null;
  // Blank Option Set dt_blankoptionset
  dt_blankoptionset?: import("../enums/dt_blankoptionset").dt_blankoptionset | null;
  // Boxes - Estimate DecimalType
  dt_boxes_estimate?: number | null;
  // Category dt_commissioncategory
  dt_commissioncategory?: import("../enums/dt_commissioncategory").dt_commissioncategory | null;
  // Contact LookupType
  dt_contact?: import("dataverse-ify").EntityReference | null;
  //  StringType
  dt_contactname?: string | null;
  //  StringType
  dt_contactyominame?: string | null;
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
  // Credit Card Amount MoneyType
  dt_creditcardamount?: number | null;
  // Credit Card Amount (Base) MoneyType Value of the Credit Card Amount in base currency.
  dt_creditcardamount_base?: number | null;
  // Date Approved DateTimeType DateAndTime:UserLocal
  dt_dateapproved?: Date | null;
  // Date Customer Requested DateTimeType DateOnly:UserLocal
  dt_datecustomerrequested?: Date | null;
  // Date Emailed Confirmation DateTimeType DateAndTime:UserLocal
  dt_dateemailedconfirmation?: Date | null;
  // Date Emailed Proof DateTimeType DateAndTime:UserLocal
  dt_dateemailedproof?: Date | null;
  // Date Emailed Tracking DateTimeType DateAndTime:UserLocal
  dt_dateemailedtracking?: Date | null;
  // Date Fulfilled DateTimeType DateAndTime:UserLocal
  dt_datefulfilled?: Date | null;
  // Date Submitted DateTimeType DateAndTime:UserLocal
  dt_datesubmitted?: Date | null;
  // Defect - Cost MoneyType
  dt_defect_cost?: number | null;
  // Defect - Cost (Base) MoneyType Value of the Defect - Cost in base currency.
  dt_defect_cost_base?: number | null;
  // Defect - Labels IntegerType
  dt_defect_labels?: number | null;
  // Defect - Percent DecimalType
  dt_defect_percent?: number | null;
  // Defect - Square Inches DecimalType
  dt_defect_squareinches?: number | null;
  // Defect - Square Inches Inspected DecimalType
  dt_defect_squareinchesinspected?: number | null;
  // Due Date DateTimeType DateOnly:UserLocal
  dt_duedate?: Date | null;
  // Has Documents BooleanType
  dt_hasdocuments?: boolean | null;
  // Order ID StringType
  dt_id?: string | null;
  // Ink Milliliters Per Order DecimalType
  dt_inkmillilitersperorder?: number | null;
  // LastStageTime DateTimeType DateAndTime:UserLocal
  dt_laststagetime?: Date | null;
  // Lead Time - Date Approved DecimalType
  dt_leadtime_dateapproved?: number | null;
  // Lead Time - Date Submitted DecimalType
  dt_leadtime_datesubmitted?: number | null;
  // Online Created By StringType
  dt_onlinecreatedby?: string | null;
  // Originating Opportunity LookupType
  dt_opportunity?: import("dataverse-ify").EntityReference | null;
  //  StringType
  dt_opportunityname?: string | null;
  // Order StringType Required name field
  dt_order_id?: string | null;
  // Order - Summary StringType
  dt_order_summary?: string | null;
  // Order Confirmation StringType
  dt_orderconfirmation?: string | null;
  // Ordered Labels DecimalType
  dt_orderedlabels?: number | null;
  // Ordered Sheets DecimalType
  dt_orderedsheets?: number | null;
  // Ordered Square Inches DecimalType
  dt_orderedsquareinches?: number | null;
  // Order GUID UniqueidentifierType Unique identifier for entity instances
  dt_orderid?: import("dataverse-ify").Guid | null;
  // Order Lines IntegerType
  dt_orderlines_count?: number | null;
  // Order Lines - Price Adjustment Percent DecimalType
  dt_orderlines_priceadjustmentpercent?: number | null;
  // Order Lines - Price Adjustments MoneyType
  dt_orderlines_priceadjustments?: number | null;
  // Order Lines - Price Adjustments (Base) MoneyType Value of the Order Lines - Price Adjustments in base currency.
  dt_orderlines_priceadjustments_base?: number | null;
  // Order Lines - Price Adjustment Types dt_priceadjustmenttype
  dt_orderlines_priceadjustmenttypes?: import("../enums/dt_priceadjustmenttype").dt_priceadjustmenttype[] | null;
  // Order Lines - Total Price MoneyType
  dt_orderlines_totalprice?: number | null;
  // Order Lines - Total Price (Base) MoneyType Value of the Order Lines - Total Price in base currency.
  dt_orderlines_totalprice_base?: number | null;
  // Order Type dt_ordertype
  dt_ordertype?: import("../enums/dt_ordertype").dt_ordertype | null;
  // Order Type 2 dt_ordertype2
  dt_ordertype2?: import("../enums/dt_ordertype2").dt_ordertype2 | null;
  // Other Charge Amount [Required] MoneyType
  dt_otherchargeamount?: number;
  // Other Charge Amount (Base) MoneyType Value of the Other Charge Amount in base currency.
  dt_otherchargeamount_base?: number | null;
  // Other Charge Note StringType
  dt_otherchargenote?: string | null;
  // Overage Labels DecimalType
  dt_overagelabels?: number | null;
  // Overage Labels - Estimate DecimalType
  dt_overagelabels_estimate?: number | null;
  // Overage Percent DecimalType
  dt_overagepercent?: number | null;
  // Overage Percent - Estimate DecimalType
  dt_overagepercent_estimate?: number | null;
  // Overage Sheets DecimalType
  dt_overagesheets?: number | null;
  // Overage Sheets - Estimate DecimalType
  dt_overagesheets_estimate?: number | null;
  // Overage Square Inches DecimalType
  dt_overagesquareinches?: number | null;
  // Overage Square Inches - Estimate DecimalType
  dt_overagesquareinches_estimate?: number | null;
  // Payment Method dt_paymentmethod
  dt_paymentmethod?: import("../enums/dt_paymentmethod").dt_paymentmethod | null;
  // Payment Terms dt_paymentterms
  dt_paymentterms?: import("../enums/dt_paymentterms").dt_paymentterms | null;
  // Order PID StringType
  dt_pid?: string | null;
  // Price Per Square Inch MoneyType
  dt_pricepersquareinch?: number | null;
  // Price Per Square Inch (Base) MoneyType Value of the Price Per Square Inch in base currency.
  dt_pricepersquareinch_base?: number | null;
  // Pricing Type dt_pricingtype
  dt_pricingtype?: import("../enums/dt_pricingtype").dt_pricingtype | null;
  // Priority dt_orderpriority
  dt_priority?: import("../enums/dt_orderpriority").dt_orderpriority | null;
  // Purchase Order StringType
  dt_purchaseorder?: string | null;
  // Qb Transactions StringType
  dt_qbtransactions?: string | null;
  // QuickBooks Invoice StringType
  dt_quickbooksinvoice?: string | null;
  // QuickBooks Payment StringType
  dt_quickbookspayment?: string | null;
  // Redo BooleanType
  dt_redo?: boolean | null;
  // Set Reorder Reminder dt_yesnoblank
  dt_setreorderreminder?: import("../enums/dt_yesnoblank").dt_yesnoblank | null;
  // Set-up Amount [Required] MoneyType
  dt_setupamount?: number;
  // Set-up Amount (Base) MoneyType Value of the Set-up Amount in base currency.
  dt_setupamount_base?: number | null;
  // SharePoint Folder BooleanType
  dt_sharepointfolder?: boolean | null;
  // Blind Ship BooleanType
  dt_shipfrom?: boolean | null;
  // ShipFrom City StringType
  dt_shipfrom_city?: string | null;
  // ShipFrom Company StringType
  dt_shipfrom_company?: string | null;
  // ShipFrom Contact StringType
  dt_shipfrom_contactname?: string | null;
  // ShipFrom Country StringType
  dt_shipfrom_country?: string | null;
  // ShipFrom Street 1 StringType
  dt_shipfrom_line1?: string | null;
  // ShipFrom Street 2 StringType
  dt_shipfrom_line2?: string | null;
  // ShipFrom Lookup dt_blankoptionset
  dt_shipfrom_lookup?: import("../enums/dt_blankoptionset").dt_blankoptionset | null;
  // ShipFrom ZIP StringType
  dt_shipfrom_postalcode?: string | null;
  // ShipFrom State StringType
  dt_shipfrom_stateorprovince?: string | null;
  // Shipping Text StringType
  dt_shipping_text?: string | null;
  // Shipping Account StringType
  dt_shippingaccount?: string | null;
  // Shipping Actual Amount MoneyType
  dt_shippingactualamount?: number | null;
  // Shipping Actual Amount (Base) MoneyType Value of the Shipping Actual Amount in base currency.
  dt_shippingactualamount_base?: number | null;
  // Shipping Charged Amount MoneyType
  dt_shippingchargedamount?: number | null;
  // Shipping Charged Amount (Base) MoneyType Value of the Shipping Charged Amount in base currency.
  dt_shippingchargedamount_base?: number | null;
  // Shipping Estimated Amount MoneyType
  dt_shippingestimatedamount?: number | null;
  // Shipping Estimated Amount (Base) MoneyType Value of the Shipping Estimated Amount in base currency.
  dt_shippingestimatedamount_base?: number | null;
  // Shipping Method dt_shippingmethod
  dt_shippingmethod?: import("../enums/dt_shippingmethod").dt_shippingmethod | null;
  // Shipping Note MemoType
  dt_shippingnote?: string | null;
  // Shipping Vendor dt_shippingvendor
  dt_shippingvendor?: import("../enums/dt_shippingvendor").dt_shippingvendor | null;
  // ShipStationRecord StringType
  dt_shipstationrecord?: string | null;
  // ShipTo City StringType
  dt_shipto_city?: string | null;
  // ShipTo Company StringType
  dt_shipto_company?: string | null;
  // ShipTo Contact StringType
  dt_shipto_contactname?: string | null;
  // ShipTo Country StringType
  dt_shipto_country?: string | null;
  // ShipTo Email StringType Email to be notified with shipment tracking info, or that the order is ready for pick-up.
  dt_shipto_email?: string | null;
  // ShipTo Street 1 StringType
  dt_shipto_line1?: string | null;
  // ShipTo Street 2 StringType
  dt_shipto_line2?: string | null;
  // ShipTo Lookup dt_blankoptionset
  dt_shipto_lookup?: import("../enums/dt_blankoptionset").dt_blankoptionset | null;
  // ShipTo Zip StringType
  dt_shipto_postalcode?: string | null;
  // ShipTo State StringType
  dt_shipto_stateorprovince?: string | null;
  // Substrate MSI Per Order DecimalType
  dt_substratemsiperorder?: number | null;
  // Task Time Actual IntegerType
  dt_taskminutes_actual?: number | null;
  // Task Time Estimate IntegerType
  dt_taskminutes_estimate?: number | null;
  // Task Time Remaining IntegerType
  dt_taskminutes_remaining?: number | null;
  // This % StringType
  dt_this?: string | null;
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
  // Total Price (Base) MoneyType Value of the Total Price in base currency.
  dt_totalprice_base?: number | null;
  // Total Price With Shipping MoneyType
  dt_totalpricewithshipping_calcfield?: number | null;
  // Total Price With Shipping (Base) MoneyType Value of the Total Price With Shipping in base currency.
  dt_totalpricewithshipping_calcfield_base?: number | null;
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
  // Tracking Number MemoType
  dt_trackingnumber?: string | null;
  // Urethane Liters Per Order DecimalType
  dt_urethanelitersperorder?: number | null;
  // Weight - Estimate DecimalType
  dt_weight_estimate?: number | null;
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
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("dataverse-ify").Guid | null;
  // (Deprecated) Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("dataverse-ify").Guid | null;
  // Status dt_order_dt_order_statecode Status of the Order
  statecode?: import("../enums/dt_order_dt_order_statecode").dt_order_dt_order_statecode | null;
  // Status Reason dt_order_dt_order_statuscode Reason for the status of the Order
  statuscode?: import("../enums/dt_order_dt_order_statuscode").dt_order_dt_order_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Currency LookupType Unique identifier of the currency associated with the entity.
  transactioncurrencyid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
