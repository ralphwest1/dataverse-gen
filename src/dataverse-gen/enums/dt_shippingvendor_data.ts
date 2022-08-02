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
		"Name": "dt_shippingvendor",
		"Members": [
			{
				"Name": "UPS",
				"Value": "206500000"
			},
			{
				"Name": "FedEx",
				"Value": "206500001"
			},
			{
				"Name": "PostalService",
				"Value": "206500002"
			},
			{
				"Name": "DHL",
				"Value": "206500003"
			},
			{
				"Name": "Freight",
				"Value": "206500004"
			},
			{
				"Name": "Other",
				"Value": "206500007"
			}
		]
	}
}