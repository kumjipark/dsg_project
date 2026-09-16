'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_checkbox_contexts = require("./contexts.js");
const require_components_virtual_input_index = require("../virtual-input/index.js");
const require_components_checkbox_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/checkbox/index.tsx
const Checkbox = (0, react.forwardRef)(({ name, defaultChecked, icon: originIcon, disabled, required, checked: originChecked, onCheckedChange, size = "medium", invalid = false, indeterminate, indeterminateIcon: originIndeterminateIcon, tight: originTight, bold, xs, sm, md, lg, xl, ...props }, ref) => {
	const { tight: contextTight } = require_components_checkbox_contexts.useCheckboxContext() || {};
	const tight = originTight ?? contextTight ?? false;
	const icon = originIcon || /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCheckThick, {});
	const indeterminateIcon = originIndeterminateIcon || /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconLineHorizontalThick, {});
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
		defaultChecked,
		bubbles: !hasConsumerStoppedPropagationRef.current
	}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		width: "calc(100% + 8px)",
		height: "calc(100% + 8px)",
		disabled,
		scale: true,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: "button",
			type: "button",
			role: "checkbox",
			"aria-checked": indeterminate ? "mixed" : checked,
			"aria-disabled": disabled,
			"aria-invalid": invalid,
			disabled,
			"aria-required": required,
			ref: composedRefs,
			"data-tight": tight,
			"wds-component": "checkbox",
			...props,
			sx: [require_components_checkbox_style.checkboxStyle({
				size,
				checked,
				disabled,
				indeterminate,
				bold,
				tight,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, (event) => {
				if (event.key === "Enter") event.preventDefault();
			}),
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (event) => {
				setChecked((prevChecked) => !prevChecked);
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			}),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				"data-role": "checkbox-icon-wrapper",
				children: indeterminate ? indeterminateIcon : icon
			})
		})
	})] });
});
Checkbox.displayName = "Checkbox";
//#endregion
exports.Checkbox = Checkbox;
