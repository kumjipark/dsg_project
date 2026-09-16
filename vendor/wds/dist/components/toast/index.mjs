'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { AnimationPresence } from "../animation-presence/index.mjs";
import { PortalOrFragment } from "../portal-or-fragment/index.mjs";
import { useToastAnimation } from "./hooks.mjs";
import { firstOverlayStyle, messageStyle, secondOverlayStyle, textStyle, toastStyle, wrapperStyle } from "./style.mjs";
import { TOAST_CONTAINER_NAME, TOAST_CONTENT_NAME, TOAST_ICON_NAME, TOAST_NAME, toastIconComponent } from "./constants.mjs";
import { ToastProvider, useToastContext } from "./contexts.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useId, useMemo } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { composeEventHandlers } from "@radix-ui/primitive";
import { Slot } from "@radix-ui/react-slot";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/toast/index.tsx
const Toast = forwardRef(({ duration: durationProp = "short", variant = "normal", onAnimationEnd, defaultOpen, open: openProp, onOpenChange, children, container, disablePortal, disableAnimation, forceMount, as, ...props }, forwardedRef) => {
	const [open, setOpen] = useControllableState({
		defaultProp: defaultOpen ?? false,
		prop: openProp,
		onChange: onOpenChange
	});
	const contentId = useId();
	const { ref, handleAnimationEnd, handleMouseEnter, handleMouseLeave, style } = useToastAnimation({
		open,
		setOpen,
		duration: useMemo(() => {
			if (typeof durationProp === "number") return durationProp;
			switch (durationProp) {
				case "long": return 5e3;
				default: return 3e3;
			}
		}, [durationProp]),
		onAnimationEnd,
		disablePortal,
		component: "toast"
	});
	const ariaAttributes = useMemo(() => {
		if (variant === "negative") return {
			role: "alert",
			"aria-live": "assertive"
		};
		return {
			role: variant === "cautionary" ? "alert" : "status",
			"aria-live": "polite"
		};
	}, [variant]);
	return /* @__PURE__ */ jsx(AnimationPresence, {
		present: open || forceMount,
		children: /* @__PURE__ */ jsx(PortalOrFragment, {
			disablePortal,
			container: container ?? globalThis?.document?.querySelector("#wds-region-manager-bottom"),
			children: /* @__PURE__ */ jsx(Box, {
				"aria-atomic": true,
				...ariaAttributes,
				"aria-describedby": contentId,
				ref: forwardedRef,
				...props,
				as: as ?? "div",
				onMouseEnter: composeEventHandlers(props.onMouseEnter, handleMouseEnter),
				onMouseLeave: composeEventHandlers(props.onMouseLeave, handleMouseLeave),
				"data-status": open ? "open" : "close",
				onAnimationEnd: handleAnimationEnd,
				style: {
					...style,
					...props.style
				},
				sx: [wrapperStyle({ disableAnimation }), props.sx],
				children: /* @__PURE__ */ jsxs(Box, {
					ref,
					sx: toastStyle,
					"data-role": "toast",
					children: [
						/* @__PURE__ */ jsx(Box, {
							role: "presentation",
							sx: firstOverlayStyle
						}),
						/* @__PURE__ */ jsx(Box, {
							role: "presentation",
							sx: secondOverlayStyle
						}),
						/* @__PURE__ */ jsx(ToastProvider, {
							contentId,
							variant,
							children
						})
					]
				})
			})
		})
	});
});
Toast.displayName = TOAST_NAME;
const ToastContainer = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		gap: "8px",
		alignItems: "center",
		ref,
		...props,
		sx: [{ ["& svg"]: { flexShrink: 0 } }, props.sx]
	});
});
ToastContainer.displayName = TOAST_CONTAINER_NAME;
const ToastIcon = forwardRef(({ children, ...props }, ref) => {
	const { variant } = useToastContext(TOAST_ICON_NAME);
	const icon = children || toastIconComponent[variant];
	if (!icon) return null;
	return /* @__PURE__ */ jsx(Slot, {
		ref,
		...props,
		children: icon
	});
});
ToastIcon.displayName = TOAST_ICON_NAME;
const ToastContent = forwardRef((props, ref) => {
	const { contentId } = useToastContext(TOAST_CONTENT_NAME);
	return /* @__PURE__ */ jsx(Typography, {
		as: "p",
		color: "semantic.static.white",
		variant: "body2",
		weight: "bold",
		id: contentId,
		ref,
		...props,
		sx: [
			messageStyle,
			textStyle,
			props.sx
		]
	});
});
ToastContent.displayName = TOAST_CONTENT_NAME;
//#endregion
export { Toast, ToastContainer, ToastContent, ToastIcon };
