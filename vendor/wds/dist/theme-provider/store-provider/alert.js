Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
require("../../_virtual/_rolldown/runtime.js");
const require_components_alert_index = require("../../components/alert/index.js");
const require_stores_alert_store = require("../../stores/alert-store.js");
let react = require("react");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/theme-provider/store-provider/alert.tsx
const AlertArea = () => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: require_stores_alert_store.useAlertStore((state) => state.items).map((dialog) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AlertPromise, { ...dialog }, dialog.id)) });
};
const AlertPromise = ({ id, content, title, confirm, cancel, direction = "normal", disableOutsideClickClose, disableEscapeKeyDownClose, sx, resolve }) => {
	const hide = require_stores_alert_store.useAlertStore((state) => state.hide);
	const handleClose = (0, react.useCallback)(() => {
		hide(id);
	}, [hide, id]);
	const handleCancel = (0, react.useCallback)((e) => {
		if (e?.defaultPrevented) return;
		handleClose();
		resolve("cancel");
	}, [handleClose, resolve]);
	const handleConfirm = (0, react.useCallback)((e) => {
		if (e?.defaultPrevented) return;
		handleClose();
		resolve("confirm");
	}, [handleClose, resolve]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_alert_index.Alert, {
		open: true,
		onOpenChange: (open) => !open && handleCancel(),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_alert_index.AlertContainer, {
			disableOutsideClickClose,
			disableEscapeKeyDownClose,
			sx,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_alert_index.AlertContent, { children: [title && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_alert_index.AlertHeading, { children: title }), content && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_alert_index.AlertDescription, { children: content })] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_alert_index.AlertActionArea, {
				flexDirection: direction === "reverse" ? "row-reverse" : "row",
				justifyContent: direction === "reverse" ? "initial" : "flex-end",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
					onClick: handleConfirm,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slottable, { children: confirm })
				}), Boolean(cancel) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
					onClick: handleCancel,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slottable, { children: cancel })
				})]
			})]
		})
	});
};
//#endregion
exports.default = AlertArea;
