'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_radio_contexts = require("./contexts.js");
const require_components_virtual_input_index = require("../virtual-input/index.js");
const require_components_radio_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/radio/index.tsx
const Radio = (0, react.forwardRef)(({ name, checked = false, disabled, required, value, invalid = false, onCheck, size = "medium", tight: originTight, xs, sm, md, lg, xl, ...props }, ref) => {
	const { tight: contextTight } = require_components_radio_contexts.useRadioContext() || {};
	const tight = originTight ?? contextTight ?? false;
	const [button, setButton] = (0, react.useState)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, (node) => setButton(node));
	const hasConsumerStoppedPropagationRef = (0, react.useRef)(false);
	const isFormControl = button ? Boolean(button.closest("form")) : true;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [isFormControl && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_virtual_input_index.VirtualCheckboxInput, {
		value,
		checked,
		type: "radio",
		bubbles: !hasConsumerStoppedPropagationRef.current,
		name,
		required,
		disabled
	}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		width: "calc(100% + 8px)",
		height: "calc(100% + 8px)",
		disabled,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: "button",
			type: "button",
			role: "radio",
			"aria-checked": checked,
			"aria-disabled": disabled,
			"aria-required": required,
			"aria-invalid": invalid,
			disabled,
			value,
			ref: composedRefs,
			"data-tight": tight,
			"wds-component": "radio",
			...props,
			sx: [require_components_radio_style.radioStyle({
				size,
				tight,
				checked,
				disabled,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (event) => {
				if (!checked) onCheck?.();
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			}),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconDot, {}) })
		})
	})] });
});
Radio.displayName = "Radio";
//#endregion
exports.Radio = Radio;
