import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.cjs.prod.js
var require_emotion_hash_cjs_prod = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	function murmur2(str) {
		var h = 0;
		var k, i = 0, len = str.length;
		for (; len >= 4; ++i, len -= 4) {
			k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
			k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
			k ^= k >>> 24;
			h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
		}
		switch (len) {
			case 3: h ^= (str.charCodeAt(i + 2) & 255) << 16;
			case 2: h ^= (str.charCodeAt(i + 1) & 255) << 8;
			case 1:
				h ^= str.charCodeAt(i) & 255;
				h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
		}
		h ^= h >>> 13;
		h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
		return ((h ^ h >>> 15) >>> 0).toString(36);
	}
	exports["default"] = murmur2;
}));
//#endregion
//#region node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.cjs.js
var require_emotion_hash_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_emotion_hash_cjs_prod();
}));
//#endregion
export { require_emotion_hash_cjs as t };
