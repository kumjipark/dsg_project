'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { TextButtonProvider } from "../text-button/contexts.mjs";
import { isElementDisabled } from "../../utils/internal/element.mjs";
import { AnimationPresence } from "../animation-presence/index.mjs";
import { createScope } from "../../hooks/internal/use-scope-context.mjs";
import { Popper, PopperAnchor, PopperContent } from "../popper/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { DismissableLayer } from "../dismissable-layer/index.mjs";
import { FocusScope } from "../focus-scope/index.mjs";
import { POPOVER_CONTENT_NAME, POPOVER_NAME, POPOVER_TRIGGER_NAME } from "./constants.mjs";
import { PopoverProvider, usePopoverContext } from "./contexts.mjs";
import { popoverStyle } from "./style.mjs";
import { forwardRef, useId } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconClose } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { Slot } from "@radix-ui/react-slot";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/popover/index.tsx
const usePopoverScope = createScope("Popper");
const Popover = ({ open: originOpen, defaultOpen, onOpenChange, children, __scopePopover = "Popover" }) => {
	const triggerId = useId();
	const contentId = useId();
	const [open, setOpen] = useControllableState({
		prop: originOpen,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	return /* @__PURE__ */ jsx(PopoverProvider, {
		scope: __scopePopover,
		triggerId,
		contentId,
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ jsx(Popper, {
			...usePopoverScope(__scopePopover),
			children
		})
	});
};
Popover.displayName = POPOVER_NAME;
const PopoverTrigger = forwardRef(({ __scopePopover = "Popover", ...props }, ref) => {
	const { contentId, triggerId, open, onOpenChange } = usePopoverContext(POPOVER_TRIGGER_NAME, __scopePopover);
	return /* @__PURE__ */ jsx(PopperAnchor, {
		...usePopoverScope(__scopePopover),
		children: /* @__PURE__ */ jsx(Slot, {
			...props,
			"aria-haspopup": "dialog",
			"aria-expanded": open,
			"aria-controls": contentId,
			id: triggerId,
			ref,
			onClick: composeEventHandlers(props.onClick, (e) => {
				if (!open && !isElementDisabled(e.currentTarget)) onOpenChange(true);
			})
		})
	});
});
PopoverTrigger.displayName = POPOVER_TRIGGER_NAME;
const PopoverContent = forwardRef(({ position, offset = 10, loop = true, trapped = true, children, disablePortal, container, trappedContent = false, onMountAutoFocus, onUnmountAutoFocus, referenceHidden = false, referenceHiddenOffsets, setContext, wrapperProps, forceMount = false, as, onInteractOutside, onFocusOutside, onPointerDownOutside, onDismiss, disableOutsidePointerEvents = true, closeButton = false, action, variant = "normal", heading, disableFocusScope, __scopePopover = "Popover", ...props }, ref) => {
	const headingId = useId();
	const descriptionId = useId();
	const { contentId, open, onOpenChange } = usePopoverContext(POPOVER_CONTENT_NAME, __scopePopover);
	const scopes = usePopoverScope(__scopePopover);
	return /* @__PURE__ */ jsx(AnimationPresence, {
		present: open || forceMount,
		children: /* @__PURE__ */ jsx(PopperContent, {
			...scopes,
			"data-status": open ? "open" : "close",
			position,
			offset,
			disablePortal,
			container,
			referenceHidden,
			referenceHiddenOffsets,
			setContext,
			wrapperProps,
			children: /* @__PURE__ */ jsx(FocusScope, {
				loop,
				trapped,
				trappedContent,
				disableFocusScope,
				onMountAutoFocus,
				onUnmountAutoFocus,
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: true,
					disableOutsidePointerEvents,
					onInteractOutside,
					onFocusOutside,
					onPointerDownOutside,
					onDismiss: () => {
						onOpenChange(false);
						onDismiss?.();
					},
					children: /* @__PURE__ */ jsx(FlexBox, {
						role: "dialog",
						id: contentId,
						"aria-modal": disableOutsidePointerEvents || trapped,
						"aria-describedby": variant !== "custom" ? descriptionId : void 0,
						"aria-labelledby": variant !== "custom" && heading ? headingId : void 0,
						ref,
						as,
						gap: "4px",
						...props,
						sx: [popoverStyle(variant), props.sx],
						children: variant === "custom" ? children : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(FlexBox, {
							"data-role": "popover-content-wrapper",
							flex: "1",
							flexDirection: heading ? "column" : "row",
							gap: heading ? "6px" : "4px",
							children: heading ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(FlexBox, {
								"data-role": "popover-content-heading-wrapper",
								gap: "4px",
								children: [/* @__PURE__ */ jsx(Typography, {
									id: headingId,
									variant: "body2",
									weight: "bold",
									color: "semantic.label.normal",
									"data-role": "popover-content-heading",
									sx: { width: "100%" },
									children: heading
								}), closeButton && /* @__PURE__ */ jsx(FlexBox, {
									"data-role": "popover-content-close-button",
									flexShrink: "0",
									alignItems: "center",
									justifyContent: "center",
									sx: {
										padding: "3px",
										height: "fit-content"
									},
									children: /* @__PURE__ */ jsx(IconButton, {
										size: 16,
										onClick: () => onOpenChange(false),
										"aria-label": "Close dialog",
										sx: (theme) => ({ opacity: theme.opacity[61] }),
										children: /* @__PURE__ */ jsx(IconClose, {})
									})
								})]
							}), /* @__PURE__ */ jsx(Typography, {
								id: descriptionId,
								variant: "label2",
								weight: "medium",
								color: "semantic.label.neutral",
								"data-role": "popover-content-description",
								sx: {
									padding: "2px 0px",
									width: "100%"
								},
								children
							})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Typography, {
								id: descriptionId,
								variant: "label2",
								weight: "medium",
								color: "semantic.label.neutral",
								"data-role": "popover-content-description",
								sx: {
									padding: "2px 0px",
									width: "100%"
								},
								children
							}), closeButton && /* @__PURE__ */ jsx(FlexBox, {
								"data-role": "popover-content-close-button",
								flexShrink: "0",
								alignItems: "center",
								justifyContent: "center",
								sx: {
									padding: "3px",
									height: "fit-content"
								},
								children: /* @__PURE__ */ jsx(IconButton, {
									size: 16,
									onClick: () => onOpenChange(false),
									"aria-label": "Close dialog",
									sx: (theme) => ({ opacity: theme.opacity[61] }),
									children: /* @__PURE__ */ jsx(IconClose, {})
								})
							})] })
						}), action && /* @__PURE__ */ jsx(TextButtonProvider, {
							assistive: "semantic.label.alternative",
							children: /* @__PURE__ */ jsx(FlexBox, {
								"data-role": "popover-content-action-wrapper",
								flexShrink: "0",
								alignItems: "flex-end",
								flex: "1",
								flexDirection: "column",
								sx: { marginTop: heading ? "12px" : "16px" },
								children: /* @__PURE__ */ jsx(FlexBox, {
									"data-role": "popover-content-action",
									alignItems: "center",
									gap: "16px",
									sx: { height: "20px" },
									children: action
								})
							})
						})] })
					})
				})
			})
		})
	});
});
PopoverTrigger.displayName = POPOVER_TRIGGER_NAME;
//#endregion
export { Popover, PopoverContent, PopoverTrigger };
