'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_animation_presence_index = require("../animation-presence/index.js");
const require_hooks_internal_use_scope_context = require("../../hooks/internal/use-scope-context.js");
const require_components_popper_index = require("../popper/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_components_dismissable_layer_index = require("../dismissable-layer/index.js");
const require_components_no_ssr_index = require("../no-ssr/index.js");
const require_components_tooltip_constants = require("./constants.js");
const require_components_tooltip_contexts = require("./contexts.js");
const require_components_tooltip_style = require("./style.js");
const require_components_tooltip_hooks = require("./hooks.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/tooltip/index.tsx
const useTooltipScope = require_hooks_internal_use_scope_context.createScope("Popper");
const TooltipGroup = ({ children, skipDelayDuration = 350 }) => {
	const isOpenWithoutDelayRef = (0, react.useRef)(false);
	const skipDelayTimerRef = (0, react.useRef)(0);
	(0, react.useEffect)(() => {
		const skipDelayTimer = skipDelayTimerRef.current;
		return () => window.clearTimeout(skipDelayTimer);
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_tooltip_contexts.TooltipGroupProvider, {
		onOpen: (0, react.useCallback)(() => {
			window.clearTimeout(skipDelayTimerRef.current);
			isOpenWithoutDelayRef.current = true;
		}, []),
		onClose: (0, react.useCallback)(() => {
			window.clearTimeout(skipDelayTimerRef.current);
			skipDelayTimerRef.current = window.setTimeout(() => {
				isOpenWithoutDelayRef.current = false;
			}, skipDelayDuration);
		}, [skipDelayDuration]),
		isOpenWithoutDelayRef,
		children
	});
};
TooltipGroup.displayName = require_components_tooltip_constants.TOOLTIP_GROUP_NAME;
const Tooltip = ({ mode = "hover", open: originOpen, defaultOpen = mode === "always", onOpenChange, children, enterDelay = 200, leaveDelay = 250, disableCloseOnPointDown = false, disableOpenOnFocus = false, enableOpenOnFocusVisibleOnly = false }) => {
	const containerId = (0, react.useId)();
	const { triggerRef, containerRef, open, handleMouseOver, handleMouseLeave, handleFocus, handleBlur, handleMouseDown, handleDismiss, handleClick, handlePointerDownOutside } = require_components_tooltip_hooks.useTooltip({
		mode,
		open: originOpen,
		defaultOpen,
		onOpenChange,
		enterDelay,
		leaveDelay,
		disableCloseOnPointDown,
		disableOpenOnFocus,
		enableOpenOnFocusVisibleOnly
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_tooltip_contexts.TooltipProvider, {
		triggerRef,
		containerRef,
		mode,
		containerId,
		open,
		handleMouseOver,
		handleMouseLeave,
		handleFocus,
		handleBlur,
		handleMouseDown,
		handleDismiss,
		handleClick,
		handlePointerDownOutside,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.Popper, {
			...useTooltipScope("Tooltip"),
			children
		})
	});
};
Tooltip.displayName = require_components_tooltip_constants.TOOLTIP_NAME;
const TooltipTrigger = (0, react.forwardRef)((props, ref) => {
	const { triggerRef, containerId, open, handleMouseOver, handleMouseLeave, handleFocus, handleBlur, handleMouseDown, handleClick } = require_components_tooltip_contexts.useTooltipContext(require_components_tooltip_constants.TOOLTIP_TRIGGER_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.PopperAnchor, {
		ref: triggerRef,
		...useTooltipScope("Tooltip"),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
			"aria-describedby": open ? containerId : void 0,
			...props,
			ref,
			onMouseOver: (0, _radix_ui_primitive.composeEventHandlers)(props.onMouseOver, handleMouseOver),
			onMouseLeave: (0, _radix_ui_primitive.composeEventHandlers)(props.onMouseLeave, handleMouseLeave),
			onFocus: (0, _radix_ui_primitive.composeEventHandlers)(props.onFocus, handleFocus),
			onBlur: (0, _radix_ui_primitive.composeEventHandlers)(props.onBlur, handleBlur),
			onMouseDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onMouseDown, handleMouseDown),
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, handleClick)
		})
	});
});
TooltipTrigger.displayName = require_components_tooltip_constants.TOOLTIP_TRIGGER_NAME;
const TooltipContent = (0, react.forwardRef)(({ action, children, position = "top-center", offset = 4, container, disablePortal, closeButton, referenceHidden = false, referenceHiddenOffsets, setContext, forceMount = false, shortcut, size = "medium", xs, sm, md, lg, xl, as, sx, ...props }, ref) => {
	const scopes = useTooltipScope("Tooltip");
	const { containerRef, containerId, mode, open, handleMouseOver, handleMouseLeave, handleFocus, handleBlur, handleDismiss, handlePointerDownOutside } = require_components_tooltip_contexts.useTooltipContext(require_components_tooltip_constants.TOOLTIP_CONTENT_NAME);
	const id = (0, react.useId)();
	const composedRef = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, containerRef);
	const isAlways = mode === "always";
	const Component = as ?? _radix_ui_react_slot.Slot;
	const theme = (0, _wanteddev_wds_engine.useTheme)();
	const mediumArrowMaskId = (0, react.useId)();
	const smallArrowMaskId = (0, react.useId)();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_animation_presence_index.AnimationPresence, {
		present: open || forceMount,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TooltipContentWrapper, {
			isAlways,
			onFocusOutside: (e) => e.preventDefault(),
			onPointerDownOutside: handlePointerDownOutside,
			onDismiss: handleDismiss,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.PopperContent, {
				...scopes,
				position,
				role: "tooltip",
				"data-status": open ? "open" : "close",
				id: containerId,
				"aria-labelledby": id,
				container,
				disablePortal,
				offset,
				referenceHidden,
				referenceHiddenOffsets,
				setContext,
				wrapperProps: {
					onMouseOver: open ? handleMouseOver : void 0,
					onMouseLeave: handleMouseLeave,
					onFocus: handleFocus,
					onBlur: handleBlur
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Component, {
					ref: composedRef,
					...props,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						sx: [require_components_tooltip_style.tooltipWrapperStyle({
							size,
							xs,
							sm,
							md,
							lg,
							xl
						}), sx],
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
							"data-role": "tooltip-content",
							sx: require_components_tooltip_style.tooltipContentStyle,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
								gap: "8px",
								sx: { zIndex: 1 },
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
									flexDirection: "column",
									gap: "6px",
									"data-role": "tooltip-content-text-wrapper",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
										gap: "4px",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
											id,
											as: "span",
											"data-role": "tooltip-content-text",
											sx: {
												wordBreak: "keep-all",
												overflowWrap: "anywhere"
											},
											children
										}), shortcut && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
											as: "span",
											"data-role": "tooltip-content-shortcut",
											sx: require_components_tooltip_style.tooltipContentShortcutStyle,
											children: shortcut
										})]
									}), Boolean(action) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
										"data-role": "tooltip-content-action",
										alignItems: "center",
										sx: { height: 20 },
										children: action
									})]
								}), closeButton && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
									sx: { height: "fit-content" },
									flexShrink: "0",
									alignItems: "center",
									"data-role": "tooltip-content-close-button-wrapper",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
										"data-role": "tooltip-content-close-button",
										variant: "normal",
										size: 16,
										"aria-label": "Close tooltip",
										onClick: handleDismiss,
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconClose, {})
									})
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_popper_index.PopperArrow, {
								...scopes,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
									as: "svg",
									"data-role": "tooltip-arrow-medium",
									viewBox: "0 0 20 8",
									width: "20",
									height: "8",
									fill: "none",
									xmlns: "http://www.w3.org/2000/svg",
									"aria-hidden": true,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("mask", {
										id: mediumArrowMaskId,
										maskUnits: "userSpaceOnUse",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
											d: "M8.07038 4.16544L6.41566 2.23494C5.71105 1.41289 5.35874 1.00187 4.93043 0.706626C4.5509 0.445007 4.129 0.250961 3.68337 0.133056C3.18047 0 2.63912 0 1.55642 0H19.4436C18.3609 0 17.8195 0 17.3166 0.133056C16.871 0.250961 16.4491 0.445007 16.0696 0.706626C15.6413 1.00186 15.289 1.41289 14.5843 2.23493L14.5843 2.23494L12.9296 4.16544L12.9296 4.16545C12.0926 5.14193 11.6741 5.63017 11.1761 5.80906C10.7391 5.96607 10.2609 5.96607 9.82386 5.80906C9.32586 5.63017 8.90737 5.14193 8.07038 4.16545L8.07038 4.16544Z",
											fill: "white"
										})
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
										mask: `url(#${mediumArrowMaskId})`,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
											opacity: "0.88",
											width: "20",
											height: "8",
											fill: theme.semantic.inverse.background
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
											opacity: "0.05",
											width: "20",
											height: "8",
											fill: theme.semantic.primary.normal
										})]
									})]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
									as: "svg",
									"data-role": "tooltip-arrow-small",
									viewBox: "0 0 14 6",
									width: "14",
									height: "6",
									fill: "none",
									xmlns: "http://www.w3.org/2000/svg",
									"aria-hidden": true,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("mask", {
										id: smallArrowMaskId,
										maskUnits: "userSpaceOnUse",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
											d: "M5.58 3.44L4.92 2.56C4.216 1.62134 3.864 1.15201 3.4179 0.813504C3.02279 0.513696 2.57537 0.289985 2.09846 0.153782C1.55999 0 0.973329 0 -0.2 0H15.2C14.0267 0 13.44 0 12.9015 0.153782C12.4246 0.289985 11.9772 0.513696 11.5821 0.813504C11.136 1.152 10.784 1.62133 10.08 2.55999L10.08 2.56L9.42 3.44L9.41999 3.44001C8.76864 4.30848 8.44296 4.74271 8.04371 4.89799C7.69399 5.034 7.30601 5.034 6.95629 4.89799C6.55703 4.74271 6.23136 4.30848 5.58 3.44Z",
											fill: "white"
										})
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
										mask: `url(#${smallArrowMaskId})`,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
											opacity: "0.88",
											width: "14",
											height: "6",
											fill: theme.semantic.inverse.background
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
											opacity: "0.05",
											width: "14",
											height: "6",
											fill: theme.semantic.primary.normal
										})]
									})]
								})]
							})]
						})
					})
				})
			})
		})
	});
});
TooltipContent.displayName = require_components_tooltip_constants.TOOLTIP_CONTENT_NAME;
const TooltipContentWrapper = (0, react.forwardRef)(({ isAlways, onFocusOutside, onPointerDownOutside, onDismiss, ...props }, ref) => {
	if (isAlways) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_no_ssr_index.NoSsr, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
		ref,
		...props
	}) });
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_dismissable_layer_index.DismissableLayer, {
		ref,
		asChild: true,
		disableOutsidePointerEvents: false,
		onFocusOutside,
		onPointerDownOutside,
		onDismiss,
		...props
	});
});
TooltipContentWrapper.displayName = require_components_tooltip_constants.TOOLTIP_CONTENT_WRAPPER_NAME;
//#endregion
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipGroup = TooltipGroup;
exports.TooltipTrigger = TooltipTrigger;
