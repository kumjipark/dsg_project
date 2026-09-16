'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { hideOthers } from "../../utils/aria-hidden.mjs";
import { useAnimationPresence } from "../animation-presence/hooks.mjs";
import { TextButton } from "../text-button/index.mjs";
import { PortalOrFragment } from "../portal-or-fragment/index.mjs";
import { DismissableLayer } from "../dismissable-layer/index.mjs";
import { FocusScope } from "../focus-scope/index.mjs";
import { RemoveScroll } from "../remove-scroll/index.mjs";
import { alertActionStyle, alertContainerStyle, alertContentStyle, alertDimmerStyle, alertWrapperStyle } from "./style.mjs";
import { ALERT_ACTION_AREA_BUTTON_NAME, ALERT_ACTION_AREA_NAME, ALERT_CONTAINER_NAME, ALERT_CONTENT_NAME, ALERT_DESCRIPTION_NAME, ALERT_DIMMER_NAME, ALERT_HEADING_NAME, ALERT_NAME, ALERT_TRIGGER_NAME } from "./constants.mjs";
import { AlertContainerProvider, AlertProvider, useAlertContainerContext, useAlertContext } from "./contexts.mjs";
import { Box, getColorByToken } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useId, useRef } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { composeEventHandlers } from "@radix-ui/primitive";
import { composeRefs, useComposedRefs } from "@radix-ui/react-compose-refs";
import { Slot } from "@radix-ui/react-slot";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/alert/index.tsx
const Alert = ({ open: openProp, defaultOpen, onOpenChange, children }) => {
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	return /* @__PURE__ */ jsx(AlertProvider, {
		open,
		setOpen,
		headingId: useId(),
		descriptionId: useId(),
		containerId: useId(),
		children
	});
};
Alert.displayName = ALERT_NAME;
/**
* Use the form `<Alert dimmer={<AlertDimmer />} />`.
* Only used to apply custom styles to the Dimmer.
*/
const AlertDimmer = forwardRef(({ as, ...props }, ref) => {
	const { disableOutsideClickClose, onDismiss, dimmerRef } = useAlertContainerContext(ALERT_DIMMER_NAME);
	const { open, setOpen } = useAlertContext(ALERT_DIMMER_NAME);
	return /* @__PURE__ */ jsx(Box, {
		ref: composeRefs(ref, dimmerRef),
		as: as || "div",
		...props,
		"wds-ignore-dismissable-layer": "true",
		"data-role": "alert-dimmer",
		"data-status": open ? "open" : "close",
		onClick: composeEventHandlers(props.onClick, (e) => {
			e.preventDefault();
			if (!disableOutsideClickClose) {
				setOpen(false);
				onDismiss?.();
			}
		}),
		onPointerDown: composeEventHandlers(props.onPointerDown, (e) => {
			const target = e.target;
			if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
		}),
		sx: [alertDimmerStyle, props.sx]
	});
});
AlertDimmer.displayName = ALERT_DIMMER_NAME;
const AlertTrigger = forwardRef((props, ref) => {
	const { containerId, open, setOpen } = useAlertContext(ALERT_TRIGGER_NAME);
	return /* @__PURE__ */ jsx(Slot, {
		ref,
		"aria-controls": containerId,
		"aria-haspopup": "dialog",
		"aria-expanded": open,
		...props,
		onClick: composeEventHandlers(props.onClick, () => {
			setOpen(true);
		})
	});
});
AlertTrigger.displayName = ALERT_TRIGGER_NAME;
const AlertContainer = forwardRef(({ disableOutsideClickClose = false, disableEscapeKeyDownClose, disableRemoveScroll = false, disableFocusScope = false, disableAriaHiddenOthers = false, disablePortal, container, onDismiss, forceMount = false, wrapperProps, dimmer = /* @__PURE__ */ jsx(AlertDimmer, {}), children, ...props }, forwardedRef) => {
	const { open, setOpen, headingId, descriptionId, containerId } = useAlertContext(ALERT_CONTAINER_NAME);
	const dimmerRef = useRef(null);
	const containerRef = useRef(null);
	const composedRef = useComposedRefs(containerRef, forwardedRef);
	const { isPresent, ref } = useAnimationPresence(open || forceMount, {
		subtree: true,
		filter: (node) => {
			return node.isSameNode(containerRef.current) || node.isSameNode(dimmerRef.current);
		}
	});
	useEffect(() => {
		const element = containerRef.current;
		if (element && isPresent && !disableAriaHiddenOthers) return hideOthers(element);
	}, [isPresent, disableAriaHiddenOthers]);
	if (!isPresent) return null;
	return /* @__PURE__ */ jsx(AlertContainerProvider, {
		dimmerRef,
		disableOutsideClickClose,
		onDismiss,
		children: /* @__PURE__ */ jsx(PortalOrFragment, {
			container: disablePortal ? null : container,
			disablePortal,
			ref,
			children: /* @__PURE__ */ jsxs(FlexBox, {
				...wrapperProps,
				sx: [alertWrapperStyle, wrapperProps?.sx],
				"wds-ignore-dismissable-layer": "true",
				children: [dimmer, /* @__PURE__ */ jsx(FocusScope, {
					loop: true,
					trapped: true,
					disableFocusScope,
					children: /* @__PURE__ */ jsx(DismissableLayer, {
						onPointerDownOutside: (e) => {
							const originalEvent = e.detail.originalEvent;
							const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
							if (originalEvent.button === 2 || ctrlLeftClick || disableOutsideClickClose) e.preventDefault();
						},
						onFocusOutside: (e) => {
							if (disableOutsideClickClose) e.preventDefault();
						},
						onEscapeKeyDown: (e) => {
							if (disableEscapeKeyDownClose) e.preventDefault();
						},
						onDismiss: () => {
							onDismiss?.();
							setOpen(false);
						},
						role: "presentation",
						asChild: true,
						children: /* @__PURE__ */ jsx(RemoveScroll, {
							as: Slot,
							allowPinchZoom: true,
							enabled: !disableRemoveScroll,
							children: /* @__PURE__ */ jsx(Box, {
								ref: composedRef,
								role: "alertdialog",
								"aria-modal": !disableRemoveScroll || !disableFocusScope,
								"aria-describedby": descriptionId,
								"aria-labelledby": headingId,
								id: containerId,
								"data-status": open ? "open" : "close",
								...props,
								sx: [alertContainerStyle, props.sx],
								children
							})
						})
					})
				})]
			})
		})
	});
});
AlertContainer.displayName = ALERT_CONTAINER_NAME;
const AlertContent = forwardRef(({ children, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		flexDirection: "column",
		gap: "6px",
		...props,
		sx: [alertContentStyle, props.sx],
		children
	});
});
AlertContent.displayName = ALERT_CONTENT_NAME;
const AlertHeading = forwardRef(({ children, ...props }, ref) => {
	const { headingId } = useAlertContext(ALERT_HEADING_NAME);
	return /* @__PURE__ */ jsx(Typography, {
		"wds-component": "alert-title",
		variant: "headline1",
		weight: "bold",
		color: "semantic.label.normal",
		ref,
		as: "h2",
		id: headingId,
		...props,
		children
	});
});
AlertHeading.displayName = ALERT_HEADING_NAME;
const AlertDescription = forwardRef(({ children, ...props }, ref) => {
	const { descriptionId } = useAlertContext(ALERT_DESCRIPTION_NAME);
	return /* @__PURE__ */ jsx(Typography, {
		variant: "body2",
		weight: "regular",
		color: "semantic.label.alternative",
		"wds-component": "alert-description",
		ref,
		as: "p",
		id: descriptionId,
		...props,
		sx: [{
			wordBreak: "keep-all",
			overflowWrap: "anywhere"
		}, props.sx],
		children
	});
});
AlertDescription.displayName = ALERT_DESCRIPTION_NAME;
const AlertActionArea = forwardRef(({ children, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		flexDirection: "row",
		alignItems: "center",
		"wds-component": "alert-action-area",
		justifyContent: "flex-end",
		gap: "24px",
		ref,
		...props,
		sx: [alertActionStyle, props.sx],
		children
	});
});
AlertActionArea.displayName = ALERT_ACTION_AREA_NAME;
const AlertActionAreaButton = forwardRef(({ variant = "normal", ...props }, ref) => {
	const { setOpen } = useAlertContext(ALERT_ACTION_AREA_BUTTON_NAME);
	return /* @__PURE__ */ jsx(TextButton, {
		size: "medium",
		color: variant === "normal" ? "primary" : "assistive",
		ref,
		...props,
		onClick: composeEventHandlers(props.onClick, () => {
			setOpen(false);
		}),
		sx: variant === "negative" ? [(theme) => ({
			color: getColorByToken(theme, "semantic.status.negative"),
			["[wds-component=\"with-interaction\"]"]: { backgroundColor: getColorByToken(theme, "semantic.status.negative") }
		}), props.sx] : props.sx
	});
});
AlertActionAreaButton.displayName = ALERT_ACTION_AREA_BUTTON_NAME;
//#endregion
export { Alert, AlertActionArea, AlertActionAreaButton, AlertContainer, AlertContent, AlertDescription, AlertDimmer, AlertHeading, AlertTrigger };
