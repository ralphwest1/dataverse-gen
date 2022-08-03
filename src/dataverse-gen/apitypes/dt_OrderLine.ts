/* eslint-disable*/

// Early Bound Interface for WebApi
export interface dt_OrderLine_D365Api {
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
  // Account LookupType
  _dt_account_value?: string | null;
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
  // Cost Message StringType Options:
mercuryfree;
deleteink;
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
  dt_datefulfilled_flow?: string | null;
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
  _dt_design_value?: string;
  // Design - Summary StringType
  dt_design_summary?: string | null;
  // Design Layout [Required] LookupType
  _dt_designlayout_value?: string;
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
  _dt_order_value?: string | null;
  // Order - Summary StringType
  dt_order_summary?: string | null;
  // Order Due Date DateTimeType DateOnly:UserLocal
  dt_orderduedate?: string | null;
  // Ordered Labels [Required] DecimalType
  dt_orderedlabels?: number;
  // Ordered Sheets DecimalType
  dt_orderedsheets?: number | null;
  // Ordered Square Inches DecimalType
  dt_orderedsquareinches?: number | null;
  // Order Line Count IntegerType
  dt_orderlinecount?: number | null;
  // Order Line GUID UniqueidentifierType Unique identifier for entity instances
  dt_orderlineid?: string | null;
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
  dt_primaryimageid?: string | null;
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
  dt_taskcompletetime?: string | null;
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
  entityimageid?: string | null;
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
  // Status dt_orderline_dt_orderline_statecode Status of the Order Line
  statecode?: import("../enums/dt_orderline_dt_orderline_statecode").dt_orderline_dt_orderline_statecode | null;
  // Status Reason dt_orderline_dt_orderline_statuscode Reason for the status of the Order Line
  statuscode?: import("../enums/dt_orderline_dt_orderline_statuscode").dt_orderline_dt_orderline_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Currency LookupType Unique identifier of the currency associated with the entity.
  _transactioncurrencyid_value?: string | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
