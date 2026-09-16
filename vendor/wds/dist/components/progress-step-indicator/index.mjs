'use client';
import { findComponentInChildren } from "../../utils/internal/children.mjs";
import { progressListStyle, progressListWrapperStyle, progressStepWrapperStyle } from "./style.mjs";
import { PROGRESS_STEP_INDICATOR_ITEM_NAME, PROGRESS_STEP_INDICATOR_NAME } from "./constants.mjs";
import { ProgressStepIndicatorProvider, useProgressStepIndicatorContext } from "./contexts.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useCallback, useMemo } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { jsx } from "react/jsx-runtime";
//#region src/components/progress-step-indicator/index.tsx
/**
* @deprecated
*/
const ProgressStepIndicator = forwardRef(({ size = "medium", divider = true, value: originValue, defaultValue, onValueChange, xs, sm, md, lg, xl, children, ...props }, ref) => {
	const [value, setValue] = useControllableState({
		prop: originValue,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const steps = useMemo(() => {
		return findComponentInChildren(children, "isProgressStepIndicatorItem");
	}, [children]);
	return /* @__PURE__ */ jsx(ProgressStepIndicatorProvider, {
		value,
		onValueChange: setValue,
		steps,
		getStepIndex: useCallback((step) => steps.findIndex((cur) => cur.value === step), [steps]),
		getActiveStepIndex: useCallback(() => steps.findIndex((cur) => cur.value === value), [steps, value]),
		children: /* @__PURE__ */ jsx(Box, {
			"wds-component": "progress-step-indicator",
			"aria-label": "progress",
			ref,
			...props,
			sx: [progressStepWrapperStyle({
				size,
				divider,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			children: /* @__PURE__ */ jsx(Box, {
				as: "ol",
				sx: progressListWrapperStyle,
				children
			})
		})
	});
});
ProgressStepIndicator.displayName = PROGRESS_STEP_INDICATOR_NAME;
/**
* @deprecated
*/
const ProgressStepIndicatorItem = forwardRef(({ value, ...props }, ref) => {
	const { value: contextValue, getStepIndex, getActiveStepIndex } = useProgressStepIndicatorContext(PROGRESS_STEP_INDICATOR_ITEM_NAME);
	const isActive = contextValue === value;
	const index = getStepIndex(value);
	const activeIndex = getActiveStepIndex();
	const isCompleted = activeIndex !== -1 && activeIndex >= index;
	return /* @__PURE__ */ jsx(Box, {
		as: "li",
		ref,
		"wds-component": "progress-step-indicator-item",
		"aria-label": `Step ${index}`,
		...props,
		"data-is-completed": isCompleted,
		"aria-current": isActive ? "step" : void 0,
		sx: [progressListStyle, props.sx]
	});
});
ProgressStepIndicatorItem.displayName = PROGRESS_STEP_INDICATOR_ITEM_NAME;
ProgressStepIndicatorItem.isProgressStepIndicatorItem = true;
//#endregion
export { ProgressStepIndicator, ProgressStepIndicatorItem };
