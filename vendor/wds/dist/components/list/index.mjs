'use client';
import { Divider } from "../divider/index.mjs";
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { WithInteraction } from "../with-interaction/index.mjs";
import { useMenuItemContext } from "../menu/contexts.mjs";
import { IconButtonProvider } from "../icon-button/contexts.mjs";
import { TextButtonProvider } from "../text-button/contexts.mjs";
import { CheckboxProvider } from "../checkbox/contexts.mjs";
import { RadioProvider } from "../radio/contexts.mjs";
import { isElementDisabled } from "../../utils/internal/element.mjs";
import { LIST_CELL_CONTENT_NAME, LIST_CELL_NAME, LIST_NAME, LIST_TEXT_NAME } from "./constants.mjs";
import { listCellContentStyle, listCellDividerStyle, listCellStyle, listStyle, listTextContentWrapperStyle, listTextEllipsisStyle, listTextStyle } from "./style.mjs";
import { ListCellProvider, useListCellContext } from "./contexts.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useId, useState } from "react";
import { IconChevronRightTightSmall } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Slot } from "@radix-ui/react-slot";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/list/index.tsx
const List = forwardRef(({ children, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		as: "ul",
		ref,
		role: "list",
		flexDirection: "column",
		...props,
		sx: [listStyle, props.sx],
		children
	});
});
List.displayName = LIST_NAME;
const ListCell = forwardRef(({ as, verticalPadding = "medium", fillWidth = false, divider, ellipsis = false, interactionPadding = fillWidth ? void 0 : "12px", alignItems = "flex-start", selected = false, disabled = false, disableInteraction = false, textProps, leadingContent, trailingContent, children, xs, sm, md, lg, xl, sx, ...props }, ref) => {
	const [item, setItem] = useState(null);
	const composedRefs = useComposedRefs(ref, (node) => setItem(node));
	const itemElement = item;
	const controllable = itemElement?.querySelector("[role=\"checkbox\"], [role=\"radio\"], button:not([role=\"switch\"]), [role=\"button\"], a");
	const clickable = !disabled && !disableInteraction;
	const textId = useId();
	const captionId = useId();
	return /* @__PURE__ */ jsx(ListCellProvider, {
		selected,
		disabled,
		ellipsis,
		alignItems,
		textId,
		captionId,
		children: /* @__PURE__ */ jsx(WithInteraction, {
			disabled: disabled || disableInteraction,
			variant: "light",
			children: /* @__PURE__ */ jsxs(FlexBox, {
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
				onKeyDown: composeEventHandlers(props.onKeyDown, (e) => {
					if (e.key === "Enter" && !e.metaKey && e.target === itemElement) {
						e.preventDefault();
						e.currentTarget.click();
					}
				}),
				onClick: composeEventHandlers(props.onClick, (e) => {
					const target = e.target;
					if (isElementDisabled(target) || target.ariaHidden?.toString() === "true" || target.hidden.toString() === "true") return;
					if (controllable && !controllable.contains(e.target)) {
						controllable.click();
						if (controllable.role === "radio") controllable.focus({
							preventScroll: false,
							focusVisible: false
						});
					}
				}),
				sx: [listCellStyle({
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
					/* @__PURE__ */ jsx(ListText, {
						...textProps,
						children
					}),
					divider && /* @__PURE__ */ jsx(Divider, {
						"data-role": "list-cell-divider",
						sx: listCellDividerStyle
					}),
					Boolean(trailingContent) && /* @__PURE__ */ jsx(Slot, {
						"data-role": "list-item-trailing-content",
						children: trailingContent
					})
				]
			})
		})
	});
});
ListCell.displayName = LIST_CELL_NAME;
const ListCellContent = forwardRef(({ variant = "custom", children, chevron = true, sx, ...props }, ref) => {
	const { alignItems } = useListCellContext(LIST_CELL_CONTENT_NAME);
	switch (variant) {
		case "large-icon": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "list-cell-content",
			alignItems,
			ref,
			...props,
			sx: [listCellContentStyle({ variant }), sx],
			children: /* @__PURE__ */ jsx(FlexBox, { children })
		});
		case "button": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "list-cell-content",
			alignItems,
			ref,
			...props,
			sx: [listCellContentStyle({ variant }), sx],
			children: /* @__PURE__ */ jsx(TextButtonProvider, {
				assistive: "semantic.label.alternative",
				children
			})
		});
		case "icon-button": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "list-cell-content",
			alignItems,
			ref,
			...props,
			sx: [listCellContentStyle({ variant }), sx],
			children: /* @__PURE__ */ jsx(IconButtonProvider, {
				normal: "semantic.label.alternative",
				children
			})
		});
		case "chevron": return /* @__PURE__ */ jsxs(FlexBox, {
			role: "button",
			alignItems,
			"wds-component": "list-cell-content",
			gap: "8px",
			ref,
			tabIndex: props.onClick ? 0 : -1,
			...props,
			sx,
			children: [Boolean(children) && /* @__PURE__ */ jsx(FlexBox, {
				justifyContent: "flex-end",
				alignItems,
				sx: listCellContentStyle({ variant }),
				children
			}), chevron && /* @__PURE__ */ jsx(FlexBox, {
				alignItems: "center",
				sx: { height: "24px" },
				children: /* @__PURE__ */ jsx(IconChevronRightTightSmall, { sx: (theme) => ({ color: theme.semantic.label.assistive }) })
			})]
		});
		case "checkbox": return /* @__PURE__ */ jsx(CheckboxProvider, {
			tight: true,
			children: /* @__PURE__ */ jsx(FlexBox, {
				"wds-component": "list-cell-content",
				alignItems,
				ref,
				...props,
				sx: [listCellContentStyle({ variant }), sx],
				children
			})
		});
		case "radio": return /* @__PURE__ */ jsx(RadioProvider, {
			tight: true,
			children: /* @__PURE__ */ jsx(FlexBox, {
				"wds-component": "list-cell-content",
				alignItems,
				ref,
				...props,
				sx: [listCellContentStyle({ variant }), sx],
				children
			})
		});
		default: return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "list-cell-content",
			alignItems,
			ref,
			...props,
			sx: [listCellContentStyle({ variant }), sx],
			children
		});
	}
});
ListCellContent.displayName = LIST_CELL_CONTENT_NAME;
const ListText = forwardRef(({ variant = "body1", weight: givenWeight, color, children, caption, captionProps, as, ...props }, ref) => {
	const { selected, disabled, ellipsis, textId, captionId } = useListCellContext(LIST_TEXT_NAME);
	const { selected: menuItemSelected } = useMenuItemContext() || {};
	if (!children) return null;
	const weight = givenWeight ?? (selected || menuItemSelected ? "medium" : "regular");
	const getTextColor = () => {
		if (disabled) return "semantic.label.alternative";
		if (selected) return "semantic.primary.normal";
		return color ?? "semantic.label.normal";
	};
	return /* @__PURE__ */ jsxs(Typography, {
		ref,
		color: getTextColor(),
		variant,
		weight,
		"data-role": "list-text-wrapper",
		...props,
		as: as || "p",
		sx: [listTextStyle, props.sx],
		children: [/* @__PURE__ */ jsx(Box, {
			as: "span",
			"data-role": "list-text-content-wrapper",
			sx: listTextContentWrapperStyle(ellipsis),
			children: /* @__PURE__ */ jsx(Box, {
				as: "span",
				"data-role": "list-text-content",
				id: textId,
				children
			})
		}), Boolean(caption) && /* @__PURE__ */ jsx(Typography, {
			variant: "label1",
			color: "semantic.label.alternative",
			"data-role": "list-text-caption",
			id: captionId,
			...captionProps,
			sx: [listTextEllipsisStyle(ellipsis), captionProps?.sx],
			children: caption
		})]
	});
});
ListText.displayName = LIST_TEXT_NAME;
//#endregion
export { List, ListCell, ListCellContent };
