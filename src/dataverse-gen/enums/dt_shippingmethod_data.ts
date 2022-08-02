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
		"Name": "dt_shippingmethod",
		"Members": [
			{
				"Name": "Ground",
				"Value": "206500000"
			},
			{
				"Name": "_3Day",
				"Value": "206500001"
			},
			{
				"Name": "_2Day",
				"Value": "206500002"
			},
			{
				"Name": "_2DayAM",
				"Value": "206500003"
			},
			{
				"Name": "_1DayPM",
				"Value": "206500004"
			},
			{
				"Name": "_1Day",
				"Value": "206500005"
			},
			{
				"Name": "_1DayAM",
				"Value": "206500006"
			},
			{
				"Name": "Deliver",
				"Value": "206500007"
			},
			{
				"Name": "PickUp",
				"Value": "206500008"
			},
			{
				"Name": "Freight",
				"Value": "206500010"
			},
			{
				"Name": "NA",
				"Value": "206500009"
			},
			{
				"Name": "Other",
				"Value": "206500011"
			},
			{
				"Name": "InternationalEconomy",
				"Value": "206500012"
			},
			{
				"Name": "InternationalPriority",
				"Value": "206500013"
			},
			{
				"Name": "InternationalStandard",
				"Value": "206500014"
			}
		]
	}
}