'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { findComponentInChildren } from "../../utils/internal/children.mjs";
import { stepperChevronStyle, stepperCircleStyle, stepperLabelStyle, stepperWrapperStyle } from "./style.mjs";
import { STEPPER_ITEM_NAME, STEPPER_NAME } from "./constants.mjs";
import { StepperProvider, useStepperContext } from "./contexts.mjs";
import { forwardRef, useCallback, useMemo } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconCheckThick, IconChevronRightTightSmall } from "@wanteddev/wds-icon";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/stepper/index.tsx
const Stepper = forwardRef(({ value: originValue, defaultValue, onValueChange, children, ...props }, ref) => {
	const [value, setValue] = useControllableState({
		prop: originValue,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const steps = useMemo(() => {
		return findComponentInChildren(children, "isStepperItem");
	}, [children]);
	return /* @__PURE__ */ jsx(StepperProvider, {
		value,
		onValueChange: setValue,
		steps,
		getStepIndex: useCallback((v) => steps.findIndex((cur) => cur.value === v), [steps]),
		getActiveStepIndex: useCallback(() => steps.findIndex((cur) => cur.value === value), [steps, value]),
		children: /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "stepper",
			"aria-label": "progress",
			ref,
			...props,
			as: "ol",
			alignItems: "center",
			justifyContent: "center",
			gap: "24px",
			sx: [stepperWrapperStyle, props.sx],
			children
		})
	});
});
Stepper.displayName = STEPPER_NAME;
const StepperItem = forwardRef(({ value, label, completedLabel, ...props }, ref) => {
	const { value: contextValue, getStepIndex, getActiveStepIndex } = useStepperContext(STEPPER_ITEM_NAME);
	const isActive = contextValue === value;
	const index = getStepIndex(value);
	const isCompleted = getActiveStepIndex() > index;
	return /* @__PURE__ */ jsxs(Fragment, { children: [!(index === 0) && /* @__PURE__ */ jsx(IconChevronRightTightSmall, { sx: stepperChevronStyle }), /* @__PURE__ */ jsxs(FlexBox, {
		as: "li",
		ref,
		"wds-component": "stepper-item",
		"aria-current": isActive ? "step" : void 0,
		"aria-label": `Step ${index}`,
		alignItems: "center",
		gap: "8px",
		...props,
		children: [/* @__PURE__ */ jsx(FlexBox, {
			sx: stepperCircleStyle(isActive, isCompleted),
			alignItems: "center",
			justifyContent: "center",
			children: isCompleted ? /* @__PURE__ */ jsx(IconCheckThick, {}) : /* @__PURE__ */ jsx(Typography, {
				variant: "caption1",
				weight: "bold",
				align: "center",
				"data-role": "stepper-item-step",
				children: (index === -1 ? 0 : index) + 1
			})
		}), /* @__PURE__ */ jsx(StepperItemLabel, {
			isActive,
			isCompleted,
			label,
			completedLabel
		})]
	})] });
});
StepperItem.displayName = STEPPER_ITEM_NAME;
StepperItem.isStepperItem = true;
const StepperItemLabel = ({ isCompleted, isActive, label, completedLabel }) => {
	const color = isActive ? "semantic.label.normal" : "semantic.label.alternative";
	if (isCompleted) return Boolean(completedLabel) ? /* @__PURE__ */ jsx(Typography, {
		sx: stepperLabelStyle,
		"data-role": "stepper-item-label",
		color,
		variant: "label2",
		weight: "bold",
		children: completedLabel
	}) : null;
	return Boolean(label) ? /* @__PURE__ */ jsx(Typography, {
		sx: stepperLabelStyle,
		"data-role": "stepper-item-label",
		color,
		variant: "label2",
		weight: "bold",
		children: label
	}) : null;
};
//#endregion
export { Stepper, StepperItem };
