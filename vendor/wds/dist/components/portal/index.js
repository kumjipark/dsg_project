'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_portal = require("@radix-ui/react-portal");
//#region src/components/portal/index.tsx
const Portal = (0, react.forwardRef)(({ container = globalThis?.document?.body, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_portal.Portal, {
		container,
		ref,
		asChild: true,
		...props,
		children
	});
});
Portal.displayName = "Portal";
//#endregion
exports.Portal = Portal;
