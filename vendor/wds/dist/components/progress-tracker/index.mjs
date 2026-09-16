'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { findComponentInChildren } from "../../utils/internal/children.mjs";
import { progressCircleStyle, progressTrackerItemContentStyle, progressTrackerItemDividerStyle, progressTrackerItemHorizontalStyle, progressTrackerItemHorizontalWrapperStyle, progressTrackerItemVerticalLabelWrapperStyle, progressTrackerItemVerticalStyle, progressTrackerWrapperStyle } from "./style.mjs";
import { PROGRESS_TRACKER_ITEM_NAME, PROGRESS_TRACKER_NAME } from "./constants.mjs";
import { ProgressTrackerProvider, useProgressTrackerContext } from "./contexts.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useCallback, useMemo } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconCheckThick } from "@wanteddev/wds-icon";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/progress-tracker/index.tsx
const ProgressTracker = forwardRef(({ direction = "horizontal", value: originValue, defaultValue, onValueChange, children, ...props }, ref) => {
	const [value, setValue] = useControllableState({
		prop: originValue,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const steps = useMemo(() => {
		return findComponentInChildren(children, "isProgressTrackerItem");
	}, [children]);
	return /* @__PURE__ */ jsx(ProgressTrackerProvider, {
		direction,
		value,
		onValueChange: setValue,
		steps,
		getTotalLength: useCallback(() => steps.length, [steps]),
		getStepIndex: useCallback((step) => steps.findIndex((cur) => cur.value === step), [steps]),
		getActiveStepIndex: useCallback(() => steps.findIndex((cur) => cur.value === value), [steps, value]),
		children: /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "progress-tracker",
			"aria-label": "progress",
			as: "ol",
			ref,
			...props,
			sx: [progressTrackerWrapperStyle({ direction }), props.sx],
			children
		})
	});
});
ProgressTracker.displayName = PROGRESS_TRACKER_NAME;
const ProgressTrackerItem = forwardRef(({ labelContent, ...props }, ref) => {
	const { direction } = useProgressTrackerContext(PROGRESS_TRACKER_ITEM_NAME);
	if (direction === "vertical") return /* @__PURE__ */ jsx(ProgressTrackerItemVertical, {
		labelContent,
		...props,
		ref
	});
	return /* @__PURE__ */ jsx(ProgressTrackerItemHorizontal, {
		...props,
		ref
	});
});
ProgressTrackerItem.displayName = PROGRESS_TRACKER_ITEM_NAME;
ProgressTrackerItem.isProgressTrackerItem = true;
const ProgressTrackerItemVertical = forwardRef(({ value, label, completedLabel, children, labelContent, ...props }, ref) => {
	const { value: contextValue, getStepIndex, getActiveStepIndex, getTotalLength } = useProgressTrackerContext(PROGRESS_TRACKER_ITEM_NAME);
	const isActive = contextValue === value;
	const index = getStepIndex(value);
	const isCompleted = getActiveStepIndex() > index;
	const isLast = index === getTotalLength() - 1;
	const number = (index === -1 ? 0 : index) + 1;
	return /* @__PURE__ */ jsx(FlexBox, {
		as: "li",
		ref,
		"wds-component": "progress-tracker-item",
		"aria-current": isActive ? "step" : void 0,
		"aria-label": `Step ${index}`,
		gap: "20px",
		"data-completed": isCompleted,
		"data-active": isActive,
		...props,
		sx: [progressTrackerItemVerticalStyle, props.sx],
		children: /* @__PURE__ */ jsxs(FlexBox, {
			"data-role": "progress-tracker-item-step-wrapper",
			flex: "1",
			gap: "8px",
			children: [/* @__PURE__ */ jsxs(FlexBox, {
				"data-role": "progress-tracker-item-icon-wrapper",
				flexDirection: "column",
				alignItems: "center",
				children: [/* @__PURE__ */ jsx(FlexBox, {
					"data-role": "progress-tracker-item-stepper",
					sx: progressCircleStyle(isActive, isCompleted),
					alignItems: "center",
					justifyContent: "center",
					children: isCompleted ? /* @__PURE__ */ jsx(IconCheckThick, {}) : /* @__PURE__ */ jsx(Typography, {
						variant: "caption1",
						weight: "bold",
						align: "center",
						"data-role": "progress-tracker-item-step",
						children: number
					})
				}), !isLast && /* @__PURE__ */ jsx(Box, {
					"data-role": "progress-tracker-item-divider",
					sx: progressTrackerItemDividerStyle(isCompleted, "vertical")
				})]
			}), /* @__PURE__ */ jsxs(FlexBox, {
				flexDirection: "column",
				flex: "1",
				children: [(Boolean(label) || Boolean(completedLabel) || Boolean(labelContent)) && /* @__PURE__ */ jsxs(FlexBox, {
					"data-role": "progress-tracker-item-label-wrapper",
					sx: progressTrackerItemVerticalLabelWrapperStyle,
					children: [/* @__PURE__ */ jsx(ProgressTrackerItemLabel, {
						isCompleted,
						isActive,
						label,
						completedLabel
					}), /* @__PURE__ */ jsx(FlexBox, {
						"data-role": "progress-tracker-item-label-content-wrapper",
						flex: "1",
						children: labelContent
					})]
				}), Boolean(children) ? /* @__PURE__ */ jsx(FlexBox, {
					"data-role": "progress-tracker-item-content",
					sx: progressTrackerItemContentStyle,
					children
				}) : /* @__PURE__ */ jsx(FlexBox, {
					"data-role": "progress-tracker-item-content",
					sx: {
						width: 0,
						height: 0
					},
					children
				})]
			})]
		})
	});
});
const ProgressTrackerItemHorizontal = forwardRef(({ value, label, completedLabel, ...props }, ref) => {
	const { value: contextValue, getStepIndex, getActiveStepIndex, getTotalLength } = useProgressTrackerContext(PROGRESS_TRACKER_ITEM_NAME);
	const isActive = contextValue === value;
	const index = getStepIndex(value);
	const isCompleted = getActiveStepIndex() > index;
	const isFirst = index === 0;
	const isLast = index === getTotalLength() - 1;
	const number = (index === -1 ? 0 : index) + 1;
	return /* @__PURE__ */ jsxs(FlexBox, {
		as: "li",
		ref,
		"wds-component": "progress-tracker-item",
		"aria-current": isActive ? "step" : void 0,
		"aria-label": `Step ${index}`,
		flexDirection: "column",
		alignItems: "center",
		gap: "8px",
		"data-completed": isCompleted,
		"data-active": isActive,
		...props,
		sx: [progressTrackerItemHorizontalStyle, props.sx],
		children: [/* @__PURE__ */ jsxs(FlexBox, {
			"data-role": "progress-tracker-item-wrapper",
			flexDirection: "row",
			alignItems: "center",
			sx: progressTrackerItemHorizontalWrapperStyle,
			children: [
				/* @__PURE__ */ jsx(Box, {
					"data-role": "progress-tracker-item-divider",
					sx: [progressTrackerItemDividerStyle(isActive || isCompleted, "horizontal"), isFirst && { backgroundColor: "transparent" }]
				}),
				/* @__PURE__ */ jsx(FlexBox, {
					flexDirection: "column",
					alignItems: "center",
					children: /* @__PURE__ */ jsx(FlexBox, {
						sx: progressCircleStyle(isActive, isCompleted),
						alignItems: "center",
						justifyContent: "center",
						children: isCompleted ? /* @__PURE__ */ jsx(IconCheckThick, {}) : /* @__PURE__ */ jsx(Typography, {
							variant: "caption1",
							weight: "bold",
							align: "center",
							"data-role": "progress-tracker-item-step",
							children: number
						})
					})
				}),
				/* @__PURE__ */ jsx(Box, {
					"data-role": "progress-tracker-item-divider",
					sx: [progressTrackerItemDividerStyle(isCompleted, "horizontal"), isLast && { backgroundColor: "transparent" }]
				})
			]
		}), /* @__PURE__ */ jsx(ProgressTrackerItemLabel, {
			isCompleted,
			isActive,
			label,
			completedLabel
		})]
	});
});
const ProgressTrackerItemLabel = ({ isCompleted, isActive, label, completedLabel }) => {
	if (isCompleted) return Boolean(completedLabel) ? /* @__PURE__ */ jsx(Typography, {
		sx: {
			padding: "1px 0px",
			height: "fit-content"
		},
		"data-role": "progress-tracker-item-label",
		color: isActive ? "semantic.label.normal" : "semantic.label.alternative",
		variant: "label2",
		weight: "bold",
		align: "center",
		children: completedLabel
	}) : null;
	return Boolean(label) ? /* @__PURE__ */ jsx(Typography, {
		sx: {
			padding: "1px 0px",
			height: "fit-content"
		},
		"data-role": "progress-tracker-item-label",
		color: isActive ? "semantic.label.normal" : "semantic.label.alternative",
		variant: "label2",
		weight: "bold",
		align: "center",
		children: label
	}) : null;
};
const ProgressTrackerLabelContent = forwardRef(({ variant = "custom", ...props }, ref) => {
	switch (variant) {
		case "badge": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "progress-tracker-label-content",
			ref,
			alignItems: "center",
			gap: "4px",
			...props,
			sx: [{ height: 20 }, props.sx]
		});
		case "caption": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "progress-tracker-label-content",
			ref,
			alignItems: "center",
			justifyContent: "flex-end",
			gap: "4px",
			flex: "1",
			...props,
			sx: [{
				padding: "2px 0px",
				height: 20
			}, props.sx],
			children: /* @__PURE__ */ jsx(Typography, {
				variant: "caption1",
				weight: "regular",
				color: "semantic.label.alternative",
				children: props.children
			})
		});
		case "custom": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "progress-tracker-label-content",
			ref,
			flex: "1",
			...props,
			sx: [{ height: 20 }, props.sx]
		});
	}
});
ProgressTrackerLabelContent.displayName = "ProgressTrackerLabelContent";
//#endregion
export { ProgressTracker, ProgressTrackerItem, ProgressTrackerLabelContent };
