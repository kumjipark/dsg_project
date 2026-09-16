'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { Button } from "../button/index.mjs";
import { TextButton } from "../text-button/index.mjs";
import { useModalActionAreaContext } from "../modal/contexts.mjs";
import { ACTION_AREA_BUTTON_NAME, ACTION_AREA_NAME } from "./constants.mjs";
import { ActionAreaProvider, useActionAreaContext } from "./contexts.mjs";
import { actionAreaStyle, actionButtonCancel } from "./style.mjs";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/action-area/index.tsx
const ActionArea = forwardRef(({ extra = false, extraContent, compactContent, variant = "strong", children, caption, background, divider = true, ...props }, ref) => {
	const modalOption = useModalActionAreaContext();
	const modalSticky = modalOption !== void 0 ? modalOption.sticky : void 0;
	return /* @__PURE__ */ jsx(ActionAreaProvider, {
		variant,
		children: /* @__PURE__ */ jsxs(FlexBox, {
			"wds-component": "action-area",
			ref,
			flexShrink: 0,
			flexDirection: "column",
			...props,
			sx: [actionAreaStyle({
				divider,
				extra,
				background: extra ? false : background ?? modalSticky
			}), props.sx],
			children: [
				extra && Boolean(extraContent) && /* @__PURE__ */ jsx(FlexBox, {
					gap: "8px",
					flexDirection: "column",
					alignItems: "center",
					"data-role": "action-area-extra-content",
					sx: { marginBottom: "calc(4px + var(--wds-action-area-margin-y, 20px))" },
					children: extraContent
				}),
				Boolean(caption) && /* @__PURE__ */ jsx(Typography, {
					align: "center",
					variant: "label2",
					weight: "regular",
					"data-role": "action-area-caption",
					color: "semantic.label.alternative",
					sx: { marginBottom: "16px" },
					children: caption
				}),
				variant === "compact" && Boolean(compactContent) ? /* @__PURE__ */ jsxs(FlexBox, {
					justifyContent: "space-between",
					alignItems: "center",
					children: [/* @__PURE__ */ jsx(FlexBox, {
						flexDirection: "row",
						"data-role": "action-area-compact-content",
						children: compactContent
					}), /* @__PURE__ */ jsx(FlexBox, {
						flexShrink: 0,
						gap: "12px",
						"data-role": "action-area-wrapper",
						children
					})]
				}) : /* @__PURE__ */ jsx(FlexBox, {
					flexDirection: variant === "strong" ? "column" : "row",
					gap: variant === "strong" ? "8px" : "12px",
					"data-role": "action-area-wrapper",
					alignSelf: variant === "compact" ? "flex-end" : "initial",
					children
				})
			]
		})
	});
});
ActionArea.displayName = ACTION_AREA_NAME;
const ActionAreaButton = forwardRef(({ variant = "main", textButtonColor, buttonVariant, buttonColor, ...props }, ref) => {
	const { variant: parentVariant } = useActionAreaContext(ACTION_AREA_BUTTON_NAME);
	return {
		main: /* @__PURE__ */ jsx(Button, {
			ref,
			variant: buttonVariant ?? (parentVariant === "cancel" ? "outlined" : "solid"),
			color: buttonColor ?? (parentVariant === "cancel" ? "assistive" : "primary"),
			size: "large",
			fullWidth: parentVariant === "strong" || parentVariant === "cancel",
			...props,
			sx: [actionButtonCancel({
				variant,
				parentVariant
			}), props.sx]
		}),
		alternative: /* @__PURE__ */ jsx(Button, {
			ref,
			variant: buttonVariant ?? "outlined",
			size: "large",
			color: buttonColor ?? "primary",
			fullWidth: parentVariant === "strong",
			...props,
			sx: [actionButtonCancel({
				variant,
				parentVariant
			}), props.sx]
		}),
		sub: parentVariant === "strong" ? /* @__PURE__ */ jsx(TextButton, {
			ref,
			color: textButtonColor ?? "assistive",
			size: "small",
			...props,
			sx: [{
				margin: "8px 0px",
				width: "fit-content",
				alignSelf: "center"
			}, props.sx]
		}) : /* @__PURE__ */ jsx(Button, {
			ref,
			variant: buttonVariant ?? "outlined",
			color: buttonColor ?? "assistive",
			size: "large",
			...props,
			sx: [actionButtonCancel({
				variant,
				parentVariant
			}), props.sx]
		})
	}[variant];
});
ActionAreaButton.displayName = ACTION_AREA_BUTTON_NAME;
//#endregion
export { ActionArea, ActionAreaButton };
