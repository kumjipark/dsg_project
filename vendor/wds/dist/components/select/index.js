'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_list_index = require("../list/index.js");
const require_components_chip_contexts = require("../chip/contexts.js");
const require_components_virtual_input_index = require("../virtual-input/index.js");
const require_components_text_field_style = require("../text-field/style.js");
const require_components_text_field_index = require("../text-field/index.js");
const require_components_menu_index = require("../menu/index.js");
const require_components_select_style = require("./style.js");
const require_components_select_helpers = require("./helpers.js");
const require_components_select_constants = require("./constants.js");
const require_components_select_context = require("./context.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_use_size = require("@radix-ui/react-use-size");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_use_callback_ref = require("@radix-ui/react-use-callback-ref");
//#region src/components/select/index.tsx
const Select = (0, react.forwardRef)(({ value: valueProp, defaultValue = "", onChange, defaultOpen, open: openProp, onOpenChange, width, height, invalid, disabled, render, placeholder, leadingContent, enableMenuActionArea = false, menuValue: menuValueProp, onMenuValueChange, xs, sm, md, lg, xl, contentProps, children, ...props }, forwardedRef) => {
	const [node, setNode] = (0, react.useState)(null);
	const { width: contentWidth } = (0, _radix_ui_react_use_size.useSize)(node) || {};
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, setNode);
	const [menuValue, setMenuValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: menuValueProp,
		defaultProp: defaultValue,
		onChange: onMenuValueChange
	});
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: valueProp,
		defaultProp: defaultValue,
		onChange: (v) => {
			setMenuValue(v);
			onChange?.(v);
		}
	});
	const [openState, setOpenState] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: (v) => {
			setMenuValue(value);
			onOpenChange?.(v);
		}
	});
	const open = openState && !disabled;
	const shouldShowPlaceholder = (0, react.useMemo)(() => typeof value === "string" ? value.length === 0 : !Boolean(value) && value !== 0, [value]);
	const label = (0, react.useMemo)(() => {
		return require_components_select_helpers.convertChildrenToData(children).find((v) => v.value === value)?.label ?? "";
	}, [value, children]);
	const isFormControl = node ? Boolean(node.closest("form")) : true;
	const initialValueStateRef = (0, react.useRef)(value);
	(0, react.useEffect)(() => {
		const form = node?.closest("form");
		if (form) {
			const reset = () => setValue(initialValueStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [node, setValue]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_select_context.SelectProvider, {
		onOpenChange: setOpenState,
		enableMenuActionArea,
		value,
		children: [isFormControl && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_virtual_input_index.VirtualValueInput, {
			name: props.name,
			value,
			"aria-invalid": invalid,
			disabled,
			tabIndex: -1
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_menu_index.Menu, {
			value: enableMenuActionArea ? menuValue : value,
			onValueChange: (0, _radix_ui_react_use_callback_ref.useCallbackRef)((v) => {
				if (Array.isArray(v) && process.env.NODE_ENV !== "production") throw new Error("Select 값에 오류가 발생했습니다. checkbox를 사용하였거나 value가 string 형식이 아닌지 확인해주세요.");
				if (enableMenuActionArea) setMenuValue(v);
				else setValue(v);
			}),
			open,
			onOpenChange: setOpenState,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuTrigger, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				ref: composedRefs,
				gap: "8px",
				alignItems: "center",
				"aria-invalid": invalid,
				"aria-disabled": disabled,
				tabIndex: disabled ? -1 : 0,
				role: "combobox",
				"data-placeholder": shouldShowPlaceholder,
				...props,
				onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, (e) => {
					if ((e.key === "Enter" || e.key === " ") && e.target === node) {
						e.preventDefault();
						e.currentTarget.click();
					}
				}),
				sx: [require_components_select_style.selectStyle({
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
					(typeof render === "undefined" || shouldShowPlaceholder) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						flex: "1",
						gap: "4px",
						"data-role": "select-render-wrapper",
						sx: {
							padding: "0px 4px",
							overflow: "hidden"
						},
						children: shouldShowPlaceholder ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
							"data-role": "select-placeholder",
							noWrap: true,
							variant: "body1",
							weight: "regular",
							sx: require_components_select_style.selectTextStyle,
							children: placeholder
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
							"data-role": "select-values",
							noWrap: true,
							variant: "body1",
							weight: "regular",
							sx: require_components_select_style.selectTextStyle,
							children: label
						})
					}),
					typeof render === "function" && !shouldShowPlaceholder && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_chip_contexts.ChipProvider, {
						solid: "semantic.label.alternative",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
							flex: "1",
							gap: "4px",
							flexWrap: "wrap",
							"data-role": "select-render-wrapper",
							children: render(label, value)
						})
					}),
					invalid && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectContent, {
						"data-role": "select-invalid",
						variant: "icon",
						sx: require_components_text_field_style.invalidIconWrapperStyle,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleExclamationFill, {})
					}),
					open ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronUpThickSmall, { sx: require_components_select_style.selectIconStyle({ disabled }) }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronDownThickSmall, { sx: require_components_select_style.selectIconStyle({ disabled }) })
				]
			}) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuContent, {
				offset: 8,
				position: "bottom-center",
				...contentProps,
				sx: [{
					width: contentWidth ?? "320px",
					minWidth: "140px"
				}, contentProps?.sx],
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuList, {
					role: "listbox",
					sx: enableMenuActionArea ? { paddingBottom: "0px" } : void 0,
					children
				})
			})]
		})]
	});
});
Select.displayName = require_components_select_constants.SELECT_NAME;
const OptionGroup = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuGroup, {
		ref,
		...props
	});
});
OptionGroup.displayName = require_components_select_constants.OPTION_GROUP_NAME;
OptionGroup.isOptionGroup = true;
const Option = (0, react.memo)((0, react.forwardRef)(({ variant = "normal", children, as, ...props }, ref) => {
	const { onOpenChange, enableMenuActionArea, value, isMultiple } = require_components_select_context.useSelectContext(require_components_select_constants.OPTION_NAME);
	const selected = Array.isArray(value) ? value.includes(props.value) : value === props.value;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuItem, {
		ref,
		role: "option",
		variant,
		as: as || "li",
		"aria-checked": void 0,
		"aria-selected": selected,
		...props,
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
			if (enableMenuActionArea === false && !isMultiple) onOpenChange(false);
		}),
		children
	});
}));
Option.displayName = require_components_select_constants.OPTION_NAME;
Option.isOption = true;
const SelectContent = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_field_index.TextFieldContent, {
		ref,
		...props
	});
});
SelectContent.displayName = require_components_select_constants.SELECT_CONTENT_NAME;
const OptionContent = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCellContent, {
		ref,
		...props
	});
});
OptionContent.displayName = require_components_select_constants.OPTION_CONTENT_NAME;
//#endregion
exports.Option = Option;
exports.OptionContent = OptionContent;
exports.OptionGroup = OptionGroup;
exports.Select = Select;
exports.SelectContent = SelectContent;
