import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/.pnpm/attr-accept@2.2.5/node_modules/attr-accept/dist/es/index.js
var require_es = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.default = function(file, acceptedFiles) {
		if (file && acceptedFiles) {
			var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
			if (acceptedFilesArray.length === 0) return true;
			var fileName = file.name || "";
			var mimeType = (file.type || "").toLowerCase();
			var baseMimeType = mimeType.replace(/\/.*$/, "");
			return acceptedFilesArray.some(function(type) {
				var validType = type.trim().toLowerCase();
				if (validType.charAt(0) === ".") return fileName.toLowerCase().endsWith(validType);
				else if (validType.endsWith("/*")) return baseMimeType === validType.replace(/\/.*$/, "");
				return mimeType === validType;
			});
		}
		return true;
	};
}));
//#endregion
export { require_es as t };
