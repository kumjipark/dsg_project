'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { ellipsisTypographyStyle } from "../../utils/typography.mjs";
import { Typography } from "../typography/index.mjs";
import { AnimationPresence } from "../animation-presence/index.mjs";
import { TextButton } from "../text-button/index.mjs";
import { PortalOrFragment } from "../portal-or-fragment/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { useToastAnimation } from "../toast/hooks.mjs";
import { SNACKBAR_ACTION_NAME, SNACKBAR_CLOSE_BUTTON_NAME, SNACKBAR_CONTENT_NAME, SNACKBAR_DESCRIPTION_NAME, SNACKBAR_EXTRA_CONTENT_NAME, SNACKBAR_HEADING_NAME, SNACKBAR_NAME } from "./constants.mjs";
import { SnackbarProvider, useSnackbarContext } from "./contexts.mjs";
import { firstOverlayStyle, fullWidthFlexBoxStyle, messageStyle, secondOverlayStyle, snackbarActionStyle, snackbarCloseButtonStyle, snackbarStyle, textStyle, wrapperStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useId, useMemo } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconClose } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/snackbar/index.tsx
const Snackbar = forwardRef(({ duration: durationProp = "short", variant = "normal", onAnimationEnd, defaultOpen, open: openProp, onOpenChange, children, container, disablePortal, forceMount = false, disableAnimation, as, ...props }, forwardedRef) => {
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	const headingId = useId();
	const descriptionId = useId();
	const { ref: containerRef, handleAnimationEnd, handleMouseEnter, handleMouseLeave, style } = useToastAnimation({
		open,
		setOpen,
		duration: useMemo(() => {
			if (typeof durationProp === "number") return durationProp;
			switch (durationProp) {
				case "long": return 16e3;
				default: return 4e3;
			}
		}, [durationProp]),
		onAnimationEnd,
		disablePortal,
		component: "snackbar"
	});
	return /* @__PURE__ */ jsx(AnimationPresence, {
		present: open || forceMount,
		children: /* @__PURE__ */ jsx(PortalOrFragment, {
			disablePortal,
			container: container ?? globalThis?.document?.querySelector("#wds-region-manager-bottom"),
			children: /* @__PURE__ */ jsx(Box, {
				"aria-atomic": true,
				role: "status",
				"aria-live": "polite",
				"aria-describedby": descriptionId,
				"aria-labelledby": headingId,
				...props,
				as: as ?? "div",
				ref: forwardedRef,
				onMouseEnter: composeEventHandlers(props.onMouseEnter, handleMouseEnter),
				onMouseLeave: composeEventHandlers(props.onMouseLeave, handleMouseLeave),
				onKeyDown: composeEventHandlers(props.onKeyDown, (e) => {
					if (e.key === "Escape") setOpen(false);
				}),
				"data-status": open ? "open" : "close",
				onAnimationEnd: handleAnimationEnd,
				style: {
					...style,
					...props.style
				},
				sx: [wrapperStyle({ disableAnimation }), props.sx],
				children: /* @__PURE__ */ jsxs(Box, {
					ref: containerRef,
					sx: snackbarStyle,
					"data-role": "snackbar",
					children: [
						/* @__PURE__ */ jsx(Box, {
							role: "presentation",
							sx: firstOverlayStyle
						}),
						/* @__PURE__ */ jsx(Box, {
							role: "presentation",
							sx: secondOverlayStyle
						}),
						/* @__PURE__ */ jsx(FlexBox, {
							gap: "12px",
							alignItems: "center",
							"data-role": "snackbar-container",
							sx: fullWidthFlexBoxStyle,
							children: /* @__PURE__ */ jsx(SnackbarProvider, {
								headingId,
								descriptionId,
								variant,
								onOpenChange: setOpen,
								children
							})
						})
					]
				})
			})
		})
	});
});
Snackbar.displayName = SNACKBAR_NAME;
const SnackbarContent = forwardRef(({ extraContent, children, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(FlexBox, {
		flex: "1 1 auto",
		gap: "8px",
		alignItems: "center",
		ref,
		...props,
		children: [extraContent, /* @__PURE__ */ jsx(FlexBox, {
			flexDirection: "column",
			sx: messageStyle,
			"data-role": "snackbar-content-area",
			children
		})]
	});
});
SnackbarContent.displayName = SNACKBAR_CONTENT_NAME;
const SnackbarExtraContent = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		flexShrink: 0,
		...props,
		sx: [{
			width: "fit-content",
			height: "fit-content"
		}, props.sx]
	});
});
SnackbarExtraContent.displayName = SNACKBAR_EXTRA_CONTENT_NAME;
const SnackbarHeading = forwardRef((props, ref) => {
	const { headingId } = useSnackbarContext(SNACKBAR_HEADING_NAME);
	return /* @__PURE__ */ jsx(Typography, {
		as: "p",
		id: headingId,
		ref,
		color: "semantic.static.white",
		variant: "body2",
		weight: "bold",
		...props,
		sx: [textStyle, props.sx]
	});
});
SnackbarHeading.displayName = SNACKBAR_HEADING_NAME;
const SnackbarDescription = forwardRef((props, ref) => {
	const { descriptionId } = useSnackbarContext(SNACKBAR_DESCRIPTION_NAME);
	return /* @__PURE__ */ jsx(Typography, {
		as: "p",
		id: descriptionId,
		ref,
		color: "semantic.static.white",
		variant: "label2",
		weight: "regular",
		...props,
		sx: [
			textStyle,
			ellipsisTypographyStyle(2),
			props.sx
		]
	});
});
SnackbarDescription.displayName = SNACKBAR_DESCRIPTION_NAME;
const SnackbarAction = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(TextButton, {
		ref,
		color: "assistive",
		size: "medium",
		...props,
		sx: [snackbarActionStyle, props.sx]
	});
});
SnackbarAction.displayName = SNACKBAR_ACTION_NAME;
const SnackbarCloseButton = forwardRef(({ children, ...props }, ref) => {
	const { onOpenChange } = useSnackbarContext(SNACKBAR_CLOSE_BUTTON_NAME);
	return /* @__PURE__ */ jsx(IconButton, {
		ref,
		size: 20,
		color: "semantic.static.white",
		"aria-label": "Close snackbar",
		...props,
		onClick: composeEventHandlers(props.onClick, () => onOpenChange(false)),
		sx: [snackbarCloseButtonStyle, props.sx],
		children: children ?? /* @__PURE__ */ jsx(IconClose, { "aria-hidden": true })
	});
});
SnackbarCloseButton.displayName = SNACKBAR_CLOSE_BUTTON_NAME;
//#endregion
export { Snackbar, SnackbarAction, SnackbarCloseButton, SnackbarContent, SnackbarDescription, SnackbarExtraContent, SnackbarHeading };
