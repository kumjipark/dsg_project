'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_utils_internal_children = require("../../utils/internal/children.js");
const require_components_progress_tracker_style = require("./style.js");
const require_components_progress_tracker_constants = require("./constants.js");
const require_components_progress_tracker_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/progress-tracker/index.tsx
const ProgressTracker = (0, react.forwardRef)(({ direction = "horizontal", value: originValue, defaultValue, onValueChange, children, ...props }, ref) => {
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originValue,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const steps = (0, react.useMemo)(() => {
		return require_utils_internal_children.findComponentInChildren(children, "isProgressTrackerItem");
	}, [children]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_progress_tracker_contexts.ProgressTrackerProvider, {
		direction,
		value,
		onValueChange: setValue,
		steps,
		getTotalLength: (0, react.useCallback)(() => steps.length, [steps]),
		getStepIndex: (0, react.useCallback)((step) => steps.findIndex((cur) => cur.value === step), [steps]),
		getActiveStepIndex: (0, react.useCallback)(() => steps.findIndex((cur) => cur.value === value), [steps, value]),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "progress-tracker",
			"aria-label": "progress",
			as: "ol",
			ref,
			...props,
			sx: [require_components_progress_tracker_style.progressTrackerWrapperStyle({ direction }), props.sx],
			children
		})
	});
});
ProgressTracker.displayName = require_components_progress_tracker_constants.PROGRESS_TRACKER_NAME;
const ProgressTrackerItem = (0, react.forwardRef)(({ labelContent, ...props }, ref) => {
	const { direction } = require_components_progress_tracker_contexts.useProgressTrackerContext(require_components_progress_tracker_constants.PROGRESS_TRACKER_ITEM_NAME);
	if (direction === "vertical") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProgressTrackerItemVertical, {
		labelContent,
		...props,
		ref
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProgressTrackerItemHorizontal, {
		...props,
		ref
	});
});
ProgressTrackerItem.displayName = require_components_progress_tracker_constants.PROGRESS_TRACKER_ITEM_NAME;
ProgressTrackerItem.isProgressTrackerItem = true;
const ProgressTrackerItemVertical = (0, react.forwardRef)(({ value, label, completedLabel, children, labelContent, ...props }, ref) => {
	const { value: contextValue, getStepIndex, getActiveStepIndex, getTotalLength } = require_components_progress_tracker_contexts.useProgressTrackerContext(require_components_progress_tracker_constants.PROGRESS_TRACKER_ITEM_NAME);
	const isActive = contextValue === value;
	const index = getStepIndex(value);
	const isCompleted = getActiveStepIndex() > index;
	const isLast = index === getTotalLength() - 1;
	const number = (index === -1 ? 0 : index) + 1;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		as: "li",
		ref,
		"wds-component": "progress-tracker-item",
		"aria-current": isActive ? "step" : void 0,
		"aria-label": `Step ${index}`,
		gap: "20px",
		"data-completed": isCompleted,
		"data-active": isActive,
		...props,
		sx: [require_components_progress_tracker_style.progressTrackerItemVerticalStyle, props.sx],
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			"data-role": "progress-tracker-item-step-wrapper",
			flex: "1",
			gap: "8px",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				"data-role": "progress-tracker-item-icon-wrapper",
				flexDirection: "column",
				alignItems: "center",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					"data-role": "progress-tracker-item-stepper",
					sx: require_components_progress_tracker_style.progressCircleStyle(isActive, isCompleted),
					alignItems: "center",
					justifyContent: "center",
					children: isCompleted ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCheckThick, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
						variant: "caption1",
						weight: "bold",
						align: "center",
						"data-role": "progress-tracker-item-step",
						children: number
					})
				}), !isLast && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
					"data-role": "progress-tracker-item-divider",
					sx: require_components_progress_tracker_style.progressTrackerItemDividerStyle(isCompleted, "vertical")
				})]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				flexDirection: "column",
				flex: "1",
				children: [(Boolean(label) || Boolean(completedLabel) || Boolean(labelContent)) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
					"data-role": "progress-tracker-item-label-wrapper",
					sx: require_components_progress_tracker_style.progressTrackerItemVerticalLabelWrapperStyle,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProgressTrackerItemLabel, {
						isCompleted,
						isActive,
						label,
						completedLabel
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						"data-role": "progress-tracker-item-label-content-wrapper",
						flex: "1",
						children: labelContent
					})]
				}), Boolean(children) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					"data-role": "progress-tracker-item-content",
					sx: require_components_progress_tracker_style.progressTrackerItemContentStyle,
					children
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
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
const ProgressTrackerItemHorizontal = (0, react.forwardRef)(({ value, label, completedLabel, ...props }, ref) => {
	const { value: contextValue, getStepIndex, getActiveStepIndex, getTotalLength } = require_components_progress_tracker_contexts.useProgressTrackerContext(require_components_progress_tracker_constants.PROGRESS_TRACKER_ITEM_NAME);
	const isActive = contextValue === value;
	const index = getStepIndex(value);
	const isCompleted = getActiveStepIndex() > index;
	const isFirst = index === 0;
	const isLast = index === getTotalLength() - 1;
	const number = (index === -1 ? 0 : index) + 1;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
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
		sx: [require_components_progress_tracker_style.progressTrackerItemHorizontalStyle, props.sx],
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			"data-role": "progress-tracker-item-wrapper",
			flexDirection: "row",
			alignItems: "center",
			sx: require_components_progress_tracker_style.progressTrackerItemHorizontalWrapperStyle,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
					"data-role": "progress-tracker-item-divider",
					sx: [require_components_progress_tracker_style.progressTrackerItemDividerStyle(isActive || isCompleted, "horizontal"), isFirst && { backgroundColor: "transparent" }]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					flexDirection: "column",
					alignItems: "center",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						sx: require_components_progress_tracker_style.progressCircleStyle(isActive, isCompleted),
						alignItems: "center",
						justifyContent: "center",
						children: isCompleted ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCheckThick, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
							variant: "caption1",
							weight: "bold",
							align: "center",
							"data-role": "progress-tracker-item-step",
							children: number
						})
					})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
					"data-role": "progress-tracker-item-divider",
					sx: [require_components_progress_tracker_style.progressTrackerItemDividerStyle(isCompleted, "horizontal"), isLast && { backgroundColor: "transparent" }]
				})
			]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProgressTrackerItemLabel, {
			isCompleted,
			isActive,
			label,
			completedLabel
		})]
	});
});
const ProgressTrackerItemLabel = ({ isCompleted, isActive, label, completedLabel }) => {
	if (isCompleted) return Boolean(completedLabel) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
	return Boolean(label) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
const ProgressTrackerLabelContent = (0, react.forwardRef)(({ variant = "custom", ...props }, ref) => {
	switch (variant) {
		case "badge": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "progress-tracker-label-content",
			ref,
			alignItems: "center",
			gap: "4px",
			...props,
			sx: [{ height: 20 }, props.sx]
		});
		case "caption": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
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
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
				variant: "caption1",
				weight: "regular",
				color: "semantic.label.alternative",
				children: props.children
			})
		});
		case "custom": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
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
exports.ProgressTracker = ProgressTracker;
exports.ProgressTrackerItem = ProgressTrackerItem;
exports.ProgressTrackerLabelContent = ProgressTrackerLabelContent;
