import { a as __toCommonJS, i as __require, n as __esmMin, r as __exportAll, t as __commonJSMin } from "../_runtime.mjs";
import { t as require_lodash_reduce } from "./lodash.reduce.mjs";
import { t as require_ajv } from "./ajv+[...].mjs";
import { n as init_abort_controller, t as abort_controller_exports } from "./abort-controller+[...].mjs";
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/utils.js
var require_utils$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function getField(countField, context) {
		const countFieldArr = countField.split("/");
		let i = 0;
		if (countFieldArr[i] === "") {
			while (context[".."] !== void 0) context = context[".."];
			i++;
		}
		for (; i < countFieldArr.length; i++) context = context[countFieldArr[i]];
		return context;
	}
	function getFieldInfo(fieldInfo) {
		if (typeof fieldInfo === "string") return { type: fieldInfo };
		else if (Array.isArray(fieldInfo)) return {
			type: fieldInfo[0],
			typeArgs: fieldInfo[1]
		};
		else if (typeof fieldInfo.type === "string") return fieldInfo;
		else throw new Error("Not a fieldinfo");
	}
	function getCount(buffer, offset, { count, countType }, rootNode) {
		let c = 0;
		let size = 0;
		if (typeof count === "number") c = count;
		else if (typeof count !== "undefined") c = getField(count, rootNode);
		else if (typeof countType !== "undefined") ({size, value: c} = tryDoc(() => this.read(buffer, offset, getFieldInfo(countType), rootNode), "$count"));
		else c = 0;
		return {
			count: c,
			size
		};
	}
	function sendCount(len, buffer, offset, { count, countType }, rootNode) {
		if (typeof count !== "undefined" && len !== count) {} else if (typeof countType !== "undefined") offset = this.write(len, buffer, offset, getFieldInfo(countType), rootNode);
		return offset;
	}
	function calcCount(len, { count, countType }, rootNode) {
		if (typeof count === "undefined" && typeof countType !== "undefined") return tryDoc(() => this.sizeOf(len, getFieldInfo(countType), rootNode), "$count");
		else return 0;
	}
	function addErrorField(e, field) {
		e.field = e.field ? field + "." + e.field : field;
		throw e;
	}
	function tryCatch(tryfn, catchfn) {
		try {
			return tryfn();
		} catch (e) {
			catchfn(e);
		}
	}
	function tryDoc(tryfn, field) {
		return tryCatch(tryfn, (e) => addErrorField(e, field));
	}
	var ExtendableError = class extends Error {
		constructor(message) {
			super(message);
			this.name = this.constructor.name;
			this.message = message;
			if (Error.captureStackTrace != null) Error.captureStackTrace(this, this.constructor.name);
		}
	};
	var PartialReadError = class extends ExtendableError {
		constructor(message) {
			super(message);
			this.partialReadError = true;
		}
	};
	module.exports = {
		getField,
		getFieldInfo,
		addErrorField,
		getCount,
		sendCount,
		calcCount,
		tryCatch,
		tryDoc,
		PartialReadError
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef-validator@1.4.0/node_modules/protodef-validator/ProtoDef/schemas/definitions.json
var definitions_exports = /* @__PURE__ */ __exportAll({
	default: () => definitions_default,
	definitions: () => definitions,
	title: () => title$1,
	type: () => type$1
});
var title$1, definitions, type$1, definitions_default;
var init_definitions = __esmMin((() => {
	title$1 = "definitions";
	definitions = {
		"contextualizedFieldName": {
			"type": "string",
			"pattern": "^(this\\.)?.+$"
		},
		"dataTypeArgsCount": { "oneOf": [{ "$ref": "#/definitions/contextualizedFieldName" }, { "type": "number" }] },
		"fieldName": {
			"type": "string",
			"pattern": "^[a-zA-Z0-9_]+$"
		}
	};
	type$1 = "object";
	definitions_default = {
		title: title$1,
		definitions,
		type: type$1
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef-validator@1.4.0/node_modules/protodef-validator/ProtoDef/schemas/protocol_schema.json
var protocol_schema_exports = /* @__PURE__ */ __exportAll({
	additionalProperties: () => false,
	default: () => protocol_schema_default,
	patternProperties: () => patternProperties,
	properties: () => properties,
	title: () => title,
	type: () => type
});
var title, type, properties, patternProperties, additionalProperties, protocol_schema_default;
var init_protocol_schema = __esmMin((() => {
	title = "protocol";
	type = "object";
	properties = { "types": {
		"type": "object",
		"patternProperties": { "^[0-9a-zA-Z_]+$": { "oneOf": [{ "type": "string" }, {
			"type": "array",
			"items": [{ "type": "string" }, { "oneOf": [{ "type": "object" }, { "type": "array" }] }]
		}] } },
		"additionalProperties": false
	} };
	patternProperties = { "^(?!types)[a-zA-Z_]+$": { "$ref": "#" } };
	protocol_schema_default = {
		title,
		type,
		properties,
		patternProperties,
		additionalProperties: false
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef-validator@1.4.0/node_modules/protodef-validator/ProtoDef/schemas/numeric.json
var numeric_exports$1 = /* @__PURE__ */ __exportAll({
	default: () => numeric_default$1,
	f32: () => f32$3,
	f64: () => f64$3,
	i16: () => i16$3,
	i32: () => i32$3,
	i64: () => i64$3,
	i8: () => i8$3,
	int: () => int$1,
	lf32: () => lf32$1,
	lf64: () => lf64$1,
	li16: () => li16$1,
	li32: () => li32$1,
	li64: () => li64$1,
	li8: () => li8$1,
	lint: () => lint$1,
	lu16: () => lu16$1,
	lu32: () => lu32$1,
	lu64: () => lu64$1,
	lu8: () => lu8$1,
	u16: () => u16$2,
	u32: () => u32$1,
	u64: () => u64$1,
	u8: () => u8$1,
	varint: () => varint$1,
	varint128: () => varint128$1,
	varint64: () => varint64$1,
	zigzag32: () => zigzag32$2,
	zigzag64: () => zigzag64$2
});
var i8$3, u8$1, i16$3, u16$2, i32$3, u32$1, f32$3, f64$3, li8$1, lu8$1, li16$1, lu16$1, li32$1, lu32$1, lf32$1, lf64$1, i64$3, li64$1, u64$1, lu64$1, varint$1, varint64$1, varint128$1, zigzag32$2, zigzag64$2, int$1, lint$1, numeric_default$1;
var init_numeric$1 = __esmMin((() => {
	i8$3 = { "enum": ["i8"] };
	u8$1 = { "enum": ["u8"] };
	i16$3 = { "enum": ["i16"] };
	u16$2 = { "enum": ["u16"] };
	i32$3 = { "enum": ["i32"] };
	u32$1 = { "enum": ["u32"] };
	f32$3 = { "enum": ["f32"] };
	f64$3 = { "enum": ["f64"] };
	li8$1 = { "enum": ["li8"] };
	lu8$1 = { "enum": ["lu8"] };
	li16$1 = { "enum": ["li16"] };
	lu16$1 = { "enum": ["lu16"] };
	li32$1 = { "enum": ["li32"] };
	lu32$1 = { "enum": ["lu32"] };
	lf32$1 = { "enum": ["lf32"] };
	lf64$1 = { "enum": ["lf64"] };
	i64$3 = { "enum": ["i64"] };
	li64$1 = { "enum": ["li64"] };
	u64$1 = { "enum": ["u64"] };
	lu64$1 = { "enum": ["lu64"] };
	varint$1 = { "enum": ["varint"] };
	varint64$1 = { "enum": ["varint64"] };
	varint128$1 = { "enum": ["varint128"] };
	zigzag32$2 = { "enum": ["zigzag32"] };
	zigzag64$2 = { "enum": ["zigzag64"] };
	int$1 = {
		"title": "int",
		"type": "array",
		"items": [{ "enum": ["int"] }, {
			"type": "array",
			"items": {
				"type": "object",
				"properties": { "size": { "type": "number" } },
				"required": ["size"],
				"additionalProperties": false
			},
			"additionalItems": false
		}],
		"additionalItems": false
	};
	lint$1 = {
		"title": "lint",
		"type": "array",
		"items": [{ "enum": ["lint"] }, {
			"type": "array",
			"items": {
				"type": "object",
				"properties": { "size": { "type": "number" } },
				"required": ["size"],
				"additionalProperties": false
			},
			"additionalItems": false
		}],
		"additionalItems": false
	};
	numeric_default$1 = {
		i8: i8$3,
		u8: u8$1,
		i16: i16$3,
		u16: u16$2,
		i32: i32$3,
		u32: u32$1,
		f32: f32$3,
		f64: f64$3,
		li8: li8$1,
		lu8: lu8$1,
		li16: li16$1,
		lu16: lu16$1,
		li32: li32$1,
		lu32: lu32$1,
		lf32: lf32$1,
		lf64: lf64$1,
		i64: i64$3,
		li64: li64$1,
		u64: u64$1,
		lu64: lu64$1,
		varint: varint$1,
		varint64: varint64$1,
		varint128: varint128$1,
		zigzag32: zigzag32$2,
		zigzag64: zigzag64$2,
		int: int$1,
		lint: lint$1
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef-validator@1.4.0/node_modules/protodef-validator/ProtoDef/schemas/utils.json
var utils_exports$1 = /* @__PURE__ */ __exportAll({
	bitfield: () => bitfield$1,
	bitflags: () => bitflags$1,
	buffer: () => buffer$1,
	default: () => utils_default$1,
	mapper: () => mapper$1,
	pstring: () => pstring$3
});
var pstring$3, buffer$1, bitfield$1, bitflags$1, mapper$1, utils_default$1;
var init_utils$1 = __esmMin((() => {
	pstring$3 = {
		"title": "pstring",
		"type": "array",
		"items": [{ "enum": ["pstring"] }, { "oneOf": [{
			"type": "object",
			"properties": {
				"countType": { "$ref": "dataType" },
				"encoding": { "type": "string" }
			},
			"additionalProperties": false,
			"required": ["countType"]
		}, {
			"type": "object",
			"properties": {
				"count": { "$ref": "definitions#/definitions/dataTypeArgsCount" },
				"encoding": { "type": "string" }
			},
			"additionalProperties": false,
			"required": ["count"]
		}] }],
		"additionalItems": false
	};
	buffer$1 = {
		"title": "buffer",
		"type": "array",
		"items": [{ "enum": ["buffer"] }, { "oneOf": [{
			"type": "object",
			"properties": { "countType": { "$ref": "dataType" } },
			"additionalProperties": false,
			"required": ["countType"]
		}, {
			"type": "object",
			"properties": { "count": { "$ref": "definitions#/definitions/dataTypeArgsCount" } },
			"additionalProperties": false,
			"required": ["count"]
		}] }]
	};
	bitfield$1 = {
		"title": "bitfield",
		"type": "array",
		"items": [{ "enum": ["bitfield"] }, {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"name": { "$ref": "definitions#/definitions/fieldName" },
					"size": { "type": "number" },
					"signed": { "type": "boolean" }
				},
				"required": [
					"name",
					"size",
					"signed"
				],
				"additionalProperties": false
			},
			"additionalItems": false
		}],
		"additionalItems": false
	};
	bitflags$1 = {
		"title": "bitflags",
		"type": "array",
		"items": [{ "enum": ["bitflags"] }, {
			"type": "object",
			"additionalItems": false
		}],
		"additionalItems": false
	};
	mapper$1 = {
		"title": "mapper",
		"type": "array",
		"items": [{ "enum": ["mapper"] }, {
			"type": "object",
			"properties": {
				"type": { "$ref": "dataType" },
				"mappings": {
					"type": "object",
					"patternProperties": { "^[-a-zA-Z0-9 _]+$": { "type": "string" } },
					"additionalProperties": false
				}
			},
			"required": ["type", "mappings"],
			"additionalProperties": false
		}],
		"additionalItems": false
	};
	utils_default$1 = {
		pstring: pstring$3,
		buffer: buffer$1,
		bitfield: bitfield$1,
		bitflags: bitflags$1,
		mapper: mapper$1
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef-validator@1.4.0/node_modules/protodef-validator/ProtoDef/schemas/structures.json
var structures_exports$1 = /* @__PURE__ */ __exportAll({
	array: () => array$1,
	container: () => container$3,
	count: () => count$1,
	default: () => structures_default$1
});
var array$1, count$1, container$3, structures_default$1;
var init_structures$1 = __esmMin((() => {
	array$1 = {
		"title": "array",
		"type": "array",
		"items": [{ "enum": ["array"] }, { "oneOf": [{
			"type": "object",
			"properties": {
				"type": { "$ref": "dataType" },
				"countType": { "$ref": "dataType" }
			},
			"additionalProperties": false,
			"required": ["type", "countType"]
		}, {
			"type": "object",
			"properties": {
				"type": { "$ref": "dataType" },
				"count": { "$ref": "definitions#/definitions/dataTypeArgsCount" }
			},
			"additionalProperties": false,
			"required": ["type", "count"]
		}] }],
		"additionalItems": false
	};
	count$1 = {
		"title": "count",
		"type": "array",
		"items": [{ "enum": ["count"] }, {
			"type": "object",
			"properties": {
				"countFor": { "$ref": "definitions#/definitions/contextualizedFieldName" },
				"type": { "$ref": "dataType" }
			},
			"required": ["countFor", "type"],
			"additionalProperties": false
		}],
		"additionalItems": false
	};
	container$3 = {
		"title": "container",
		"type": "array",
		"items": [{ "enum": ["container"] }, {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"anon": { "type": "boolean" },
					"name": { "$ref": "definitions#/definitions/fieldName" },
					"type": { "$ref": "dataType" }
				},
				"oneOf": [{ "required": ["anon"] }, { "required": ["name"] }],
				"required": ["type"],
				"additionalProperties": false
			},
			"additionalItems": false
		}],
		"additionalItems": false
	};
	structures_default$1 = {
		array: array$1,
		count: count$1,
		container: container$3
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef-validator@1.4.0/node_modules/protodef-validator/ProtoDef/schemas/conditional.json
var conditional_exports$1 = /* @__PURE__ */ __exportAll({
	default: () => conditional_default$1,
	option: () => option$1
});
var option$1, conditional_default$1;
var init_conditional$1 = __esmMin((() => {
	option$1 = {
		"title": "option",
		"type": "array",
		"items": [{ "enum": ["option"] }, { "$ref": "dataType" }],
		"additionalItems": false
	};
	conditional_default$1 = {
		"switch": {
			"title": "switch",
			"type": "array",
			"items": [{ "enum": ["switch"] }, {
				"type": "object",
				"properties": {
					"compareTo": { "$ref": "definitions#/definitions/contextualizedFieldName" },
					"compareToValue": { "type": "string" },
					"fields": {
						"type": "object",
						"patternProperties": { "^[-a-zA-Z0-9 _:/]+$": { "$ref": "dataType" } },
						"additionalProperties": false
					},
					"default": { "$ref": "dataType" }
				},
				"oneOf": [{ "required": ["compareTo", "fields"] }, { "required": ["compareToValue", "fields"] }],
				"additionalProperties": false
			}],
			"additionalItems": false
		},
		option: option$1
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef-validator@1.4.0/node_modules/protodef-validator/ProtoDef/schemas/primitives.json
var primitives_exports = /* @__PURE__ */ __exportAll({
	bool: () => bool,
	cstring: () => cstring,
	default: () => primitives_default
});
var bool, cstring, primitives_default;
var init_primitives = __esmMin((() => {
	bool = { "enum": ["bool"] };
	cstring = {
		"title": "cstring",
		"type": "array",
		"items": [{ "enum": ["cstring"] }, {
			"type": "object",
			"properties": { "encoding": { "type": "string" } },
			"additionalProperties": false,
			"required": []
		}],
		"additionalItems": false
	};
	primitives_default = {
		bool,
		cstring,
		"void": { "enum": ["void"] }
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef-validator@1.4.0/node_modules/protodef-validator/index.js
var require_protodef_validator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Ajv = require_ajv();
	var assert = __require("assert");
	module.exports = class Validator {
		constructor(typesSchemas) {
			this.createAjvInstance(typesSchemas);
			this.addDefaultTypes();
		}
		createAjvInstance(typesSchemas) {
			this.typesSchemas = {};
			this.compiled = false;
			this.ajv = new Ajv({ verbose: true });
			this.ajv.addSchema((init_definitions(), __toCommonJS(definitions_exports).default), "definitions");
			this.ajv.addSchema((init_protocol_schema(), __toCommonJS(protocol_schema_exports).default), "protocol");
			if (typesSchemas) Object.keys(typesSchemas).forEach((s) => this.addType(s, typesSchemas[s]));
		}
		addDefaultTypes() {
			this.addTypes((init_numeric$1(), __toCommonJS(numeric_exports$1).default));
			this.addTypes((init_utils$1(), __toCommonJS(utils_exports$1).default));
			this.addTypes((init_structures$1(), __toCommonJS(structures_exports$1).default));
			this.addTypes((init_conditional$1(), __toCommonJS(conditional_exports$1).default));
			this.addTypes((init_primitives(), __toCommonJS(primitives_exports).default));
		}
		addTypes(schemas) {
			Object.keys(schemas).forEach((name) => this.addType(name, schemas[name]));
		}
		typeToSchemaName(name) {
			return name.replace("|", "_");
		}
		addType(name, schema) {
			const schemaName = this.typeToSchemaName(name);
			if (this.typesSchemas[schemaName] != void 0) return;
			if (!schema) schema = { "oneOf": [{ "enum": [name] }, {
				"type": "array",
				"items": [{ "enum": [name] }, { "oneOf": [{ "type": "object" }, { "type": "array" }] }]
			}] };
			this.typesSchemas[schemaName] = schema;
			if (this.compiled) this.createAjvInstance(this.typesSchemas);
			else this.ajv.addSchema(schema, schemaName);
			this.ajv.removeSchema("dataType");
			this.ajv.addSchema({
				"title": "dataType",
				"oneOf": [{ "enum": ["native"] }].concat(Object.keys(this.typesSchemas).map((name) => ({ "$ref": this.typeToSchemaName(name) })))
			}, "dataType");
		}
		validateType(type) {
			let valid = this.ajv.validate("dataType", type);
			this.compiled = true;
			if (!valid) {
				console.log(JSON.stringify(this.ajv.errors[0], null, 2));
				if (this.ajv.errors[0]["parentSchema"]["title"] == "dataType") this.validateTypeGoingInside(this.ajv.errors[0]["data"]);
				throw new Error("validation error");
			}
		}
		validateTypeGoingInside(type) {
			if (Array.isArray(type)) {
				assert.ok(this.typesSchemas[this.typeToSchemaName(type[0])] != void 0, type + " is an undefined type");
				let valid = this.ajv.validate(type[0], type);
				this.compiled = true;
				if (!valid) {
					console.log(JSON.stringify(this.ajv.errors[0], null, 2));
					if (this.ajv.errors[0]["parentSchema"]["title"] == "dataType") this.validateTypeGoingInside(this.ajv.errors[0]["data"]);
					throw new Error("validation error");
				}
			} else {
				if (type == "native") return;
				assert.ok(this.typesSchemas[this.typeToSchemaName(type)] != void 0, type + " is an undefined type");
			}
		}
		validateProtocol(protocol) {
			let valid = this.ajv.validate("protocol", protocol);
			assert.ok(valid, JSON.stringify(this.ajv.errors, null, 2));
			function validateTypes(p, originalValidator, path) {
				const v = new Validator(originalValidator.typesSchemas);
				Object.keys(p).forEach((k) => {
					if (k == "types") {
						Object.keys(p[k]).forEach((typeName) => v.addType(typeName));
						Object.keys(p[k]).forEach((typeName) => {
							try {
								v.validateType(p[k][typeName], path + "." + k + "." + typeName);
							} catch (e) {
								throw new Error("Error at " + path + "." + k + "." + typeName);
							}
						});
					} else validateTypes(p[k], v, path + "." + k);
				});
			}
			validateTypes(protocol, this, "root");
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/ProtoDef/schemas/numeric.json
var numeric_exports = /* @__PURE__ */ __exportAll({
	default: () => numeric_default,
	f32: () => f32$2,
	f64: () => f64$2,
	i16: () => i16$2,
	i32: () => i32$2,
	i64: () => i64$2,
	i8: () => i8$2,
	int: () => int,
	lf32: () => lf32,
	lf64: () => lf64,
	li16: () => li16,
	li32: () => li32,
	li64: () => li64,
	li8: () => li8,
	lint: () => lint,
	lu16: () => lu16,
	lu32: () => lu32,
	lu64: () => lu64,
	lu8: () => lu8,
	u16: () => u16$1,
	u32: () => u32,
	u64: () => u64,
	u8: () => u8,
	varint: () => varint,
	varint128: () => varint128,
	varint64: () => varint64,
	zigzag32: () => zigzag32$1,
	zigzag64: () => zigzag64$1
});
var i8$2, u8, i16$2, u16$1, i32$2, u32, f32$2, f64$2, li8, lu8, li16, lu16, li32, lu32, lf32, lf64, i64$2, li64, u64, lu64, varint, varint64, varint128, zigzag32$1, zigzag64$1, int, lint, numeric_default;
var init_numeric = __esmMin((() => {
	i8$2 = { "enum": ["i8"] };
	u8 = { "enum": ["u8"] };
	i16$2 = { "enum": ["i16"] };
	u16$1 = { "enum": ["u16"] };
	i32$2 = { "enum": ["i32"] };
	u32 = { "enum": ["u32"] };
	f32$2 = { "enum": ["f32"] };
	f64$2 = { "enum": ["f64"] };
	li8 = { "enum": ["li8"] };
	lu8 = { "enum": ["lu8"] };
	li16 = { "enum": ["li16"] };
	lu16 = { "enum": ["lu16"] };
	li32 = { "enum": ["li32"] };
	lu32 = { "enum": ["lu32"] };
	lf32 = { "enum": ["lf32"] };
	lf64 = { "enum": ["lf64"] };
	i64$2 = { "enum": ["i64"] };
	li64 = { "enum": ["li64"] };
	u64 = { "enum": ["u64"] };
	lu64 = { "enum": ["lu64"] };
	varint = { "enum": ["varint"] };
	varint64 = { "enum": ["varint64"] };
	varint128 = { "enum": ["varint128"] };
	zigzag32$1 = { "enum": ["zigzag32"] };
	zigzag64$1 = { "enum": ["zigzag64"] };
	int = {
		"title": "int",
		"type": "array",
		"items": [{ "enum": ["int"] }, {
			"type": "array",
			"items": {
				"type": "object",
				"properties": { "size": { "type": "number" } },
				"required": ["size"],
				"additionalProperties": false
			},
			"additionalItems": false
		}],
		"additionalItems": false
	};
	lint = {
		"title": "lint",
		"type": "array",
		"items": [{ "enum": ["lint"] }, {
			"type": "array",
			"items": {
				"type": "object",
				"properties": { "size": { "type": "number" } },
				"required": ["size"],
				"additionalProperties": false
			},
			"additionalItems": false
		}],
		"additionalItems": false
	};
	numeric_default = {
		i8: i8$2,
		u8,
		i16: i16$2,
		u16: u16$1,
		i32: i32$2,
		u32,
		f32: f32$2,
		f64: f64$2,
		li8,
		lu8,
		li16,
		lu16,
		li32,
		lu32,
		lf32,
		lf64,
		i64: i64$2,
		li64,
		u64,
		lu64,
		varint,
		varint64,
		varint128,
		zigzag32: zigzag32$1,
		zigzag64: zigzag64$1,
		int,
		lint
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/datatypes/numeric.js
var require_numeric = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { PartialReadError } = require_utils$2();
	var SignedBigInt = class extends Array {
		valueOf() {
			return BigInt.asIntN(64, BigInt(this[0]) << 32n) | BigInt.asUintN(32, BigInt(this[1]));
		}
		toString() {
			return this.valueOf().toString();
		}
		[Symbol.for("nodejs.util.inspect.custom")]() {
			return this.valueOf();
		}
	};
	var UnsignedBigInt = class extends Array {
		valueOf() {
			return BigInt.asUintN(64, BigInt(this[0]) << 32n) | BigInt.asUintN(32, BigInt(this[1]));
		}
		toString() {
			return this.valueOf().toString();
		}
		[Symbol.for("nodejs.util.inspect.custom")]() {
			return this.valueOf();
		}
	};
	function readI64(buffer, offset) {
		if (offset + 8 > buffer.length) throw new PartialReadError();
		return {
			value: new SignedBigInt(buffer.readInt32BE(offset), buffer.readInt32BE(offset + 4)),
			size: 8
		};
	}
	function writeI64(value, buffer, offset) {
		if (typeof value === "bigint") buffer.writeBigInt64BE(value, offset);
		else {
			buffer.writeInt32BE(value[0], offset);
			buffer.writeInt32BE(value[1], offset + 4);
		}
		return offset + 8;
	}
	function readLI64(buffer, offset) {
		if (offset + 8 > buffer.length) throw new PartialReadError();
		return {
			value: new SignedBigInt(buffer.readInt32LE(offset + 4), buffer.readInt32LE(offset)),
			size: 8
		};
	}
	function writeLI64(value, buffer, offset) {
		if (typeof value === "bigint") buffer.writeBigInt64LE(value, offset);
		else {
			buffer.writeInt32LE(value[0], offset + 4);
			buffer.writeInt32LE(value[1], offset);
		}
		return offset + 8;
	}
	function readU64(buffer, offset) {
		if (offset + 8 > buffer.length) throw new PartialReadError();
		return {
			value: new UnsignedBigInt(buffer.readUInt32BE(offset), buffer.readUInt32BE(offset + 4)),
			size: 8
		};
	}
	function writeU64(value, buffer, offset) {
		if (typeof value === "bigint") buffer.writeBigUInt64BE(value, offset);
		else {
			buffer.writeUInt32BE(value[0], offset);
			buffer.writeUInt32BE(value[1], offset + 4);
		}
		return offset + 8;
	}
	function readLU64(buffer, offset) {
		if (offset + 8 > buffer.length) throw new PartialReadError();
		return {
			value: new UnsignedBigInt(buffer.readUInt32LE(offset + 4), buffer.readUInt32LE(offset)),
			size: 8
		};
	}
	function writeLU64(value, buffer, offset) {
		if (typeof value === "bigint") buffer.writeBigUInt64LE(value, offset);
		else {
			buffer.writeUInt32LE(value[0], offset + 4);
			buffer.writeUInt32LE(value[1], offset);
		}
		return offset + 8;
	}
	function generateFunctions(bufferReader, bufferWriter, size, schema) {
		const reader = (buffer, offset) => {
			if (offset + size > buffer.length) throw new PartialReadError();
			return {
				value: buffer[bufferReader](offset),
				size
			};
		};
		const writer = (value, buffer, offset) => {
			buffer[bufferWriter](value, offset);
			return offset + size;
		};
		return [
			reader,
			writer,
			size,
			schema
		];
	}
	var nums = {
		i8: [
			"readInt8",
			"writeInt8",
			1
		],
		u8: [
			"readUInt8",
			"writeUInt8",
			1
		],
		i16: [
			"readInt16BE",
			"writeInt16BE",
			2
		],
		u16: [
			"readUInt16BE",
			"writeUInt16BE",
			2
		],
		i32: [
			"readInt32BE",
			"writeInt32BE",
			4
		],
		u32: [
			"readUInt32BE",
			"writeUInt32BE",
			4
		],
		f32: [
			"readFloatBE",
			"writeFloatBE",
			4
		],
		f64: [
			"readDoubleBE",
			"writeDoubleBE",
			8
		],
		li8: [
			"readInt8",
			"writeInt8",
			1
		],
		lu8: [
			"readUInt8",
			"writeUInt8",
			1
		],
		li16: [
			"readInt16LE",
			"writeInt16LE",
			2
		],
		lu16: [
			"readUInt16LE",
			"writeUInt16LE",
			2
		],
		li32: [
			"readInt32LE",
			"writeInt32LE",
			4
		],
		lu32: [
			"readUInt32LE",
			"writeUInt32LE",
			4
		],
		lf32: [
			"readFloatLE",
			"writeFloatLE",
			4
		],
		lf64: [
			"readDoubleLE",
			"writeDoubleLE",
			8
		]
	};
	var types = Object.keys(nums).reduce((types, num) => {
		types[num] = generateFunctions(nums[num][0], nums[num][1], nums[num][2], (init_numeric(), __toCommonJS(numeric_exports).default)[num]);
		return types;
	}, {});
	types.i64 = [
		readI64,
		writeI64,
		8,
		(init_numeric(), __toCommonJS(numeric_exports).default).i64
	];
	types.li64 = [
		readLI64,
		writeLI64,
		8,
		(init_numeric(), __toCommonJS(numeric_exports).default).li64
	];
	types.u64 = [
		readU64,
		writeU64,
		8,
		(init_numeric(), __toCommonJS(numeric_exports).default).u64
	];
	types.lu64 = [
		readLU64,
		writeLU64,
		8,
		(init_numeric(), __toCommonJS(numeric_exports).default).lu64
	];
	module.exports = types;
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/ProtoDef/schemas/utils.json
var utils_exports = /* @__PURE__ */ __exportAll({
	bitfield: () => bitfield,
	bitflags: () => bitflags,
	buffer: () => buffer,
	default: () => utils_default,
	mapper: () => mapper,
	pstring: () => pstring$2
});
var pstring$2, buffer, bitfield, bitflags, mapper, utils_default;
var init_utils = __esmMin((() => {
	pstring$2 = {
		"title": "pstring",
		"type": "array",
		"items": [{ "enum": ["pstring"] }, { "oneOf": [{
			"type": "object",
			"properties": {
				"countType": { "$ref": "dataType" },
				"encoding": { "type": "string" }
			},
			"additionalProperties": false,
			"required": ["countType"]
		}, {
			"type": "object",
			"properties": {
				"count": { "$ref": "definitions#/definitions/dataTypeArgsCount" },
				"encoding": { "type": "string" }
			},
			"additionalProperties": false,
			"required": ["count"]
		}] }],
		"additionalItems": false
	};
	buffer = {
		"title": "buffer",
		"type": "array",
		"items": [{ "enum": ["buffer"] }, { "oneOf": [{
			"type": "object",
			"properties": { "countType": { "$ref": "dataType" } },
			"additionalProperties": false,
			"required": ["countType"]
		}, {
			"type": "object",
			"properties": { "count": { "$ref": "definitions#/definitions/dataTypeArgsCount" } },
			"additionalProperties": false,
			"required": ["count"]
		}] }]
	};
	bitfield = {
		"title": "bitfield",
		"type": "array",
		"items": [{ "enum": ["bitfield"] }, {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"name": { "$ref": "definitions#/definitions/fieldName" },
					"size": { "type": "number" },
					"signed": { "type": "boolean" }
				},
				"required": [
					"name",
					"size",
					"signed"
				],
				"additionalProperties": false
			},
			"additionalItems": false
		}],
		"additionalItems": false
	};
	bitflags = {
		"title": "bitflags",
		"type": "array",
		"items": [{ "enum": ["bitflags"] }, {
			"type": "object",
			"additionalItems": false
		}],
		"additionalItems": false
	};
	mapper = {
		"title": "mapper",
		"type": "array",
		"items": [{ "enum": ["mapper"] }, {
			"type": "object",
			"properties": {
				"type": { "$ref": "dataType" },
				"mappings": {
					"type": "object",
					"patternProperties": { "^[-a-zA-Z0-9 _]+$": { "type": "string" } },
					"additionalProperties": false
				}
			},
			"required": ["type", "mappings"],
			"additionalProperties": false
		}],
		"additionalItems": false
	};
	utils_default = {
		pstring: pstring$2,
		buffer,
		bitfield,
		bitflags,
		mapper
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/datatypes/varint.js
var require_varint = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { PartialReadError } = require_utils$2();
	module.exports = {
		varint: [
			readVarInt,
			writeVarInt,
			sizeOfVarInt,
			(init_numeric(), __toCommonJS(numeric_exports).default).varint
		],
		varint64: [
			readVarLong,
			writeVarLong,
			sizeOfVarLong,
			(init_numeric(), __toCommonJS(numeric_exports).default).varint64
		],
		varint128: [
			readVarLong128,
			writeVarLong,
			sizeOfVarLong,
			(init_numeric(), __toCommonJS(numeric_exports).default).varint128
		],
		zigzag32: [
			readSignedVarInt,
			writeSignedVarInt,
			sizeOfSignedVarInt,
			(init_numeric(), __toCommonJS(numeric_exports).default).zigzag32
		],
		zigzag64: [
			readSignedVarLong,
			writeSignedVarLong,
			sizeOfSignedVarLong,
			(init_numeric(), __toCommonJS(numeric_exports).default).zigzag64
		]
	};
	function readVarInt(buffer, offset) {
		let result = 0;
		let shift = 0;
		let cursor = offset;
		while (true) {
			if (cursor >= buffer.length) throw new PartialReadError("Unexpected buffer end while reading VarInt");
			const byte = buffer.readUInt8(cursor);
			result |= (byte & 127) << shift;
			cursor++;
			if (!(byte & 128)) return {
				value: result,
				size: cursor - offset
			};
			shift += 7;
			if (shift > 64) throw new PartialReadError(`varint is too big: ${shift}`);
		}
	}
	function sizeOfVarInt(value) {
		let cursor = 0;
		while (value & -128) {
			value >>>= 7;
			cursor++;
		}
		return cursor + 1;
	}
	function writeVarInt(value, buffer, offset) {
		let cursor = 0;
		while (value & -128) {
			buffer.writeUInt8(value & 255 | 128, offset + cursor);
			cursor++;
			value >>>= 7;
		}
		buffer.writeUInt8(value, offset + cursor);
		return offset + cursor + 1;
	}
	function readVarLong(buffer, offset) {
		let result = 0n;
		let shift = 0n;
		let cursor = offset;
		while (true) {
			if (cursor >= buffer.length) throw new PartialReadError("Unexpected buffer end while reading VarLong");
			const byte = buffer.readUInt8(cursor);
			result |= (BigInt(byte) & 127n) << shift;
			cursor++;
			if (!(byte & 128)) return {
				value: result,
				size: cursor - offset
			};
			shift += 7n;
			if (shift > 63n) throw new Error(`varint is too big: ${shift}`);
		}
	}
	function readVarLong128(buffer, offset) {
		let result = 0n;
		let shift = 0n;
		let cursor = offset;
		while (true) {
			if (cursor >= buffer.length) throw new PartialReadError("Unexpected buffer end while reading VarLong");
			const byte = buffer.readUInt8(cursor);
			result |= (BigInt(byte) & 127n) << shift;
			cursor++;
			if (!(byte & 128)) return {
				value: result,
				size: cursor - offset
			};
			shift += 7n;
			if (shift > 127n) throw new Error(`varint is too big: ${shift}`);
		}
	}
	function sizeOfVarLong(value) {
		value = BigInt(value);
		let size = 0;
		do {
			value >>= 7n;
			size++;
		} while (value !== 0n);
		return size;
	}
	function writeVarLong(value, buffer, offset) {
		value = BigInt(value);
		let cursor = offset;
		do {
			const byte = value & 127n;
			value >>= 7n;
			buffer.writeUInt8(Number(byte) | (value ? 128 : 0), cursor++);
		} while (value);
		return cursor;
	}
	function readSignedVarInt(buffer, offset) {
		const { value, size } = readVarInt(buffer, offset);
		return {
			value: value >>> 1 ^ -(value & 1),
			size
		};
	}
	function sizeOfSignedVarInt(value) {
		return sizeOfVarInt(value << 1 ^ value >> 31);
	}
	function writeSignedVarInt(value, buffer, offset) {
		return writeVarInt(value << 1 ^ value >> 31, buffer, offset);
	}
	function readSignedVarLong(buffer, offset) {
		const { value, size } = readVarLong(buffer, offset);
		return {
			value: value >> 1n ^ -(value & 1n),
			size
		};
	}
	function sizeOfSignedVarLong(value) {
		return sizeOfVarLong(BigInt(value) << 1n ^ BigInt(value) >> 63n);
	}
	function writeSignedVarLong(value, buffer, offset) {
		return writeVarLong(BigInt(value) << 1n ^ BigInt(value) >> 63n, buffer, offset);
	}
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/datatypes/utils.js
var require_utils$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { getCount, sendCount, calcCount, PartialReadError } = require_utils$2();
	module.exports = {
		bool: [
			readBool,
			writeBool,
			1,
			(init_utils(), __toCommonJS(utils_exports).default).bool
		],
		pstring: [
			readPString,
			writePString,
			sizeOfPString,
			(init_utils(), __toCommonJS(utils_exports).default).pstring
		],
		buffer: [
			readBuffer,
			writeBuffer,
			sizeOfBuffer,
			(init_utils(), __toCommonJS(utils_exports).default).buffer
		],
		void: [
			readVoid,
			writeVoid,
			0,
			(init_utils(), __toCommonJS(utils_exports).default).void
		],
		bitfield: [
			readBitField,
			writeBitField,
			sizeOfBitField,
			(init_utils(), __toCommonJS(utils_exports).default).bitfield
		],
		bitflags: [
			readBitflags,
			writeBitflags,
			sizeOfBitflags,
			(init_utils(), __toCommonJS(utils_exports).default).bitflags
		],
		cstring: [
			readCString,
			writeCString,
			sizeOfCString,
			(init_utils(), __toCommonJS(utils_exports).default).cstring
		],
		mapper: [
			readMapper,
			writeMapper,
			sizeOfMapper,
			(init_utils(), __toCommonJS(utils_exports).default).mapper
		],
		...require_varint()
	};
	function mapperEquality(a, b) {
		return a === b || parseInt(a) === parseInt(b);
	}
	function readMapper(buffer, offset, { type, mappings }, rootNode) {
		const { size, value } = this.read(buffer, offset, type, rootNode);
		let mappedValue = null;
		const keys = Object.keys(mappings);
		for (let i = 0; i < keys.length; i++) if (mapperEquality(keys[i], value)) {
			mappedValue = mappings[keys[i]];
			break;
		}
		if (mappedValue == null) throw new Error(value + " is not in the mappings value");
		return {
			size,
			value: mappedValue
		};
	}
	function writeMapper(value, buffer, offset, { type, mappings }, rootNode) {
		const keys = Object.keys(mappings);
		let mappedValue = null;
		for (let i = 0; i < keys.length; i++) if (mapperEquality(mappings[keys[i]], value)) {
			mappedValue = keys[i];
			break;
		}
		if (mappedValue == null) throw new Error(value + " is not in the mappings value");
		return this.write(mappedValue, buffer, offset, type, rootNode);
	}
	function sizeOfMapper(value, { type, mappings }, rootNode) {
		const keys = Object.keys(mappings);
		let mappedValue = null;
		for (let i = 0; i < keys.length; i++) if (mapperEquality(mappings[keys[i]], value)) {
			mappedValue = keys[i];
			break;
		}
		if (mappedValue == null) throw new Error(value + " is not in the mappings value");
		return this.sizeOf(mappedValue, type, rootNode);
	}
	function readPString(buffer, offset, typeArgs, rootNode) {
		const { size, count } = getCount.call(this, buffer, offset, typeArgs, rootNode);
		const cursor = offset + size;
		const strEnd = cursor + count;
		if (strEnd > buffer.length) throw new PartialReadError("Missing characters in string, found size is " + buffer.length + " expected size was " + strEnd);
		return {
			value: buffer.toString(typeArgs.encoding || "utf8", cursor, strEnd),
			size: strEnd - offset
		};
	}
	function writePString(value, buffer, offset, typeArgs, rootNode) {
		const length = Buffer.byteLength(value, "utf8");
		offset = sendCount.call(this, length, buffer, offset, typeArgs, rootNode);
		buffer.write(value, offset, length, typeArgs.encoding || "utf8");
		return offset + length;
	}
	function sizeOfPString(value, typeArgs, rootNode) {
		const length = Buffer.byteLength(value, typeArgs.encoding || "utf8");
		return calcCount.call(this, length, typeArgs, rootNode) + length;
	}
	function readBool(buffer, offset) {
		if (offset + 1 > buffer.length) throw new PartialReadError();
		return {
			value: !!buffer.readInt8(offset),
			size: 1
		};
	}
	function writeBool(value, buffer, offset) {
		buffer.writeInt8(+value, offset);
		return offset + 1;
	}
	function readBuffer(buffer, offset, typeArgs, rootNode) {
		const { size, count } = getCount.call(this, buffer, offset, typeArgs, rootNode);
		offset += size;
		if (offset + count > buffer.length) throw new PartialReadError();
		return {
			value: buffer.slice(offset, offset + count),
			size: size + count
		};
	}
	function writeBuffer(value, buffer, offset, typeArgs, rootNode) {
		if (!(value instanceof Buffer)) value = Buffer.from(value);
		offset = sendCount.call(this, value.length, buffer, offset, typeArgs, rootNode);
		value.copy(buffer, offset);
		return offset + value.length;
	}
	function sizeOfBuffer(value, typeArgs, rootNode) {
		if (!(value instanceof Buffer)) value = Buffer.from(value);
		return calcCount.call(this, value.length, typeArgs, rootNode) + value.length;
	}
	function readVoid() {
		return {
			value: void 0,
			size: 0
		};
	}
	function writeVoid(value, buffer, offset) {
		return offset;
	}
	function generateBitMask(n) {
		return (1 << n) - 1;
	}
	function readBitField(buffer, offset, typeArgs) {
		const beginOffset = offset;
		let curVal = null;
		let bits = 0;
		const results = {};
		results.value = typeArgs.reduce((acc, { size, signed, name }) => {
			let currentSize = size;
			let val = 0;
			while (currentSize > 0) {
				if (bits === 0) {
					if (buffer.length < offset + 1) throw new PartialReadError();
					curVal = buffer[offset++];
					bits = 8;
				}
				const bitsToRead = Math.min(currentSize, bits);
				val = val << bitsToRead | (curVal & generateBitMask(bits)) >> bits - bitsToRead;
				bits -= bitsToRead;
				currentSize -= bitsToRead;
			}
			if (signed && val >= 1 << size - 1) val -= 1 << size;
			acc[name] = val;
			return acc;
		}, {});
		results.size = offset - beginOffset;
		return results;
	}
	function writeBitField(value, buffer, offset, typeArgs) {
		let toWrite = 0;
		let bits = 0;
		typeArgs.forEach(({ size, signed, name }) => {
			const val = value[name];
			if (!signed && val < 0 || signed && val < -(1 << size - 1)) throw new Error(value + " < " + signed ? -(1 << size - 1) : 0);
			else if (!signed && val >= 1 << size || signed && val >= (1 << size - 1) - 1) throw new Error(value + " >= " + signed ? 1 << size : (1 << size - 1) - 1);
			while (size > 0) {
				const writeBits = Math.min(8 - bits, size);
				toWrite = toWrite << writeBits | val >> size - writeBits & generateBitMask(writeBits);
				size -= writeBits;
				bits += writeBits;
				if (bits === 8) {
					buffer[offset++] = toWrite;
					bits = 0;
					toWrite = 0;
				}
			}
		});
		if (bits !== 0) buffer[offset++] = toWrite << 8 - bits;
		return offset;
	}
	function sizeOfBitField(value, typeArgs) {
		return Math.ceil(typeArgs.reduce((acc, { size }) => {
			return acc + size;
		}, 0) / 8);
	}
	function readCString(buffer, offset, typeArgs) {
		let size = 0;
		while (offset + size < buffer.length && buffer[offset + size] !== 0) size++;
		if (buffer.length < offset + size + 1) throw new PartialReadError();
		return {
			value: buffer.toString(typeArgs?.encoding || "utf8", offset, offset + size),
			size: size + 1
		};
	}
	function writeCString(value, buffer, offset, typeArgs) {
		const length = Buffer.byteLength(value, typeArgs?.encoding || "utf8");
		buffer.write(value, offset, length, typeArgs?.encoding || "utf8");
		offset += length;
		buffer.writeInt8(0, offset);
		return offset + 1;
	}
	function sizeOfCString(value) {
		return Buffer.byteLength(value, "utf8") + 1;
	}
	function readBitflags(buffer, offset, { type, flags, shift, big }, rootNode) {
		const { size, value } = this.read(buffer, offset, type, rootNode);
		let f = {};
		if (Array.isArray(flags)) for (const [k, v] of Object.entries(flags)) f[v] = big ? 1n << BigInt(k) : 1 << k;
		else if (shift) for (const k in flags) f[k] = big ? 1n << BigInt(flags[k]) : 1 << flags[k];
		else f = flags;
		const result = { _value: value };
		for (const key in f) result[key] = (value & f[key]) === f[key];
		return {
			value: result,
			size
		};
	}
	function writeBitflags(value, buffer, offset, { type, flags, shift, big }, rootNode) {
		let f = {};
		if (Array.isArray(flags)) for (const [k, v] of Object.entries(flags)) f[v] = big ? 1n << BigInt(k) : 1 << k;
		else if (shift) for (const k in flags) f[k] = big ? 1n << BigInt(flags[k]) : 1 << flags[k];
		else f = flags;
		let val = value._value || (big ? 0n : 0);
		for (const key in f) if (value[key]) val |= f[key];
		return this.write(val, buffer, offset, type, rootNode);
	}
	function sizeOfBitflags(value, { type, flags, shift, big }, rootNode) {
		if (!value) throw new Error("Missing field");
		let f = {};
		if (Array.isArray(flags)) for (const [k, v] of Object.entries(flags)) f[v] = big ? 1n << BigInt(k) : 1 << k;
		else if (shift) for (const k in flags) f[k] = big ? 1n << BigInt(flags[k]) : 1 << flags[k];
		else f = flags;
		let mappedValue = value._value || (big ? 0n : 0);
		for (const key in f) if (value[key]) mappedValue |= f[key];
		return this.sizeOf(mappedValue, type, rootNode);
	}
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/ProtoDef/schemas/structures.json
var structures_exports = /* @__PURE__ */ __exportAll({
	array: () => array,
	container: () => container$2,
	count: () => count,
	default: () => structures_default
});
var array, count, container$2, structures_default;
var init_structures = __esmMin((() => {
	array = {
		"title": "array",
		"type": "array",
		"items": [{ "enum": ["array"] }, { "oneOf": [{
			"type": "object",
			"properties": {
				"type": { "$ref": "dataType" },
				"countType": { "$ref": "dataType" }
			},
			"additionalProperties": false,
			"required": ["type", "countType"]
		}, {
			"type": "object",
			"properties": {
				"type": { "$ref": "dataType" },
				"count": { "$ref": "definitions#/definitions/dataTypeArgsCount" }
			},
			"additionalProperties": false,
			"required": ["type", "count"]
		}] }],
		"additionalItems": false
	};
	count = {
		"title": "count",
		"type": "array",
		"items": [{ "enum": ["count"] }, {
			"type": "object",
			"properties": {
				"countFor": { "$ref": "definitions#/definitions/contextualizedFieldName" },
				"type": { "$ref": "dataType" }
			},
			"required": ["countFor", "type"],
			"additionalProperties": false
		}],
		"additionalItems": false
	};
	container$2 = {
		"title": "container",
		"type": "array",
		"items": [{ "enum": ["container"] }, {
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"anon": { "type": "boolean" },
					"name": { "$ref": "definitions#/definitions/fieldName" },
					"type": { "$ref": "dataType" }
				},
				"oneOf": [{ "required": ["anon"] }, { "required": ["name"] }],
				"required": ["type"],
				"additionalProperties": false
			},
			"additionalItems": false
		}],
		"additionalItems": false
	};
	structures_default = {
		array,
		count,
		container: container$2
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/datatypes/structures.js
var require_structures = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { getField, getCount, sendCount, calcCount, tryDoc } = require_utils$2();
	module.exports = {
		array: [
			readArray,
			writeArray,
			sizeOfArray,
			(init_structures(), __toCommonJS(structures_exports).default).array
		],
		count: [
			readCount,
			writeCount,
			sizeOfCount,
			(init_structures(), __toCommonJS(structures_exports).default).count
		],
		container: [
			readContainer,
			writeContainer,
			sizeOfContainer,
			(init_structures(), __toCommonJS(structures_exports).default).container
		]
	};
	function readArray(buffer, offset, typeArgs, rootNode) {
		const results = {
			value: [],
			size: 0
		};
		let value;
		let { count, size } = getCount.call(this, buffer, offset, typeArgs, rootNode);
		offset += size;
		results.size += size;
		for (let i = 0; i < count; i++) {
			({size, value} = tryDoc(() => this.read(buffer, offset, typeArgs.type, rootNode), i));
			results.size += size;
			offset += size;
			results.value.push(value);
		}
		return results;
	}
	function writeArray(value, buffer, offset, typeArgs, rootNode) {
		offset = sendCount.call(this, value.length, buffer, offset, typeArgs, rootNode);
		return value.reduce((offset, v, index) => tryDoc(() => this.write(v, buffer, offset, typeArgs.type, rootNode), index), offset);
	}
	function sizeOfArray(value, typeArgs, rootNode) {
		let size = calcCount.call(this, value.length, typeArgs, rootNode);
		size = value.reduce((size, v, index) => tryDoc(() => size + this.sizeOf(v, typeArgs.type, rootNode), index), size);
		return size;
	}
	function readContainer(buffer, offset, typeArgs, context) {
		const results = {
			value: { "..": context },
			size: 0
		};
		typeArgs.forEach(({ type, name, anon }) => {
			tryDoc(() => {
				const readResults = this.read(buffer, offset, type, results.value);
				results.size += readResults.size;
				offset += readResults.size;
				if (anon) {
					if (readResults.value !== void 0) Object.keys(readResults.value).forEach((key) => {
						results.value[key] = readResults.value[key];
					});
				} else results.value[name] = readResults.value;
			}, name || "unknown");
		});
		delete results.value[".."];
		return results;
	}
	function writeContainer(value, buffer, offset, typeArgs, context) {
		value[".."] = context;
		offset = typeArgs.reduce((offset, { type, name, anon }) => tryDoc(() => this.write(anon ? value : value[name], buffer, offset, type, value), name || "unknown"), offset);
		delete value[".."];
		return offset;
	}
	function sizeOfContainer(value, typeArgs, context) {
		value[".."] = context;
		const size = typeArgs.reduce((size, { type, name, anon }) => size + tryDoc(() => this.sizeOf(anon ? value : value[name], type, value), name || "unknown"), 0);
		delete value[".."];
		return size;
	}
	function readCount(buffer, offset, { type }, rootNode) {
		return this.read(buffer, offset, type, rootNode);
	}
	function writeCount(value, buffer, offset, { countFor, type }, rootNode) {
		return this.write(getField(countFor, rootNode).length, buffer, offset, type, rootNode);
	}
	function sizeOfCount(value, { countFor, type }, rootNode) {
		return this.sizeOf(getField(countFor, rootNode).length, type, rootNode);
	}
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/ProtoDef/schemas/conditional.json
var conditional_exports = /* @__PURE__ */ __exportAll({
	default: () => conditional_default,
	option: () => option
});
var option, conditional_default;
var init_conditional = __esmMin((() => {
	option = {
		"title": "option",
		"type": "array",
		"items": [{ "enum": ["option"] }, { "$ref": "dataType" }],
		"additionalItems": false
	};
	conditional_default = {
		"switch": {
			"title": "switch",
			"type": "array",
			"items": [{ "enum": ["switch"] }, {
				"type": "object",
				"properties": {
					"compareTo": { "$ref": "definitions#/definitions/contextualizedFieldName" },
					"compareToValue": { "type": "string" },
					"fields": {
						"type": "object",
						"patternProperties": { "^[-a-zA-Z0-9 _:/]+$": { "$ref": "dataType" } },
						"additionalProperties": false
					},
					"default": { "$ref": "dataType" }
				},
				"oneOf": [{ "required": ["compareTo", "fields"] }, { "required": ["compareToValue", "fields"] }],
				"additionalProperties": false
			}],
			"additionalItems": false
		},
		option
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/datatypes/conditional.js
var require_conditional = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { getField, getFieldInfo, tryDoc, PartialReadError } = require_utils$2();
	module.exports = {
		switch: [
			readSwitch,
			writeSwitch,
			sizeOfSwitch,
			(init_conditional(), __toCommonJS(conditional_exports).default).switch
		],
		option: [
			readOption,
			writeOption,
			sizeOfOption,
			(init_conditional(), __toCommonJS(conditional_exports).default).option
		]
	};
	function readSwitch(buffer, offset, { compareTo, fields, compareToValue, default: defVal }, rootNode) {
		compareTo = compareToValue !== void 0 ? compareToValue : getField(compareTo, rootNode);
		if (typeof fields[compareTo] === "undefined" && typeof defVal === "undefined") throw new Error(compareTo + " has no associated fieldInfo in switch");
		for (const field in fields) if (field.startsWith("/")) {
			fields[this.types[field.slice(1)]] = fields[field];
			delete fields[field];
		}
		const caseDefault = typeof fields[compareTo] === "undefined";
		const fieldInfo = getFieldInfo(caseDefault ? defVal : fields[compareTo]);
		return tryDoc(() => this.read(buffer, offset, fieldInfo, rootNode), caseDefault ? "default" : compareTo);
	}
	function writeSwitch(value, buffer, offset, { compareTo, fields, compareToValue, default: defVal }, rootNode) {
		compareTo = compareToValue !== void 0 ? compareToValue : getField(compareTo, rootNode);
		if (typeof fields[compareTo] === "undefined" && typeof defVal === "undefined") throw new Error(compareTo + " has no associated fieldInfo in switch");
		for (const field in fields) if (field.startsWith("/")) {
			fields[this.types[field.slice(1)]] = fields[field];
			delete fields[field];
		}
		const caseDefault = typeof fields[compareTo] === "undefined";
		const fieldInfo = getFieldInfo(caseDefault ? defVal : fields[compareTo]);
		return tryDoc(() => this.write(value, buffer, offset, fieldInfo, rootNode), caseDefault ? "default" : compareTo);
	}
	function sizeOfSwitch(value, { compareTo, fields, compareToValue, default: defVal }, rootNode) {
		compareTo = compareToValue !== void 0 ? compareToValue : getField(compareTo, rootNode);
		if (typeof fields[compareTo] === "undefined" && typeof defVal === "undefined") throw new Error(compareTo + " has no associated fieldInfo in switch");
		for (const field in fields) if (field.startsWith("/")) {
			fields[this.types[field.slice(1)]] = fields[field];
			delete fields[field];
		}
		const caseDefault = typeof fields[compareTo] === "undefined";
		const fieldInfo = getFieldInfo(caseDefault ? defVal : fields[compareTo]);
		return tryDoc(() => this.sizeOf(value, fieldInfo, rootNode), caseDefault ? "default" : compareTo);
	}
	function readOption(buffer, offset, typeArgs, context) {
		if (buffer.length < offset + 1) throw new PartialReadError();
		if (buffer.readUInt8(offset++) !== 0) {
			const retval = this.read(buffer, offset, typeArgs, context);
			retval.size++;
			return retval;
		} else return { size: 1 };
	}
	function writeOption(value, buffer, offset, typeArgs, context) {
		if (value != null) {
			buffer.writeUInt8(1, offset++);
			offset = this.write(value, buffer, offset, typeArgs, context);
		} else buffer.writeUInt8(0, offset++);
		return offset;
	}
	function sizeOfOption(value, typeArgs, context) {
		return value == null ? 1 : this.sizeOf(value, typeArgs, context) + 1;
	}
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/protodef.js
var require_protodef$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { getFieldInfo, tryCatch } = require_utils$2();
	var reduce = require_lodash_reduce();
	var Validator = require_protodef_validator();
	function isFieldInfo(type) {
		return typeof type === "string" || Array.isArray(type) && typeof type[0] === "string" || type.type;
	}
	function findArgs(acc, v, k) {
		if (typeof v === "string" && v.charAt(0) === "$") acc.push({
			path: k,
			val: v.substr(1)
		});
		else if (Array.isArray(v) || typeof v === "object") acc = acc.concat(reduce(v, findArgs, []).map((v) => ({
			path: k + "." + v.path,
			val: v.val
		})));
		return acc;
	}
	function setField(path, val, into) {
		const c = path.split(".").reverse();
		while (c.length > 1) into = into[c.pop()];
		into[c.pop()] = val;
	}
	function extendType(functions, defaultTypeArgs) {
		const json = JSON.stringify(defaultTypeArgs);
		const argPos = reduce(defaultTypeArgs, findArgs, []);
		function produceArgs(typeArgs) {
			const args = JSON.parse(json);
			argPos.forEach((v) => {
				setField(v.path, typeArgs[v.val], args);
			});
			return args;
		}
		return [
			function read(buffer, offset, typeArgs, context) {
				return functions[0].call(this, buffer, offset, produceArgs(typeArgs), context);
			},
			function write(value, buffer, offset, typeArgs, context) {
				return functions[1].call(this, value, buffer, offset, produceArgs(typeArgs), context);
			},
			function sizeOf(value, typeArgs, context) {
				if (typeof functions[2] === "function") return functions[2].call(this, value, produceArgs(typeArgs), context);
				else return functions[2];
			}
		];
	}
	var ProtoDef = class {
		constructor(validation = true) {
			this.types = {};
			this.validator = validation ? new Validator() : null;
			this.addDefaultTypes();
		}
		addDefaultTypes() {
			this.addTypes(require_numeric());
			this.addTypes(require_utils$1());
			this.addTypes(require_structures());
			this.addTypes(require_conditional());
		}
		addProtocol(protocolData, path) {
			const self = this;
			function recursiveAddTypes(protocolData, path) {
				if (protocolData === void 0) return;
				if (protocolData.types) self.addTypes(protocolData.types);
				recursiveAddTypes(protocolData?.[path[0]], path.slice(1));
			}
			if (this.validator) this.validator.validateProtocol(protocolData);
			recursiveAddTypes(protocolData, path);
		}
		addType(name, functions, validate = true) {
			if (functions === "native") {
				if (this.validator) this.validator.addType(name);
				return;
			}
			if (isFieldInfo(functions)) {
				if (this.validator) {
					if (validate) this.validator.validateType(functions);
					this.validator.addType(name);
				}
				const { type, typeArgs } = getFieldInfo(functions);
				this.types[name] = typeArgs ? extendType(this.types[type], typeArgs) : this.types[type];
			} else {
				if (this.validator) if (functions[3]) this.validator.addType(name, functions[3]);
				else this.validator.addType(name);
				this.types[name] = functions;
			}
		}
		addTypes(types) {
			Object.keys(types).forEach((name) => this.addType(name, types[name], false));
			if (this.validator) Object.keys(types).forEach((name) => {
				if (isFieldInfo(types[name])) this.validator.validateType(types[name]);
			});
		}
		setVariable(key, val) {
			this.types[key] = val;
		}
		read(buffer, cursor, _fieldInfo, rootNodes) {
			const { type, typeArgs } = getFieldInfo(_fieldInfo);
			const typeFunctions = this.types[type];
			if (!typeFunctions) throw new Error("missing data type: " + type);
			return typeFunctions[0].call(this, buffer, cursor, typeArgs, rootNodes);
		}
		write(value, buffer, offset, _fieldInfo, rootNode) {
			const { type, typeArgs } = getFieldInfo(_fieldInfo);
			const typeFunctions = this.types[type];
			if (!typeFunctions) throw new Error("missing data type: " + type);
			return typeFunctions[1].call(this, value, buffer, offset, typeArgs, rootNode);
		}
		sizeOf(value, _fieldInfo, rootNode) {
			const { type, typeArgs } = getFieldInfo(_fieldInfo);
			const typeFunctions = this.types[type];
			if (!typeFunctions) throw new Error("missing data type: " + type);
			if (typeof typeFunctions[2] === "function") return typeFunctions[2].call(this, value, typeArgs, rootNode);
			else return typeFunctions[2];
		}
		createPacketBuffer(type, packet) {
			const length = tryCatch(() => this.sizeOf(packet, type, {}), (e) => {
				e.message = `SizeOf error for ${e.field} : ${e.message}`;
				throw e;
			});
			const buffer = Buffer.allocUnsafe(length);
			tryCatch(() => this.write(packet, buffer, 0, type, {}), (e) => {
				e.message = `Write error for ${e.field} : ${e.message}`;
				throw e;
			});
			return buffer;
		}
		parsePacketBuffer(type, buffer, offset = 0) {
			const { value, size } = tryCatch(() => this.read(buffer, offset, type, {}), (e) => {
				e.message = `Read error for ${e.field} : ${e.message}`;
				throw e;
			});
			return {
				data: value,
				metadata: { size },
				buffer: buffer.slice(0, size),
				fullBuffer: buffer
			};
		}
	};
	module.exports = ProtoDef;
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/ours/primordials.js
var require_primordials = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var AggregateError = class extends Error {
		constructor(errors) {
			if (!Array.isArray(errors)) throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
			let message = "";
			for (let i = 0; i < errors.length; i++) message += `    ${errors[i].stack}\n`;
			super(message);
			this.name = "AggregateError";
			this.errors = errors;
		}
	};
	module.exports = {
		AggregateError,
		ArrayIsArray(self) {
			return Array.isArray(self);
		},
		ArrayPrototypeIncludes(self, el) {
			return self.includes(el);
		},
		ArrayPrototypeIndexOf(self, el) {
			return self.indexOf(el);
		},
		ArrayPrototypeJoin(self, sep) {
			return self.join(sep);
		},
		ArrayPrototypeMap(self, fn) {
			return self.map(fn);
		},
		ArrayPrototypePop(self, el) {
			return self.pop(el);
		},
		ArrayPrototypePush(self, el) {
			return self.push(el);
		},
		ArrayPrototypeSlice(self, start, end) {
			return self.slice(start, end);
		},
		Error,
		FunctionPrototypeCall(fn, thisArgs, ...args) {
			return fn.call(thisArgs, ...args);
		},
		FunctionPrototypeSymbolHasInstance(self, instance) {
			return Function.prototype[Symbol.hasInstance].call(self, instance);
		},
		MathFloor: Math.floor,
		Number,
		NumberIsInteger: Number.isInteger,
		NumberIsNaN: Number.isNaN,
		NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
		NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
		NumberParseInt: Number.parseInt,
		ObjectDefineProperties(self, props) {
			return Object.defineProperties(self, props);
		},
		ObjectDefineProperty(self, name, prop) {
			return Object.defineProperty(self, name, prop);
		},
		ObjectGetOwnPropertyDescriptor(self, name) {
			return Object.getOwnPropertyDescriptor(self, name);
		},
		ObjectKeys(obj) {
			return Object.keys(obj);
		},
		ObjectSetPrototypeOf(target, proto) {
			return Object.setPrototypeOf(target, proto);
		},
		Promise,
		PromisePrototypeCatch(self, fn) {
			return self.catch(fn);
		},
		PromisePrototypeThen(self, thenFn, catchFn) {
			return self.then(thenFn, catchFn);
		},
		PromiseReject(err) {
			return Promise.reject(err);
		},
		PromiseResolve(val) {
			return Promise.resolve(val);
		},
		ReflectApply: Reflect.apply,
		RegExpPrototypeTest(self, value) {
			return self.test(value);
		},
		SafeSet: Set,
		String,
		StringPrototypeSlice(self, start, end) {
			return self.slice(start, end);
		},
		StringPrototypeToLowerCase(self) {
			return self.toLowerCase();
		},
		StringPrototypeToUpperCase(self) {
			return self.toUpperCase();
		},
		StringPrototypeTrim(self) {
			return self.trim();
		},
		Symbol,
		SymbolFor: Symbol.for,
		SymbolAsyncIterator: Symbol.asyncIterator,
		SymbolHasInstance: Symbol.hasInstance,
		SymbolIterator: Symbol.iterator,
		SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
		SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
		TypedArrayPrototypeSet(self, buf, len) {
			return self.set(buf, len);
		},
		Boolean,
		Uint8Array
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/ours/util/inspect.js
var require_inspect = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		format(format, ...args) {
			return format.replace(/%([sdifj])/g, function(...[_unused, type]) {
				const replacement = args.shift();
				if (type === "f") return replacement.toFixed(6);
				else if (type === "j") return JSON.stringify(replacement);
				else if (type === "s" && typeof replacement === "object") return `${replacement.constructor !== Object ? replacement.constructor.name : ""} {}`.trim();
				else return replacement.toString();
			});
		},
		inspect(value) {
			switch (typeof value) {
				case "string":
					if (value.includes("'")) {
						if (!value.includes("\"")) return `"${value}"`;
						else if (!value.includes("`") && !value.includes("${")) return `\`${value}\``;
					}
					return `'${value}'`;
				case "number":
					if (isNaN(value)) return "NaN";
					else if (Object.is(value, -0)) return String(value);
					return value;
				case "bigint": return `${String(value)}n`;
				case "boolean":
				case "undefined": return String(value);
				case "object": return "{}";
			}
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/ours/errors.js
var require_errors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { format, inspect } = require_inspect();
	var { AggregateError: CustomAggregateError } = require_primordials();
	var AggregateError = globalThis.AggregateError || CustomAggregateError;
	var kIsNodeError = Symbol("kIsNodeError");
	var kTypes = [
		"string",
		"function",
		"number",
		"object",
		"Function",
		"Object",
		"boolean",
		"bigint",
		"symbol"
	];
	var classRegExp = /^([A-Z][a-z0-9]*)+$/;
	var nodeInternalPrefix = "__node_internal_";
	var codes = {};
	function assert(value, message) {
		if (!value) throw new codes.ERR_INTERNAL_ASSERTION(message);
	}
	function addNumericalSeparator(val) {
		let res = "";
		let i = val.length;
		const start = val[0] === "-" ? 1 : 0;
		for (; i >= start + 4; i -= 3) res = `_${val.slice(i - 3, i)}${res}`;
		return `${val.slice(0, i)}${res}`;
	}
	function getMessage(key, msg, args) {
		if (typeof msg === "function") {
			assert(msg.length <= args.length, `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${msg.length}).`);
			return msg(...args);
		}
		const expectedLength = (msg.match(/%[dfijoOs]/g) || []).length;
		assert(expectedLength === args.length, `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${expectedLength}).`);
		if (args.length === 0) return msg;
		return format(msg, ...args);
	}
	function E(code, message, Base) {
		if (!Base) Base = Error;
		class NodeError extends Base {
			constructor(...args) {
				super(getMessage(code, message, args));
			}
			toString() {
				return `${this.name} [${code}]: ${this.message}`;
			}
		}
		Object.defineProperties(NodeError.prototype, {
			name: {
				value: Base.name,
				writable: true,
				enumerable: false,
				configurable: true
			},
			toString: {
				value() {
					return `${this.name} [${code}]: ${this.message}`;
				},
				writable: true,
				enumerable: false,
				configurable: true
			}
		});
		NodeError.prototype.code = code;
		NodeError.prototype[kIsNodeError] = true;
		codes[code] = NodeError;
	}
	function hideStackFrames(fn) {
		const hidden = nodeInternalPrefix + fn.name;
		Object.defineProperty(fn, "name", { value: hidden });
		return fn;
	}
	function aggregateTwoErrors(innerError, outerError) {
		if (innerError && outerError && innerError !== outerError) {
			if (Array.isArray(outerError.errors)) {
				outerError.errors.push(innerError);
				return outerError;
			}
			const err = new AggregateError([outerError, innerError], outerError.message);
			err.code = outerError.code;
			return err;
		}
		return innerError || outerError;
	}
	var AbortError = class extends Error {
		constructor(message = "The operation was aborted", options = void 0) {
			if (options !== void 0 && typeof options !== "object") throw new codes.ERR_INVALID_ARG_TYPE("options", "Object", options);
			super(message, options);
			this.code = "ABORT_ERR";
			this.name = "AbortError";
		}
	};
	E("ERR_ASSERTION", "%s", Error);
	E("ERR_INVALID_ARG_TYPE", (name, expected, actual) => {
		assert(typeof name === "string", "'name' must be a string");
		if (!Array.isArray(expected)) expected = [expected];
		let msg = "The ";
		if (name.endsWith(" argument")) msg += `${name} `;
		else msg += `"${name}" ${name.includes(".") ? "property" : "argument"} `;
		msg += "must be ";
		const types = [];
		const instances = [];
		const other = [];
		for (const value of expected) {
			assert(typeof value === "string", "All expected entries have to be of type string");
			if (kTypes.includes(value)) types.push(value.toLowerCase());
			else if (classRegExp.test(value)) instances.push(value);
			else {
				assert(value !== "object", "The value \"object\" should be written as \"Object\"");
				other.push(value);
			}
		}
		if (instances.length > 0) {
			const pos = types.indexOf("object");
			if (pos !== -1) {
				types.splice(types, pos, 1);
				instances.push("Object");
			}
		}
		if (types.length > 0) {
			switch (types.length) {
				case 1:
					msg += `of type ${types[0]}`;
					break;
				case 2:
					msg += `one of type ${types[0]} or ${types[1]}`;
					break;
				default: {
					const last = types.pop();
					msg += `one of type ${types.join(", ")}, or ${last}`;
				}
			}
			if (instances.length > 0 || other.length > 0) msg += " or ";
		}
		if (instances.length > 0) {
			switch (instances.length) {
				case 1:
					msg += `an instance of ${instances[0]}`;
					break;
				case 2:
					msg += `an instance of ${instances[0]} or ${instances[1]}`;
					break;
				default: {
					const last = instances.pop();
					msg += `an instance of ${instances.join(", ")}, or ${last}`;
				}
			}
			if (other.length > 0) msg += " or ";
		}
		switch (other.length) {
			case 0: break;
			case 1:
				if (other[0].toLowerCase() !== other[0]) msg += "an ";
				msg += `${other[0]}`;
				break;
			case 2:
				msg += `one of ${other[0]} or ${other[1]}`;
				break;
			default: {
				const last = other.pop();
				msg += `one of ${other.join(", ")}, or ${last}`;
			}
		}
		if (actual == null) msg += `. Received ${actual}`;
		else if (typeof actual === "function" && actual.name) msg += `. Received function ${actual.name}`;
		else if (typeof actual === "object") {
			var _actual$constructor;
			if ((_actual$constructor = actual.constructor) !== null && _actual$constructor !== void 0 && _actual$constructor.name) msg += `. Received an instance of ${actual.constructor.name}`;
			else {
				const inspected = inspect(actual, { depth: -1 });
				msg += `. Received ${inspected}`;
			}
		} else {
			let inspected = inspect(actual, { colors: false });
			if (inspected.length > 25) inspected = `${inspected.slice(0, 25)}...`;
			msg += `. Received type ${typeof actual} (${inspected})`;
		}
		return msg;
	}, TypeError);
	E("ERR_INVALID_ARG_VALUE", (name, value, reason = "is invalid") => {
		let inspected = inspect(value);
		if (inspected.length > 128) inspected = inspected.slice(0, 128) + "...";
		return `The ${name.includes(".") ? "property" : "argument"} '${name}' ${reason}. Received ${inspected}`;
	}, TypeError);
	E("ERR_INVALID_RETURN_VALUE", (input, name, value) => {
		var _value$constructor;
		return `Expected ${input} to be returned from the "${name}" function but got ${value !== null && value !== void 0 && (_value$constructor = value.constructor) !== null && _value$constructor !== void 0 && _value$constructor.name ? `instance of ${value.constructor.name}` : `type ${typeof value}`}.`;
	}, TypeError);
	E("ERR_MISSING_ARGS", (...args) => {
		assert(args.length > 0, "At least one arg needs to be specified");
		let msg;
		const len = args.length;
		args = (Array.isArray(args) ? args : [args]).map((a) => `"${a}"`).join(" or ");
		switch (len) {
			case 1:
				msg += `The ${args[0]} argument`;
				break;
			case 2:
				msg += `The ${args[0]} and ${args[1]} arguments`;
				break;
			default:
				{
					const last = args.pop();
					msg += `The ${args.join(", ")}, and ${last} arguments`;
				}
				break;
		}
		return `${msg} must be specified`;
	}, TypeError);
	E("ERR_OUT_OF_RANGE", (str, range, input) => {
		assert(range, "Missing \"range\" argument");
		let received;
		if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
		else if (typeof input === "bigint") {
			received = String(input);
			const limit = BigInt(2) ** BigInt(32);
			if (input > limit || input < -limit) received = addNumericalSeparator(received);
			received += "n";
		} else received = inspect(input);
		return `The value of "${str}" is out of range. It must be ${range}. Received ${received}`;
	}, RangeError);
	E("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
	E("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
	E("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
	E("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
	E("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
	E("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
	E("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
	E("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
	E("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
	E("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
	E("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
	module.exports = {
		AbortError,
		aggregateTwoErrors: hideStackFrames(aggregateTwoErrors),
		hideStackFrames,
		codes
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/ours/util.js
var require_util = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var bufferModule$1 = __require("buffer");
	var { format, inspect } = require_inspect();
	var { codes: { ERR_INVALID_ARG_TYPE } } = require_errors();
	var { kResistStopPropagation, AggregateError, SymbolDispose } = require_primordials();
	var AbortSignal = globalThis.AbortSignal || (init_abort_controller(), __toCommonJS(abort_controller_exports)).AbortSignal;
	var AbortController = globalThis.AbortController || (init_abort_controller(), __toCommonJS(abort_controller_exports)).AbortController;
	var AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
	var Blob = globalThis.Blob || bufferModule$1.Blob;
	var isBlob = typeof Blob !== "undefined" ? function isBlob(b) {
		return b instanceof Blob;
	} : function isBlob(b) {
		return false;
	};
	var validateAbortSignal = (signal, name) => {
		if (signal !== void 0 && (signal === null || typeof signal !== "object" || !("aborted" in signal))) throw new ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
	};
	var validateFunction = (value, name) => {
		if (typeof value !== "function") throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
	};
	module.exports = {
		AggregateError,
		kEmptyObject: Object.freeze({}),
		once(callback) {
			let called = false;
			return function(...args) {
				if (called) return;
				called = true;
				callback.apply(this, args);
			};
		},
		createDeferredPromise: function() {
			let resolve;
			let reject;
			return {
				promise: new Promise((res, rej) => {
					resolve = res;
					reject = rej;
				}),
				resolve,
				reject
			};
		},
		promisify(fn) {
			return new Promise((resolve, reject) => {
				fn((err, ...args) => {
					if (err) return reject(err);
					return resolve(...args);
				});
			});
		},
		debuglog() {
			return function() {};
		},
		format,
		inspect,
		types: {
			isAsyncFunction(fn) {
				return fn instanceof AsyncFunction;
			},
			isArrayBufferView(arr) {
				return ArrayBuffer.isView(arr);
			}
		},
		isBlob,
		deprecate(fn, message) {
			return fn;
		},
		addAbortListener: __require("events").addAbortListener || function addAbortListener(signal, listener) {
			if (signal === void 0) throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", signal);
			validateAbortSignal(signal, "signal");
			validateFunction(listener, "listener");
			let removeEventListener;
			if (signal.aborted) queueMicrotask(() => listener());
			else {
				signal.addEventListener("abort", listener, {
					__proto__: null,
					once: true,
					[kResistStopPropagation]: true
				});
				removeEventListener = () => {
					signal.removeEventListener("abort", listener);
				};
			}
			return {
				__proto__: null,
				[SymbolDispose]() {
					var _removeEventListener;
					(_removeEventListener = removeEventListener) === null || _removeEventListener === void 0 || _removeEventListener();
				}
			};
		},
		AbortSignalAny: AbortSignal.any || function AbortSignalAny(signals) {
			if (signals.length === 1) return signals[0];
			const ac = new AbortController();
			const abort = () => ac.abort();
			signals.forEach((signal) => {
				validateAbortSignal(signal, "signals");
				signal.addEventListener("abort", abort, { once: true });
			});
			ac.signal.addEventListener("abort", () => {
				signals.forEach((signal) => signal.removeEventListener("abort", abort));
			}, { once: true });
			return ac.signal;
		}
	};
	module.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/validators.js
var require_validators = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { ArrayIsArray, ArrayPrototypeIncludes, ArrayPrototypeJoin, ArrayPrototypeMap, NumberIsInteger, NumberIsNaN, NumberMAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER, NumberParseInt, ObjectPrototypeHasOwnProperty, RegExpPrototypeExec, String, StringPrototypeToUpperCase, StringPrototypeTrim } = require_primordials();
	var { hideStackFrames, codes: { ERR_SOCKET_BAD_PORT, ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE, ERR_OUT_OF_RANGE, ERR_UNKNOWN_SIGNAL } } = require_errors();
	var { normalizeEncoding } = require_util();
	var { isAsyncFunction, isArrayBufferView } = require_util().types;
	var signals = {};
	/**
	* @param {*} value
	* @returns {boolean}
	*/
	function isInt32(value) {
		return value === (value | 0);
	}
	/**
	* @param {*} value
	* @returns {boolean}
	*/
	function isUint32(value) {
		return value === value >>> 0;
	}
	var octalReg = /^[0-7]+$/;
	var modeDesc = "must be a 32-bit unsigned integer or an octal string";
	/**
	* Parse and validate values that will be converted into mode_t (the S_*
	* constants). Only valid numbers and octal strings are allowed. They could be
	* converted to 32-bit unsigned integers or non-negative signed integers in the
	* C++ land, but any value higher than 0o777 will result in platform-specific
	* behaviors.
	* @param {*} value Values to be validated
	* @param {string} name Name of the argument
	* @param {number} [def] If specified, will be returned for invalid values
	* @returns {number}
	*/
	function parseFileMode(value, name, def) {
		if (typeof value === "undefined") value = def;
		if (typeof value === "string") {
			if (RegExpPrototypeExec(octalReg, value) === null) throw new ERR_INVALID_ARG_VALUE(name, value, modeDesc);
			value = NumberParseInt(value, 8);
		}
		validateUint32(value, name);
		return value;
	}
	/**
	* @callback validateInteger
	* @param {*} value
	* @param {string} name
	* @param {number} [min]
	* @param {number} [max]
	* @returns {asserts value is number}
	*/
	/** @type {validateInteger} */
	var validateInteger = hideStackFrames((value, name, min = NumberMIN_SAFE_INTEGER, max = NumberMAX_SAFE_INTEGER) => {
		if (typeof value !== "number") throw new ERR_INVALID_ARG_TYPE(name, "number", value);
		if (!NumberIsInteger(value)) throw new ERR_OUT_OF_RANGE(name, "an integer", value);
		if (value < min || value > max) throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
	});
	/**
	* @callback validateInt32
	* @param {*} value
	* @param {string} name
	* @param {number} [min]
	* @param {number} [max]
	* @returns {asserts value is number}
	*/
	/** @type {validateInt32} */
	var validateInt32 = hideStackFrames((value, name, min = -2147483648, max = 2147483647) => {
		if (typeof value !== "number") throw new ERR_INVALID_ARG_TYPE(name, "number", value);
		if (!NumberIsInteger(value)) throw new ERR_OUT_OF_RANGE(name, "an integer", value);
		if (value < min || value > max) throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
	});
	/**
	* @callback validateUint32
	* @param {*} value
	* @param {string} name
	* @param {number|boolean} [positive=false]
	* @returns {asserts value is number}
	*/
	/** @type {validateUint32} */
	var validateUint32 = hideStackFrames((value, name, positive = false) => {
		if (typeof value !== "number") throw new ERR_INVALID_ARG_TYPE(name, "number", value);
		if (!NumberIsInteger(value)) throw new ERR_OUT_OF_RANGE(name, "an integer", value);
		const min = positive ? 1 : 0;
		const max = 4294967295;
		if (value < min || value > max) throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
	});
	/**
	* @callback validateString
	* @param {*} value
	* @param {string} name
	* @returns {asserts value is string}
	*/
	/** @type {validateString} */
	function validateString(value, name) {
		if (typeof value !== "string") throw new ERR_INVALID_ARG_TYPE(name, "string", value);
	}
	/**
	* @callback validateNumber
	* @param {*} value
	* @param {string} name
	* @param {number} [min]
	* @param {number} [max]
	* @returns {asserts value is number}
	*/
	/** @type {validateNumber} */
	function validateNumber(value, name, min = void 0, max) {
		if (typeof value !== "number") throw new ERR_INVALID_ARG_TYPE(name, "number", value);
		if (min != null && value < min || max != null && value > max || (min != null || max != null) && NumberIsNaN(value)) throw new ERR_OUT_OF_RANGE(name, `${min != null ? `>= ${min}` : ""}${min != null && max != null ? " && " : ""}${max != null ? `<= ${max}` : ""}`, value);
	}
	/**
	* @callback validateOneOf
	* @template T
	* @param {T} value
	* @param {string} name
	* @param {T[]} oneOf
	*/
	/** @type {validateOneOf} */
	var validateOneOf = hideStackFrames((value, name, oneOf) => {
		if (!ArrayPrototypeIncludes(oneOf, value)) throw new ERR_INVALID_ARG_VALUE(name, value, "must be one of: " + ArrayPrototypeJoin(ArrayPrototypeMap(oneOf, (v) => typeof v === "string" ? `'${v}'` : String(v)), ", "));
	});
	/**
	* @callback validateBoolean
	* @param {*} value
	* @param {string} name
	* @returns {asserts value is boolean}
	*/
	/** @type {validateBoolean} */
	function validateBoolean(value, name) {
		if (typeof value !== "boolean") throw new ERR_INVALID_ARG_TYPE(name, "boolean", value);
	}
	/**
	* @param {any} options
	* @param {string} key
	* @param {boolean} defaultValue
	* @returns {boolean}
	*/
	function getOwnPropertyValueOrDefault(options, key, defaultValue) {
		return options == null || !ObjectPrototypeHasOwnProperty(options, key) ? defaultValue : options[key];
	}
	/**
	* @callback validateObject
	* @param {*} value
	* @param {string} name
	* @param {{
	*   allowArray?: boolean,
	*   allowFunction?: boolean,
	*   nullable?: boolean
	* }} [options]
	*/
	/** @type {validateObject} */
	var validateObject = hideStackFrames((value, name, options = null) => {
		const allowArray = getOwnPropertyValueOrDefault(options, "allowArray", false);
		const allowFunction = getOwnPropertyValueOrDefault(options, "allowFunction", false);
		if (!getOwnPropertyValueOrDefault(options, "nullable", false) && value === null || !allowArray && ArrayIsArray(value) || typeof value !== "object" && (!allowFunction || typeof value !== "function")) throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
	});
	/**
	* @callback validateDictionary - We are using the Web IDL Standard definition
	*                                of "dictionary" here, which means any value
	*                                whose Type is either Undefined, Null, or
	*                                Object (which includes functions).
	* @param {*} value
	* @param {string} name
	* @see https://webidl.spec.whatwg.org/#es-dictionary
	* @see https://tc39.es/ecma262/#table-typeof-operator-results
	*/
	/** @type {validateDictionary} */
	var validateDictionary = hideStackFrames((value, name) => {
		if (value != null && typeof value !== "object" && typeof value !== "function") throw new ERR_INVALID_ARG_TYPE(name, "a dictionary", value);
	});
	/**
	* @callback validateArray
	* @param {*} value
	* @param {string} name
	* @param {number} [minLength]
	* @returns {asserts value is any[]}
	*/
	/** @type {validateArray} */
	var validateArray = hideStackFrames((value, name, minLength = 0) => {
		if (!ArrayIsArray(value)) throw new ERR_INVALID_ARG_TYPE(name, "Array", value);
		if (value.length < minLength) throw new ERR_INVALID_ARG_VALUE(name, value, `must be longer than ${minLength}`);
	});
	/**
	* @callback validateStringArray
	* @param {*} value
	* @param {string} name
	* @returns {asserts value is string[]}
	*/
	/** @type {validateStringArray} */
	function validateStringArray(value, name) {
		validateArray(value, name);
		for (let i = 0; i < value.length; i++) validateString(value[i], `${name}[${i}]`);
	}
	/**
	* @callback validateBooleanArray
	* @param {*} value
	* @param {string} name
	* @returns {asserts value is boolean[]}
	*/
	/** @type {validateBooleanArray} */
	function validateBooleanArray(value, name) {
		validateArray(value, name);
		for (let i = 0; i < value.length; i++) validateBoolean(value[i], `${name}[${i}]`);
	}
	/**
	* @callback validateAbortSignalArray
	* @param {*} value
	* @param {string} name
	* @returns {asserts value is AbortSignal[]}
	*/
	/** @type {validateAbortSignalArray} */
	function validateAbortSignalArray(value, name) {
		validateArray(value, name);
		for (let i = 0; i < value.length; i++) {
			const signal = value[i];
			const indexedName = `${name}[${i}]`;
			if (signal == null) throw new ERR_INVALID_ARG_TYPE(indexedName, "AbortSignal", signal);
			validateAbortSignal(signal, indexedName);
		}
	}
	/**
	* @param {*} signal
	* @param {string} [name='signal']
	* @returns {asserts signal is keyof signals}
	*/
	function validateSignalName(signal, name = "signal") {
		validateString(signal, name);
		if (signals[signal] === void 0) {
			if (signals[StringPrototypeToUpperCase(signal)] !== void 0) throw new ERR_UNKNOWN_SIGNAL(signal + " (signals must use all capital letters)");
			throw new ERR_UNKNOWN_SIGNAL(signal);
		}
	}
	/**
	* @callback validateBuffer
	* @param {*} buffer
	* @param {string} [name='buffer']
	* @returns {asserts buffer is ArrayBufferView}
	*/
	/** @type {validateBuffer} */
	var validateBuffer = hideStackFrames((buffer, name = "buffer") => {
		if (!isArrayBufferView(buffer)) throw new ERR_INVALID_ARG_TYPE(name, [
			"Buffer",
			"TypedArray",
			"DataView"
		], buffer);
	});
	/**
	* @param {string} data
	* @param {string} encoding
	*/
	function validateEncoding(data, encoding) {
		const normalizedEncoding = normalizeEncoding(encoding);
		const length = data.length;
		if (normalizedEncoding === "hex" && length % 2 !== 0) throw new ERR_INVALID_ARG_VALUE("encoding", encoding, `is invalid for data of length ${length}`);
	}
	/**
	* Check that the port number is not NaN when coerced to a number,
	* is an integer and that it falls within the legal range of port numbers.
	* @param {*} port
	* @param {string} [name='Port']
	* @param {boolean} [allowZero=true]
	* @returns {number}
	*/
	function validatePort(port, name = "Port", allowZero = true) {
		if (typeof port !== "number" && typeof port !== "string" || typeof port === "string" && StringPrototypeTrim(port).length === 0 || +port !== +port >>> 0 || port > 65535 || port === 0 && !allowZero) throw new ERR_SOCKET_BAD_PORT(name, port, allowZero);
		return port | 0;
	}
	/**
	* @callback validateAbortSignal
	* @param {*} signal
	* @param {string} name
	*/
	/** @type {validateAbortSignal} */
	var validateAbortSignal = hideStackFrames((signal, name) => {
		if (signal !== void 0 && (signal === null || typeof signal !== "object" || !("aborted" in signal))) throw new ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
	});
	/**
	* @callback validateFunction
	* @param {*} value
	* @param {string} name
	* @returns {asserts value is Function}
	*/
	/** @type {validateFunction} */
	var validateFunction = hideStackFrames((value, name) => {
		if (typeof value !== "function") throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
	});
	/**
	* @callback validatePlainFunction
	* @param {*} value
	* @param {string} name
	* @returns {asserts value is Function}
	*/
	/** @type {validatePlainFunction} */
	var validatePlainFunction = hideStackFrames((value, name) => {
		if (typeof value !== "function" || isAsyncFunction(value)) throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
	});
	/**
	* @callback validateUndefined
	* @param {*} value
	* @param {string} name
	* @returns {asserts value is undefined}
	*/
	/** @type {validateUndefined} */
	var validateUndefined = hideStackFrames((value, name) => {
		if (value !== void 0) throw new ERR_INVALID_ARG_TYPE(name, "undefined", value);
	});
	/**
	* @template T
	* @param {T} value
	* @param {string} name
	* @param {T[]} union
	*/
	function validateUnion(value, name, union) {
		if (!ArrayPrototypeIncludes(union, value)) throw new ERR_INVALID_ARG_TYPE(name, `('${ArrayPrototypeJoin(union, "|")}')`, value);
	}
	var linkValueRegExp = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
	/**
	* @param {any} value
	* @param {string} name
	*/
	function validateLinkHeaderFormat(value, name) {
		if (typeof value === "undefined" || !RegExpPrototypeExec(linkValueRegExp, value)) throw new ERR_INVALID_ARG_VALUE(name, value, "must be an array or string of format \"</styles.css>; rel=preload; as=style\"");
	}
	/**
	* @param {any} hints
	* @return {string}
	*/
	function validateLinkHeaderValue(hints) {
		if (typeof hints === "string") {
			validateLinkHeaderFormat(hints, "hints");
			return hints;
		} else if (ArrayIsArray(hints)) {
			const hintsLength = hints.length;
			let result = "";
			if (hintsLength === 0) return result;
			for (let i = 0; i < hintsLength; i++) {
				const link = hints[i];
				validateLinkHeaderFormat(link, "hints");
				result += link;
				if (i !== hintsLength - 1) result += ", ";
			}
			return result;
		}
		throw new ERR_INVALID_ARG_VALUE("hints", hints, "must be an array or string of format \"</styles.css>; rel=preload; as=style\"");
	}
	module.exports = {
		isInt32,
		isUint32,
		parseFileMode,
		validateArray,
		validateStringArray,
		validateBooleanArray,
		validateAbortSignalArray,
		validateBoolean,
		validateBuffer,
		validateDictionary,
		validateEncoding,
		validateFunction,
		validateInt32,
		validateInteger,
		validateNumber,
		validateObject,
		validateOneOf,
		validatePlainFunction,
		validatePort,
		validateSignalName,
		validateString,
		validateUint32,
		validateUndefined,
		validateUnion,
		validateAbortSignal,
		validateLinkHeaderValue
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { SymbolAsyncIterator, SymbolIterator, SymbolFor } = require_primordials();
	var kIsDestroyed = SymbolFor("nodejs.stream.destroyed");
	var kIsErrored = SymbolFor("nodejs.stream.errored");
	var kIsReadable = SymbolFor("nodejs.stream.readable");
	var kIsWritable = SymbolFor("nodejs.stream.writable");
	var kIsDisturbed = SymbolFor("nodejs.stream.disturbed");
	var kIsClosedPromise = SymbolFor("nodejs.webstream.isClosedPromise");
	var kControllerErrorFunction = SymbolFor("nodejs.webstream.controllerErrorFunction");
	function isReadableNodeStream(obj, strict = false) {
		var _obj$_readableState;
		return !!(obj && typeof obj.pipe === "function" && typeof obj.on === "function" && (!strict || typeof obj.pause === "function" && typeof obj.resume === "function") && (!obj._writableState || ((_obj$_readableState = obj._readableState) === null || _obj$_readableState === void 0 ? void 0 : _obj$_readableState.readable) !== false) && (!obj._writableState || obj._readableState));
	}
	function isWritableNodeStream(obj) {
		var _obj$_writableState;
		return !!(obj && typeof obj.write === "function" && typeof obj.on === "function" && (!obj._readableState || ((_obj$_writableState = obj._writableState) === null || _obj$_writableState === void 0 ? void 0 : _obj$_writableState.writable) !== false));
	}
	function isDuplexNodeStream(obj) {
		return !!(obj && typeof obj.pipe === "function" && obj._readableState && typeof obj.on === "function" && typeof obj.write === "function");
	}
	function isNodeStream(obj) {
		return obj && (obj._readableState || obj._writableState || typeof obj.write === "function" && typeof obj.on === "function" || typeof obj.pipe === "function" && typeof obj.on === "function");
	}
	function isReadableStream(obj) {
		return !!(obj && !isNodeStream(obj) && typeof obj.pipeThrough === "function" && typeof obj.getReader === "function" && typeof obj.cancel === "function");
	}
	function isWritableStream(obj) {
		return !!(obj && !isNodeStream(obj) && typeof obj.getWriter === "function" && typeof obj.abort === "function");
	}
	function isTransformStream(obj) {
		return !!(obj && !isNodeStream(obj) && typeof obj.readable === "object" && typeof obj.writable === "object");
	}
	function isWebStream(obj) {
		return isReadableStream(obj) || isWritableStream(obj) || isTransformStream(obj);
	}
	function isIterable(obj, isAsync) {
		if (obj == null) return false;
		if (isAsync === true) return typeof obj[SymbolAsyncIterator] === "function";
		if (isAsync === false) return typeof obj[SymbolIterator] === "function";
		return typeof obj[SymbolAsyncIterator] === "function" || typeof obj[SymbolIterator] === "function";
	}
	function isDestroyed(stream) {
		if (!isNodeStream(stream)) return null;
		const wState = stream._writableState;
		const rState = stream._readableState;
		const state = wState || rState;
		return !!(stream.destroyed || stream[kIsDestroyed] || state !== null && state !== void 0 && state.destroyed);
	}
	function isWritableEnded(stream) {
		if (!isWritableNodeStream(stream)) return null;
		if (stream.writableEnded === true) return true;
		const wState = stream._writableState;
		if (wState !== null && wState !== void 0 && wState.errored) return false;
		if (typeof (wState === null || wState === void 0 ? void 0 : wState.ended) !== "boolean") return null;
		return wState.ended;
	}
	function isWritableFinished(stream, strict) {
		if (!isWritableNodeStream(stream)) return null;
		if (stream.writableFinished === true) return true;
		const wState = stream._writableState;
		if (wState !== null && wState !== void 0 && wState.errored) return false;
		if (typeof (wState === null || wState === void 0 ? void 0 : wState.finished) !== "boolean") return null;
		return !!(wState.finished || strict === false && wState.ended === true && wState.length === 0);
	}
	function isReadableEnded(stream) {
		if (!isReadableNodeStream(stream)) return null;
		if (stream.readableEnded === true) return true;
		const rState = stream._readableState;
		if (!rState || rState.errored) return false;
		if (typeof (rState === null || rState === void 0 ? void 0 : rState.ended) !== "boolean") return null;
		return rState.ended;
	}
	function isReadableFinished(stream, strict) {
		if (!isReadableNodeStream(stream)) return null;
		const rState = stream._readableState;
		if (rState !== null && rState !== void 0 && rState.errored) return false;
		if (typeof (rState === null || rState === void 0 ? void 0 : rState.endEmitted) !== "boolean") return null;
		return !!(rState.endEmitted || strict === false && rState.ended === true && rState.length === 0);
	}
	function isReadable(stream) {
		if (stream && stream[kIsReadable] != null) return stream[kIsReadable];
		if (typeof (stream === null || stream === void 0 ? void 0 : stream.readable) !== "boolean") return null;
		if (isDestroyed(stream)) return false;
		return isReadableNodeStream(stream) && stream.readable && !isReadableFinished(stream);
	}
	function isWritable(stream) {
		if (stream && stream[kIsWritable] != null) return stream[kIsWritable];
		if (typeof (stream === null || stream === void 0 ? void 0 : stream.writable) !== "boolean") return null;
		if (isDestroyed(stream)) return false;
		return isWritableNodeStream(stream) && stream.writable && !isWritableEnded(stream);
	}
	function isFinished(stream, opts) {
		if (!isNodeStream(stream)) return null;
		if (isDestroyed(stream)) return true;
		if ((opts === null || opts === void 0 ? void 0 : opts.readable) !== false && isReadable(stream)) return false;
		if ((opts === null || opts === void 0 ? void 0 : opts.writable) !== false && isWritable(stream)) return false;
		return true;
	}
	function isWritableErrored(stream) {
		var _stream$_writableStat, _stream$_writableStat2;
		if (!isNodeStream(stream)) return null;
		if (stream.writableErrored) return stream.writableErrored;
		return (_stream$_writableStat = (_stream$_writableStat2 = stream._writableState) === null || _stream$_writableStat2 === void 0 ? void 0 : _stream$_writableStat2.errored) !== null && _stream$_writableStat !== void 0 ? _stream$_writableStat : null;
	}
	function isReadableErrored(stream) {
		var _stream$_readableStat, _stream$_readableStat2;
		if (!isNodeStream(stream)) return null;
		if (stream.readableErrored) return stream.readableErrored;
		return (_stream$_readableStat = (_stream$_readableStat2 = stream._readableState) === null || _stream$_readableStat2 === void 0 ? void 0 : _stream$_readableStat2.errored) !== null && _stream$_readableStat !== void 0 ? _stream$_readableStat : null;
	}
	function isClosed(stream) {
		if (!isNodeStream(stream)) return null;
		if (typeof stream.closed === "boolean") return stream.closed;
		const wState = stream._writableState;
		const rState = stream._readableState;
		if (typeof (wState === null || wState === void 0 ? void 0 : wState.closed) === "boolean" || typeof (rState === null || rState === void 0 ? void 0 : rState.closed) === "boolean") return (wState === null || wState === void 0 ? void 0 : wState.closed) || (rState === null || rState === void 0 ? void 0 : rState.closed);
		if (typeof stream._closed === "boolean" && isOutgoingMessage(stream)) return stream._closed;
		return null;
	}
	function isOutgoingMessage(stream) {
		return typeof stream._closed === "boolean" && typeof stream._defaultKeepAlive === "boolean" && typeof stream._removedConnection === "boolean" && typeof stream._removedContLen === "boolean";
	}
	function isServerResponse(stream) {
		return typeof stream._sent100 === "boolean" && isOutgoingMessage(stream);
	}
	function isServerRequest(stream) {
		var _stream$req;
		return typeof stream._consuming === "boolean" && typeof stream._dumped === "boolean" && ((_stream$req = stream.req) === null || _stream$req === void 0 ? void 0 : _stream$req.upgradeOrConnect) === void 0;
	}
	function willEmitClose(stream) {
		if (!isNodeStream(stream)) return null;
		const wState = stream._writableState;
		const rState = stream._readableState;
		const state = wState || rState;
		return !state && isServerResponse(stream) || !!(state && state.autoDestroy && state.emitClose && state.closed === false);
	}
	function isDisturbed(stream) {
		var _stream$kIsDisturbed;
		return !!(stream && ((_stream$kIsDisturbed = stream[kIsDisturbed]) !== null && _stream$kIsDisturbed !== void 0 ? _stream$kIsDisturbed : stream.readableDidRead || stream.readableAborted));
	}
	function isErrored(stream) {
		var _ref, _ref2, _ref3, _ref4, _ref5, _stream$kIsErrored, _stream$_readableStat3, _stream$_writableStat3, _stream$_readableStat4, _stream$_writableStat4;
		return !!(stream && ((_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_stream$kIsErrored = stream[kIsErrored]) !== null && _stream$kIsErrored !== void 0 ? _stream$kIsErrored : stream.readableErrored) !== null && _ref5 !== void 0 ? _ref5 : stream.writableErrored) !== null && _ref4 !== void 0 ? _ref4 : (_stream$_readableStat3 = stream._readableState) === null || _stream$_readableStat3 === void 0 ? void 0 : _stream$_readableStat3.errorEmitted) !== null && _ref3 !== void 0 ? _ref3 : (_stream$_writableStat3 = stream._writableState) === null || _stream$_writableStat3 === void 0 ? void 0 : _stream$_writableStat3.errorEmitted) !== null && _ref2 !== void 0 ? _ref2 : (_stream$_readableStat4 = stream._readableState) === null || _stream$_readableStat4 === void 0 ? void 0 : _stream$_readableStat4.errored) !== null && _ref !== void 0 ? _ref : (_stream$_writableStat4 = stream._writableState) === null || _stream$_writableStat4 === void 0 ? void 0 : _stream$_writableStat4.errored));
	}
	module.exports = {
		isDestroyed,
		kIsDestroyed,
		isDisturbed,
		kIsDisturbed,
		isErrored,
		kIsErrored,
		isReadable,
		kIsReadable,
		kIsClosedPromise,
		kControllerErrorFunction,
		kIsWritable,
		isClosed,
		isDuplexNodeStream,
		isFinished,
		isIterable,
		isReadableNodeStream,
		isReadableStream,
		isReadableEnded,
		isReadableFinished,
		isReadableErrored,
		isNodeStream,
		isWebStream,
		isWritable,
		isWritableNodeStream,
		isWritableStream,
		isWritableEnded,
		isWritableFinished,
		isWritableErrored,
		isServerRequest,
		isServerResponse,
		willEmitClose,
		isTransformStream
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var process$7 = __require("node:process");
	var { AbortError, codes } = require_errors();
	var { ERR_INVALID_ARG_TYPE, ERR_STREAM_PREMATURE_CLOSE } = codes;
	var { kEmptyObject, once } = require_util();
	var { validateAbortSignal, validateFunction, validateObject, validateBoolean } = require_validators();
	var { Promise, PromisePrototypeThen, SymbolDispose } = require_primordials();
	var { isClosed, isReadable, isReadableNodeStream, isReadableStream, isReadableFinished, isReadableErrored, isWritable, isWritableNodeStream, isWritableStream, isWritableFinished, isWritableErrored, isNodeStream, willEmitClose: _willEmitClose, kIsClosedPromise } = require_utils();
	var addAbortListener;
	function isRequest(stream) {
		return stream.setHeader && typeof stream.abort === "function";
	}
	var nop = () => {};
	function eos(stream, options, callback) {
		var _options$readable, _options$writable;
		if (arguments.length === 2) {
			callback = options;
			options = kEmptyObject;
		} else if (options == null) options = kEmptyObject;
		else validateObject(options, "options");
		validateFunction(callback, "callback");
		validateAbortSignal(options.signal, "options.signal");
		callback = once(callback);
		if (isReadableStream(stream) || isWritableStream(stream)) return eosWeb(stream, options, callback);
		if (!isNodeStream(stream)) throw new ERR_INVALID_ARG_TYPE("stream", [
			"ReadableStream",
			"WritableStream",
			"Stream"
		], stream);
		const readable = (_options$readable = options.readable) !== null && _options$readable !== void 0 ? _options$readable : isReadableNodeStream(stream);
		const writable = (_options$writable = options.writable) !== null && _options$writable !== void 0 ? _options$writable : isWritableNodeStream(stream);
		const wState = stream._writableState;
		const rState = stream._readableState;
		const onlegacyfinish = () => {
			if (!stream.writable) onfinish();
		};
		let willEmitClose = _willEmitClose(stream) && isReadableNodeStream(stream) === readable && isWritableNodeStream(stream) === writable;
		let writableFinished = isWritableFinished(stream, false);
		const onfinish = () => {
			writableFinished = true;
			if (stream.destroyed) willEmitClose = false;
			if (willEmitClose && (!stream.readable || readable)) return;
			if (!readable || readableFinished) callback.call(stream);
		};
		let readableFinished = isReadableFinished(stream, false);
		const onend = () => {
			readableFinished = true;
			if (stream.destroyed) willEmitClose = false;
			if (willEmitClose && (!stream.writable || writable)) return;
			if (!writable || writableFinished) callback.call(stream);
		};
		const onerror = (err) => {
			callback.call(stream, err);
		};
		let closed = isClosed(stream);
		const onclose = () => {
			closed = true;
			const errored = isWritableErrored(stream) || isReadableErrored(stream);
			if (errored && typeof errored !== "boolean") return callback.call(stream, errored);
			if (readable && !readableFinished && isReadableNodeStream(stream, true)) {
				if (!isReadableFinished(stream, false)) return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
			}
			if (writable && !writableFinished) {
				if (!isWritableFinished(stream, false)) return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
			}
			callback.call(stream);
		};
		const onclosed = () => {
			closed = true;
			const errored = isWritableErrored(stream) || isReadableErrored(stream);
			if (errored && typeof errored !== "boolean") return callback.call(stream, errored);
			callback.call(stream);
		};
		const onrequest = () => {
			stream.req.on("finish", onfinish);
		};
		if (isRequest(stream)) {
			stream.on("complete", onfinish);
			if (!willEmitClose) stream.on("abort", onclose);
			if (stream.req) onrequest();
			else stream.on("request", onrequest);
		} else if (writable && !wState) {
			stream.on("end", onlegacyfinish);
			stream.on("close", onlegacyfinish);
		}
		if (!willEmitClose && typeof stream.aborted === "boolean") stream.on("aborted", onclose);
		stream.on("end", onend);
		stream.on("finish", onfinish);
		if (options.error !== false) stream.on("error", onerror);
		stream.on("close", onclose);
		if (closed) process$7.nextTick(onclose);
		else if (wState !== null && wState !== void 0 && wState.errorEmitted || rState !== null && rState !== void 0 && rState.errorEmitted) {
			if (!willEmitClose) process$7.nextTick(onclosed);
		} else if (!readable && (!willEmitClose || isReadable(stream)) && (writableFinished || isWritable(stream) === false)) process$7.nextTick(onclosed);
		else if (!writable && (!willEmitClose || isWritable(stream)) && (readableFinished || isReadable(stream) === false)) process$7.nextTick(onclosed);
		else if (rState && stream.req && stream.aborted) process$7.nextTick(onclosed);
		const cleanup = () => {
			callback = nop;
			stream.removeListener("aborted", onclose);
			stream.removeListener("complete", onfinish);
			stream.removeListener("abort", onclose);
			stream.removeListener("request", onrequest);
			if (stream.req) stream.req.removeListener("finish", onfinish);
			stream.removeListener("end", onlegacyfinish);
			stream.removeListener("close", onlegacyfinish);
			stream.removeListener("finish", onfinish);
			stream.removeListener("end", onend);
			stream.removeListener("error", onerror);
			stream.removeListener("close", onclose);
		};
		if (options.signal && !closed) {
			const abort = () => {
				const endCallback = callback;
				cleanup();
				endCallback.call(stream, new AbortError(void 0, { cause: options.signal.reason }));
			};
			if (options.signal.aborted) process$7.nextTick(abort);
			else {
				addAbortListener = addAbortListener || require_util().addAbortListener;
				const disposable = addAbortListener(options.signal, abort);
				const originalCallback = callback;
				callback = once((...args) => {
					disposable[SymbolDispose]();
					originalCallback.apply(stream, args);
				});
			}
		}
		return cleanup;
	}
	function eosWeb(stream, options, callback) {
		let isAborted = false;
		let abort = nop;
		if (options.signal) {
			abort = () => {
				isAborted = true;
				callback.call(stream, new AbortError(void 0, { cause: options.signal.reason }));
			};
			if (options.signal.aborted) process$7.nextTick(abort);
			else {
				addAbortListener = addAbortListener || require_util().addAbortListener;
				const disposable = addAbortListener(options.signal, abort);
				const originalCallback = callback;
				callback = once((...args) => {
					disposable[SymbolDispose]();
					originalCallback.apply(stream, args);
				});
			}
		}
		const resolverFn = (...args) => {
			if (!isAborted) process$7.nextTick(() => callback.apply(stream, args));
		};
		PromisePrototypeThen(stream[kIsClosedPromise].promise, resolverFn, resolverFn);
		return nop;
	}
	function finished(stream, opts) {
		var _opts;
		let autoCleanup = false;
		if (opts === null) opts = kEmptyObject;
		if ((_opts = opts) !== null && _opts !== void 0 && _opts.cleanup) {
			validateBoolean(opts.cleanup, "cleanup");
			autoCleanup = opts.cleanup;
		}
		return new Promise((resolve, reject) => {
			const cleanup = eos(stream, opts, (err) => {
				if (autoCleanup) cleanup();
				if (err) reject(err);
				else resolve();
			});
		});
	}
	module.exports = eos;
	module.exports.finished = finished;
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var process$6 = __require("node:process");
	var { aggregateTwoErrors, codes: { ERR_MULTIPLE_CALLBACK }, AbortError } = require_errors();
	var { Symbol } = require_primordials();
	var { kIsDestroyed, isDestroyed, isFinished, isServerRequest } = require_utils();
	var kDestroy = Symbol("kDestroy");
	var kConstruct = Symbol("kConstruct");
	function checkError(err, w, r) {
		if (err) {
			err.stack;
			if (w && !w.errored) w.errored = err;
			if (r && !r.errored) r.errored = err;
		}
	}
	function destroy(err, cb) {
		const r = this._readableState;
		const w = this._writableState;
		const s = w || r;
		if (w !== null && w !== void 0 && w.destroyed || r !== null && r !== void 0 && r.destroyed) {
			if (typeof cb === "function") cb();
			return this;
		}
		checkError(err, w, r);
		if (w) w.destroyed = true;
		if (r) r.destroyed = true;
		if (!s.constructed) this.once(kDestroy, function(er) {
			_destroy(this, aggregateTwoErrors(er, err), cb);
		});
		else _destroy(this, err, cb);
		return this;
	}
	function _destroy(self, err, cb) {
		let called = false;
		function onDestroy(err) {
			if (called) return;
			called = true;
			const r = self._readableState;
			const w = self._writableState;
			checkError(err, w, r);
			if (w) w.closed = true;
			if (r) r.closed = true;
			if (typeof cb === "function") cb(err);
			if (err) process$6.nextTick(emitErrorCloseNT, self, err);
			else process$6.nextTick(emitCloseNT, self);
		}
		try {
			self._destroy(err || null, onDestroy);
		} catch (err) {
			onDestroy(err);
		}
	}
	function emitErrorCloseNT(self, err) {
		emitErrorNT(self, err);
		emitCloseNT(self);
	}
	function emitCloseNT(self) {
		const r = self._readableState;
		const w = self._writableState;
		if (w) w.closeEmitted = true;
		if (r) r.closeEmitted = true;
		if (w !== null && w !== void 0 && w.emitClose || r !== null && r !== void 0 && r.emitClose) self.emit("close");
	}
	function emitErrorNT(self, err) {
		const r = self._readableState;
		const w = self._writableState;
		if (w !== null && w !== void 0 && w.errorEmitted || r !== null && r !== void 0 && r.errorEmitted) return;
		if (w) w.errorEmitted = true;
		if (r) r.errorEmitted = true;
		self.emit("error", err);
	}
	function undestroy() {
		const r = this._readableState;
		const w = this._writableState;
		if (r) {
			r.constructed = true;
			r.closed = false;
			r.closeEmitted = false;
			r.destroyed = false;
			r.errored = null;
			r.errorEmitted = false;
			r.reading = false;
			r.ended = r.readable === false;
			r.endEmitted = r.readable === false;
		}
		if (w) {
			w.constructed = true;
			w.destroyed = false;
			w.closed = false;
			w.closeEmitted = false;
			w.errored = null;
			w.errorEmitted = false;
			w.finalCalled = false;
			w.prefinished = false;
			w.ended = w.writable === false;
			w.ending = w.writable === false;
			w.finished = w.writable === false;
		}
	}
	function errorOrDestroy(stream, err, sync) {
		const r = stream._readableState;
		const w = stream._writableState;
		if (w !== null && w !== void 0 && w.destroyed || r !== null && r !== void 0 && r.destroyed) return this;
		if (r !== null && r !== void 0 && r.autoDestroy || w !== null && w !== void 0 && w.autoDestroy) stream.destroy(err);
		else if (err) {
			err.stack;
			if (w && !w.errored) w.errored = err;
			if (r && !r.errored) r.errored = err;
			if (sync) process$6.nextTick(emitErrorNT, stream, err);
			else emitErrorNT(stream, err);
		}
	}
	function construct(stream, cb) {
		if (typeof stream._construct !== "function") return;
		const r = stream._readableState;
		const w = stream._writableState;
		if (r) r.constructed = false;
		if (w) w.constructed = false;
		stream.once(kConstruct, cb);
		if (stream.listenerCount(kConstruct) > 1) return;
		process$6.nextTick(constructNT, stream);
	}
	function constructNT(stream) {
		let called = false;
		function onConstruct(err) {
			if (called) {
				errorOrDestroy(stream, err !== null && err !== void 0 ? err : new ERR_MULTIPLE_CALLBACK());
				return;
			}
			called = true;
			const r = stream._readableState;
			const w = stream._writableState;
			const s = w || r;
			if (r) r.constructed = true;
			if (w) w.constructed = true;
			if (s.destroyed) stream.emit(kDestroy, err);
			else if (err) errorOrDestroy(stream, err, true);
			else process$6.nextTick(emitConstructNT, stream);
		}
		try {
			stream._construct((err) => {
				process$6.nextTick(onConstruct, err);
			});
		} catch (err) {
			process$6.nextTick(onConstruct, err);
		}
	}
	function emitConstructNT(stream) {
		stream.emit(kConstruct);
	}
	function isRequest(stream) {
		return (stream === null || stream === void 0 ? void 0 : stream.setHeader) && typeof stream.abort === "function";
	}
	function emitCloseLegacy(stream) {
		stream.emit("close");
	}
	function emitErrorCloseLegacy(stream, err) {
		stream.emit("error", err);
		process$6.nextTick(emitCloseLegacy, stream);
	}
	function destroyer(stream, err) {
		if (!stream || isDestroyed(stream)) return;
		if (!err && !isFinished(stream)) err = new AbortError();
		if (isServerRequest(stream)) {
			stream.socket = null;
			stream.destroy(err);
		} else if (isRequest(stream)) stream.abort();
		else if (isRequest(stream.req)) stream.req.abort();
		else if (typeof stream.destroy === "function") stream.destroy(err);
		else if (typeof stream.close === "function") stream.close();
		else if (err) process$6.nextTick(emitErrorCloseLegacy, stream, err);
		else process$6.nextTick(emitCloseLegacy, stream);
		if (!stream.destroyed) stream[kIsDestroyed] = true;
	}
	module.exports = {
		construct,
		destroyer,
		destroy,
		undestroy,
		errorOrDestroy
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/legacy.js
var require_legacy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { ArrayIsArray, ObjectSetPrototypeOf } = require_primordials();
	var { EventEmitter: EE$2 } = __require("events");
	function Stream(opts) {
		EE$2.call(this, opts);
	}
	ObjectSetPrototypeOf(Stream.prototype, EE$2.prototype);
	ObjectSetPrototypeOf(Stream, EE$2);
	Stream.prototype.pipe = function(dest, options) {
		const source = this;
		function ondata(chunk) {
			if (dest.writable && dest.write(chunk) === false && source.pause) source.pause();
		}
		source.on("data", ondata);
		function ondrain() {
			if (source.readable && source.resume) source.resume();
		}
		dest.on("drain", ondrain);
		if (!dest._isStdio && (!options || options.end !== false)) {
			source.on("end", onend);
			source.on("close", onclose);
		}
		let didOnEnd = false;
		function onend() {
			if (didOnEnd) return;
			didOnEnd = true;
			dest.end();
		}
		function onclose() {
			if (didOnEnd) return;
			didOnEnd = true;
			if (typeof dest.destroy === "function") dest.destroy();
		}
		function onerror(er) {
			cleanup();
			if (EE$2.listenerCount(this, "error") === 0) this.emit("error", er);
		}
		prependListener(source, "error", onerror);
		prependListener(dest, "error", onerror);
		function cleanup() {
			source.removeListener("data", ondata);
			dest.removeListener("drain", ondrain);
			source.removeListener("end", onend);
			source.removeListener("close", onclose);
			source.removeListener("error", onerror);
			dest.removeListener("error", onerror);
			source.removeListener("end", cleanup);
			source.removeListener("close", cleanup);
			dest.removeListener("close", cleanup);
		}
		source.on("end", cleanup);
		source.on("close", cleanup);
		dest.on("close", cleanup);
		dest.emit("pipe", source);
		return dest;
	};
	function prependListener(emitter, event, fn) {
		if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
		if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
		else if (ArrayIsArray(emitter._events[event])) emitter._events[event].unshift(fn);
		else emitter._events[event] = [fn, emitter._events[event]];
	}
	module.exports = {
		Stream,
		prependListener
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/add-abort-signal.js
var require_add_abort_signal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { SymbolDispose } = require_primordials();
	var { AbortError, codes } = require_errors();
	var { isNodeStream, isWebStream, kControllerErrorFunction } = require_utils();
	var eos = require_end_of_stream();
	var { ERR_INVALID_ARG_TYPE } = codes;
	var addAbortListener;
	var validateAbortSignal = (signal, name) => {
		if (typeof signal !== "object" || !("aborted" in signal)) throw new ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
	};
	module.exports.addAbortSignal = function addAbortSignal(signal, stream) {
		validateAbortSignal(signal, "signal");
		if (!isNodeStream(stream) && !isWebStream(stream)) throw new ERR_INVALID_ARG_TYPE("stream", [
			"ReadableStream",
			"WritableStream",
			"Stream"
		], stream);
		return module.exports.addAbortSignalNoValidate(signal, stream);
	};
	module.exports.addAbortSignalNoValidate = function(signal, stream) {
		if (typeof signal !== "object" || !("aborted" in signal)) return stream;
		const onAbort = isNodeStream(stream) ? () => {
			stream.destroy(new AbortError(void 0, { cause: signal.reason }));
		} : () => {
			stream[kControllerErrorFunction](new AbortError(void 0, { cause: signal.reason }));
		};
		if (signal.aborted) onAbort();
		else {
			addAbortListener = addAbortListener || require_util().addAbortListener;
			eos(stream, addAbortListener(signal, onAbort)[SymbolDispose]);
		}
		return stream;
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { StringPrototypeSlice, SymbolIterator, TypedArrayPrototypeSet, Uint8Array } = require_primordials();
	var { Buffer: Buffer$5 } = __require("buffer");
	var { inspect } = require_util();
	module.exports = class BufferList {
		constructor() {
			this.head = null;
			this.tail = null;
			this.length = 0;
		}
		push(v) {
			const entry = {
				data: v,
				next: null
			};
			if (this.length > 0) this.tail.next = entry;
			else this.head = entry;
			this.tail = entry;
			++this.length;
		}
		unshift(v) {
			const entry = {
				data: v,
				next: this.head
			};
			if (this.length === 0) this.tail = entry;
			this.head = entry;
			++this.length;
		}
		shift() {
			if (this.length === 0) return;
			const ret = this.head.data;
			if (this.length === 1) this.head = this.tail = null;
			else this.head = this.head.next;
			--this.length;
			return ret;
		}
		clear() {
			this.head = this.tail = null;
			this.length = 0;
		}
		join(s) {
			if (this.length === 0) return "";
			let p = this.head;
			let ret = "" + p.data;
			while ((p = p.next) !== null) ret += s + p.data;
			return ret;
		}
		concat(n) {
			if (this.length === 0) return Buffer$5.alloc(0);
			const ret = Buffer$5.allocUnsafe(n >>> 0);
			let p = this.head;
			let i = 0;
			while (p) {
				TypedArrayPrototypeSet(ret, p.data, i);
				i += p.data.length;
				p = p.next;
			}
			return ret;
		}
		consume(n, hasStrings) {
			const data = this.head.data;
			if (n < data.length) {
				const slice = data.slice(0, n);
				this.head.data = data.slice(n);
				return slice;
			}
			if (n === data.length) return this.shift();
			return hasStrings ? this._getString(n) : this._getBuffer(n);
		}
		first() {
			return this.head.data;
		}
		*[SymbolIterator]() {
			for (let p = this.head; p; p = p.next) yield p.data;
		}
		_getString(n) {
			let ret = "";
			let p = this.head;
			let c = 0;
			do {
				const str = p.data;
				if (n > str.length) {
					ret += str;
					n -= str.length;
				} else {
					if (n === str.length) {
						ret += str;
						++c;
						if (p.next) this.head = p.next;
						else this.head = this.tail = null;
					} else {
						ret += StringPrototypeSlice(str, 0, n);
						this.head = p;
						p.data = StringPrototypeSlice(str, n);
					}
					break;
				}
				++c;
			} while ((p = p.next) !== null);
			this.length -= c;
			return ret;
		}
		_getBuffer(n) {
			const ret = Buffer$5.allocUnsafe(n);
			const retLen = n;
			let p = this.head;
			let c = 0;
			do {
				const buf = p.data;
				if (n > buf.length) {
					TypedArrayPrototypeSet(ret, buf, retLen - n);
					n -= buf.length;
				} else {
					if (n === buf.length) {
						TypedArrayPrototypeSet(ret, buf, retLen - n);
						++c;
						if (p.next) this.head = p.next;
						else this.head = this.tail = null;
					} else {
						TypedArrayPrototypeSet(ret, new Uint8Array(buf.buffer, buf.byteOffset, n), retLen - n);
						this.head = p;
						p.data = buf.slice(n);
					}
					break;
				}
				++c;
			} while ((p = p.next) !== null);
			this.length -= c;
			return ret;
		}
		[Symbol.for("nodejs.util.inspect.custom")](_, options) {
			return inspect(this, {
				...options,
				depth: 0,
				customInspect: false
			});
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/state.js
var require_state = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { MathFloor, NumberIsInteger } = require_primordials();
	var { validateInteger } = require_validators();
	var { ERR_INVALID_ARG_VALUE } = require_errors().codes;
	var defaultHighWaterMarkBytes = 16 * 1024;
	var defaultHighWaterMarkObjectMode = 16;
	function highWaterMarkFrom(options, isDuplex, duplexKey) {
		return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
	}
	function getDefaultHighWaterMark(objectMode) {
		return objectMode ? defaultHighWaterMarkObjectMode : defaultHighWaterMarkBytes;
	}
	function setDefaultHighWaterMark(objectMode, value) {
		validateInteger(value, "value", 0);
		if (objectMode) defaultHighWaterMarkObjectMode = value;
		else defaultHighWaterMarkBytes = value;
	}
	function getHighWaterMark(state, options, duplexKey, isDuplex) {
		const hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
		if (hwm != null) {
			if (!NumberIsInteger(hwm) || hwm < 0) throw new ERR_INVALID_ARG_VALUE(isDuplex ? `options.${duplexKey}` : "options.highWaterMark", hwm);
			return MathFloor(hwm);
		}
		return getDefaultHighWaterMark(state.objectMode);
	}
	module.exports = {
		getHighWaterMark,
		getDefaultHighWaterMark,
		setDefaultHighWaterMark
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/from.js
var require_from = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var process$5 = __require("node:process");
	var { PromisePrototypeThen, SymbolAsyncIterator, SymbolIterator } = require_primordials();
	var { Buffer: Buffer$4 } = __require("buffer");
	var { ERR_INVALID_ARG_TYPE, ERR_STREAM_NULL_VALUES } = require_errors().codes;
	function from(Readable, iterable, opts) {
		let iterator;
		if (typeof iterable === "string" || iterable instanceof Buffer$4) return new Readable({
			objectMode: true,
			...opts,
			read() {
				this.push(iterable);
				this.push(null);
			}
		});
		let isAsync;
		if (iterable && iterable[SymbolAsyncIterator]) {
			isAsync = true;
			iterator = iterable[SymbolAsyncIterator]();
		} else if (iterable && iterable[SymbolIterator]) {
			isAsync = false;
			iterator = iterable[SymbolIterator]();
		} else throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
		const readable = new Readable({
			objectMode: true,
			highWaterMark: 1,
			...opts
		});
		let reading = false;
		readable._read = function() {
			if (!reading) {
				reading = true;
				next();
			}
		};
		readable._destroy = function(error, cb) {
			PromisePrototypeThen(close(error), () => process$5.nextTick(cb, error), (e) => process$5.nextTick(cb, e || error));
		};
		async function close(error) {
			const hadError = error !== void 0 && error !== null;
			const hasThrow = typeof iterator.throw === "function";
			if (hadError && hasThrow) {
				const { value, done } = await iterator.throw(error);
				await value;
				if (done) return;
			}
			if (typeof iterator.return === "function") {
				const { value } = await iterator.return();
				await value;
			}
		}
		async function next() {
			for (;;) {
				try {
					const { value, done } = isAsync ? await iterator.next() : iterator.next();
					if (done) readable.push(null);
					else {
						const res = value && typeof value.then === "function" ? await value : value;
						if (res === null) {
							reading = false;
							throw new ERR_STREAM_NULL_VALUES();
						} else if (readable.push(res)) continue;
						else reading = false;
					}
				} catch (err) {
					readable.destroy(err);
				}
				break;
			}
		}
		return readable;
	}
	module.exports = from;
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/readable.js
var require_readable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var process$4 = __require("node:process");
	var { ArrayPrototypeIndexOf, NumberIsInteger, NumberIsNaN, NumberParseInt, ObjectDefineProperties, ObjectKeys, ObjectSetPrototypeOf, Promise, SafeSet, SymbolAsyncDispose, SymbolAsyncIterator, Symbol } = require_primordials();
	module.exports = Readable;
	Readable.ReadableState = ReadableState;
	var { EventEmitter: EE$1 } = __require("events");
	var { Stream, prependListener } = require_legacy();
	var { Buffer: Buffer$3 } = __require("buffer");
	var { addAbortSignal } = require_add_abort_signal();
	var eos = require_end_of_stream();
	var debug = require_util().debuglog("stream", (fn) => {
		debug = fn;
	});
	var BufferList = require_buffer_list();
	var destroyImpl = require_destroy();
	var { getHighWaterMark, getDefaultHighWaterMark } = require_state();
	var { aggregateTwoErrors, codes: { ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED, ERR_OUT_OF_RANGE, ERR_STREAM_PUSH_AFTER_EOF, ERR_STREAM_UNSHIFT_AFTER_END_EVENT }, AbortError } = require_errors();
	var { validateObject } = require_validators();
	var kPaused = Symbol("kPaused");
	var { StringDecoder } = __require("node:string_decoder");
	var from = require_from();
	ObjectSetPrototypeOf(Readable.prototype, Stream.prototype);
	ObjectSetPrototypeOf(Readable, Stream);
	var nop = () => {};
	var { errorOrDestroy } = destroyImpl;
	var kObjectMode = 1;
	var kEnded = 2;
	var kEndEmitted = 4;
	var kReading = 8;
	var kConstructed = 16;
	var kSync = 32;
	var kNeedReadable = 64;
	var kEmittedReadable = 128;
	var kReadableListening = 256;
	var kResumeScheduled = 512;
	var kErrorEmitted = 1024;
	var kEmitClose = 2048;
	var kAutoDestroy = 4096;
	var kDestroyed = 8192;
	var kClosed = 16384;
	var kCloseEmitted = 32768;
	var kMultiAwaitDrain = 65536;
	var kReadingMore = 1 << 17;
	var kDataEmitted = 1 << 18;
	function makeBitMapDescriptor(bit) {
		return {
			enumerable: false,
			get() {
				return (this.state & bit) !== 0;
			},
			set(value) {
				if (value) this.state |= bit;
				else this.state &= ~bit;
			}
		};
	}
	ObjectDefineProperties(ReadableState.prototype, {
		objectMode: makeBitMapDescriptor(kObjectMode),
		ended: makeBitMapDescriptor(kEnded),
		endEmitted: makeBitMapDescriptor(kEndEmitted),
		reading: makeBitMapDescriptor(kReading),
		constructed: makeBitMapDescriptor(kConstructed),
		sync: makeBitMapDescriptor(kSync),
		needReadable: makeBitMapDescriptor(kNeedReadable),
		emittedReadable: makeBitMapDescriptor(kEmittedReadable),
		readableListening: makeBitMapDescriptor(kReadableListening),
		resumeScheduled: makeBitMapDescriptor(kResumeScheduled),
		errorEmitted: makeBitMapDescriptor(kErrorEmitted),
		emitClose: makeBitMapDescriptor(kEmitClose),
		autoDestroy: makeBitMapDescriptor(kAutoDestroy),
		destroyed: makeBitMapDescriptor(kDestroyed),
		closed: makeBitMapDescriptor(kClosed),
		closeEmitted: makeBitMapDescriptor(kCloseEmitted),
		multiAwaitDrain: makeBitMapDescriptor(kMultiAwaitDrain),
		readingMore: makeBitMapDescriptor(kReadingMore),
		dataEmitted: makeBitMapDescriptor(kDataEmitted)
	});
	function ReadableState(options, stream, isDuplex) {
		if (typeof isDuplex !== "boolean") isDuplex = stream instanceof require_duplex();
		this.state = 6192;
		if (options && options.objectMode) this.state |= kObjectMode;
		if (isDuplex && options && options.readableObjectMode) this.state |= kObjectMode;
		this.highWaterMark = options ? getHighWaterMark(this, options, "readableHighWaterMark", isDuplex) : getDefaultHighWaterMark(false);
		this.buffer = new BufferList();
		this.length = 0;
		this.pipes = [];
		this.flowing = null;
		this[kPaused] = null;
		if (options && options.emitClose === false) this.state &= -2049;
		if (options && options.autoDestroy === false) this.state &= -4097;
		this.errored = null;
		this.defaultEncoding = options && options.defaultEncoding || "utf8";
		this.awaitDrainWriters = null;
		this.decoder = null;
		this.encoding = null;
		if (options && options.encoding) {
			this.decoder = new StringDecoder(options.encoding);
			this.encoding = options.encoding;
		}
	}
	function Readable(options) {
		if (!(this instanceof Readable)) return new Readable(options);
		const isDuplex = this instanceof require_duplex();
		this._readableState = new ReadableState(options, this, isDuplex);
		if (options) {
			if (typeof options.read === "function") this._read = options.read;
			if (typeof options.destroy === "function") this._destroy = options.destroy;
			if (typeof options.construct === "function") this._construct = options.construct;
			if (options.signal && !isDuplex) addAbortSignal(options.signal, this);
		}
		Stream.call(this, options);
		destroyImpl.construct(this, () => {
			if (this._readableState.needReadable) maybeReadMore(this, this._readableState);
		});
	}
	Readable.prototype.destroy = destroyImpl.destroy;
	Readable.prototype._undestroy = destroyImpl.undestroy;
	Readable.prototype._destroy = function(err, cb) {
		cb(err);
	};
	Readable.prototype[EE$1.captureRejectionSymbol] = function(err) {
		this.destroy(err);
	};
	Readable.prototype[SymbolAsyncDispose] = function() {
		let error;
		if (!this.destroyed) {
			error = this.readableEnded ? null : new AbortError();
			this.destroy(error);
		}
		return new Promise((resolve, reject) => eos(this, (err) => err && err !== error ? reject(err) : resolve(null)));
	};
	Readable.prototype.push = function(chunk, encoding) {
		return readableAddChunk(this, chunk, encoding, false);
	};
	Readable.prototype.unshift = function(chunk, encoding) {
		return readableAddChunk(this, chunk, encoding, true);
	};
	function readableAddChunk(stream, chunk, encoding, addToFront) {
		debug("readableAddChunk", chunk);
		const state = stream._readableState;
		let err;
		if ((state.state & kObjectMode) === 0) {
			if (typeof chunk === "string") {
				encoding = encoding || state.defaultEncoding;
				if (state.encoding !== encoding) if (addToFront && state.encoding) chunk = Buffer$3.from(chunk, encoding).toString(state.encoding);
				else {
					chunk = Buffer$3.from(chunk, encoding);
					encoding = "";
				}
			} else if (chunk instanceof Buffer$3) encoding = "";
			else if (Stream._isUint8Array(chunk)) {
				chunk = Stream._uint8ArrayToBuffer(chunk);
				encoding = "";
			} else if (chunk != null) err = new ERR_INVALID_ARG_TYPE("chunk", [
				"string",
				"Buffer",
				"Uint8Array"
			], chunk);
		}
		if (err) errorOrDestroy(stream, err);
		else if (chunk === null) {
			state.state &= -9;
			onEofChunk(stream, state);
		} else if ((state.state & kObjectMode) !== 0 || chunk && chunk.length > 0) if (addToFront) if ((state.state & kEndEmitted) !== 0) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
		else if (state.destroyed || state.errored) return false;
		else addChunk(stream, state, chunk, true);
		else if (state.ended) errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
		else if (state.destroyed || state.errored) return false;
		else {
			state.state &= -9;
			if (state.decoder && !encoding) {
				chunk = state.decoder.write(chunk);
				if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
				else maybeReadMore(stream, state);
			} else addChunk(stream, state, chunk, false);
		}
		else if (!addToFront) {
			state.state &= -9;
			maybeReadMore(stream, state);
		}
		return !state.ended && (state.length < state.highWaterMark || state.length === 0);
	}
	function addChunk(stream, state, chunk, addToFront) {
		if (state.flowing && state.length === 0 && !state.sync && stream.listenerCount("data") > 0) {
			if ((state.state & kMultiAwaitDrain) !== 0) state.awaitDrainWriters.clear();
			else state.awaitDrainWriters = null;
			state.dataEmitted = true;
			stream.emit("data", chunk);
		} else {
			state.length += state.objectMode ? 1 : chunk.length;
			if (addToFront) state.buffer.unshift(chunk);
			else state.buffer.push(chunk);
			if ((state.state & kNeedReadable) !== 0) emitReadable(stream);
		}
		maybeReadMore(stream, state);
	}
	Readable.prototype.isPaused = function() {
		const state = this._readableState;
		return state[kPaused] === true || state.flowing === false;
	};
	Readable.prototype.setEncoding = function(enc) {
		const decoder = new StringDecoder(enc);
		this._readableState.decoder = decoder;
		this._readableState.encoding = this._readableState.decoder.encoding;
		const buffer = this._readableState.buffer;
		let content = "";
		for (const data of buffer) content += decoder.write(data);
		buffer.clear();
		if (content !== "") buffer.push(content);
		this._readableState.length = content.length;
		return this;
	};
	var MAX_HWM = 1073741824;
	function computeNewHighWaterMark(n) {
		if (n > MAX_HWM) throw new ERR_OUT_OF_RANGE("size", "<= 1GiB", n);
		else {
			n--;
			n |= n >>> 1;
			n |= n >>> 2;
			n |= n >>> 4;
			n |= n >>> 8;
			n |= n >>> 16;
			n++;
		}
		return n;
	}
	function howMuchToRead(n, state) {
		if (n <= 0 || state.length === 0 && state.ended) return 0;
		if ((state.state & kObjectMode) !== 0) return 1;
		if (NumberIsNaN(n)) {
			if (state.flowing && state.length) return state.buffer.first().length;
			return state.length;
		}
		if (n <= state.length) return n;
		return state.ended ? state.length : 0;
	}
	Readable.prototype.read = function(n) {
		debug("read", n);
		if (n === void 0) n = NaN;
		else if (!NumberIsInteger(n)) n = NumberParseInt(n, 10);
		const state = this._readableState;
		const nOrig = n;
		if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
		if (n !== 0) state.state &= -129;
		if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
			debug("read: emitReadable", state.length, state.ended);
			if (state.length === 0 && state.ended) endReadable(this);
			else emitReadable(this);
			return null;
		}
		n = howMuchToRead(n, state);
		if (n === 0 && state.ended) {
			if (state.length === 0) endReadable(this);
			return null;
		}
		let doRead = (state.state & kNeedReadable) !== 0;
		debug("need readable", doRead);
		if (state.length === 0 || state.length - n < state.highWaterMark) {
			doRead = true;
			debug("length less than watermark", doRead);
		}
		if (state.ended || state.reading || state.destroyed || state.errored || !state.constructed) {
			doRead = false;
			debug("reading, ended or constructing", doRead);
		} else if (doRead) {
			debug("do read");
			state.state |= 40;
			if (state.length === 0) state.state |= kNeedReadable;
			try {
				this._read(state.highWaterMark);
			} catch (err) {
				errorOrDestroy(this, err);
			}
			state.state &= -33;
			if (!state.reading) n = howMuchToRead(nOrig, state);
		}
		let ret;
		if (n > 0) ret = fromList(n, state);
		else ret = null;
		if (ret === null) {
			state.needReadable = state.length <= state.highWaterMark;
			n = 0;
		} else {
			state.length -= n;
			if (state.multiAwaitDrain) state.awaitDrainWriters.clear();
			else state.awaitDrainWriters = null;
		}
		if (state.length === 0) {
			if (!state.ended) state.needReadable = true;
			if (nOrig !== n && state.ended) endReadable(this);
		}
		if (ret !== null && !state.errorEmitted && !state.closeEmitted) {
			state.dataEmitted = true;
			this.emit("data", ret);
		}
		return ret;
	};
	function onEofChunk(stream, state) {
		debug("onEofChunk");
		if (state.ended) return;
		if (state.decoder) {
			const chunk = state.decoder.end();
			if (chunk && chunk.length) {
				state.buffer.push(chunk);
				state.length += state.objectMode ? 1 : chunk.length;
			}
		}
		state.ended = true;
		if (state.sync) emitReadable(stream);
		else {
			state.needReadable = false;
			state.emittedReadable = true;
			emitReadable_(stream);
		}
	}
	function emitReadable(stream) {
		const state = stream._readableState;
		debug("emitReadable", state.needReadable, state.emittedReadable);
		state.needReadable = false;
		if (!state.emittedReadable) {
			debug("emitReadable", state.flowing);
			state.emittedReadable = true;
			process$4.nextTick(emitReadable_, stream);
		}
	}
	function emitReadable_(stream) {
		const state = stream._readableState;
		debug("emitReadable_", state.destroyed, state.length, state.ended);
		if (!state.destroyed && !state.errored && (state.length || state.ended)) {
			stream.emit("readable");
			state.emittedReadable = false;
		}
		state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
		flow(stream);
	}
	function maybeReadMore(stream, state) {
		if (!state.readingMore && state.constructed) {
			state.readingMore = true;
			process$4.nextTick(maybeReadMore_, stream, state);
		}
	}
	function maybeReadMore_(stream, state) {
		while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
			const len = state.length;
			debug("maybeReadMore read 0");
			stream.read(0);
			if (len === state.length) break;
		}
		state.readingMore = false;
	}
	Readable.prototype._read = function(n) {
		throw new ERR_METHOD_NOT_IMPLEMENTED("_read()");
	};
	Readable.prototype.pipe = function(dest, pipeOpts) {
		const src = this;
		const state = this._readableState;
		if (state.pipes.length === 1) {
			if (!state.multiAwaitDrain) {
				state.multiAwaitDrain = true;
				state.awaitDrainWriters = new SafeSet(state.awaitDrainWriters ? [state.awaitDrainWriters] : []);
			}
		}
		state.pipes.push(dest);
		debug("pipe count=%d opts=%j", state.pipes.length, pipeOpts);
		const endFn = (!pipeOpts || pipeOpts.end !== false) && dest !== process$4.stdout && dest !== process$4.stderr ? onend : unpipe;
		if (state.endEmitted) process$4.nextTick(endFn);
		else src.once("end", endFn);
		dest.on("unpipe", onunpipe);
		function onunpipe(readable, unpipeInfo) {
			debug("onunpipe");
			if (readable === src) {
				if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
					unpipeInfo.hasUnpiped = true;
					cleanup();
				}
			}
		}
		function onend() {
			debug("onend");
			dest.end();
		}
		let ondrain;
		let cleanedUp = false;
		function cleanup() {
			debug("cleanup");
			dest.removeListener("close", onclose);
			dest.removeListener("finish", onfinish);
			if (ondrain) dest.removeListener("drain", ondrain);
			dest.removeListener("error", onerror);
			dest.removeListener("unpipe", onunpipe);
			src.removeListener("end", onend);
			src.removeListener("end", unpipe);
			src.removeListener("data", ondata);
			cleanedUp = true;
			if (ondrain && state.awaitDrainWriters && (!dest._writableState || dest._writableState.needDrain)) ondrain();
		}
		function pause() {
			if (!cleanedUp) {
				if (state.pipes.length === 1 && state.pipes[0] === dest) {
					debug("false write response, pause", 0);
					state.awaitDrainWriters = dest;
					state.multiAwaitDrain = false;
				} else if (state.pipes.length > 1 && state.pipes.includes(dest)) {
					debug("false write response, pause", state.awaitDrainWriters.size);
					state.awaitDrainWriters.add(dest);
				}
				src.pause();
			}
			if (!ondrain) {
				ondrain = pipeOnDrain(src, dest);
				dest.on("drain", ondrain);
			}
		}
		src.on("data", ondata);
		function ondata(chunk) {
			debug("ondata");
			const ret = dest.write(chunk);
			debug("dest.write", ret);
			if (ret === false) pause();
		}
		function onerror(er) {
			debug("onerror", er);
			unpipe();
			dest.removeListener("error", onerror);
			if (dest.listenerCount("error") === 0) {
				const s = dest._writableState || dest._readableState;
				if (s && !s.errorEmitted) errorOrDestroy(dest, er);
				else dest.emit("error", er);
			}
		}
		prependListener(dest, "error", onerror);
		function onclose() {
			dest.removeListener("finish", onfinish);
			unpipe();
		}
		dest.once("close", onclose);
		function onfinish() {
			debug("onfinish");
			dest.removeListener("close", onclose);
			unpipe();
		}
		dest.once("finish", onfinish);
		function unpipe() {
			debug("unpipe");
			src.unpipe(dest);
		}
		dest.emit("pipe", src);
		if (dest.writableNeedDrain === true) pause();
		else if (!state.flowing) {
			debug("pipe resume");
			src.resume();
		}
		return dest;
	};
	function pipeOnDrain(src, dest) {
		return function pipeOnDrainFunctionResult() {
			const state = src._readableState;
			if (state.awaitDrainWriters === dest) {
				debug("pipeOnDrain", 1);
				state.awaitDrainWriters = null;
			} else if (state.multiAwaitDrain) {
				debug("pipeOnDrain", state.awaitDrainWriters.size);
				state.awaitDrainWriters.delete(dest);
			}
			if ((!state.awaitDrainWriters || state.awaitDrainWriters.size === 0) && src.listenerCount("data")) src.resume();
		};
	}
	Readable.prototype.unpipe = function(dest) {
		const state = this._readableState;
		const unpipeInfo = { hasUnpiped: false };
		if (state.pipes.length === 0) return this;
		if (!dest) {
			const dests = state.pipes;
			state.pipes = [];
			this.pause();
			for (let i = 0; i < dests.length; i++) dests[i].emit("unpipe", this, { hasUnpiped: false });
			return this;
		}
		const index = ArrayPrototypeIndexOf(state.pipes, dest);
		if (index === -1) return this;
		state.pipes.splice(index, 1);
		if (state.pipes.length === 0) this.pause();
		dest.emit("unpipe", this, unpipeInfo);
		return this;
	};
	Readable.prototype.on = function(ev, fn) {
		const res = Stream.prototype.on.call(this, ev, fn);
		const state = this._readableState;
		if (ev === "data") {
			state.readableListening = this.listenerCount("readable") > 0;
			if (state.flowing !== false) this.resume();
		} else if (ev === "readable") {
			if (!state.endEmitted && !state.readableListening) {
				state.readableListening = state.needReadable = true;
				state.flowing = false;
				state.emittedReadable = false;
				debug("on readable", state.length, state.reading);
				if (state.length) emitReadable(this);
				else if (!state.reading) process$4.nextTick(nReadingNextTick, this);
			}
		}
		return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;
	Readable.prototype.removeListener = function(ev, fn) {
		const res = Stream.prototype.removeListener.call(this, ev, fn);
		if (ev === "readable") process$4.nextTick(updateReadableListening, this);
		return res;
	};
	Readable.prototype.off = Readable.prototype.removeListener;
	Readable.prototype.removeAllListeners = function(ev) {
		const res = Stream.prototype.removeAllListeners.apply(this, arguments);
		if (ev === "readable" || ev === void 0) process$4.nextTick(updateReadableListening, this);
		return res;
	};
	function updateReadableListening(self) {
		const state = self._readableState;
		state.readableListening = self.listenerCount("readable") > 0;
		if (state.resumeScheduled && state[kPaused] === false) state.flowing = true;
		else if (self.listenerCount("data") > 0) self.resume();
		else if (!state.readableListening) state.flowing = null;
	}
	function nReadingNextTick(self) {
		debug("readable nexttick read 0");
		self.read(0);
	}
	Readable.prototype.resume = function() {
		const state = this._readableState;
		if (!state.flowing) {
			debug("resume");
			state.flowing = !state.readableListening;
			resume(this, state);
		}
		state[kPaused] = false;
		return this;
	};
	function resume(stream, state) {
		if (!state.resumeScheduled) {
			state.resumeScheduled = true;
			process$4.nextTick(resume_, stream, state);
		}
	}
	function resume_(stream, state) {
		debug("resume", state.reading);
		if (!state.reading) stream.read(0);
		state.resumeScheduled = false;
		stream.emit("resume");
		flow(stream);
		if (state.flowing && !state.reading) stream.read(0);
	}
	Readable.prototype.pause = function() {
		debug("call pause flowing=%j", this._readableState.flowing);
		if (this._readableState.flowing !== false) {
			debug("pause");
			this._readableState.flowing = false;
			this.emit("pause");
		}
		this._readableState[kPaused] = true;
		return this;
	};
	function flow(stream) {
		const state = stream._readableState;
		debug("flow", state.flowing);
		while (state.flowing && stream.read() !== null);
	}
	Readable.prototype.wrap = function(stream) {
		let paused = false;
		stream.on("data", (chunk) => {
			if (!this.push(chunk) && stream.pause) {
				paused = true;
				stream.pause();
			}
		});
		stream.on("end", () => {
			this.push(null);
		});
		stream.on("error", (err) => {
			errorOrDestroy(this, err);
		});
		stream.on("close", () => {
			this.destroy();
		});
		stream.on("destroy", () => {
			this.destroy();
		});
		this._read = () => {
			if (paused && stream.resume) {
				paused = false;
				stream.resume();
			}
		};
		const streamKeys = ObjectKeys(stream);
		for (let j = 1; j < streamKeys.length; j++) {
			const i = streamKeys[j];
			if (this[i] === void 0 && typeof stream[i] === "function") this[i] = stream[i].bind(stream);
		}
		return this;
	};
	Readable.prototype[SymbolAsyncIterator] = function() {
		return streamToAsyncIterator(this);
	};
	Readable.prototype.iterator = function(options) {
		if (options !== void 0) validateObject(options, "options");
		return streamToAsyncIterator(this, options);
	};
	function streamToAsyncIterator(stream, options) {
		if (typeof stream.read !== "function") stream = Readable.wrap(stream, { objectMode: true });
		const iter = createAsyncIterator(stream, options);
		iter.stream = stream;
		return iter;
	}
	async function* createAsyncIterator(stream, options) {
		let callback = nop;
		function next(resolve) {
			if (this === stream) {
				callback();
				callback = nop;
			} else callback = resolve;
		}
		stream.on("readable", next);
		let error;
		const cleanup = eos(stream, { writable: false }, (err) => {
			error = err ? aggregateTwoErrors(error, err) : null;
			callback();
			callback = nop;
		});
		try {
			while (true) {
				const chunk = stream.destroyed ? null : stream.read();
				if (chunk !== null) yield chunk;
				else if (error) throw error;
				else if (error === null) return;
				else await new Promise(next);
			}
		} catch (err) {
			error = aggregateTwoErrors(error, err);
			throw error;
		} finally {
			if ((error || (options === null || options === void 0 ? void 0 : options.destroyOnReturn) !== false) && (error === void 0 || stream._readableState.autoDestroy)) destroyImpl.destroyer(stream, null);
			else {
				stream.off("readable", next);
				cleanup();
			}
		}
	}
	ObjectDefineProperties(Readable.prototype, {
		readable: {
			__proto__: null,
			get() {
				const r = this._readableState;
				return !!r && r.readable !== false && !r.destroyed && !r.errorEmitted && !r.endEmitted;
			},
			set(val) {
				if (this._readableState) this._readableState.readable = !!val;
			}
		},
		readableDidRead: {
			__proto__: null,
			enumerable: false,
			get: function() {
				return this._readableState.dataEmitted;
			}
		},
		readableAborted: {
			__proto__: null,
			enumerable: false,
			get: function() {
				return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
			}
		},
		readableHighWaterMark: {
			__proto__: null,
			enumerable: false,
			get: function() {
				return this._readableState.highWaterMark;
			}
		},
		readableBuffer: {
			__proto__: null,
			enumerable: false,
			get: function() {
				return this._readableState && this._readableState.buffer;
			}
		},
		readableFlowing: {
			__proto__: null,
			enumerable: false,
			get: function() {
				return this._readableState.flowing;
			},
			set: function(state) {
				if (this._readableState) this._readableState.flowing = state;
			}
		},
		readableLength: {
			__proto__: null,
			enumerable: false,
			get() {
				return this._readableState.length;
			}
		},
		readableObjectMode: {
			__proto__: null,
			enumerable: false,
			get() {
				return this._readableState ? this._readableState.objectMode : false;
			}
		},
		readableEncoding: {
			__proto__: null,
			enumerable: false,
			get() {
				return this._readableState ? this._readableState.encoding : null;
			}
		},
		errored: {
			__proto__: null,
			enumerable: false,
			get() {
				return this._readableState ? this._readableState.errored : null;
			}
		},
		closed: {
			__proto__: null,
			get() {
				return this._readableState ? this._readableState.closed : false;
			}
		},
		destroyed: {
			__proto__: null,
			enumerable: false,
			get() {
				return this._readableState ? this._readableState.destroyed : false;
			},
			set(value) {
				if (!this._readableState) return;
				this._readableState.destroyed = value;
			}
		},
		readableEnded: {
			__proto__: null,
			enumerable: false,
			get() {
				return this._readableState ? this._readableState.endEmitted : false;
			}
		}
	});
	ObjectDefineProperties(ReadableState.prototype, {
		pipesCount: {
			__proto__: null,
			get() {
				return this.pipes.length;
			}
		},
		paused: {
			__proto__: null,
			get() {
				return this[kPaused] !== false;
			},
			set(value) {
				this[kPaused] = !!value;
			}
		}
	});
	Readable._fromList = fromList;
	function fromList(n, state) {
		if (state.length === 0) return null;
		let ret;
		if (state.objectMode) ret = state.buffer.shift();
		else if (!n || n >= state.length) {
			if (state.decoder) ret = state.buffer.join("");
			else if (state.buffer.length === 1) ret = state.buffer.first();
			else ret = state.buffer.concat(state.length);
			state.buffer.clear();
		} else ret = state.buffer.consume(n, state.decoder);
		return ret;
	}
	function endReadable(stream) {
		const state = stream._readableState;
		debug("endReadable", state.endEmitted);
		if (!state.endEmitted) {
			state.ended = true;
			process$4.nextTick(endReadableNT, state, stream);
		}
	}
	function endReadableNT(state, stream) {
		debug("endReadableNT", state.endEmitted, state.length);
		if (!state.errored && !state.closeEmitted && !state.endEmitted && state.length === 0) {
			state.endEmitted = true;
			stream.emit("end");
			if (stream.writable && stream.allowHalfOpen === false) process$4.nextTick(endWritableNT, stream);
			else if (state.autoDestroy) {
				const wState = stream._writableState;
				if (!wState || wState.autoDestroy && (wState.finished || wState.writable === false)) stream.destroy();
			}
		}
	}
	function endWritableNT(stream) {
		if (stream.writable && !stream.writableEnded && !stream.destroyed) stream.end();
	}
	Readable.from = function(iterable, opts) {
		return from(Readable, iterable, opts);
	};
	var webStreamsAdapters;
	function lazyWebStreams() {
		if (webStreamsAdapters === void 0) webStreamsAdapters = {};
		return webStreamsAdapters;
	}
	Readable.fromWeb = function(readableStream, options) {
		return lazyWebStreams().newStreamReadableFromReadableStream(readableStream, options);
	};
	Readable.toWeb = function(streamReadable, options) {
		return lazyWebStreams().newReadableStreamFromStreamReadable(streamReadable, options);
	};
	Readable.wrap = function(src, options) {
		var _ref, _src$readableObjectMo;
		return new Readable({
			objectMode: (_ref = (_src$readableObjectMo = src.readableObjectMode) !== null && _src$readableObjectMo !== void 0 ? _src$readableObjectMo : src.objectMode) !== null && _ref !== void 0 ? _ref : true,
			...options,
			destroy(err, callback) {
				destroyImpl.destroyer(src, err);
				callback(err);
			}
		}).wrap(src);
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/writable.js
var require_writable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var process$3 = __require("node:process");
	var { ArrayPrototypeSlice, Error, FunctionPrototypeSymbolHasInstance, ObjectDefineProperty, ObjectDefineProperties, ObjectSetPrototypeOf, StringPrototypeToLowerCase, Symbol, SymbolHasInstance } = require_primordials();
	module.exports = Writable;
	Writable.WritableState = WritableState;
	var { EventEmitter: EE } = __require("events");
	var Stream = require_legacy().Stream;
	var { Buffer: Buffer$2 } = __require("buffer");
	var destroyImpl = require_destroy();
	var { addAbortSignal } = require_add_abort_signal();
	var { getHighWaterMark, getDefaultHighWaterMark } = require_state();
	var { ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED, ERR_STREAM_ALREADY_FINISHED, ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING } = require_errors().codes;
	var { errorOrDestroy } = destroyImpl;
	ObjectSetPrototypeOf(Writable.prototype, Stream.prototype);
	ObjectSetPrototypeOf(Writable, Stream);
	function nop() {}
	var kOnFinished = Symbol("kOnFinished");
	function WritableState(options, stream, isDuplex) {
		if (typeof isDuplex !== "boolean") isDuplex = stream instanceof require_duplex();
		this.objectMode = !!(options && options.objectMode);
		if (isDuplex) this.objectMode = this.objectMode || !!(options && options.writableObjectMode);
		this.highWaterMark = options ? getHighWaterMark(this, options, "writableHighWaterMark", isDuplex) : getDefaultHighWaterMark(false);
		this.finalCalled = false;
		this.needDrain = false;
		this.ending = false;
		this.ended = false;
		this.finished = false;
		this.destroyed = false;
		const noDecode = !!(options && options.decodeStrings === false);
		this.decodeStrings = !noDecode;
		this.defaultEncoding = options && options.defaultEncoding || "utf8";
		this.length = 0;
		this.writing = false;
		this.corked = 0;
		this.sync = true;
		this.bufferProcessing = false;
		this.onwrite = onwrite.bind(void 0, stream);
		this.writecb = null;
		this.writelen = 0;
		this.afterWriteTickInfo = null;
		resetBuffer(this);
		this.pendingcb = 0;
		this.constructed = true;
		this.prefinished = false;
		this.errorEmitted = false;
		this.emitClose = !options || options.emitClose !== false;
		this.autoDestroy = !options || options.autoDestroy !== false;
		this.errored = null;
		this.closed = false;
		this.closeEmitted = false;
		this[kOnFinished] = [];
	}
	function resetBuffer(state) {
		state.buffered = [];
		state.bufferedIndex = 0;
		state.allBuffers = true;
		state.allNoop = true;
	}
	WritableState.prototype.getBuffer = function getBuffer() {
		return ArrayPrototypeSlice(this.buffered, this.bufferedIndex);
	};
	ObjectDefineProperty(WritableState.prototype, "bufferedRequestCount", {
		__proto__: null,
		get() {
			return this.buffered.length - this.bufferedIndex;
		}
	});
	function Writable(options) {
		const isDuplex = this instanceof require_duplex();
		if (!isDuplex && !FunctionPrototypeSymbolHasInstance(Writable, this)) return new Writable(options);
		this._writableState = new WritableState(options, this, isDuplex);
		if (options) {
			if (typeof options.write === "function") this._write = options.write;
			if (typeof options.writev === "function") this._writev = options.writev;
			if (typeof options.destroy === "function") this._destroy = options.destroy;
			if (typeof options.final === "function") this._final = options.final;
			if (typeof options.construct === "function") this._construct = options.construct;
			if (options.signal) addAbortSignal(options.signal, this);
		}
		Stream.call(this, options);
		destroyImpl.construct(this, () => {
			const state = this._writableState;
			if (!state.writing) clearBuffer(this, state);
			finishMaybe(this, state);
		});
	}
	ObjectDefineProperty(Writable, SymbolHasInstance, {
		__proto__: null,
		value: function(object) {
			if (FunctionPrototypeSymbolHasInstance(this, object)) return true;
			if (this !== Writable) return false;
			return object && object._writableState instanceof WritableState;
		}
	});
	Writable.prototype.pipe = function() {
		errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
	};
	function _write(stream, chunk, encoding, cb) {
		const state = stream._writableState;
		if (typeof encoding === "function") {
			cb = encoding;
			encoding = state.defaultEncoding;
		} else {
			if (!encoding) encoding = state.defaultEncoding;
			else if (encoding !== "buffer" && !Buffer$2.isEncoding(encoding)) throw new ERR_UNKNOWN_ENCODING(encoding);
			if (typeof cb !== "function") cb = nop;
		}
		if (chunk === null) throw new ERR_STREAM_NULL_VALUES();
		else if (!state.objectMode) if (typeof chunk === "string") {
			if (state.decodeStrings !== false) {
				chunk = Buffer$2.from(chunk, encoding);
				encoding = "buffer";
			}
		} else if (chunk instanceof Buffer$2) encoding = "buffer";
		else if (Stream._isUint8Array(chunk)) {
			chunk = Stream._uint8ArrayToBuffer(chunk);
			encoding = "buffer";
		} else throw new ERR_INVALID_ARG_TYPE("chunk", [
			"string",
			"Buffer",
			"Uint8Array"
		], chunk);
		let err;
		if (state.ending) err = new ERR_STREAM_WRITE_AFTER_END();
		else if (state.destroyed) err = new ERR_STREAM_DESTROYED("write");
		if (err) {
			process$3.nextTick(cb, err);
			errorOrDestroy(stream, err, true);
			return err;
		}
		state.pendingcb++;
		return writeOrBuffer(stream, state, chunk, encoding, cb);
	}
	Writable.prototype.write = function(chunk, encoding, cb) {
		return _write(this, chunk, encoding, cb) === true;
	};
	Writable.prototype.cork = function() {
		this._writableState.corked++;
	};
	Writable.prototype.uncork = function() {
		const state = this._writableState;
		if (state.corked) {
			state.corked--;
			if (!state.writing) clearBuffer(this, state);
		}
	};
	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
		if (typeof encoding === "string") encoding = StringPrototypeToLowerCase(encoding);
		if (!Buffer$2.isEncoding(encoding)) throw new ERR_UNKNOWN_ENCODING(encoding);
		this._writableState.defaultEncoding = encoding;
		return this;
	};
	function writeOrBuffer(stream, state, chunk, encoding, callback) {
		const len = state.objectMode ? 1 : chunk.length;
		state.length += len;
		const ret = state.length < state.highWaterMark;
		if (!ret) state.needDrain = true;
		if (state.writing || state.corked || state.errored || !state.constructed) {
			state.buffered.push({
				chunk,
				encoding,
				callback
			});
			if (state.allBuffers && encoding !== "buffer") state.allBuffers = false;
			if (state.allNoop && callback !== nop) state.allNoop = false;
		} else {
			state.writelen = len;
			state.writecb = callback;
			state.writing = true;
			state.sync = true;
			stream._write(chunk, encoding, state.onwrite);
			state.sync = false;
		}
		return ret && !state.errored && !state.destroyed;
	}
	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
		state.writelen = len;
		state.writecb = cb;
		state.writing = true;
		state.sync = true;
		if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
		else if (writev) stream._writev(chunk, state.onwrite);
		else stream._write(chunk, encoding, state.onwrite);
		state.sync = false;
	}
	function onwriteError(stream, state, er, cb) {
		--state.pendingcb;
		cb(er);
		errorBuffer(state);
		errorOrDestroy(stream, er);
	}
	function onwrite(stream, er) {
		const state = stream._writableState;
		const sync = state.sync;
		const cb = state.writecb;
		if (typeof cb !== "function") {
			errorOrDestroy(stream, new ERR_MULTIPLE_CALLBACK());
			return;
		}
		state.writing = false;
		state.writecb = null;
		state.length -= state.writelen;
		state.writelen = 0;
		if (er) {
			er.stack;
			if (!state.errored) state.errored = er;
			if (stream._readableState && !stream._readableState.errored) stream._readableState.errored = er;
			if (sync) process$3.nextTick(onwriteError, stream, state, er, cb);
			else onwriteError(stream, state, er, cb);
		} else {
			if (state.buffered.length > state.bufferedIndex) clearBuffer(stream, state);
			if (sync) if (state.afterWriteTickInfo !== null && state.afterWriteTickInfo.cb === cb) state.afterWriteTickInfo.count++;
			else {
				state.afterWriteTickInfo = {
					count: 1,
					cb,
					stream,
					state
				};
				process$3.nextTick(afterWriteTick, state.afterWriteTickInfo);
			}
			else afterWrite(stream, state, 1, cb);
		}
	}
	function afterWriteTick({ stream, state, count, cb }) {
		state.afterWriteTickInfo = null;
		return afterWrite(stream, state, count, cb);
	}
	function afterWrite(stream, state, count, cb) {
		if (!state.ending && !stream.destroyed && state.length === 0 && state.needDrain) {
			state.needDrain = false;
			stream.emit("drain");
		}
		while (count-- > 0) {
			state.pendingcb--;
			cb();
		}
		if (state.destroyed) errorBuffer(state);
		finishMaybe(stream, state);
	}
	function errorBuffer(state) {
		if (state.writing) return;
		for (let n = state.bufferedIndex; n < state.buffered.length; ++n) {
			var _state$errored;
			const { chunk, callback } = state.buffered[n];
			const len = state.objectMode ? 1 : chunk.length;
			state.length -= len;
			callback((_state$errored = state.errored) !== null && _state$errored !== void 0 ? _state$errored : new ERR_STREAM_DESTROYED("write"));
		}
		const onfinishCallbacks = state[kOnFinished].splice(0);
		for (let i = 0; i < onfinishCallbacks.length; i++) {
			var _state$errored2;
			onfinishCallbacks[i]((_state$errored2 = state.errored) !== null && _state$errored2 !== void 0 ? _state$errored2 : new ERR_STREAM_DESTROYED("end"));
		}
		resetBuffer(state);
	}
	function clearBuffer(stream, state) {
		if (state.corked || state.bufferProcessing || state.destroyed || !state.constructed) return;
		const { buffered, bufferedIndex, objectMode } = state;
		const bufferedLength = buffered.length - bufferedIndex;
		if (!bufferedLength) return;
		let i = bufferedIndex;
		state.bufferProcessing = true;
		if (bufferedLength > 1 && stream._writev) {
			state.pendingcb -= bufferedLength - 1;
			const callback = state.allNoop ? nop : (err) => {
				for (let n = i; n < buffered.length; ++n) buffered[n].callback(err);
			};
			const chunks = state.allNoop && i === 0 ? buffered : ArrayPrototypeSlice(buffered, i);
			chunks.allBuffers = state.allBuffers;
			doWrite(stream, state, true, state.length, chunks, "", callback);
			resetBuffer(state);
		} else {
			do {
				const { chunk, encoding, callback } = buffered[i];
				buffered[i++] = null;
				doWrite(stream, state, false, objectMode ? 1 : chunk.length, chunk, encoding, callback);
			} while (i < buffered.length && !state.writing);
			if (i === buffered.length) resetBuffer(state);
			else if (i > 256) {
				buffered.splice(0, i);
				state.bufferedIndex = 0;
			} else state.bufferedIndex = i;
		}
		state.bufferProcessing = false;
	}
	Writable.prototype._write = function(chunk, encoding, cb) {
		if (this._writev) this._writev([{
			chunk,
			encoding
		}], cb);
		else throw new ERR_METHOD_NOT_IMPLEMENTED("_write()");
	};
	Writable.prototype._writev = null;
	Writable.prototype.end = function(chunk, encoding, cb) {
		const state = this._writableState;
		if (typeof chunk === "function") {
			cb = chunk;
			chunk = null;
			encoding = null;
		} else if (typeof encoding === "function") {
			cb = encoding;
			encoding = null;
		}
		let err;
		if (chunk !== null && chunk !== void 0) {
			const ret = _write(this, chunk, encoding);
			if (ret instanceof Error) err = ret;
		}
		if (state.corked) {
			state.corked = 1;
			this.uncork();
		}
		if (err) {} else if (!state.errored && !state.ending) {
			state.ending = true;
			finishMaybe(this, state, true);
			state.ended = true;
		} else if (state.finished) err = new ERR_STREAM_ALREADY_FINISHED("end");
		else if (state.destroyed) err = new ERR_STREAM_DESTROYED("end");
		if (typeof cb === "function") if (err || state.finished) process$3.nextTick(cb, err);
		else state[kOnFinished].push(cb);
		return this;
	};
	function needFinish(state) {
		return state.ending && !state.destroyed && state.constructed && state.length === 0 && !state.errored && state.buffered.length === 0 && !state.finished && !state.writing && !state.errorEmitted && !state.closeEmitted;
	}
	function callFinal(stream, state) {
		let called = false;
		function onFinish(err) {
			if (called) {
				errorOrDestroy(stream, err !== null && err !== void 0 ? err : ERR_MULTIPLE_CALLBACK());
				return;
			}
			called = true;
			state.pendingcb--;
			if (err) {
				const onfinishCallbacks = state[kOnFinished].splice(0);
				for (let i = 0; i < onfinishCallbacks.length; i++) onfinishCallbacks[i](err);
				errorOrDestroy(stream, err, state.sync);
			} else if (needFinish(state)) {
				state.prefinished = true;
				stream.emit("prefinish");
				state.pendingcb++;
				process$3.nextTick(finish, stream, state);
			}
		}
		state.sync = true;
		state.pendingcb++;
		try {
			stream._final(onFinish);
		} catch (err) {
			onFinish(err);
		}
		state.sync = false;
	}
	function prefinish(stream, state) {
		if (!state.prefinished && !state.finalCalled) if (typeof stream._final === "function" && !state.destroyed) {
			state.finalCalled = true;
			callFinal(stream, state);
		} else {
			state.prefinished = true;
			stream.emit("prefinish");
		}
	}
	function finishMaybe(stream, state, sync) {
		if (needFinish(state)) {
			prefinish(stream, state);
			if (state.pendingcb === 0) {
				if (sync) {
					state.pendingcb++;
					process$3.nextTick((stream, state) => {
						if (needFinish(state)) finish(stream, state);
						else state.pendingcb--;
					}, stream, state);
				} else if (needFinish(state)) {
					state.pendingcb++;
					finish(stream, state);
				}
			}
		}
	}
	function finish(stream, state) {
		state.pendingcb--;
		state.finished = true;
		const onfinishCallbacks = state[kOnFinished].splice(0);
		for (let i = 0; i < onfinishCallbacks.length; i++) onfinishCallbacks[i]();
		stream.emit("finish");
		if (state.autoDestroy) {
			const rState = stream._readableState;
			if (!rState || rState.autoDestroy && (rState.endEmitted || rState.readable === false)) stream.destroy();
		}
	}
	ObjectDefineProperties(Writable.prototype, {
		closed: {
			__proto__: null,
			get() {
				return this._writableState ? this._writableState.closed : false;
			}
		},
		destroyed: {
			__proto__: null,
			get() {
				return this._writableState ? this._writableState.destroyed : false;
			},
			set(value) {
				if (this._writableState) this._writableState.destroyed = value;
			}
		},
		writable: {
			__proto__: null,
			get() {
				const w = this._writableState;
				return !!w && w.writable !== false && !w.destroyed && !w.errored && !w.ending && !w.ended;
			},
			set(val) {
				if (this._writableState) this._writableState.writable = !!val;
			}
		},
		writableFinished: {
			__proto__: null,
			get() {
				return this._writableState ? this._writableState.finished : false;
			}
		},
		writableObjectMode: {
			__proto__: null,
			get() {
				return this._writableState ? this._writableState.objectMode : false;
			}
		},
		writableBuffer: {
			__proto__: null,
			get() {
				return this._writableState && this._writableState.getBuffer();
			}
		},
		writableEnded: {
			__proto__: null,
			get() {
				return this._writableState ? this._writableState.ending : false;
			}
		},
		writableNeedDrain: {
			__proto__: null,
			get() {
				const wState = this._writableState;
				if (!wState) return false;
				return !wState.destroyed && !wState.ending && wState.needDrain;
			}
		},
		writableHighWaterMark: {
			__proto__: null,
			get() {
				return this._writableState && this._writableState.highWaterMark;
			}
		},
		writableCorked: {
			__proto__: null,
			get() {
				return this._writableState ? this._writableState.corked : 0;
			}
		},
		writableLength: {
			__proto__: null,
			get() {
				return this._writableState && this._writableState.length;
			}
		},
		errored: {
			__proto__: null,
			enumerable: false,
			get() {
				return this._writableState ? this._writableState.errored : null;
			}
		},
		writableAborted: {
			__proto__: null,
			enumerable: false,
			get: function() {
				return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
			}
		}
	});
	var destroy = destroyImpl.destroy;
	Writable.prototype.destroy = function(err, cb) {
		const state = this._writableState;
		if (!state.destroyed && (state.bufferedIndex < state.buffered.length || state[kOnFinished].length)) process$3.nextTick(errorBuffer, state);
		destroy.call(this, err, cb);
		return this;
	};
	Writable.prototype._undestroy = destroyImpl.undestroy;
	Writable.prototype._destroy = function(err, cb) {
		cb(err);
	};
	Writable.prototype[EE.captureRejectionSymbol] = function(err) {
		this.destroy(err);
	};
	var webStreamsAdapters;
	function lazyWebStreams() {
		if (webStreamsAdapters === void 0) webStreamsAdapters = {};
		return webStreamsAdapters;
	}
	Writable.fromWeb = function(writableStream, options) {
		return lazyWebStreams().newStreamWritableFromWritableStream(writableStream, options);
	};
	Writable.toWeb = function(streamWritable) {
		return lazyWebStreams().newWritableStreamFromStreamWritable(streamWritable);
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/duplexify.js
var require_duplexify = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var process$2 = __require("node:process");
	var bufferModule = __require("buffer");
	var { isReadable, isWritable, isIterable, isNodeStream, isReadableNodeStream, isWritableNodeStream, isDuplexNodeStream, isReadableStream, isWritableStream } = require_utils();
	var eos = require_end_of_stream();
	var { AbortError, codes: { ERR_INVALID_ARG_TYPE, ERR_INVALID_RETURN_VALUE } } = require_errors();
	var { destroyer } = require_destroy();
	var Duplex = require_duplex();
	var Readable = require_readable();
	var Writable = require_writable();
	var { createDeferredPromise } = require_util();
	var from = require_from();
	var Blob = globalThis.Blob || bufferModule.Blob;
	var isBlob = typeof Blob !== "undefined" ? function isBlob(b) {
		return b instanceof Blob;
	} : function isBlob(b) {
		return false;
	};
	var AbortController = globalThis.AbortController || (init_abort_controller(), __toCommonJS(abort_controller_exports)).AbortController;
	var { FunctionPrototypeCall } = require_primordials();
	var Duplexify = class extends Duplex {
		constructor(options) {
			super(options);
			if ((options === null || options === void 0 ? void 0 : options.readable) === false) {
				this._readableState.readable = false;
				this._readableState.ended = true;
				this._readableState.endEmitted = true;
			}
			if ((options === null || options === void 0 ? void 0 : options.writable) === false) {
				this._writableState.writable = false;
				this._writableState.ending = true;
				this._writableState.ended = true;
				this._writableState.finished = true;
			}
		}
	};
	module.exports = function duplexify(body, name) {
		if (isDuplexNodeStream(body)) return body;
		if (isReadableNodeStream(body)) return _duplexify({ readable: body });
		if (isWritableNodeStream(body)) return _duplexify({ writable: body });
		if (isNodeStream(body)) return _duplexify({
			writable: false,
			readable: false
		});
		if (isReadableStream(body)) return _duplexify({ readable: Readable.fromWeb(body) });
		if (isWritableStream(body)) return _duplexify({ writable: Writable.fromWeb(body) });
		if (typeof body === "function") {
			const { value, write, final, destroy } = fromAsyncGen(body);
			if (isIterable(value)) return from(Duplexify, value, {
				objectMode: true,
				write,
				final,
				destroy
			});
			const then = value === null || value === void 0 ? void 0 : value.then;
			if (typeof then === "function") {
				let d;
				const promise = FunctionPrototypeCall(then, value, (val) => {
					if (val != null) throw new ERR_INVALID_RETURN_VALUE("nully", "body", val);
				}, (err) => {
					destroyer(d, err);
				});
				return d = new Duplexify({
					objectMode: true,
					readable: false,
					write,
					final(cb) {
						final(async () => {
							try {
								await promise;
								process$2.nextTick(cb, null);
							} catch (err) {
								process$2.nextTick(cb, err);
							}
						});
					},
					destroy
				});
			}
			throw new ERR_INVALID_RETURN_VALUE("Iterable, AsyncIterable or AsyncFunction", name, value);
		}
		if (isBlob(body)) return duplexify(body.arrayBuffer());
		if (isIterable(body)) return from(Duplexify, body, {
			objectMode: true,
			writable: false
		});
		if (isReadableStream(body === null || body === void 0 ? void 0 : body.readable) && isWritableStream(body === null || body === void 0 ? void 0 : body.writable)) return Duplexify.fromWeb(body);
		if (typeof (body === null || body === void 0 ? void 0 : body.writable) === "object" || typeof (body === null || body === void 0 ? void 0 : body.readable) === "object") return _duplexify({
			readable: body !== null && body !== void 0 && body.readable ? isReadableNodeStream(body === null || body === void 0 ? void 0 : body.readable) ? body === null || body === void 0 ? void 0 : body.readable : duplexify(body.readable) : void 0,
			writable: body !== null && body !== void 0 && body.writable ? isWritableNodeStream(body === null || body === void 0 ? void 0 : body.writable) ? body === null || body === void 0 ? void 0 : body.writable : duplexify(body.writable) : void 0
		});
		const then = body === null || body === void 0 ? void 0 : body.then;
		if (typeof then === "function") {
			let d;
			FunctionPrototypeCall(then, body, (val) => {
				if (val != null) d.push(val);
				d.push(null);
			}, (err) => {
				destroyer(d, err);
			});
			return d = new Duplexify({
				objectMode: true,
				writable: false,
				read() {}
			});
		}
		throw new ERR_INVALID_ARG_TYPE(name, [
			"Blob",
			"ReadableStream",
			"WritableStream",
			"Stream",
			"Iterable",
			"AsyncIterable",
			"Function",
			"{ readable, writable } pair",
			"Promise"
		], body);
	};
	function fromAsyncGen(fn) {
		let { promise, resolve } = createDeferredPromise();
		const ac = new AbortController();
		const signal = ac.signal;
		return {
			value: fn((async function* () {
				while (true) {
					const _promise = promise;
					promise = null;
					const { chunk, done, cb } = await _promise;
					process$2.nextTick(cb);
					if (done) return;
					if (signal.aborted) throw new AbortError(void 0, { cause: signal.reason });
					({promise, resolve} = createDeferredPromise());
					yield chunk;
				}
			})(), { signal }),
			write(chunk, encoding, cb) {
				const _resolve = resolve;
				resolve = null;
				_resolve({
					chunk,
					done: false,
					cb
				});
			},
			final(cb) {
				const _resolve = resolve;
				resolve = null;
				_resolve({
					done: true,
					cb
				});
			},
			destroy(err, cb) {
				ac.abort();
				cb(err);
			}
		};
	}
	function _duplexify(pair) {
		const r = pair.readable && typeof pair.readable.read !== "function" ? Readable.wrap(pair.readable) : pair.readable;
		const w = pair.writable;
		let readable = !!isReadable(r);
		let writable = !!isWritable(w);
		let ondrain;
		let onfinish;
		let onreadable;
		let onclose;
		let d;
		function onfinished(err) {
			const cb = onclose;
			onclose = null;
			if (cb) cb(err);
			else if (err) d.destroy(err);
		}
		d = new Duplexify({
			readableObjectMode: !!(r !== null && r !== void 0 && r.readableObjectMode),
			writableObjectMode: !!(w !== null && w !== void 0 && w.writableObjectMode),
			readable,
			writable
		});
		if (writable) {
			eos(w, (err) => {
				writable = false;
				if (err) destroyer(r, err);
				onfinished(err);
			});
			d._write = function(chunk, encoding, callback) {
				if (w.write(chunk, encoding)) callback();
				else ondrain = callback;
			};
			d._final = function(callback) {
				w.end();
				onfinish = callback;
			};
			w.on("drain", function() {
				if (ondrain) {
					const cb = ondrain;
					ondrain = null;
					cb();
				}
			});
			w.on("finish", function() {
				if (onfinish) {
					const cb = onfinish;
					onfinish = null;
					cb();
				}
			});
		}
		if (readable) {
			eos(r, (err) => {
				readable = false;
				if (err) destroyer(r, err);
				onfinished(err);
			});
			r.on("readable", function() {
				if (onreadable) {
					const cb = onreadable;
					onreadable = null;
					cb();
				}
			});
			r.on("end", function() {
				d.push(null);
			});
			d._read = function() {
				while (true) {
					const buf = r.read();
					if (buf === null) {
						onreadable = d._read;
						return;
					}
					if (!d.push(buf)) return;
				}
			};
		}
		d._destroy = function(err, callback) {
			if (!err && onclose !== null) err = new AbortError();
			onreadable = null;
			ondrain = null;
			onfinish = null;
			if (onclose === null) callback(err);
			else {
				onclose = callback;
				destroyer(w, err);
				destroyer(r, err);
			}
		};
		return d;
	}
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/duplex.js
var require_duplex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { ObjectDefineProperties, ObjectGetOwnPropertyDescriptor, ObjectKeys, ObjectSetPrototypeOf } = require_primordials();
	module.exports = Duplex;
	var Readable = require_readable();
	var Writable = require_writable();
	ObjectSetPrototypeOf(Duplex.prototype, Readable.prototype);
	ObjectSetPrototypeOf(Duplex, Readable);
	{
		const keys = ObjectKeys(Writable.prototype);
		for (let i = 0; i < keys.length; i++) {
			const method = keys[i];
			if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
		}
	}
	function Duplex(options) {
		if (!(this instanceof Duplex)) return new Duplex(options);
		Readable.call(this, options);
		Writable.call(this, options);
		if (options) {
			this.allowHalfOpen = options.allowHalfOpen !== false;
			if (options.readable === false) {
				this._readableState.readable = false;
				this._readableState.ended = true;
				this._readableState.endEmitted = true;
			}
			if (options.writable === false) {
				this._writableState.writable = false;
				this._writableState.ending = true;
				this._writableState.ended = true;
				this._writableState.finished = true;
			}
		} else this.allowHalfOpen = true;
	}
	ObjectDefineProperties(Duplex.prototype, {
		writable: {
			__proto__: null,
			...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writable")
		},
		writableHighWaterMark: {
			__proto__: null,
			...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableHighWaterMark")
		},
		writableObjectMode: {
			__proto__: null,
			...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableObjectMode")
		},
		writableBuffer: {
			__proto__: null,
			...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableBuffer")
		},
		writableLength: {
			__proto__: null,
			...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableLength")
		},
		writableFinished: {
			__proto__: null,
			...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableFinished")
		},
		writableCorked: {
			__proto__: null,
			...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableCorked")
		},
		writableEnded: {
			__proto__: null,
			...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableEnded")
		},
		writableNeedDrain: {
			__proto__: null,
			...ObjectGetOwnPropertyDescriptor(Writable.prototype, "writableNeedDrain")
		},
		destroyed: {
			__proto__: null,
			get() {
				if (this._readableState === void 0 || this._writableState === void 0) return false;
				return this._readableState.destroyed && this._writableState.destroyed;
			},
			set(value) {
				if (this._readableState && this._writableState) {
					this._readableState.destroyed = value;
					this._writableState.destroyed = value;
				}
			}
		}
	});
	var webStreamsAdapters;
	function lazyWebStreams() {
		if (webStreamsAdapters === void 0) webStreamsAdapters = {};
		return webStreamsAdapters;
	}
	Duplex.fromWeb = function(pair, options) {
		return lazyWebStreams().newStreamDuplexFromReadableWritablePair(pair, options);
	};
	Duplex.toWeb = function(duplex) {
		return lazyWebStreams().newReadableWritablePairFromDuplex(duplex);
	};
	var duplexify;
	Duplex.from = function(body) {
		if (!duplexify) duplexify = require_duplexify();
		return duplexify(body, "body");
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/transform.js
var require_transform = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { ObjectSetPrototypeOf, Symbol } = require_primordials();
	module.exports = Transform;
	var { ERR_METHOD_NOT_IMPLEMENTED } = require_errors().codes;
	var Duplex = require_duplex();
	var { getHighWaterMark } = require_state();
	ObjectSetPrototypeOf(Transform.prototype, Duplex.prototype);
	ObjectSetPrototypeOf(Transform, Duplex);
	var kCallback = Symbol("kCallback");
	function Transform(options) {
		if (!(this instanceof Transform)) return new Transform(options);
		const readableHighWaterMark = options ? getHighWaterMark(this, options, "readableHighWaterMark", true) : null;
		if (readableHighWaterMark === 0) options = {
			...options,
			highWaterMark: null,
			readableHighWaterMark,
			writableHighWaterMark: options.writableHighWaterMark || 0
		};
		Duplex.call(this, options);
		this._readableState.sync = false;
		this[kCallback] = null;
		if (options) {
			if (typeof options.transform === "function") this._transform = options.transform;
			if (typeof options.flush === "function") this._flush = options.flush;
		}
		this.on("prefinish", prefinish);
	}
	function final(cb) {
		if (typeof this._flush === "function" && !this.destroyed) this._flush((er, data) => {
			if (er) {
				if (cb) cb(er);
				else this.destroy(er);
				return;
			}
			if (data != null) this.push(data);
			this.push(null);
			if (cb) cb();
		});
		else {
			this.push(null);
			if (cb) cb();
		}
	}
	function prefinish() {
		if (this._final !== final) final.call(this);
	}
	Transform.prototype._final = final;
	Transform.prototype._transform = function(chunk, encoding, callback) {
		throw new ERR_METHOD_NOT_IMPLEMENTED("_transform()");
	};
	Transform.prototype._write = function(chunk, encoding, callback) {
		const rState = this._readableState;
		const wState = this._writableState;
		const length = rState.length;
		this._transform(chunk, encoding, (err, val) => {
			if (err) {
				callback(err);
				return;
			}
			if (val != null) this.push(val);
			if (wState.ended || length === rState.length || rState.length < rState.highWaterMark) callback();
			else this[kCallback] = callback;
		});
	};
	Transform.prototype._read = function() {
		if (this[kCallback]) {
			const callback = this[kCallback];
			this[kCallback] = null;
			callback();
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/passthrough.js
var require_passthrough = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { ObjectSetPrototypeOf } = require_primordials();
	module.exports = PassThrough;
	var Transform = require_transform();
	ObjectSetPrototypeOf(PassThrough.prototype, Transform.prototype);
	ObjectSetPrototypeOf(PassThrough, Transform);
	function PassThrough(options) {
		if (!(this instanceof PassThrough)) return new PassThrough(options);
		Transform.call(this, options);
	}
	PassThrough.prototype._transform = function(chunk, encoding, cb) {
		cb(null, chunk);
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var process$1 = __require("node:process");
	var { ArrayIsArray, Promise, SymbolAsyncIterator, SymbolDispose } = require_primordials();
	var eos = require_end_of_stream();
	var { once } = require_util();
	var destroyImpl = require_destroy();
	var Duplex = require_duplex();
	var { aggregateTwoErrors, codes: { ERR_INVALID_ARG_TYPE, ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS, ERR_STREAM_DESTROYED, ERR_STREAM_PREMATURE_CLOSE }, AbortError } = require_errors();
	var { validateFunction, validateAbortSignal } = require_validators();
	var { isIterable, isReadable, isReadableNodeStream, isNodeStream, isTransformStream, isWebStream, isReadableStream, isReadableFinished } = require_utils();
	var AbortController = globalThis.AbortController || (init_abort_controller(), __toCommonJS(abort_controller_exports)).AbortController;
	var PassThrough;
	var Readable;
	var addAbortListener;
	function destroyer(stream, reading, writing) {
		let finished = false;
		stream.on("close", () => {
			finished = true;
		});
		return {
			destroy: (err) => {
				if (finished) return;
				finished = true;
				destroyImpl.destroyer(stream, err || new ERR_STREAM_DESTROYED("pipe"));
			},
			cleanup: eos(stream, {
				readable: reading,
				writable: writing
			}, (err) => {
				finished = !err;
			})
		};
	}
	function popCallback(streams) {
		validateFunction(streams[streams.length - 1], "streams[stream.length - 1]");
		return streams.pop();
	}
	function makeAsyncIterable(val) {
		if (isIterable(val)) return val;
		else if (isReadableNodeStream(val)) return fromReadable(val);
		throw new ERR_INVALID_ARG_TYPE("val", [
			"Readable",
			"Iterable",
			"AsyncIterable"
		], val);
	}
	async function* fromReadable(val) {
		if (!Readable) Readable = require_readable();
		yield* Readable.prototype[SymbolAsyncIterator].call(val);
	}
	async function pumpToNode(iterable, writable, finish, { end }) {
		let error;
		let onresolve = null;
		const resume = (err) => {
			if (err) error = err;
			if (onresolve) {
				const callback = onresolve;
				onresolve = null;
				callback();
			}
		};
		const wait = () => new Promise((resolve, reject) => {
			if (error) reject(error);
			else onresolve = () => {
				if (error) reject(error);
				else resolve();
			};
		});
		writable.on("drain", resume);
		const cleanup = eos(writable, { readable: false }, resume);
		try {
			if (writable.writableNeedDrain) await wait();
			for await (const chunk of iterable) if (!writable.write(chunk)) await wait();
			if (end) {
				writable.end();
				await wait();
			}
			finish();
		} catch (err) {
			finish(error !== err ? aggregateTwoErrors(error, err) : err);
		} finally {
			cleanup();
			writable.off("drain", resume);
		}
	}
	async function pumpToWeb(readable, writable, finish, { end }) {
		if (isTransformStream(writable)) writable = writable.writable;
		const writer = writable.getWriter();
		try {
			for await (const chunk of readable) {
				await writer.ready;
				writer.write(chunk).catch(() => {});
			}
			await writer.ready;
			if (end) await writer.close();
			finish();
		} catch (err) {
			try {
				await writer.abort(err);
				finish(err);
			} catch (err) {
				finish(err);
			}
		}
	}
	function pipeline(...streams) {
		return pipelineImpl(streams, once(popCallback(streams)));
	}
	function pipelineImpl(streams, callback, opts) {
		if (streams.length === 1 && ArrayIsArray(streams[0])) streams = streams[0];
		if (streams.length < 2) throw new ERR_MISSING_ARGS("streams");
		const ac = new AbortController();
		const signal = ac.signal;
		const outerSignal = opts === null || opts === void 0 ? void 0 : opts.signal;
		const lastStreamCleanup = [];
		validateAbortSignal(outerSignal, "options.signal");
		function abort() {
			finishImpl(new AbortError());
		}
		addAbortListener = addAbortListener || require_util().addAbortListener;
		let disposable;
		if (outerSignal) disposable = addAbortListener(outerSignal, abort);
		let error;
		let value;
		const destroys = [];
		let finishCount = 0;
		function finish(err) {
			finishImpl(err, --finishCount === 0);
		}
		function finishImpl(err, final) {
			var _disposable;
			if (err && (!error || error.code === "ERR_STREAM_PREMATURE_CLOSE")) error = err;
			if (!error && !final) return;
			while (destroys.length) destroys.shift()(error);
			(_disposable = disposable) === null || _disposable === void 0 || _disposable[SymbolDispose]();
			ac.abort();
			if (final) {
				if (!error) lastStreamCleanup.forEach((fn) => fn());
				process$1.nextTick(callback, error, value);
			}
		}
		let ret;
		for (let i = 0; i < streams.length; i++) {
			const stream = streams[i];
			const reading = i < streams.length - 1;
			const writing = i > 0;
			const end = reading || (opts === null || opts === void 0 ? void 0 : opts.end) !== false;
			const isLastStream = i === streams.length - 1;
			if (isNodeStream(stream)) {
				if (end) {
					const { destroy, cleanup } = destroyer(stream, reading, writing);
					destroys.push(destroy);
					if (isReadable(stream) && isLastStream) lastStreamCleanup.push(cleanup);
				}
				function onError(err) {
					if (err && err.name !== "AbortError" && err.code !== "ERR_STREAM_PREMATURE_CLOSE") finish(err);
				}
				stream.on("error", onError);
				if (isReadable(stream) && isLastStream) lastStreamCleanup.push(() => {
					stream.removeListener("error", onError);
				});
			}
			if (i === 0) if (typeof stream === "function") {
				ret = stream({ signal });
				if (!isIterable(ret)) throw new ERR_INVALID_RETURN_VALUE("Iterable, AsyncIterable or Stream", "source", ret);
			} else if (isIterable(stream) || isReadableNodeStream(stream) || isTransformStream(stream)) ret = stream;
			else ret = Duplex.from(stream);
			else if (typeof stream === "function") {
				if (isTransformStream(ret)) {
					var _ret;
					ret = makeAsyncIterable((_ret = ret) === null || _ret === void 0 ? void 0 : _ret.readable);
				} else ret = makeAsyncIterable(ret);
				ret = stream(ret, { signal });
				if (reading) {
					if (!isIterable(ret, true)) throw new ERR_INVALID_RETURN_VALUE("AsyncIterable", `transform[${i - 1}]`, ret);
				} else {
					var _ret2;
					if (!PassThrough) PassThrough = require_passthrough();
					const pt = new PassThrough({ objectMode: true });
					const then = (_ret2 = ret) === null || _ret2 === void 0 ? void 0 : _ret2.then;
					if (typeof then === "function") {
						finishCount++;
						then.call(ret, (val) => {
							value = val;
							if (val != null) pt.write(val);
							if (end) pt.end();
							process$1.nextTick(finish);
						}, (err) => {
							pt.destroy(err);
							process$1.nextTick(finish, err);
						});
					} else if (isIterable(ret, true)) {
						finishCount++;
						pumpToNode(ret, pt, finish, { end });
					} else if (isReadableStream(ret) || isTransformStream(ret)) {
						const toRead = ret.readable || ret;
						finishCount++;
						pumpToNode(toRead, pt, finish, { end });
					} else throw new ERR_INVALID_RETURN_VALUE("AsyncIterable or Promise", "destination", ret);
					ret = pt;
					const { destroy, cleanup } = destroyer(ret, false, true);
					destroys.push(destroy);
					if (isLastStream) lastStreamCleanup.push(cleanup);
				}
			} else if (isNodeStream(stream)) {
				if (isReadableNodeStream(ret)) {
					finishCount += 2;
					const cleanup = pipe(ret, stream, finish, { end });
					if (isReadable(stream) && isLastStream) lastStreamCleanup.push(cleanup);
				} else if (isTransformStream(ret) || isReadableStream(ret)) {
					const toRead = ret.readable || ret;
					finishCount++;
					pumpToNode(toRead, stream, finish, { end });
				} else if (isIterable(ret)) {
					finishCount++;
					pumpToNode(ret, stream, finish, { end });
				} else throw new ERR_INVALID_ARG_TYPE("val", [
					"Readable",
					"Iterable",
					"AsyncIterable",
					"ReadableStream",
					"TransformStream"
				], ret);
				ret = stream;
			} else if (isWebStream(stream)) {
				if (isReadableNodeStream(ret)) {
					finishCount++;
					pumpToWeb(makeAsyncIterable(ret), stream, finish, { end });
				} else if (isReadableStream(ret) || isIterable(ret)) {
					finishCount++;
					pumpToWeb(ret, stream, finish, { end });
				} else if (isTransformStream(ret)) {
					finishCount++;
					pumpToWeb(ret.readable, stream, finish, { end });
				} else throw new ERR_INVALID_ARG_TYPE("val", [
					"Readable",
					"Iterable",
					"AsyncIterable",
					"ReadableStream",
					"TransformStream"
				], ret);
				ret = stream;
			} else ret = Duplex.from(stream);
		}
		if (signal !== null && signal !== void 0 && signal.aborted || outerSignal !== null && outerSignal !== void 0 && outerSignal.aborted) process$1.nextTick(abort);
		return ret;
	}
	function pipe(src, dst, finish, { end }) {
		let ended = false;
		dst.on("close", () => {
			if (!ended) finish(new ERR_STREAM_PREMATURE_CLOSE());
		});
		src.pipe(dst, { end: false });
		if (end) {
			function endFn() {
				ended = true;
				dst.end();
			}
			if (isReadableFinished(src)) process$1.nextTick(endFn);
			else src.once("end", endFn);
		} else finish();
		eos(src, {
			readable: true,
			writable: false
		}, (err) => {
			const rState = src._readableState;
			if (err && err.code === "ERR_STREAM_PREMATURE_CLOSE" && rState && rState.ended && !rState.errored && !rState.errorEmitted) src.once("end", finish).once("error", finish);
			else finish(err);
		});
		return eos(dst, {
			readable: false,
			writable: true
		}, finish);
	}
	module.exports = {
		pipelineImpl,
		pipeline
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/compose.js
var require_compose = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { pipeline } = require_pipeline();
	var Duplex = require_duplex();
	var { destroyer } = require_destroy();
	var { isNodeStream, isReadable, isWritable, isWebStream, isTransformStream, isWritableStream, isReadableStream } = require_utils();
	var { AbortError, codes: { ERR_INVALID_ARG_VALUE, ERR_MISSING_ARGS } } = require_errors();
	var eos = require_end_of_stream();
	module.exports = function compose(...streams) {
		if (streams.length === 0) throw new ERR_MISSING_ARGS("streams");
		if (streams.length === 1) return Duplex.from(streams[0]);
		const orgStreams = [...streams];
		if (typeof streams[0] === "function") streams[0] = Duplex.from(streams[0]);
		if (typeof streams[streams.length - 1] === "function") {
			const idx = streams.length - 1;
			streams[idx] = Duplex.from(streams[idx]);
		}
		for (let n = 0; n < streams.length; ++n) {
			if (!isNodeStream(streams[n]) && !isWebStream(streams[n])) continue;
			if (n < streams.length - 1 && !(isReadable(streams[n]) || isReadableStream(streams[n]) || isTransformStream(streams[n]))) throw new ERR_INVALID_ARG_VALUE(`streams[${n}]`, orgStreams[n], "must be readable");
			if (n > 0 && !(isWritable(streams[n]) || isWritableStream(streams[n]) || isTransformStream(streams[n]))) throw new ERR_INVALID_ARG_VALUE(`streams[${n}]`, orgStreams[n], "must be writable");
		}
		let ondrain;
		let onfinish;
		let onreadable;
		let onclose;
		let d;
		function onfinished(err) {
			const cb = onclose;
			onclose = null;
			if (cb) cb(err);
			else if (err) d.destroy(err);
			else if (!readable && !writable) d.destroy();
		}
		const head = streams[0];
		const tail = pipeline(streams, onfinished);
		const writable = !!(isWritable(head) || isWritableStream(head) || isTransformStream(head));
		const readable = !!(isReadable(tail) || isReadableStream(tail) || isTransformStream(tail));
		d = new Duplex({
			writableObjectMode: !!(head !== null && head !== void 0 && head.writableObjectMode),
			readableObjectMode: !!(tail !== null && tail !== void 0 && tail.readableObjectMode),
			writable,
			readable
		});
		if (writable) {
			if (isNodeStream(head)) {
				d._write = function(chunk, encoding, callback) {
					if (head.write(chunk, encoding)) callback();
					else ondrain = callback;
				};
				d._final = function(callback) {
					head.end();
					onfinish = callback;
				};
				head.on("drain", function() {
					if (ondrain) {
						const cb = ondrain;
						ondrain = null;
						cb();
					}
				});
			} else if (isWebStream(head)) {
				const writer = (isTransformStream(head) ? head.writable : head).getWriter();
				d._write = async function(chunk, encoding, callback) {
					try {
						await writer.ready;
						writer.write(chunk).catch(() => {});
						callback();
					} catch (err) {
						callback(err);
					}
				};
				d._final = async function(callback) {
					try {
						await writer.ready;
						writer.close().catch(() => {});
						onfinish = callback;
					} catch (err) {
						callback(err);
					}
				};
			}
			eos(isTransformStream(tail) ? tail.readable : tail, () => {
				if (onfinish) {
					const cb = onfinish;
					onfinish = null;
					cb();
				}
			});
		}
		if (readable) {
			if (isNodeStream(tail)) {
				tail.on("readable", function() {
					if (onreadable) {
						const cb = onreadable;
						onreadable = null;
						cb();
					}
				});
				tail.on("end", function() {
					d.push(null);
				});
				d._read = function() {
					while (true) {
						const buf = tail.read();
						if (buf === null) {
							onreadable = d._read;
							return;
						}
						if (!d.push(buf)) return;
					}
				};
			} else if (isWebStream(tail)) {
				const reader = (isTransformStream(tail) ? tail.readable : tail).getReader();
				d._read = async function() {
					while (true) try {
						const { value, done } = await reader.read();
						if (!d.push(value)) return;
						if (done) {
							d.push(null);
							return;
						}
					} catch {
						return;
					}
				};
			}
		}
		d._destroy = function(err, callback) {
			if (!err && onclose !== null) err = new AbortError();
			onreadable = null;
			ondrain = null;
			onfinish = null;
			if (onclose === null) callback(err);
			else {
				onclose = callback;
				if (isNodeStream(tail)) destroyer(tail, err);
			}
		};
		return d;
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/internal/streams/operators.js
var require_operators = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var AbortController = globalThis.AbortController || (init_abort_controller(), __toCommonJS(abort_controller_exports)).AbortController;
	var { codes: { ERR_INVALID_ARG_VALUE, ERR_INVALID_ARG_TYPE, ERR_MISSING_ARGS, ERR_OUT_OF_RANGE }, AbortError } = require_errors();
	var { validateAbortSignal, validateInteger, validateObject } = require_validators();
	var kWeakHandler = require_primordials().Symbol("kWeak");
	var kResistStopPropagation = require_primordials().Symbol("kResistStopPropagation");
	var { finished } = require_end_of_stream();
	var staticCompose = require_compose();
	var { addAbortSignalNoValidate } = require_add_abort_signal();
	var { isWritable, isNodeStream } = require_utils();
	var { deprecate } = require_util();
	var { ArrayPrototypePush, Boolean, MathFloor, Number, NumberIsNaN, Promise, PromiseReject, PromiseResolve, PromisePrototypeThen, Symbol } = require_primordials();
	var kEmpty = Symbol("kEmpty");
	var kEof = Symbol("kEof");
	function compose(stream, options) {
		if (options != null) validateObject(options, "options");
		if ((options === null || options === void 0 ? void 0 : options.signal) != null) validateAbortSignal(options.signal, "options.signal");
		if (isNodeStream(stream) && !isWritable(stream)) throw new ERR_INVALID_ARG_VALUE("stream", stream, "must be writable");
		const composedStream = staticCompose(this, stream);
		if (options !== null && options !== void 0 && options.signal) addAbortSignalNoValidate(options.signal, composedStream);
		return composedStream;
	}
	function map(fn, options) {
		if (typeof fn !== "function") throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
		if (options != null) validateObject(options, "options");
		if ((options === null || options === void 0 ? void 0 : options.signal) != null) validateAbortSignal(options.signal, "options.signal");
		let concurrency = 1;
		if ((options === null || options === void 0 ? void 0 : options.concurrency) != null) concurrency = MathFloor(options.concurrency);
		let highWaterMark = concurrency - 1;
		if ((options === null || options === void 0 ? void 0 : options.highWaterMark) != null) highWaterMark = MathFloor(options.highWaterMark);
		validateInteger(concurrency, "options.concurrency", 1);
		validateInteger(highWaterMark, "options.highWaterMark", 0);
		highWaterMark += concurrency;
		return async function* map() {
			const signal = require_util().AbortSignalAny([options === null || options === void 0 ? void 0 : options.signal].filter(Boolean));
			const stream = this;
			const queue = [];
			const signalOpt = { signal };
			let next;
			let resume;
			let done = false;
			let cnt = 0;
			function onCatch() {
				done = true;
				afterItemProcessed();
			}
			function afterItemProcessed() {
				cnt -= 1;
				maybeResume();
			}
			function maybeResume() {
				if (resume && !done && cnt < concurrency && queue.length < highWaterMark) {
					resume();
					resume = null;
				}
			}
			async function pump() {
				try {
					for await (let val of stream) {
						if (done) return;
						if (signal.aborted) throw new AbortError();
						try {
							val = fn(val, signalOpt);
							if (val === kEmpty) continue;
							val = PromiseResolve(val);
						} catch (err) {
							val = PromiseReject(err);
						}
						cnt += 1;
						PromisePrototypeThen(val, afterItemProcessed, onCatch);
						queue.push(val);
						if (next) {
							next();
							next = null;
						}
						if (!done && (queue.length >= highWaterMark || cnt >= concurrency)) await new Promise((resolve) => {
							resume = resolve;
						});
					}
					queue.push(kEof);
				} catch (err) {
					const val = PromiseReject(err);
					PromisePrototypeThen(val, afterItemProcessed, onCatch);
					queue.push(val);
				} finally {
					done = true;
					if (next) {
						next();
						next = null;
					}
				}
			}
			pump();
			try {
				while (true) {
					while (queue.length > 0) {
						const val = await queue[0];
						if (val === kEof) return;
						if (signal.aborted) throw new AbortError();
						if (val !== kEmpty) yield val;
						queue.shift();
						maybeResume();
					}
					await new Promise((resolve) => {
						next = resolve;
					});
				}
			} finally {
				done = true;
				if (resume) {
					resume();
					resume = null;
				}
			}
		}.call(this);
	}
	function asIndexedPairs(options = void 0) {
		if (options != null) validateObject(options, "options");
		if ((options === null || options === void 0 ? void 0 : options.signal) != null) validateAbortSignal(options.signal, "options.signal");
		return async function* asIndexedPairs() {
			let index = 0;
			for await (const val of this) {
				var _options$signal;
				if (options !== null && options !== void 0 && (_options$signal = options.signal) !== null && _options$signal !== void 0 && _options$signal.aborted) throw new AbortError({ cause: options.signal.reason });
				yield [index++, val];
			}
		}.call(this);
	}
	async function some(fn, options = void 0) {
		for await (const unused of filter.call(this, fn, options)) return true;
		return false;
	}
	async function every(fn, options = void 0) {
		if (typeof fn !== "function") throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
		return !await some.call(this, async (...args) => {
			return !await fn(...args);
		}, options);
	}
	async function find(fn, options) {
		for await (const result of filter.call(this, fn, options)) return result;
	}
	async function forEach(fn, options) {
		if (typeof fn !== "function") throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
		async function forEachFn(value, options) {
			await fn(value, options);
			return kEmpty;
		}
		for await (const unused of map.call(this, forEachFn, options));
	}
	function filter(fn, options) {
		if (typeof fn !== "function") throw new ERR_INVALID_ARG_TYPE("fn", ["Function", "AsyncFunction"], fn);
		async function filterFn(value, options) {
			if (await fn(value, options)) return value;
			return kEmpty;
		}
		return map.call(this, filterFn, options);
	}
	var ReduceAwareErrMissingArgs = class extends ERR_MISSING_ARGS {
		constructor() {
			super("reduce");
			this.message = "Reduce of an empty stream requires an initial value";
		}
	};
	async function reduce(reducer, initialValue, options) {
		var _options$signal2;
		if (typeof reducer !== "function") throw new ERR_INVALID_ARG_TYPE("reducer", ["Function", "AsyncFunction"], reducer);
		if (options != null) validateObject(options, "options");
		if ((options === null || options === void 0 ? void 0 : options.signal) != null) validateAbortSignal(options.signal, "options.signal");
		let hasInitialValue = arguments.length > 1;
		if (options !== null && options !== void 0 && (_options$signal2 = options.signal) !== null && _options$signal2 !== void 0 && _options$signal2.aborted) {
			const err = new AbortError(void 0, { cause: options.signal.reason });
			this.once("error", () => {});
			await finished(this.destroy(err));
			throw err;
		}
		const ac = new AbortController();
		const signal = ac.signal;
		if (options !== null && options !== void 0 && options.signal) {
			const opts = {
				once: true,
				[kWeakHandler]: this,
				[kResistStopPropagation]: true
			};
			options.signal.addEventListener("abort", () => ac.abort(), opts);
		}
		let gotAnyItemFromStream = false;
		try {
			for await (const value of this) {
				var _options$signal3;
				gotAnyItemFromStream = true;
				if (options !== null && options !== void 0 && (_options$signal3 = options.signal) !== null && _options$signal3 !== void 0 && _options$signal3.aborted) throw new AbortError();
				if (!hasInitialValue) {
					initialValue = value;
					hasInitialValue = true;
				} else initialValue = await reducer(initialValue, value, { signal });
			}
			if (!gotAnyItemFromStream && !hasInitialValue) throw new ReduceAwareErrMissingArgs();
		} finally {
			ac.abort();
		}
		return initialValue;
	}
	async function toArray(options) {
		if (options != null) validateObject(options, "options");
		if ((options === null || options === void 0 ? void 0 : options.signal) != null) validateAbortSignal(options.signal, "options.signal");
		const result = [];
		for await (const val of this) {
			var _options$signal4;
			if (options !== null && options !== void 0 && (_options$signal4 = options.signal) !== null && _options$signal4 !== void 0 && _options$signal4.aborted) throw new AbortError(void 0, { cause: options.signal.reason });
			ArrayPrototypePush(result, val);
		}
		return result;
	}
	function flatMap(fn, options) {
		const values = map.call(this, fn, options);
		return async function* flatMap() {
			for await (const val of values) yield* val;
		}.call(this);
	}
	function toIntegerOrInfinity(number) {
		number = Number(number);
		if (NumberIsNaN(number)) return 0;
		if (number < 0) throw new ERR_OUT_OF_RANGE("number", ">= 0", number);
		return number;
	}
	function drop(number, options = void 0) {
		if (options != null) validateObject(options, "options");
		if ((options === null || options === void 0 ? void 0 : options.signal) != null) validateAbortSignal(options.signal, "options.signal");
		number = toIntegerOrInfinity(number);
		return async function* drop() {
			var _options$signal5;
			if (options !== null && options !== void 0 && (_options$signal5 = options.signal) !== null && _options$signal5 !== void 0 && _options$signal5.aborted) throw new AbortError();
			for await (const val of this) {
				var _options$signal6;
				if (options !== null && options !== void 0 && (_options$signal6 = options.signal) !== null && _options$signal6 !== void 0 && _options$signal6.aborted) throw new AbortError();
				if (number-- <= 0) yield val;
			}
		}.call(this);
	}
	function take(number, options = void 0) {
		if (options != null) validateObject(options, "options");
		if ((options === null || options === void 0 ? void 0 : options.signal) != null) validateAbortSignal(options.signal, "options.signal");
		number = toIntegerOrInfinity(number);
		return async function* take() {
			var _options$signal7;
			if (options !== null && options !== void 0 && (_options$signal7 = options.signal) !== null && _options$signal7 !== void 0 && _options$signal7.aborted) throw new AbortError();
			for await (const val of this) {
				var _options$signal8;
				if (options !== null && options !== void 0 && (_options$signal8 = options.signal) !== null && _options$signal8 !== void 0 && _options$signal8.aborted) throw new AbortError();
				if (number-- > 0) yield val;
				if (number <= 0) return;
			}
		}.call(this);
	}
	module.exports.streamReturningOperators = {
		asIndexedPairs: deprecate(asIndexedPairs, "readable.asIndexedPairs will be removed in a future version."),
		drop,
		filter,
		flatMap,
		map,
		take,
		compose
	};
	module.exports.promiseReturningOperators = {
		every,
		forEach,
		reduce,
		toArray,
		some,
		find
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/stream/promises.js
var require_promises = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { ArrayPrototypePop, Promise } = require_primordials();
	var { isIterable, isNodeStream, isWebStream } = require_utils();
	var { pipelineImpl: pl } = require_pipeline();
	var { finished } = require_end_of_stream();
	require_stream();
	function pipeline(...streams) {
		return new Promise((resolve, reject) => {
			let signal;
			let end;
			const lastArg = streams[streams.length - 1];
			if (lastArg && typeof lastArg === "object" && !isNodeStream(lastArg) && !isIterable(lastArg) && !isWebStream(lastArg)) {
				const options = ArrayPrototypePop(streams);
				signal = options.signal;
				end = options.end;
			}
			pl(streams, (err, value) => {
				if (err) reject(err);
				else resolve(value);
			}, {
				signal,
				end
			});
		});
	}
	module.exports = {
		finished,
		pipeline
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/stream.js
var require_stream = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { Buffer: Buffer$1 } = __require("buffer");
	var { ObjectDefineProperty, ObjectKeys, ReflectApply } = require_primordials();
	var { promisify: { custom: customPromisify } } = require_util();
	var { streamReturningOperators, promiseReturningOperators } = require_operators();
	var { codes: { ERR_ILLEGAL_CONSTRUCTOR } } = require_errors();
	var compose = require_compose();
	var { setDefaultHighWaterMark, getDefaultHighWaterMark } = require_state();
	var { pipeline } = require_pipeline();
	var { destroyer } = require_destroy();
	var eos = require_end_of_stream();
	var promises = require_promises();
	var utils = require_utils();
	var Stream = module.exports = require_legacy().Stream;
	Stream.isDestroyed = utils.isDestroyed;
	Stream.isDisturbed = utils.isDisturbed;
	Stream.isErrored = utils.isErrored;
	Stream.isReadable = utils.isReadable;
	Stream.isWritable = utils.isWritable;
	Stream.Readable = require_readable();
	for (const key of ObjectKeys(streamReturningOperators)) {
		const op = streamReturningOperators[key];
		function fn(...args) {
			if (new.target) throw ERR_ILLEGAL_CONSTRUCTOR();
			return Stream.Readable.from(ReflectApply(op, this, args));
		}
		ObjectDefineProperty(fn, "name", {
			__proto__: null,
			value: op.name
		});
		ObjectDefineProperty(fn, "length", {
			__proto__: null,
			value: op.length
		});
		ObjectDefineProperty(Stream.Readable.prototype, key, {
			__proto__: null,
			value: fn,
			enumerable: false,
			configurable: true,
			writable: true
		});
	}
	for (const key of ObjectKeys(promiseReturningOperators)) {
		const op = promiseReturningOperators[key];
		function fn(...args) {
			if (new.target) throw ERR_ILLEGAL_CONSTRUCTOR();
			return ReflectApply(op, this, args);
		}
		ObjectDefineProperty(fn, "name", {
			__proto__: null,
			value: op.name
		});
		ObjectDefineProperty(fn, "length", {
			__proto__: null,
			value: op.length
		});
		ObjectDefineProperty(Stream.Readable.prototype, key, {
			__proto__: null,
			value: fn,
			enumerable: false,
			configurable: true,
			writable: true
		});
	}
	Stream.Writable = require_writable();
	Stream.Duplex = require_duplex();
	Stream.Transform = require_transform();
	Stream.PassThrough = require_passthrough();
	Stream.pipeline = pipeline;
	var { addAbortSignal } = require_add_abort_signal();
	Stream.addAbortSignal = addAbortSignal;
	Stream.finished = eos;
	Stream.destroy = destroyer;
	Stream.compose = compose;
	Stream.setDefaultHighWaterMark = setDefaultHighWaterMark;
	Stream.getDefaultHighWaterMark = getDefaultHighWaterMark;
	ObjectDefineProperty(Stream, "promises", {
		__proto__: null,
		configurable: true,
		enumerable: true,
		get() {
			return promises;
		}
	});
	ObjectDefineProperty(pipeline, customPromisify, {
		__proto__: null,
		enumerable: true,
		get() {
			return promises.pipeline;
		}
	});
	ObjectDefineProperty(eos, customPromisify, {
		__proto__: null,
		enumerable: true,
		get() {
			return promises.finished;
		}
	});
	Stream.Stream = Stream;
	Stream._isUint8Array = function isUint8Array(value) {
		return value instanceof Uint8Array;
	};
	Stream._uint8ArrayToBuffer = function _uint8ArrayToBuffer(chunk) {
		return Buffer$1.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@4.7.0/node_modules/readable-stream/lib/ours/index.js
var require_ours = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stream = __require("stream");
	if (Stream && process.env.READABLE_STREAM === "disable") {
		const promises = Stream.promises;
		module.exports._uint8ArrayToBuffer = Stream._uint8ArrayToBuffer;
		module.exports._isUint8Array = Stream._isUint8Array;
		module.exports.isDisturbed = Stream.isDisturbed;
		module.exports.isErrored = Stream.isErrored;
		module.exports.isReadable = Stream.isReadable;
		module.exports.Readable = Stream.Readable;
		module.exports.Writable = Stream.Writable;
		module.exports.Duplex = Stream.Duplex;
		module.exports.Transform = Stream.Transform;
		module.exports.PassThrough = Stream.PassThrough;
		module.exports.addAbortSignal = Stream.addAbortSignal;
		module.exports.finished = Stream.finished;
		module.exports.destroy = Stream.destroy;
		module.exports.pipeline = Stream.pipeline;
		module.exports.compose = Stream.compose;
		Object.defineProperty(Stream, "promises", {
			configurable: true,
			enumerable: true,
			get() {
				return promises;
			}
		});
		module.exports.Stream = Stream.Stream;
	} else {
		const CustomStream = require_stream();
		const promises = require_promises();
		const originalDestroy = CustomStream.Readable.destroy;
		module.exports = CustomStream.Readable;
		module.exports._uint8ArrayToBuffer = CustomStream._uint8ArrayToBuffer;
		module.exports._isUint8Array = CustomStream._isUint8Array;
		module.exports.isDisturbed = CustomStream.isDisturbed;
		module.exports.isErrored = CustomStream.isErrored;
		module.exports.isReadable = CustomStream.isReadable;
		module.exports.Readable = CustomStream.Readable;
		module.exports.Writable = CustomStream.Writable;
		module.exports.Duplex = CustomStream.Duplex;
		module.exports.Transform = CustomStream.Transform;
		module.exports.PassThrough = CustomStream.PassThrough;
		module.exports.addAbortSignal = CustomStream.addAbortSignal;
		module.exports.finished = CustomStream.finished;
		module.exports.destroy = CustomStream.destroy;
		module.exports.destroy = originalDestroy;
		module.exports.pipeline = CustomStream.pipeline;
		module.exports.compose = CustomStream.compose;
		Object.defineProperty(CustomStream, "promises", {
			configurable: true,
			enumerable: true,
			get() {
				return promises;
			}
		});
		module.exports.Stream = CustomStream.Stream;
	}
	module.exports.default = module.exports;
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/serializer.js
var require_serializer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Transform = require_ours().Transform;
	var Serializer = class extends Transform {
		constructor(proto, mainType) {
			super({ writableObjectMode: true });
			this.proto = proto;
			this.mainType = mainType;
			this.queue = Buffer.alloc(0);
		}
		createPacketBuffer(packet) {
			return this.proto.createPacketBuffer(this.mainType, packet);
		}
		_transform(chunk, enc, cb) {
			let buf;
			try {
				buf = this.createPacketBuffer(chunk);
			} catch (e) {
				return cb(e);
			}
			this.push(buf);
			return cb();
		}
	};
	var Parser = class extends Transform {
		constructor(proto, mainType) {
			super({ readableObjectMode: true });
			this.proto = proto;
			this.mainType = mainType;
			this.queue = Buffer.alloc(0);
		}
		parsePacketBuffer(buffer) {
			return this.proto.parsePacketBuffer(this.mainType, buffer);
		}
		_transform(chunk, enc, cb) {
			this.queue = Buffer.concat([this.queue, chunk]);
			while (true) {
				let packet;
				try {
					packet = this.parsePacketBuffer(this.queue);
				} catch (e) {
					if (e.partialReadError) return cb();
					else {
						e.buffer = this.queue;
						this.queue = Buffer.alloc(0);
						return cb(e);
					}
				}
				this.push(packet);
				this.queue = this.queue.slice(packet.metadata.size);
			}
		}
	};
	var FullPacketParser = class extends Transform {
		constructor(proto, mainType, noErrorLogging = false) {
			super({ readableObjectMode: true });
			this.proto = proto;
			this.mainType = mainType;
			this.noErrorLogging = noErrorLogging;
		}
		parsePacketBuffer(buffer) {
			return this.proto.parsePacketBuffer(this.mainType, buffer);
		}
		_transform(chunk, enc, cb) {
			let packet;
			try {
				packet = this.parsePacketBuffer(chunk);
				if (packet.metadata.size !== chunk.length && !this.noErrorLogging) console.log("Chunk size is " + chunk.length + " but only " + packet.metadata.size + " was read ; partial packet : " + JSON.stringify(packet.data) + "; buffer :" + chunk.toString("hex"));
			} catch (e) {
				if (e.partialReadError) {
					if (!this.noErrorLogging) console.log(e.stack);
					return cb();
				} else return cb(e);
			}
			this.push(packet);
			cb();
		}
	};
	module.exports = {
		Serializer,
		Parser,
		FullPacketParser
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/datatypes/compiler-conditional.js
var require_compiler_conditional = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		Read: {
			switch: ["parametrizable", (compiler, struct) => {
				let compare = struct.compareTo ? struct.compareTo : struct.compareToValue;
				const args = [];
				if (compare.startsWith("$")) args.push(compare);
				else if (struct.compareTo) compare = compiler.getField(compare, true);
				let code = `switch (${compare}) {\n`;
				for (const key in struct.fields) {
					let val = key;
					if (val.startsWith("/")) val = "ctx." + val.slice(1);
					else if (isNaN(val) && val !== "true" && val !== "false") val = `"${val}"`;
					code += compiler.indent(`case ${val}: return ` + compiler.callType(struct.fields[key])) + "\n";
				}
				code += compiler.indent("default: return " + compiler.callType(struct.default ? struct.default : "void")) + "\n";
				code += "}";
				return compiler.wrapCode(code, args);
			}],
			option: ["parametrizable", (compiler, type) => {
				let code = "const {value} = ctx.bool(buffer, offset)\n";
				code += "if (value) {\n";
				code += "  const { value, size } = " + compiler.callType(type, "offset + 1") + "\n";
				code += "  return { value, size: size + 1 }\n";
				code += "}\n";
				code += "return { value: undefined, size: 1}";
				return compiler.wrapCode(code);
			}]
		},
		Write: {
			switch: ["parametrizable", (compiler, struct) => {
				let compare = struct.compareTo ? struct.compareTo : struct.compareToValue;
				const args = [];
				if (compare.startsWith("$")) args.push(compare);
				else if (struct.compareTo) compare = compiler.getField(compare, true);
				let code = `switch (${compare}) {\n`;
				for (const key in struct.fields) {
					let val = key;
					if (val.startsWith("/")) val = "ctx." + val.slice(1);
					else if (isNaN(val) && val !== "true" && val !== "false") val = `"${val}"`;
					code += compiler.indent(`case ${val}: return ` + compiler.callType("value", struct.fields[key])) + "\n";
				}
				code += compiler.indent("default: return " + compiler.callType("value", struct.default ? struct.default : "void")) + "\n";
				code += "}";
				return compiler.wrapCode(code, args);
			}],
			option: ["parametrizable", (compiler, type) => {
				let code = "if (value != null) {\n";
				code += "  offset = ctx.bool(1, buffer, offset)\n";
				code += "  offset = " + compiler.callType("value", type) + "\n";
				code += "} else {\n";
				code += "  offset = ctx.bool(0, buffer, offset)\n";
				code += "}\n";
				code += "return offset";
				return compiler.wrapCode(code);
			}]
		},
		SizeOf: {
			switch: ["parametrizable", (compiler, struct) => {
				let compare = struct.compareTo ? struct.compareTo : struct.compareToValue;
				const args = [];
				if (compare.startsWith("$")) args.push(compare);
				else if (struct.compareTo) compare = compiler.getField(compare, true);
				let code = `switch (${compare}) {\n`;
				for (const key in struct.fields) {
					let val = key;
					if (val.startsWith("/")) val = "ctx." + val.slice(1);
					else if (isNaN(val) && val !== "true" && val !== "false") val = `"${val}"`;
					code += compiler.indent(`case ${val}: return ` + compiler.callType("value", struct.fields[key])) + "\n";
				}
				code += compiler.indent("default: return " + compiler.callType("value", struct.default ? struct.default : "void")) + "\n";
				code += "}";
				return compiler.wrapCode(code, args);
			}],
			option: ["parametrizable", (compiler, type) => {
				let code = "if (value != null) {\n";
				code += "  return 1 + " + compiler.callType("value", type) + "\n";
				code += "}\n";
				code += "return 1";
				return compiler.wrapCode(code);
			}]
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/datatypes/compiler-structures.js
var require_compiler_structures = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		Read: {
			array: ["parametrizable", (compiler, array) => {
				let code = "";
				if (array.countType) code += "const { value: count, size: countSize } = " + compiler.callType(array.countType) + "\n";
				else if (array.count) {
					code += "const count = " + array.count + "\n";
					code += "const countSize = 0\n";
				} else throw new Error("Array must contain either count or countType");
				code += "if (count > 0xffffff && !ctx.noArraySizeCheck) throw new Error(\"array size is abnormally large, not reading: \" + count)\n";
				code += "const data = []\n";
				code += "let size = countSize\n";
				code += "for (let i = 0; i < count; i++) {\n";
				code += "  const elem = " + compiler.callType(array.type, "offset + size") + "\n";
				code += "  data.push(elem.value)\n";
				code += "  size += elem.size\n";
				code += "}\n";
				code += "return { value: data, size }";
				return compiler.wrapCode(code);
			}],
			count: ["parametrizable", (compiler, type) => {
				const code = "return " + compiler.callType(type.type);
				return compiler.wrapCode(code);
			}],
			container: ["parametrizable", (compiler, values) => {
				values = containerInlining(values);
				let code = "";
				let offsetExpr = "offset";
				const names = [];
				for (const i in values) {
					const { type, name, anon, _shouldBeInlined } = values[i];
					let trueName;
					let sizeName;
					if (type instanceof Array && type[0] === "bitfield" && anon) {
						const subnames = [];
						for (const { name } of type[1]) {
							const trueName = compiler.getField(name);
							if (name === trueName) {
								names.push(name);
								subnames.push(name);
							} else {
								names.push(`${name}: ${trueName}`);
								subnames.push(`${name}: ${trueName}`);
							}
						}
						trueName = "{" + subnames.join(", ") + "}";
						sizeName = `anon${i}Size`;
					} else {
						trueName = compiler.getField(name);
						sizeName = `${trueName}Size`;
						if (_shouldBeInlined) names.push("..." + name);
						else if (name === trueName) names.push(name);
						else names.push(`${name}: ${trueName}`);
					}
					code += `let { value: ${trueName}, size: ${sizeName} } = ` + compiler.callType(type, offsetExpr) + "\n";
					offsetExpr += ` + ${sizeName}`;
				}
				const sizes = offsetExpr.split(" + ");
				sizes.shift();
				if (sizes.length === 0) sizes.push("0");
				code += "return { value: { " + names.join(", ") + " }, size: " + sizes.join(" + ") + "}";
				return compiler.wrapCode(code);
			}]
		},
		Write: {
			array: ["parametrizable", (compiler, array) => {
				let code = "";
				if (array.countType) code += "offset = " + compiler.callType("value.length", array.countType) + "\n";
				else if (array.count === null) throw new Error("Array must contain either count or countType");
				code += "for (let i = 0; i < value.length; i++) {\n";
				code += "  offset = " + compiler.callType("value[i]", array.type) + "\n";
				code += "}\n";
				code += "return offset";
				return compiler.wrapCode(code);
			}],
			count: ["parametrizable", (compiler, type) => {
				const code = "return " + compiler.callType("value", type.type);
				return compiler.wrapCode(code);
			}],
			container: ["parametrizable", (compiler, values) => {
				values = containerInlining(values);
				let code = "";
				for (const i in values) {
					const { type, name, anon, _shouldBeInlined } = values[i];
					let trueName;
					if (type instanceof Array && type[0] === "bitfield" && anon) {
						const names = [];
						for (const { name } of type[1]) {
							const trueName = compiler.getField(name);
							code += `const ${trueName} = value.${name}\n`;
							if (name === trueName) names.push(name);
							else names.push(`${name}: ${trueName}`);
						}
						trueName = "{" + names.join(", ") + "}";
					} else {
						trueName = compiler.getField(name);
						if (_shouldBeInlined) code += `let ${name} = value\n`;
						else code += `let ${trueName} = value.${name}\n`;
					}
					code += "offset = " + compiler.callType(trueName, type) + "\n";
				}
				code += "return offset";
				return compiler.wrapCode(code);
			}]
		},
		SizeOf: {
			array: ["parametrizable", (compiler, array) => {
				let code = "";
				if (array.countType) code += "let size = " + compiler.callType("value.length", array.countType) + "\n";
				else if (array.count) code += "let size = 0\n";
				else throw new Error("Array must contain either count or countType");
				if (!isNaN(compiler.callType("value[i]", array.type))) code += "size += value.length * " + compiler.callType("value[i]", array.type) + "\n";
				else {
					code += "for (let i = 0; i < value.length; i++) {\n";
					code += "  size += " + compiler.callType("value[i]", array.type) + "\n";
					code += "}\n";
				}
				code += "return size";
				return compiler.wrapCode(code);
			}],
			count: ["parametrizable", (compiler, type) => {
				const code = "return " + compiler.callType("value", type.type);
				return compiler.wrapCode(code);
			}],
			container: ["parametrizable", (compiler, values) => {
				values = containerInlining(values);
				let code = "let size = 0\n";
				for (const i in values) {
					const { type, name, anon, _shouldBeInlined } = values[i];
					let trueName;
					if (type instanceof Array && type[0] === "bitfield" && anon) {
						const names = [];
						for (const { name } of type[1]) {
							const trueName = compiler.getField(name);
							code += `const ${trueName} = value.${name}\n`;
							if (name === trueName) names.push(name);
							else names.push(`${name}: ${trueName}`);
						}
						trueName = "{" + names.join(", ") + "}";
					} else {
						trueName = compiler.getField(name);
						if (_shouldBeInlined) code += `let ${name} = value\n`;
						else code += `let ${trueName} = value.${name}\n`;
					}
					code += "size += " + compiler.callType(trueName, type) + "\n";
				}
				code += "return size";
				return compiler.wrapCode(code);
			}]
		}
	};
	function uniqueId() {
		return "_" + Math.random().toString(36).substr(2, 9);
	}
	function containerInlining(values) {
		const newValues = [];
		for (const i in values) {
			const { type, anon } = values[i];
			if (anon && !(type instanceof Array && type[0] === "bitfield")) if (type instanceof Array && type[0] === "container") for (const j in type[1]) newValues.push(type[1][j]);
			else if (type instanceof Array && type[0] === "switch") newValues.push({
				name: uniqueId(),
				_shouldBeInlined: true,
				type
			});
			else throw new Error("Cannot inline anonymous type: " + type);
			else newValues.push(values[i]);
		}
		return newValues;
	}
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/datatypes/compiler-utils.js
var require_compiler_utils = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		Read: {
			pstring: ["parametrizable", (compiler, string) => {
				let code = "";
				if (string.countType) code += "const { value: count, size: countSize } = " + compiler.callType(string.countType) + "\n";
				else if (string.count) {
					code += "const count = " + string.count + "\n";
					code += "const countSize = 0\n";
				} else throw new Error("pstring must contain either count or countType");
				code += "offset += countSize\n";
				code += "if (offset + count > buffer.length) {\n";
				code += "  throw new PartialReadError(\"Missing characters in string, found size is \" + buffer.length + \" expected size was \" + (offset + count))\n";
				code += "}\n";
				code += `return { value: buffer.toString("${string.encoding || "utf8"}", offset, offset + count), size: count + countSize }`;
				return compiler.wrapCode(code);
			}],
			buffer: ["parametrizable", (compiler, buffer) => {
				let code = "";
				if (buffer.countType) code += "const { value: count, size: countSize } = " + compiler.callType(buffer.countType) + "\n";
				else if (buffer.count) {
					code += "const count = " + buffer.count + "\n";
					code += "const countSize = 0\n";
				} else throw new Error("buffer must contain either count or countType");
				code += "offset += countSize\n";
				code += "if (offset + count > buffer.length) {\n";
				code += "  throw new PartialReadError()\n";
				code += "}\n";
				code += "return { value: buffer.slice(offset, offset + count), size: count + countSize }";
				return compiler.wrapCode(code);
			}],
			bitfield: ["parametrizable", (compiler, values) => {
				let code = "";
				const totalBytes = Math.ceil(values.reduce((acc, { size }) => acc + size, 0) / 8);
				code += `if ( offset + ${totalBytes} > buffer.length) { throw new PartialReadError() }\n`;
				const names = [];
				let totalSize = 8;
				code += "let bits = buffer[offset++]\n";
				for (const i in values) {
					const { name, size, signed } = values[i];
					const trueName = compiler.getField(name);
					while (totalSize < size) {
						totalSize += 8;
						code += "bits = (bits << 8) | buffer[offset++]\n";
					}
					code += `let ${trueName} = (bits >> ` + (totalSize - size) + ") & 0x" + ((1 << size) - 1).toString(16) + "\n";
					if (signed) code += `${trueName} -= (${trueName} & 0x` + (1 << size - 1).toString(16) + ") << 1\n";
					totalSize -= size;
					if (name === trueName) names.push(name);
					else names.push(`${name}: ${trueName}`);
				}
				code += "return { value: { " + names.join(", ") + ` }, size: ${totalBytes} }`;
				return compiler.wrapCode(code);
			}],
			bitflags: ["parametrizable", (compiler, { type, flags, shift, big }) => {
				let fstr = JSON.stringify(flags);
				if (Array.isArray(flags)) {
					fstr = "{";
					for (const [k, v] of Object.entries(flags)) fstr += `"${v}": ${big ? 1n << BigInt(k) : 1 << k}` + (big ? "n," : ",");
					fstr += "}";
				} else if (shift) {
					fstr = "{";
					for (const key in flags) fstr += `"${key}": ${1 << flags[key]}${big ? "n," : ","}`;
					fstr += "}";
				}
				return compiler.wrapCode(`
const { value: _value, size } = ${compiler.callType(type, "offset")}
const value = { _value }
const flags = ${fstr}
for (const key in flags) {
  value[key] = (_value & flags[key]) == flags[key]
}
return { value, size }
      `.trim());
			}],
			mapper: ["parametrizable", (compiler, mapper) => {
				let code = "const { value, size } = " + compiler.callType(mapper.type) + "\n";
				code += "return { value: " + JSON.stringify(sanitizeMappings(mapper.mappings)) + "[value] || value, size }";
				return compiler.wrapCode(code);
			}]
		},
		Write: {
			pstring: ["parametrizable", (compiler, string) => {
				let code = `const length = Buffer.byteLength(value, "${string.encoding || "utf8"}")\n`;
				if (string.countType) code += "offset = " + compiler.callType("length", string.countType) + "\n";
				else if (string.count === null) throw new Error("pstring must contain either count or countType");
				code += `buffer.write(value, offset, length, "${string.encoding || "utf8"}")\n`;
				code += "return offset + length";
				return compiler.wrapCode(code);
			}],
			buffer: ["parametrizable", (compiler, buffer) => {
				let code = "if (!(value instanceof Buffer)) value = Buffer.from(value)\n";
				if (buffer.countType) code += "offset = " + compiler.callType("value.length", buffer.countType) + "\n";
				else if (buffer.count === null) throw new Error("buffer must contain either count or countType");
				code += "value.copy(buffer, offset)\n";
				code += "return offset + value.length";
				return compiler.wrapCode(code);
			}],
			bitfield: ["parametrizable", (compiler, values) => {
				let toWrite = "";
				let bits = 0;
				let code = "";
				for (const i in values) {
					let { name, size } = values[i];
					const trueName = compiler.getField(name);
					code += `let ${trueName} = value.${name}\n`;
					while (size > 0) {
						const writeBits = Math.min(8 - bits, size);
						const mask = (1 << writeBits) - 1;
						if (toWrite !== "") toWrite = `((${toWrite}) << ${writeBits}) | `;
						toWrite += `((${trueName} >> ` + (size - writeBits) + ") & 0x" + mask.toString(16) + ")";
						size -= writeBits;
						bits += writeBits;
						if (bits === 8) {
							code += "buffer[offset++] = " + toWrite + "\n";
							bits = 0;
							toWrite = "";
						}
					}
				}
				if (bits !== 0) code += "buffer[offset++] = (" + toWrite + ") << " + (8 - bits) + "\n";
				code += "return offset";
				return compiler.wrapCode(code);
			}],
			bitflags: ["parametrizable", (compiler, { type, flags, shift, big }) => {
				let fstr = JSON.stringify(flags);
				if (Array.isArray(flags)) {
					fstr = "{";
					for (const [k, v] of Object.entries(flags)) fstr += `"${v}": ${big ? 1n << BigInt(k) : 1 << k}` + (big ? "n," : ",");
					fstr += "}";
				} else if (shift) {
					fstr = "{";
					for (const key in flags) fstr += `"${key}": ${1 << flags[key]}${big ? "n," : ","}`;
					fstr += "}";
				}
				return compiler.wrapCode(`
const flags = ${fstr}
let val = value._value ${big ? "|| 0n" : ""}
for (const key in flags) {
  if (value[key]) val |= flags[key]
}
return (ctx.${type})(val, buffer, offset)
      `.trim());
			}],
			mapper: ["parametrizable", (compiler, mapper) => {
				const mappings = JSON.stringify(swapMappings(mapper.mappings));
				const code = "return " + compiler.callType(`${mappings}[value] || value`, mapper.type);
				return compiler.wrapCode(code);
			}]
		},
		SizeOf: {
			pstring: ["parametrizable", (compiler, string) => {
				let code = `let size = Buffer.byteLength(value, "${string.encoding || "utf8"}")\n`;
				if (string.countType) code += "size += " + compiler.callType("size", string.countType) + "\n";
				else if (string.count === null) throw new Error("pstring must contain either count or countType");
				code += "return size";
				return compiler.wrapCode(code);
			}],
			buffer: ["parametrizable", (compiler, buffer) => {
				let code = "let size = value instanceof Buffer ? value.length : Buffer.from(value).length\n";
				if (buffer.countType) code += "size += " + compiler.callType("size", buffer.countType) + "\n";
				else if (buffer.count === null) throw new Error("buffer must contain either count or countType");
				code += "return size";
				return compiler.wrapCode(code);
			}],
			bitfield: ["parametrizable", (compiler, values) => {
				return `${Math.ceil(values.reduce((acc, { size }) => acc + size, 0) / 8)}`;
			}],
			bitflags: ["parametrizable", (compiler, { type, flags, shift, big }) => {
				let fstr = JSON.stringify(flags);
				if (Array.isArray(flags)) {
					fstr = "{";
					for (const [k, v] of Object.entries(flags)) fstr += `"${v}": ${big ? 1n << BigInt(k) : 1 << k}` + (big ? "n," : ",");
					fstr += "}";
				} else if (shift) {
					fstr = "{";
					for (const key in flags) fstr += `"${key}": ${1 << flags[key]}${big ? "n," : ","}`;
					fstr += "}";
				}
				return compiler.wrapCode(`
const flags = ${fstr}
let val = value._value ${big ? "|| 0n" : ""}
for (const key in flags) {
  if (value[key]) val |= flags[key]
}
return (ctx.${type})(val)
      `.trim());
			}],
			mapper: ["parametrizable", (compiler, mapper) => {
				const mappings = JSON.stringify(swapMappings(mapper.mappings));
				const code = "return " + compiler.callType(`${mappings}[value] || value`, mapper.type);
				return compiler.wrapCode(code);
			}]
		}
	};
	function sanitizeMappings(json) {
		const ret = {};
		for (let key in json) {
			let val = json[key];
			key = hex2dec(key);
			if (!isNaN(val)) val = Number(val);
			if (val === "true") val = true;
			if (val === "false") val = false;
			ret[key] = val;
		}
		return ret;
	}
	function swapMappings(json) {
		const ret = {};
		for (let key in json) {
			const val = json[key];
			key = hex2dec(key);
			ret[val] = isNaN(key) ? key : parseInt(key, 10);
		}
		return ret;
	}
	function hex2dec(num) {
		if (num.match(/^0x[0-9a-f]+$/i)) return parseInt(num.substring(2), 16);
		return num;
	}
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/compiler.js
var require_compiler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var numeric = require_numeric();
	var utils = require_utils$1();
	var conditionalDatatypes = require_compiler_conditional();
	var structuresDatatypes = require_compiler_structures();
	var utilsDatatypes = require_compiler_utils();
	var { tryCatch } = require_utils$2();
	var ProtoDefCompiler = class {
		constructor() {
			this.readCompiler = new ReadCompiler();
			this.writeCompiler = new WriteCompiler();
			this.sizeOfCompiler = new SizeOfCompiler();
		}
		addTypes(types) {
			this.readCompiler.addTypes(types.Read);
			this.writeCompiler.addTypes(types.Write);
			this.sizeOfCompiler.addTypes(types.SizeOf);
		}
		addTypesToCompile(types) {
			this.readCompiler.addTypesToCompile(types);
			this.writeCompiler.addTypesToCompile(types);
			this.sizeOfCompiler.addTypesToCompile(types);
		}
		addProtocol(protocolData, path) {
			this.readCompiler.addProtocol(protocolData, path);
			this.writeCompiler.addProtocol(protocolData, path);
			this.sizeOfCompiler.addProtocol(protocolData, path);
		}
		addVariable(key, val) {
			this.readCompiler.addContextType(key, val);
			this.writeCompiler.addContextType(key, val);
			this.sizeOfCompiler.addContextType(key, val);
		}
		compileProtoDefSync(options = { printCode: false }) {
			const sizeOfCode = this.sizeOfCompiler.generate();
			const writeCode = this.writeCompiler.generate();
			const readCode = this.readCompiler.generate();
			if (options.printCode) {
				console.log("// SizeOf:");
				console.log(sizeOfCode);
				console.log("// Write:");
				console.log(writeCode);
				console.log("// Read:");
				console.log(readCode);
			}
			return new CompiledProtodef(this.sizeOfCompiler.compile(sizeOfCode), this.writeCompiler.compile(writeCode), this.readCompiler.compile(readCode));
		}
	};
	var CompiledProtodef = class {
		constructor(sizeOfCtx, writeCtx, readCtx) {
			this.sizeOfCtx = sizeOfCtx;
			this.writeCtx = writeCtx;
			this.readCtx = readCtx;
		}
		read(buffer, cursor, type) {
			const readFn = this.readCtx[type];
			if (!readFn) throw new Error("missing data type: " + type);
			return readFn(buffer, cursor);
		}
		write(value, buffer, cursor, type) {
			const writeFn = this.writeCtx[type];
			if (!writeFn) throw new Error("missing data type: " + type);
			return writeFn(value, buffer, cursor);
		}
		setVariable(key, val) {
			this.sizeOfCtx[key] = val;
			this.readCtx[key] = val;
			this.writeCtx[key] = val;
		}
		sizeOf(value, type) {
			const sizeFn = this.sizeOfCtx[type];
			if (!sizeFn) throw new Error("missing data type: " + type);
			if (typeof sizeFn === "function") return sizeFn(value);
			else return sizeFn;
		}
		createPacketBuffer(type, packet) {
			const length = tryCatch(() => this.sizeOf(packet, type), (e) => {
				e.message = `SizeOf error for ${e.field} : ${e.message}`;
				throw e;
			});
			const buffer = Buffer.allocUnsafe(length);
			tryCatch(() => this.write(packet, buffer, 0, type), (e) => {
				e.message = `Write error for ${e.field} : ${e.message}`;
				throw e;
			});
			return buffer;
		}
		parsePacketBuffer(type, buffer, offset = 0) {
			const { value, size } = tryCatch(() => this.read(buffer, offset, type), (e) => {
				e.message = `Read error for ${e.field} : ${e.message}`;
				throw e;
			});
			return {
				data: value,
				metadata: { size },
				buffer: buffer.slice(0, size),
				fullBuffer: buffer
			};
		}
	};
	var Compiler = class {
		constructor() {
			this.primitiveTypes = {};
			this.native = {};
			this.context = {};
			this.types = {};
			this.scopeStack = [];
			this.parameterizableTypes = {};
		}
		/**
		* A native type is a type read or written by a function that will be called in it's
		* original context.
		* @param {*} type
		* @param {*} fn
		*/
		addNativeType(type, fn) {
			this.primitiveTypes[type] = `native.${type}`;
			this.native[type] = fn;
			this.types[type] = "native";
		}
		/**
		* A context type is a type that will be called in the protocol's context. It can refer to
		* registred native types using native.{type}() or context type (provided and generated)
		* using ctx.{type}(), but cannot access it's original context.
		* @param {*} type
		* @param {*} fn
		*/
		addContextType(type, fn) {
			this.primitiveTypes[type] = `ctx.${type}`;
			this.context[type] = fn.toString();
		}
		/**
		* A parametrizable type is a function that will be generated at compile time using the
		* provided maker function
		* @param {*} type
		* @param {*} maker
		*/
		addParametrizableType(type, maker) {
			this.parameterizableTypes[type] = maker;
		}
		addTypes(types) {
			for (const [type, [kind, fn]] of Object.entries(types)) if (kind === "native") this.addNativeType(type, fn);
			else if (kind === "context") this.addContextType(type, fn);
			else if (kind === "parametrizable") this.addParametrizableType(type, fn);
		}
		addTypesToCompile(types) {
			for (const [type, json] of Object.entries(types)) if (!this.types[type] || this.types[type] === "native") this.types[type] = json;
		}
		addProtocol(protocolData, path) {
			const self = this;
			function recursiveAddTypes(protocolData, path) {
				if (protocolData === void 0) return;
				if (protocolData.types) self.addTypesToCompile(protocolData.types);
				recursiveAddTypes(protocolData[path.shift()], path);
			}
			recursiveAddTypes(protocolData, path.slice(0));
		}
		indent(code, indent = "  ") {
			return code.split("\n").map((line) => indent + line).join("\n");
		}
		getField(name, noAssign) {
			const path = name.split("/");
			let i = this.scopeStack.length - 1;
			const reserved = [
				"value",
				"enum",
				"default",
				"size",
				"offset"
			];
			while (path.length) {
				const scope = this.scopeStack[i];
				const field = path.shift();
				if (field === "..") {
					i--;
					continue;
				}
				if (scope[field]) return scope[field] + (path.length ? "." + path.join(".") : "");
				if (path.length !== 0) throw new Error("Cannot access properties of undefined field");
				let count = 0;
				if (reserved.includes(field)) count++;
				for (let j = 0; j < i; j++) if (this.scopeStack[j][field]) count++;
				if (noAssign) scope[field] = field;
				else scope[field] = field + (count || "");
				return scope[field];
			}
			throw new Error("Unknown field " + path);
		}
		generate() {
			this.scopeStack = [{}];
			const functions = [];
			for (const type in this.context) functions[type] = this.context[type];
			for (const type in this.types) if (!functions[type]) if (this.types[type] !== "native") {
				functions[type] = this.compileType(this.types[type]);
				if (functions[type].startsWith("ctx")) functions[type] = "function () { return " + functions[type] + "(...arguments) }";
				if (!isNaN(functions[type])) functions[type] = this.wrapCode("  return " + functions[type]);
			} else functions[type] = `native.${type}`;
			return "() => {\n" + this.indent("const ctx = {\n" + this.indent(Object.keys(functions).map((type) => {
				return type + ": " + functions[type];
			}).join(",\n")) + "\n}\nreturn ctx") + "\n}";
		}
		/**
		* Compile the given js code, providing native.{type} to the context, return the compiled types
		* @param {*} code
		*/
		compile(code) {
			const native = this.native;
			const { PartialReadError } = require_utils$2();
			return eval(code)();
		}
	};
	var ReadCompiler = class extends Compiler {
		constructor() {
			super();
			this.addTypes(conditionalDatatypes.Read);
			this.addTypes(structuresDatatypes.Read);
			this.addTypes(utilsDatatypes.Read);
			for (const key in numeric) this.addNativeType(key, numeric[key][0]);
			for (const key in utils) this.addNativeType(key, utils[key][0]);
		}
		compileType(type) {
			if (type instanceof Array) {
				if (this.parameterizableTypes[type[0]]) return this.parameterizableTypes[type[0]](this, type[1]);
				if (this.types[type[0]] && this.types[type[0]] !== "native") return this.wrapCode("return " + this.callType(type[0], "offset", Object.values(type[1])));
				throw new Error("Unknown parametrizable type: " + JSON.stringify(type[0]));
			} else {
				if (type === "native") return "null";
				if (this.types[type]) return "ctx." + type;
				return this.primitiveTypes[type];
			}
		}
		wrapCode(code, args = []) {
			if (args.length > 0) return "(buffer, offset, " + args.join(", ") + ") => {\n" + this.indent(code) + "\n}";
			return "(buffer, offset) => {\n" + this.indent(code) + "\n}";
		}
		callType(type, offsetExpr = "offset", args = []) {
			if (type instanceof Array) {
				if (this.types[type[0]] && this.types[type[0]] !== "native") return this.callType(type[0], offsetExpr, Object.values(type[1]));
			}
			if (type instanceof Array && type[0] === "container") this.scopeStack.push({});
			const code = this.compileType(type);
			if (type instanceof Array && type[0] === "container") this.scopeStack.pop();
			if (args.length > 0) return "(" + code + `)(buffer, ${offsetExpr}, ` + args.map((name) => this.getField(name)).join(", ") + ")";
			return "(" + code + `)(buffer, ${offsetExpr})`;
		}
	};
	var WriteCompiler = class extends Compiler {
		constructor() {
			super();
			this.addTypes(conditionalDatatypes.Write);
			this.addTypes(structuresDatatypes.Write);
			this.addTypes(utilsDatatypes.Write);
			for (const key in numeric) this.addNativeType(key, numeric[key][1]);
			for (const key in utils) this.addNativeType(key, utils[key][1]);
		}
		compileType(type) {
			if (type instanceof Array) {
				if (this.parameterizableTypes[type[0]]) return this.parameterizableTypes[type[0]](this, type[1]);
				if (this.types[type[0]] && this.types[type[0]] !== "native") return this.wrapCode("return " + this.callType("value", type[0], "offset", Object.values(type[1])));
				throw new Error("Unknown parametrizable type: " + type[0]);
			} else {
				if (type === "native") return "null";
				if (this.types[type]) return "ctx." + type;
				return this.primitiveTypes[type];
			}
		}
		wrapCode(code, args = []) {
			if (args.length > 0) return "(value, buffer, offset, " + args.join(", ") + ") => {\n" + this.indent(code) + "\n}";
			return "(value, buffer, offset) => {\n" + this.indent(code) + "\n}";
		}
		callType(value, type, offsetExpr = "offset", args = []) {
			if (type instanceof Array) {
				if (this.types[type[0]] && this.types[type[0]] !== "native") return this.callType(value, type[0], offsetExpr, Object.values(type[1]));
			}
			if (type instanceof Array && type[0] === "container") this.scopeStack.push({});
			const code = this.compileType(type);
			if (type instanceof Array && type[0] === "container") this.scopeStack.pop();
			if (args.length > 0) return "(" + code + `)(${value}, buffer, ${offsetExpr}, ` + args.map((name) => this.getField(name)).join(", ") + ")";
			return "(" + code + `)(${value}, buffer, ${offsetExpr})`;
		}
	};
	var SizeOfCompiler = class extends Compiler {
		constructor() {
			super();
			this.addTypes(conditionalDatatypes.SizeOf);
			this.addTypes(structuresDatatypes.SizeOf);
			this.addTypes(utilsDatatypes.SizeOf);
			for (const key in numeric) this.addNativeType(key, numeric[key][2]);
			for (const key in utils) this.addNativeType(key, utils[key][2]);
		}
		/**
		* A native type is a type read or written by a function that will be called in it's
		* original context.
		* @param {*} type
		* @param {*} fn
		*/
		addNativeType(type, fn) {
			this.primitiveTypes[type] = `native.${type}`;
			if (!isNaN(fn)) this.native[type] = (value) => {
				return fn;
			};
			else this.native[type] = fn;
			this.types[type] = "native";
		}
		compileType(type) {
			if (type instanceof Array) {
				if (this.parameterizableTypes[type[0]]) return this.parameterizableTypes[type[0]](this, type[1]);
				if (this.types[type[0]] && this.types[type[0]] !== "native") return this.wrapCode("return " + this.callType("value", type[0], Object.values(type[1])));
				throw new Error("Unknown parametrizable type: " + type[0]);
			} else {
				if (type === "native") return "null";
				if (!isNaN(this.primitiveTypes[type])) return this.primitiveTypes[type];
				if (this.types[type]) return "ctx." + type;
				return this.primitiveTypes[type];
			}
		}
		wrapCode(code, args = []) {
			if (args.length > 0) return "(value, " + args.join(", ") + ") => {\n" + this.indent(code) + "\n}";
			return "(value) => {\n" + this.indent(code) + "\n}";
		}
		callType(value, type, args = []) {
			if (type instanceof Array) {
				if (this.types[type[0]] && this.types[type[0]] !== "native") return this.callType(value, type[0], Object.values(type[1]));
			}
			if (type instanceof Array && type[0] === "container") this.scopeStack.push({});
			const code = this.compileType(type);
			if (type instanceof Array && type[0] === "container") this.scopeStack.pop();
			if (!isNaN(code)) return code;
			if (args.length > 0) return "(" + code + `)(${value}, ` + args.map((name) => this.getField(name)).join(", ") + ")";
			return "(" + code + `)(${value})`;
		}
	};
	module.exports = {
		ReadCompiler,
		WriteCompiler,
		SizeOfCompiler,
		ProtoDefCompiler,
		CompiledProtodef
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/src/index.js
var require_src = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ProtoDef = require_protodef$1();
	var proto = new ProtoDef();
	module.exports = {
		ProtoDef,
		Serializer: require_serializer().Serializer,
		Parser: require_serializer().Parser,
		FullPacketParser: require_serializer().FullPacketParser,
		Compiler: require_compiler(),
		types: proto.types,
		utils: require_utils$2()
	};
}));
//#endregion
//#region node_modules/.pnpm/protodef@1.19.0/node_modules/protodef/index.js
var require_protodef = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_src();
}));
//#endregion
//#region node_modules/.pnpm/prismarine-nbt@2.8.0/node_modules/prismarine-nbt/nbt.json
var nbt_exports = /* @__PURE__ */ __exportAll({
	anonOptionalNbt: () => anonOptionalNbt,
	anonymousNbt: () => anonymousNbt,
	byteArray: () => byteArray$1,
	compound: () => compound$1,
	container: () => container$1,
	default: () => nbt_default,
	f32: () => f32$1,
	f64: () => f64$1,
	i16: () => i16$1,
	i32: () => i32$1,
	i64: () => i64$1,
	i8: () => i8$1,
	intArray: () => intArray$1,
	list: () => list$1,
	longArray: () => longArray$1,
	nbt: () => nbt$1,
	nbtMapper: () => nbtMapper$1,
	nbtSwitch: () => nbtSwitch$1,
	nbtTagName: () => nbtTagName,
	optionalNbt: () => optionalNbt,
	pstring: () => pstring$1,
	shortString: () => shortString$1,
	u16: () => u16
});
var container$1, i8$1, compound$1, nbtTagName, i16$1, u16, i32$1, i64$1, f32$1, f64$1, pstring$1, shortString$1, byteArray$1, list$1, intArray$1, longArray$1, nbtMapper$1, nbtSwitch$1, nbt$1, anonymousNbt, anonOptionalNbt, optionalNbt, nbt_default;
var init_nbt = __esmMin((() => {
	container$1 = "native";
	i8$1 = "native";
	compound$1 = "native";
	nbtTagName = "native";
	i16$1 = "native";
	u16 = "native";
	i32$1 = "native";
	i64$1 = "native";
	f32$1 = "native";
	f64$1 = "native";
	pstring$1 = "native";
	shortString$1 = ["pstring", { "countType": "u16" }];
	byteArray$1 = ["array", {
		"countType": "i32",
		"type": "i8"
	}];
	list$1 = ["container", [{
		"name": "type",
		"type": "nbtMapper"
	}, {
		"name": "value",
		"type": ["array", {
			"countType": "i32",
			"type": ["nbtSwitch", { "type": "type" }]
		}]
	}]];
	intArray$1 = ["array", {
		"countType": "i32",
		"type": "i32"
	}];
	longArray$1 = ["array", {
		"countType": "i32",
		"type": "i64"
	}];
	nbtMapper$1 = ["mapper", {
		"type": "i8",
		"mappings": {
			"0": "end",
			"1": "byte",
			"2": "short",
			"3": "int",
			"4": "long",
			"5": "float",
			"6": "double",
			"7": "byteArray",
			"8": "string",
			"9": "list",
			"10": "compound",
			"11": "intArray",
			"12": "longArray"
		}
	}];
	nbtSwitch$1 = ["switch", {
		"compareTo": "$type",
		"fields": {
			"end": "void",
			"byte": "i8",
			"short": "i16",
			"int": "i32",
			"long": "i64",
			"float": "f32",
			"double": "f64",
			"byteArray": "byteArray",
			"string": "shortString",
			"list": "list",
			"compound": "compound",
			"intArray": "intArray",
			"longArray": "longArray"
		}
	}];
	nbt$1 = ["container", [
		{
			"name": "type",
			"type": "nbtMapper"
		},
		{
			"name": "name",
			"type": "nbtTagName"
		},
		{
			"name": "value",
			"type": ["nbtSwitch", { "type": "type" }]
		}
	]];
	anonymousNbt = ["container", [{
		"name": "type",
		"type": "nbtMapper"
	}, {
		"name": "value",
		"type": ["nbtSwitch", { "type": "type" }]
	}]];
	anonOptionalNbt = ["optionalNbtType", { "tagType": "anonymousNbt" }];
	optionalNbt = ["optionalNbtType", { "tagType": "nbt" }];
	nbt_default = {
		"void": "native",
		container: container$1,
		i8: i8$1,
		"switch": "native",
		compound: compound$1,
		nbtTagName,
		i16: i16$1,
		u16,
		i32: i32$1,
		i64: i64$1,
		f32: f32$1,
		f64: f64$1,
		pstring: pstring$1,
		shortString: shortString$1,
		byteArray: byteArray$1,
		list: list$1,
		intArray: intArray$1,
		longArray: longArray$1,
		nbtMapper: nbtMapper$1,
		nbtSwitch: nbtSwitch$1,
		nbt: nbt$1,
		anonymousNbt,
		anonOptionalNbt,
		optionalNbt
	};
}));
//#endregion
//#region node_modules/.pnpm/prismarine-nbt@2.8.0/node_modules/prismarine-nbt/nbt-varint.json
var nbt_varint_exports = /* @__PURE__ */ __exportAll({
	byteArray: () => byteArray,
	compound: () => compound,
	container: () => container,
	default: () => nbt_varint_default,
	f32: () => f32,
	f64: () => f64,
	i16: () => i16,
	i32: () => i32,
	i64: () => i64,
	i8: () => i8,
	intArray: () => intArray,
	list: () => list,
	longArray: () => longArray,
	nbt: () => nbt,
	nbtMapper: () => nbtMapper,
	nbtSwitch: () => nbtSwitch,
	pstring: () => pstring,
	shortString: () => shortString,
	zigzag32: () => zigzag32,
	zigzag64: () => zigzag64
});
var container, i8, compound, zigzag32, zigzag64, i16, i32, i64, f32, f64, pstring, shortString, byteArray, list, intArray, longArray, nbtMapper, nbtSwitch, nbt, nbt_varint_default;
var init_nbt_varint = __esmMin((() => {
	container = "native";
	i8 = "native";
	compound = "native";
	zigzag32 = "native";
	zigzag64 = "native";
	i16 = "native";
	i32 = "native";
	i64 = "native";
	f32 = "native";
	f64 = "native";
	pstring = "native";
	shortString = ["pstring", { "countType": "varint" }];
	byteArray = ["array", {
		"countType": "zigzag32",
		"type": "i8"
	}];
	list = ["container", [{
		"name": "type",
		"type": "nbtMapper"
	}, {
		"name": "value",
		"type": ["array", {
			"countType": "zigzag32",
			"type": ["nbtSwitch", { "type": "type" }]
		}]
	}]];
	intArray = ["array", {
		"countType": "zigzag32",
		"type": "i32"
	}];
	longArray = ["array", {
		"countType": "zigzag32",
		"type": "i64"
	}];
	nbtMapper = ["mapper", {
		"type": "i8",
		"mappings": {
			"0": "end",
			"1": "byte",
			"2": "short",
			"3": "int",
			"4": "long",
			"5": "float",
			"6": "double",
			"7": "byteArray",
			"8": "string",
			"9": "list",
			"10": "compound",
			"11": "intArray",
			"12": "longArray"
		}
	}];
	nbtSwitch = ["switch", {
		"compareTo": "$type",
		"fields": {
			"end": "void",
			"byte": "i8",
			"short": "i16",
			"int": "zigzag32",
			"long": "zigzag64",
			"float": "f32",
			"double": "f64",
			"byteArray": "byteArray",
			"string": "shortString",
			"list": "list",
			"compound": "compound",
			"intArray": "intArray",
			"longArray": "longArray"
		}
	}];
	nbt = ["container", [
		{
			"name": "type",
			"type": "nbtMapper"
		},
		{
			"name": "name",
			"type": "nbtTagName"
		},
		{
			"name": "value",
			"type": ["nbtSwitch", { "type": "type" }]
		}
	]];
	nbt_varint_default = {
		"void": "native",
		container,
		i8,
		"switch": "native",
		compound,
		zigzag32,
		zigzag64,
		i16,
		i32,
		i64,
		f32,
		f64,
		pstring,
		shortString,
		byteArray,
		list,
		intArray,
		longArray,
		nbtMapper,
		nbtSwitch,
		nbt
	};
}));
//#endregion
//#region node_modules/.pnpm/prismarine-nbt@2.8.0/node_modules/prismarine-nbt/compiler-compound.js
var require_compiler_compound = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		Read: { compound: ["context", (buffer, offset) => {
			const results = {
				value: {},
				size: 0
			};
			while (offset !== buffer.length) {
				const typ = ctx.i8(buffer, offset);
				if (typ.value === 0) {
					results.size += typ.size;
					break;
				}
				if (typ.value > 20) throw new Error(`Invalid tag: ${typ.value} > 20`);
				const readResults = ctx.nbt(buffer, offset);
				offset += readResults.size;
				results.size += readResults.size;
				results.value[readResults.value.name] = {
					type: readResults.value.type,
					value: readResults.value.value
				};
			}
			return results;
		}] },
		Write: { compound: ["context", (value, buffer, offset) => {
			for (const key in value) offset = ctx.nbt({
				name: key,
				type: value[key].type,
				value: value[key].value
			}, buffer, offset);
			offset = ctx.i8(0, buffer, offset);
			return offset;
		}] },
		SizeOf: { compound: ["context", (value) => {
			let size = 1;
			for (const key in value) size += ctx.nbt({
				name: key,
				type: value[key].type,
				value: value[key].value
			});
			return size;
		}] }
	};
}));
//#endregion
//#region node_modules/.pnpm/prismarine-nbt@2.8.0/node_modules/prismarine-nbt/compiler-tagname.js
var require_compiler_tagname = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function readPString(buffer, offset) {
		const { value, size } = ctx.shortString(buffer, offset);
		for (const c of value) if (c === "\0") throw new Error("unexpected tag end");
		return {
			value,
			size
		};
	}
	function writePString(...args) {
		return ctx.shortString(...args);
	}
	function sizeOfPString(...args) {
		return ctx.shortString(...args);
	}
	module.exports = {
		Read: { nbtTagName: ["context", readPString] },
		Write: { nbtTagName: ["context", writePString] },
		SizeOf: { nbtTagName: ["context", sizeOfPString] }
	};
}));
//#endregion
//#region node_modules/.pnpm/prismarine-nbt@2.8.0/node_modules/prismarine-nbt/optional.js
var require_optional = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function readOptionalNbt(buffer, offset, { tagType }, rootNode) {
		if (offset + 1 > buffer.length) throw new Error("Read out of bounds");
		if (buffer.readInt8(offset) === 0) return { size: 1 };
		return this.read(buffer, offset, tagType, rootNode);
	}
	function writeOptionalNbt(value, buffer, offset, { tagType }, rootNode) {
		if (value === void 0) {
			buffer.writeInt8(0, offset);
			return offset + 1;
		}
		return this.write(value, buffer, offset, tagType, rootNode);
	}
	function sizeOfOptionalNbt(value, { tagType }, rootNode) {
		if (value === void 0) return 1;
		return this.sizeOf(value, tagType, tagType, rootNode);
	}
	module.exports = {
		compiler: {
			Read: { optionalNbtType: ["parametrizable", (compiler, { tagType }) => {
				return compiler.wrapCode(`
if (offset + 1 > buffer.length) { throw new PartialReadError() }
if (buffer.readInt8(offset) === 0) return { size: 1 }
return ${compiler.callType(tagType)}
      `);
			}] },
			Write: { optionalNbtType: ["parametrizable", (compiler, { tagType }) => {
				return compiler.wrapCode(`
if (value === undefined) {
  buffer.writeInt8(0, offset)
  return offset + 1
}
return ${compiler.callType("value", tagType)}
      `);
			}] },
			SizeOf: { optionalNbtType: ["parametrizable", (compiler, { tagType }) => {
				return compiler.wrapCode(`
if (value === undefined) { return 1 }
return ${compiler.callType("value", tagType)}
      `);
			}] }
		},
		interpret: { optionalNbtType: [
			readOptionalNbt,
			writeOptionalNbt,
			sizeOfOptionalNbt
		] }
	};
}));
//#endregion
//#region node_modules/.pnpm/prismarine-nbt@2.8.0/node_modules/prismarine-nbt/compound.js
var require_compound = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = { compound: [
		readCompound,
		writeCompound,
		sizeOfCompound
	] };
	function readCompound(buffer, offset, typeArgs, rootNode) {
		const results = {
			value: {},
			size: 0
		};
		while (true) {
			const typ = this.read(buffer, offset, "i8", rootNode);
			if (typ.value === 0) {
				offset += typ.size;
				results.size += typ.size;
				break;
			}
			const readResults = this.read(buffer, offset, "nbt", rootNode);
			offset += readResults.size;
			results.size += readResults.size;
			results.value[readResults.value.name] = {
				type: readResults.value.type,
				value: readResults.value.value
			};
		}
		return results;
	}
	function writeCompound(value, buffer, offset, typeArgs, rootNode) {
		const self = this;
		Object.keys(value).forEach(function(key) {
			offset = self.write({
				name: key,
				type: value[key].type,
				value: value[key].value
			}, buffer, offset, "nbt", rootNode);
		});
		offset = this.write(0, buffer, offset, "i8", rootNode);
		return offset;
	}
	function sizeOfCompound(value, typeArgs, rootNode) {
		const self = this;
		return 1 + Object.keys(value).reduce(function(size, key) {
			return size + self.sizeOf({
				name: key,
				type: value[key].type,
				value: value[key].value
			}, "nbt", rootNode);
		}, 0);
	}
}));
//#endregion
//#region node_modules/.pnpm/prismarine-nbt@2.8.0/node_modules/prismarine-nbt/typings/tag-type.js
var require_tag_type = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		Byte: "byte",
		Short: "short",
		Int: "int",
		Long: "long",
		Float: "float",
		Double: "double",
		ByteArray: "byteArray",
		String: "string",
		List: "list",
		Compound: "compound",
		IntArray: "intArray",
		LongArray: "longArray"
	};
}));
//#endregion
//#region node_modules/.pnpm/prismarine-nbt@2.8.0/node_modules/prismarine-nbt/nbt.js
var require_nbt = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var zlib = __require("zlib");
	var { ProtoDefCompiler } = require_protodef().Compiler;
	var beNbtJson = JSON.stringify((init_nbt(), __toCommonJS(nbt_exports).default));
	var leNbtJson = beNbtJson.replace(/([iuf][0-7]+)/g, "l$1");
	var varintJson = JSON.stringify((init_nbt_varint(), __toCommonJS(nbt_varint_exports).default)).replace(/([if][0-7]+)/g, "l$1");
	function addTypesToCompiler(type, compiler) {
		compiler.addTypes(require_compiler_compound());
		compiler.addTypes(require_compiler_tagname());
		compiler.addTypes(require_optional().compiler);
		let proto = beNbtJson;
		if (type === "littleVarint") proto = varintJson;
		else if (type === "little") proto = leNbtJson;
		compiler.addTypesToCompile(JSON.parse(proto));
	}
	function addTypesToInterpreter(type, compiler) {
		compiler.addTypes(require_compound());
		compiler.addTypes(require_optional().interpret);
		let proto = beNbtJson;
		if (type === "littleVarint") proto = varintJson;
		else if (type === "little") proto = leNbtJson;
		compiler.addTypes(JSON.parse(proto));
		compiler.types.nbtTagName = compiler.types.shortString;
	}
	function createProto(type) {
		const compiler = new ProtoDefCompiler();
		addTypesToCompiler(type, compiler);
		return compiler.compileProtoDefSync();
	}
	var protoBE = createProto("big");
	var protoLE = createProto("little");
	var protos = {
		big: protoBE,
		little: protoLE,
		littleVarint: createProto("littleVarint")
	};
	function writeUncompressed(value, proto = "big") {
		if (proto === true) proto = "little";
		return protos[proto].createPacketBuffer("nbt", value);
	}
	function parseUncompressed(data, proto = "big", options = {}) {
		if (proto === true) proto = "little";
		protos[proto].setVariable("noArraySizeCheck", options.noArraySizeCheck);
		return protos[proto].parsePacketBuffer("nbt", data, data.startOffset).data;
	}
	var hasGzipHeader = function(data) {
		let result = true;
		if (data[0] !== 31) result = false;
		if (data[1] !== 139) result = false;
		return result;
	};
	var hasBedrockLevelHeader = (data) => data[1] === 0 && data[2] === 0 && data[3] === 0;
	async function parseAs(data, type, options = {}) {
		if (!(data instanceof Buffer)) throw new Error("Invalid argument: `data` must be a Buffer object");
		if (hasGzipHeader(data)) data = await new Promise((resolve, reject) => {
			zlib.gunzip(data, (error, uncompressed) => {
				if (error) reject(error);
				else resolve(uncompressed);
			});
		});
		protos[type].setVariable("noArraySizeCheck", options.noArraySizeCheck);
		const parsed = protos[type].parsePacketBuffer("nbt", data, data.startOffset);
		parsed.metadata.buffer = data;
		parsed.type = type;
		return parsed;
	}
	async function parse(data, format, callback) {
		if (data instanceof ArrayBuffer) data = Buffer.from(data);
		else if (!(data instanceof Buffer)) throw new Error("Invalid argument: `data` must be a Buffer or ArrayBuffer object");
		let fmt = null;
		if (typeof format === "function") callback = format;
		else if (format === true || format === "little") fmt = "little";
		else if (format === "big") fmt = "big";
		else if (format === "littleVarint") fmt = "littleVarint";
		else if (format) throw new Error("Unrecognized format: " + format);
		data.startOffset = data.startOffset || 0;
		if (!fmt && !data.startOffset) {
			if (hasBedrockLevelHeader(data)) {
				data.startOffset += 8;
				fmt = "little";
			}
		}
		if (fmt) try {
			const res = await parseAs(data, fmt);
			if (callback) callback(null, res.data, res.type, res.metadata);
			return {
				parsed: res.data,
				type: res.type,
				metadata: res.metadata
			};
		} catch (e) {
			if (callback) return callback(e);
			else throw e;
		}
		const verifyEOF = ({ buffer, size }) => {
			const readLen = size;
			const bufferLen = buffer.length - buffer.startOffset;
			const nextNbtTag = buffer[readLen + buffer.startOffset] === 10;
			if (readLen < bufferLen && !nextNbtTag) throw new Error(`Unexpected EOF at ${readLen}: still have ${bufferLen - readLen} bytes to read !`);
		};
		let ret = null;
		try {
			ret = await parseAs(data, "big");
			verifyEOF(ret.metadata);
		} catch (e) {
			try {
				ret = await parseAs(data, "little");
				verifyEOF(ret.metadata);
			} catch (e2) {
				try {
					ret = await parseAs(data, "littleVarint");
					verifyEOF(ret.metadata);
				} catch (e3) {
					if (callback) return callback(e);
					else throw e;
				}
			}
		}
		if (callback) callback(null, ret.data, ret.type, ret.metadata);
		return {
			parsed: ret.data,
			type: ret.type,
			metadata: ret.metadata
		};
	}
	function simplify(data) {
		function transform(value, type) {
			if (type === "compound") return Object.keys(value).reduce(function(acc, key) {
				acc[key] = simplify(value[key]);
				return acc;
			}, {});
			if (type === "list") return value.value.map(function(v) {
				return transform(v, value.type);
			});
			return value;
		}
		return transform(data.value, data.type);
	}
	function equal(nbt1, nbt2) {
		if (nbt1.type !== nbt2.type) return false;
		if (nbt1.type === "compound") {
			const nbt1Keys = Object.keys(nbt1.value);
			const nbt2Keys = Object.keys(nbt2.value);
			if (nbt1Keys.length !== nbt2Keys.length) return false;
			for (const key of nbt1Keys) if (!equal(nbt1.value[key], nbt2.value[key])) return false;
			return true;
		}
		if (nbt1.type === "list") {
			if (nbt1.value.length !== nbt2.value.length) return false;
			for (let i = 0; i < nbt1.value.length; i++) if (!equal(nbt1.value[i], nbt2.value[i])) return false;
			return true;
		}
		if (nbt1.type === "byteArray" || nbt1.type === "intArray" || nbt1.type === "shortArray") {
			if (nbt1.value.length !== nbt2.value.length) return false;
			for (let i = 0; i < nbt1.value.length; i++) if (nbt1.value[i] !== nbt2.value[i]) return false;
			return true;
		}
		if (nbt1.type === "long") return nbt1.value[0] === nbt2.value[0] && nbt1.value[1] === nbt2.value[1];
		if (nbt1.type === "longArray") {
			if (nbt1.value.length !== nbt2.value.length) return false;
			for (let i = 0; i < nbt1.value.length; i++) if (nbt1.value[i][0] !== nbt2.value[i][0] || nbt1.value[i][1] !== nbt2.value[i][1]) return false;
			return true;
		}
		return nbt1.value === nbt2.value;
	}
	module.exports = {
		addTypesToCompiler,
		addTypesToInterpreter,
		writeUncompressed,
		parseUncompressed,
		simplify,
		hasBedrockLevelHeader,
		parse,
		parseAs,
		equal,
		proto: protoBE,
		protoLE,
		protos,
		TagType: require_tag_type(),
		bool(value = false) {
			return {
				type: "bool",
				value
			};
		},
		short(value) {
			return {
				type: "short",
				value
			};
		},
		byte(value) {
			return {
				type: "byte",
				value
			};
		},
		string(value) {
			return {
				type: "string",
				value
			};
		},
		comp(value, name = "") {
			return {
				type: "compound",
				name,
				value
			};
		},
		int(value) {
			return {
				type: "int",
				value
			};
		},
		float(value) {
			return {
				type: "float",
				value
			};
		},
		double(value) {
			return {
				type: "double",
				value
			};
		},
		long(value) {
			return {
				type: "long",
				value
			};
		},
		list(value) {
			return {
				type: "list",
				value: {
					type: value?.type ?? "end",
					value: value?.value ?? []
				}
			};
		},
		byteArray(value = []) {
			return {
				type: "byteArray",
				value
			};
		},
		shortArray(value = []) {
			return {
				type: "shortArray",
				value
			};
		},
		intArray(value = []) {
			return {
				type: "intArray",
				value
			};
		},
		longArray(value = []) {
			return {
				type: "longArray",
				value
			};
		}
	};
}));
//#endregion
export { require_nbt as t };
