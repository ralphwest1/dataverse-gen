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
		"Name": "dt_priceadjustmenttype",
		"Members": [
			{
				"Name": "None",
				"Value": "0"
			},
			{
				"Name": "Samples",
				"Value": "1"
			},
			{
				"Name": "ManualAdjustment",
				"Value": "3"
			},
			{
				"Name": "PricePerUnitOverride",
				"Value": "4"
			},
			{
				"Name": "TotalPriceOverride",
				"Value": "5"
			},
			{
				"Name": "NoCharge",
				"Value": "6"
			}
		]
	}
}