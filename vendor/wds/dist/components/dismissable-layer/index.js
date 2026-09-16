'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let react = require("react");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_dismissable_layer = require("@radix-ui/react-dismissable-layer");
//#region src/components/dismissable-layer/index.tsx
const DismissableLayer = (0, react.forwardRef)(({ onInteractOutside, onFocusOutside, onPointerDownOutside, ...props }, ref) => {
	const handleSkipDismissableLayer = (0, react.useCallback)((e) => {
		if (e.target.closest("[wds-ignore-dismissable-layer=\"true\"]")) e.preventDefault();
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_dismissable_layer.DismissableLayer, {
		ref,
		onPointerDownOutside: (0, _radix_ui_primitive.composeEventHandlers)((e) => {
			handleSkipDismissableLayer(e);
		}, onPointerDownOutside),
		onFocusOutside: (0, _radix_ui_primitive.composeEventHandlers)((e) => {
			handleSkipDismissableLayer(e);
		}, onFocusOutside),
		onInteractOutside: (0, _radix_ui_primitive.composeEventHandlers)((e) => {
			handleSkipDismissableLayer(e);
		}, onInteractOutside),
		...props
	});
});
DismissableLayer.displayName = "DismissableLayer";
//#endregion
exports.DismissableLayer = DismissableLayer;
