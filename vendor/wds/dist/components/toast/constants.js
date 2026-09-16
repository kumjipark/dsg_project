'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_toast_style = require("./style.js");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/toast/constants.tsx
const toastIconComponent = {
	normal: null,
	positive: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		alignItems: "center",
		justifyContent: "center",
		sx: require_components_toast_style.toastCircleIconWrapperStyle,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleCheckFill, {
			"aria-label": "positive",
			sx: (theme) => ({ color: theme.atomic.green[60] })
		})
	}),
	cautionary: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		alignItems: "center",
		justifyContent: "center",
		sx: require_components_toast_style.toastCircleIconWrapperStyle,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconTriangleExclamationFill, {
			"aria-label": "cautionary",
			sx: (theme) => ({ color: theme.atomic.orange[60] })
		})
	}),
	negative: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		alignItems: "center",
		justifyContent: "center",
		sx: require_components_toast_style.toastCircleIconWrapperStyle,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleCloseFill, {
			"aria-label": "negative",
			sx: (theme) => ({ color: theme.atomic.red[60] })
		})
	})
};
const TOAST_NAME = "Toast";
const TOAST_CONTAINER_NAME = "ToastContainer";
const TOAST_CONTENT_NAME = "ToastContent";
const TOAST_ICON_NAME = "ToastIcon";
//#endregion
exports.TOAST_CONTAINER_NAME = TOAST_CONTAINER_NAME;
exports.TOAST_CONTENT_NAME = TOAST_CONTENT_NAME;
exports.TOAST_ICON_NAME = TOAST_ICON_NAME;
exports.TOAST_NAME = TOAST_NAME;
exports.toastIconComponent = toastIconComponent;
