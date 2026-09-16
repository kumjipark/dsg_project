'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { MENU_ACTION_AREA_CONTENT_NAME, MENU_ACTION_AREA_NAME, MENU_CONTENT_NAME, MENU_GROUP_NAME, MENU_ITEM_CHECKBOX_NAME, MENU_ITEM_CONTENT_NAME, MENU_ITEM_NAME, MENU_ITEM_RADIO_NAME, MENU_LIST_NAME, MENU_NAME, MENU_TRIGGER_NAME } from "./constants.mjs";
import { MenuItemProvider, MenuProvider, useMenuContext } from "./contexts.mjs";
import { isElementDisabled } from "../../utils/internal/element.mjs";
import { List, ListCell, ListCellContent } from "../list/index.mjs";
import { createScope } from "../../hooks/internal/use-scope-context.mjs";
import { ScrollArea } from "../scroll-area/index.mjs";
import { Checkbox } from "../checkbox/index.mjs";
import { Radio } from "../radio/index.mjs";
import { usePopoverContext } from "../popover/contexts.mjs";
import { Popover, PopoverContent, PopoverTrigger } from "../popover/index.mjs";
import { menuActionAreaContentStyle, menuActionAreaStyle, menuGroupStyle, menuGroupTitleStyle, menuItemStyle, menuListStyle, menuPopoverContentStyle, menuScrollAreaStyle } from "./style.mjs";
import { forwardRef } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconCheck } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { Slot } from "@radix-ui/react-slot";
import { jsx, jsxs } from "react/jsx-runtime";
import { RovingFocusGroup, RovingFocusGroupItem } from "@radix-ui/react-roving-focus";
//#region src/components/menu/index.tsx
const useMenuScope = createScope("Popover");
const ARROW_KEYS = ["ArrowUp", "ArrowDown"];
const Menu = ({ defaultValue, value: valueProp, onValueChange, children, ...props }) => {
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue,
		onChange: onValueChange
	});
	return /* @__PURE__ */ jsx(MenuProvider, {
		value,
		onValueChange: setValue,
		children: /* @__PURE__ */ jsx(Popover, {
			...useMenuScope("Menu"),
			...props,
			children
		})
	});
};
Menu.displayName = MENU_NAME;
const MenuTrigger = forwardRef((props, ref) => {
	const scopes = useMenuScope("Menu");
	const { open, onOpenChange } = usePopoverContext(MENU_TRIGGER_NAME, scopes.__scopePopover);
	return /* @__PURE__ */ jsx(PopoverTrigger, {
		...props,
		...scopes,
		ref,
		onKeyDown: composeEventHandlers(props.onKeyDown, (e) => {
			if (open || isElementDisabled(e.currentTarget) || !ARROW_KEYS.includes(e.key)) return;
			e.preventDefault();
			onOpenChange(true);
		})
	});
});
MenuTrigger.displayName = MENU_TRIGGER_NAME;
const MenuContent = forwardRef(({ position = "bottom-center", offset, container, disablePortal, sx, children, forceMount, ...props }, ref) => {
	const scopes = useMenuScope("Menu");
	return /* @__PURE__ */ jsx(RovingFocusGroup, {
		orientation: "vertical",
		dir: "ltr",
		asChild: true,
		children: /* @__PURE__ */ jsx(PopoverContent, {
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
			sx: [menuPopoverContentStyle, sx],
			children: /* @__PURE__ */ jsx(ScrollArea, {
				zIndex: 11,
				sx: menuScrollAreaStyle,
				size: "small",
				children
			})
		})
	});
});
MenuContent.displayName = MENU_CONTENT_NAME;
const MenuList = forwardRef(({ sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(List, {
		ref,
		role: "menu",
		alignItems: "center",
		gap: "4px",
		...props,
		sx: [menuListStyle, sx]
	});
});
MenuList.displayName = MENU_LIST_NAME;
const MenuGroup = forwardRef(({ title, sx, children, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(FlexBox, {
		ref,
		role: "group",
		alignItems: "center",
		flexDirection: "column",
		gap: "4px",
		...props,
		sx: [menuGroupStyle, sx],
		children: [Boolean(title) && /* @__PURE__ */ jsx(Typography, {
			variant: "caption1",
			weight: "bold",
			color: "semantic.label.alternative",
			sx: menuGroupTitleStyle,
			children: title
		}), children]
	});
});
MenuGroup.displayName = MENU_GROUP_NAME;
const MenuItem = forwardRef(({ variant = "normal", onKeyDown, sx, ...props }, ref) => {
	const { disabled } = props;
	const context = useMenuContext(MENU_ITEM_NAME);
	const normalActive = Array.isArray(context.value) ? context.value.includes(props.value) : props.value === context.value;
	const renderComponent = {
		radio: /* @__PURE__ */ jsx(MenuItemRadio, {
			ref,
			...props,
			sx: [menuItemStyle, sx]
		}),
		checkbox: /* @__PURE__ */ jsx(MenuItemCheckbox, {
			ref,
			...props,
			sx: [menuItemStyle, sx]
		}),
		normal: /* @__PURE__ */ jsx(ListCell, {
			disabled,
			role: "menuitemradio",
			ref,
			selected: normalActive,
			"aria-current": void 0,
			"aria-checked": normalActive,
			trailingContent: normalActive ? /* @__PURE__ */ jsx(ListCellContent, {
				variant: "icon",
				children: /* @__PURE__ */ jsx(IconCheck, { "data-role": "menu-item-active-icon-check" })
			}) : null,
			...props,
			sx: [menuItemStyle, sx],
			onClick: composeEventHandlers(props.onClick, (e) => {
				e.preventDefault();
				const { value } = props;
				const values = context.value;
				if (Array.isArray(values)) return context.onValueChange(values.includes(value) ? values.filter((valueItem) => valueItem !== value) : [...values, value]);
				context.onValueChange(value);
			})
		})
	};
	return /* @__PURE__ */ jsx(MenuItemProvider, {
		selected: variant === "normal" ? normalActive : void 0,
		children: /* @__PURE__ */ jsx(RovingFocusGroupItem, {
			asChild: true,
			focusable: !disabled,
			active: normalActive,
			"data-active": normalActive,
			onKeyDown: composeEventHandlers(onKeyDown, (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					e.target.click();
				}
			}),
			children: renderComponent[variant]
		})
	});
});
MenuItem.displayName = MENU_ITEM_NAME;
const MenuItemRadio = forwardRef(({ value, ...props }, ref) => {
	const context = useMenuContext(MENU_ITEM_NAME);
	const checked = context.value === value;
	return /* @__PURE__ */ jsx(ListCell, {
		ref,
		role: "menuitemradio",
		"aria-checked": checked,
		leadingContent: /* @__PURE__ */ jsx(ListCellContent, {
			variant: "radio",
			children: /* @__PURE__ */ jsx(Radio, {
				tabIndex: -1,
				checked,
				value
			})
		}),
		"aria-current": void 0,
		...props,
		onClick: composeEventHandlers(props.onClick, (e) => {
			if (!e.defaultPrevented) context.onValueChange(value);
			e.preventDefault();
		})
	});
});
MenuItemRadio.displayName = MENU_ITEM_CHECKBOX_NAME;
const MenuItemCheckbox = forwardRef(({ value, ...props }, ref) => {
	const context = useMenuContext(MENU_ITEM_NAME);
	const valueList = Array.isArray(context.value) ? [...context.value] : [];
	const checked = valueList.includes(value);
	const onCheckedChange = (newChecked) => {
		context.onValueChange(newChecked ? [...valueList, value] : valueList.filter((valueItem) => valueItem !== value));
	};
	return /* @__PURE__ */ jsx(ListCell, {
		ref,
		role: "menuitemcheckbox",
		"aria-checked": checked,
		leadingContent: /* @__PURE__ */ jsx(ListCellContent, {
			variant: "checkbox",
			children: /* @__PURE__ */ jsx(Checkbox, {
				tabIndex: -1,
				checked,
				onCheckedChange
			})
		}),
		"aria-current": void 0,
		...props,
		onClick: composeEventHandlers(props.onClick, (e) => {
			if (!e.defaultPrevented) onCheckedChange(!checked);
			e.preventDefault();
		})
	});
});
MenuItemCheckbox.displayName = MENU_ITEM_RADIO_NAME;
const MenuItemContent = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(ListCellContent, {
		ref,
		...props
	});
});
MenuItemContent.displayName = MENU_ITEM_CONTENT_NAME;
const MenuActionArea = forwardRef(({ leadingContent, trailingContent, children, sx, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(FlexBox, {
		ref,
		alignItems: "center",
		justifyContent: "space-between",
		...props,
		sx: [menuActionAreaStyle, sx],
		children: [
			Boolean(leadingContent) && /* @__PURE__ */ jsx(Slot, {
				"data-role": "menu-action-area-leading-content",
				children: leadingContent
			}),
			children,
			Boolean(trailingContent) && /* @__PURE__ */ jsx(Slot, {
				"data-role": "menu-action-area-trailing-content",
				children: trailingContent
			})
		]
	});
});
MenuActionArea.displayName = MENU_ACTION_AREA_NAME;
const MenuActionAreaContent = forwardRef(({ variant = "custom", sx, children, ...props }, ref) => {
	switch (variant) {
		case "icon": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "menu-action-area-content",
			ref,
			...props,
			sx: [
				menuActionAreaContentStyle(variant),
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
		case "chip-filter": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "menu-bottom-content",
			ref,
			...props,
			sx: [menuActionAreaContentStyle(variant), sx],
			children
		});
		default: return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "menu-bottom-content",
			ref,
			...props,
			sx: [menuActionAreaContentStyle(variant), sx],
			children
		});
	}
});
MenuActionAreaContent.displayName = MENU_ACTION_AREA_CONTENT_NAME;
//#endregion
export { Menu, MenuActionArea, MenuActionAreaContent, MenuContent, MenuGroup, MenuItem, MenuItemContent, MenuList, MenuTrigger };
