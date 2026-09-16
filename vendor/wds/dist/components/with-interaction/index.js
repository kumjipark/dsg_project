'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/with-interaction/index.tsx
const WithInteraction = (0, react.forwardRef)(({ variant = "normal", children, scale, disabled, color, width, height, sx, ...props }, forwardedRef) => {
	if ((0, react.isValidElement)(children)) {
		const childrenProps = { ...children.props };
		const ref = forwardedRef ? (0, _radix_ui_react_compose_refs.composeRefs)(forwardedRef, children.ref ?? childrenProps.ref) : void 0;
		childrenProps.children = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [childrenProps.children, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Interaction, {
			color,
			height,
			width
		})] });
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: _radix_ui_react_slot.Slot,
			...props,
			sx: [
				require_components_with_interaction_style.getWrapperStyle({
					disabled,
					variant,
					scale
				}),
				sx,
				childrenProps.sx
			],
			children: (0, react.cloneElement)(children, {
				...childrenProps,
				sx: void 0,
				ref,
				children: childrenProps.children
			})
		});
	}
	return react.Children.count(children) > 1 ? react.Children.only(null) : null;
});
WithInteraction.displayName = "WithInteraction";
const Interaction = ({ color = "semantic.label.normal", width = "100%", height = "100%" }) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		"wds-component": "with-interaction",
		role: "presentation",
		sx: require_components_with_interaction_style.interactionStyle({
			color,
			width,
			height
		})
	});
};
//#endregion
exports.WithInteraction = WithInteraction;
