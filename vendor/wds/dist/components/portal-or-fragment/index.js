'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_portal_index = require("../portal/index.js");
let react = require("react");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/portal-or-fragment/index.tsx
const PortalOrFragment = (0, react.forwardRef)(({ disablePortal, container, children, ...props }, ref) => {
	return disablePortal ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
		...props,
		ref,
		children
	}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_portal_index.Portal, {
		...props,
		container,
		ref,
		children
	});
});
//#endregion
exports.PortalOrFragment = PortalOrFragment;
