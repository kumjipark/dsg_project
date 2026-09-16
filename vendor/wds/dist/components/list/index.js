'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_divider_index = require("../divider/index.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_menu_contexts = require("../menu/contexts.js");
const require_components_icon_button_contexts = require("../icon-button/contexts.js");
const require_components_text_button_contexts = require("../text-button/contexts.js");
const require_components_checkbox_contexts = require("../checkbox/contexts.js");
const require_components_radio_contexts = require("../radio/contexts.js");
const require_utils_internal_element = require("../../utils/internal/element.js");
const require_components_list_constants = require("./constants.js");
const require_components_list_style = require("./style.js");
const require_components_list_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/list/index.tsx
const List = (0, react.forwardRef)(({ children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		as: "ul",
		ref,
		role: "list",
		flexDirection: "column",
		...props,
		sx: [require_components_list_style.listStyle, props.sx],
		children
	});
});
List.displayName = require_components_list_constants.LIST_NAME;
const ListCell = (0, react.forwardRef)(({ as, verticalPadding = "medium", fillWidth = false, divider, ellipsis = false, interactionPadding = fillWidth ? void 0 : "12px", alignItems = "flex-start", selected = false, disabled = false, disableInteraction = false, textProps, leadingContent, trailingContent, children, xs, sm, md, lg, xl, sx, ...props }, ref) => {
	const [item, setItem] = (0, react.useState)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, (node) => setItem(node));
	const itemElement = item;
	const controllable = itemElement?.querySelector("[role=\"checkbox\"], [role=\"radio\"], button:not([role=\"switch\"]), [role=\"button\"], a");
	const clickable = !disabled && !disableInteraction;
	const textId = (0, react.useId)();
	const captionId = (0, react.useId)();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_contexts.ListCellProvider, {
		selected,
		disabled,
		ellipsis,
		alignItems,
		textId,
		captionId,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
			disabled: disabled || disableInteraction,
			variant: "light",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				as: as || "li",
				role: "listitem",
				ref: composedRefs,
				flexDirection: "row",
				alignItems,
				gap: "8px",
				"aria-disabled": disabled,
				disabled,
				tabIndex: clickable ? 0 : void 0,
				"aria-labelledby": textId,
				"aria-describedby": captionId,
				"aria-current": selected,
				"data-disable-interaction": disabled || disableInteraction || verticalPadding === "none",
				"wds-component": "list-cell",
				...props,
				onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, (e) => {
					if (e.key === "Enter" && !e.metaKey && e.target === itemElement) {
						e.preventDefault();
						e.currentTarget.click();
					}
				}),
				onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
					const target = e.target;
					if (require_utils_internal_element.isElementDisabled(target) || target.ariaHidden?.toString() === "true" || target.hidden.toString() === "true") return;
					if (controllable && !controllable.contains(e.target)) {
						controllable.click();
						if (controllable.role === "radio") controllable.focus({
							preventScroll: false,
							focusVisible: false
						});
					}
				}),
				sx: [require_components_list_style.listCellStyle({
					verticalPadding,
					fillWidth,
					interactionPadding,
					selected,
					disabled,
					disableInteraction,
					xl,
					xs,
					sm,
					md,
					lg
				}), sx],
				children: [
					Boolean(leadingContent) && leadingContent,
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ListText, {
						...textProps,
						children
					}),
					divider && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_divider_index.Divider, {
						"data-role": "list-cell-divider",
						sx: require_components_list_style.listCellDividerStyle
					}),
					Boolean(trailingContent) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
						"data-role": "list-item-trailing-content",
						children: trailingContent
					})
				]
			})
		})
	});
});
ListCell.displayName = require_components_list_constants.LIST_CELL_NAME;
const ListCellContent = (0, react.forwardRef)(({ variant = "custom", children, chevron = true, sx, ...props }, ref) => {
	const { alignItems } = require_components_list_contexts.useListCellContext(require_components_list_constants.LIST_CELL_CONTENT_NAME);
	switch (variant) {
		case "large-icon": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "list-cell-content",
			alignItems,
			ref,
			...props,
			sx: [require_components_list_style.listCellContentStyle({ variant }), sx],
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, { children })
		});
		case "button": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "list-cell-content",
			alignItems,
			ref,
			...props,
			sx: [require_components_list_style.listCellContentStyle({ variant }), sx],
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_contexts.TextButtonProvider, {
				assistive: "semantic.label.alternative",
				children
			})
		});
		case "icon-button": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "list-cell-content",
			alignItems,
			ref,
			...props,
			sx: [require_components_list_style.listCellContentStyle({ variant }), sx],
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_contexts.IconButtonProvider, {
				normal: "semantic.label.alternative",
				children
			})
		});
		case "chevron": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			role: "button",
			alignItems,
			"wds-component": "list-cell-content",
			gap: "8px",
			ref,
			tabIndex: props.onClick ? 0 : -1,
			...props,
			sx,
			children: [Boolean(children) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				justifyContent: "flex-end",
				alignItems,
				sx: require_components_list_style.listCellContentStyle({ variant }),
				children
			}), chevron && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				alignItems: "center",
				sx: { height: "24px" },
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronRightTightSmall, { sx: (theme) => ({ color: theme.semantic.label.assistive }) })
			})]
		});
		case "checkbox": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_checkbox_contexts.CheckboxProvider, {
			tight: true,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				"wds-component": "list-cell-content",
				alignItems,
				ref,
				...props,
				sx: [require_components_list_style.listCellContentStyle({ variant }), sx],
				children
			})
		});
		case "radio": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_radio_contexts.RadioProvider, {
			tight: true,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				"wds-component": "list-cell-content",
				alignItems,
				ref,
				...props,
				sx: [require_components_list_style.listCellContentStyle({ variant }), sx],
				children
			})
		});
		default: return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "list-cell-content",
			alignItems,
			ref,
			...props,
			sx: [require_components_list_style.listCellContentStyle({ variant }), sx],
			children
		});
	}
});
ListCellContent.displayName = require_components_list_constants.LIST_CELL_CONTENT_NAME;
const ListText = (0, react.forwardRef)(({ variant = "body1", weight: givenWeight, color, children, caption, captionProps, as, ...props }, ref) => {
	const { selected, disabled, ellipsis, textId, captionId } = require_components_list_contexts.useListCellContext(require_components_list_constants.LIST_TEXT_NAME);
	const { selected: menuItemSelected } = require_components_menu_contexts.useMenuItemContext() || {};
	if (!children) return null;
	const weight = givenWeight ?? (selected || menuItemSelected ? "medium" : "regular");
	const getTextColor = () => {
		if (disabled) return "semantic.label.alternative";
		if (selected) return "semantic.primary.normal";
		return color ?? "semantic.label.normal";
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_typography_index.Typography, {
		ref,
		color: getTextColor(),
		variant,
		weight,
		"data-role": "list-text-wrapper",
		...props,
		as: as || "p",
		sx: [require_components_list_style.listTextStyle, props.sx],
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: "span",
			"data-role": "list-text-content-wrapper",
			sx: require_components_list_style.listTextContentWrapperStyle(ellipsis),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				as: "span",
				"data-role": "list-text-content",
				id: textId,
				children
			})
		}), Boolean(caption) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
			variant: "label1",
			color: "semantic.label.alternative",
			"data-role": "list-text-caption",
			id: captionId,
			...captionProps,
			sx: [require_components_list_style.listTextEllipsisStyle(ellipsis), captionProps?.sx],
			children: caption
		})]
	});
});
ListText.displayName = require_components_list_constants.LIST_TEXT_NAME;
//#endregion
exports.List = List;
exports.ListCell = ListCell;
exports.ListCellContent = ListCellContent;
