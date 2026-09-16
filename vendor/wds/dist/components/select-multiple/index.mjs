'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { ellipsisTypographyStyle } from "../../utils/typography.mjs";
import { Typography } from "../typography/index.mjs";
import { ChipProvider } from "../chip/contexts.mjs";
import useResizeObserver from "../../hooks/internal/use-resize-observer.mjs";
import { VirtualValueInput } from "../virtual-input/index.mjs";
import { Menu, MenuContent, MenuList, MenuTrigger } from "../menu/index.mjs";
import { invalidIconWrapperStyle, selectIconStyle, selectStyle } from "../select/style.mjs";
import { convertChildrenToData } from "../select/helpers.mjs";
import { SelectProvider } from "../select/context.mjs";
import { SelectContent } from "../select/index.mjs";
import { customSelectMultipleRenderWrapperStyle } from "./style.mjs";
import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconChevronDownThickSmall, IconChevronUpThickSmall, IconCircleExclamationFill } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { useSize } from "@radix-ui/react-use-size";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
//#region src/components/select-multiple/index.tsx
const SelectMultiple = forwardRef(({ invalid, disabled, defaultValue = [], value: valueProp, onChange, placeholder, children, open: openProp, defaultOpen, onOpenChange, allSelectedLabel, leadingContent, render, width, height, enableMenuActionArea, overflow = false, menuValue: menuValueProp, onMenuValueChange, contentProps, xs, sm, md, lg, xl, ...props }, forwardedRef) => {
	const [node, setNode] = useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setNode);
	const [renderWrapperNode, setRenderWrapperNode] = useState(null);
	const { width: contentWidth } = useSize(node) || {};
	const [isScrollableLeft, setIsScrollableLeft] = useState(false);
	const [isScrollableRight, setIsScrollableRight] = useState(false);
	const [menuValue = [], setMenuValue] = useControllableState({
		prop: menuValueProp,
		defaultProp: defaultValue,
		onChange: onMenuValueChange
	});
	const [value = [], setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue,
		onChange: (v) => {
			setMenuValue(v);
			onChange?.(v);
		}
	});
	const [openState, setOpenState] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: (v) => {
			setMenuValue(value);
			onOpenChange?.(v);
		}
	});
	const open = openState && !disabled;
	const handleOnScroll = useCallback((e) => {
		const { scrollLeft, scrollWidth, clientWidth } = e.target;
		setIsScrollableLeft(scrollLeft > 0);
		if (scrollWidth - scrollLeft <= clientWidth + 1) setIsScrollableRight(false);
		else if (scrollWidth !== clientWidth) setIsScrollableRight(true);
	}, [setIsScrollableLeft, setIsScrollableRight]);
	useResizeObserver(renderWrapperNode, useCallback(() => {
		const target = renderWrapperNode;
		if (!target) return;
		const { scrollLeft, scrollWidth, clientWidth } = target;
		setIsScrollableLeft(scrollLeft > 0);
		if (scrollWidth - scrollLeft <= clientWidth + 1) setIsScrollableRight(false);
		else if (scrollWidth !== clientWidth) setIsScrollableRight(true);
	}, [
		renderWrapperNode,
		setIsScrollableLeft,
		setIsScrollableRight
	]));
	const shouldShowPlaceholder = useMemo(() => Array.isArray(value) || typeof value === "string" ? value.length === 0 : !Boolean(value) && value !== 0, [value]);
	const optionList = useMemo(() => {
		return convertChildrenToData(children);
	}, [children]);
	const shouldShowAllSelectedLabel = (Array.isArray(value) || typeof value === "string") && optionList.length === value.length && Boolean(allSelectedLabel);
	const label = useMemo(() => {
		return convertChildrenToData(children).filter((v) => value?.includes(v.value)).map(({ label: labelValue }) => labelValue);
	}, [value, children]);
	const isFormControl = node ? Boolean(node.closest("form")) : true;
	const initialValueStateRef = useRef(value);
	useEffect(() => {
		const form = node?.closest("form");
		if (form) {
			const reset = () => setValue(initialValueStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [node, setValue]);
	return /* @__PURE__ */ jsxs(SelectProvider, {
		onOpenChange: setOpenState,
		enableMenuActionArea,
		value,
		isMultiple: true,
		children: [isFormControl && /* @__PURE__ */ jsx(VirtualValueInput, {
			name: props.name,
			value: Array.isArray(value) ? value.join(",") : value ?? "",
			"aria-invalid": invalid,
			disabled,
			tabIndex: -1
		}), /* @__PURE__ */ jsxs(Menu, {
			value: enableMenuActionArea ? menuValue : value,
			onValueChange: useCallbackRef((v) => {
				if (!Array.isArray(v) && process.env.NODE_ENV !== "production") throw new Error("SelectMultiple 값에 오류가 발생했습니다. radio를 사용하였거나 value가 Array 형식이 아닌지 확인해주세요.");
				if (enableMenuActionArea) setMenuValue(v);
				else setValue(v);
			}),
			open,
			onOpenChange: setOpenState,
			children: [/* @__PURE__ */ jsx(MenuTrigger, { children: /* @__PURE__ */ jsxs(FlexBox, {
				ref: composedRefs,
				gap: "8px",
				alignItems: "flex-start",
				"aria-invalid": invalid,
				"aria-disabled": disabled,
				tabIndex: disabled ? -1 : 0,
				role: "combobox",
				"data-placeholder": shouldShowPlaceholder,
				...props,
				onKeyDown: composeEventHandlers(props.onKeyDown, (e) => {
					if ((e.key === "Enter" || e.key === " ") && e.target === node) {
						e.preventDefault();
						e.currentTarget.click();
					}
				}),
				sx: [selectStyle({
					disabled,
					invalid,
					width,
					height,
					overflow,
					xs,
					sm,
					md,
					lg,
					xl,
					...props
				}), props.sx],
				children: [
					Boolean(leadingContent) && leadingContent,
					(typeof render === "undefined" || shouldShowPlaceholder) && /* @__PURE__ */ jsx(FlexBox, {
						flex: "1",
						gap: "4px",
						"data-role": "select-multiple-render-wrapper",
						sx: {
							padding: "0px 4px",
							overflow: "hidden"
						},
						children: shouldShowPlaceholder ? /* @__PURE__ */ jsx(Typography, {
							"data-role": "select-multiple-placeholder",
							noWrap: true,
							variant: "body1",
							weight: "regular",
							sx: ellipsisTypographyStyle(1),
							children: placeholder
						}) : /* @__PURE__ */ jsx(Typography, {
							"data-role": "select-multiple-values",
							variant: "body1",
							weight: "regular",
							...overflow === false && {
								noWrap: true,
								sx: ellipsisTypographyStyle(1)
							},
							children: shouldShowAllSelectedLabel ? allSelectedLabel : label.join(", ")
						})
					}),
					typeof render === "function" && !shouldShowPlaceholder && /* @__PURE__ */ jsx(FlexBox, {
						flex: "1",
						"data-role": "select-multiple-render-wrapper",
						sx: customSelectMultipleRenderWrapperStyle({
							overflow,
							isScrollableLeft,
							isScrollableRight
						}),
						children: /* @__PURE__ */ jsx(ChipProvider, {
							solid: "semantic.label.alternative",
							children: /* @__PURE__ */ jsx(FlexBox, {
								ref: setRenderWrapperNode,
								gap: "4px",
								flexWrap: overflow ? "wrap" : "nowrap",
								onScrollCapture: handleOnScroll,
								children: shouldShowAllSelectedLabel ? allSelectedLabel : render(label, value)
							})
						})
					}),
					invalid && /* @__PURE__ */ jsx(SelectContent, {
						"data-role": "select-multiple-invalid",
						variant: "icon",
						sx: invalidIconWrapperStyle,
						children: /* @__PURE__ */ jsx(IconCircleExclamationFill, {})
					}),
					open ? /* @__PURE__ */ jsx(IconChevronUpThickSmall, { sx: selectIconStyle({ disabled }) }) : /* @__PURE__ */ jsx(IconChevronDownThickSmall, { sx: selectIconStyle({ disabled }) })
				]
			}) }), /* @__PURE__ */ jsx(MenuContent, {
				offset: 8,
				...contentProps,
				sx: [{
					width: contentWidth ?? "320px",
					minWidth: "140px"
				}, contentProps?.sx],
				children: /* @__PURE__ */ jsx(MenuList, {
					role: "listbox",
					sx: enableMenuActionArea ? { paddingBottom: "0px" } : void 0,
					children
				})
			})]
		})]
	});
});
SelectMultiple.displayName = "SelectMultiple";
//#endregion
export { SelectMultiple };
