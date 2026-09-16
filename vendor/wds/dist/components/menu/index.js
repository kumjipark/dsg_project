'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_menu_constants = require("./constants.js");
const require_components_menu_contexts = require("./contexts.js");
const require_utils_internal_element = require("../../utils/internal/element.js");
const require_components_list_index = require("../list/index.js");
const require_hooks_internal_use_scope_context = require("../../hooks/internal/use-scope-context.js");
const require_components_scroll_area_index = require("../scroll-area/index.js");
const require_components_checkbox_index = require("../checkbox/index.js");
const require_components_radio_index = require("../radio/index.js");
const require_components_popover_contexts = require("../popover/contexts.js");
const require_components_popover_index = require("../popover/index.js");
const require_components_menu_style = require("./style.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_roving_focus = require("@radix-ui/react-roving-focus");
//#region src/components/menu/index.tsx
const useMenuScope = require_hooks_internal_use_scope_context.createScope("Popover");
const ARROW_KEYS = ["ArrowUp", "ArrowDown"];
const Menu = ({ defaultValue, value: valueProp, onValueChange, children, ...props }) => {
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: valueProp,
		defaultProp: defaultValue,
		onChange: onValueChange
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_contexts.MenuProvider, {
		value,
		onValueChange: setValue,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popover_index.Popover, {
			...useMenuScope("Menu"),
			...props,
			children
		})
	});
};
Menu.displayName = require_components_menu_constants.MENU_NAME;
const MenuTrigger = (0, react.forwardRef)((props, ref) => {
	const scopes = useMenuScope("Menu");
	const { open, onOpenChange } = require_components_popover_contexts.usePopoverContext(require_components_menu_constants.MENU_TRIGGER_NAME, scopes.__scopePopover);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popover_index.PopoverTrigger, {
		...props,
		...scopes,
		ref,
		onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, (e) => {
			if (open || require_utils_internal_element.isElementDisabled(e.currentTarget) || !ARROW_KEYS.includes(e.key)) return;
			e.preventDefault();
			onOpenChange(true);
		})
	});
});
MenuTrigger.displayName = require_components_menu_constants.MENU_TRIGGER_NAME;
const MenuContent = (0, react.forwardRef)(({ position = "bottom-center", offset, container, disablePortal, sx, children, forceMount, ...props }, ref) => {
	const scopes = useMenuScope("Menu");
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.RovingFocusGroup, {
		orientation: "vertical",
		dir: "ltr",
		asChild: true,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popover_index.PopoverContent, {
			ref,
			position,
			offset,
			container,
			disablePortal,
			forceMount,
			"aria-label": "Select menu",
			variant: "custom",
			...props,
			...scopes,
			sx: [require_components_menu_style.menuPopoverContentStyle, sx],
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_scroll_area_index.ScrollArea, {
				zIndex: 11,
				sx: require_components_menu_style.menuScrollAreaStyle,
				size: "small",
				children
			})
		})
	});
});
MenuContent.displayName = require_components_menu_constants.MENU_CONTENT_NAME;
const MenuList = (0, react.forwardRef)(({ sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.List, {
		ref,
		role: "menu",
		alignItems: "center",
		gap: "4px",
		...props,
		sx: [require_components_menu_style.menuListStyle, sx]
	});
});
MenuList.displayName = require_components_menu_constants.MENU_LIST_NAME;
const MenuGroup = (0, react.forwardRef)(({ title, sx, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		ref,
		role: "group",
		alignItems: "center",
		flexDirection: "column",
		gap: "4px",
		...props,
		sx: [require_components_menu_style.menuGroupStyle, sx],
		children: [Boolean(title) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
			variant: "caption1",
			weight: "bold",
			color: "semantic.label.alternative",
			sx: require_components_menu_style.menuGroupTitleStyle,
			children: title
		}), children]
	});
});
MenuGroup.displayName = require_components_menu_constants.MENU_GROUP_NAME;
const MenuItem = (0, react.forwardRef)(({ variant = "normal", onKeyDown, sx, ...props }, ref) => {
	const { disabled } = props;
	const context = require_components_menu_contexts.useMenuContext(require_components_menu_constants.MENU_ITEM_NAME);
	const normalActive = Array.isArray(context.value) ? context.value.includes(props.value) : props.value === context.value;
	const renderComponent = {
		radio: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemRadio, {
			ref,
			...props,
			sx: [require_components_menu_style.menuItemStyle, sx]
		}),
		checkbox: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemCheckbox, {
			ref,
			...props,
			sx: [require_components_menu_style.menuItemStyle, sx]
		}),
		normal: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCell, {
			disabled,
			role: "menuitemradio",
			ref,
			selected: normalActive,
			"aria-current": void 0,
			"aria-checked": normalActive,
			trailingContent: normalActive ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCellContent, {
				variant: "icon",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCheck, { "data-role": "menu-item-active-icon-check" })
			}) : null,
			...props,
			sx: [require_components_menu_style.menuItemStyle, sx],
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
				e.preventDefault();
				const { value } = props;
				const values = context.value;
				if (Array.isArray(values)) return context.onValueChange(values.includes(value) ? values.filter((valueItem) => valueItem !== value) : [...values, value]);
				context.onValueChange(value);
			})
		})
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_contexts.MenuItemProvider, {
		selected: variant === "normal" ? normalActive : void 0,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.RovingFocusGroupItem, {
			asChild: true,
			focusable: !disabled,
			active: normalActive,
			"data-active": normalActive,
			onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(onKeyDown, (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					e.target.click();
				}
			}),
			children: renderComponent[variant]
		})
	});
});
MenuItem.displayName = require_components_menu_constants.MENU_ITEM_NAME;
const MenuItemRadio = (0, react.forwardRef)(({ value, ...props }, ref) => {
	const context = require_components_menu_contexts.useMenuContext(require_components_menu_constants.MENU_ITEM_NAME);
	const checked = context.value === value;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCell, {
		ref,
		role: "menuitemradio",
		"aria-checked": checked,
		leadingContent: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCellContent, {
			variant: "radio",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_radio_index.Radio, {
				tabIndex: -1,
				checked,
				value
			})
		}),
		"aria-current": void 0,
		...props,
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
			if (!e.defaultPrevented) context.onValueChange(value);
			e.preventDefault();
		})
	});
});
MenuItemRadio.displayName = require_components_menu_constants.MENU_ITEM_CHECKBOX_NAME;
const MenuItemCheckbox = (0, react.forwardRef)(({ value, ...props }, ref) => {
	const context = require_components_menu_contexts.useMenuContext(require_components_menu_constants.MENU_ITEM_NAME);
	const valueList = Array.isArray(context.value) ? [...context.value] : [];
	const checked = valueList.includes(value);
	const onCheckedChange = (newChecked) => {
		context.onValueChange(newChecked ? [...valueList, value] : valueList.filter((valueItem) => valueItem !== value));
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCell, {
		ref,
		role: "menuitemcheckbox",
		"aria-checked": checked,
		leadingContent: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCellContent, {
			variant: "checkbox",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_checkbox_index.Checkbox, {
				tabIndex: -1,
				checked,
				onCheckedChange
			})
		}),
		"aria-current": void 0,
		...props,
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
			if (!e.defaultPrevented) onCheckedChange(!checked);
			e.preventDefault();
		})
	});
});
MenuItemCheckbox.displayName = require_components_menu_constants.MENU_ITEM_RADIO_NAME;
const MenuItemContent = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCellContent, {
		ref,
		...props
	});
});
MenuItemContent.displayName = require_components_menu_constants.MENU_ITEM_CONTENT_NAME;
const MenuActionArea = (0, react.forwardRef)(({ leadingContent, trailingContent, children, sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		ref,
		alignItems: "center",
		justifyContent: "space-between",
		...props,
		sx: [require_components_menu_style.menuActionAreaStyle, sx],
		children: [
			Boolean(leadingContent) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
				"data-role": "menu-action-area-leading-content",
				children: leadingContent
			}),
			children,
			Boolean(trailingContent) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
				"data-role": "menu-action-area-trailing-content",
				children: trailingContent
			})
		]
	});
});
MenuActionArea.displayName = require_components_menu_constants.MENU_ACTION_AREA_NAME;
const MenuActionAreaContent = (0, react.forwardRef)(({ variant = "custom", sx, children, ...props }, ref) => {
	switch (variant) {
		case "icon": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "menu-action-area-content",
			ref,
			...props,
			sx: [
				require_components_menu_style.menuActionAreaContentStyle(variant),
				(theme) => ({
					fontSize: "24px",
					color: theme.semantic.label.alternative
				}),
				sx
			],
			children
		});
		case "button":
		case "icon-button":
		case "text-button":
		case "chip-filter": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "menu-bottom-content",
			ref,
			...props,
			sx: [require_components_menu_style.menuActionAreaContentStyle(variant), sx],
			children
		});
		default: return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "menu-bottom-content",
			ref,
			...props,
			sx: [require_components_menu_style.menuActionAreaContentStyle(variant), sx],
			children
		});
	}
});
MenuActionAreaContent.displayName = require_components_menu_constants.MENU_ACTION_AREA_CONTENT_NAME;
//#endregion
exports.Menu = Menu;
exports.MenuActionArea = MenuActionArea;
exports.MenuActionAreaContent = MenuActionAreaContent;
exports.MenuContent = MenuContent;
exports.MenuGroup = MenuGroup;
exports.MenuItem = MenuItem;
exports.MenuItemContent = MenuItemContent;
exports.MenuList = MenuList;
exports.MenuTrigger = MenuTrigger;
