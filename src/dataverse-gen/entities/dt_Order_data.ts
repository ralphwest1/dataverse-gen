{
	"options": {
		"entities": [
			"dt_order"
		],
		"actions": [],
		"functions": [
			"RetrieveMetadataChanges"
		],
		"referencedTypes": {
			"Object": {
				"name": "ObjectValue"
			},
			"Guid": {
				"name": "Guid",
				"import": "dataverse-ify"
			},
			"Entity": {
				"name": "IEntity",
				"import": "dataverse-ify"
			},
			"EntityReference": {
				"name": "EntityReference",
				"import": "dataverse-ify"
			},
			"WebApiExecuteRequest": {
				"name": "WebApiExecuteRequest",
				"import": "dataverse-ify"
			},
			"StructuralProperty": {
				"name": "StructuralProperty",
				"import": "dataverse-ify"
			},
			"OperationType": {
				"name": "OperationType",
				"import": "dataverse-ify"
			},
			"ActivityParty": {
				"name": "ActivityParty",
				"import": "dataverse-ify"
			},
			"enums": {
				"import": "../enums/"
			},
			"complexTypes": {
				"import": "../complextypes/"
			},
			"entityTypes": {
				"import": "../entities/"
			}
		},
		"output": {
			"useCache": "true",
			"outputRoot": "./src/dataverse-gen",
			"templateRoot": "./_templates",
			"fileSuffix": ".ts"
		}
	},
	"item": {
		"Name": "dt_order",
		"BaseType": "mscrm.crmbaseentity",
		"Key": {
			"PropertyRef": {
				"_attributes": {
					"Name": "dt_orderid"
				}
			}
		},
		"KeyName": "dt_orderid",
		"Abstract": false,
		"Properties": [
			{
				"Type": "LookupType",
				"Name": "createdby",
				"SchemaName": "CreatedBy",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Unique identifier of the user who created the record.",
				"DisplayName": "Created By",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "createdbyname",
				"SchemaName": "CreatedByName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "createdbyyominame",
				"SchemaName": "CreatedByYomiName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "createdon",
				"SchemaName": "CreatedOn",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Date and time when the record was created.",
				"DisplayName": "Created On",
				"Format": "DateAndTime:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "LookupType",
				"Name": "createdonbehalfby",
				"SchemaName": "CreatedOnBehalfBy",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Unique identifier of the delegate user who created the record.",
				"DisplayName": "Created By (Delegate)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "createdonbehalfbyname",
				"SchemaName": "CreatedOnBehalfByName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "createdonbehalfbyyominame",
				"SchemaName": "CreatedOnBehalfByYomiName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "dnbs_overriddencreatedon",
				"SchemaName": "dnbs_overriddencreatedon",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "overriddencreatedon",
				"Format": "DateAndTime:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "LookupType",
				"Name": "dt_account",
				"SchemaName": "dt_Account",
				"IsRequired": true,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Account",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_accountingnote",
				"SchemaName": "dt_AccountingNote",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Accounting Note",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "LookupType",
				"Name": "dt_accountmanager",
				"SchemaName": "dt_AccountManager",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Account Manager",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_accountmanagername",
				"SchemaName": "dt_AccountManagerName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_accountmanageryominame",
				"SchemaName": "dt_AccountManagerYomiName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_accountname",
				"SchemaName": "dt_AccountName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_accountyominame",
				"SchemaName": "dt_AccountYomiName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "BooleanType",
				"Name": "dt_action1",
				"SchemaName": "dt_Action1",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Action 1",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "boolean",
					"outputType": 3
				}
			},
			{
				"Type": "dt_artrequired",
				"Name": "dt_artrequired",
				"SchemaName": "dt_ArtRequired",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Art Required",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_artrequired",
					"outputType": 0,
					"importLocation": "../enums/dt_artrequired"
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_autonumber",
				"SchemaName": "dt_AutoNumber",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Auto Number",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_autonumber_prefixed",
				"SchemaName": "dt_AutoNumber_Prefixed",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Auto Number - Prefixed",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_billto_email",
				"SchemaName": "dt_BillTo_Email",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Bill To Email",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "BooleanType",
				"Name": "dt_bit",
				"SchemaName": "dt_Bit",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Bit",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "boolean",
					"outputType": 3
				}
			},
			{
				"Type": "dt_blankoptionset",
				"Name": "dt_blankoptionset",
				"SchemaName": "dt_BlankOptionSet",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Blank Option Set",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_blankoptionset",
					"outputType": 0,
					"importLocation": "../enums/dt_blankoptionset"
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_boxes_estimate",
				"SchemaName": "dt_Boxes_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Boxes - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "dt_commissioncategory",
				"Name": "dt_commissioncategory",
				"SchemaName": "dt_CommissionCategory",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Category",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_commissioncategory",
					"outputType": 0,
					"importLocation": "../enums/dt_commissioncategory"
				}
			},
			{
				"Type": "LookupType",
				"Name": "dt_contact",
				"SchemaName": "dt_Contact",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Contact",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_contactname",
				"SchemaName": "dt_ContactName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_contactyominame",
				"SchemaName": "dt_ContactYomiName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_costperlabel",
				"SchemaName": "dt_CostPerLabel",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Cost Per Label",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_costperlabel_base",
				"SchemaName": "dt_costperlabel_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Cost Per Label in base currency.",
				"DisplayName": "Cost Per Label (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_costperlabel_estimate",
				"SchemaName": "dt_CostPerLabel_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Cost Per Label - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_costperlabel_estimate_base",
				"SchemaName": "dt_costperlabel_estimate_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Cost Per Label - Estimate in base currency.",
				"DisplayName": "Cost Per Label - Estimate (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_costpersquareinch",
				"SchemaName": "dt_CostPerSquareInch",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Cost Per Square Inch",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_costpersquareinch_base",
				"SchemaName": "dt_costpersquareinch_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Cost Per Square Inch in base currency.",
				"DisplayName": "Cost Per Square Inch (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_costpersquareinch_estimate",
				"SchemaName": "dt_CostPerSquareInch_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Cost Per Square Inch - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_costpersquareinch_estimate_base",
				"SchemaName": "dt_costpersquareinch_estimate_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Cost Per Square Inch - Estimate in base currency.",
				"DisplayName": "Cost Per Square Inch - Estimate (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_creditcardamount",
				"SchemaName": "dt_CreditCardAmount",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Credit Card Amount",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_creditcardamount_base",
				"SchemaName": "dt_creditcardamount_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Credit Card Amount in base currency.",
				"DisplayName": "Credit Card Amount (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "dt_dateapproved",
				"SchemaName": "dt_DateApproved",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Date Approved",
				"Format": "DateAndTime:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "dt_datecustomerrequested",
				"SchemaName": "dt_DateCustomerRequested",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Date Customer Requested",
				"Format": "DateOnly:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "dt_dateemailedconfirmation",
				"SchemaName": "dt_DateEmailedConfirmation",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Date Emailed Confirmation",
				"Format": "DateAndTime:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "dt_dateemailedproof",
				"SchemaName": "dt_DateEmailedProof",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Date Emailed Proof",
				"Format": "DateAndTime:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "dt_dateemailedtracking",
				"SchemaName": "dt_DateEmailedTracking",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Date Emailed Tracking",
				"Format": "DateAndTime:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "dt_datefulfilled",
				"SchemaName": "dt_DateFulfilled",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Date Fulfilled",
				"Format": "DateAndTime:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "dt_datesubmitted",
				"SchemaName": "dt_DateSubmitted",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Date Submitted",
				"Format": "DateAndTime:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_defect_cost",
				"SchemaName": "dt_Defect_Cost",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Defect - Cost",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_defect_cost_base",
				"SchemaName": "dt_defect_cost_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Defect - Cost in base currency.",
				"DisplayName": "Defect - Cost (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "IntegerType",
				"Name": "dt_defect_labels",
				"SchemaName": "dt_Defect_Labels",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Defect - Labels",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_defect_percent",
				"SchemaName": "dt_Defect_Percent",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Defect - Percent",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_defect_squareinches",
				"SchemaName": "dt_Defect_SquareInches",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Defect - Square Inches",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_defect_squareinchesinspected",
				"SchemaName": "dt_Defect_SquareInchesInspected",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Defect - Square Inches Inspected",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "dt_duedate",
				"SchemaName": "dt_DueDate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Due Date",
				"Format": "DateOnly:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "BooleanType",
				"Name": "dt_hasdocuments",
				"SchemaName": "dt_HasDocuments",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Has Documents",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "boolean",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_id",
				"SchemaName": "dt_ID",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Order ID",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_inkmillilitersperorder",
				"SchemaName": "dt_InkMillilitersPerOrder",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Ink Milliliters Per Order",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "dt_laststagetime",
				"SchemaName": "dt_LastStageTime",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "LastStageTime",
				"Format": "DateAndTime:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_leadtime_dateapproved",
				"SchemaName": "dt_LeadTime_DateApproved",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Lead Time - Date Approved",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_leadtime_datesubmitted",
				"SchemaName": "dt_LeadTime_DateSubmitted",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Lead Time - Date Submitted",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_onlinecreatedby",
				"SchemaName": "dt_OnlineCreatedBy",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Online Created By",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "LookupType",
				"Name": "dt_opportunity",
				"SchemaName": "dt_Opportunity",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Originating Opportunity",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_opportunityname",
				"SchemaName": "dt_OpportunityName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_order_id",
				"SchemaName": "dt_Order_ID",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Required name field",
				"DisplayName": "Order",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_order_summary",
				"SchemaName": "dt_Order_Summary",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Order - Summary",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_orderconfirmation",
				"SchemaName": "dt_OrderConfirmation",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Order Confirmation",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_orderedlabels",
				"SchemaName": "dt_OrderedLabels",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Ordered Labels",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_orderedsheets",
				"SchemaName": "dt_OrderedSheets",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Ordered Sheets",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_orderedsquareinches",
				"SchemaName": "dt_OrderedSquareInches",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Ordered Square Inches",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "UniqueidentifierType",
				"Name": "dt_orderid",
				"SchemaName": "dt_OrderId",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Unique identifier for entity instances",
				"DisplayName": "Order GUID",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Guid",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "IntegerType",
				"Name": "dt_orderlines_count",
				"SchemaName": "dt_OrderLines_Count",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Order Lines",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_orderlines_priceadjustmentpercent",
				"SchemaName": "dt_OrderLines_PriceAdjustmentPercent",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Order Lines - Price Adjustment Percent",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_orderlines_priceadjustments",
				"SchemaName": "dt_OrderLines_PriceAdjustments",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Order Lines - Price Adjustments",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_orderlines_priceadjustments_base",
				"SchemaName": "dt_orderlines_priceadjustments_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Order Lines - Price Adjustments in base currency.",
				"DisplayName": "Order Lines - Price Adjustments (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "dt_priceadjustmenttype",
				"Name": "dt_orderlines_priceadjustmenttypes",
				"SchemaName": "dt_OrderLines_PriceAdjustmentTypes",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Order Lines - Price Adjustment Types",
				"Format": "",
				"IsMultiSelect": true,
				"TypescriptType": {
					"name": "dt_priceadjustmenttype[]",
					"outputType": 0,
					"importLocation": "../enums/dt_priceadjustmenttype"
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_orderlines_totalprice",
				"SchemaName": "dt_OrderLines_TotalPrice",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Order Lines - Total Price",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_orderlines_totalprice_base",
				"SchemaName": "dt_orderlines_totalprice_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Order Lines - Total Price in base currency.",
				"DisplayName": "Order Lines - Total Price (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "dt_ordertype",
				"Name": "dt_ordertype",
				"SchemaName": "dt_OrderType",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Order Type",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_ordertype",
					"outputType": 0,
					"importLocation": "../enums/dt_ordertype"
				}
			},
			{
				"Type": "dt_ordertype2",
				"Name": "dt_ordertype2",
				"SchemaName": "dt_OrderType2",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Order Type 2",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_ordertype2",
					"outputType": 0,
					"importLocation": "../enums/dt_ordertype2"
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_otherchargeamount",
				"SchemaName": "dt_OtherChargeAmount",
				"IsRequired": true,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Other Charge Amount",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_otherchargeamount_base",
				"SchemaName": "dt_otherchargeamount_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Other Charge Amount in base currency.",
				"DisplayName": "Other Charge Amount (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_otherchargenote",
				"SchemaName": "dt_OtherChargeNote",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Other Charge Note",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_overagelabels",
				"SchemaName": "dt_OverageLabels",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Overage Labels",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_overagelabels_estimate",
				"SchemaName": "dt_OverageLabels_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Overage Labels - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_overagepercent",
				"SchemaName": "dt_OveragePercent",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Overage Percent",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_overagepercent_estimate",
				"SchemaName": "dt_OveragePercent_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Overage Percent - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_overagesheets",
				"SchemaName": "dt_OverageSheets",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Overage Sheets",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_overagesheets_estimate",
				"SchemaName": "dt_OverageSheets_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Overage Sheets - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_overagesquareinches",
				"SchemaName": "dt_OverageSquareInches",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Overage Square Inches",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_overagesquareinches_estimate",
				"SchemaName": "dt_OverageSquareInches_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Overage Square Inches - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "dt_paymentmethod",
				"Name": "dt_paymentmethod",
				"SchemaName": "dt_PaymentMethod",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Payment Method",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_paymentmethod",
					"outputType": 0,
					"importLocation": "../enums/dt_paymentmethod"
				}
			},
			{
				"Type": "dt_paymentterms",
				"Name": "dt_paymentterms",
				"SchemaName": "dt_PaymentTerms",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Payment Terms",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_paymentterms",
					"outputType": 0,
					"importLocation": "../enums/dt_paymentterms"
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_pid",
				"SchemaName": "dt_PID",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Order PID",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_pricepersquareinch",
				"SchemaName": "dt_PricePerSquareInch",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Price Per Square Inch",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_pricepersquareinch_base",
				"SchemaName": "dt_pricepersquareinch_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Price Per Square Inch in base currency.",
				"DisplayName": "Price Per Square Inch (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "dt_pricingtype",
				"Name": "dt_pricingtype",
				"SchemaName": "dt_PricingType",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Pricing Type",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_pricingtype",
					"outputType": 0,
					"importLocation": "../enums/dt_pricingtype"
				}
			},
			{
				"Type": "dt_orderpriority",
				"Name": "dt_priority",
				"SchemaName": "dt_Priority",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Priority",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_orderpriority",
					"outputType": 0,
					"importLocation": "../enums/dt_orderpriority"
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_purchaseorder",
				"SchemaName": "dt_PurchaseOrder",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Purchase Order",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_qbtransactions",
				"SchemaName": "dt_QbTransactions",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Qb Transactions",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_quickbooksinvoice",
				"SchemaName": "dt_QuickBooksInvoice",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "QuickBooks Invoice",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_quickbookspayment",
				"SchemaName": "dt_QuickBooksPayment",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "QuickBooks Payment",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "BooleanType",
				"Name": "dt_redo",
				"SchemaName": "dt_Redo",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Redo",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "boolean",
					"outputType": 3
				}
			},
			{
				"Type": "dt_yesnoblank",
				"Name": "dt_setreorderreminder",
				"SchemaName": "dt_SetReorderReminder",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Set Reorder Reminder",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_yesnoblank",
					"outputType": 0,
					"importLocation": "../enums/dt_yesnoblank"
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_setupamount",
				"SchemaName": "dt_SetupAmount",
				"IsRequired": true,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Set-up Amount",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_setupamount_base",
				"SchemaName": "dt_setupamount_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Set-up Amount in base currency.",
				"DisplayName": "Set-up Amount (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "BooleanType",
				"Name": "dt_sharepointfolder",
				"SchemaName": "dt_SharePointFolder",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "SharePoint Folder",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "boolean",
					"outputType": 3
				}
			},
			{
				"Type": "BooleanType",
				"Name": "dt_shipfrom",
				"SchemaName": "dt_ShipFrom",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Blind Ship",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "boolean",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipfrom_city",
				"SchemaName": "dt_ShipFrom_City",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipFrom City",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipfrom_company",
				"SchemaName": "dt_ShipFrom_Company",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipFrom Company",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipfrom_contactname",
				"SchemaName": "dt_ShipFrom_ContactName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipFrom Contact",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipfrom_country",
				"SchemaName": "dt_ShipFrom_Country",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipFrom Country",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipfrom_line1",
				"SchemaName": "dt_ShipFrom_Line1",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipFrom Street 1",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipfrom_line2",
				"SchemaName": "dt_ShipFrom_Line2",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipFrom Street 2",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "dt_blankoptionset",
				"Name": "dt_shipfrom_lookup",
				"SchemaName": "dt_ShipFrom_Lookup",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "ShipFrom Lookup",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_blankoptionset",
					"outputType": 0,
					"importLocation": "../enums/dt_blankoptionset"
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipfrom_postalcode",
				"SchemaName": "dt_ShipFrom_PostalCode",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipFrom ZIP",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipfrom_stateorprovince",
				"SchemaName": "dt_ShipFrom_StateOrProvince",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipFrom State",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipping_text",
				"SchemaName": "dt_Shipping_Text",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Shipping Text",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shippingaccount",
				"SchemaName": "dt_ShippingAccount",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Shipping Account",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_shippingactualamount",
				"SchemaName": "dt_ShippingActualAmount",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Shipping Actual Amount",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_shippingactualamount_base",
				"SchemaName": "dt_shippingactualamount_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Shipping Actual Amount in base currency.",
				"DisplayName": "Shipping Actual Amount (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_shippingchargedamount",
				"SchemaName": "dt_ShippingChargedAmount",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Shipping Charged Amount",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_shippingchargedamount_base",
				"SchemaName": "dt_shippingchargedamount_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Shipping Charged Amount in base currency.",
				"DisplayName": "Shipping Charged Amount (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_shippingestimatedamount",
				"SchemaName": "dt_ShippingEstimatedAmount",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Shipping Estimated Amount",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_shippingestimatedamount_base",
				"SchemaName": "dt_shippingestimatedamount_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Shipping Estimated Amount in base currency.",
				"DisplayName": "Shipping Estimated Amount (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "dt_shippingmethod",
				"Name": "dt_shippingmethod",
				"SchemaName": "dt_ShippingMethod",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Shipping Method",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_shippingmethod",
					"outputType": 0,
					"importLocation": "../enums/dt_shippingmethod"
				}
			},
			{
				"Type": "MemoType",
				"Name": "dt_shippingnote",
				"SchemaName": "dt_ShippingNote",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Shipping Note",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "dt_shippingvendor",
				"Name": "dt_shippingvendor",
				"SchemaName": "dt_ShippingVendor",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "Shipping Vendor",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_shippingvendor",
					"outputType": 0,
					"importLocation": "../enums/dt_shippingvendor"
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipstationrecord",
				"SchemaName": "dt_ShipStationRecord",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipStationRecord",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipto_city",
				"SchemaName": "dt_ShipTo_City",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipTo City",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipto_company",
				"SchemaName": "dt_ShipTo_Company",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipTo Company",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipto_contactname",
				"SchemaName": "dt_ShipTo_ContactName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipTo Contact",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipto_country",
				"SchemaName": "dt_ShipTo_Country",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipTo Country",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipto_email",
				"SchemaName": "dt_ShipTo_Email",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Email to be notified with shipment tracking info, or that the order is ready for pick-up.",
				"DisplayName": "ShipTo Email",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipto_line1",
				"SchemaName": "dt_ShipTo_Line1",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipTo Street 1",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipto_line2",
				"SchemaName": "dt_ShipTo_Line2",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipTo Street 2",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "dt_blankoptionset",
				"Name": "dt_shipto_lookup",
				"SchemaName": "dt_ShipTo_Lookup",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "",
				"DisplayName": "ShipTo Lookup",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_blankoptionset",
					"outputType": 0,
					"importLocation": "../enums/dt_blankoptionset"
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipto_postalcode",
				"SchemaName": "dt_ShipTo_PostalCode",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipTo Zip",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_shipto_stateorprovince",
				"SchemaName": "dt_ShipTo_StateOrProvince",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "ShipTo State",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_substratemsiperorder",
				"SchemaName": "dt_SubstrateMSIPerOrder",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Substrate MSI Per Order",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "IntegerType",
				"Name": "dt_taskminutes_actual",
				"SchemaName": "dt_TaskMinutes_Actual",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Task Time Actual",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "IntegerType",
				"Name": "dt_taskminutes_estimate",
				"SchemaName": "dt_TaskMinutes_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Task Time Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "IntegerType",
				"Name": "dt_taskminutes_remaining",
				"SchemaName": "dt_TaskMinutes_Remaining",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Task Time Remaining",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "dt_this",
				"SchemaName": "dt_This",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "This %",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalcost",
				"SchemaName": "dt_TotalCost",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Cost",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalcost_art",
				"SchemaName": "dt_TotalCost_Art",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Cost - Art",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalcost_art_base",
				"SchemaName": "dt_totalcost_art_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Total Cost - Art in base currency.",
				"DisplayName": "Total Cost - Art (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalcost_base",
				"SchemaName": "dt_totalcost_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Total Cost in base currency.",
				"DisplayName": "Total Cost (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalcost_estimate",
				"SchemaName": "dt_TotalCost_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Cost - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalcost_estimate_base",
				"SchemaName": "dt_totalcost_estimate_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Total Cost - Estimate in base currency.",
				"DisplayName": "Total Cost - Estimate (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_totalhours",
				"SchemaName": "dt_TotalHours",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Hours",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_totalhours_estimate",
				"SchemaName": "dt_TotalHours_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Hours - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_totallabels",
				"SchemaName": "dt_TotalLabels",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Labels",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalmargin",
				"SchemaName": "dt_TotalMargin",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Margin",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalmargin_base",
				"SchemaName": "dt_totalmargin_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Total Margin in base currency.",
				"DisplayName": "Total Margin (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalmargin_estimate",
				"SchemaName": "dt_TotalMargin_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Margin - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalmargin_estimate_base",
				"SchemaName": "dt_totalmargin_estimate_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Total Margin - Estimate in base currency.",
				"DisplayName": "Total Margin - Estimate (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_totalmarginpercent",
				"SchemaName": "dt_TotalMarginPercent",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Margin Percent",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_totalmarginpercent_estimate",
				"SchemaName": "dt_TotalMarginPercent_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Margin Percent - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalprice",
				"SchemaName": "dt_TotalPrice",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Price",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalprice_base",
				"SchemaName": "dt_totalprice_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Total Price in base currency.",
				"DisplayName": "Total Price (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalpricewithshipping_calcfield",
				"SchemaName": "dt_TotalPriceWithShipping_CalcField",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Price With Shipping",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MoneyType",
				"Name": "dt_totalpricewithshipping_calcfield_base",
				"SchemaName": "dt_totalpricewithshipping_calcfield_Base",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Value of the Total Price With Shipping in base currency.",
				"DisplayName": "Total Price With Shipping (Base)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_totalsheets",
				"SchemaName": "dt_TotalSheets",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Sheets",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_totalsquareinches",
				"SchemaName": "dt_TotalSquareInches",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Square Inches",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "IntegerType",
				"Name": "dt_totaltime",
				"SchemaName": "dt_TotalTime",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Time",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "IntegerType",
				"Name": "dt_totaltime_art",
				"SchemaName": "dt_TotalTime_Art",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Time - Art",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "IntegerType",
				"Name": "dt_totaltime_estimate",
				"SchemaName": "dt_TotalTime_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Total Time - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "MemoType",
				"Name": "dt_trackingnumber",
				"SchemaName": "dt_TrackingNumber",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Tracking Number",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_urethanelitersperorder",
				"SchemaName": "dt_UrethaneLitersPerOrder",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Urethane Liters Per Order",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "dt_weight_estimate",
				"SchemaName": "dt_Weight_Estimate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "Weight - Estimate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "DecimalType",
				"Name": "exchangerate",
				"SchemaName": "ExchangeRate",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Exchange rate for the currency associated with the entity with respect to the base currency.",
				"DisplayName": "Exchange Rate",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "IntegerType",
				"Name": "importsequencenumber",
				"SchemaName": "ImportSequenceNumber",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Sequence number of the import that created this record.",
				"DisplayName": "Import Sequence Number",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "LookupType",
				"Name": "modifiedby",
				"SchemaName": "ModifiedBy",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Unique identifier of the user who modified the record.",
				"DisplayName": "Modified By",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "modifiedbyname",
				"SchemaName": "ModifiedByName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "modifiedbyyominame",
				"SchemaName": "ModifiedByYomiName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "modifiedon",
				"SchemaName": "ModifiedOn",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Date and time when the record was modified.",
				"DisplayName": "Modified On",
				"Format": "DateAndTime:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "LookupType",
				"Name": "modifiedonbehalfby",
				"SchemaName": "ModifiedOnBehalfBy",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Unique identifier of the delegate user who modified the record.",
				"DisplayName": "Modified By (Delegate)",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "modifiedonbehalfbyname",
				"SchemaName": "ModifiedOnBehalfByName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "modifiedonbehalfbyyominame",
				"SchemaName": "ModifiedOnBehalfByYomiName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "DateTimeType",
				"Name": "overriddencreatedon",
				"SchemaName": "OverriddenCreatedOn",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Date and time that the record was migrated.",
				"DisplayName": "Record Created On",
				"Format": "DateOnly:UserLocal",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Date",
					"outputType": 3
				}
			},
			{
				"Type": "OwnerType",
				"Name": "ownerid",
				"SchemaName": "OwnerId",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Owner Id",
				"DisplayName": "Owner",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "owneridname",
				"SchemaName": "OwnerIdName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Name of the owner",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "EntityNameType",
				"Name": "owneridtype",
				"SchemaName": "OwnerIdType",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Owner Id Type",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "owneridyominame",
				"SchemaName": "OwnerIdYomiName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Yomi name of the owner",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "LookupType",
				"Name": "owningbusinessunit",
				"SchemaName": "OwningBusinessUnit",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Unique identifier for the business unit that owns the record",
				"DisplayName": "Owning Business Unit",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "owningbusinessunitname",
				"SchemaName": "OwningBusinessUnitName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "LookupType",
				"Name": "owningteam",
				"SchemaName": "OwningTeam",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Unique identifier for the team that owns the record.",
				"DisplayName": "Owning Team",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "LookupType",
				"Name": "owninguser",
				"SchemaName": "OwningUser",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Unique identifier for the user that owns the record.",
				"DisplayName": "Owning User",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "UniqueidentifierType",
				"Name": "processid",
				"SchemaName": "processid",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Contains the id of the process associated with the entity.",
				"DisplayName": "Process Id",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Guid",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "UniqueidentifierType",
				"Name": "stageid",
				"SchemaName": "stageid",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Contains the id of the stage where the entity is located.",
				"DisplayName": "(Deprecated) Stage Id",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "Guid",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "dt_order_dt_order_statecode",
				"Name": "statecode",
				"SchemaName": "statecode",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "Status of the Order",
				"DisplayName": "Status",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_order_dt_order_statecode",
					"outputType": 0,
					"importLocation": "../enums/dt_order_dt_order_statecode"
				}
			},
			{
				"Type": "dt_order_dt_order_statuscode",
				"Name": "statuscode",
				"SchemaName": "statuscode",
				"IsRequired": false,
				"IsEnum": true,
				"Description": "Reason for the status of the Order",
				"DisplayName": "Status Reason",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "dt_order_dt_order_statuscode",
					"outputType": 0,
					"importLocation": "../enums/dt_order_dt_order_statuscode"
				}
			},
			{
				"Type": "IntegerType",
				"Name": "timezoneruleversionnumber",
				"SchemaName": "TimeZoneRuleVersionNumber",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "For internal use only.",
				"DisplayName": "Time Zone Rule Version Number",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "LookupType",
				"Name": "transactioncurrencyid",
				"SchemaName": "TransactionCurrencyId",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Unique identifier of the currency associated with the entity.",
				"DisplayName": "Currency",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "EntityReference",
					"outputType": 3,
					"importLocation": "dataverse-ify"
				}
			},
			{
				"Type": "StringType",
				"Name": "transactioncurrencyidname",
				"SchemaName": "TransactionCurrencyIdName",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "",
				"DisplayName": "",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "StringType",
				"Name": "traversedpath",
				"SchemaName": "traversedpath",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.",
				"DisplayName": "(Deprecated) Traversed Path",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "string",
					"outputType": 3
				}
			},
			{
				"Type": "IntegerType",
				"Name": "utcconversiontimezonecode",
				"SchemaName": "UTCConversionTimeZoneCode",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Time zone code that was in use when the record was created.",
				"DisplayName": "UTC Conversion Time Zone Code",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			},
			{
				"Type": "BigIntType",
				"Name": "versionnumber",
				"SchemaName": "VersionNumber",
				"IsRequired": false,
				"IsEnum": false,
				"Description": "Version Number",
				"DisplayName": "Version Number",
				"Format": "",
				"IsMultiSelect": false,
				"TypescriptType": {
					"name": "number",
					"outputType": 3
				}
			}
		],
		"OpenType": false,
		"NavigationProperties": [
			{
				"Name": "transactioncurrencyid",
				"FullName": "transactioncurrencyid",
				"IsCollection": false,
				"Type": "mscrm.transactioncurrency",
				"ReferencedProperty": "transactioncurrencyid",
				"ReferentialConstraint": "_transactioncurrencyid_value",
				"LogicalName": "transactioncurrency"
			},
			{
				"Name": "stageid",
				"FullName": "stageid",
				"IsCollection": false,
				"Type": "mscrm.processstage",
				"ReferencedProperty": "processstageid",
				"ReferentialConstraint": "_stageid_value",
				"LogicalName": "processstage"
			},
			{
				"Name": "owninguser",
				"FullName": "owninguser",
				"IsCollection": false,
				"Type": "mscrm.systemuser",
				"ReferencedProperty": "systemuserid",
				"ReferentialConstraint": "_owninguser_value",
				"LogicalName": "systemuser"
			},
			{
				"Name": "owningteam",
				"FullName": "owningteam",
				"IsCollection": false,
				"Type": "mscrm.team",
				"ReferencedProperty": "teamid",
				"ReferentialConstraint": "_owningteam_value",
				"LogicalName": "team"
			},
			{
				"Name": "owningbusinessunit",
				"FullName": "owningbusinessunit",
				"IsCollection": false,
				"Type": "mscrm.businessunit",
				"ReferencedProperty": "businessunitid",
				"ReferentialConstraint": "_owningbusinessunit_value",
				"LogicalName": "businessunit"
			},
			{
				"Name": "ownerid",
				"FullName": "ownerid",
				"IsCollection": false,
				"Type": "mscrm.principal",
				"ReferencedProperty": "ownerid",
				"ReferentialConstraint": "_ownerid_value",
				"LogicalName": "principal"
			},
			{
				"Name": "modifiedonbehalfby",
				"FullName": "modifiedonbehalfby",
				"IsCollection": false,
				"Type": "mscrm.systemuser",
				"ReferencedProperty": "systemuserid",
				"ReferentialConstraint": "_modifiedonbehalfby_value",
				"LogicalName": "systemuser"
			},
			{
				"Name": "modifiedby",
				"FullName": "modifiedby",
				"IsCollection": false,
				"Type": "mscrm.systemuser",
				"ReferencedProperty": "systemuserid",
				"ReferentialConstraint": "_modifiedby_value",
				"LogicalName": "systemuser"
			},
			{
				"Name": "dt_order_rc_conversations",
				"FullName": "dt_order_rc_conversations",
				"IsCollection": true,
				"Type": "mscrm.rc_conversation",
				"LogicalName": "rc_conversation"
			},
			{
				"Name": "dt_order_powf_webformactivities",
				"FullName": "dt_order_powf_webformactivities",
				"IsCollection": true,
				"Type": "mscrm.powf_webformactivity",
				"LogicalName": "powf_webformactivity"
			},
			{
				"Name": "dt_order_po_creditcardtransactions",
				"FullName": "dt_order_po_creditcardtransactions",
				"IsCollection": true,
				"Type": "mscrm.po_creditcardtransaction",
				"LogicalName": "po_creditcardtransaction"
			},
			{
				"Name": "dt_order_po_achtransactions",
				"FullName": "dt_order_po_achtransactions",
				"IsCollection": true,
				"Type": "mscrm.po_achtransaction",
				"LogicalName": "po_achtransaction"
			},
			{
				"Name": "dt_order_msfp_surveyresponses",
				"FullName": "dt_order_msfp_surveyresponses",
				"IsCollection": true,
				"Type": "mscrm.msfp_surveyresponse",
				"LogicalName": "msfp_surveyresponse"
			},
			{
				"Name": "dt_order_msfp_surveyinvites",
				"FullName": "dt_order_msfp_surveyinvites",
				"IsCollection": true,
				"Type": "mscrm.msfp_surveyinvite",
				"LogicalName": "msfp_surveyinvite"
			},
			{
				"Name": "dt_order_msfp_alerts",
				"FullName": "dt_order_msfp_alerts",
				"IsCollection": true,
				"Type": "mscrm.msfp_alert",
				"LogicalName": "msfp_alert"
			},
			{
				"Name": "dt_order_msdyn_ocsessions",
				"FullName": "dt_order_msdyn_ocsessions",
				"IsCollection": true,
				"Type": "mscrm.msdyn_ocsession",
				"LogicalName": "msdyn_ocsession"
			},
			{
				"Name": "dt_order_msdyn_ocliveworkitems",
				"FullName": "dt_order_msdyn_ocliveworkitems",
				"IsCollection": true,
				"Type": "mscrm.msdyn_ocliveworkitem",
				"LogicalName": "msdyn_ocliveworkitem"
			},
			{
				"Name": "dt_order_msdyn_bookingalerts",
				"FullName": "dt_order_msdyn_bookingalerts",
				"IsCollection": true,
				"Type": "mscrm.msdyn_bookingalert",
				"LogicalName": "msdyn_bookingalert"
			},
			{
				"Name": "dt_order_li_pointdrivepresentationvieweds",
				"FullName": "dt_order_li_pointdrivepresentationvieweds",
				"IsCollection": true,
				"Type": "mscrm.li_pointdrivepresentationviewed",
				"LogicalName": "li_pointdrivepresentationviewed"
			},
			{
				"Name": "dt_order_li_messages",
				"FullName": "dt_order_li_messages",
				"IsCollection": true,
				"Type": "mscrm.li_message",
				"LogicalName": "li_message"
			},
			{
				"Name": "dt_order_li_inmails",
				"FullName": "dt_order_li_inmails",
				"IsCollection": true,
				"Type": "mscrm.li_inmail",
				"LogicalName": "li_inmail"
			},
			{
				"Name": "dt_order_dt_WebFormActivities",
				"FullName": "dt_order_dt_WebFormActivities",
				"IsCollection": true,
				"Type": "mscrm.dt_webformactivity",
				"LogicalName": "dt_webformactivity"
			},
			{
				"Name": "dt_order_dt_Updates",
				"FullName": "dt_order_dt_Updates",
				"IsCollection": true,
				"Type": "mscrm.dt_update",
				"LogicalName": "dt_update"
			},
			{
				"Name": "dt_order_dt_Notes",
				"FullName": "dt_order_dt_Notes",
				"IsCollection": true,
				"Type": "mscrm.dt_note",
				"LogicalName": "dt_note"
			},
			{
				"Name": "dt_order_dt_GenericSampleses",
				"FullName": "dt_order_dt_GenericSampleses",
				"IsCollection": true,
				"Type": "mscrm.dt_genericsamples",
				"LogicalName": "dt_genericsamples"
			},
			{
				"Name": "dt_order_connections2",
				"FullName": "dt_order_connections2",
				"IsCollection": true,
				"Type": "mscrm.connection",
				"LogicalName": "connection"
			},
			{
				"Name": "dt_order_connections1",
				"FullName": "dt_order_connections1",
				"IsCollection": true,
				"Type": "mscrm.connection",
				"LogicalName": "connection"
			},
			{
				"Name": "dt_order_chats",
				"FullName": "dt_order_chats",
				"IsCollection": true,
				"Type": "mscrm.chat",
				"LogicalName": "chat"
			},
			{
				"Name": "dt_order_Tasks",
				"FullName": "dt_order_Tasks",
				"IsCollection": true,
				"Type": "mscrm.task",
				"LogicalName": "task"
			},
			{
				"Name": "dt_order_SyncErrors",
				"FullName": "dt_order_SyncErrors",
				"IsCollection": true,
				"Type": "mscrm.syncerror",
				"LogicalName": "syncerror"
			},
			{
				"Name": "dt_order_SocialActivities",
				"FullName": "dt_order_SocialActivities",
				"IsCollection": true,
				"Type": "mscrm.socialactivity",
				"LogicalName": "socialactivity"
			},
			{
				"Name": "dt_order_SharePointDocumentLocations",
				"FullName": "dt_order_SharePointDocumentLocations",
				"IsCollection": true,
				"Type": "mscrm.sharepointdocumentlocation",
				"LogicalName": "sharepointdocumentlocation"
			},
			{
				"Name": "dt_order_ServiceAppointments",
				"FullName": "dt_order_ServiceAppointments",
				"IsCollection": true,
				"Type": "mscrm.serviceappointment",
				"LogicalName": "serviceappointment"
			},
			{
				"Name": "dt_order_RecurringAppointmentMasters",
				"FullName": "dt_order_RecurringAppointmentMasters",
				"IsCollection": true,
				"Type": "mscrm.recurringappointmentmaster",
				"LogicalName": "recurringappointmentmaster"
			},
			{
				"Name": "dt_order_ProcessSession",
				"FullName": "dt_order_ProcessSession",
				"IsCollection": true,
				"Type": "mscrm.processsession",
				"LogicalName": "processsession"
			},
			{
				"Name": "dt_order_PrincipalObjectAttributeAccesses",
				"FullName": "dt_order_PrincipalObjectAttributeAccesses",
				"IsCollection": true,
				"Type": "mscrm.principalobjectattributeaccess",
				"LogicalName": "principalobjectattributeaccess"
			},
			{
				"Name": "dt_order_PhoneCalls",
				"FullName": "dt_order_PhoneCalls",
				"IsCollection": true,
				"Type": "mscrm.phonecall",
				"LogicalName": "phonecall"
			},
			{
				"Name": "dt_order_MailboxTrackingFolders",
				"FullName": "dt_order_MailboxTrackingFolders",
				"IsCollection": true,
				"Type": "mscrm.mailboxtrackingfolder",
				"LogicalName": "mailboxtrackingfolder"
			},
			{
				"Name": "dt_order_Letters",
				"FullName": "dt_order_Letters",
				"IsCollection": true,
				"Type": "mscrm.letter",
				"LogicalName": "letter"
			},
			{
				"Name": "dt_order_Faxes",
				"FullName": "dt_order_Faxes",
				"IsCollection": true,
				"Type": "mscrm.fax",
				"LogicalName": "fax"
			},
			{
				"Name": "dt_order_Emails",
				"FullName": "dt_order_Emails",
				"IsCollection": true,
				"Type": "mscrm.email",
				"LogicalName": "email"
			},
			{
				"Name": "dt_order_DuplicateMatchingRecord",
				"FullName": "dt_order_DuplicateMatchingRecord",
				"IsCollection": true,
				"Type": "mscrm.duplicaterecord",
				"LogicalName": "duplicaterecord"
			},
			{
				"Name": "dt_order_DuplicateBaseRecord",
				"FullName": "dt_order_DuplicateBaseRecord",
				"IsCollection": true,
				"Type": "mscrm.duplicaterecord",
				"LogicalName": "duplicaterecord"
			},
			{
				"Name": "dt_order_BulkDeleteFailures",
				"FullName": "dt_order_BulkDeleteFailures",
				"IsCollection": true,
				"Type": "mscrm.bulkdeletefailure",
				"LogicalName": "bulkdeletefailure"
			},
			{
				"Name": "dt_order_AsyncOperations",
				"FullName": "dt_order_AsyncOperations",
				"IsCollection": true,
				"Type": "mscrm.asyncoperation",
				"LogicalName": "asyncoperation"
			},
			{
				"Name": "dt_order_Appointments",
				"FullName": "dt_order_Appointments",
				"IsCollection": true,
				"Type": "mscrm.appointment",
				"LogicalName": "appointment"
			},
			{
				"Name": "dt_order_Annotations",
				"FullName": "dt_order_Annotations",
				"IsCollection": true,
				"Type": "mscrm.annotation",
				"LogicalName": "annotation"
			},
			{
				"Name": "dt_order_ActivityPointers",
				"FullName": "dt_order_ActivityPointers",
				"IsCollection": true,
				"Type": "mscrm.activitypointer",
				"LogicalName": "activitypointer"
			},
			{
				"Name": "dt_ReorderReminder_OrderId_dt_Order",
				"FullName": "dt_ReorderReminder_OrderId_dt_Order",
				"IsCollection": true,
				"Type": "mscrm.dt_reorderreminder",
				"LogicalName": "dt_reorderreminder"
			},
			{
				"Name": "dt_Order_dt_DesignProof",
				"FullName": "dt_Order_dt_DesignProof",
				"IsCollection": true,
				"Type": "mscrm.dt_designproof",
				"LogicalName": "dt_designproof"
			},
			{
				"Name": "dt_Order_Shipment",
				"FullName": "dt_Order_Shipment",
				"IsCollection": true,
				"Type": "mscrm.dt_shipment",
				"LogicalName": "dt_shipment"
			},
			{
				"Name": "dt_Order_OrderTaskEstimate",
				"FullName": "dt_Order_OrderTaskEstimate",
				"IsCollection": true,
				"Type": "mscrm.dt_ordertaskestimate",
				"LogicalName": "dt_ordertaskestimate"
			},
			{
				"Name": "dt_Order_OrderTask",
				"FullName": "dt_Order_OrderTask",
				"IsCollection": true,
				"Type": "mscrm.dt_ordertask",
				"LogicalName": "dt_ordertask"
			},
			{
				"Name": "dt_Order_OrderEstimateLine",
				"FullName": "dt_Order_OrderEstimateLine",
				"IsCollection": true,
				"Type": "mscrm.dt_orderestimateline",
				"LogicalName": "dt_orderestimateline"
			},
			{
				"Name": "dt_Order_CostItemDetail",
				"FullName": "dt_Order_CostItemDetail",
				"IsCollection": true,
				"Type": "mscrm.dt_costitemdetail",
				"LogicalName": "dt_costitemdetail"
			},
			{
				"Name": "dt_OrderStage_Order_dt_Order",
				"FullName": "dt_OrderStage_Order_dt_Order",
				"IsCollection": true,
				"Type": "mscrm.dt_orderstage",
				"LogicalName": "dt_orderstage"
			},
			{
				"Name": "dt_OrderProcessStage_Order_dt_Order",
				"FullName": "dt_OrderProcessStage_Order_dt_Order",
				"IsCollection": true,
				"Type": "mscrm.dt_orderprocessstage",
				"LogicalName": "dt_orderprocessstage"
			},
			{
				"Name": "dt_OrderLine_Order_dt_Order",
				"FullName": "dt_OrderLine_Order_dt_Order",
				"IsCollection": true,
				"Type": "mscrm.dt_orderline",
				"LogicalName": "dt_orderline"
			},
			{
				"Name": "dt_OrderDefects_Order_dt_Order",
				"FullName": "dt_OrderDefects_Order_dt_Order",
				"IsCollection": true,
				"Type": "mscrm.dt_orderdefects",
				"LogicalName": "dt_orderdefects"
			},
			{
				"Name": "dt_Opportunity_ReorderFromOrder_dt_Order",
				"FullName": "dt_Opportunity_ReorderFromOrder_dt_Order",
				"IsCollection": true,
				"Type": "mscrm.opportunity",
				"LogicalName": "opportunity"
			},
			{
				"Name": "dt_Opportunity_Order_dt_Order",
				"FullName": "dt_Opportunity_Order_dt_Order",
				"IsCollection": true,
				"Type": "mscrm.opportunity",
				"LogicalName": "opportunity"
			},
			{
				"Name": "dt_Opportunity",
				"FullName": "dt_Opportunity",
				"IsCollection": false,
				"Type": "mscrm.opportunity",
				"ReferencedProperty": "opportunityid",
				"ReferentialConstraint": "_dt_opportunity_value",
				"LogicalName": "opportunity"
			},
			{
				"Name": "dt_Incident_Order_dt_Order",
				"FullName": "dt_Incident_Order_dt_Order",
				"IsCollection": true,
				"Type": "mscrm.dt_incident",
				"LogicalName": "dt_incident"
			},
			{
				"Name": "dt_Contact",
				"FullName": "dt_Contact",
				"IsCollection": false,
				"Type": "mscrm.contact",
				"ReferencedProperty": "contactid",
				"ReferentialConstraint": "_dt_contact_value",
				"LogicalName": "contact"
			},
			{
				"Name": "dt_AccountManager",
				"FullName": "dt_AccountManager",
				"IsCollection": false,
				"Type": "mscrm.systemuser",
				"ReferencedProperty": "systemuserid",
				"ReferentialConstraint": "_dt_accountmanager_value",
				"LogicalName": "systemuser"
			},
			{
				"Name": "dt_Account",
				"FullName": "dt_Account",
				"IsCollection": false,
				"Type": "mscrm.account",
				"ReferencedProperty": "accountid",
				"ReferentialConstraint": "_dt_account_value",
				"LogicalName": "account"
			},
			{
				"Name": "createdonbehalfby",
				"FullName": "createdonbehalfby",
				"IsCollection": false,
				"Type": "mscrm.systemuser",
				"ReferencedProperty": "systemuserid",
				"ReferentialConstraint": "_createdonbehalfby_value",
				"LogicalName": "systemuser"
			},
			{
				"Name": "createdby",
				"FullName": "createdby",
				"IsCollection": false,
				"Type": "mscrm.systemuser",
				"ReferencedProperty": "systemuserid",
				"ReferentialConstraint": "_createdby_value",
				"LogicalName": "systemuser"
			},
			{
				"Name": "bpf_dt_order_dt_orderprocess",
				"FullName": "bpf_dt_order_dt_orderprocess",
				"IsCollection": true,
				"Type": "mscrm.dt_orderprocess",
				"LogicalName": "dt_orderprocess"
			}
		],
		"ReferencedBy": [],
		"EntitySetName": "dt_orders",
		"SchemaName": "dt_Order"
	}
}