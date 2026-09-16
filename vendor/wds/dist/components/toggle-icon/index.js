'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_toggle_icon_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/toggle-icon/index.tsx
const ToggleIcon = (0, react.forwardRef)(({ as, active, defaultActive, onActiveChange, activeColor = "semantic.primary.normal", size = "24px", disabled, disableInteraction, xs, sm, md, lg, xl, ...props }, ref) => {
	const [pressed, setPressed] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: active,
		onChange: onActiveChange,
		defaultProp: defaultActive ?? false
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		width: "calc(100% + 8px)",
		height: "calc(100% + 8px)",
		disabled: disableInteraction || disabled,
		scale: true,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: as || "button",
			type: "button",
			role: "button",
			"aria-pressed": pressed,
			"aria-disabled": disabled,
			disabled,
			...props,
			sx: [require_components_toggle_icon_style.toggleIconStyle({
				size,
				active: pressed,
				activeColor,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			ref,
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
				if (!disabled) setPressed(!pressed);
			})
		})
	});
});
ToggleIcon.displayName = "ToggleIcon";
//#endregion
exports.ToggleIcon = ToggleIcon;
