'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { firstOverlayStyle, secondOverlayStyle, sectionMessageCloseButtonStyle, sectionMessageIconStyle, sectionMessageTrailingButtonStyle, sectionMessageWrapperStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useCallback, useId } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconCircleCheckFill, IconCircleCloseFill, IconCircleInfoFill, IconClose, IconTriangleExclamationFill } from "@wanteddev/wds-icon";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/section-message/index.tsx
const SectionMessage = forwardRef(({ open: originOpen, defaultOpen, onOpenChange, variant = "info", children, leadingContent, trailingButton, description, bottomButton, closeButton = false, ...props }, ref) => {
	const [open, setOpen] = useControllableState({
		prop: originOpen,
		defaultProp: defaultOpen ?? true,
		onChange: onOpenChange
	});
	const handleClose = useCallback(() => setOpen(false), [setOpen]);
	const titleId = useId();
	const descriptionId = useId();
	const renderLeadingContent = leadingContent ?? {
		custom: null,
		positive: /* @__PURE__ */ jsx(IconCircleCheckFill, {
			"aria-label": "positive",
			role: "img"
		}),
		negative: /* @__PURE__ */ jsx(IconCircleCloseFill, {
			"aria-label": "negative",
			role: "img"
		}),
		cautionary: /* @__PURE__ */ jsx(IconTriangleExclamationFill, {
			"aria-label": "cautionary",
			role: "img"
		}),
		info: /* @__PURE__ */ jsx(IconCircleInfoFill, {
			"aria-label": "info",
			role: "img"
		})
	}[variant];
	if (!open) return null;
	return /* @__PURE__ */ jsxs(FlexBox, {
		ref,
		gap: "8px",
		role: "alert",
		"aria-labelledby": titleId,
		"aria-describedby": descriptionId,
		...props,
		sx: [sectionMessageWrapperStyle, props.sx],
		children: [
			/* @__PURE__ */ jsx(Box, {
				role: "presentation",
				sx: firstOverlayStyle
			}),
			/* @__PURE__ */ jsx(Box, {
				role: "presentation",
				sx: secondOverlayStyle(variant)
			}),
			renderLeadingContent && /* @__PURE__ */ jsx(FlexBox, {
				flexShrink: 0,
				sx: sectionMessageIconStyle(variant),
				children: renderLeadingContent
			}),
			/* @__PURE__ */ jsxs(FlexBox, {
				"data-role": "section-message-content",
				flexDirection: "column",
				gap: "4px",
				flex: "1",
				children: [
					/* @__PURE__ */ jsx(Typography, {
						color: "semantic.label.normal",
						variant: "body2",
						weight: "medium",
						"data-role": "section-message-content-title",
						id: titleId,
						as: "h2",
						children
					}),
					description && /* @__PURE__ */ jsx(Typography, {
						variant: "label1-reading",
						weight: "regular",
						"data-role": "section-message-content-description",
						id: descriptionId,
						color: "semantic.label.neutral",
						as: "p",
						children: description
					}),
					bottomButton && /* @__PURE__ */ jsx(FlexBox, {
						"data-role": "section-message-bottom-button",
						sx: { marginTop: 8 },
						gap: "16px",
						children: bottomButton
					})
				]
			}),
			trailingButton && /* @__PURE__ */ jsx(FlexBox, {
				gap: "16px",
				alignItems: "center",
				sx: sectionMessageTrailingButtonStyle,
				"data-role": "section-message-trailing-button",
				children: trailingButton
			}),
			closeButton && /* @__PURE__ */ jsx(IconButton, {
				"data-role": "section-message-close-icon",
				color: "semantic.label.alternative",
				interactionColor: "semantic.label.alternative",
				onClick: handleClose,
				size: 20,
				"aria-label": "Close message",
				sx: sectionMessageCloseButtonStyle,
				children: /* @__PURE__ */ jsx(IconClose, {})
			})
		]
	});
});
SectionMessage.displayName = "SectionMessage";
//#endregion
export { SectionMessage };
