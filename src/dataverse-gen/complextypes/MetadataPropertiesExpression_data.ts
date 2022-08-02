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
		"Name": "MetadataPropertiesExpression",
		"ReferencedBy": [],
		"ReferencedByRoot": [
			{
				"Name": "RelationshipQueryExpression",
				"ReferencedBy": [],
				"ReferencedByRoot": [
					{
						"Name": "EntityQueryExpression",
						"ReferencedBy": [
							{
								"Name": "RetrieveMetadataChanges",
								"IsBound": false,
								"ReturnType": "mscrm.RetrieveMetadataChangesResponse",
								"ReferencedBy": [],
								"ReferencedByRoot": [],
								"Parameters": [
									{
										"Name": "Query",
										"Type": "mscrm.EntityQueryExpression",
										"Nullable": true,
										"structuralTypeName": "EntityType",
										"TypescriptTypes": [
											{
												"name": "EntityQueryExpression",
												"outputType": 2,
												"importLocation": "../complextypes/EntityQueryExpression"
											}
										]
									},
									{
										"Name": "DeletedMetadataFilters",
										"Type": "mscrm.DeletedMetadataFilters",
										"Nullable": true,
										"structuralTypeName": "EnumerationType",
										"TypescriptTypes": [
											{
												"name": "DeletedMetadataFilters",
												"outputType": 0,
												"importLocation": "../enums/DeletedMetadataFilters"
											}
										]
									},
									{
										"Name": "ClientVersionStamp",
										"Type": "Edm.String",
										"Nullable": true,
										"structuralTypeName": "PrimitiveType",
										"TypescriptTypes": [
											{
												"name": "string",
												"outputType": 3
											}
										]
									},
									{
										"Name": "AppModuleId",
										"Type": "Edm.Guid",
										"Nullable": true,
										"structuralTypeName": "PrimitiveType",
										"TypescriptTypes": [
											{
												"name": "Guid",
												"outputType": 3,
												"importLocation": "dataverse-ify"
											}
										]
									},
									{
										"Name": "RetrieveAllSettings",
										"Type": "Edm.Boolean",
										"Nullable": true,
										"structuralTypeName": "PrimitiveType",
										"TypescriptTypes": [
											{
												"name": "boolean",
												"outputType": 3
											}
										]
									}
								],
								"Properties": [],
								"NavigationProperties": []
							}
						],
						"ReferencedByRoot": [],
						"NavigationProperties": [],
						"Properties": [
							{
								"Name": "RelationshipQuery",
								"Type": "mscrm.RelationshipQueryExpression",
								"TypescriptType": {
									"name": "RelationshipQueryExpression",
									"outputType": 2,
									"importLocation": "../complextypes/RelationshipQueryExpression"
								}
							},
							{
								"Name": "Properties",
								"Type": "mscrm.MetadataPropertiesExpression",
								"TypescriptType": {
									"name": "MetadataPropertiesExpression",
									"outputType": 2,
									"importLocation": "../complextypes/MetadataPropertiesExpression"
								}
							},
							{
								"Name": "LabelQuery",
								"Type": "mscrm.LabelQueryExpression",
								"TypescriptType": {
									"name": "LabelQueryExpression",
									"outputType": 2,
									"importLocation": "../complextypes/LabelQueryExpression"
								}
							},
							{
								"Name": "KeyQuery",
								"Type": "mscrm.EntityKeyQueryExpression",
								"TypescriptType": {
									"name": "EntityKeyQueryExpression",
									"outputType": 2,
									"importLocation": "../complextypes/EntityKeyQueryExpression"
								}
							},
							{
								"Name": "Criteria",
								"Type": "mscrm.MetadataFilterExpression",
								"TypescriptType": {
									"name": "MetadataFilterExpression",
									"outputType": 2,
									"importLocation": "../complextypes/MetadataFilterExpression"
								}
							},
							{
								"Name": "AttributeQuery",
								"Type": "mscrm.AttributeQueryExpression",
								"TypescriptType": {
									"name": "AttributeQueryExpression",
									"outputType": 2,
									"importLocation": "../complextypes/AttributeQueryExpression"
								}
							}
						]
					}
				],
				"NavigationProperties": [],
				"Properties": [
					{
						"Name": "Properties",
						"Type": "mscrm.MetadataPropertiesExpression",
						"TypescriptType": {
							"name": "MetadataPropertiesExpression",
							"outputType": 2,
							"importLocation": "../complextypes/MetadataPropertiesExpression"
						}
					},
					{
						"Name": "Criteria",
						"Type": "mscrm.MetadataFilterExpression",
						"TypescriptType": {
							"name": "MetadataFilterExpression",
							"outputType": 2,
							"importLocation": "../complextypes/MetadataFilterExpression"
						}
					}
				]
			},
			null,
			{
				"Name": "EntityKeyQueryExpression",
				"ReferencedBy": [],
				"ReferencedByRoot": [
					null
				],
				"NavigationProperties": [],
				"Properties": [
					{
						"Name": "Properties",
						"Type": "mscrm.MetadataPropertiesExpression",
						"TypescriptType": {
							"name": "MetadataPropertiesExpression",
							"outputType": 2,
							"importLocation": "../complextypes/MetadataPropertiesExpression"
						}
					},
					{
						"Name": "Criteria",
						"Type": "mscrm.MetadataFilterExpression",
						"TypescriptType": {
							"name": "MetadataFilterExpression",
							"outputType": 2,
							"importLocation": "../complextypes/MetadataFilterExpression"
						}
					}
				]
			},
			{
				"Name": "AttributeQueryExpression",
				"ReferencedBy": [],
				"ReferencedByRoot": [
					null
				],
				"NavigationProperties": [],
				"Properties": [
					{
						"Name": "Properties",
						"Type": "mscrm.MetadataPropertiesExpression",
						"TypescriptType": {
							"name": "MetadataPropertiesExpression",
							"outputType": 2,
							"importLocation": "../complextypes/MetadataPropertiesExpression"
						}
					},
					{
						"Name": "Criteria",
						"Type": "mscrm.MetadataFilterExpression",
						"TypescriptType": {
							"name": "MetadataFilterExpression",
							"outputType": 2,
							"importLocation": "../complextypes/MetadataFilterExpression"
						}
					}
				]
			}
		],
		"NavigationProperties": [],
		"Properties": [
			{
				"Name": "PropertyNames",
				"Type": "Collection(Edm.String)",
				"TypescriptType": {
					"name": "string[]",
					"outputType": 3
				}
			},
			{
				"Name": "AllProperties",
				"Type": "Edm.Boolean",
				"TypescriptType": {
					"name": "boolean",
					"outputType": 3
				}
			}
		]
	}
}