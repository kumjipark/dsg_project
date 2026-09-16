'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_utils_typography = require("../../utils/typography.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_chip_contexts = require("../chip/contexts.js");
const require_hooks_internal_use_resize_observer = require("../../hooks/internal/use-resize-observer.js");
const require_components_virtual_input_index = require("../virtual-input/index.js");
const require_components_menu_index = require("../menu/index.js");
const require_components_select_style = require("../select/style.js");
const require_components_select_helpers = require("../select/helpers.js");
const require_components_select_context = require("../select/context.js");
const require_components_select_index = require("../select/index.js");
const require_components_select_multiple_style = require("./style.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_use_size = require("@radix-ui/react-use-size");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_use_callback_ref = require("@radix-ui/react-use-callback-ref");
//#region src/components/select-multiple/index.tsx
const SelectMultiple = (0, react.forwardRef)(({ invalid, disabled, defaultValue = [], value: valueProp, onChange, placeholder, children, open: openProp, defaultOpen, onOpenChange, allSelectedLabel, leadingContent, render, width, height, enableMenuActionArea, overflow = false, menuValue: menuValueProp, onMenuValueChange, contentProps, xs, sm, md, lg, xl, ...props }, forwardedRef) => {
	const [node, setNode] = (0, react.useState)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, setNode);
	const [renderWrapperNode, setRenderWrapperNode] = (0, react.useState)(null);
	const { width: contentWidth } = (0, _radix_ui_react_use_size.useSize)(node) || {};
	const [isScrollableLeft, setIsScrollableLeft] = (0, react.useState)(false);
	const [isScrollableRight, setIsScrollableRight] = (0, react.useState)(false);
	const [menuValue = [], setMenuValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: menuValueProp,
		defaultProp: defaultValue,
		onChange: onMenuValueChange
	});
	const [value = [], setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
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
	const handleOnScroll = (0, react.useCallback)((e) => {
		const { scrollLeft, scrollWidth, clientWidth } = e.target;
		setIsScrollableLeft(scrollLeft > 0);
		if (scrollWidth - scrollLeft <= clientWidth + 1) setIsScrollableRight(false);
		else if (scrollWidth !== clientWidth) setIsScrollableRight(true);
	}, [setIsScrollableLeft, setIsScrollableRight]);
	require_hooks_internal_use_resize_observer.default(renderWrapperNode, (0, react.useCallback)(() => {
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
	const shouldShowPlaceholder = (0, react.useMemo)(() => Array.isArray(value) || typeof value === "string" ? value.length === 0 : !Boolean(value) && value !== 0, [value]);
	const optionList = (0, react.useMemo)(() => {
		return require_components_select_helpers.convertChildrenToData(children);
	}, [children]);
	const shouldShowAllSelectedLabel = (Array.isArray(value) || typeof value === "string") && optionList.length === value.length && Boolean(allSelectedLabel);
	const label = (0, react.useMemo)(() => {
		return require_components_select_helpers.convertChildrenToData(children).filter((v) => value?.includes(v.value)).map(({ label: labelValue }) => labelValue);
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
		isMultiple: true,
		children: [isFormControl && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_virtual_input_index.VirtualValueInput, {
			name: props.name,
			value: Array.isArray(value) ? value.join(",") : value ?? "",
			"aria-invalid": invalid,
			disabled,
			tabIndex: -1
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_menu_index.Menu, {
			value: enableMenuActionArea ? menuValue : value,
			onValueChange: (0, _radix_ui_react_use_callback_ref.useCallbackRef)((v) => {
				if (!Array.isArray(v) && process.env.NODE_ENV !== "production") throw new Error("SelectMultiple 값에 오류가 발생했습니다. radio를 사용하였거나 value가 Array 형식이 아닌지 확인해주세요.");
				if (enableMenuActionArea) setMenuValue(v);
				else setValue(v);
			}),
			open,
			onOpenChange: setOpenState,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuTrigger, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				ref: composedRefs,
				gap: "8px",
				alignItems: "flex-start",
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
					(typeof render === "undefined" || shouldShowPlaceholder) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						flex: "1",
						gap: "4px",
						"data-role": "select-multiple-render-wrapper",
						sx: {
							padding: "0px 4px",
							overflow: "hidden"
						},
						children: shouldShowPlaceholder ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
							"data-role": "select-multiple-placeholder",
							noWrap: true,
							variant: "body1",
							weight: "regular",
							sx: require_utils_typography.ellipsisTypographyStyle(1),
							children: placeholder
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
							"data-role": "select-multiple-values",
							variant: "body1",
							weight: "regular",
							...overflow === false && {
								noWrap: true,
								sx: require_utils_typography.ellipsisTypographyStyle(1)
							},
							children: shouldShowAllSelectedLabel ? allSelectedLabel : label.join(", ")
						})
					}),
					typeof render === "function" && !shouldShowPlaceholder && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						flex: "1",
						"data-role": "select-multiple-render-wrapper",
						sx: require_components_select_multiple_style.customSelectMultipleRenderWrapperStyle({
							overflow,
							isScrollableLeft,
							isScrollableRight
						}),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_chip_contexts.ChipProvider, {
							solid: "semantic.label.alternative",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
								ref: setRenderWrapperNode,
								gap: "4px",
								flexWrap: overflow ? "wrap" : "nowrap",
								onScrollCapture: handleOnScroll,
								children: shouldShowAllSelectedLabel ? allSelectedLabel : render(label, value)
							})
						})
					}),
					invalid && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_select_index.SelectContent, {
						"data-role": "select-multiple-invalid",
						variant: "icon",
						sx: require_components_select_style.invalidIconWrapperStyle,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleExclamationFill, {})
					}),
					open ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronUpThickSmall, { sx: require_components_select_style.selectIconStyle({ disabled }) }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronDownThickSmall, { sx: require_components_select_style.selectIconStyle({ disabled }) })
				]
			}) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuContent, {
				offset: 8,
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
SelectMultiple.displayName = "SelectMultiple";
//#endregion
exports.SelectMultiple = SelectMultiple;
