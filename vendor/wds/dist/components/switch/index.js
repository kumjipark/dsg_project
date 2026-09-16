'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_utils_internal_haptic = require("../../utils/internal/haptic.js");
const require_components_virtual_input_index = require("../virtual-input/index.js");
const require_components_switch_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/switch/index.tsx
const Switch = (0, react.forwardRef)(({ name, defaultChecked, disabled, checked: originChecked, onCheckedChange, size = "medium", required, xs, sm, md, lg, xl, ...props }, ref) => {
	const [button, setButton] = (0, react.useState)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, (node) => setButton(node));
	const hasConsumerStoppedPropagationRef = (0, react.useRef)(false);
	const isFormControl = button ? Boolean(button.closest("form")) : true;
	const [checked, setChecked] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originChecked,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange
	});
	const initialCheckedStateRef = (0, react.useRef)(checked);
	(0, react.useEffect)(() => {
		const form = button?.form;
		if (form) {
			const reset = () => setChecked(initialCheckedStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [button, setChecked]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [isFormControl && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_virtual_input_index.VirtualCheckboxInput, {
		name,
		value: checked ? "on" : "off",
		checked,
		bubbles: !hasConsumerStoppedPropagationRef.current
	}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		disabled,
		color: checked ? "semantic.static.white" : "semantic.label.normal",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: "button",
			type: "button",
			role: "switch",
			"aria-checked": checked,
			"aria-disabled": disabled,
			"aria-required": required,
			disabled,
			ref: composedRefs,
			...props,
			sx: [require_components_switch_style.switchStyle({
				size,
				checked,
				disabled,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (event) => {
				setChecked((prevChecked) => !prevChecked);
				require_utils_internal_haptic.hapticFeedback();
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			}),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				"data-role": "switch-knob",
				"data-checked": checked,
				"data-disabled": disabled
			})
		})
	})] });
});
Switch.displayName = "Switch";
//#endregion
exports.Switch = Switch;
