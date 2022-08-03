/* eslint-disable*/

// Early Bound Interface for WebApi
export interface dt_Design_apitype {
  // Created By LookupType Unique identifier of the user who created the record.
  _createdby_value?: string | null;
  "_createdby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_createdby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: string | null;
  "createdon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  _createdonbehalfby_value?: string | null;
  "_createdonbehalfby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_createdonbehalfby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_createdonbehalfby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // overriddencreatedon DateTimeType DateAndTime:UserLocal
  dnbs_overriddencreatedon?: string | null;
  "dnbs_overriddencreatedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Account [Required] LookupType
  _dt_account_value?: string;
  "_dt_account_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_dt_account_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_dt_account_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  dt_accountname?: string | null;
  //  StringType
  dt_accountyominame?: string | null;
  // Adhesive dt_dsn_adhesive
  dt_adhesive?: import("../enums/dt_dsn_adhesive").dt_dsn_adhesive | null;
  "dt_adhesive@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Other Adhesive dt_adhesivelaminate
  dt_adhesivelaminate?: import("../enums/dt_adhesivelaminate").dt_adhesivelaminate | null;
  "dt_adhesivelaminate@OData.Community.Display.V1.FormattedValue"?: string | null;
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
  "dt_createdbyexternalparty@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Customer Part Number StringType
  dt_customerpartnumber?: string | null;
  // Default Layout LookupType
  _dt_defaultlayout_value?: string | null;
  "_dt_defaultlayout_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_dt_defaultlayout_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_dt_defaultlayout_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  dt_defaultlayoutname?: string | null;
  // Description MemoType
  dt_description?: string | null;
  // Design - Summary StringType
  dt_design_summary?: string | null;
  // Design GUID UniqueidentifierType Unique identifier for entity instances
  dt_designid?: string | null;
  // Design Name StringType
  dt_designname?: string | null;
  // Design Other Specifications - Summary StringType
  dt_designotherspecifications_summary?: string | null;
  // Design Specifications - Summary StringType
  dt_designspecifications_summary?: string | null;
  // Design Type [Required] dt_dsn_designtype
  dt_designtype?: import("../enums/dt_dsn_designtype").dt_dsn_designtype;
  "dt_designtype@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Dome [Required] dt_dsn_dome
  dt_dome?: import("../enums/dt_dsn_dome").dt_dsn_dome;
  "dt_dome@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Dome Height dt_domeheight
  dt_domeheight?: import("../enums/dt_domeheight").dt_domeheight | null;
  "dt_domeheight@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Emboss dt_emboss
  dt_emboss?: import("../enums/dt_emboss").dt_emboss | null;
  "dt_emboss@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Foil Stamp dt_foilstamp
  dt_foilstamp?: import("../enums/dt_foilstamp").dt_foilstamp | null;
  "dt_foilstamp@OData.Community.Display.V1.FormattedValue"?: string | null;
  // hasDocuments BooleanType
  dt_hasdocuments?: boolean | null;
  "dt_hasdocuments@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Design ID StringType
  dt_id?: string | null;
  // ImageMetaData StringType
  dt_imagemetadata?: string | null;
  // Height [Required] DecimalType
  dt_labelheight?: number;
  "dt_labelheight@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Width [Required] DecimalType
  dt_labelwidth?: number;
  "dt_labelwidth@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Last Order DateTimeType DateOnly:UserLocal
  dt_lastorder_rollup?: string | null;
  "dt_lastorder_rollup@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Last Order (Last Updated On) DateTimeType Last Updated time of rollup field Last Order. DateAndTime:UserLocal
  dt_lastorder_rollup_date?: string | null;
  "dt_lastorder_rollup_date@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Last Order (State) IntegerType State of rollup field Last Order.
  dt_lastorder_rollup_state?: number | null;
  "dt_lastorder_rollup_state@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Layout For dt_layoutfor
  dt_layoutfor?: import("../enums/dt_layoutfor").dt_layoutfor | null;
  "dt_layoutfor@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Ordering Options dt_orderingoptions_design
  dt_orderingoptions?: import("../enums/dt_orderingoptions_design").dt_orderingoptions_design[] | null;
  "dt_orderingoptions@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Orders IntegerType
  dt_orders_rollup?: number | null;
  "dt_orders_rollup@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Orders (Last Updated On) DateTimeType Last Updated time of rollup field Orders. DateAndTime:UserLocal
  dt_orders_rollup_date?: string | null;
  "dt_orders_rollup_date@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Orders (State) IntegerType State of rollup field Orders.
  dt_orders_rollup_state?: number | null;
  "dt_orders_rollup_state@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Perimeter Inches Per Label DecimalType
  dt_perimeterinchesperlabel?: number | null;
  "dt_perimeterinchesperlabel@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Perimeter Inches Per Label - Calculated DecimalType
  dt_perimeterinchesperlabel_calculated?: number | null;
  "dt_perimeterinchesperlabel_calculated@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Perimeter Inches Per Label - Exact DecimalType
  dt_perimeterinchesperlabel_exact?: number | null;
  "dt_perimeterinchesperlabel_exact@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Design StringType Required name field
  dt_pid?: string | null;
  // Design PID StringType
  dt_pid0?: string | null;
  // Primary Image ImageType
  dt_primaryimage?: string | null;
  //  BigIntType
  dt_primaryimage_timestamp?: number | null;
  "dt_primaryimage_timestamp@OData.Community.Display.V1.FormattedValue"?: string | null;
  //  StringType
  dt_primaryimage_url?: string | null;
  //  UniqueidentifierType
  dt_primaryimageid?: string | null;
  // Print [Required] dt_dsn_print
  dt_print?: import("../enums/dt_dsn_print").dt_dsn_print;
  "dt_print@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Print Material [Required] dt_printmaterial
  dt_printmaterial?: import("../enums/dt_printmaterial").dt_printmaterial;
  "dt_printmaterial@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Print Material Text StringType
  dt_printmaterial_text?: string | null;
  // Print Surface dt_dsn_printsurface
  dt_printsurface?: import("../enums/dt_dsn_printsurface").dt_dsn_printsurface | null;
  "dt_printsurface@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Proof File StringType
  dt_prooffile?: string | null;
  // Proof Link StringType
  dt_prooflink?: string | null;
  // Quantity Ordered DecimalType
  dt_quantityordered_rollup?: number | null;
  "dt_quantityordered_rollup@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Quantity Ordered (Last Updated On) DateTimeType Last Updated time of rollup field Quantity Ordered. DateAndTime:UserLocal
  dt_quantityordered_rollup_date?: string | null;
  "dt_quantityordered_rollup_date@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Quantity Ordered (State) IntegerType State of rollup field Quantity Ordered.
  dt_quantityordered_rollup_state?: number | null;
  "dt_quantityordered_rollup_state@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Revenue MoneyType
  dt_revenue_rollup?: number | null;
  "dt_revenue_rollup@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Revenue (Base) MoneyType Value of the Revenue in base currency.
  dt_revenue_rollup_base?: number | null;
  "dt_revenue_rollup_base@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Revenue (Last Updated On) DateTimeType Last Updated time of rollup field Revenue. DateAndTime:UserLocal
  dt_revenue_rollup_date?: string | null;
  "dt_revenue_rollup_date@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Revenue (State) IntegerType State of rollup field Revenue.
  dt_revenue_rollup_state?: number | null;
  "dt_revenue_rollup_state@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Shape [Required] dt_dsn_shape
  dt_shape?: import("../enums/dt_dsn_shape").dt_dsn_shape;
  "dt_shape@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Share Point Folder BooleanType
  dt_sharepointfolder?: boolean | null;
  "dt_sharepointfolder@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Square Inches Per Label DecimalType
  dt_squareinchesperlabel?: number | null;
  "dt_squareinchesperlabel@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Square Inches Per Label - Calculated DecimalType
  dt_squareinchesperlabel_calculated?: number | null;
  "dt_squareinchesperlabel_calculated@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Square Inches Per Label - Exact DecimalType
  dt_squareinchesperlabel_exact?: number | null;
  "dt_squareinchesperlabel_exact@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Transfer Tape dt_transfertape
  dt_transfertape?: import("../enums/dt_transfertape").dt_transfertape | null;
  "dt_transfertape@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Variable  Data dt_dsn_variabledata
  dt_variabledata?: import("../enums/dt_dsn_variabledata").dt_dsn_variabledata | null;
  "dt_variabledata@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Exchange Rate DecimalType Exchange rate for the currency associated with the entity with respect to the base currency.
  exchangerate?: number | null;
  "exchangerate@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  "importsequencenumber@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Modified By LookupType Unique identifier of the user who modified the record.
  _modifiedby_value?: string | null;
  "_modifiedby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_modifiedby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_modifiedby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: string | null;
  "modifiedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  _modifiedonbehalfby_value?: string | null;
  "_modifiedonbehalfby_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_modifiedonbehalfby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_modifiedonbehalfby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: string | null;
  "overriddencreatedon@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Owner OwnerType Owner Id
  _ownerid_value?: string | null;
  "_ownerid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  _owningbusinessunit_value?: string | null;
  "_owningbusinessunit_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_owningbusinessunit_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_owningbusinessunit_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  _owningteam_value?: string | null;
  "_owningteam_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  _owninguser_value?: string | null;
  "_owninguser_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  // Status dt_design_dt_design_statecode Status of the Design
  statecode?: import("../enums/dt_design_dt_design_statecode").dt_design_dt_design_statecode | null;
  "statecode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Status Reason dt_design_dt_design_statuscode Reason for the status of the Design
  statuscode?: import("../enums/dt_design_dt_design_statuscode").dt_design_dt_design_statuscode | null;
  "statuscode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  "timezoneruleversionnumber@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Currency LookupType Unique identifier of the currency associated with the entity.
  _transactioncurrencyid_value?: string | null;
  "_transactioncurrencyid_value@OData.Community.Display.V1.FormattedValue"?: string | null;
  "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string | null;
  "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  "utcconversiontimezonecode@OData.Community.Display.V1.FormattedValue"?: string | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  "versionnumber@OData.Community.Display.V1.FormattedValue"?: string | null;
}
