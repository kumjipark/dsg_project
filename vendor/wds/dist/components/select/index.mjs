'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { ListCellContent } from "../list/index.mjs";
import { ChipProvider } from "../chip/contexts.mjs";
import { VirtualValueInput } from "../virtual-input/index.mjs";
import { invalidIconWrapperStyle } from "../text-field/style.mjs";
import { TextFieldContent } from "../text-field/index.mjs";
import { Menu, MenuContent, MenuGroup, MenuItem, MenuList, MenuTrigger } from "../menu/index.mjs";
import { selectIconStyle, selectStyle, selectTextStyle } from "./style.mjs";
import { convertChildrenToData } from "./helpers.mjs";
import { OPTION_CONTENT_NAME, OPTION_GROUP_NAME, OPTION_NAME, SELECT_CONTENT_NAME, SELECT_NAME } from "./constants.mjs";
import { SelectProvider, useSelectContext } from "./context.mjs";
import { forwardRef, memo, useEffect, useMemo, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconChevronDownThickSmall, IconChevronUpThickSmall, IconCircleExclamationFill } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { useSize } from "@radix-ui/react-use-size";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
//#region src/components/select/index.tsx
const Select = forwardRef(({ value: valueProp, defaultValue = "", onChange, defaultOpen, open: openProp, onOpenChange, width, height, invalid, disabled, render, placeholder, leadingContent, enableMenuActionArea = false, menuValue: menuValueProp, onMenuValueChange, xs, sm, md, lg, xl, contentProps, children, ...props }, forwardedRef) => {
	const [node, setNode] = useState(null);
	const { width: contentWidth } = useSize(node) || {};
	const composedRefs = useComposedRefs(forwardedRef, setNode);
	const [menuValue, setMenuValue] = useControllableState({
		prop: menuValueProp,
		defaultProp: defaultValue,
		onChange: onMenuValueChange
	});
	const [value, setValue] = useControllableState({
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
	const shouldShowPlaceholder = useMemo(() => typeof value === "string" ? value.length === 0 : !Boolean(value) && value !== 0, [value]);
	const label = useMemo(() => {
		return convertChildrenToData(children).find((v) => v.value === value)?.label ?? "";
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
		children: [isFormControl && /* @__PURE__ */ jsx(VirtualValueInput, {
			name: props.name,
			value,
			"aria-invalid": invalid,
			disabled,
			tabIndex: -1
		}), /* @__PURE__ */ jsxs(Menu, {
			value: enableMenuActionArea ? menuValue : value,
			onValueChange: useCallbackRef((v) => {
				if (Array.isArray(v) && process.env.NODE_ENV !== "production") throw new Error("Select 값에 오류가 발생했습니다. checkbox를 사용하였거나 value가 string 형식이 아닌지 확인해주세요.");
				if (enableMenuActionArea) setMenuValue(v);
				else setValue(v);
			}),
			open,
			onOpenChange: setOpenState,
			children: [/* @__PURE__ */ jsx(MenuTrigger, { children: /* @__PURE__ */ jsxs(FlexBox, {
				ref: composedRefs,
				gap: "8px",
				alignItems: "center",
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
						"data-role": "select-render-wrapper",
						sx: {
							padding: "0px 4px",
							overflow: "hidden"
						},
						children: shouldShowPlaceholder ? /* @__PURE__ */ jsx(Typography, {
							"data-role": "select-placeholder",
							noWrap: true,
							variant: "body1",
							weight: "regular",
							sx: selectTextStyle,
							children: placeholder
						}) : /* @__PURE__ */ jsx(Typography, {
							"data-role": "select-values",
							noWrap: true,
							variant: "body1",
							weight: "regular",
							sx: selectTextStyle,
							children: label
						})
					}),
					typeof render === "function" && !shouldShowPlaceholder && /* @__PURE__ */ jsx(ChipProvider, {
						solid: "semantic.label.alternative",
						children: /* @__PURE__ */ jsx(FlexBox, {
							flex: "1",
							gap: "4px",
							flexWrap: "wrap",
							"data-role": "select-render-wrapper",
							children: render(label, value)
						})
					}),
					invalid && /* @__PURE__ */ jsx(SelectContent, {
						"data-role": "select-invalid",
						variant: "icon",
						sx: invalidIconWrapperStyle,
						children: /* @__PURE__ */ jsx(IconCircleExclamationFill, {})
					}),
					open ? /* @__PURE__ */ jsx(IconChevronUpThickSmall, { sx: selectIconStyle({ disabled }) }) : /* @__PURE__ */ jsx(IconChevronDownThickSmall, { sx: selectIconStyle({ disabled }) })
				]
			}) }), /* @__PURE__ */ jsx(MenuContent, {
				offset: 8,
				position: "bottom-center",
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
Select.displayName = SELECT_NAME;
const OptionGroup = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(MenuGroup, {
		ref,
		...props
	});
});
OptionGroup.displayName = OPTION_GROUP_NAME;
OptionGroup.isOptionGroup = true;
const Option = memo(forwardRef(({ variant = "normal", children, as, ...props }, ref) => {
	const { onOpenChange, enableMenuActionArea, value, isMultiple } = useSelectContext(OPTION_NAME);
	const selected = Array.isArray(value) ? value.includes(props.value) : value === props.value;
	return /* @__PURE__ */ jsx(MenuItem, {
		ref,
		role: "option",
		variant,
		as: as || "li",
		"aria-checked": void 0,
		"aria-selected": selected,
		...props,
		onClick: composeEventHandlers(props.onClick, () => {
			if (enableMenuActionArea === false && !isMultiple) onOpenChange(false);
		}),
		children
	});
}));
Option.displayName = OPTION_NAME;
Option.isOption = true;
const SelectContent = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(TextFieldContent, {
		ref,
		...props
	});
});
SelectContent.displayName = SELECT_CONTENT_NAME;
const OptionContent = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(ListCellContent, {
		ref,
		...props
	});
});
OptionContent.displayName = OPTION_CONTENT_NAME;
//#endregion
export { Option, OptionContent, OptionGroup, Select, SelectContent };
