'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_children = require("../../utils/internal/children.js");
const require_components_progress_step_indicator_style = require("./style.js");
const require_components_progress_step_indicator_constants = require("./constants.js");
const require_components_progress_step_indicator_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/progress-step-indicator/index.tsx
/**
* @deprecated
*/
const ProgressStepIndicator = (0, react.forwardRef)(({ size = "medium", divider = true, value: originValue, defaultValue, onValueChange, xs, sm, md, lg, xl, children, ...props }, ref) => {
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originValue,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const steps = (0, react.useMemo)(() => {
		return require_utils_internal_children.findComponentInChildren(children, "isProgressStepIndicatorItem");
	}, [children]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_progress_step_indicator_contexts.ProgressStepIndicatorProvider, {
		value,
		onValueChange: setValue,
		steps,
		getStepIndex: (0, react.useCallback)((step) => steps.findIndex((cur) => cur.value === step), [steps]),
		getActiveStepIndex: (0, react.useCallback)(() => steps.findIndex((cur) => cur.value === value), [steps, value]),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			"wds-component": "progress-step-indicator",
			"aria-label": "progress",
			ref,
			...props,
			sx: [require_components_progress_step_indicator_style.progressStepWrapperStyle({
				size,
				divider,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				as: "ol",
				sx: require_components_progress_step_indicator_style.progressListWrapperStyle,
				children
			})
		})
	});
});
ProgressStepIndicator.displayName = require_components_progress_step_indicator_constants.PROGRESS_STEP_INDICATOR_NAME;
/**
* @deprecated
*/
const ProgressStepIndicatorItem = (0, react.forwardRef)(({ value, ...props }, ref) => {
	const { value: contextValue, getStepIndex, getActiveStepIndex } = require_components_progress_step_indicator_contexts.useProgressStepIndicatorContext(require_components_progress_step_indicator_constants.PROGRESS_STEP_INDICATOR_ITEM_NAME);
	const isActive = contextValue === value;
	const index = getStepIndex(value);
	const activeIndex = getActiveStepIndex();
	const isCompleted = activeIndex !== -1 && activeIndex >= index;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: "li",
		ref,
		"wds-component": "progress-step-indicator-item",
		"aria-label": `Step ${index}`,
		...props,
		"data-is-completed": isCompleted,
		"aria-current": isActive ? "step" : void 0,
		sx: [require_components_progress_step_indicator_style.progressListStyle, props.sx]
	});
});
ProgressStepIndicatorItem.displayName = require_components_progress_step_indicator_constants.PROGRESS_STEP_INDICATOR_ITEM_NAME;
ProgressStepIndicatorItem.isProgressStepIndicatorItem = true;
//#endregion
exports.ProgressStepIndicator = ProgressStepIndicator;
exports.ProgressStepIndicatorItem = ProgressStepIndicatorItem;
