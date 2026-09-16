'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_hooks_internal_use_resize_observer = require("../../hooks/internal/use-resize-observer.js");
const require_components_virtual_input_index = require("../virtual-input/index.js");
const require_utils_internal_animation = require("../../utils/internal/animation.js");
const require_components_segmented_control_style = require("./style.js");
const require_components_segmented_control_constants = require("./constants.js");
const require_components_segmented_control_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_use_previous = require("@radix-ui/react-use-previous");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_roving_focus = require("@radix-ui/react-roving-focus");
_radix_ui_react_roving_focus = require_runtime.__toESM(_radix_ui_react_roving_focus);
//#region src/components/segmented-control/index.tsx
const ARROW_KEYS = ["ArrowLeft", "ArrowRight"];
const SegmentedControl = (0, react.forwardRef)(({ defaultValue, value: valueProp, onValueChange, children, variant = "solid", size = "medium", name, xs, sm, md, lg, xl, ...props }, ref) => {
	const [node, setNode] = (0, react.useState)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, setNode);
	const motionThumbRef = (0, react.useRef)(null);
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const prevValue = (0, _radix_ui_react_use_previous.usePrevious)(value);
	const isValueChanged = prevValue !== value;
	const [motionStyleProperties, setMotionStyleProperties] = (0, react.useState)({});
	require_hooks_internal_use_resize_observer.default(node, (0, react.useCallback)(() => {
		const parentElement = node;
		const targetElement = motionThumbRef.current;
		const currentElement = parentElement?.querySelector(`[wds-component="segmented-control-item"][data-value="${prevValue}"]`);
		const nextElement = parentElement?.querySelector(`[wds-component="segmented-control-item"][data-value="${value}"]`);
		if (variant === "outlined") {
			setMotionStyleProperties((prev) => ({
				...prev,
				display: "none"
			}));
			currentElement?.removeAttribute("data-ssr-motion");
			return;
		}
		if (!parentElement || !targetElement || !nextElement) {
			setMotionStyleProperties((prev) => ({
				...prev,
				display: "none"
			}));
			return;
		}
		setMotionStyleProperties({
			...require_utils_internal_animation.calculateAnimationStyle(nextElement, parentElement),
			...isValueChanged ? {
				transitionProperty: "inset",
				transitionDuration: "500ms",
				transitionTimingFunction: "cubic-bezier(0.25, 1.25, 0.4, 0.99)"
			} : {}
		});
		nextElement.removeAttribute("data-ssr-motion");
		requestAnimationFrame(() => {
			currentElement?.removeAttribute("data-ssr-motion");
		});
	}, [
		node,
		variant,
		value,
		isValueChanged,
		prevValue
	]));
	const initialValueStateRef = (0, react.useRef)(value);
	(0, react.useEffect)(() => {
		const form = node?.closest("form");
		if (form) {
			const reset = () => setValue(initialValueStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [node, setValue]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_segmented_control_contexts.SegmentedControlProvider, {
		value,
		onValueChange: setValue,
		variant,
		size,
		name,
		responsive: {
			xs,
			sm,
			md,
			lg,
			xl
		},
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.Root, {
			asChild: true,
			orientation: "horizontal",
			loop: true,
			dir: "ltr",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				ref: composedRefs,
				alignItems: "stretch",
				role: "radiogroup",
				...props,
				"wds-component": "segmented-control",
				sx: [require_components_segmented_control_style.segmentedControlStyle({
					variant,
					size,
					xs,
					sm,
					md,
					lg,
					xl
				}), props.sx],
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
					ref: motionThumbRef,
					sx: require_components_segmented_control_style.motionThumbStyle,
					style: motionStyleProperties,
					"data-role": "segmented-control-motion"
				}), children]
			})
		})
	});
});
SegmentedControl.displayName = require_components_segmented_control_constants.SEGMENTED_CONTROL_NAME;
const SegmentedControlItem = (0, react.forwardRef)(({ children, value, disabled, leadingContent, trailingContent, as, ...props }, forwardedRef) => {
	const id = (0, react.useId)();
	const [node, setNode] = (0, react.useState)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, setNode);
	const { size, variant, responsive, name, ...context } = require_components_segmented_control_contexts.useSegmentedControlContext(require_components_segmented_control_constants.SEGMENTED_CONTROL_ITEM_NAME);
	const active = context.value === value;
	const isArrowKeyPressedRef = (0, react.useRef)(false);
	const isFormControl = node ? Boolean(node.closest("form")) : true;
	(0, react.useEffect)(() => {
		const handleKeyDown = (event) => {
			if (ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
		};
		const handleKeyUp = () => isArrowKeyPressedRef.current = false;
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.Item, {
		asChild: true,
		focusable: !disabled,
		active,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			as: as || "label",
			ref: composedRefs,
			flex: "1 1 0",
			alignItems: "center",
			justifyContent: "center",
			gap: "4px",
			"data-value": value,
			role: "radio",
			"aria-disabled": disabled,
			"aria-checked": active,
			"aria-labelledby": id,
			...props,
			disabled,
			"wds-component": "segmented-control-item",
			"data-active": active,
			"data-ssr-motion": active,
			sx: [require_components_segmented_control_style.segmentedControlItemStyle({
				size,
				active,
				variant,
				disabled,
				...responsive
			}), props.sx],
			onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, (event) => {
				if (disabled) return;
				if (event.key === "Enter") event.preventDefault();
			}),
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
				if (disabled) return;
				context.onValueChange(value);
			}),
			onFocus: (0, _radix_ui_primitive.composeEventHandlers)(props.onFocus, (e) => {
				if (disabled) return;
				if (isArrowKeyPressedRef.current) e.currentTarget.click();
			}),
			children: [
				leadingContent,
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					"data-role": "segmented-control-item-text",
					"aria-selected": active,
					"aria-disabled": disabled,
					id,
					children: [isFormControl && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_virtual_input_index.VirtualCheckboxInput, {
						type: "radio",
						name,
						value,
						checked: active,
						disabled
					}), children]
				}),
				trailingContent
			]
		})
	});
});
SegmentedControlItem.displayName = require_components_segmented_control_constants.SEGMENTED_CONTROL_ITEM_NAME;
//#endregion
exports.SegmentedControl = SegmentedControl;
exports.SegmentedControlItem = SegmentedControlItem;
