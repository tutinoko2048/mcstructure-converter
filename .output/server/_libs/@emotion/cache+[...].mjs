import { t as __commonJSMin } from "../../_runtime.mjs";
//#region node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.cjs.js
var require_emotion_sheet_cjs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var isDevelopment = false;
	function sheetForTag(tag) {
		if (tag.sheet) return tag.sheet;
		/* istanbul ignore next */
		for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
	}
	function createStyleElement(options) {
		var tag = document.createElement("style");
		tag.setAttribute("data-emotion", options.key);
		if (options.nonce !== void 0) tag.setAttribute("nonce", options.nonce);
		tag.appendChild(document.createTextNode(""));
		tag.setAttribute("data-s", "");
		return tag;
	}
	exports.StyleSheet = /* @__PURE__ */ function() {
		function StyleSheet(options) {
			var _this = this;
			this._insertTag = function(tag) {
				var before;
				if (_this.tags.length === 0) if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
				else if (_this.prepend) before = _this.container.firstChild;
				else before = _this.before;
				else before = _this.tags[_this.tags.length - 1].nextSibling;
				_this.container.insertBefore(tag, before);
				_this.tags.push(tag);
			};
			this.isSpeedy = options.speedy === void 0 ? !isDevelopment : options.speedy;
			this.tags = [];
			this.ctr = 0;
			this.nonce = options.nonce;
			this.key = options.key;
			this.container = options.container;
			this.prepend = options.prepend;
			this.insertionPoint = options.insertionPoint;
			this.before = null;
		}
		var _proto = StyleSheet.prototype;
		_proto.hydrate = function hydrate(nodes) {
			nodes.forEach(this._insertTag);
		};
		_proto.insert = function insert(rule) {
			if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) this._insertTag(createStyleElement(this));
			var tag = this.tags[this.tags.length - 1];
			if (this.isSpeedy) {
				var sheet = sheetForTag(tag);
				try {
					sheet.insertRule(rule, sheet.cssRules.length);
				} catch (e) {}
			} else tag.appendChild(document.createTextNode(rule));
			this.ctr++;
		};
		_proto.flush = function flush() {
			this.tags.forEach(function(tag) {
				var _tag$parentNode;
				return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
			});
			this.tags = [];
			this.ctr = 0;
		};
		return StyleSheet;
	}();
}));
//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/dist/umd/stylis.js
var require_stylis = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, r) {
		typeof exports === "object" && typeof module !== "undefined" ? r(exports) : typeof define === "function" && define.amd ? define(["exports"], r) : (e = e || self, r(e.stylis = {}));
	})(exports, (function(e) {
		"use strict";
		var r = "-ms-";
		var a = "-moz-";
		var c = "-webkit-";
		var n = "comm";
		var t = "rule";
		var s = "decl";
		var i = "@page";
		var u = "@media";
		var o = "@import";
		var f = "@charset";
		var l = "@viewport";
		var p = "@supports";
		var h = "@document";
		var v = "@namespace";
		var d = "@keyframes";
		var b = "@font-face";
		var w = "@counter-style";
		var m = "@font-feature-values";
		var g = "@layer";
		var k = Math.abs;
		var $ = String.fromCharCode;
		var x = Object.assign;
		function E(e, r) {
			return M(e, 0) ^ 45 ? (((r << 2 ^ M(e, 0)) << 2 ^ M(e, 1)) << 2 ^ M(e, 2)) << 2 ^ M(e, 3) : 0;
		}
		function y(e) {
			return e.trim();
		}
		function T(e, r) {
			return (e = r.exec(e)) ? e[0] : e;
		}
		function A(e, r, a) {
			return e.replace(r, a);
		}
		function O(e, r) {
			return e.indexOf(r);
		}
		function M(e, r) {
			return e.charCodeAt(r) | 0;
		}
		function C(e, r, a) {
			return e.slice(r, a);
		}
		function R(e) {
			return e.length;
		}
		function S(e) {
			return e.length;
		}
		function z(e, r) {
			return r.push(e), e;
		}
		function N(e, r) {
			return e.map(r).join("");
		}
		e.line = 1;
		e.column = 1;
		e.length = 0;
		e.position = 0;
		e.character = 0;
		e.characters = "";
		function P(r, a, c, n, t, s, i) {
			return {
				value: r,
				root: a,
				parent: c,
				type: n,
				props: t,
				children: s,
				line: e.line,
				column: e.column,
				length: i,
				return: ""
			};
		}
		function j(e, r) {
			return x(P("", null, null, "", null, null, 0), e, { length: -e.length }, r);
		}
		function U() {
			return e.character;
		}
		function _() {
			e.character = e.position > 0 ? M(e.characters, --e.position) : 0;
			if (e.column--, e.character === 10) e.column = 1, e.line--;
			return e.character;
		}
		function F() {
			e.character = e.position < e.length ? M(e.characters, e.position++) : 0;
			if (e.column++, e.character === 10) e.column = 1, e.line++;
			return e.character;
		}
		function I() {
			return M(e.characters, e.position);
		}
		function L() {
			return e.position;
		}
		function D(r, a) {
			return C(e.characters, r, a);
		}
		function Y(e) {
			switch (e) {
				case 0:
				case 9:
				case 10:
				case 13:
				case 32: return 5;
				case 33:
				case 43:
				case 44:
				case 47:
				case 62:
				case 64:
				case 126:
				case 59:
				case 123:
				case 125: return 4;
				case 58: return 3;
				case 34:
				case 39:
				case 40:
				case 91: return 2;
				case 41:
				case 93: return 1;
			}
			return 0;
		}
		function K(r) {
			return e.line = e.column = 1, e.length = R(e.characters = r), e.position = 0, [];
		}
		function V(r) {
			return e.characters = "", r;
		}
		function W(r) {
			return y(D(e.position - 1, q(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
		}
		function B(e) {
			return V(H(K(e)));
		}
		function G(r) {
			while (e.character = I()) if (e.character < 33) F();
			else break;
			return Y(r) > 2 || Y(e.character) > 3 ? "" : " ";
		}
		function H(r) {
			while (F()) switch (Y(e.character)) {
				case 0:
					z(Q(e.position - 1), r);
					break;
				case 2:
					z(W(e.character), r);
					break;
				default: z($(e.character), r);
			}
			return r;
		}
		function Z(r, a) {
			while (--a && F()) if (e.character < 48 || e.character > 102 || e.character > 57 && e.character < 65 || e.character > 70 && e.character < 97) break;
			return D(r, L() + (a < 6 && I() == 32 && F() == 32));
		}
		function q(r) {
			while (F()) switch (e.character) {
				case r: return e.position;
				case 34:
				case 39:
					if (r !== 34 && r !== 39) q(e.character);
					break;
				case 40:
					if (r === 41) q(r);
					break;
				case 92:
					F();
					break;
			}
			return e.position;
		}
		function J(r, a) {
			while (F()) if (r + e.character === 57) break;
			else if (r + e.character === 84 && I() === 47) break;
			return "/*" + D(a, e.position - 1) + "*" + $(r === 47 ? r : F());
		}
		function Q(r) {
			while (!Y(I())) F();
			return D(r, e.position);
		}
		function X(e) {
			return V(ee("", null, null, null, [""], e = K(e), 0, [0], e));
		}
		function ee(e, r, a, c, n, t, s, i, u) {
			var o = 0;
			var f = 0;
			var l = s;
			var p = 0;
			var h = 0;
			var v = 0;
			var d = 1;
			var b = 1;
			var w = 1;
			var m = 0;
			var g = "";
			var k = n;
			var x = t;
			var E = c;
			var y = g;
			while (b) switch (v = m, m = F()) {
				case 40: if (v != 108 && M(y, l - 1) == 58) {
					if (O(y += A(W(m), "&", "&\f"), "&\f") != -1) w = -1;
					break;
				}
				case 34:
				case 39:
				case 91:
					y += W(m);
					break;
				case 9:
				case 10:
				case 13:
				case 32:
					y += G(v);
					break;
				case 92:
					y += Z(L() - 1, 7);
					continue;
				case 47:
					switch (I()) {
						case 42:
						case 47:
							z(ae(J(F(), L()), r, a), u);
							break;
						default: y += "/";
					}
					break;
				case 123 * d: i[o++] = R(y) * w;
				case 125 * d:
				case 59:
				case 0:
					switch (m) {
						case 0:
						case 125: b = 0;
						case 59 + f:
							if (w == -1) y = A(y, /\f/g, "");
							if (h > 0 && R(y) - l) z(h > 32 ? ce(y + ";", c, a, l - 1) : ce(A(y, " ", "") + ";", c, a, l - 2), u);
							break;
						case 59: y += ";";
						default:
							z(E = re(y, r, a, o, f, n, i, g, k = [], x = [], l), t);
							if (m === 123) if (f === 0) ee(y, r, E, E, k, t, l, i, x);
							else switch (p === 99 && M(y, 3) === 110 ? 100 : p) {
								case 100:
								case 108:
								case 109:
								case 115:
									ee(e, E, E, c && z(re(e, E, E, 0, 0, n, i, g, n, k = [], l), x), n, x, l, i, c ? k : x);
									break;
								default: ee(y, E, E, E, [""], x, 0, i, x);
							}
					}
					o = f = h = 0, d = w = 1, g = y = "", l = s;
					break;
				case 58: l = 1 + R(y), h = v;
				default:
					if (d < 1) {
						if (m == 123) --d;
						else if (m == 125 && d++ == 0 && _() == 125) continue;
					}
					switch (y += $(m), m * d) {
						case 38:
							w = f > 0 ? 1 : (y += "\f", -1);
							break;
						case 44:
							i[o++] = (R(y) - 1) * w, w = 1;
							break;
						case 64:
							if (I() === 45) y += W(F());
							p = I(), f = l = R(g = y += Q(L())), m++;
							break;
						case 45: if (v === 45 && R(y) == 2) d = 0;
					}
			}
			return t;
		}
		function re(e, r, a, c, n, s, i, u, o, f, l) {
			var p = n - 1;
			var h = n === 0 ? s : [""];
			var v = S(h);
			for (var d = 0, b = 0, w = 0; d < c; ++d) for (var m = 0, g = C(e, p + 1, p = k(b = i[d])), $ = e; m < v; ++m) if ($ = y(b > 0 ? h[m] + " " + g : A(g, /&\f/g, h[m]))) o[w++] = $;
			return P(e, r, a, n === 0 ? t : u, o, f, l);
		}
		function ae(e, r, a) {
			return P(e, r, a, n, $(U()), C(e, 2, -2), 0);
		}
		function ce(e, r, a, c) {
			return P(e, r, a, s, C(e, 0, c), C(e, c + 1, -1), c);
		}
		function ne(e, n, t) {
			switch (E(e, n)) {
				case 5103: return c + "print-" + e + e;
				case 5737:
				case 4201:
				case 3177:
				case 3433:
				case 1641:
				case 4457:
				case 2921:
				case 5572:
				case 6356:
				case 5844:
				case 3191:
				case 6645:
				case 3005:
				case 6391:
				case 5879:
				case 5623:
				case 6135:
				case 4599:
				case 4855:
				case 4215:
				case 6389:
				case 5109:
				case 5365:
				case 5621:
				case 3829: return c + e + e;
				case 4789: return a + e + e;
				case 5349:
				case 4246:
				case 4810:
				case 6968:
				case 2756: return c + e + a + e + r + e + e;
				case 5936: switch (M(e, n + 11)) {
					case 114: return c + e + r + A(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
					case 108: return c + e + r + A(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
					case 45: return c + e + r + A(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
				}
				case 6828:
				case 4268:
				case 2903: return c + e + r + e + e;
				case 6165: return c + e + r + "flex-" + e + e;
				case 5187: return c + e + A(e, /(\w+).+(:[^]+)/, c + "box-$1$2" + r + "flex-$1$2") + e;
				case 5443: return c + e + r + "flex-item-" + A(e, /flex-|-self/g, "") + (!T(e, /flex-|baseline/) ? r + "grid-row-" + A(e, /flex-|-self/g, "") : "") + e;
				case 4675: return c + e + r + "flex-line-pack" + A(e, /align-content|flex-|-self/g, "") + e;
				case 5548: return c + e + r + A(e, "shrink", "negative") + e;
				case 5292: return c + e + r + A(e, "basis", "preferred-size") + e;
				case 6060: return c + "box-" + A(e, "-grow", "") + c + e + r + A(e, "grow", "positive") + e;
				case 4554: return c + A(e, /([^-])(transform)/g, "$1" + c + "$2") + e;
				case 6187: return A(A(A(e, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), e, "") + e;
				case 5495:
				case 3959: return A(e, /(image-set\([^]*)/, c + "$1$`$1");
				case 4968: return A(A(e, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + r + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c + e + e;
				case 4200:
					if (!T(e, /flex-|baseline/)) return r + "grid-column-align" + C(e, n) + e;
					break;
				case 2592:
				case 3360: return r + A(e, "template-", "") + e;
				case 4384:
				case 3616:
					if (t && t.some((function(e, r) {
						return n = r, T(e.props, /grid-\w+-end/);
					}))) return ~O(e + (t = t[n].value), "span") ? e : r + A(e, "-start", "") + e + r + "grid-row-span:" + (~O(t, "span") ? T(t, /\d+/) : +T(t, /\d+/) - +T(e, /\d+/)) + ";";
					return r + A(e, "-start", "") + e;
				case 4896:
				case 4128: return t && t.some((function(e) {
					return T(e.props, /grid-\w+-start/);
				})) ? e : r + A(A(e, "-end", "-span"), "span ", "") + e;
				case 4095:
				case 3583:
				case 4068:
				case 2532: return A(e, /(.+)-inline(.+)/, c + "$1$2") + e;
				case 8116:
				case 7059:
				case 5753:
				case 5535:
				case 5445:
				case 5701:
				case 4933:
				case 4677:
				case 5533:
				case 5789:
				case 5021:
				case 4765:
					if (R(e) - 1 - n > 6) switch (M(e, n + 1)) {
						case 109: if (M(e, n + 4) !== 45) break;
						case 102: return A(e, /(.+:)(.+)-([^]+)/, "$1" + c + "$2-$3$1" + a + (M(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
						case 115: return ~O(e, "stretch") ? ne(A(e, "stretch", "fill-available"), n, t) + e : e;
					}
					break;
				case 5152:
				case 5920: return A(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, (function(a, c, n, t, s, i, u) {
					return r + c + ":" + n + u + (t ? r + c + "-span:" + (s ? i : +i - +n) + u : "") + e;
				}));
				case 4949:
					if (M(e, n + 6) === 121) return A(e, ":", ":" + c) + e;
					break;
				case 6444:
					switch (M(e, M(e, 14) === 45 ? 18 : 11)) {
						case 120: return A(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + c + (M(e, 14) === 45 ? "inline-" : "") + "box$3$1" + c + "$2$3$1" + r + "$2box$3") + e;
						case 100: return A(e, ":", ":" + r) + e;
					}
					break;
				case 5719:
				case 2647:
				case 2135:
				case 3927:
				case 2391: return A(e, "scroll-", "scroll-snap-") + e;
			}
			return e;
		}
		function te(e, r) {
			var a = "";
			var c = S(e);
			for (var n = 0; n < c; n++) a += r(e[n], n, e, r) || "";
			return a;
		}
		function se(e, r, a, c) {
			switch (e.type) {
				case g: if (e.children.length) break;
				case o:
				case s: return e.return = e.return || e.value;
				case n: return "";
				case d: return e.return = e.value + "{" + te(e.children, c) + "}";
				case t: e.value = e.props.join(",");
			}
			return R(a = te(e.children, c)) ? e.return = e.value + "{" + a + "}" : "";
		}
		function ie(e) {
			var r = S(e);
			return function(a, c, n, t) {
				var s = "";
				for (var i = 0; i < r; i++) s += e[i](a, c, n, t) || "";
				return s;
			};
		}
		function ue(e) {
			return function(r) {
				if (!r.root) {
					if (r = r.return) e(r);
				}
			};
		}
		function oe(e, n, i, u) {
			if (e.length > -1) {
				if (!e.return) switch (e.type) {
					case s:
						e.return = ne(e.value, e.length, i);
						return;
					case d: return te([j(e, { value: A(e.value, "@", "@" + c) })], u);
					case t: if (e.length) return N(e.props, (function(n) {
						switch (T(n, /(::plac\w+|:read-\w+)/)) {
							case ":read-only":
							case ":read-write": return te([j(e, { props: [A(n, /:(read-\w+)/, ":" + a + "$1")] })], u);
							case "::placeholder": return te([
								j(e, { props: [A(n, /:(plac\w+)/, ":" + c + "input-$1")] }),
								j(e, { props: [A(n, /:(plac\w+)/, ":" + a + "$1")] }),
								j(e, { props: [A(n, /:(plac\w+)/, r + "input-$1")] })
							], u);
						}
						return "";
					}));
				}
			}
		}
		function fe(e) {
			switch (e.type) {
				case t: e.props = e.props.map((function(r) {
					return N(B(r), (function(r, a, c) {
						switch (M(r, 0)) {
							case 12: return C(r, 1, R(r));
							case 0:
							case 40:
							case 43:
							case 62:
							case 126: return r;
							case 58: if (c[++a] === "global") c[a] = "", c[++a] = "\f" + C(c[a], a = 1, -1);
							case 32: return a === 1 ? "" : r;
							default: switch (a) {
								case 0:
									e = r;
									return S(c) > 1 ? "" : r;
								case a = S(c) - 1:
								case 2: return a === 2 ? r + e + e : r + e;
								default: return r;
							}
						}
					}));
				}));
			}
		}
		e.CHARSET = f;
		e.COMMENT = n;
		e.COUNTER_STYLE = w;
		e.DECLARATION = s;
		e.DOCUMENT = h;
		e.FONT_FACE = b;
		e.FONT_FEATURE_VALUES = m;
		e.IMPORT = o;
		e.KEYFRAMES = d;
		e.LAYER = g;
		e.MEDIA = u;
		e.MOZ = a;
		e.MS = r;
		e.NAMESPACE = v;
		e.PAGE = i;
		e.RULESET = t;
		e.SUPPORTS = p;
		e.VIEWPORT = l;
		e.WEBKIT = c;
		e.abs = k;
		e.alloc = K;
		e.append = z;
		e.assign = x;
		e.caret = L;
		e.char = U;
		e.charat = M;
		e.combine = N;
		e.comment = ae;
		e.commenter = J;
		e.compile = X;
		e.copy = j;
		e.dealloc = V;
		e.declaration = ce;
		e.delimit = W;
		e.delimiter = q;
		e.escaping = Z;
		e.from = $;
		e.hash = E;
		e.identifier = Q;
		e.indexof = O;
		e.match = T;
		e.middleware = ie;
		e.namespace = fe;
		e.next = F;
		e.node = P;
		e.parse = ee;
		e.peek = I;
		e.prefix = ne;
		e.prefixer = oe;
		e.prev = _;
		e.replace = A;
		e.ruleset = re;
		e.rulesheet = ue;
		e.serialize = te;
		e.sizeof = S;
		e.slice = D;
		e.stringify = se;
		e.strlen = R;
		e.substr = C;
		e.token = Y;
		e.tokenize = B;
		e.tokenizer = H;
		e.trim = y;
		e.whitespace = G;
		Object.defineProperty(e, "__esModule", { value: true });
	}));
}));
//#endregion
//#region node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.prod.js
var require_emotion_weak_memoize_cjs_prod = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = function weakMemoize(func) {
		var cache = /* @__PURE__ */ new WeakMap();
		return function(arg) {
			if (cache.has(arg)) return cache.get(arg);
			var ret = func(arg);
			cache.set(arg, ret);
			return ret;
		};
	};
}));
//#endregion
//#region node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.js
var require_emotion_weak_memoize_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_emotion_weak_memoize_cjs_prod();
}));
//#endregion
//#region node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.prod.js
var require_emotion_memoize_cjs_prod = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	function memoize(fn) {
		var cache = Object.create(null);
		return function(arg) {
			if (cache[arg] === void 0) cache[arg] = fn(arg);
			return cache[arg];
		};
	}
	exports["default"] = memoize;
}));
//#endregion
//#region node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js
var require_emotion_memoize_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_emotion_memoize_cjs_prod();
}));
//#endregion
//#region node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.cjs.js
var require_emotion_cache_cjs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var sheet = require_emotion_sheet_cjs();
	var stylis = require_stylis();
	var weakMemoize = require_emotion_weak_memoize_cjs();
	var memoize = require_emotion_memoize_cjs();
	function _interopDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	var weakMemoize__default = /*#__PURE__*/ _interopDefault(weakMemoize);
	var memoize__default = /*#__PURE__*/ _interopDefault(memoize);
	var isBrowser = typeof document !== "undefined";
	var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
		var previous = 0;
		var character = 0;
		while (true) {
			previous = character;
			character = stylis.peek();
			if (previous === 38 && character === 12) points[index] = 1;
			if (stylis.token(character)) break;
			stylis.next();
		}
		return stylis.slice(begin, stylis.position);
	};
	var toRules = function toRules(parsed, points) {
		var index = -1;
		var character = 44;
		do
			switch (stylis.token(character)) {
				case 0:
					if (character === 38 && stylis.peek() === 12) points[index] = 1;
					parsed[index] += identifierWithPointTracking(stylis.position - 1, points, index);
					break;
				case 2:
					parsed[index] += stylis.delimit(character);
					break;
				case 4: if (character === 44) {
					parsed[++index] = stylis.peek() === 58 ? "&\f" : "";
					points[index] = parsed[index].length;
					break;
				}
				default: parsed[index] += stylis.from(character);
			}
		while (character = stylis.next());
		return parsed;
	};
	var getRules = function getRules(value, points) {
		return stylis.dealloc(toRules(stylis.alloc(value), points));
	};
	var fixedElements = /* #__PURE__ */ new WeakMap();
	var compat = function compat(element) {
		if (element.type !== "rule" || !element.parent || element.length < 1) return;
		var value = element.value;
		var parent = element.parent;
		var isImplicitRule = element.column === parent.column && element.line === parent.line;
		while (parent.type !== "rule") {
			parent = parent.parent;
			if (!parent) return;
		}
		if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
		if (isImplicitRule) return;
		fixedElements.set(element, true);
		var points = [];
		var rules = getRules(value, points);
		var parentRules = parent.props;
		for (var i = 0, k = 0; i < rules.length; i++) for (var j = 0; j < parentRules.length; j++, k++) element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	};
	var removeLabel = function removeLabel(element) {
		if (element.type === "decl") {
			var value = element.value;
			if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
				element["return"] = "";
				element.value = "";
			}
		}
	};
	function prefix(value, length) {
		switch (stylis.hash(value, length)) {
			case 5103: return stylis.WEBKIT + "print-" + value + value;
			case 5737:
			case 4201:
			case 3177:
			case 3433:
			case 1641:
			case 4457:
			case 2921:
			case 5572:
			case 6356:
			case 5844:
			case 3191:
			case 6645:
			case 3005:
			case 6391:
			case 5879:
			case 5623:
			case 6135:
			case 4599:
			case 4855:
			case 4215:
			case 6389:
			case 5109:
			case 5365:
			case 5621:
			case 3829: return stylis.WEBKIT + value + value;
			case 5349:
			case 4246:
			case 4810:
			case 6968:
			case 2756: return stylis.WEBKIT + value + stylis.MOZ + value + stylis.MS + value + value;
			case 6828:
			case 4268: return stylis.WEBKIT + value + stylis.MS + value + value;
			case 6165: return stylis.WEBKIT + value + stylis.MS + "flex-" + value + value;
			case 5187: return stylis.WEBKIT + value + stylis.replace(value, /(\w+).+(:[^]+)/, stylis.WEBKIT + "box-$1$2" + stylis.MS + "flex-$1$2") + value;
			case 5443: return stylis.WEBKIT + value + stylis.MS + "flex-item-" + stylis.replace(value, /flex-|-self/, "") + value;
			case 4675: return stylis.WEBKIT + value + stylis.MS + "flex-line-pack" + stylis.replace(value, /align-content|flex-|-self/, "") + value;
			case 5548: return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, "shrink", "negative") + value;
			case 5292: return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, "basis", "preferred-size") + value;
			case 6060: return stylis.WEBKIT + "box-" + stylis.replace(value, "-grow", "") + stylis.WEBKIT + value + stylis.MS + stylis.replace(value, "grow", "positive") + value;
			case 4554: return stylis.WEBKIT + stylis.replace(value, /([^-])(transform)/g, "$1" + stylis.WEBKIT + "$2") + value;
			case 6187: return stylis.replace(stylis.replace(stylis.replace(value, /(zoom-|grab)/, stylis.WEBKIT + "$1"), /(image-set)/, stylis.WEBKIT + "$1"), value, "") + value;
			case 5495:
			case 3959: return stylis.replace(value, /(image-set\([^]*)/, stylis.WEBKIT + "$1$`$1");
			case 4968: return stylis.replace(stylis.replace(value, /(.+:)(flex-)?(.*)/, stylis.WEBKIT + "box-pack:$3" + stylis.MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + stylis.WEBKIT + value + value;
			case 4095:
			case 3583:
			case 4068:
			case 2532: return stylis.replace(value, /(.+)-inline(.+)/, stylis.WEBKIT + "$1$2") + value;
			case 8116:
			case 7059:
			case 5753:
			case 5535:
			case 5445:
			case 5701:
			case 4933:
			case 4677:
			case 5533:
			case 5789:
			case 5021:
			case 4765:
				if (stylis.strlen(value) - 1 - length > 6) switch (stylis.charat(value, length + 1)) {
					case 109: if (stylis.charat(value, length + 4) !== 45) break;
					case 102: return stylis.replace(value, /(.+:)(.+)-([^]+)/, "$1" + stylis.WEBKIT + "$2-$3$1" + stylis.MOZ + (stylis.charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
					case 115: return ~stylis.indexof(value, "stretch") ? prefix(stylis.replace(value, "stretch", "fill-available"), length) + value : value;
				}
				break;
			case 4949: if (stylis.charat(value, length + 1) !== 115) break;
			case 6444:
				switch (stylis.charat(value, stylis.strlen(value) - 3 - (~stylis.indexof(value, "!important") && 10))) {
					case 107: return stylis.replace(value, ":", ":" + stylis.WEBKIT) + value;
					case 101: return stylis.replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + stylis.WEBKIT + (stylis.charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + stylis.WEBKIT + "$2$3$1" + stylis.MS + "$2box$3") + value;
				}
				break;
			case 5936:
				switch (stylis.charat(value, length + 11)) {
					case 114: return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
					case 108: return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
					case 45: return stylis.WEBKIT + value + stylis.MS + stylis.replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
				}
				return stylis.WEBKIT + value + stylis.MS + value + value;
		}
		return value;
	}
	var prefixer = function prefixer(element, index, children, callback) {
		if (element.length > -1) {
			if (!element["return"]) switch (element.type) {
				case stylis.DECLARATION:
					element["return"] = prefix(element.value, element.length);
					break;
				case stylis.KEYFRAMES: return stylis.serialize([stylis.copy(element, { value: stylis.replace(element.value, "@", "@" + stylis.WEBKIT) })], callback);
				case stylis.RULESET: if (element.length) return stylis.combine(element.props, function(value) {
					switch (stylis.match(value, /(::plac\w+|:read-\w+)/)) {
						case ":read-only":
						case ":read-write": return stylis.serialize([stylis.copy(element, { props: [stylis.replace(value, /:(read-\w+)/, ":" + stylis.MOZ + "$1")] })], callback);
						case "::placeholder": return stylis.serialize([
							stylis.copy(element, { props: [stylis.replace(value, /:(plac\w+)/, ":" + stylis.WEBKIT + "input-$1")] }),
							stylis.copy(element, { props: [stylis.replace(value, /:(plac\w+)/, ":" + stylis.MOZ + "$1")] }),
							stylis.copy(element, { props: [stylis.replace(value, /:(plac\w+)/, stylis.MS + "input-$1")] })
						], callback);
					}
					return "";
				});
			}
		}
	};
	var getServerStylisCache = isBrowser ? void 0 : weakMemoize__default["default"](function() {
		return memoize__default["default"](function() {
			return {};
		});
	});
	var defaultStylisPlugins = [prefixer];
	exports["default"] = function createCache(options) {
		var key = options.key;
		if (isBrowser && key === "css") {
			var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
			Array.prototype.forEach.call(ssrStyles, function(node) {
				if (node.getAttribute("data-emotion").indexOf(" ") === -1) return;
				document.head.appendChild(node);
				node.setAttribute("data-s", "");
			});
		}
		var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
		var inserted = {};
		var container;
		var nodesToHydrate = [];
		if (isBrowser) {
			container = options.container || document.head;
			Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node) {
				var attrib = node.getAttribute("data-emotion").split(" ");
				for (var i = 1; i < attrib.length; i++) inserted[attrib[i]] = true;
				nodesToHydrate.push(node);
			});
		}
		var _insert;
		var omnipresentPlugins = [compat, removeLabel];
		if (!getServerStylisCache) {
			var currentSheet;
			var finalizingPlugins = [stylis.stringify, stylis.rulesheet(function(rule) {
				currentSheet.insert(rule);
			})];
			var serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
			var stylis$1 = function stylis$1(styles) {
				return stylis.serialize(stylis.compile(styles), serializer);
			};
			_insert = function insert(selector, serialized, sheet, shouldCache) {
				currentSheet = sheet;
				stylis$1(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
				if (shouldCache) cache.inserted[serialized.name] = true;
			};
		} else {
			var _finalizingPlugins = [stylis.stringify];
			var _serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
			var _stylis = function _stylis(styles) {
				return stylis.serialize(stylis.compile(styles), _serializer);
			};
			var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
			var getRules = function getRules(selector, serialized) {
				var name = serialized.name;
				if (serverStylisCache[name] === void 0) serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
				return serverStylisCache[name];
			};
			_insert = function _insert(selector, serialized, sheet, shouldCache) {
				var name = serialized.name;
				var rules = getRules(selector, serialized);
				if (cache.compat === void 0) {
					if (shouldCache) cache.inserted[name] = true;
					return rules;
				} else if (shouldCache) cache.inserted[name] = rules;
				else return rules;
			};
		}
		var cache = {
			key,
			sheet: new sheet.StyleSheet({
				key,
				container,
				nonce: options.nonce,
				speedy: options.speedy,
				prepend: options.prepend,
				insertionPoint: options.insertionPoint
			}),
			nonce: options.nonce,
			inserted,
			registered: {},
			insert: _insert
		};
		cache.sheet.hydrate(nodesToHydrate);
		return cache;
	};
}));
//#endregion
export { require_emotion_memoize_cjs as n, require_emotion_weak_memoize_cjs as r, require_emotion_cache_cjs as t };
