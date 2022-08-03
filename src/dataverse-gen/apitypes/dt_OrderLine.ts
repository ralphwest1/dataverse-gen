/* eslint-disable*/

// Early Bound Interface for WebApi
export interface dt_OrderLine_D365Api {
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
  // Account LookupType
  _dt_account_value?: import("undefined")._dt_account_value | null;
  //  StringType
  dt_accountname?: dt_accountname | null;
  //  StringType
  dt_accountyominame?: dt_accountyominame | null;
  // Admin Notes StringType
  dt_adminnotes?: dt_adminnotes | null;
  // Auto Number StringType
  dt_autonumber?: dt_autonumber | null;
  // Auto Number - Prefixed StringType
  dt_autonumber_prefixed?: dt_autonumber_prefixed | null;
  // Boxes - Estimate DecimalType
  dt_boxes_estimate?: dt_boxes_estimate | null;
  // Cost Message StringType Options:
mercuryfree;
deleteink;
  dt_costmessage?: dt_costmessage | null;
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
  // Created By External Party StringType
  dt_createdbyexternalparty?: dt_createdbyexternalparty | null;
  // Date Fulfilled DateTimeType DateOnly:UserLocal
  dt_datefulfilled_flow?: dt_datefulfilled_flow | null;
  // Default Hourly Rate [Required] MoneyType
  dt_defaulthourlyrate?: dt_defaulthourlyrate;
  // Default Hourly Rate (Base) MoneyType Value of the Default Hourly Rate in base currency.
  dt_defaulthourlyrate_base?: dt_defaulthourlyrate_base | null;
  // Defect - Cost MoneyType
  dt_defect_cost?: dt_defect_cost | null;
  // Defect - Cost (Base) MoneyType Value of the Defect_Cost in base currency.
  dt_defect_cost_base?: dt_defect_cost_base | null;
  // Defect - Labels IntegerType
  dt_defect_labels?: dt_defect_labels | null;
  // Defect - Percent DecimalType
  dt_defect_percent?: dt_defect_percent | null;
  // Defect - SquareInches IntegerType
  dt_defect_squareinches?: dt_defect_squareinches | null;
  // Defect - Square Inches Inspected DecimalType
  dt_defect_squareinchesinspected?: dt_defect_squareinchesinspected | null;
  // Design [Required] LookupType
  _dt_design_value?: import("undefined")._dt_design_value;
  // Design - Summary StringType
  dt_design_summary?: dt_design_summary | null;
  // Design Layout [Required] LookupType
  _dt_designlayout_value?: import("undefined")._dt_designlayout_value;
  // Design Layout - Summary StringType
  dt_designlayout_summary?: dt_designlayout_summary | null;
  //  StringType
  dt_designlayoutname?: dt_designlayoutname | null;
  //  StringType
  dt_designname?: dt_designname | null;
  // Design Specifications - Summary StringType
  dt_designspecifications_summary?: dt_designspecifications_summary | null;
  // Dispense Is Registered BooleanType
  dt_dispenseisregistered?: dt_dispenseisregistered | null;
  // Dispense Pattern StringType
  dt_dispensepattern?: dt_dispensepattern | null;
  // Dispense Type dt_dispensetype
  dt_dispensetype?: import("../enums/dt_dispensetype").dt_dispensetype | null;
  // Ink Milliliters Per Order DecimalType
  dt_inkmillilitersperorder?: dt_inkmillilitersperorder | null;
  // Ink Milliliters Per Sheet  DecimalType
  dt_inkmilliliterspersheet?: dt_inkmilliliterspersheet | null;
  // Is Adjusted Production Specifications BooleanType
  dt_isadjustedproductionspecifications?: dt_isadjustedproductionspecifications | null;
  // Is Locked Price BooleanType
  dt_islockedprice?: dt_islockedprice | null;
  // Labels Per Dispense IntegerType
  dt_labelsperdispense?: dt_labelsperdispense | null;
  // Labels Per Dispense Type dt_labelsperdispensetype
  dt_labelsperdispensetype?: import("../enums/dt_labelsperdispensetype").dt_labelsperdispensetype | null;
  // Labels Per Sheet IntegerType
  dt_labelspersheet?: dt_labelspersheet | null;
  // Label Square Inches Per Sheet DecimalType
  dt_labelsquareinchespersheet?: dt_labelsquareinchespersheet | null;
  // Order LookupType
  _dt_order_value?: import("undefined")._dt_order_value | null;
  // Order - Summary StringType
  dt_order_summary?: dt_order_summary | null;
  // Order Due Date DateTimeType DateOnly:UserLocal
  dt_orderduedate?: dt_orderduedate | null;
  // Ordered Labels [Required] DecimalType
  dt_orderedlabels?: dt_orderedlabels;
  // Ordered Sheets DecimalType
  dt_orderedsheets?: dt_orderedsheets | null;
  // Ordered Square Inches DecimalType
  dt_orderedsquareinches?: dt_orderedsquareinches | null;
  // Order Line Count IntegerType
  dt_orderlinecount?: dt_orderlinecount | null;
  // Order Line GUID UniqueidentifierType Unique identifier for entity instances
  dt_orderlineid?: import("undefined").dt_orderlineid | null;
  // Order Line Type dt_orderlinetype
  dt_orderlinetype?: import("../enums/dt_orderlinetype").dt_orderlinetype | null;
  //  StringType
  dt_ordername?: dt_ordername | null;
  // Order Priority dt_orderpriority
  dt_orderpriority?: import("../enums/dt_orderpriority").dt_orderpriority | null;
  // Order Status StringType
  dt_orderstatus?: dt_orderstatus | null;
  // Order Task List dt_ordertasktype2
  dt_ordertasklist?: import("../enums/dt_ordertasktype2").dt_ordertasklist | null;
  // Overage Labels DecimalType
  dt_overagelabels?: dt_overagelabels | null;
  // Overage Labels - Estimate DecimalType
  dt_overagelabels_estimate?: dt_overagelabels_estimate | null;
  // Overage Percent DecimalType
  dt_overagepercent?: dt_overagepercent | null;
  // Overage Percent - Estimate DecimalType
  dt_overagepercent_estimate?: dt_overagepercent_estimate | null;
  // Overage Percent - Minimum [Required] DecimalType
  dt_overagepercent_minimum?: dt_overagepercent_minimum;
  // Overage Sheets DecimalType
  dt_overagesheets?: dt_overagesheets | null;
  // Overage Sheets - Estimate DecimalType
  dt_overagesheets_estimate?: dt_overagesheets_estimate | null;
  // Overage Square Inches DecimalType
  dt_overagesquareinches?: dt_overagesquareinches | null;
  // Overage Square Inches - Estimate DecimalType
  dt_overagesquareinches_estimate?: dt_overagesquareinches_estimate | null;
  // Overage Type dt_overagetype
  dt_overagetype?: import("../enums/dt_overagetype").dt_overagetype | null;
  // Order Line [Required] StringType Required name field
  dt_pid?: dt_pid;
  // Price - Override MoneyType
  dt_price_override?: dt_price_override | null;
  // Price - Override (Base) MoneyType Value of the Price - Override in base currency.
  dt_price_override_base?: dt_price_override_base | null;
  // Price Adjustment - By Percent DecimalType
  dt_priceadjustment_bypercent?: dt_priceadjustment_bypercent | null;
  // Price Adjustment - By Total MoneyType
  dt_priceadjustment_bytotal?: dt_priceadjustment_bytotal | null;
  // Price Adjustment - By Total (Base) MoneyType Value of the Price Adjustment - By Total in base currency.
  dt_priceadjustment_bytotal_base?: dt_priceadjustment_bytotal_base | null;
  // Price Adjustment - Per Label MoneyType
  dt_priceadjustment_perlabel?: dt_priceadjustment_perlabel | null;
  // Price Adjustment - Per Label (Base) MoneyType Value of the Price Adjustment - Per Label in base currency.
  dt_priceadjustment_perlabel_base?: dt_priceadjustment_perlabel_base | null;
  // Price Adjustment - Per Square Inch MoneyType
  dt_priceadjustment_persquareinch?: dt_priceadjustment_persquareinch | null;
  // Price Adjustment - Per Square Inch (Base) MoneyType Value of the Price Adjustment - Per Square Inch in base currency.
  dt_priceadjustment_persquareinch_base?: dt_priceadjustment_persquareinch_base | null;
  // Price Adjustment Note StringType
  dt_priceadjustmentnote?: dt_priceadjustmentnote | null;
  // Price Adjustment Type dt_priceadjustmenttype
  dt_priceadjustmenttype?: import("../enums/dt_priceadjustmenttype").dt_priceadjustmenttype | null;
  // PriceMessage StringType
  dt_pricemessage?: dt_pricemessage | null;
  // Price Per Square Inch MoneyType
  dt_pricepersquareinch?: dt_pricepersquareinch | null;
  // Price Per Square Inch (Base) MoneyType Value of the Price Per Square Inch in base currency.
  dt_pricepersquareinch_base?: dt_pricepersquareinch_base | null;
  // Price MoneyType
  dt_priceperunit?: dt_priceperunit | null;
  // Price Per Unit - Adjustments MoneyType
  dt_priceperunit_adjustments?: dt_priceperunit_adjustments | null;
  // Price Per Unit - Adjustments (Base) MoneyType Value of the Price Per Unit - Adjustments in base currency.
  dt_priceperunit_adjustments_base?: dt_priceperunit_adjustments_base | null;
  // Price Per Unit (Base) MoneyType Value of the Price Per Unit in base currency.
  dt_priceperunit_base?: dt_priceperunit_base | null;
  // Price Per Unit - Base MoneyType
  dt_priceperunit_baseprice?: dt_priceperunit_baseprice | null;
  // Price Per Unit - Base (Base) MoneyType Value of the Price Per Unit - Base in base currency.
  dt_priceperunit_baseprice_base?: dt_priceperunit_baseprice_base | null;
  // Price. MoneyType
  dt_priceperunit_calcfd?: dt_priceperunit_calcfd | null;
  // Price. (Base) MoneyType Value of the Price. in base currency.
  dt_priceperunit_calcfd_base?: dt_priceperunit_calcfd_base | null;
  // Price Per Unit - Default DecimalType
  dt_priceperunit_default?: dt_priceperunit_default | null;
  // Price Per Unit - Options MoneyType
  dt_priceperunit_options?: dt_priceperunit_options | null;
  // Price Per Unit_Options (Base) MoneyType Value of the Price Per Unit_Options in base currency.
  dt_priceperunit_options_base?: dt_priceperunit_options_base | null;
  // Pricing Type dt_pricingtype
  dt_pricingtype?: import("../enums/dt_pricingtype").dt_pricingtype | null;
  // Primary Image ImageType
  dt_primaryimage?: dt_primaryimage | null;
  //  BigIntType
  dt_primaryimage_timestamp?: dt_primaryimage_timestamp | null;
  //  StringType
  dt_primaryimage_url?: dt_primaryimage_url | null;
  //  UniqueidentifierType
  dt_primaryimageid?: import("undefined").dt_primaryimageid | null;
  // Quantity Overage DecimalType
  dt_quantityoverage?: dt_quantityoverage | null;
  // Quantity Shipped DecimalType
  dt_quantityshipped?: dt_quantityshipped | null;
  // Sheets Per Board IntegerType
  dt_sheetsperboard?: dt_sheetsperboard | null;
  // Square Inches Per Label DecimalType
  dt_squareinchesperlabel?: dt_squareinchesperlabel | null;
  // Substrate MSI Per Order DecimalType
  dt_substratemsiperorder?: dt_substratemsiperorder | null;
  // Substrate Square Inches Per Sheet DecimalType
  dt_substratesquareinchespersheet?: dt_substratesquareinchespersheet | null;
  // Task Assigned To StringType
  dt_taskassignedto?: dt_taskassignedto | null;
  // Task Complete Time DateTimeType DateAndTime:UserLocal
  dt_taskcompletetime?: dt_taskcompletetime | null;
  // Task Time Actual IntegerType
  dt_taskminutes_actual?: dt_taskminutes_actual | null;
  // Task Time Estimate IntegerType
  dt_taskminutes_estimate?: dt_taskminutes_estimate | null;
  // Task Time Remaining IntegerType
  dt_taskminutes_remaining?: dt_taskminutes_remaining | null;
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
  // Total Price Adjustment Percent DecimalType
  dt_totalprice_adjustmentpercent?: dt_totalprice_adjustmentpercent | null;
  // Total Price - Adjustments MoneyType
  dt_totalprice_adjustments?: dt_totalprice_adjustments | null;
  // Total Price - Adjustments (Base) MoneyType Value of the Total Price - Adjustments in base currency.
  dt_totalprice_adjustments_base?: dt_totalprice_adjustments_base | null;
  // Total Price (Base) MoneyType Value of the Total Price in base currency.
  dt_totalprice_base?: dt_totalprice_base | null;
  // Total Price. MoneyType
  dt_totalprice_calcfd?: dt_totalprice_calcfd | null;
  // Total Price. (Base) MoneyType Value of the Total Price. in base currency.
  dt_totalprice_calcfd_base?: dt_totalprice_calcfd_base | null;
  // Total Price - Default DecimalType
  dt_totalprice_default?: dt_totalprice_default | null;
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
  // Urethane Liters Per Order DecimalType
  dt_urethanelitersperorder?: dt_urethanelitersperorder | null;
  // Weight - Estimate DecimalType
  dt_weight_estimate?: dt_weight_estimate | null;
  // EntityImage ImageType
  entityimage?: entityimage | null;
  //  BigIntType
  entityimage_timestamp?: entityimage_timestamp | null;
  //  StringType
  entityimage_url?: entityimage_url | null;
  //  UniqueidentifierType
  entityimageid?: import("undefined").entityimageid | null;
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
  // Status dt_orderline_dt_orderline_statecode Status of the Order Line
  statecode?: import("../enums/dt_orderline_dt_orderline_statecode").statecode | null;
  // Status Reason dt_orderline_dt_orderline_statuscode Reason for the status of the Order Line
  statuscode?: import("../enums/dt_orderline_dt_orderline_statuscode").statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: timezoneruleversionnumber | null;
  // Currency LookupType Unique identifier of the currency associated with the entity.
  _transactioncurrencyid_value?: import("undefined")._transactioncurrencyid_value | null;
  //  StringType
  transactioncurrencyidname?: transactioncurrencyidname | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: utcconversiontimezonecode | null;
  // Version Number BigIntType Version Number
  versionnumber?: versionnumber | null;
}
