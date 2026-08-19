import { t as __commonJSMin } from "../_runtime.mjs";
import { a as require_emotion_utils_cjs, i as require_emotion_serialize_cjs, n as require_emotion_react_cjs, o as require_react, r as require_emotion_use_insertion_effect_with_fallbacks_cjs } from "./@emotion/react+[...].mjs";
import { t as require_extends } from "./babel__runtime.mjs";
import { t as require_emotion_is_prop_valid_cjs } from "./emotion__is-prop-valid.mjs";
//#region node_modules/.pnpm/@emotion+styled@11.14.1_@em_6cb5238edf72fb592a14bdb47b493a9a/node_modules/@emotion/styled/base/dist/emotion-styled-base.cjs.js
var require_emotion_styled_base_cjs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var _extends = require_extends();
	var react = require_emotion_react_cjs();
	var serialize = require_emotion_serialize_cjs();
	var useInsertionEffectWithFallbacks = require_emotion_use_insertion_effect_with_fallbacks_cjs();
	var utils = require_emotion_utils_cjs();
	var React = require_react();
	var isPropValid = require_emotion_is_prop_valid_cjs();
	function _interopDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) Object.keys(e).forEach(function(k) {
			if (k !== "default") {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function() {
						return e[k];
					}
				});
			}
		});
		n["default"] = e;
		return Object.freeze(n);
	}
	var React__namespace = /*#__PURE__*/ _interopNamespace(React);
	var isPropValid__default = /*#__PURE__*/ _interopDefault(isPropValid);
	var isBrowser = typeof document !== "undefined";
	var isDevelopment = false;
	var testOmitPropsOnStringTag = isPropValid__default["default"];
	var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
		return key !== "theme";
	};
	var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
		return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
	};
	var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
		var shouldForwardProp;
		if (options) {
			var optionsShouldForwardProp = options.shouldForwardProp;
			shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
				return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
			} : optionsShouldForwardProp;
		}
		if (typeof shouldForwardProp !== "function" && isReal) shouldForwardProp = tag.__emotion_forwardProp;
		return shouldForwardProp;
	};
	var Insertion = function Insertion(_ref) {
		var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
		utils.registerStyles(cache, serialized, isStringTag);
		var rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function() {
			return utils.insertStyles(cache, serialized, isStringTag);
		});
		if (!isBrowser && rules !== void 0) {
			var _ref2;
			var serializedNames = serialized.name;
			var next = serialized.next;
			while (next !== void 0) {
				serializedNames += " " + next.name;
				next = next.next;
			}
			return /*#__PURE__*/ React__namespace.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = { __html: rules }, _ref2.nonce = cache.sheet.nonce, _ref2));
		}
		return null;
	};
	exports["default"] = function createStyled(tag, options) {
		var isReal = tag.__emotion_real === tag;
		var baseTag = isReal && tag.__emotion_base || tag;
		var identifierName;
		var targetClassName;
		if (options !== void 0) {
			identifierName = options.label;
			targetClassName = options.target;
		}
		var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
		var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
		var shouldUseAs = !defaultShouldForwardProp("as");
		return function() {
			var args = arguments;
			var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
			if (identifierName !== void 0) styles.push("label:" + identifierName + ";");
			if (args[0] == null || args[0].raw === void 0) styles.push.apply(styles, args);
			else {
				var templateStringsArr = args[0];
				styles.push(templateStringsArr[0]);
				var len = args.length;
				var i = 1;
				for (; i < len; i++) styles.push(args[i], templateStringsArr[i]);
			}
			var Styled = react.withEmotionCache(function(props, cache, ref) {
				var FinalTag = shouldUseAs && props.as || baseTag;
				var className = "";
				var classInterpolations = [];
				var mergedProps = props;
				if (props.theme == null) {
					mergedProps = {};
					for (var key in props) mergedProps[key] = props[key];
					mergedProps.theme = React__namespace.useContext(react.ThemeContext);
				}
				if (typeof props.className === "string") className = utils.getRegisteredStyles(cache.registered, classInterpolations, props.className);
				else if (props.className != null) className = props.className + " ";
				var serialized = serialize.serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
				className += cache.key + "-" + serialized.name;
				if (targetClassName !== void 0) className += " " + targetClassName;
				var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
				var newProps = {};
				for (var _key in props) {
					if (shouldUseAs && _key === "as") continue;
					if (finalShouldForwardProp(_key)) newProps[_key] = props[_key];
				}
				newProps.className = className;
				if (ref) newProps.ref = ref;
				return /*#__PURE__*/ React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/ React__namespace.createElement(Insertion, {
					cache,
					serialized,
					isStringTag: typeof FinalTag === "string"
				}), /*#__PURE__*/ React__namespace.createElement(FinalTag, newProps));
			});
			Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
			Styled.defaultProps = tag.defaultProps;
			Styled.__emotion_real = Styled;
			Styled.__emotion_base = baseTag;
			Styled.__emotion_styles = styles;
			Styled.__emotion_forwardProp = shouldForwardProp;
			Object.defineProperty(Styled, "toString", { value: function value() {
				if (targetClassName === void 0 && isDevelopment) return "NO_COMPONENT_SELECTOR";
				return "." + targetClassName;
			} });
			Styled.withComponent = function(nextTag, nextOptions) {
				return createStyled(nextTag, _extends({}, options, nextOptions, { shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true) })).apply(void 0, styles);
			};
			return Styled;
		};
	};
}));
//#endregion
//#region node_modules/.pnpm/@emotion+styled@11.14.1_@em_6cb5238edf72fb592a14bdb47b493a9a/node_modules/@emotion/styled/dist/emotion-styled.cjs.js
var require_emotion_styled_cjs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var base_dist_emotionStyledBase = require_emotion_styled_base_cjs();
	require_extends();
	require_emotion_react_cjs();
	require_emotion_serialize_cjs();
	require_emotion_use_insertion_effect_with_fallbacks_cjs();
	require_emotion_utils_cjs();
	require_react();
	require_emotion_is_prop_valid_cjs();
	var tags = [
		"a",
		"abbr",
		"address",
		"area",
		"article",
		"aside",
		"audio",
		"b",
		"base",
		"bdi",
		"bdo",
		"big",
		"blockquote",
		"body",
		"br",
		"button",
		"canvas",
		"caption",
		"cite",
		"code",
		"col",
		"colgroup",
		"data",
		"datalist",
		"dd",
		"del",
		"details",
		"dfn",
		"dialog",
		"div",
		"dl",
		"dt",
		"em",
		"embed",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"head",
		"header",
		"hgroup",
		"hr",
		"html",
		"i",
		"iframe",
		"img",
		"input",
		"ins",
		"kbd",
		"keygen",
		"label",
		"legend",
		"li",
		"link",
		"main",
		"map",
		"mark",
		"marquee",
		"menu",
		"menuitem",
		"meta",
		"meter",
		"nav",
		"noscript",
		"object",
		"ol",
		"optgroup",
		"option",
		"output",
		"p",
		"param",
		"picture",
		"pre",
		"progress",
		"q",
		"rp",
		"rt",
		"ruby",
		"s",
		"samp",
		"script",
		"section",
		"select",
		"small",
		"source",
		"span",
		"strong",
		"style",
		"sub",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"title",
		"tr",
		"track",
		"u",
		"ul",
		"var",
		"video",
		"wbr",
		"circle",
		"clipPath",
		"defs",
		"ellipse",
		"foreignObject",
		"g",
		"image",
		"line",
		"linearGradient",
		"mask",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"radialGradient",
		"rect",
		"stop",
		"svg",
		"text",
		"tspan"
	];
	var styled = base_dist_emotionStyledBase["default"].bind(null);
	tags.forEach(function(tagName) {
		styled[tagName] = styled(tagName);
	});
	exports["default"] = styled;
}));
//#endregion
//#region node_modules/.pnpm/@emotion+styled@11.14.1_@em_6cb5238edf72fb592a14bdb47b493a9a/node_modules/@emotion/styled/dist/emotion-styled.cjs.default.js
var require_emotion_styled_cjs_default = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports._default = require_emotion_styled_cjs().default;
}));
require_emotion_styled_cjs();
var import_emotion_styled_cjs_default = require_emotion_styled_cjs_default();
//#endregion
export { import_emotion_styled_cjs_default as t };
