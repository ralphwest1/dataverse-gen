/* eslint-disable*/

// Early Bound Interface for WebApi
export interface dt_Order_D365Api {
  // Created By LookupType Unique identifier of the user who created the record.
  _createdby_value?: import("undefined")._createdby_value | null;
  //  StringType
  createdbyname?: createdbyname | null;
  //  StringType
  createdbyyominame?: createdbyyominame | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: createdon | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  _createdonbehalfby_value?: import("undefined")._createdonbehalfby_value | null;
  //  StringType
  createdonbehalfbyname?: createdonbehalfbyname | null;
  //  StringType
  createdonbehalfbyyominame?: createdonbehalfbyyominame | null;
  // overriddencreatedon DateTimeType DateAndTime:UserLocal
  dnbs_overriddencreatedon?: dnbs_overriddencreatedon | null;
  // Account [Required] LookupType
  _dt_account_value?: import("undefined")._dt_account_value;
  // Accounting Note StringType
  dt_accountingnote?: dt_accountingnote | null;
  // Account Manager LookupType
  _dt_accountmanager_value?: import("undefined")._dt_accountmanager_value | null;
  //  StringType
  dt_accountmanagername?: dt_accountmanagername | null;
  //  StringType
  dt_accountmanageryominame?: dt_accountmanageryominame | null;
  //  StringType
  dt_accountname?: dt_accountname | null;
  //  StringType
  dt_accountyominame?: dt_accountyominame | null;
  // Action 1 BooleanType
  dt_action1?: dt_action1 | null;
  // Art Required dt_artrequired
  dt_artrequired?: import("../enums/dt_artrequired").dt_artrequired | null;
  // Auto Number StringType
  dt_autonumber?: dt_autonumber | null;
  // Auto Number - Prefixed StringType
  dt_autonumber_prefixed?: dt_autonumber_prefixed | null;
  // Bill To Email StringType
  dt_billto_email?: dt_billto_email | null;
  // Bit BooleanType
  dt_bit?: dt_bit | null;
  // Blank Option Set dt_blankoptionset
  dt_blankoptionset?: import("../enums/dt_blankoptionset").dt_blankoptionset | null;
  // Boxes - Estimate DecimalType
  dt_boxes_estimate?: dt_boxes_estimate | null;
  // Category dt_commissioncategory
  dt_commissioncategory?: import("../enums/dt_commissioncategory").dt_commissioncategory | null;
  // Contact LookupType
  _dt_contact_value?: import("undefined")._dt_contact_value | null;
  //  StringType
  dt_contactname?: dt_contactname | null;
  //  StringType
  dt_contactyominame?: dt_contactyominame | null;
  // Cost Per Label MoneyType
  dt_costperlabel?: dt_costperlabel | null;
  // Cost Per Label (Base) MoneyType Value of the Cost Per Label in base currency.
  dt_costperlabel_base?: dt_costperlabel_base | null;
  // Cost Per Label - Estimate MoneyType
  dt_costperlabel_estimate?: dt_costperlabel_estimate | null;
  // Cost Per Label - Estimate (Base) MoneyType Value of the Cost Per Label - Estimate in base currency.
  dt_costperlabel_estimate_base?: dt_costperlabel_estimate_base | null;
  // Cost Per Square Inch MoneyType
  dt_costpersquareinch?: dt_costpersquareinch | null;
  // Cost Per Square Inch (Base) MoneyType Value of the Cost Per Square Inch in base currency.
  dt_costpersquareinch_base?: dt_costpersquareinch_base | null;
  // Cost Per Square Inch - Estimate MoneyType
  dt_costpersquareinch_estimate?: dt_costpersquareinch_estimate | null;
  // Cost Per Square Inch - Estimate (Base) MoneyType Value of the Cost Per Square Inch - Estimate in base currency.
  dt_costpersquareinch_estimate_base?: dt_costpersquareinch_estimate_base | null;
  // Credit Card Amount MoneyType
  dt_creditcardamount?: dt_creditcardamount | null;
  // Credit Card Amount (Base) MoneyType Value of the Credit Card Amount in base currency.
  dt_creditcardamount_base?: dt_creditcardamount_base | null;
  // Date Approved DateTimeType DateAndTime:UserLocal
  dt_dateapproved?: dt_dateapproved | null;
  // Date Customer Requested DateTimeType DateOnly:UserLocal
  dt_datecustomerrequested?: dt_datecustomerrequested | null;
  // Date Emailed Confirmation DateTimeType DateAndTime:UserLocal
  dt_dateemailedconfirmation?: dt_dateemailedconfirmation | null;
  // Date Emailed Proof DateTimeType DateAndTime:UserLocal
  dt_dateemailedproof?: dt_dateemailedproof | null;
  // Date Emailed Tracking DateTimeType DateAndTime:UserLocal
  dt_dateemailedtracking?: dt_dateemailedtracking | null;
  // Date Fulfilled DateTimeType DateAndTime:UserLocal
  dt_datefulfilled?: dt_datefulfilled | null;
  // Date Submitted DateTimeType DateAndTime:UserLocal
  dt_datesubmitted?: dt_datesubmitted | null;
  // Defect - Cost MoneyType
  dt_defect_cost?: dt_defect_cost | null;
  // Defect - Cost (Base) MoneyType Value of the Defect - Cost in base currency.
  dt_defect_cost_base?: dt_defect_cost_base | null;
  // Defect - Labels IntegerType
  dt_defect_labels?: dt_defect_labels | null;
  // Defect - Percent DecimalType
  dt_defect_percent?: dt_defect_percent | null;
  // Defect - Square Inches DecimalType
  dt_defect_squareinches?: dt_defect_squareinches | null;
  // Defect - Square Inches Inspected DecimalType
  dt_defect_squareinchesinspected?: dt_defect_squareinchesinspected | null;
  // Due Date DateTimeType DateOnly:UserLocal
  dt_duedate?: dt_duedate | null;
  // Has Documents BooleanType
  dt_hasdocuments?: dt_hasdocuments | null;
  // Order ID StringType
  dt_id?: dt_id | null;
  // Ink Milliliters Per Order DecimalType
  dt_inkmillilitersperorder?: dt_inkmillilitersperorder | null;
  // LastStageTime DateTimeType DateAndTime:UserLocal
  dt_laststagetime?: dt_laststagetime | null;
  // Lead Time - Date Approved DecimalType
  dt_leadtime_dateapproved?: dt_leadtime_dateapproved | null;
  // Lead Time - Date Submitted DecimalType
  dt_leadtime_datesubmitted?: dt_leadtime_datesubmitted | null;
  // Online Created By StringType
  dt_onlinecreatedby?: dt_onlinecreatedby | null;
  // Originating Opportunity LookupType
  _dt_opportunity_value?: import("undefined")._dt_opportunity_value | null;
  //  StringType
  dt_opportunityname?: dt_opportunityname | null;
  // Order StringType Required name field
  dt_order_id?: dt_order_id | null;
  // Order - Summary StringType
  dt_order_summary?: dt_order_summary | null;
  // Order Confirmation StringType
  dt_orderconfirmation?: dt_orderconfirmation | null;
  // Ordered Labels DecimalType
  dt_orderedlabels?: dt_orderedlabels | null;
  // Ordered Sheets DecimalType
  dt_orderedsheets?: dt_orderedsheets | null;
  // Ordered Square Inches DecimalType
  dt_orderedsquareinches?: dt_orderedsquareinches | null;
  // Order GUID UniqueidentifierType Unique identifier for entity instances
  dt_orderid?: import("undefined").dt_orderid | null;
  // Order Lines IntegerType
  dt_orderlines_count?: dt_orderlines_count | null;
  // Order Lines - Price Adjustment Percent DecimalType
  dt_orderlines_priceadjustmentpercent?: dt_orderlines_priceadjustmentpercent | null;
  // Order Lines - Price Adjustments MoneyType
  dt_orderlines_priceadjustments?: dt_orderlines_priceadjustments | null;
  // Order Lines - Price Adjustments (Base) MoneyType Value of the Order Lines - Price Adjustments in base currency.
  dt_orderlines_priceadjustments_base?: dt_orderlines_priceadjustments_base | null;
  // Order Lines - Price Adjustment Types dt_priceadjustmenttype
  dt_orderlines_priceadjustmenttypes?: import("../enums/dt_priceadjustmenttype").dt_orderlines_priceadjustmenttypes | null;
  // Order Lines - Total Price MoneyType
  dt_orderlines_totalprice?: dt_orderlines_totalprice | null;
  // Order Lines - Total Price (Base) MoneyType Value of the Order Lines - Total Price in base currency.
  dt_orderlines_totalprice_base?: dt_orderlines_totalprice_base | null;
  // Order Type dt_ordertype
  dt_ordertype?: import("../enums/dt_ordertype").dt_ordertype | null;
  // Order Type 2 dt_ordertype2
  dt_ordertype2?: import("../enums/dt_ordertype2").dt_ordertype2 | null;
  // Other Charge Amount [Required] MoneyType
  dt_otherchargeamount?: dt_otherchargeamount;
  // Other Charge Amount (Base) MoneyType Value of the Other Charge Amount in base currency.
  dt_otherchargeamount_base?: dt_otherchargeamount_base | null;
  // Other Charge Note StringType
  dt_otherchargenote?: dt_otherchargenote | null;
  // Overage Labels DecimalType
  dt_overagelabels?: dt_overagelabels | null;
  // Overage Labels - Estimate DecimalType
  dt_overagelabels_estimate?: dt_overagelabels_estimate | null;
  // Overage Percent DecimalType
  dt_overagepercent?: dt_overagepercent | null;
  // Overage Percent - Estimate DecimalType
  dt_overagepercent_estimate?: dt_overagepercent_estimate | null;
  // Overage Sheets DecimalType
  dt_overagesheets?: dt_overagesheets | null;
  // Overage Sheets - Estimate DecimalType
  dt_overagesheets_estimate?: dt_overagesheets_estimate | null;
  // Overage Square Inches DecimalType
  dt_overagesquareinches?: dt_overagesquareinches | null;
  // Overage Square Inches - Estimate DecimalType
  dt_overagesquareinches_estimate?: dt_overagesquareinches_estimate | null;
  // Payment Method dt_paymentmethod
  dt_paymentmethod?: import("../enums/dt_paymentmethod").dt_paymentmethod | null;
  // Payment Terms dt_paymentterms
  dt_paymentterms?: import("../enums/dt_paymentterms").dt_paymentterms | null;
  // Order PID StringType
  dt_pid?: dt_pid | null;
  // Price Per Square Inch MoneyType
  dt_pricepersquareinch?: dt_pricepersquareinch | null;
  // Price Per Square Inch (Base) MoneyType Value of the Price Per Square Inch in base currency.
  dt_pricepersquareinch_base?: dt_pricepersquareinch_base | null;
  // Pricing Type dt_pricingtype
  dt_pricingtype?: import("../enums/dt_pricingtype").dt_pricingtype | null;
  // Priority dt_orderpriority
  dt_priority?: import("../enums/dt_orderpriority").dt_priority | null;
  // Purchase Order StringType
  dt_purchaseorder?: dt_purchaseorder | null;
  // Qb Transactions StringType
  dt_qbtransactions?: dt_qbtransactions | null;
  // QuickBooks Invoice StringType
  dt_quickbooksinvoice?: dt_quickbooksinvoice | null;
  // QuickBooks Payment StringType
  dt_quickbookspayment?: dt_quickbookspayment | null;
  // Redo BooleanType
  dt_redo?: dt_redo | null;
  // Set Reorder Reminder dt_yesnoblank
  dt_setreorderreminder?: import("../enums/dt_yesnoblank").dt_setreorderreminder | null;
  // Set-up Amount [Required] MoneyType
  dt_setupamount?: dt_setupamount;
  // Set-up Amount (Base) MoneyType Value of the Set-up Amount in base currency.
  dt_setupamount_base?: dt_setupamount_base | null;
  // SharePoint Folder BooleanType
  dt_sharepointfolder?: dt_sharepointfolder | null;
  // Blind Ship BooleanType
  dt_shipfrom?: dt_shipfrom | null;
  // ShipFrom City StringType
  dt_shipfrom_city?: dt_shipfrom_city | null;
  // ShipFrom Company StringType
  dt_shipfrom_company?: dt_shipfrom_company | null;
  // ShipFrom Contact StringType
  dt_shipfrom_contactname?: dt_shipfrom_contactname | null;
  // ShipFrom Country StringType
  dt_shipfrom_country?: dt_shipfrom_country | null;
  // ShipFrom Street 1 StringType
  dt_shipfrom_line1?: dt_shipfrom_line1 | null;
  // ShipFrom Street 2 StringType
  dt_shipfrom_line2?: dt_shipfrom_line2 | null;
  // ShipFrom Lookup dt_blankoptionset
  dt_shipfrom_lookup?: import("../enums/dt_blankoptionset").dt_shipfrom_lookup | null;
  // ShipFrom ZIP StringType
  dt_shipfrom_postalcode?: dt_shipfrom_postalcode | null;
  // ShipFrom State StringType
  dt_shipfrom_stateorprovince?: dt_shipfrom_stateorprovince | null;
  // Shipping Text StringType
  dt_shipping_text?: dt_shipping_text | null;
  // Shipping Account StringType
  dt_shippingaccount?: dt_shippingaccount | null;
  // Shipping Actual Amount MoneyType
  dt_shippingactualamount?: dt_shippingactualamount | null;
  // Shipping Actual Amount (Base) MoneyType Value of the Shipping Actual Amount in base currency.
  dt_shippingactualamount_base?: dt_shippingactualamount_base | null;
  // Shipping Charged Amount MoneyType
  dt_shippingchargedamount?: dt_shippingchargedamount | null;
  // Shipping Charged Amount (Base) MoneyType Value of the Shipping Charged Amount in base currency.
  dt_shippingchargedamount_base?: dt_shippingchargedamount_base | null;
  // Shipping Estimated Amount MoneyType
  dt_shippingestimatedamount?: dt_shippingestimatedamount | null;
  // Shipping Estimated Amount (Base) MoneyType Value of the Shipping Estimated Amount in base currency.
  dt_shippingestimatedamount_base?: dt_shippingestimatedamount_base | null;
  // Shipping Method dt_shippingmethod
  dt_shippingmethod?: import("../enums/dt_shippingmethod").dt_shippingmethod | null;
  // Shipping Note MemoType
  dt_shippingnote?: dt_shippingnote | null;
  // Shipping Vendor dt_shippingvendor
  dt_shippingvendor?: import("../enums/dt_shippingvendor").dt_shippingvendor | null;
  // ShipStationRecord StringType
  dt_shipstationrecord?: dt_shipstationrecord | null;
  // ShipTo City StringType
  dt_shipto_city?: dt_shipto_city | null;
  // ShipTo Company StringType
  dt_shipto_company?: dt_shipto_company | null;
  // ShipTo Contact StringType
  dt_shipto_contactname?: dt_shipto_contactname | null;
  // ShipTo Country StringType
  dt_shipto_country?: dt_shipto_country | null;
  // ShipTo Email StringType Email to be notified with shipment tracking info, or that the order is ready for pick-up.
  dt_shipto_email?: dt_shipto_email | null;
  // ShipTo Street 1 StringType
  dt_shipto_line1?: dt_shipto_line1 | null;
  // ShipTo Street 2 StringType
  dt_shipto_line2?: dt_shipto_line2 | null;
  // ShipTo Lookup dt_blankoptionset
  dt_shipto_lookup?: import("../enums/dt_blankoptionset").dt_shipto_lookup | null;
  // ShipTo Zip StringType
  dt_shipto_postalcode?: dt_shipto_postalcode | null;
  // ShipTo State StringType
  dt_shipto_stateorprovince?: dt_shipto_stateorprovince | null;
  // Substrate MSI Per Order DecimalType
  dt_substratemsiperorder?: dt_substratemsiperorder | null;
  // Task Time Actual IntegerType
  dt_taskminutes_actual?: dt_taskminutes_actual | null;
  // Task Time Estimate IntegerType
  dt_taskminutes_estimate?: dt_taskminutes_estimate | null;
  // Task Time Remaining IntegerType
  dt_taskminutes_remaining?: dt_taskminutes_remaining | null;
  // This % StringType
  dt_this?: dt_this | null;
  // Total Cost MoneyType
  dt_totalcost?: dt_totalcost | null;
  // Total Cost - Art MoneyType
  dt_totalcost_art?: dt_totalcost_art | null;
  // Total Cost - Art (Base) MoneyType Value of the Total Cost - Art in base currency.
  dt_totalcost_art_base?: dt_totalcost_art_base | null;
  // Total Cost (Base) MoneyType Value of the Total Cost in base currency.
  dt_totalcost_base?: dt_totalcost_base | null;
  // Total Cost - Estimate MoneyType
  dt_totalcost_estimate?: dt_totalcost_estimate | null;
  // Total Cost - Estimate (Base) MoneyType Value of the Total Cost - Estimate in base currency.
  dt_totalcost_estimate_base?: dt_totalcost_estimate_base | null;
  // Total Hours DecimalType
  dt_totalhours?: dt_totalhours | null;
  // Total Hours - Estimate DecimalType
  dt_totalhours_estimate?: dt_totalhours_estimate | null;
  // Total Labels DecimalType
  dt_totallabels?: dt_totallabels | null;
  // Total Margin MoneyType
  dt_totalmargin?: dt_totalmargin | null;
  // Total Margin (Base) MoneyType Value of the Total Margin in base currency.
  dt_totalmargin_base?: dt_totalmargin_base | null;
  // Total Margin - Estimate MoneyType
  dt_totalmargin_estimate?: dt_totalmargin_estimate | null;
  // Total Margin - Estimate (Base) MoneyType Value of the Total Margin - Estimate in base currency.
  dt_totalmargin_estimate_base?: dt_totalmargin_estimate_base | null;
  // Total Margin Percent DecimalType
  dt_totalmarginpercent?: dt_totalmarginpercent | null;
  // Total Margin Percent - Estimate DecimalType
  dt_totalmarginpercent_estimate?: dt_totalmarginpercent_estimate | null;
  // Total Price MoneyType
  dt_totalprice?: dt_totalprice | null;
  // Total Price (Base) MoneyType Value of the Total Price in base currency.
  dt_totalprice_base?: dt_totalprice_base | null;
  // Total Price With Shipping MoneyType
  dt_totalpricewithshipping_calcfield?: dt_totalpricewithshipping_calcfield | null;
  // Total Price With Shipping (Base) MoneyType Value of the Total Price With Shipping in base currency.
  dt_totalpricewithshipping_calcfield_base?: dt_totalpricewithshipping_calcfield_base | null;
  // Total Sheets DecimalType
  dt_totalsheets?: dt_totalsheets | null;
  // Total Square Inches DecimalType
  dt_totalsquareinches?: dt_totalsquareinches | null;
  // Total Time IntegerType
  dt_totaltime?: dt_totaltime | null;
  // Total Time - Art IntegerType
  dt_totaltime_art?: dt_totaltime_art | null;
  // Total Time - Estimate IntegerType
  dt_totaltime_estimate?: dt_totaltime_estimate | null;
  // Tracking Number MemoType
  dt_trackingnumber?: dt_trackingnumber | null;
  // Urethane Liters Per Order DecimalType
  dt_urethanelitersperorder?: dt_urethanelitersperorder | null;
  // Weight - Estimate DecimalType
  dt_weight_estimate?: dt_weight_estimate | null;
  // Exchange Rate DecimalType Exchange rate for the currency associated with the entity with respect to the base currency.
  exchangerate?: exchangerate | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: importsequencenumber | null;
  // Modified By LookupType Unique identifier of the user who modified the record.
  _modifiedby_value?: import("undefined")._modifiedby_value | null;
  //  StringType
  modifiedbyname?: modifiedbyname | null;
  //  StringType
  modifiedbyyominame?: modifiedbyyominame | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: modifiedon | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  _modifiedonbehalfby_value?: import("undefined")._modifiedonbehalfby_value | null;
  //  StringType
  modifiedonbehalfbyname?: modifiedonbehalfbyname | null;
  //  StringType
  modifiedonbehalfbyyominame?: modifiedonbehalfbyyominame | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: overriddencreatedon | null;
  // Owner OwnerType Owner Id
  _ownerid_value?: import("undefined")._ownerid_value | null;
  //  StringType Name of the owner
  owneridname?: owneridname | null;
  //  EntityNameType Owner Id Type
  owneridtype?: owneridtype | null;
  //  StringType Yomi name of the owner
  owneridyominame?: owneridyominame | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  _owningbusinessunit_value?: import("undefined")._owningbusinessunit_value | null;
  //  StringType
  owningbusinessunitname?: owningbusinessunitname | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  _owningteam_value?: import("undefined")._owningteam_value | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  _owninguser_value?: import("undefined")._owninguser_value | null;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("undefined").processid | null;
  // (Deprecated) Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("undefined").stageid | null;
  // Status dt_order_dt_order_statecode Status of the Order
  statecode?: import("../enums/dt_order_dt_order_statecode").statecode | null;
  // Status Reason dt_order_dt_order_statuscode Reason for the status of the Order
  statuscode?: import("../enums/dt_order_dt_order_statuscode").statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: timezoneruleversionnumber | null;
  // Currency LookupType Unique identifier of the currency associated with the entity.
  _transactioncurrencyid_value?: import("undefined")._transactioncurrencyid_value | null;
  //  StringType
  transactioncurrencyidname?: transactioncurrencyidname | null;
  // (Deprecated) Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: traversedpath | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: utcconversiontimezonecode | null;
  // Version Number BigIntType Version Number
  versionnumber?: versionnumber | null;
}
