import { o as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { o as require_react, t as import_emotion_react_cjs } from "../@emotion/react+[...].mjs";
import { t as import_emotion_styled_cjs_default } from "../emotion__styled.mjs";
import { t as import_emotion_serialize_cjs } from "../emotion__serialize.mjs";
//#region node_modules/.pnpm/react@19.2.8/node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/colors/common.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var common = {
	black: "#000",
	white: "#fff"
};
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/colors/red.mjs
var red = {
	50: "#ffebee",
	100: "#ffcdd2",
	200: "#ef9a9a",
	300: "#e57373",
	400: "#ef5350",
	500: "#f44336",
	600: "#e53935",
	700: "#d32f2f",
	800: "#c62828",
	900: "#b71c1c",
	A100: "#ff8a80",
	A200: "#ff5252",
	A400: "#ff1744",
	A700: "#d50000"
};
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/colors/purple.mjs
var purple = {
	50: "#f3e5f5",
	100: "#e1bee7",
	200: "#ce93d8",
	300: "#ba68c8",
	400: "#ab47bc",
	500: "#9c27b0",
	600: "#8e24aa",
	700: "#7b1fa2",
	800: "#6a1b9a",
	900: "#4a148c",
	A100: "#ea80fc",
	A200: "#e040fb",
	A400: "#d500f9",
	A700: "#aa00ff"
};
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/colors/blue.mjs
var blue = {
	50: "#e3f2fd",
	100: "#bbdefb",
	200: "#90caf9",
	300: "#64b5f6",
	400: "#42a5f5",
	500: "#2196f3",
	600: "#1e88e5",
	700: "#1976d2",
	800: "#1565c0",
	900: "#0d47a1",
	A100: "#82b1ff",
	A200: "#448aff",
	A400: "#2979ff",
	A700: "#2962ff"
};
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/colors/lightBlue.mjs
var lightBlue = {
	50: "#e1f5fe",
	100: "#b3e5fc",
	200: "#81d4fa",
	300: "#4fc3f7",
	400: "#29b6f6",
	500: "#03a9f4",
	600: "#039be5",
	700: "#0288d1",
	800: "#0277bd",
	900: "#01579b",
	A100: "#80d8ff",
	A200: "#40c4ff",
	A400: "#00b0ff",
	A700: "#0091ea"
};
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/colors/green.mjs
var green = {
	50: "#e8f5e9",
	100: "#c8e6c9",
	200: "#a5d6a7",
	300: "#81c784",
	400: "#66bb6a",
	500: "#4caf50",
	600: "#43a047",
	700: "#388e3c",
	800: "#2e7d32",
	900: "#1b5e20",
	A100: "#b9f6ca",
	A200: "#69f0ae",
	A400: "#00e676",
	A700: "#00c853"
};
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/colors/orange.mjs
var orange = {
	50: "#fff3e0",
	100: "#ffe0b2",
	200: "#ffcc80",
	300: "#ffb74d",
	400: "#ffa726",
	500: "#ff9800",
	600: "#fb8c00",
	700: "#f57c00",
	800: "#ef6c00",
	900: "#e65100",
	A100: "#ffd180",
	A200: "#ffab40",
	A400: "#ff9100",
	A700: "#ff6d00"
};
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/colors/grey.mjs
var grey = {
	50: "#fafafa",
	100: "#f5f5f5",
	200: "#eeeeee",
	300: "#e0e0e0",
	400: "#bdbdbd",
	500: "#9e9e9e",
	600: "#757575",
	700: "#616161",
	800: "#424242",
	900: "#212121",
	A100: "#f5f5f5",
	A200: "#eeeeee",
	A400: "#bdbdbd",
	A700: "#616161"
};
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/formatMuiErrorMessage/formatMuiErrorMessage.mjs
/**
* WARNING: Don't import this directly. It's imported by the code generated by
* `@mui/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
* constructors to ensure the plugin works as expected. Supported patterns include:
*   throw new Error('My message');
*   throw new Error(`My message: ${foo}`);
*   throw new Error(`My message: ${foo}` + 'another string');
*   ...
* @param {number} code
*/
function formatMuiErrorMessage(code, ...args) {
	const url = new URL(`https://mui.com/production-error/?code=${code}`);
	args.forEach((arg) => url.searchParams.append("args[]", arg));
	return `Minified MUI error #${code}; visit ${url} for the full message.`;
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/identifier.mjs
var identifier_default = "$$material";
//#endregion
//#region node_modules/.pnpm/@mui+styled-engine@9.3.0_@e_87caebfbfd78ed2bac6a2b96bb47faa0/node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.mjs
function isEmpty(obj) {
	return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles$2(props) {
	const { styles, defaultTheme = {} } = props;
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_emotion_react_cjs.Global, { styles: typeof styles === "function" ? (themeInput) => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles });
}
//#endregion
//#region node_modules/.pnpm/@mui+styled-engine@9.3.0_@e_87caebfbfd78ed2bac6a2b96bb47faa0/node_modules/@mui/styled-engine/index.mjs
/**
* @mui/styled-engine v9.3.0
*
* @license MIT
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
function styled$1(tag, options) {
	return (0, import_emotion_styled_cjs_default._default)(tag, options);
}
/**
* For internal usage in `@mui/system` package
*/
function internal_mutateStyles(tag, processor) {
	if (Array.isArray(tag.__emotion_styles)) tag.__emotion_styles = processor(tag.__emotion_styles);
}
var wrapper = [];
function internal_serializeStyles(styles) {
	wrapper[0] = styles;
	return (0, import_emotion_serialize_cjs.serializeStyles)(wrapper);
}
/** Same as StyledOptions but shouldForwardProp must be a type guard */
/**
* @typeparam ComponentProps  Props which will be included when withComponent is called
* @typeparam SpecificComponentProps  Props which will *not* be included when withComponent is called
*/
//#endregion
//#region node_modules/.pnpm/react-is@19.2.8/node_modules/react-is/cjs/react-is.production.js
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	exports.isValidElementType = function(type) {
		return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
	};
}));
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/deepmerge/deepmerge.mjs
var import_react_is = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_production();
})))();
function isPlainObject(item) {
	if (typeof item !== "object" || item === null) return false;
	const prototype = Object.getPrototypeOf(item);
	return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
	if (/*#__PURE__*/ import_react.isValidElement(source) || (0, import_react_is.isValidElementType)(source) || !isPlainObject(source)) return source;
	const output = {};
	Object.keys(source).forEach((key) => {
		output[key] = deepClone(source[key]);
	});
	return output;
}
/**
* Merge objects deeply.
* It will shallow copy React elements.
*
* If `options.clone` is set to `false` the source object will be merged directly into the target object.
*
* @example
* ```ts
* deepmerge({ a: { b: 1 }, d: 2 }, { a: { c: 2 }, d: 4 });
* // => { a: { b: 1, c: 2 }, d: 4 }
* ````
*
* @param target The target object.
* @param source The source object.
* @param options The merge options.
* @param options.clone Set to `false` to merge the source object directly into the target object.
* @returns The merged object.
*/
function deepmerge(target, source, options = { clone: true }) {
	const output = options.clone ? { ...target } : target;
	if (isPlainObject(target) && isPlainObject(source)) Object.keys(source).forEach((key) => {
		if (/*#__PURE__*/ import_react.isValidElement(source[key]) || (0, import_react_is.isValidElementType)(source[key])) output[key] = source[key];
		else if (isPlainObject(source[key]) && Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) output[key] = deepmerge(target[key], source[key], options);
		else if (options.clone) output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
		else output[key] = source[key];
	});
	return output;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/createBreakpoints/createBreakpoints.mjs
var sortBreakpointsValues = (values) => {
	const breakpointsAsArray = Object.keys(values).map((key) => ({
		key,
		val: values[key]
	})) || [];
	breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
	return breakpointsAsArray.reduce((acc, obj) => {
		return {
			...acc,
			[obj.key]: obj.val
		};
	}, {});
};
function createBreakpoints(breakpoints) {
	const { values = {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	}, unit = "px", step = 5, ...other } = breakpoints;
	const sortedValues = sortBreakpointsValues(values);
	const keys = Object.keys(sortedValues);
	function up(key) {
		return `@media (min-width:${typeof values[key] === "number" ? values[key] : key}${unit})`;
	}
	function down(key) {
		return `@media (max-width:${(typeof values[key] === "number" ? values[key] : key) - step / 100}${unit})`;
	}
	function between(start, end) {
		const endIndex = keys.indexOf(end);
		return `@media (min-width:${typeof values[start] === "number" ? values[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === "number" ? values[keys[endIndex]] : end) - step / 100}${unit})`;
	}
	function only(key) {
		if (keys.indexOf(key) + 1 < keys.length) return between(key, keys[keys.indexOf(key) + 1]);
		return up(key);
	}
	function not(key) {
		const keyIndex = keys.indexOf(key);
		if (keyIndex === 0) return up(keys[1]);
		if (keyIndex === keys.length - 1) return down(keys[keyIndex]);
		return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
	}
	const mediaKeys = [];
	for (let i = 0; i < keys.length; i += 1) mediaKeys.push(up(keys[i]));
	return {
		keys,
		values: sortedValues,
		up,
		down,
		between,
		only,
		not,
		unit,
		internal_mediaKeys: mediaKeys,
		...other
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/cssContainerQueries/cssContainerQueries.mjs
var MIN_WIDTH_PATTERN = /min-width:\s*([0-9.]+)/;
/**
* WARN: Mutably updates the `css` object.
* For using in `sx` prop to sort the breakpoint from low to high.
* Note: this function does not work and will not support multiple units.
*       e.g. input: { '@container (min-width:300px)': '1rem', '@container (min-width:40rem)': '2rem' }
*            output: { '@container (min-width:40rem)': '2rem', '@container (min-width:300px)': '1rem' } // since 40 < 300 even though 40rem > 300px
*/
function sortContainerQueries(theme, css) {
	if (!theme.containerQueries || !hasContainerQuery(css)) return css;
	const keys = [];
	for (const key in css) if (key.startsWith("@container")) keys.push(key);
	keys.sort((a, b) => {
		return +(a.match(MIN_WIDTH_PATTERN)?.[1] || 0) - +(b.match(MIN_WIDTH_PATTERN)?.[1] || 0);
	});
	const result = css;
	for (let i = 0; i < keys.length; i += 1) {
		const key = keys[i];
		const value = result[key];
		delete result[key];
		result[key] = value;
	}
	return result;
}
function hasContainerQuery(css) {
	for (const key in css) if (key.startsWith("@container")) return true;
	return false;
}
function isCqShorthand(breakpointKeys, value) {
	return value === "@" || value.startsWith("@") && (breakpointKeys.some((key) => value.startsWith(`@${key}`)) || !!value.match(/^@\d/));
}
function getContainerQuery(theme, shorthand) {
	const matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
	if (!matches) return null;
	const [, containerQuery, containerName] = matches;
	const value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
	return theme.containerQueries(containerName).up(value);
}
function cssContainerQueries(themeInput) {
	const toContainerQuery = (mediaQuery, name) => mediaQuery.replace("@media", name ? `@container ${name}` : "@container");
	function attachCq(node, name) {
		node.up = (...args) => toContainerQuery(themeInput.breakpoints.up(...args), name);
		node.down = (...args) => toContainerQuery(themeInput.breakpoints.down(...args), name);
		node.between = (...args) => toContainerQuery(themeInput.breakpoints.between(...args), name);
		node.only = (...args) => toContainerQuery(themeInput.breakpoints.only(...args), name);
		node.not = (...args) => {
			const result = toContainerQuery(themeInput.breakpoints.not(...args), name);
			if (result.includes("not all and")) return result.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or");
			return result;
		};
	}
	const node = {};
	const containerQueries = (name) => {
		attachCq(node, name);
		return node;
	};
	attachCq(containerQueries);
	return {
		...themeInput,
		containerQueries
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/createTheme/shape.mjs
var shape = { borderRadius: 4 };
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/isObjectEmpty/isObjectEmpty.mjs
function isObjectEmpty$1(object) {
	if (object == null) return true;
	for (const _ in object) return false;
	return true;
}
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/fastDeepAssign/fastDeepAssign.mjs
/**
* Assigns props from one object to another. Focused on performance, only normal objects with no
* prototype are supported.
*/
function fastDeepAssign(target, source) {
	const sourceIsArray = Array.isArray(source);
	const targetIsArray = Array.isArray(target);
	if (isPrimitive(source)) return source;
	else if (isPrimitiveOrBuiltIn(target)) return clone(source);
	else if (sourceIsArray && targetIsArray) return mergeArray(target, source);
	else if (sourceIsArray !== targetIsArray) return clone(source);
	else return mergeObject(target, source);
}
function cloneArray(value) {
	let i = 0;
	const il = value.length;
	const result = new Array(il);
	for (i = 0; i < il; i += 1) result[i] = clone(value[i]);
	return result;
}
function cloneObject(target) {
	const result = {};
	for (const key in target) {
		if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
		result[key] = clone(target[key]);
	}
	return result;
}
function mergeArray(target, source) {
	const tl = target.length;
	for (let i = 0; i < source.length; i += 1) target[tl + i] = clone(source[i]);
	return target;
}
function isMergeableObject(value) {
	return typeof value === "object" && value !== null && !(value instanceof RegExp) && !(value instanceof Date);
}
function isPrimitive(value) {
	return typeof value !== "object" || value === null;
}
function isPrimitiveOrBuiltIn(value) {
	return typeof value !== "object" || value === null || value instanceof RegExp || value instanceof Date;
}
function clone(entry) {
	return isMergeableObject(entry) ? Array.isArray(entry) ? cloneArray(entry) : cloneObject(entry) : entry;
}
function mergeObject(target, source) {
	for (const key in source) {
		if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
		if (key in target) target[key] = fastDeepAssign(target[key], source[key]);
		else target[key] = clone(source[key]);
	}
	return target;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/breakpoints/breakpoints.mjs
var EMPTY_THEME$2 = {};
/** @internal */
var values = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536
};
var DEFAULT_BREAKPOINTS = createBreakpoints({ values });
var defaultContainerQueries = { containerQueries: (containerName) => ({ up: (key) => {
	let result = typeof key === "number" ? key : values[key] || key;
	if (typeof result === "number") result = `${result}px`;
	return containerName ? `@container ${containerName} (min-width:${result})` : `@container (min-width:${result})`;
} }) };
function handleBreakpoints(props, propValue, styleFromPropValue) {
	const result = {};
	return iterateBreakpoints(result, props.theme, propValue, (mediaKey, value, initialKey) => {
		const finalValue = styleFromPropValue(value, initialKey);
		if (mediaKey) result[mediaKey] = finalValue;
		else fastDeepAssign(result, finalValue);
	});
}
function iterateBreakpoints(target, theme, propValue, callback) {
	theme ??= EMPTY_THEME$2;
	if (Array.isArray(propValue)) {
		const breakpoints = theme.breakpoints ?? DEFAULT_BREAKPOINTS;
		for (let i = 0; i < propValue.length; i += 1) buildBreakpoint(target, breakpoints.up(breakpoints.keys[i]), propValue[i], void 0, callback);
		return target;
	}
	if (typeof propValue === "object") {
		const breakpoints = theme.breakpoints ?? DEFAULT_BREAKPOINTS;
		const breakpointValues = breakpoints.values ?? values;
		for (const key in propValue) if (isCqShorthand(breakpoints.keys, key)) {
			const containerKey = getContainerQuery(theme.containerQueries ? theme : defaultContainerQueries, key);
			if (containerKey) buildBreakpoint(target, containerKey, propValue[key], key, callback);
		} else if (key in breakpointValues) buildBreakpoint(target, breakpoints.up(key), propValue[key], key, callback);
		else {
			const cssKey = key;
			target[cssKey] = propValue[cssKey];
		}
		return target;
	}
	callback(void 0, propValue);
	return target;
}
function buildBreakpoint(target, mediaKey, value, initialKey, callback) {
	target[mediaKey] ??= {};
	callback(mediaKey, value, initialKey);
}
/** @internal */
function createEmptyBreakpointObject(breakpoints = DEFAULT_BREAKPOINTS) {
	const { internal_mediaKeys: mediaKeys } = breakpoints;
	const result = {};
	for (let i = 0; i < mediaKeys.length; i += 1) result[mediaKeys[i]] = {};
	return result;
}
/** @internal */
function removeUnusedBreakpoints(breakpoints, style) {
	const breakpointKeys = breakpoints.internal_mediaKeys;
	for (let i = 0; i < breakpointKeys.length; i += 1) {
		const key = breakpointKeys[i];
		if (isObjectEmpty$1(style[key])) delete style[key];
	}
	return style;
}
function mergeBreakpointsInOrder(breakpoints, ...styles) {
	return removeUnusedBreakpoints(breakpoints, [createEmptyBreakpointObject(breakpoints), ...styles].reduce((prev, next) => deepmerge(prev, next), {}));
}
/** @internal */
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
	if (typeof breakpointValues !== "object") return {};
	const base = {};
	const breakpointsKeys = Object.keys(themeBreakpoints);
	if (Array.isArray(breakpointValues)) breakpointsKeys.forEach((breakpoint, i) => {
		if (i < breakpointValues.length) base[breakpoint] = true;
	});
	else breakpointsKeys.forEach((breakpoint) => {
		if (breakpointValues[breakpoint] != null) base[breakpoint] = true;
	});
	return base;
}
function resolveBreakpointValues(options) {
	const { values: breakpointValues, breakpoints: themeBreakpoints, base: customBase } = options;
	const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
	const keys = Object.keys(base);
	if (keys.length === 0) return breakpointValues;
	let previous;
	return keys.reduce((acc, breakpoint, i) => {
		if (Array.isArray(breakpointValues)) {
			acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
			previous = i;
		} else if (typeof breakpointValues === "object" && breakpointValues) {
			const bv = breakpointValues;
			acc[breakpoint] = bv[breakpoint] != null ? bv[breakpoint] : bv[previous];
			previous = breakpoint;
		} else acc[breakpoint] = breakpointValues;
		return acc;
	}, {});
}
function hasBreakpoint(breakpoints, value) {
	if (Array.isArray(value)) return true;
	if (typeof value === "object" && value !== null) {
		for (let i = 0; i < breakpoints.keys.length; i += 1) if (breakpoints.keys[i] in value) return true;
		const valueKeys = Object.keys(value);
		for (let i = 0; i < valueKeys.length; i += 1) if (isCqShorthand(breakpoints.keys, valueKeys[i])) return true;
	}
	return false;
}
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/capitalize/capitalize.mjs
function capitalize(string) {
	if (typeof string !== "string") throw new Error(formatMuiErrorMessage(7));
	return string.charAt(0).toUpperCase() + string.slice(1);
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/style/style.mjs
/**
* HACK: The `alternateProp` logic is there because our theme looks like this:
* {
*   typography: {
*     fontFamily: 'comic sans',
*     fontFamilyCode: 'courrier new',
*   }
* }
* And we support targetting:
* - `typography.fontFamily`     with `sx={{ fontFamily: 'default' }}`
* - `typography.fontFamilyCode` with `sx={{ fontFamily: 'code' }}`
*
* TODO(v7): Refactor our theme to look like this and remove the horrendous logic:
* {
*   typography: {
*     fontFamily: {
*       default: 'comic sans',
*       code: 'courrier new',
*     }
*   }
* }
*/
function getStyleValue2(themeMapping, transform, userValue, alternateProp) {
	let value;
	if (typeof themeMapping === "function") value = themeMapping(userValue);
	else if (Array.isArray(themeMapping)) value = themeMapping[userValue] || userValue;
	else if (typeof userValue === "string") value = getPath(themeMapping, userValue, true, alternateProp) || userValue;
	else value = userValue;
	if (transform) value = transform(value, userValue, themeMapping);
	return value;
}
function getPath(obj, pathInput, checkVars = true, alternateProp = void 0) {
	if (!obj || !pathInput) return null;
	const path = pathInput.split(".");
	if (obj.vars && checkVars) {
		const val = getPathImpl(obj.vars, path, alternateProp);
		if (val != null) return val;
	}
	return getPathImpl(obj, path, alternateProp);
}
function getPathImpl(object, path, alternateProp = void 0) {
	let lastResult = void 0;
	let result = object;
	let index = 0;
	while (index < path.length) {
		if (result === null || result === void 0) return result;
		lastResult = result;
		result = result[path[index]];
		index += 1;
	}
	if (alternateProp && result === void 0) {
		const lastKey = path[path.length - 1];
		const alternateKey = `${alternateProp}${lastKey === "default" ? "" : capitalize(lastKey)}`;
		return lastResult?.[alternateKey];
	}
	return result;
}
function style$1(options) {
	const { prop, cssProperty = options.prop, themeKey, transform } = options;
	const fn = (props) => {
		if (props[prop] == null) return null;
		const propValue = props[prop];
		const theme = props.theme;
		const themeMapping = getPath(theme, themeKey) || {};
		const styleFromPropValue = (valueFinal) => {
			const value = getStyleValue2(themeMapping, transform, valueFinal, prop);
			return cssProperty === false ? value : { [cssProperty]: value };
		};
		return handleBreakpoints(props, propValue, styleFromPropValue);
	};
	fn.propTypes = {};
	fn.filterProps = [prop];
	return fn;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/spacing/spacing.mjs
var EMPTY_THEME$1 = { internal_cache: {} };
var properties = {
	m: "margin",
	p: "padding"
};
var directions = {
	t: "Top",
	r: "Right",
	b: "Bottom",
	l: "Left",
	x: ["Left", "Right"],
	y: ["Top", "Bottom"]
};
var aliases = {
	marginX: "mx",
	marginY: "my",
	paddingX: "px",
	paddingY: "py"
};
var CSS_PROPERTIES = {};
for (const key in properties) CSS_PROPERTIES[key] = [properties[key]];
for (const keyProperty in properties) for (const keyDirection in directions) {
	const property = properties[keyProperty];
	const direction = directions[keyDirection];
	const value = Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
	CSS_PROPERTIES[keyProperty + keyDirection] = value;
}
for (const key in aliases) CSS_PROPERTIES[key] = CSS_PROPERTIES[aliases[key]];
/** @internal */
var marginKeys = /* @__PURE__ */ new Set([
	"m",
	"mt",
	"mr",
	"mb",
	"ml",
	"mx",
	"my",
	"margin",
	"marginTop",
	"marginRight",
	"marginBottom",
	"marginLeft",
	"marginX",
	"marginY",
	"marginInline",
	"marginInlineStart",
	"marginInlineEnd",
	"marginBlock",
	"marginBlockStart",
	"marginBlockEnd"
]);
/** @internal */
var paddingKeys = /* @__PURE__ */ new Set([
	"p",
	"pt",
	"pr",
	"pb",
	"pl",
	"px",
	"py",
	"padding",
	"paddingTop",
	"paddingRight",
	"paddingBottom",
	"paddingLeft",
	"paddingX",
	"paddingY",
	"paddingInline",
	"paddingInlineStart",
	"paddingInlineEnd",
	"paddingBlock",
	"paddingBlockStart",
	"paddingBlockEnd"
]);
var spacingKeys = /* @__PURE__ */ new Set([...marginKeys, ...paddingKeys]);
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
	const themeSpacing = getPath(theme, themeKey, true) ?? defaultValue;
	if (typeof themeSpacing === "number" || typeof themeSpacing === "string") return (val) => {
		if (typeof val === "string") return val;
		if (typeof themeSpacing === "string") {
			if (themeSpacing.startsWith("var(") && val === 0) return 0;
			if (themeSpacing.startsWith("var(") && val === 1) return themeSpacing;
			return `calc(${val} * ${themeSpacing})`;
		}
		return themeSpacing * val;
	};
	if (Array.isArray(themeSpacing)) return (val) => {
		if (typeof val === "string") return val;
		const transformed = themeSpacing[Math.abs(val)];
		if (val >= 0) return transformed;
		if (typeof transformed === "number") return -transformed;
		if (typeof transformed === "string" && transformed.startsWith("var(")) return `calc(-1 * ${transformed})`;
		return `-${transformed}`;
	};
	if (typeof themeSpacing === "function") return themeSpacing;
	return () => void 0;
}
function createUnarySpacing(theme) {
	return createUnaryUnit(theme, "spacing", 8, "spacing");
}
function getValue(transformer, propValue) {
	if (typeof propValue === "string" || propValue == null) return propValue;
	return transformer(propValue);
}
var container = [""];
function style(props, keys) {
	const theme = props.theme ?? EMPTY_THEME$1;
	const transformer = theme?.internal_cache?.unarySpacing ?? createUnarySpacing(theme);
	const result = {};
	for (const prop in props) {
		if (!keys.has(prop)) continue;
		const cssProperties = CSS_PROPERTIES[prop] ?? (container[0] = prop, container);
		const propValue = props[prop];
		iterateBreakpoints(result, props.theme, propValue, (mediaKey, value) => {
			const target = mediaKey ? result[mediaKey] : result;
			for (let i = 0; i < cssProperties.length; i += 1) target[cssProperties[i]] = getValue(transformer, value);
		});
	}
	return result;
}
function marginFn(props) {
	return style(props, marginKeys);
}
marginFn.propTypes = {};
marginFn.filterProps = marginKeys;
var margin = marginFn;
function paddingFn(props) {
	return style(props, paddingKeys);
}
paddingFn.propTypes = {};
paddingFn.filterProps = paddingKeys;
var padding = paddingFn;
function spacingFn(props) {
	return style(props, spacingKeys);
}
spacingFn.propTypes = {};
spacingFn.filterProps = spacingKeys;
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/createTheme/createSpacing.mjs
function createSpacing(spacingInput = 8, transform = createUnarySpacing({ spacing: spacingInput })) {
	if (spacingInput.mui) return spacingInput;
	const spacing = (...argsInput) => {
		return (argsInput.length === 0 ? [1] : argsInput).map((argument) => {
			const output = transform(argument);
			return typeof output === "number" ? `${output}px` : output;
		}).join(" ");
	};
	spacing.mui = true;
	return spacing;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/compose/compose.mjs
function compose(...styles) {
	const handlers = styles.reduce((acc, style) => {
		style.filterProps.forEach((prop) => {
			acc[prop] = style;
		});
		return acc;
	}, {});
	const fn = (props) => {
		const result = {};
		for (const prop in props) if (handlers[prop]) fastDeepAssign(result, handlers[prop](props));
		return result;
	};
	fn.propTypes = {};
	fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
	return fn;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/borders/borders.mjs
/** @internal */
function borderTransform(value) {
	if (typeof value !== "number") return value;
	return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
	return style$1({
		prop,
		themeKey: "borders",
		transform
	});
}
var border = createBorderStyle("border", borderTransform);
var borderTop = createBorderStyle("borderTop", borderTransform);
var borderRight = createBorderStyle("borderRight", borderTransform);
var borderBottom = createBorderStyle("borderBottom", borderTransform);
var borderLeft = createBorderStyle("borderLeft", borderTransform);
var borderColor = createBorderStyle("borderColor");
var borderTopColor = createBorderStyle("borderTopColor");
var borderRightColor = createBorderStyle("borderRightColor");
var borderBottomColor = createBorderStyle("borderBottomColor");
var borderLeftColor = createBorderStyle("borderLeftColor");
var outline = createBorderStyle("outline", borderTransform);
var outlineColor = createBorderStyle("outlineColor");
var borderRadius = (props) => {
	if (props.borderRadius !== void 0 && props.borderRadius !== null) {
		const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
		const styleFromPropValue = (propValue) => ({ borderRadius: getValue(transformer, propValue) });
		return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
	}
	return null;
};
borderRadius.propTypes = {};
borderRadius.filterProps = ["borderRadius"];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/cssGrid/cssGrid.mjs
var gap = (props) => {
	if (props.gap !== void 0 && props.gap !== null) {
		const transformer = createUnaryUnit(props.theme, "spacing", 8, "gap");
		const styleFromPropValue = (propValue) => ({ gap: getValue(transformer, propValue) });
		return handleBreakpoints(props, props.gap, styleFromPropValue);
	}
	return null;
};
gap.propTypes = {};
gap.filterProps = ["gap"];
var columnGap = (props) => {
	if (props.columnGap !== void 0 && props.columnGap !== null) {
		const transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
		const styleFromPropValue = (propValue) => ({ columnGap: getValue(transformer, propValue) });
		return handleBreakpoints(props, props.columnGap, styleFromPropValue);
	}
	return null;
};
columnGap.propTypes = {};
columnGap.filterProps = ["columnGap"];
var rowGap = (props) => {
	if (props.rowGap !== void 0 && props.rowGap !== null) {
		const transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
		const styleFromPropValue = (propValue) => ({ rowGap: getValue(transformer, propValue) });
		return handleBreakpoints(props, props.rowGap, styleFromPropValue);
	}
	return null;
};
rowGap.propTypes = {};
rowGap.filterProps = ["rowGap"];
compose(gap, columnGap, rowGap, style$1({ prop: "gridColumn" }), style$1({ prop: "gridRow" }), style$1({ prop: "gridAutoFlow" }), style$1({ prop: "gridAutoColumns" }), style$1({ prop: "gridAutoRows" }), style$1({ prop: "gridTemplateColumns" }), style$1({ prop: "gridTemplateRows" }), style$1({ prop: "gridTemplateAreas" }), style$1({ prop: "gridArea" }));
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/palette/palette.mjs
/** @internal */
function paletteTransform(value, userValue) {
	if (userValue === "grey") return userValue;
	return value;
}
compose(style$1({
	prop: "color",
	themeKey: "palette",
	transform: paletteTransform
}), style$1({
	prop: "bgcolor",
	cssProperty: "backgroundColor",
	themeKey: "palette",
	transform: paletteTransform
}), style$1({
	prop: "backgroundColor",
	themeKey: "palette",
	transform: paletteTransform
}));
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/sizing/sizing.mjs
var breakpointsValues = values;
/** @internal */
function sizingTransform(value) {
	return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
var width = style$1({
	prop: "width",
	transform: sizingTransform
});
var maxWidth = (props) => {
	if (props.maxWidth !== void 0 && props.maxWidth !== null) {
		const styleFromPropValue = (propValue) => {
			const breakpoint = props.theme?.breakpoints?.values?.[propValue] || breakpointsValues[propValue];
			if (!breakpoint) return { maxWidth: sizingTransform(propValue) };
			if (props.theme?.breakpoints?.unit !== "px") return { maxWidth: `${breakpoint}${props.theme.breakpoints.unit}` };
			return { maxWidth: breakpoint };
		};
		return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
	}
	return null;
};
maxWidth.filterProps = ["maxWidth"];
var minWidth = style$1({
	prop: "minWidth",
	transform: sizingTransform
});
var height = style$1({
	prop: "height",
	transform: sizingTransform
});
var maxHeight = style$1({
	prop: "maxHeight",
	transform: sizingTransform
});
var minHeight = style$1({
	prop: "minHeight",
	transform: sizingTransform
});
style$1({
	prop: "size",
	cssProperty: "width",
	transform: sizingTransform
});
style$1({
	prop: "size",
	cssProperty: "height",
	transform: sizingTransform
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, style$1({ prop: "boxSizing" }));
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/styleFunctionSx/defaultSxConfig.mjs
var defaultSxConfig = {
	border: {
		themeKey: "borders",
		transform: borderTransform
	},
	borderTop: {
		themeKey: "borders",
		transform: borderTransform
	},
	borderRight: {
		themeKey: "borders",
		transform: borderTransform
	},
	borderBottom: {
		themeKey: "borders",
		transform: borderTransform
	},
	borderLeft: {
		themeKey: "borders",
		transform: borderTransform
	},
	borderColor: { themeKey: "palette" },
	borderTopColor: { themeKey: "palette" },
	borderRightColor: { themeKey: "palette" },
	borderBottomColor: { themeKey: "palette" },
	borderLeftColor: { themeKey: "palette" },
	outline: {
		themeKey: "borders",
		transform: borderTransform
	},
	outlineColor: { themeKey: "palette" },
	borderRadius: {
		themeKey: "shape.borderRadius",
		style: borderRadius
	},
	color: {
		themeKey: "palette",
		transform: paletteTransform
	},
	bgcolor: {
		themeKey: "palette",
		cssProperty: "backgroundColor",
		transform: paletteTransform
	},
	backgroundColor: {
		themeKey: "palette",
		transform: paletteTransform
	},
	p: { style: padding },
	pt: { style: padding },
	pr: { style: padding },
	pb: { style: padding },
	pl: { style: padding },
	px: { style: padding },
	py: { style: padding },
	padding: { style: padding },
	paddingTop: { style: padding },
	paddingRight: { style: padding },
	paddingBottom: { style: padding },
	paddingLeft: { style: padding },
	paddingX: { style: padding },
	paddingY: { style: padding },
	paddingInline: { style: padding },
	paddingInlineStart: { style: padding },
	paddingInlineEnd: { style: padding },
	paddingBlock: { style: padding },
	paddingBlockStart: { style: padding },
	paddingBlockEnd: { style: padding },
	m: { style: margin },
	mt: { style: margin },
	mr: { style: margin },
	mb: { style: margin },
	ml: { style: margin },
	mx: { style: margin },
	my: { style: margin },
	margin: { style: margin },
	marginTop: { style: margin },
	marginRight: { style: margin },
	marginBottom: { style: margin },
	marginLeft: { style: margin },
	marginX: { style: margin },
	marginY: { style: margin },
	marginInline: { style: margin },
	marginInlineStart: { style: margin },
	marginInlineEnd: { style: margin },
	marginBlock: { style: margin },
	marginBlockStart: { style: margin },
	marginBlockEnd: { style: margin },
	displayPrint: {
		cssProperty: false,
		transform: (value) => ({ "@media print": { display: value } })
	},
	display: {},
	overflow: {},
	textOverflow: {},
	visibility: {},
	whiteSpace: {},
	flexBasis: {},
	flexDirection: {},
	flexWrap: {},
	justifyContent: {},
	alignItems: {},
	alignContent: {},
	order: {},
	flex: {},
	flexGrow: {},
	flexShrink: {},
	alignSelf: {},
	justifyItems: {},
	justifySelf: {},
	gap: { style: gap },
	rowGap: { style: rowGap },
	columnGap: { style: columnGap },
	gridColumn: {},
	gridRow: {},
	gridAutoFlow: {},
	gridAutoColumns: {},
	gridAutoRows: {},
	gridTemplateColumns: {},
	gridTemplateRows: {},
	gridTemplateAreas: {},
	gridArea: {},
	position: {},
	zIndex: { themeKey: "zIndex" },
	top: {},
	right: {},
	bottom: {},
	left: {},
	boxShadow: { themeKey: "shadows" },
	width: { transform: sizingTransform },
	maxWidth: { style: maxWidth },
	minWidth: { transform: sizingTransform },
	height: { transform: sizingTransform },
	maxHeight: { transform: sizingTransform },
	minHeight: { transform: sizingTransform },
	boxSizing: {},
	font: { themeKey: "font" },
	fontFamily: { themeKey: "typography" },
	fontSize: { themeKey: "typography" },
	fontStyle: { themeKey: "typography" },
	fontWeight: { themeKey: "typography" },
	letterSpacing: {},
	textTransform: {},
	lineHeight: {},
	textAlign: {},
	typography: {
		cssProperty: false,
		themeKey: "typography"
	}
};
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/styleFunctionSx/styleFunctionSx.mjs
var EMPTY_THEME = {};
function unstable_createStyleFunctionSx() {
	function styleFunctionSx(props) {
		if (!props.sx) return null;
		const { sx, theme = EMPTY_THEME, nested } = props;
		const config = theme.unstable_sxConfig ?? defaultSxConfig;
		const wrapper = {
			sx: null,
			theme,
			nested: true
		};
		function process(sxInput) {
			let sxObject = sxInput;
			if (typeof sxInput === "function") sxObject = sxInput(theme);
			else if (typeof sxInput !== "object") return sxInput;
			if (!sxObject) return null;
			const breakpoints = theme.breakpoints ?? DEFAULT_BREAKPOINTS;
			const css = createEmptyBreakpointObject(breakpoints);
			for (const styleKey in sxObject) {
				const value = callIfFn(sxObject[styleKey], theme);
				if (value === null || value === void 0) continue;
				if (typeof value !== "object") {
					setThemeValue(css, styleKey, value, theme, config);
					continue;
				}
				if (config[styleKey]) {
					setThemeValue(css, styleKey, value, theme, config);
					continue;
				}
				if (hasBreakpoint(breakpoints, value)) iterateBreakpoints(css, props.theme, value, (mediaKey, finalValue) => {
					css[mediaKey][styleKey] = finalValue;
				});
				else {
					wrapper.sx = value;
					css[styleKey] = styleFunctionSx(wrapper);
				}
			}
			if (!nested && theme.modularCssLayers) return { "@layer sx": sortContainerQueries(theme, removeUnusedBreakpoints(breakpoints, css)) };
			return sortContainerQueries(theme, removeUnusedBreakpoints(breakpoints, css));
		}
		return Array.isArray(sx) ? sx.map(process) : process(sx);
	}
	styleFunctionSx.filterProps = ["sx"];
	return styleFunctionSx;
}
var styleFunctionSx_default = unstable_createStyleFunctionSx();
function setThemeValue(css, prop, value, theme, config) {
	const options = config[prop];
	if (!options) {
		css[prop] = value;
		return;
	}
	if (value == null) return;
	const { themeKey } = options;
	if (themeKey === "typography" && value === "inherit") {
		css[prop] = value;
		return;
	}
	const { style } = options;
	if (style) {
		fastDeepAssign(css, style({
			[prop]: value,
			theme
		}));
		return;
	}
	const { cssProperty = prop, transform } = options;
	const themeMapping = getPath(theme, themeKey);
	iterateBreakpoints(css, theme, value, (mediaKey, valueFinal) => {
		const finalValue = getStyleValue2(themeMapping, transform, valueFinal, prop);
		if (cssProperty === false) if (mediaKey) fastDeepAssign(css[mediaKey], finalValue);
		else fastDeepAssign(css, finalValue);
		else if (mediaKey) css[mediaKey][cssProperty] = finalValue;
		else css[cssProperty] = finalValue;
	});
}
function callIfFn(maybeFn, arg) {
	return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/createTheme/applyStyles.mjs
/**
* A universal utility to style components with multiple color modes. Always use it from the theme object.
* It works with:
*  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
*  - [CSS theme variables](https://mui.com/material-ui/customization/css-theme-variables/overview/)
*  - Zero-runtime engine
*
* Tips: Use an array over object spread and place `theme.applyStyles()` last.
*
* With the styled function:
* ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
* 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
*
* With the sx prop:
* ✅ [{ background: '#e5e5e5' }, theme => theme.applyStyles('dark', { background: '#1c1c1c' })]
* 🚫 { background: '#e5e5e5', ...theme => theme.applyStyles('dark', { background: '#1c1c1c' })}
*
* @example
* 1. using with `styled`:
* ```jsx
*   const Component = styled('div')(({ theme }) => [
*     { background: '#e5e5e5' },
*     theme.applyStyles('dark', {
*       background: '#1c1c1c',
*       color: '#fff',
*     }),
*   ]);
* ```
*
* @example
* 2. using with `sx` prop:
* ```jsx
*   <Box sx={[
*     { background: '#e5e5e5' },
*     theme => theme.applyStyles('dark', {
*        background: '#1c1c1c',
*        color: '#fff',
*      }),
*     ]}
*   />
* ```
*
* @example
* 3. theming a component:
* ```jsx
*   extendTheme({
*     components: {
*       MuiButton: {
*         styleOverrides: {
*           root: ({ theme }) => [
*             { background: '#e5e5e5' },
*             theme.applyStyles('dark', {
*               background: '#1c1c1c',
*               color: '#fff',
*             }),
*           ],
*         },
*       }
*     }
*   })
*```
*/
function applyStyles(key, styles) {
	const theme = this;
	if (theme.vars) {
		if (!theme.colorSchemes?.[key] || typeof theme.getColorSchemeSelector !== "function") return {};
		let selector = theme.getColorSchemeSelector(key);
		if (selector === "&") return styles;
		if (selector.includes("data-") || selector.includes(".")) selector = `*:where(${selector.replace(/\s*&$/, "")}) &`;
		return { [selector]: styles };
	}
	if (theme.palette.mode === key) return styles;
	return {};
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/createTheme/createTheme.mjs
function createTheme$1(options = {}, ...args) {
	const { breakpoints: breakpointsInput = {}, palette: paletteInput = {}, spacing: spacingInput, shape: shapeInput = {}, ...other } = options;
	const breakpoints = createBreakpoints(breakpointsInput);
	const spacing = createSpacing(spacingInput);
	let muiTheme = deepmerge({
		breakpoints,
		direction: "ltr",
		components: {},
		palette: {
			mode: "light",
			...paletteInput
		},
		spacing,
		shape: {
			...shape,
			...shapeInput
		}
	}, other);
	muiTheme = cssContainerQueries(muiTheme);
	muiTheme.applyStyles = applyStyles;
	muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
	muiTheme.unstable_sxConfig = {
		...defaultSxConfig,
		...other?.unstable_sxConfig
	};
	muiTheme.unstable_sx = function sx(props) {
		return styleFunctionSx_default({
			sx: props,
			theme: this
		});
	};
	muiTheme.internal_cache = {};
	return muiTheme;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/useThemeWithoutDefault/useThemeWithoutDefault.mjs
function isObjectEmpty(obj) {
	return Object.keys(obj).length === 0;
}
function useThemeWithoutDefault(defaultTheme = null) {
	const contextTheme = import_react.useContext(import_emotion_react_cjs.ThemeContext);
	return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/useTheme/useTheme.mjs
var systemDefaultTheme$1 = createTheme$1();
function useTheme$1(defaultTheme = systemDefaultTheme$1) {
	return useThemeWithoutDefault(defaultTheme);
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/GlobalStyles/GlobalStyles.mjs
function wrapGlobalLayer(styles) {
	const serialized = internal_serializeStyles(styles);
	if (styles !== serialized && serialized.styles) {
		if (!serialized.styles.match(/^@layer\s+[^{]*$/)) serialized.styles = `@layer global{${serialized.styles}}`;
		return serialized;
	}
	return styles;
}
function GlobalStyles$1({ styles, themeId, defaultTheme = {} }) {
	const upperTheme = useTheme$1(defaultTheme);
	const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
	let globalStyles = typeof styles === "function" ? styles(resolvedTheme) : styles;
	if (resolvedTheme.modularCssLayers) if (Array.isArray(globalStyles)) globalStyles = globalStyles.map((styleArg) => {
		if (typeof styleArg === "function") return wrapGlobalLayer(styleArg(resolvedTheme));
		return wrapGlobalLayer(styleArg);
	});
	else globalStyles = wrapGlobalLayer(globalStyles);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(GlobalStyles$2, { styles: globalStyles });
}
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs
var defaultGenerator = (componentName) => componentName;
var createClassNameGenerator = () => {
	let generate = defaultGenerator;
	return {
		configure(generator) {
			generate = generator;
		},
		generate(componentName) {
			return generate(componentName);
		},
		reset() {
			generate = defaultGenerator;
		}
	};
};
var ClassNameGenerator = createClassNameGenerator();
//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs
var globalStateClasses = {
	active: "active",
	checked: "checked",
	completed: "completed",
	disabled: "disabled",
	error: "error",
	expanded: "expanded",
	focused: "focused",
	focusVisible: "focusVisible",
	open: "open",
	readOnly: "readOnly",
	required: "required",
	selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
	const globalStateClass = globalStateClasses[slot];
	return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
}
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
	const result = {};
	slots.forEach((slot) => {
		result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
	});
	return result;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/preprocessStyles.mjs
function preprocessStyles(input) {
	const { variants, ...style } = input;
	const result = {
		variants,
		style: internal_serializeStyles(style),
		isProcessed: true
	};
	if (result.style === style) return result;
	if (variants) variants.forEach((variant) => {
		if (typeof variant.style !== "function") variant.style = internal_serializeStyles(variant.style);
	});
	return result;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/createStyled/createStyled.mjs
var systemDefaultTheme = createTheme$1();
function shouldForwardProp(prop) {
	return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
function shallowLayer(serialized, layerName) {
	if (layerName && serialized && typeof serialized === "object" && serialized.styles && !serialized.styles.startsWith("@layer")) serialized.styles = `@layer ${layerName}{${String(serialized.styles)}}`;
	return serialized;
}
function defaultOverridesResolver(slot) {
	if (!slot) return null;
	return (_props, styles) => styles[slot];
}
function attachTheme(props, themeId, defaultTheme) {
	props.theme = isObjectEmpty$1(props.theme) ? defaultTheme : props.theme[themeId] || props.theme;
}
function processStyle(props, style, layerName) {
	const resolvedStyle = typeof style === "function" ? style(props) : style;
	if (Array.isArray(resolvedStyle)) return resolvedStyle.flatMap((subStyle) => processStyle(props, subStyle, layerName));
	if (Array.isArray(resolvedStyle?.variants)) {
		let rootStyle;
		if (resolvedStyle.isProcessed) rootStyle = layerName ? shallowLayer(resolvedStyle.style, layerName) : resolvedStyle.style;
		else {
			const { variants, ...otherStyles } = resolvedStyle;
			rootStyle = layerName ? shallowLayer(internal_serializeStyles(otherStyles), layerName) : otherStyles;
		}
		return processStyleVariants(props, resolvedStyle.variants, [rootStyle], layerName);
	}
	if (resolvedStyle?.isProcessed) return layerName ? shallowLayer(internal_serializeStyles(resolvedStyle.style), layerName) : resolvedStyle.style;
	return layerName ? shallowLayer(internal_serializeStyles(resolvedStyle), layerName) : resolvedStyle;
}
function processStyleVariants(props, variants, results = [], layerName = void 0) {
	let mergedState;
	variantLoop: for (let i = 0; i < variants.length; i += 1) {
		const variant = variants[i];
		if (typeof variant.props === "function") {
			mergedState ??= {
				...props,
				...props.ownerState,
				ownerState: props.ownerState
			};
			if (!variant.props(mergedState)) continue;
		} else for (const key in variant.props) if (props[key] !== variant.props[key] && props.ownerState?.[key] !== variant.props[key]) continue variantLoop;
		if (typeof variant.style === "function") {
			mergedState ??= {
				...props,
				...props.ownerState,
				ownerState: props.ownerState
			};
			results.push(layerName ? shallowLayer(internal_serializeStyles(variant.style(mergedState)), layerName) : variant.style(mergedState));
		} else results.push(layerName ? shallowLayer(internal_serializeStyles(variant.style), layerName) : variant.style);
	}
	return results;
}
function createStyled(input = {}) {
	const { themeId, defaultTheme = systemDefaultTheme, rootShouldForwardProp = shouldForwardProp, slotShouldForwardProp = shouldForwardProp } = input;
	function styleAttachTheme(props) {
		attachTheme(props, themeId, defaultTheme);
	}
	const styled = (tag, inputOptions = {}) => {
		internal_mutateStyles(tag, (styles) => styles.filter((style) => style !== styleFunctionSx_default));
		const { name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)), ...options } = inputOptions;
		const layerName = componentName && componentName.startsWith("Mui") || !!componentSlot ? "components" : "custom";
		const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false;
		const skipSx = inputSkipSx || false;
		let shouldForwardPropOption = shouldForwardProp;
		if (componentSlot === "Root" || componentSlot === "root") shouldForwardPropOption = rootShouldForwardProp;
		else if (componentSlot) shouldForwardPropOption = slotShouldForwardProp;
		else if (isStringTag(tag)) shouldForwardPropOption = void 0;
		const defaultStyledResolver = styled$1(tag, {
			shouldForwardProp: shouldForwardPropOption,
			label: void 0,
			...options
		});
		const transformStyle = (style) => {
			if (style.__emotion_real === style) return style;
			if (typeof style === "function") return function styleFunctionProcessor(props) {
				return processStyle(props, style, props.theme.modularCssLayers ? layerName : void 0);
			};
			if (isPlainObject(style)) {
				const serialized = preprocessStyles(style);
				return function styleObjectProcessor(props) {
					if (!serialized.variants) return props.theme.modularCssLayers ? shallowLayer(serialized.style, layerName) : serialized.style;
					return processStyle(props, serialized, props.theme.modularCssLayers ? layerName : void 0);
				};
			}
			return style;
		};
		const muiStyledResolver = (...expressionsInput) => {
			const expressionsHead = [];
			const expressionsBody = expressionsInput.map(transformStyle);
			const expressionsTail = [];
			expressionsHead.push(styleAttachTheme);
			if (componentName && overridesResolver) expressionsTail.push(function styleThemeOverrides(props) {
				const styleOverrides = props.theme.components?.[componentName]?.styleOverrides;
				if (!styleOverrides) return null;
				const resolvedStyleOverrides = {};
				for (const slotKey in styleOverrides) resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey], props.theme.modularCssLayers ? "theme" : void 0);
				return overridesResolver(props, resolvedStyleOverrides);
			});
			if (componentName && !skipVariantsResolver) expressionsTail.push(function styleThemeVariants(props) {
				const themeVariants = props.theme?.components?.[componentName]?.variants;
				if (!themeVariants) return null;
				return processStyleVariants(props, themeVariants, [], props.theme.modularCssLayers ? "theme" : void 0);
			});
			if (!skipSx) expressionsTail.push(styleFunctionSx_default);
			if (Array.isArray(expressionsBody[0])) {
				const inputStrings = expressionsBody.shift();
				const placeholdersHead = new Array(expressionsHead.length).fill("");
				const placeholdersTail = new Array(expressionsTail.length).fill("");
				let outputStrings;
				outputStrings = [
					...placeholdersHead,
					...inputStrings,
					...placeholdersTail
				];
				outputStrings.raw = [
					...placeholdersHead,
					...inputStrings.raw,
					...placeholdersTail
				];
				expressionsHead.unshift(outputStrings);
			}
			const expressions = [
				...expressionsHead,
				...expressionsBody,
				...expressionsTail
			];
			const Component = defaultStyledResolver(...expressions);
			if (tag.muiName) Component.muiName = tag.muiName;
			return Component;
		};
		if (defaultStyledResolver.withConfig) muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
		return muiStyledResolver;
	};
	return styled;
}
function isStringTag(tag) {
	return typeof tag === "string" && tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
	if (!string) return string;
	return string.charAt(0).toLowerCase() + string.slice(1);
}
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/resolveProps/resolveProps.mjs
/**
* Add keys, values of `defaultProps` that does not exist in `props`
* @param defaultProps
* @param props
* @param mergeClassNameAndStyle If `true`, merges `className` and `style` props instead of overriding them.
*   When `false` (default), props override defaultProps. When `true`, `className` values are concatenated
*   and `style` objects are merged with props taking precedence.
* @returns resolved props
*/
function resolveProps(defaultProps, props, mergeClassNameAndStyle = false) {
	const output = { ...props };
	for (const key in defaultProps) if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
		const propName = key;
		if (propName === "components" || propName === "slots") output[propName] = {
			...defaultProps[propName],
			...output[propName]
		};
		else if (propName === "componentsProps" || propName === "slotProps") {
			const defaultSlotProps = defaultProps[propName];
			const slotProps = props[propName];
			if (!slotProps) output[propName] = defaultSlotProps || {};
			else if (!defaultSlotProps) output[propName] = slotProps;
			else {
				output[propName] = { ...slotProps };
				for (const slotKey in defaultSlotProps) if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
					const slotPropName = slotKey;
					output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName], mergeClassNameAndStyle);
				}
			}
		} else if (propName === "className" && mergeClassNameAndStyle && props.className !== void 0) output.className = clsx(defaultProps?.className, props?.className);
		else if (propName === "style" && mergeClassNameAndStyle && props.style) output.style = {
			...defaultProps?.style,
			...props?.style
		};
		else if (output[propName] === void 0) output[propName] = defaultProps[propName];
	}
	return output;
}
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/clamp/clamp.mjs
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
	return Math.max(min, Math.min(val, max));
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/colorManipulator/colorManipulator.mjs
/**
* Returns a number whose value is limited to the given range.
* @param {number} value The value to be clamped
* @param {number} min The lower boundary of the output range
* @param {number} max The upper boundary of the output range
* @returns {number} A number in the range [min, max]
*/
function clampWrapper(value, min = 0, max = 1) {
	return clamp(value, min, max);
}
/**
* Converts a color from CSS hex format to CSS rgb format.
* @param {string} color - Hex color, i.e. #nnn or #nnnnnn
* @returns {string} A CSS rgb color string
*/
function hexToRgb(color) {
	color = color.slice(1);
	const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, "g");
	let colors = color.match(re);
	if (colors && colors[0].length === 1) colors = colors.map((n) => n + n);
	return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => {
		return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
	}).join(", ")})` : "";
}
/**
* Returns an object with the type and values of a color.
*
* Note: Does not support rgb % values.
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
* @returns {object} - A MUI color object: {type: string, values: number[]}
*/
function decomposeColor(color) {
	if (color.type) return color;
	if (color.charAt(0) === "#") return decomposeColor(hexToRgb(color));
	const marker = color.indexOf("(");
	const type = color.substring(0, marker);
	if (![
		"rgb",
		"rgba",
		"hsl",
		"hsla",
		"color"
	].includes(type)) throw new Error(formatMuiErrorMessage(9, color));
	let values = color.substring(marker + 1, color.length - 1);
	let colorSpace;
	if (type === "color") {
		values = values.split(" ");
		colorSpace = values.shift();
		if (values.length === 4 && values[3].charAt(0) === "/") values[3] = values[3].slice(1);
		if (![
			"srgb",
			"display-p3",
			"a98-rgb",
			"prophoto-rgb",
			"rec-2020"
		].includes(colorSpace)) throw new Error(formatMuiErrorMessage(10, colorSpace));
	} else values = values.split(",");
	values = values.map((value) => parseFloat(value));
	return {
		type,
		values,
		colorSpace
	};
}
/**
* Returns a channel created from the input color.
*
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
* @returns {string} - The channel for the color, that can be used in rgba or hsla colors
*/
var colorChannel = (color) => {
	const decomposedColor = decomposeColor(color);
	return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.includes("hsl") && idx !== 0 ? `${val}%` : val).join(" ");
};
var private_safeColorChannel = (color, warning) => {
	try {
		return colorChannel(color);
	} catch (error) {
		return color;
	}
};
/**
* Converts a color object with type and values to a string.
* @param {object} color - Decomposed color
* @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
* @param {array} color.values - [n,n,n] or [n,n,n,n]
* @returns {string} A CSS color string
*/
function recomposeColor(color) {
	const { type, colorSpace } = color;
	let { values } = color;
	if (type.includes("rgb")) values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
	else if (type.includes("hsl")) {
		values[1] = `${values[1]}%`;
		values[2] = `${values[2]}%`;
	}
	if (type.includes("color")) values = `${colorSpace} ${values.join(" ")}`;
	else values = `${values.join(", ")}`;
	return `${type}(${values})`;
}
/**
* Converts a color from hsl format to rgb format.
* @param {string} color - HSL color values
* @returns {string} rgb color values
*/
function hslToRgb(color) {
	color = decomposeColor(color);
	const { values } = color;
	const h = values[0];
	const s = values[1] / 100;
	const l = values[2] / 100;
	const a = s * Math.min(l, 1 - l);
	const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	let type = "rgb";
	const rgb = [
		Math.round(f(0) * 255),
		Math.round(f(8) * 255),
		Math.round(f(4) * 255)
	];
	if (color.type === "hsla") {
		type += "a";
		rgb.push(values[3]);
	}
	return recomposeColor({
		type,
		values: rgb
	});
}
/**
* The relative brightness of any point in a color space,
* normalized to 0 for darkest black and 1 for lightest white.
*
* Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
* @returns {number} The relative brightness of the color in the range 0 - 1
*/
function getLuminance(color) {
	color = decomposeColor(color);
	let rgb = color.type === "hsl" || color.type === "hsla" ? decomposeColor(hslToRgb(color)).values : color.values;
	rgb = rgb.map((val) => {
		if (color.type !== "color") val /= 255;
		return val <= .03928 ? val / 12.92 : ((val + .055) / 1.055) ** 2.4;
	});
	return Number((.2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2]).toFixed(3));
}
/**
* Calculates the contrast ratio between two colors.
*
* Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
* @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
* @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
* @returns {number} A contrast ratio value in the range 0 - 21.
*/
function getContrastRatio(foreground, background) {
	const lumA = getLuminance(foreground);
	const lumB = getLuminance(background);
	return (Math.max(lumA, lumB) + .05) / (Math.min(lumA, lumB) + .05);
}
/**
* Sets the absolute transparency of a color.
* Any existing alpha values are overwritten.
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
* @param {number} value - value to set the alpha channel to in the range 0 - 1
* @returns {string} A CSS color string. Hex input values are returned as rgb
*/
function alpha(color, value) {
	color = decomposeColor(color);
	value = clampWrapper(value);
	if (color.type === "rgb" || color.type === "hsl") color.type += "a";
	if (color.type === "color") color.values[3] = `/${value}`;
	else color.values[3] = value;
	return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
	try {
		return alpha(color, value);
	} catch (error) {
		return color;
	}
}
/**
* Darkens a color.
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
* @param {number} coefficient - multiplier in the range 0 - 1
* @returns {string} A CSS color string. Hex input values are returned as rgb
*/
function darken(color, coefficient) {
	color = decomposeColor(color);
	coefficient = clampWrapper(coefficient);
	if (color.type.includes("hsl")) color.values[2] *= 1 - coefficient;
	else if (color.type.includes("rgb") || color.type.includes("color")) for (let i = 0; i < 3; i += 1) color.values[i] *= 1 - coefficient;
	return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
	try {
		return darken(color, coefficient);
	} catch (error) {
		return color;
	}
}
/**
* Lightens a color.
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
* @param {number} coefficient - multiplier in the range 0 - 1
* @returns {string} A CSS color string. Hex input values are returned as rgb
*/
function lighten(color, coefficient) {
	color = decomposeColor(color);
	coefficient = clampWrapper(coefficient);
	if (color.type.includes("hsl")) color.values[2] += (100 - color.values[2]) * coefficient;
	else if (color.type.includes("rgb")) for (let i = 0; i < 3; i += 1) color.values[i] += (255 - color.values[i]) * coefficient;
	else if (color.type.includes("color")) for (let i = 0; i < 3; i += 1) color.values[i] += (1 - color.values[i]) * coefficient;
	return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
	try {
		return lighten(color, coefficient);
	} catch (error) {
		return color;
	}
}
/**
* Darken or lighten a color, depending on its luminance.
* Light colors are darkened, dark colors are lightened.
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
* @param {number} coefficient=0.15 - multiplier in the range 0 - 1
* @returns {string} A CSS color string. Hex input values are returned as rgb
*/
function emphasize(color, coefficient = .15) {
	return getLuminance(color) > .5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
	try {
		return emphasize(color, coefficient);
	} catch (error) {
		return color;
	}
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/DefaultPropsProvider/DefaultPropsProvider.mjs
var PropsContext = /*#__PURE__*/ import_react.createContext(void 0);
function DefaultPropsProvider({ value, children }) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(PropsContext.Provider, {
		value,
		children
	});
}
function getThemeProps(params) {
	const { theme, name, props } = params;
	if (!theme || !theme.components || !theme.components[name]) return props;
	const config = theme.components[name];
	if (config.defaultProps) return resolveProps(config.defaultProps, props, theme.components.mergeClassNameAndStyle);
	if (!config.styleOverrides && !config.variants) return resolveProps(config, props, theme.components.mergeClassNameAndStyle);
	return props;
}
function useDefaultProps$1({ props, name }) {
	return getThemeProps({
		props,
		name,
		theme: { components: import_react.useContext(PropsContext) }
	});
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/memoTheme.mjs
var arg = { theme: void 0 };
/**
* Memoize style function on theme.
* Intended to be used in styled() calls that only need access to the theme.
*/
function unstable_memoTheme(styleFn) {
	let lastValue;
	let lastTheme;
	return function styleMemoized(props) {
		let value = lastValue;
		if (value === void 0 || props.theme !== lastTheme) {
			arg.theme = props.theme;
			value = preprocessStyles(styleFn(arg));
			lastValue = value;
			lastTheme = props.theme;
		}
		return value;
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/cssVars/createGetCssVar.mjs
/**
* The benefit of this function is to help developers get CSS var from theme without specifying the whole variable
* and they does not need to remember the prefix (defined once).
*/
function createGetCssVar$1(prefix = "") {
	function appendVar(...vars) {
		if (!vars.length) return "";
		const value = vars[0];
		if (typeof value === "string" && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) return `, var(--${prefix ? `${prefix}-` : ""}${value}${appendVar(...vars.slice(1))})`;
		return `, ${value}`;
	}
	const getCssVar = (field, ...fallbacks) => {
		return `var(--${prefix ? `${prefix}-` : ""}${field}${appendVar(...fallbacks)})`;
	};
	return getCssVar;
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/cssVars/cssVarsParser.mjs
var prototypePollutingKeys = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]);
/**
* This function create an object from keys, value and then assign to target
*
* @param {Object} obj : the target object to be assigned
* @param {string[]} keys
* @param {string | number} value
*
* @example
* const source = {}
* assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
* console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
*
* @example
* const source = { palette: { primary: 'var(--palette-primary)' } }
* assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
* console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
*/
var assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
	let temp = obj;
	for (let index = 0; index < keys.length; index += 1) {
		const k = keys[index];
		if (prototypePollutingKeys.has(k)) break;
		if (index === keys.length - 1) {
			if (Array.isArray(temp)) temp[Number(k)] = value;
			else if (temp && typeof temp === "object") temp[k] = value;
		} else if (temp && typeof temp === "object") {
			if (!temp[k]) temp[k] = arrayKeys.includes(k) ? [] : {};
			temp = temp[k];
		}
	}
};
/**
*
* @param {Object} obj : source object
* @param {Function} callback : a function that will be called when
*                   - the deepest key in source object is reached
*                   - the value of the deepest key is NOT `undefined` | `null`
*
* @example
* walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
* // ['palette', 'primary', 'main'] '#000000'
*/
var walkObjectDeep = (obj, callback, shouldSkipPaths) => {
	function recurse(object, parentKeys = [], arrayKeys = []) {
		Object.entries(object).forEach(([key, value]) => {
			if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
				if (value !== void 0 && value !== null) if (typeof value === "object" && Object.keys(value).length > 0) recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
				else callback([...parentKeys, key], value, arrayKeys);
			}
		});
	}
	recurse(obj);
};
var getCssValue = (keys, value) => {
	if (typeof value === "number") {
		if ([
			"lineHeight",
			"fontWeight",
			"opacity",
			"zIndex"
		].some((prop) => keys.includes(prop))) return value;
		if (keys[keys.length - 1].toLowerCase().includes("opacity")) return value;
		return `${value}px`;
	}
	return value;
};
/**
* a function that parse theme and return { css, vars }
*
* @param {Object} theme
* @param {{
*  prefix?: string,
*  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
* }} options.
*  `prefix`: The prefix of the generated CSS variables. This function does not change the value.
*
* @returns {{ css: Object, vars: Object }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme).
*
* @example
* const { css, vars } = parser({
*   fontSize: 12,
*   lineHeight: 1.2,
*   palette: { primary: { 500: 'var(--color)' } }
* }, { prefix: 'foo' })
*
* console.log(css) // { '--foo-fontSize': '12px', '--foo-lineHeight': 1.2, '--foo-palette-primary-500': 'var(--color)' }
* console.log(vars) // { fontSize: 'var(--foo-fontSize)', lineHeight: 'var(--foo-lineHeight)', palette: { primary: { 500: 'var(--foo-palette-primary-500)' } } }
*/
function cssVarsParser(theme, options) {
	const { prefix, shouldSkipGeneratingVar } = options || {};
	const css = {};
	const vars = {};
	const varsWithDefaults = {};
	walkObjectDeep(theme, (keys, value, arrayKeys) => {
		if (typeof value === "string" || typeof value === "number") {
			if (!shouldSkipGeneratingVar || !shouldSkipGeneratingVar(keys, value)) {
				const cssVar = `--${prefix ? `${prefix}-` : ""}${keys.join("-")}`;
				const resolvedValue = getCssValue(keys, value);
				Object.assign(css, { [cssVar]: resolvedValue });
				assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
				assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${resolvedValue})`, arrayKeys);
			}
		}
	}, (keys) => keys[0] === "vars");
	return {
		css,
		vars,
		varsWithDefaults
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/cssVars/prepareCssVars.mjs
function prepareCssVars(theme, parserConfig = {}) {
	const { getSelector = defaultGetSelector, disableCssColorScheme, colorSchemeSelector: selector, enableContrastVars } = parserConfig;
	const { colorSchemes = {}, components, defaultColorScheme = "light", ...otherTheme } = theme;
	const { vars: rootVars, css: rootCss, varsWithDefaults: rootVarsWithDefaults } = cssVarsParser(otherTheme, parserConfig);
	let themeVars = rootVarsWithDefaults;
	const colorSchemesMap = {};
	const { [defaultColorScheme]: defaultScheme, ...otherColorSchemes } = colorSchemes;
	Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
		const { vars, css, varsWithDefaults } = cssVarsParser(scheme, parserConfig);
		themeVars = deepmerge(themeVars, varsWithDefaults);
		colorSchemesMap[key] = {
			css,
			vars
		};
	});
	if (defaultScheme) {
		const { css, vars, varsWithDefaults } = cssVarsParser(defaultScheme, parserConfig);
		themeVars = deepmerge(themeVars, varsWithDefaults);
		colorSchemesMap[defaultColorScheme] = {
			css,
			vars
		};
	}
	function defaultGetSelector(colorScheme, cssObject) {
		let rule = selector;
		if (selector === "class") rule = ".%s";
		if (selector === "data") rule = "[data-%s]";
		if (selector?.startsWith("data-") && !selector.includes("%s")) rule = `[${selector}="%s"]`;
		if (colorScheme) {
			if (rule === "media") {
				if (theme.defaultColorScheme === colorScheme) return ":root";
				return { [`@media (prefers-color-scheme: ${colorSchemes[colorScheme]?.palette?.mode || colorScheme})`]: { ":root": cssObject } };
			}
			if (rule) {
				if (theme.defaultColorScheme === colorScheme) return `:root, ${rule.replace("%s", String(colorScheme))}`;
				return rule.replace("%s", String(colorScheme));
			}
		}
		return ":root";
	}
	const generateThemeVars = () => {
		let vars = { ...rootVars };
		Object.entries(colorSchemesMap).forEach(([, { vars: schemeVars }]) => {
			vars = deepmerge(vars, schemeVars);
		});
		return vars;
	};
	const generateStyleSheets = () => {
		const stylesheets = [];
		const colorScheme = theme.defaultColorScheme || "light";
		function insertStyleSheet(key, css) {
			if (Object.keys(css).length) stylesheets.push(typeof key === "string" ? { [key]: { ...css } } : key);
		}
		insertStyleSheet(getSelector(void 0, { ...rootCss }), rootCss);
		const { [colorScheme]: defaultSchemeVal, ...other } = colorSchemesMap;
		if (defaultSchemeVal) {
			const { css } = defaultSchemeVal;
			const cssColorSheme = colorSchemes[colorScheme]?.palette?.mode;
			const finalCss = !disableCssColorScheme && cssColorSheme ? {
				colorScheme: cssColorSheme,
				...css
			} : { ...css };
			insertStyleSheet(getSelector(colorScheme, { ...finalCss }), finalCss);
		}
		Object.entries(other).forEach(([key, { css }]) => {
			const cssColorSheme = colorSchemes[key]?.palette?.mode;
			const finalCss = !disableCssColorScheme && cssColorSheme ? {
				colorScheme: cssColorSheme,
				...css
			} : { ...css };
			insertStyleSheet(getSelector(key, { ...finalCss }), finalCss);
		});
		if (enableContrastVars) stylesheets.push({ ":root": {
			"--__l-threshold": "0.7",
			"--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
			"--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
		} });
		return stylesheets;
	};
	return {
		vars: themeVars,
		generateThemeVars,
		generateStyleSheets
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/cssVars/getColorSchemeSelector.mjs
function createGetColorSchemeSelector(selector) {
	return function getColorSchemeSelector(colorScheme) {
		if (selector === "media") return `@media (prefers-color-scheme: ${colorScheme})`;
		if (selector) {
			if (selector.startsWith("data-") && !selector.includes("%s")) return `[${selector}="${colorScheme}"] &`;
			if (selector === "class") return `.${colorScheme} &`;
			if (selector === "data") return `[data-${colorScheme}] &`;
			return `${selector.replace("%s", colorScheme)} &`;
		}
		return "&";
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+utils@9.3.0_@types+react@19.2.18_react@19.2.8/node_modules/@mui/utils/composeClasses/composeClasses.mjs
/**
* Compose classes from multiple sources.
*
* @example
* ```tsx
* const slots = {
*  root: ['root', 'primary'],
*  label: ['label'],
* };
*
* const getUtilityClass = (slot) => `MuiButton-${slot}`;
*
* const classes = {
*   root: 'my-root-class',
* };
*
* const output = composeClasses(slots, getUtilityClass, classes);
* // {
* //   root: 'MuiButton-root MuiButton-primary my-root-class',
* //   label: 'MuiButton-label',
* // }
* ```
*
* @param slots a list of classes for each possible slot
* @param getUtilityClass a function to resolve the class based on the slot name
* @param classes the input classes from props
* @returns the resolved classes for all slots
*/
function composeClasses(slots, getUtilityClass, classes = void 0) {
	const output = {};
	for (const slotName in slots) {
		const slot = slots[slotName];
		let buffer = "";
		let start = true;
		for (let i = 0; i < slot.length; i += 1) {
			const value = slot[i];
			if (value) {
				buffer += (start === true ? "" : " ") + getUtilityClass(value);
				start = false;
				if (classes && classes[value]) buffer += " " + classes[value];
			}
		}
		output[slotName] = buffer;
	}
	return output;
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/createPalette.mjs
function getLight() {
	return {
		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: "rgba(0, 0, 0, 0.6)",
			disabled: "rgba(0, 0, 0, 0.38)"
		},
		divider: "rgba(0, 0, 0, 0.12)",
		background: {
			paper: common.white,
			default: common.white
		},
		action: {
			active: "rgba(0, 0, 0, 0.54)",
			hover: "rgba(0, 0, 0, 0.04)",
			hoverOpacity: .04,
			selected: "rgba(0, 0, 0, 0.08)",
			selectedOpacity: .08,
			disabled: "rgba(0, 0, 0, 0.26)",
			disabledBackground: "rgba(0, 0, 0, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(0, 0, 0, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .12
		}
	};
}
var light = getLight();
function getDark() {
	return {
		text: {
			primary: common.white,
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
			icon: "rgba(255, 255, 255, 0.5)"
		},
		divider: "rgba(255, 255, 255, 0.12)",
		background: {
			paper: "#121212",
			default: "#121212"
		},
		action: {
			active: common.white,
			hover: "rgba(255, 255, 255, 0.08)",
			hoverOpacity: .08,
			selected: "rgba(255, 255, 255, 0.16)",
			selectedOpacity: .16,
			disabled: "rgba(255, 255, 255, 0.3)",
			disabledBackground: "rgba(255, 255, 255, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(255, 255, 255, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .24
		}
	};
}
var dark = getDark();
function addLightOrDark(intent, direction, shade, tonalOffset) {
	const tonalOffsetLight = tonalOffset.light || tonalOffset;
	const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
	if (!intent[direction]) {
		if (intent.hasOwnProperty(shade)) intent[direction] = intent[shade];
		else if (direction === "light") intent.light = lighten(intent.main, tonalOffsetLight);
		else if (direction === "dark") intent.dark = darken(intent.main, tonalOffsetDark);
	}
}
function mixLightOrDark(colorSpace, intent, direction, shade, tonalOffset) {
	const tonalOffsetLight = tonalOffset.light || tonalOffset;
	const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
	if (!intent[direction]) {
		if (intent.hasOwnProperty(shade)) intent[direction] = intent[shade];
		else if (direction === "light") intent.light = `color-mix(in ${colorSpace}, ${intent.main}, #fff ${(tonalOffsetLight * 100).toFixed(0)}%)`;
		else if (direction === "dark") intent.dark = `color-mix(in ${colorSpace}, ${intent.main}, #000 ${(tonalOffsetDark * 100).toFixed(0)}%)`;
	}
}
function getDefaultPrimary(mode = "light") {
	if (mode === "dark") return {
		main: blue[200],
		light: blue[50],
		dark: blue[400]
	};
	return {
		main: blue[700],
		light: blue[400],
		dark: blue[800]
	};
}
function getDefaultSecondary(mode = "light") {
	if (mode === "dark") return {
		main: purple[200],
		light: purple[50],
		dark: purple[400]
	};
	return {
		main: purple[500],
		light: purple[300],
		dark: purple[700]
	};
}
function getDefaultError(mode = "light") {
	if (mode === "dark") return {
		main: red[500],
		light: red[300],
		dark: red[700]
	};
	return {
		main: red[700],
		light: red[400],
		dark: red[800]
	};
}
function getDefaultInfo(mode = "light") {
	if (mode === "dark") return {
		main: lightBlue[400],
		light: lightBlue[300],
		dark: lightBlue[700]
	};
	return {
		main: lightBlue[700],
		light: lightBlue[500],
		dark: lightBlue[900]
	};
}
function getDefaultSuccess(mode = "light") {
	if (mode === "dark") return {
		main: green[400],
		light: green[300],
		dark: green[700]
	};
	return {
		main: green[800],
		light: green[500],
		dark: green[900]
	};
}
function getDefaultWarning(mode = "light") {
	if (mode === "dark") return {
		main: orange[400],
		light: orange[300],
		dark: orange[700]
	};
	return {
		main: "#ed6c02",
		light: orange[500],
		dark: orange[900]
	};
}
function contrastColor(background) {
	return `oklch(from ${background} var(--__l) 0 h / var(--__a))`;
}
function createPalette(palette) {
	const { mode = "light", contrastThreshold = 3, tonalOffset = .2, colorSpace, ...other } = palette;
	const primary = palette.primary || getDefaultPrimary(mode);
	const secondary = palette.secondary || getDefaultSecondary(mode);
	const error = palette.error || getDefaultError(mode);
	const info = palette.info || getDefaultInfo(mode);
	const success = palette.success || getDefaultSuccess(mode);
	const warning = palette.warning || getDefaultWarning(mode);
	function getContrastText(background) {
		if (colorSpace) return contrastColor(background);
		return getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
	}
	const augmentColor = ({ color, name, mainShade = 500, lightShade = 300, darkShade = 700 }) => {
		color = { ...color };
		if (!color.main && color[mainShade]) color.main = color[mainShade];
		if (!color.hasOwnProperty("main")) throw new Error(formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
		if (typeof color.main !== "string") throw new Error(formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color.main)));
		if (colorSpace) {
			mixLightOrDark(colorSpace, color, "light", lightShade, tonalOffset);
			mixLightOrDark(colorSpace, color, "dark", darkShade, tonalOffset);
		} else {
			addLightOrDark(color, "light", lightShade, tonalOffset);
			addLightOrDark(color, "dark", darkShade, tonalOffset);
		}
		if (!color.contrastText) color.contrastText = getContrastText(color.main);
		return color;
	};
	let modeHydrated;
	if (mode === "light") modeHydrated = getLight();
	else if (mode === "dark") modeHydrated = getDark();
	return deepmerge({
		common: { ...common },
		mode,
		primary: augmentColor({
			color: primary,
			name: "primary"
		}),
		secondary: augmentColor({
			color: secondary,
			name: "secondary",
			mainShade: "A400",
			lightShade: "A200",
			darkShade: "A700"
		}),
		error: augmentColor({
			color: error,
			name: "error"
		}),
		warning: augmentColor({
			color: warning,
			name: "warning"
		}),
		info: augmentColor({
			color: info,
			name: "info"
		}),
		success: augmentColor({
			color: success,
			name: "success"
		}),
		grey,
		contrastThreshold,
		getContrastText,
		augmentColor,
		tonalOffset,
		...modeHydrated
	}, other);
}
//#endregion
//#region node_modules/.pnpm/@mui+system@9.3.0_@emotion+_c3c92664a045f5fcf3976460b069ec2e/node_modules/@mui/system/cssVars/prepareTypographyVars.mjs
function prepareTypographyVars(typography) {
	const vars = {};
	Object.entries(typography).forEach((entry) => {
		const [key, value] = entry;
		if (typeof value === "object") vars[key] = `${value.fontStyle ? `${value.fontStyle} ` : ""}${value.fontVariant ? `${value.fontVariant} ` : ""}${value.fontWeight ? `${value.fontWeight} ` : ""}${value.fontStretch ? `${value.fontStretch} ` : ""}${value.fontSize || ""}${value.lineHeight ? `/${value.lineHeight} ` : ""}${value.fontFamily || ""}`;
	});
	return vars;
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/createMixins.mjs
function createMixins(breakpoints, mixins) {
	return {
		toolbar: {
			minHeight: 56,
			[breakpoints.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
			[breakpoints.up("sm")]: { minHeight: 64 }
		},
		...mixins
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/createTypography.mjs
function round(value) {
	return Math.round(value * 1e5) / 1e5;
}
var caseAllCaps = { textTransform: "uppercase" };
var defaultFontFamily = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif";
/**
* @see @link{https://m2.material.io/design/typography/the-type-system.html}
* @see @link{https://m2.material.io/design/typography/understanding-typography.html}
*/
function createTypography(palette, typography) {
	const { fontFamily = defaultFontFamily, fontSize = 14, fontWeightLight = 300, fontWeightRegular = 400, fontWeightMedium = 500, fontWeightBold = 700, htmlFontSize = 16, allVariants, pxToRem: pxToRem2, ...other } = typeof typography === "function" ? typography(palette) : typography;
	const coef = fontSize / 14;
	const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
	const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
		fontFamily,
		fontWeight,
		fontSize: pxToRem(size),
		lineHeight,
		...fontFamily === defaultFontFamily ? { letterSpacing: `${round(letterSpacing / size)}em` } : {},
		...casing,
		...allVariants
	});
	return deepmerge({
		htmlFontSize,
		pxToRem,
		fontFamily,
		fontSize,
		fontWeightLight,
		fontWeightRegular,
		fontWeightMedium,
		fontWeightBold,
		h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
		h2: buildVariant(fontWeightLight, 60, 1.2, -.5),
		h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
		h4: buildVariant(fontWeightRegular, 34, 1.235, .25),
		h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
		h6: buildVariant(fontWeightMedium, 20, 1.6, .15),
		subtitle1: buildVariant(fontWeightRegular, 16, 1.75, .15),
		subtitle2: buildVariant(fontWeightMedium, 14, 1.57, .1),
		body1: buildVariant(fontWeightRegular, 16, 1.5, .15),
		body2: buildVariant(fontWeightRegular, 14, 1.43, .15),
		button: buildVariant(fontWeightMedium, 14, 1.75, .4, caseAllCaps),
		caption: buildVariant(fontWeightRegular, 12, 1.66, .4),
		overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
		inherit: {
			fontFamily: "inherit",
			fontWeight: "inherit",
			fontSize: "inherit",
			lineHeight: "inherit",
			letterSpacing: "inherit"
		}
	}, other, { clone: false });
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/shadows.mjs
var shadowKeyUmbraOpacity = .2;
var shadowKeyPenumbraOpacity = .14;
var shadowAmbientShadowOpacity = .12;
function createShadow(...px) {
	return [
		`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
		`${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
		`${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`
	].join(",");
}
var shadows = [
	"none",
	createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
	createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
	createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
	createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
	createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
	createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
	createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
	createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
	createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
	createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
	createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
	createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
	createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
	createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
	createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
	createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
	createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
	createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
	createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
	createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
	createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
	createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
	createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
	createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
];
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/createTransitions.mjs
var DEFAULT_TRANSITION_PROPS$1 = ["all"];
var EMPTY_OPTIONS$1 = {};
var easing = {
	easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
	easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
	easeIn: "cubic-bezier(0.4, 0, 1, 1)",
	sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var duration = {
	shortest: 150,
	shorter: 200,
	short: 250,
	standard: 300,
	complex: 375,
	enteringScreen: 225,
	leavingScreen: 195
};
function formatMs(milliseconds) {
	return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
	if (!height) return 0;
	const constant = height / 36;
	return Math.min(Math.round((4 + 15 * constant ** .25 + constant / 5) * 10), 3e3);
}
function createTransitions(inputTransitions) {
	const transitions = { ...inputTransitions };
	delete transitions.reducedMotion;
	const mergedEasing = {
		...easing,
		...transitions.easing
	};
	const mergedDuration = {
		...duration,
		...transitions.duration
	};
	const createTransitionValue = (props = DEFAULT_TRANSITION_PROPS$1, options = EMPTY_OPTIONS$1) => {
		const { duration: durationOption = mergedDuration.standard, easing: easingOption = mergedEasing.easeInOut, delay = 0, ...other } = options;
		return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
	};
	return {
		getAutoHeightDuration,
		create: transitions.create ?? createTransitionValue,
		...transitions,
		easing: mergedEasing,
		duration: mergedDuration
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/createMotion.mjs
var EMPTY_MOTION = {};
function createMotion(inputMotion = EMPTY_MOTION) {
	return {
		reducedMotion: "never",
		...inputMotion
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/zIndex.mjs
var zIndex = {
	mobileStepper: 1e3,
	fab: 1050,
	speedDial: 1050,
	appBar: 1100,
	drawer: 1200,
	modal: 1300,
	snackbar: 1400,
	tooltip: 1500
};
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/stringifyTheme.mjs
function isSerializable(val) {
	return isPlainObject(val) || typeof val === "undefined" || typeof val === "string" || typeof val === "boolean" || typeof val === "number" || Array.isArray(val);
}
/**
* `baseTheme` usually comes from `createTheme()` or `extendTheme()`.
*
* This function is intended to be used with zero-runtime CSS-in-JS like Pigment CSS
* For example, in a Next.js project:
*
* ```js
* // next.config.js
* const { extendTheme } = require('@mui/material/styles');
*
* const theme = extendTheme();
* // `.toRuntimeSource` is Pigment CSS specific to create a theme that is available at runtime.
* theme.toRuntimeSource = stringifyTheme;
*
* module.exports = withPigment({
*  theme,
* });
* ```
*/
function stringifyTheme(baseTheme = {}) {
	const serializableTheme = { ...baseTheme };
	function serializeTheme(object) {
		const array = Object.entries(object);
		for (let index = 0; index < array.length; index++) {
			const [key, value] = array[index];
			if (!isSerializable(value) || key.startsWith("unstable_") || key.startsWith("internal_")) delete object[key];
			else if (isPlainObject(value)) {
				object[key] = { ...value };
				serializeTheme(object[key]);
			}
		}
	}
	serializeTheme(serializableTheme);
	return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/createThemeNoVars.mjs
function coefficientToPercentage(coefficient) {
	if (typeof coefficient === "number") return `${(coefficient * 100).toFixed(0)}%`;
	return `calc((${coefficient}) * 100%)`;
}
var parseAddition = (str) => {
	if (!Number.isNaN(+str)) return +str;
	const numbers = str.match(/\d*\.?\d+/g);
	if (!numbers) return 0;
	let sum = 0;
	for (let i = 0; i < numbers.length; i += 1) sum += +numbers[i];
	return sum;
};
function attachColorManipulators(theme) {
	Object.assign(theme, {
		alpha(color, coefficient) {
			const obj = this || theme;
			if (obj.colorSpace) return `oklch(from ${color} l c h / ${typeof coefficient === "string" ? `calc(${coefficient})` : coefficient})`;
			if (obj.vars) return `rgba(${color.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof coefficient === "string" ? `calc(${coefficient})` : coefficient})`;
			return alpha(color, parseAddition(coefficient));
		},
		lighten(color, coefficient) {
			const obj = this || theme;
			if (obj.colorSpace) return `color-mix(in ${obj.colorSpace}, ${color}, #fff ${coefficientToPercentage(coefficient)})`;
			return lighten(color, coefficient);
		},
		darken(color, coefficient) {
			const obj = this || theme;
			if (obj.colorSpace) return `color-mix(in ${obj.colorSpace}, ${color}, #000 ${coefficientToPercentage(coefficient)})`;
			return darken(color, coefficient);
		}
	});
}
function createThemeNoVars(options = {}, ...args) {
	const { breakpoints: breakpointsInput, mixins: mixinsInput = {}, spacing: spacingInput, palette: paletteInput = {}, motion: motionInput = {}, transitions: transitionsInput = {}, typography: typographyInput = {}, shape: shapeInput, colorSpace, ...other } = options;
	if (options.vars && options.generateThemeVars === void 0) throw new Error(formatMuiErrorMessage(22));
	const palette = createPalette({
		...paletteInput,
		colorSpace
	});
	const systemTheme = createTheme$1(options);
	let muiTheme = deepmerge(systemTheme, {
		mixins: createMixins(systemTheme.breakpoints, mixinsInput),
		palette,
		shadows: shadows.slice(),
		typography: createTypography(palette, typographyInput),
		motion: createMotion(motionInput),
		transitions: createTransitions(transitionsInput),
		zIndex: { ...zIndex }
	});
	muiTheme = deepmerge(muiTheme, other);
	muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
	delete muiTheme.transitions.reducedMotion;
	muiTheme.unstable_sxConfig = {
		...defaultSxConfig,
		...other?.unstable_sxConfig
	};
	muiTheme.unstable_sx = function sx(props) {
		return styleFunctionSx_default({
			sx: props,
			theme: this
		});
	};
	muiTheme.toRuntimeSource = stringifyTheme;
	attachColorManipulators(muiTheme);
	return muiTheme;
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/getOverlayAlpha.mjs
function getOverlayAlpha(elevation) {
	let alphaValue;
	if (elevation < 1) alphaValue = 5.11916 * elevation ** 2;
	else alphaValue = 4.5 * Math.log(elevation + 1) + 2;
	return Math.round(alphaValue * 10) / 1e3;
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/createColorScheme.mjs
var defaultDarkOverlays = [...Array(25)].map((_, index) => {
	if (index === 0) return "none";
	const overlay = getOverlayAlpha(index);
	return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function getOpacity(mode) {
	return {
		inputPlaceholder: mode === "dark" ? .5 : .42,
		inputUnderline: mode === "dark" ? .7 : .42,
		switchTrackDisabled: mode === "dark" ? .2 : .12,
		switchTrack: mode === "dark" ? .3 : .38
	};
}
function getOverlays(mode) {
	return mode === "dark" ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
	const { palette: paletteInput = { mode: "light" }, opacity, overlays, colorSpace, ...other } = options;
	const palette = createPalette({
		...paletteInput,
		colorSpace
	});
	return {
		palette,
		opacity: {
			...getOpacity(palette.mode),
			...opacity
		},
		overlays: overlays || getOverlays(palette.mode),
		...other
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/shouldSkipGeneratingVar.mjs
function shouldSkipGeneratingVar(keys) {
	return keys[0] === "motion" || !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || keys[0] === "palette" && !!keys[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/excludeVariablesFromRoot.mjs
/**
* @internal These variables should not appear in the :root stylesheet when the `defaultColorScheme="dark"`
*/
var excludeVariablesFromRoot = (cssVarPrefix) => [
	...[...Array(25)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}overlays-${index}`),
	`--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkBg`,
	`--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkColor`
];
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/createGetSelector.mjs
var createGetSelector_default = (theme) => (colorScheme, css) => {
	const root = theme.rootSelector || ":root";
	const selector = theme.colorSchemeSelector;
	let rule = selector;
	if (selector === "class") rule = ".%s";
	if (selector === "data") rule = "[data-%s]";
	if (selector?.startsWith("data-") && !selector.includes("%s")) rule = `[${selector}="%s"]`;
	if (theme.defaultColorScheme === colorScheme) {
		if (colorScheme === "dark") {
			const excludedVariables = {};
			excludeVariablesFromRoot(theme.cssVarPrefix).forEach((cssVar) => {
				excludedVariables[cssVar] = css[cssVar];
				delete css[cssVar];
			});
			if (rule === "media") return {
				[root]: css,
				[`@media (prefers-color-scheme: dark)`]: { [root]: excludedVariables }
			};
			if (rule) return {
				[rule.replace("%s", colorScheme)]: excludedVariables,
				[`${root}, ${rule.replace("%s", colorScheme)}`]: css
			};
			return { [root]: {
				...css,
				...excludedVariables
			} };
		}
		if (rule && rule !== "media") return `${root}, ${rule.replace("%s", String(colorScheme))}`;
	} else if (colorScheme) {
		if (rule === "media") return { [`@media (prefers-color-scheme: ${String(colorScheme)})`]: { [root]: css } };
		if (rule) return rule.replace("%s", String(colorScheme));
	}
	return root;
};
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/createThemeWithVars.mjs
function assignNode(obj, keys) {
	keys.forEach((k) => {
		if (!obj[k]) obj[k] = {};
	});
}
function setColor(obj, key, defaultValue) {
	if (!obj[key] && defaultValue) obj[key] = defaultValue;
}
function toRgb(color) {
	if (typeof color !== "string" || !color.startsWith("hsl")) return color;
	return hslToRgb(color);
}
function setColorChannel(obj, key) {
	if (!(`${key}Channel` in obj)) obj[`${key}Channel`] = private_safeColorChannel(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
}
function getSpacingVal(spacingInput) {
	if (typeof spacingInput === "number") return `${spacingInput}px`;
	if (typeof spacingInput === "string" || typeof spacingInput === "function" || Array.isArray(spacingInput)) return spacingInput;
	return "8px";
}
var silent = (fn) => {
	try {
		return fn();
	} catch (error) {}
};
var createGetCssVar = (cssVarPrefix = "mui") => createGetCssVar$1(cssVarPrefix);
function attachColorScheme$1(colorSpace, colorSchemes, scheme, restTheme, colorScheme) {
	if (!scheme) return;
	scheme = scheme === true ? {} : scheme;
	const mode = colorScheme === "dark" ? "dark" : "light";
	if (!restTheme) {
		colorSchemes[colorScheme] = createColorScheme({
			...scheme,
			palette: {
				mode,
				...scheme?.palette
			},
			colorSpace
		});
		return;
	}
	const { palette, ...muiTheme } = createThemeNoVars({
		...restTheme,
		palette: {
			mode,
			...scheme?.palette
		},
		colorSpace
	});
	colorSchemes[colorScheme] = {
		...scheme,
		palette,
		opacity: {
			...getOpacity(mode),
			...scheme?.opacity
		},
		overlays: scheme?.overlays || getOverlays(mode)
	};
	return muiTheme;
}
/**
* A default `createThemeWithVars` comes with a single color scheme, either `light` or `dark` based on the `defaultColorScheme`.
* This is better suited for apps that only need a single color scheme.
*
* To enable built-in `light` and `dark` color schemes, either:
* 1. provide a `colorSchemeSelector` to define how the color schemes will change.
* 2. provide `colorSchemes.dark` will set `colorSchemeSelector: 'media'` by default.
*/
function createThemeWithVars(options = {}, ...args) {
	const { colorSchemes: colorSchemesInput = { light: true }, defaultColorScheme: defaultColorSchemeInput, disableCssColorScheme = false, cssVarPrefix = "mui", nativeColor = false, shouldSkipGeneratingVar: shouldSkipGeneratingVar$1 = shouldSkipGeneratingVar, colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? "media" : void 0, rootSelector = ":root", ...input } = options;
	const firstColorScheme = Object.keys(colorSchemesInput)[0];
	const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== "light" ? "light" : firstColorScheme);
	const getCssVar = createGetCssVar(cssVarPrefix);
	const { [defaultColorScheme]: defaultSchemeInput, light: builtInLight, dark: builtInDark, ...customColorSchemes } = colorSchemesInput;
	const colorSchemes = { ...customColorSchemes };
	let defaultScheme = defaultSchemeInput;
	if (defaultColorScheme === "dark" && !("dark" in colorSchemesInput) || defaultColorScheme === "light" && !("light" in colorSchemesInput)) defaultScheme = true;
	if (!defaultScheme) throw new Error(formatMuiErrorMessage(21, defaultColorScheme));
	let colorSpace;
	if (nativeColor) colorSpace = "oklch";
	const muiTheme = attachColorScheme$1(colorSpace, colorSchemes, defaultScheme, input, defaultColorScheme);
	if (builtInLight && !colorSchemes.light) attachColorScheme$1(colorSpace, colorSchemes, builtInLight, void 0, "light");
	if (builtInDark && !colorSchemes.dark) attachColorScheme$1(colorSpace, colorSchemes, builtInDark, void 0, "dark");
	let theme = {
		defaultColorScheme,
		...muiTheme,
		cssVarPrefix,
		colorSchemeSelector: selector,
		rootSelector,
		getCssVar,
		colorSchemes,
		font: {
			...prepareTypographyVars(muiTheme.typography),
			...muiTheme.font
		},
		spacing: getSpacingVal(input.spacing)
	};
	Object.keys(theme.colorSchemes).forEach((key) => {
		const palette = theme.colorSchemes[key].palette;
		const setCssVarColor = (cssVar) => {
			const tokens = cssVar.split("-");
			const color = tokens[1];
			const colorToken = tokens[2];
			return getCssVar(cssVar, palette[color][colorToken]);
		};
		if (palette.mode === "light") {
			setColor(palette.common, "background", "#fff");
			setColor(palette.common, "onBackground", "#000");
		}
		if (palette.mode === "dark") {
			setColor(palette.common, "background", "#000");
			setColor(palette.common, "onBackground", "#fff");
		}
		function colorMix(method, color, coefficient) {
			if (colorSpace) {
				let mixer;
				if (method === private_safeAlpha) mixer = `transparent ${((1 - coefficient) * 100).toFixed(0)}%`;
				if (method === private_safeDarken) mixer = `#000 ${(coefficient * 100).toFixed(0)}%`;
				if (method === private_safeLighten) mixer = `#fff ${(coefficient * 100).toFixed(0)}%`;
				return `color-mix(in ${colorSpace}, ${color}, ${mixer})`;
			}
			return method(color, coefficient);
		}
		assignNode(palette, [
			"Alert",
			"AppBar",
			"Avatar",
			"Button",
			"Chip",
			"FilledInput",
			"LinearProgress",
			"Skeleton",
			"Slider",
			"SnackbarContent",
			"SpeedDialAction",
			"StepConnector",
			"StepContent",
			"Switch",
			"TableCell",
			"Tooltip"
		]);
		if (palette.mode === "light") {
			setColor(palette.Alert, "errorColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-light") : palette.error.light, .6));
			setColor(palette.Alert, "infoColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-light") : palette.info.light, .6));
			setColor(palette.Alert, "successColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-light") : palette.success.light, .6));
			setColor(palette.Alert, "warningColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette.warning.light, .6));
			setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-main"));
			setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-main"));
			setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-main"));
			setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-main"));
			setColor(palette.Alert, "errorFilledColor", silent(() => palette.getContrastText(palette.error.main)));
			setColor(palette.Alert, "infoFilledColor", silent(() => palette.getContrastText(palette.info.main)));
			setColor(palette.Alert, "successFilledColor", silent(() => palette.getContrastText(palette.success.main)));
			setColor(palette.Alert, "warningFilledColor", silent(() => palette.getContrastText(palette.warning.main)));
			setColor(palette.Alert, "errorStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-light") : palette.error.light, .9));
			setColor(palette.Alert, "infoStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-light") : palette.info.light, .9));
			setColor(palette.Alert, "successStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-light") : palette.success.light, .9));
			setColor(palette.Alert, "warningStandardBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-light") : palette.warning.light, .9));
			setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
			setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
			setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
			setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
			setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-100"));
			setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-400"));
			setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-300"));
			setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-A100"));
			setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-400"));
			setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-700"));
			setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-700"));
			setColor(palette.FilledInput, "bg", "rgba(0, 0, 0, 0.06)");
			setColor(palette.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)");
			setColor(palette.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)");
			setColor(palette.LinearProgress, "primaryBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .62));
			setColor(palette.LinearProgress, "secondaryBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .62));
			setColor(palette.LinearProgress, "errorBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .62));
			setColor(palette.LinearProgress, "infoBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .62));
			setColor(palette.LinearProgress, "successBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .62));
			setColor(palette.LinearProgress, "warningBg", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-light") : palette.warning.main, .62));
			setColor(palette.Skeleton, "bg", colorSpace ? colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-text-primary") : palette.text.primary, .11) : `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.11)`);
			setColor(palette.Slider, "primaryTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .62));
			setColor(palette.Slider, "secondaryTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .62));
			setColor(palette.Slider, "errorTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .62));
			setColor(palette.Slider, "infoTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .62));
			setColor(palette.Slider, "successTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .62));
			setColor(palette.Slider, "warningTrack", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-main") : palette.warning.main, .62));
			const snackbarContentBackground = colorSpace ? colorMix(private_safeDarken, nativeColor ? getCssVar("palette-background-default") : palette.background.default, .6825) : private_safeEmphasize(palette.background.default, .8);
			setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
			setColor(palette.SnackbarContent, "color", silent(() => colorSpace ? dark.text.primary : palette.getContrastText(snackbarContentBackground)));
			setColor(palette.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette.background.paper, .15));
			setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-400"));
			setColor(palette.StepContent, "border", setCssVarColor("palette-grey-400"));
			setColor(palette.Switch, "defaultColor", setCssVarColor("palette-common-white"));
			setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-100"));
			setColor(palette.Switch, "primaryDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .62));
			setColor(palette.Switch, "secondaryDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .62));
			setColor(palette.Switch, "errorDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .62));
			setColor(palette.Switch, "infoDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .62));
			setColor(palette.Switch, "successDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .62));
			setColor(palette.Switch, "warningDisabledColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-main") : palette.warning.main, .62));
			setColor(palette.TableCell, "border", colorMix(private_safeLighten, private_safeAlpha(nativeColor ? getCssVar("palette-divider") : palette.divider, 1), .88));
			setColor(palette.Tooltip, "bg", colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-grey-700") : palette.grey[700], .92));
		}
		if (palette.mode === "dark") {
			setColor(palette.Alert, "errorColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-error-light") : palette.error.light, .6));
			setColor(palette.Alert, "infoColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-info-light") : palette.info.light, .6));
			setColor(palette.Alert, "successColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-success-light") : palette.success.light, .6));
			setColor(palette.Alert, "warningColor", colorMix(private_safeLighten, nativeColor ? getCssVar("palette-warning-light") : palette.warning.light, .6));
			setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-dark"));
			setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-dark"));
			setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-dark"));
			setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-dark"));
			setColor(palette.Alert, "errorFilledColor", silent(() => palette.getContrastText(palette.error.dark)));
			setColor(palette.Alert, "infoFilledColor", silent(() => palette.getContrastText(palette.info.dark)));
			setColor(palette.Alert, "successFilledColor", silent(() => palette.getContrastText(palette.success.dark)));
			setColor(palette.Alert, "warningFilledColor", silent(() => palette.getContrastText(palette.warning.dark)));
			setColor(palette.Alert, "errorStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-light") : palette.error.light, .9));
			setColor(palette.Alert, "infoStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-light") : palette.info.light, .9));
			setColor(palette.Alert, "successStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-light") : palette.success.light, .9));
			setColor(palette.Alert, "warningStandardBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette.warning.light, .9));
			setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
			setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
			setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
			setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
			setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-900"));
			setColor(palette.AppBar, "darkBg", setCssVarColor("palette-background-paper"));
			setColor(palette.AppBar, "darkColor", setCssVarColor("palette-text-primary"));
			setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-600"));
			setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-800"));
			setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-700"));
			setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-700"));
			setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-300"));
			setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-300"));
			setColor(palette.FilledInput, "bg", "rgba(255, 255, 255, 0.09)");
			setColor(palette.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)");
			setColor(palette.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)");
			setColor(palette.LinearProgress, "primaryBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .5));
			setColor(palette.LinearProgress, "secondaryBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .5));
			setColor(palette.LinearProgress, "errorBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .5));
			setColor(palette.LinearProgress, "infoBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .5));
			setColor(palette.LinearProgress, "successBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .5));
			setColor(palette.LinearProgress, "warningBg", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-main") : palette.warning.main, .5));
			setColor(palette.Skeleton, "bg", colorSpace ? colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-text-primary") : palette.text.primary, .13) : `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.13)`);
			setColor(palette.Slider, "primaryTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .5));
			setColor(palette.Slider, "secondaryTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .5));
			setColor(palette.Slider, "errorTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .5));
			setColor(palette.Slider, "infoTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .5));
			setColor(palette.Slider, "successTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .5));
			setColor(palette.Slider, "warningTrack", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette.warning.main, .5));
			const snackbarContentBackground = colorSpace ? colorMix(private_safeLighten, nativeColor ? getCssVar("palette-background-default") : palette.background.default, .985) : private_safeEmphasize(palette.background.default, .98);
			setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
			setColor(palette.SnackbarContent, "color", silent(() => colorSpace ? light.text.primary : palette.getContrastText(snackbarContentBackground)));
			setColor(palette.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette.background.paper, .15));
			setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-600"));
			setColor(palette.StepContent, "border", setCssVarColor("palette-grey-600"));
			setColor(palette.Switch, "defaultColor", setCssVarColor("palette-grey-300"));
			setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-600"));
			setColor(palette.Switch, "primaryDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-primary-main") : palette.primary.main, .55));
			setColor(palette.Switch, "secondaryDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-secondary-main") : palette.secondary.main, .55));
			setColor(palette.Switch, "errorDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-error-main") : palette.error.main, .55));
			setColor(palette.Switch, "infoDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-info-main") : palette.info.main, .55));
			setColor(palette.Switch, "successDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-success-main") : palette.success.main, .55));
			setColor(palette.Switch, "warningDisabledColor", colorMix(private_safeDarken, nativeColor ? getCssVar("palette-warning-light") : palette.warning.main, .55));
			setColor(palette.TableCell, "border", colorMix(private_safeDarken, private_safeAlpha(nativeColor ? getCssVar("palette-divider") : palette.divider, 1), .68));
			setColor(palette.Tooltip, "bg", colorMix(private_safeAlpha, nativeColor ? getCssVar("palette-grey-700") : palette.grey[700], .92));
		}
		if (!nativeColor) {
			setColorChannel(palette.background, "default");
			setColorChannel(palette.background, "paper");
			setColorChannel(palette.common, "background");
			setColorChannel(palette.common, "onBackground");
			setColorChannel(palette, "divider");
		}
		Object.keys(palette).forEach((color) => {
			const colors = palette[color];
			if (color !== "tonalOffset" && !nativeColor && colors && typeof colors === "object") {
				if (colors.main) setColor(palette[color], "mainChannel", private_safeColorChannel(toRgb(colors.main)));
				if (colors.light) setColor(palette[color], "lightChannel", private_safeColorChannel(toRgb(colors.light)));
				if (colors.dark) setColor(palette[color], "darkChannel", private_safeColorChannel(toRgb(colors.dark)));
				if (colors.contrastText) setColor(palette[color], "contrastTextChannel", private_safeColorChannel(toRgb(colors.contrastText)));
				if (color === "text") {
					setColorChannel(palette[color], "primary");
					setColorChannel(palette[color], "secondary");
				}
				if (color === "action") {
					if (colors.active) setColorChannel(palette[color], "active");
					if (colors.selected) setColorChannel(palette[color], "selected");
				}
			}
		});
	});
	theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
	const parserConfig = {
		prefix: cssVarPrefix,
		disableCssColorScheme,
		shouldSkipGeneratingVar: shouldSkipGeneratingVar$1,
		getSelector: createGetSelector_default(theme),
		enableContrastVars: nativeColor
	};
	const { vars, generateThemeVars, generateStyleSheets } = prepareCssVars(theme, parserConfig);
	theme.vars = vars;
	Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value]) => {
		theme[key] = value;
	});
	theme.generateThemeVars = generateThemeVars;
	theme.generateStyleSheets = generateStyleSheets;
	theme.generateSpacing = function generateSpacing() {
		return createSpacing(input.spacing, createUnarySpacing(this));
	};
	theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
	theme.spacing = theme.generateSpacing();
	theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar$1;
	theme.unstable_sxConfig = {
		...defaultSxConfig,
		...input?.unstable_sxConfig
	};
	theme.unstable_sx = function sx(props) {
		return styleFunctionSx_default({
			sx: props,
			theme: this
		});
	};
	theme.internal_cache = {};
	theme.toRuntimeSource = stringifyTheme;
	return theme;
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/createTheme.mjs
function attachColorScheme(theme, scheme, colorScheme) {
	if (!theme.colorSchemes) return;
	if (colorScheme) theme.colorSchemes[scheme] = {
		...colorScheme !== true && colorScheme,
		palette: createPalette({
			...colorScheme === true ? {} : colorScheme.palette,
			mode: scheme
		})
	};
}
/**
* Generate a theme base on the options received.
* @param options Takes an incomplete theme object and adds the missing parts.
* @param args Deep merge the arguments with the about to be returned theme.
* @returns A complete, ready-to-use theme object.
*/
function createTheme(options = {}, ...args) {
	const { palette, cssVariables = false, colorSchemes: initialColorSchemes = !palette ? { light: true } : void 0, defaultColorScheme: initialDefaultColorScheme = palette?.mode, ...other } = options;
	const defaultColorSchemeInput = initialDefaultColorScheme || "light";
	const defaultScheme = initialColorSchemes?.[defaultColorSchemeInput];
	const colorSchemesInput = {
		...initialColorSchemes,
		...palette ? { [defaultColorSchemeInput]: {
			...typeof defaultScheme !== "boolean" && defaultScheme,
			palette
		} } : void 0
	};
	if (cssVariables === false) {
		if (!("colorSchemes" in options)) return createThemeNoVars(options, ...args);
		let paletteOptions = palette;
		if (!("palette" in options)) {
			if (colorSchemesInput[defaultColorSchemeInput]) {
				if (colorSchemesInput[defaultColorSchemeInput] !== true) paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
				else if (defaultColorSchemeInput === "dark") paletteOptions = { mode: "dark" };
			}
		}
		const theme = createThemeNoVars({
			...options,
			palette: paletteOptions
		}, ...args);
		theme.defaultColorScheme = defaultColorSchemeInput;
		theme.colorSchemes = colorSchemesInput;
		if (theme.palette.mode === "light") {
			theme.colorSchemes.light = {
				...colorSchemesInput.light !== true && colorSchemesInput.light,
				palette: theme.palette
			};
			attachColorScheme(theme, "dark", colorSchemesInput.dark);
		}
		if (theme.palette.mode === "dark") {
			theme.colorSchemes.dark = {
				...colorSchemesInput.dark !== true && colorSchemesInput.dark,
				palette: theme.palette
			};
			attachColorScheme(theme, "light", colorSchemesInput.light);
		}
		return theme;
	}
	if (!palette && !("light" in colorSchemesInput) && defaultColorSchemeInput === "light") colorSchemesInput.light = true;
	return createThemeWithVars({
		...other,
		colorSchemes: colorSchemesInput,
		defaultColorScheme: defaultColorSchemeInput,
		...typeof cssVariables !== "boolean" && cssVariables
	}, ...args);
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/defaultTheme.mjs
var defaultTheme = createTheme();
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/useTheme.mjs
function useTheme() {
	const theme = useTheme$1(defaultTheme);
	return theme["$$material"] || theme;
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/GlobalStyles/GlobalStyles.mjs
function GlobalStyles(props) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(GlobalStyles$1, {
		...props,
		defaultTheme,
		themeId: identifier_default
	});
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/slotShouldForwardProp.mjs
function slotShouldForwardProp(prop) {
	return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/rootShouldForwardProp.mjs
var rootShouldForwardProp = (prop) => slotShouldForwardProp(prop) && prop !== "classes";
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/styled.mjs
var styled = createStyled({
	themeId: identifier_default,
	defaultTheme,
	rootShouldForwardProp
});
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/zero-styled/index.mjs
function globalCss(styles) {
	return function GlobalStylesWrapper(props) {
		return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(GlobalStyles, { styles: typeof styles === "function" ? (theme) => styles({
			theme,
			...props
		}) : styles });
	};
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/utils/memoTheme.mjs
var memoTheme = unstable_memoTheme;
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs
function useDefaultProps(params) {
	return useDefaultProps$1(params);
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/utils/capitalize.mjs
var capitalize_default = capitalize;
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/styles/reducedMotion.mjs
var defaultStyles = { transition: "none" };
function resolveReducedMotionStyles(reducedMotion, styles) {
	if (reducedMotion === "always") return styles;
	if (reducedMotion === "system") return { "@media (prefers-reduced-motion: reduce)": styles };
	return null;
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/transitions/utils.mjs
var reflow = (node) => node.scrollTop;
var EMPTY_STYLE = {};
var DEFAULT_TRANSITION_PROPS = ["all"];
var EMPTY_OPTIONS = {};
function normalizedTransitionCallback(nodeRef, callback) {
	return (maybeIsAppearing) => {
		if (callback) {
			const node = nodeRef.current;
			if (maybeIsAppearing === void 0) callback(node);
			else callback(node, maybeIsAppearing);
		}
	};
}
/**
* Return the child style for a transition. Reuse predefined style objects when
* no custom styles are present so memoized children see the same object.
*/
function getTransitionChildStyle(state, inProp, baseStyles, hiddenStyles, styleProp, childStyle) {
	const base = state === "exited" && !inProp ? hiddenStyles : baseStyles[state] || baseStyles.exited;
	return styleProp || childStyle ? {
		...base,
		...styleProp,
		...childStyle
	} : base;
}
function getTransitionProps(props, options) {
	const { timeout, easing, style = EMPTY_STYLE } = props;
	return {
		duration: style.transitionDuration ?? (typeof timeout === "number" ? timeout : timeout[options.mode] || 0),
		easing: style.transitionTimingFunction ?? (typeof easing === "object" ? easing[options.mode] : easing),
		delay: style.transitionDelay
	};
}
/**
* Returns CSS that disables component-owned transitions when reduced motion is active.
* Pass custom styles only when the default `transition: none` reset is not enough.
*/
function getReducedMotionStyles(theme, styles) {
	const resolvedStyles = styles ?? defaultStyles;
	return resolveReducedMotionStyles(theme.motion?.reducedMotion, resolvedStyles);
}
function getTransitionStyles(theme, props = DEFAULT_TRANSITION_PROPS, options = EMPTY_OPTIONS) {
	const transition = theme.transitions?.create?.(props, options);
	const reducedMotionStyles = getReducedMotionStyles(theme);
	if (transition === void 0) return reducedMotionStyles ?? EMPTY_STYLE;
	const transitionStyles = { transition };
	return reducedMotionStyles ? {
		...transitionStyles,
		...reducedMotionStyles
	} : transitionStyles;
}
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/SvgIcon/svgIconClasses.mjs
function getSvgIconUtilityClass(slot) {
	return generateUtilityClass("MuiSvgIcon", slot);
}
generateUtilityClasses("MuiSvgIcon", [
	"root",
	"colorPrimary",
	"colorSecondary",
	"colorAction",
	"colorError",
	"colorDisabled",
	"fontSizeInherit",
	"fontSizeSmall",
	"fontSizeMedium",
	"fontSizeLarge"
]);
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/SvgIcon/SvgIcon.mjs
var useUtilityClasses = (ownerState) => {
	const { color, fontSize, classes } = ownerState;
	return composeClasses({ root: [
		"root",
		color !== "inherit" && `color${capitalize_default(color)}`,
		`fontSize${capitalize_default(fontSize)}`
	] }, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled("svg", {
	name: "MuiSvgIcon",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [
			styles.root,
			ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`],
			styles[`fontSize${capitalize_default(ownerState.fontSize)}`]
		];
	}
})(memoTheme(({ theme }) => ({
	userSelect: "none",
	width: "1em",
	height: "1em",
	display: "inline-block",
	flexShrink: 0,
	...getTransitionStyles(theme, "fill", { duration: (theme.vars ?? theme).transitions?.duration?.shorter }),
	variants: [
		{
			props: (props) => !props.hasSvgAsChild,
			style: { fill: "currentColor" }
		},
		{
			props: { fontSize: "inherit" },
			style: { fontSize: "inherit" }
		},
		{
			props: { fontSize: "small" },
			style: { fontSize: theme.typography?.pxToRem?.(20) || "1.25rem" }
		},
		{
			props: { fontSize: "medium" },
			style: { fontSize: theme.typography?.pxToRem?.(24) || "1.5rem" }
		},
		{
			props: { fontSize: "large" },
			style: { fontSize: theme.typography?.pxToRem?.(35) || "2.1875rem" }
		},
		...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => ({
			props: { color },
			style: { color: (theme.vars ?? theme).palette?.[color]?.main }
		})),
		{
			props: { color: "action" },
			style: { color: (theme.vars ?? theme).palette?.action?.active }
		},
		{
			props: { color: "disabled" },
			style: { color: (theme.vars ?? theme).palette?.action?.disabled }
		},
		{
			props: { color: "inherit" },
			style: { color: void 0 }
		}
	]
})));
var SvgIcon = /*#__PURE__*/ import_react.forwardRef(function SvgIcon(inProps, ref) {
	const props = useDefaultProps({
		props: inProps,
		name: "MuiSvgIcon"
	});
	const { children, className, color = "inherit", component = "svg", fontSize = "medium", htmlColor, inheritViewBox = false, titleAccess, viewBox = "0 0 24 24", ...other } = props;
	const hasSvgAsChild = /*#__PURE__*/ import_react.isValidElement(children) && children.type === "svg";
	const ownerState = {
		...props,
		color,
		component,
		fontSize,
		instanceFontSize: inProps.fontSize,
		inheritViewBox,
		viewBox,
		hasSvgAsChild
	};
	const more = {};
	if (!inheritViewBox) more.viewBox = viewBox;
	const classes = useUtilityClasses(ownerState);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(SvgIconRoot, {
		as: component,
		className: clsx(classes.root, className),
		focusable: "false",
		color: htmlColor,
		"aria-hidden": titleAccess ? void 0 : true,
		role: titleAccess ? "img" : void 0,
		ref,
		...more,
		...other,
		...hasSvgAsChild && children.props,
		ownerState,
		children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/ (0, import_jsx_runtime.jsx)("title", { children: titleAccess }) : null]
	});
});
SvgIcon.muiName = "SvgIcon";
//#endregion
//#region node_modules/.pnpm/@mui+material@9.3.1_@emotio_d854b6513d956bcf53bbf4ed5999c6d1/node_modules/@mui/material/SvgIcon/createSvgIcon.mjs
/**
* Private module reserved for @mui packages.
*/
function createSvgIcon(path, displayName) {
	function Component(props, ref) {
		return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(SvgIcon, {
			"data-testid": void 0,
			ref,
			...props,
			children: path
		});
	}
	Component.muiName = SvgIcon.muiName;
	return /*#__PURE__*/ import_react.memo(/*#__PURE__*/ import_react.forwardRef(Component));
}
//#endregion
//#region node_modules/.pnpm/@mui+icons-material@9.3.1_@_a8eaa20cd24d3de1dbe0ed83c50e9a61/node_modules/@mui/icons-material/Add.mjs
var Add_default = createSvgIcon(/*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }), "Add");
//#endregion
//#region node_modules/.pnpm/@mui+icons-material@9.3.1_@_a8eaa20cd24d3de1dbe0ed83c50e9a61/node_modules/@mui/icons-material/Close.mjs
var Close_default = createSvgIcon(/*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close");
//#endregion
//#region node_modules/.pnpm/@mui+icons-material@9.3.1_@_a8eaa20cd24d3de1dbe0ed83c50e9a61/node_modules/@mui/icons-material/ArrowForwardIosSharp.mjs
var ArrowForwardIosSharp_default = createSvgIcon(/*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", { d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" }), "ArrowForwardIosSharp");
//#endregion
//#region node_modules/.pnpm/@mui+icons-material@9.3.1_@_a8eaa20cd24d3de1dbe0ed83c50e9a61/node_modules/@mui/icons-material/ContentCopy.mjs
var ContentCopy_default = createSvgIcon(/*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" }), "ContentCopy");
//#endregion
//#region node_modules/.pnpm/@mui+icons-material@9.3.1_@_a8eaa20cd24d3de1dbe0ed83c50e9a61/node_modules/@mui/icons-material/Delete.mjs
var Delete_default = createSvgIcon(/*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" }), "Delete");
//#endregion
//#region node_modules/.pnpm/@mui+icons-material@9.3.1_@_a8eaa20cd24d3de1dbe0ed83c50e9a61/node_modules/@mui/icons-material/FileOpen.mjs
var FileOpen_default = createSvgIcon(/*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", { d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H15v-8h5V8zm-1 7V3.5L18.5 9zm4 12.66V16h5.66v2h-2.24l2.95 2.95-1.41 1.41L19 19.41v2.24h-2z" }), "FileOpen");
//#endregion
//#region node_modules/.pnpm/@mui+icons-material@9.3.1_@_a8eaa20cd24d3de1dbe0ed83c50e9a61/node_modules/@mui/icons-material/FormatAlignLeftSharp.mjs
var FormatAlignLeftSharp_default = createSvgIcon(/*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", { d: "M15 15H3v2h12zm0-8H3v2h12zM3 13h18v-2H3zm0 8h18v-2H3zM3 3v2h18V3z" }), "FormatAlignLeftSharp");
//#endregion
//#region node_modules/.pnpm/@mui+icons-material@9.3.1_@_a8eaa20cd24d3de1dbe0ed83c50e9a61/node_modules/@mui/icons-material/IosShare.mjs
var IosShare_default = createSvgIcon(/*#__PURE__*/ (0, import_jsx_runtime.jsx)("path", { d: "m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2" }), "IosShare");
//#endregion
export { require_jsx_runtime as $, alpha as A, useThemeWithoutDefault as B, useTheme as C, createTypography as D, duration as E, generateUtilityClass as F, handleBreakpoints as G, styleFunctionSx_default as H, clsx as I, deepmerge as J, mergeBreakpointsInOrder as K, ClassNameGenerator as L, resolveProps as M, createStyled as N, composeClasses as O, generateUtilityClasses as P, formatMuiErrorMessage as Q, GlobalStyles$1 as R, slotShouldForwardProp as S, getOverlayAlpha as T, createUnarySpacing as U, createTheme$1 as V, getValue as W, GlobalStyles$2 as X, styled$1 as Y, identifier_default as Z, useDefaultProps as _, ContentCopy_default as a, styled as b, Add_default as c, getTransitionChildStyle as d, getTransitionProps as f, capitalize_default as g, reflow as h, Delete_default as i, emphasize as j, DefaultPropsProvider as k, createSvgIcon as l, normalizedTransitionCallback as m, FormatAlignLeftSharp_default as n, ArrowForwardIosSharp_default as o, getTransitionStyles as p, resolveBreakpointValues as q, FileOpen_default as r, Close_default as s, IosShare_default as t, getReducedMotionStyles as u, memoTheme as v, createTheme as w, rootShouldForwardProp as x, globalCss as y, useTheme$1 as z };
