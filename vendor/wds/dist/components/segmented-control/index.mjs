'use client';
import { FlexBox } from "../flex-box/index.mjs";
import useResizeObserver from "../../hooks/internal/use-resize-observer.mjs";
import { VirtualCheckboxInput } from "../virtual-input/index.mjs";
import { calculateAnimationStyle } from "../../utils/internal/animation.mjs";
import { motionThumbStyle, segmentedControlItemStyle, segmentedControlStyle } from "./style.mjs";
import { SEGMENTED_CONTROL_ITEM_NAME, SEGMENTED_CONTROL_NAME } from "./constants.mjs";
import { SegmentedControlProvider, useSegmentedControlContext } from "./contexts.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useCallback, useEffect, useId, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { usePrevious } from "@radix-ui/react-use-previous";
import { jsx, jsxs } from "react/jsx-runtime";
import * as RovingFocusGroup$1 from "@radix-ui/react-roving-focus";
//#region src/components/segmented-control/index.tsx
const ARROW_KEYS = ["ArrowLeft", "ArrowRight"];
const SegmentedControl = forwardRef(({ defaultValue, value: valueProp, onValueChange, children, variant = "solid", size = "medium", name, xs, sm, md, lg, xl, ...props }, ref) => {
	const [node, setNode] = useState(null);
	const composedRefs = useComposedRefs(ref, setNode);
	const motionThumbRef = useRef(null);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const prevValue = usePrevious(value);
	const isValueChanged = prevValue !== value;
	const [motionStyleProperties, setMotionStyleProperties] = useState({});
	useResizeObserver(node, useCallback(() => {
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
			...calculateAnimationStyle(nextElement, parentElement),
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
	const initialValueStateRef = useRef(value);
	useEffect(() => {
		const form = node?.closest("form");
		if (form) {
			const reset = () => setValue(initialValueStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [node, setValue]);
	return /* @__PURE__ */ jsx(SegmentedControlProvider, {
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
		children: /* @__PURE__ */ jsx(RovingFocusGroup$1.Root, {
			asChild: true,
			orientation: "horizontal",
			loop: true,
			dir: "ltr",
			children: /* @__PURE__ */ jsxs(FlexBox, {
				ref: composedRefs,
				alignItems: "stretch",
				role: "radiogroup",
				...props,
				"wds-component": "segmented-control",
				sx: [segmentedControlStyle({
					variant,
					size,
					xs,
					sm,
					md,
					lg,
					xl
				}), props.sx],
				children: [/* @__PURE__ */ jsx(Box, {
					ref: motionThumbRef,
					sx: motionThumbStyle,
					style: motionStyleProperties,
					"data-role": "segmented-control-motion"
				}), children]
			})
		})
	});
});
SegmentedControl.displayName = SEGMENTED_CONTROL_NAME;
const SegmentedControlItem = forwardRef(({ children, value, disabled, leadingContent, trailingContent, as, ...props }, forwardedRef) => {
	const id = useId();
	const [node, setNode] = useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setNode);
	const { size, variant, responsive, name, ...context } = useSegmentedControlContext(SEGMENTED_CONTROL_ITEM_NAME);
	const active = context.value === value;
	const isArrowKeyPressedRef = useRef(false);
	const isFormControl = node ? Boolean(node.closest("form")) : true;
	useEffect(() => {
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
	return /* @__PURE__ */ jsx(RovingFocusGroup$1.Item, {
		asChild: true,
		focusable: !disabled,
		active,
		children: /* @__PURE__ */ jsxs(FlexBox, {
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
			sx: [segmentedControlItemStyle({
				size,
				active,
				variant,
				disabled,
				...responsive
			}), props.sx],
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (disabled) return;
				if (event.key === "Enter") event.preventDefault();
			}),
			onClick: composeEventHandlers(props.onClick, () => {
				if (disabled) return;
				context.onValueChange(value);
			}),
			onFocus: composeEventHandlers(props.onFocus, (e) => {
				if (disabled) return;
				if (isArrowKeyPressedRef.current) e.currentTarget.click();
			}),
			children: [
				leadingContent,
				/* @__PURE__ */ jsxs("span", {
					"data-role": "segmented-control-item-text",
					"aria-selected": active,
					"aria-disabled": disabled,
					id,
					children: [isFormControl && /* @__PURE__ */ jsx(VirtualCheckboxInput, {
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
SegmentedControlItem.displayName = SEGMENTED_CONTROL_ITEM_NAME;
//#endregion
export { SegmentedControl, SegmentedControlItem };
