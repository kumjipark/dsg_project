'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_utils_internal_children = require("../../utils/internal/children.js");
const require_components_stepper_style = require("./style.js");
const require_components_stepper_constants = require("./constants.js");
const require_components_stepper_contexts = require("./contexts.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/stepper/index.tsx
const Stepper = (0, react.forwardRef)(({ value: originValue, defaultValue, onValueChange, children, ...props }, ref) => {
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originValue,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const steps = (0, react.useMemo)(() => {
		return require_utils_internal_children.findComponentInChildren(children, "isStepperItem");
	}, [children]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_stepper_contexts.StepperProvider, {
		value,
		onValueChange: setValue,
		steps,
		getStepIndex: (0, react.useCallback)((v) => steps.findIndex((cur) => cur.value === v), [steps]),
		getActiveStepIndex: (0, react.useCallback)(() => steps.findIndex((cur) => cur.value === value), [steps, value]),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "stepper",
			"aria-label": "progress",
			ref,
			...props,
			as: "ol",
			alignItems: "center",
			justifyContent: "center",
			gap: "24px",
			sx: [require_components_stepper_style.stepperWrapperStyle, props.sx],
			children
		})
	});
});
Stepper.displayName = require_components_stepper_constants.STEPPER_NAME;
const StepperItem = (0, react.forwardRef)(({ value, label, completedLabel, ...props }, ref) => {
	const { value: contextValue, getStepIndex, getActiveStepIndex } = require_components_stepper_contexts.useStepperContext(require_components_stepper_constants.STEPPER_ITEM_NAME);
	const isActive = contextValue === value;
	const index = getStepIndex(value);
	const isCompleted = getActiveStepIndex() > index;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [!(index === 0) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronRightTightSmall, { sx: require_components_stepper_style.stepperChevronStyle }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		as: "li",
		ref,
		"wds-component": "stepper-item",
		"aria-current": isActive ? "step" : void 0,
		"aria-label": `Step ${index}`,
		alignItems: "center",
		gap: "8px",
		...props,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			sx: require_components_stepper_style.stepperCircleStyle(isActive, isCompleted),
			alignItems: "center",
			justifyContent: "center",
			children: isCompleted ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCheckThick, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
				variant: "caption1",
				weight: "bold",
				align: "center",
				"data-role": "stepper-item-step",
				children: (index === -1 ? 0 : index) + 1
			})
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StepperItemLabel, {
			isActive,
			isCompleted,
			label,
			completedLabel
		})]
	})] });
});
StepperItem.displayName = require_components_stepper_constants.STEPPER_ITEM_NAME;
StepperItem.isStepperItem = true;
const StepperItemLabel = ({ isCompleted, isActive, label, completedLabel }) => {
	const color = isActive ? "semantic.label.normal" : "semantic.label.alternative";
	if (isCompleted) return Boolean(completedLabel) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		sx: require_components_stepper_style.stepperLabelStyle,
		"data-role": "stepper-item-label",
		color,
		variant: "label2",
		weight: "bold",
		children: completedLabel
	}) : null;
	return Boolean(label) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		sx: require_components_stepper_style.stepperLabelStyle,
		"data-role": "stepper-item-label",
		color,
		variant: "label2",
		weight: "bold",
		children: label
	}) : null;
};
//#endregion
exports.Stepper = Stepper;
exports.StepperItem = StepperItem;
