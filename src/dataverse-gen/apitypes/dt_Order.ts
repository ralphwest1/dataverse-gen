/* eslint-disable*/

// Early Bound Interface for WebApi
export interface dt_Order_D365Api {
  // Created By LookupType Unique identifier of the user who created the record.
  _createdby_value?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: string | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  _createdonbehalfby_value?: string | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // overriddencreatedon DateTimeType DateAndTime:UserLocal
  dnbs_overriddencreatedon?: string | null;
  // Account [Required] LookupType
  _dt_account_value?: string;
  // Accounting Note StringType
  dt_accountingnote?: string | null;
  // Account Manager LookupType
  _dt_accountmanager_value?: string | null;
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
  _dt_contact_value?: string | null;
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
  dt_dateapproved?: string | null;
  // Date Customer Requested DateTimeType DateOnly:UserLocal
  dt_datecustomerrequested?: string | null;
  // Date Emailed Confirmation DateTimeType DateAndTime:UserLocal
  dt_dateemailedconfirmation?: string | null;
  // Date Emailed Proof DateTimeType DateAndTime:UserLocal
  dt_dateemailedproof?: string | null;
  // Date Emailed Tracking DateTimeType DateAndTime:UserLocal
  dt_dateemailedtracking?: string | null;
  // Date Fulfilled DateTimeType DateAndTime:UserLocal
  dt_datefulfilled?: string | null;
  // Date Submitted DateTimeType DateAndTime:UserLocal
  dt_datesubmitted?: string | null;
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
  dt_duedate?: string | null;
  // Has Documents BooleanType
  dt_hasdocuments?: boolean | null;
  // Order ID StringType
  dt_id?: string | null;
  // Ink Milliliters Per Order DecimalType
  dt_inkmillilitersperorder?: number | null;
  // LastStageTime DateTimeType DateAndTime:UserLocal
  dt_laststagetime?: string | null;
  // Lead Time - Date Approved DecimalType
  dt_leadtime_dateapproved?: number | null;
  // Lead Time - Date Submitted DecimalType
  dt_leadtime_datesubmitted?: number | null;
  // Online Created By StringType
  dt_onlinecreatedby?: string | null;
  // Originating Opportunity LookupType
  _dt_opportunity_value?: string | null;
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
  dt_orderid?: string | null;
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
  _modifiedby_value?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: string | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  _modifiedonbehalfby_value?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: string | null;
  // Owner OwnerType Owner Id
  _ownerid_value?: string | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  _owningbusinessunit_value?: string | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  _owningteam_value?: string | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  _owninguser_value?: string | null;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: string | null;
  // (Deprecated) Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: string | null;
  // Status dt_order_dt_order_statecode Status of the Order
  statecode?: import("../enums/dt_order_dt_order_statecode").dt_order_dt_order_statecode | null;
  // Status Reason dt_order_dt_order_statuscode Reason for the status of the Order
  statuscode?: import("../enums/dt_order_dt_order_statuscode").dt_order_dt_order_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Currency LookupType Unique identifier of the currency associated with the entity.
  _transactioncurrencyid_value?: string | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
