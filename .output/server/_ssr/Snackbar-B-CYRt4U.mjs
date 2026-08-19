import { o as __toESM } from "../_runtime.mjs";
import { o as require_react } from "../_libs/@emotion/react+[...].mjs";
import { $ as require_jsx_runtime } from "../_libs/@mui/icons-material+[...].mjs";
import { S as Alert, a as Snackbar } from "../_libs/@mui/material+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Snackbar-B-CYRt4U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SnackbarAlert = (0, import_react.forwardRef)(function SnackbarAlert(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
		elevation: 6,
		ref,
		variant: "filled",
		...props,
		sx: { width: "100%" }
	});
});
function GlobalSnackbar({ open, message, severity, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snackbar, {
		open,
		onClose,
		autoHideDuration: 6e3,
		anchorOrigin: {
			vertical: "top",
			horizontal: "left"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnackbarAlert, {
			severity,
			children: message
		})
	});
}
var SnackbarContext = (0, import_react.createContext)({ showSnackbar: () => void 0 });
function SnackbarProvider({ children }) {
	const [message, setMessage] = (0, import_react.useState)("");
	const [severity, setSeverity] = (0, import_react.useState)("info");
	const showSnackbar = (0, import_react.useCallback)((nextMessage, nextSeverity = "info") => {
		setMessage(nextMessage);
		setSeverity(nextSeverity);
	}, []);
	const value = (0, import_react.useMemo)(() => ({ showSnackbar }), [showSnackbar]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SnackbarContext.Provider, {
		value,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalSnackbar, {
			open: Boolean(message),
			message,
			severity,
			onClose: () => setMessage("")
		})]
	});
}
function useSnackbar() {
	return (0, import_react.useContext)(SnackbarContext);
}
//#endregion
export { useSnackbar as n, SnackbarProvider as t };
