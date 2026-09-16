'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_text_button_contexts = require("../text-button/contexts.js");
const require_utils_internal_element = require("../../utils/internal/element.js");
const require_components_animation_presence_index = require("../animation-presence/index.js");
const require_hooks_internal_use_scope_context = require("../../hooks/internal/use-scope-context.js");
const require_components_popper_index = require("../popper/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_components_dismissable_layer_index = require("../dismissable-layer/index.js");
const require_components_focus_scope_index = require("../focus-scope/index.js");
const require_components_popover_constants = require("./constants.js");
const require_components_popover_contexts = require("./contexts.js");
const require_components_popover_style = require("./style.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/popover/index.tsx
const usePopoverScope = require_hooks_internal_use_scope_context.createScope("Popper");
const Popover = ({ open: originOpen, defaultOpen, onOpenChange, children, __scopePopover = "Popover" }) => {
	const triggerId = (0, react.useId)();
	const contentId = (0, react.useId)();
	const [open, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originOpen,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popover_contexts.PopoverProvider, {
		scope: __scopePopover,
		triggerId,
		contentId,
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.Popper, {
			...usePopoverScope(__scopePopover),
			children
		})
	});
};
Popover.displayName = require_components_popover_constants.POPOVER_NAME;
const PopoverTrigger = (0, react.forwardRef)(({ __scopePopover = "Popover", ...props }, ref) => {
	const { contentId, triggerId, open, onOpenChange } = require_components_popover_contexts.usePopoverContext(require_components_popover_constants.POPOVER_TRIGGER_NAME, __scopePopover);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.PopperAnchor, {
		...usePopoverScope(__scopePopover),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
			...props,
			"aria-haspopup": "dialog",
			"aria-expanded": open,
			"aria-controls": contentId,
			id: triggerId,
			ref,
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
				if (!open && !require_utils_internal_element.isElementDisabled(e.currentTarget)) onOpenChange(true);
			})
		})
	});
});
PopoverTrigger.displayName = require_components_popover_constants.POPOVER_TRIGGER_NAME;
const PopoverContent = (0, react.forwardRef)(({ position, offset = 10, loop = true, trapped = true, children, disablePortal, container, trappedContent = false, onMountAutoFocus, onUnmountAutoFocus, referenceHidden = false, referenceHiddenOffsets, setContext, wrapperProps, forceMount = false, as, onInteractOutside, onFocusOutside, onPointerDownOutside, onDismiss, disableOutsidePointerEvents = true, closeButton = false, action, variant = "normal", heading, disableFocusScope, __scopePopover = "Popover", ...props }, ref) => {
	const headingId = (0, react.useId)();
	const descriptionId = (0, react.useId)();
	const { contentId, open, onOpenChange } = require_components_popover_contexts.usePopoverContext(require_components_popover_constants.POPOVER_CONTENT_NAME, __scopePopover);
	const scopes = usePopoverScope(__scopePopover);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_animation_presence_index.AnimationPresence, {
		present: open || forceMount,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.PopperContent, {
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
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_focus_scope_index.FocusScope, {
				loop,
				trapped,
				trappedContent,
				disableFocusScope,
				onMountAutoFocus,
				onUnmountAutoFocus,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_dismissable_layer_index.DismissableLayer, {
					asChild: true,
					disableOutsidePointerEvents,
					onInteractOutside,
					onFocusOutside,
					onPointerDownOutside,
					onDismiss: () => {
						onOpenChange(false);
						onDismiss?.();
					},
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						role: "dialog",
						id: contentId,
						"aria-modal": disableOutsidePointerEvents || trapped,
						"aria-describedby": variant !== "custom" ? descriptionId : void 0,
						"aria-labelledby": variant !== "custom" && heading ? headingId : void 0,
						ref,
						as,
						gap: "4px",
						...props,
						sx: [require_components_popover_style.popoverStyle(variant), props.sx],
						children: variant === "custom" ? children : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
							"data-role": "popover-content-wrapper",
							flex: "1",
							flexDirection: heading ? "column" : "row",
							gap: heading ? "6px" : "4px",
							children: heading ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
								"data-role": "popover-content-heading-wrapper",
								gap: "4px",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
									id: headingId,
									variant: "body2",
									weight: "bold",
									color: "semantic.label.normal",
									"data-role": "popover-content-heading",
									sx: { width: "100%" },
									children: heading
								}), closeButton && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
									"data-role": "popover-content-close-button",
									flexShrink: "0",
									alignItems: "center",
									justifyContent: "center",
									sx: {
										padding: "3px",
										height: "fit-content"
									},
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
										size: 16,
										onClick: () => onOpenChange(false),
										"aria-label": "Close dialog",
										sx: (theme) => ({ opacity: theme.opacity[61] }),
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconClose, {})
									})
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
							})] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
							}), closeButton && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
								"data-role": "popover-content-close-button",
								flexShrink: "0",
								alignItems: "center",
								justifyContent: "center",
								sx: {
									padding: "3px",
									height: "fit-content"
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
									size: 16,
									onClick: () => onOpenChange(false),
									"aria-label": "Close dialog",
									sx: (theme) => ({ opacity: theme.opacity[61] }),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconClose, {})
								})
							})] })
						}), action && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_contexts.TextButtonProvider, {
							assistive: "semantic.label.alternative",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
								"data-role": "popover-content-action-wrapper",
								flexShrink: "0",
								alignItems: "flex-end",
								flex: "1",
								flexDirection: "column",
								sx: { marginTop: heading ? "12px" : "16px" },
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
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
PopoverTrigger.displayName = require_components_popover_constants.POPOVER_TRIGGER_NAME;
//#endregion
exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
