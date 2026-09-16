'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_portal_or_fragment_index = require("../portal-or-fragment/index.js");
const require_components_popper_constants = require("./constants.js");
const require_components_popper_contexts = require("./contexts.js");
const require_components_popper_helpers = require("./helpers.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_use_size = require("@radix-ui/react-use-size");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
let _floating_ui_react = require("@floating-ui/react");
//#region src/components/popper/index.tsx
const OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
};
const Popper = ({ children, __scopePopper = "Popper" }) => {
	const [anchor, setAnchor] = (0, react.useState)(null);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_contexts.PopperProvider, {
		scope: __scopePopper,
		anchor,
		onAnchorChange: setAnchor,
		children
	});
};
Popper.displayName = require_components_popper_constants.POPPER_NAME;
const PopperAnchor = (0, react.forwardRef)(({ __scopePopper = "Popper", ...props }, forwardedRef) => {
	const context = require_components_popper_contexts.usePopperContext(require_components_popper_constants.POPPER_ANCHOR_NAME, __scopePopper);
	const ref = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	(0, react.useEffect)(() => {
		context.onAnchorChange(ref.current);
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
		ref: composedRefs,
		...props
	});
});
PopperAnchor.displayName = require_components_popper_constants.POPPER_ANCHOR_NAME;
const PopperArrow = (0, react.forwardRef)(({ children, __scopePopper = "Popper", ...props }, ref) => {
	const { onArrowChange, side, arrowX, arrowY } = require_components_popper_contexts.usePopperContentContext(require_components_popper_constants.POPPER_ARROW_NAME, __scopePopper);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref: (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, onArrowChange),
		"wds-component": "popper-arrow",
		"aria-hidden": true,
		...props,
		sx: [{
			width: "fit-content",
			height: "fit-content"
		}, props.sx],
		style: {
			...props.style,
			position: "absolute",
			left: arrowX,
			top: arrowY,
			right: "",
			bottom: "",
			[OPPOSITE_SIDE[side]]: "0px",
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[side],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: `rotate(180deg)`,
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[side]
		},
		children: children ?? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: "svg",
			viewBox: "0 0 20 8",
			width: "20",
			height: "8",
			fill: "none",
			"aria-hidden": true,
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				d: "M8.07038 4.16544L6.41566 2.23494C5.71105 1.41289 5.35874 1.00187 4.93043 0.706626C4.5509 0.445007 4.129 0.250961 3.68337 0.133056C3.18047 0 2.63912 0 1.55642 0H19.4436C18.3609 0 17.8195 0 17.3166 0.133056C16.871 0.250961 16.4491 0.445007 16.0696 0.706626C15.6413 1.00186 15.289 1.41289 14.5843 2.23493L14.5843 2.23494L12.9296 4.16544L12.9296 4.16545C12.0926 5.14193 11.6741 5.63017 11.1761 5.80906C10.7391 5.96607 10.2609 5.96607 9.82386 5.80906C9.32586 5.63017 8.90737 5.14193 8.07038 4.16545L8.07038 4.16544Z",
				fill: "currentColor"
			})
		})
	});
});
PopperArrow.displayName = require_components_popper_constants.POPPER_ARROW_NAME;
const PopperContent = (0, react.forwardRef)(({ wrapperProps = {}, position = "bottom-center", offset: givenOffset = 10, referenceHidden = false, referenceHiddenOffsets, setContext, container, disablePortal, __scopePopper = "Popper", ...props }, ref) => {
	const theme = (0, _wanteddev_wds_engine.useTheme)();
	const context = require_components_popper_contexts.usePopperContext(require_components_popper_constants.POPPER_CONTENT_NAME, __scopePopper);
	const [arrow, setArrow] = (0, react.useState)(null);
	const arrowSize = (0, _radix_ui_react_use_size.useSize)(arrow);
	const [content, setContent] = (0, react.useState)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, (node) => setContent(node));
	const arrowWidth = Boolean(arrow) ? arrowSize?.width || 20 : 0;
	const arrowHeight = Boolean(arrow) ? arrowSize?.height || 8 : 0;
	const { refs, floatingStyles, placement: placementResult, middlewareData, isPositioned, context: floatingContext } = (0, _floating_ui_react.useFloating)({
		strategy: "fixed",
		placement: require_components_popper_helpers.getPlacementMapper(position),
		whileElementsMounted: _floating_ui_react.autoUpdate,
		elements: { reference: context.anchor },
		middleware: [
			(0, _floating_ui_react.offset)({
				mainAxis: givenOffset + arrowHeight,
				alignmentAxis: 0
			}),
			(0, _floating_ui_react.shift)({
				mainAxis: true,
				crossAxis: false,
				limiter: (0, _floating_ui_react.limitShift)()
			}),
			(0, _floating_ui_react.flip)(),
			(0, _floating_ui_react.size)(),
			arrow && (0, _floating_ui_react.arrow)(({ placement }) => {
				return {
					element: arrow,
					padding: placement.includes("left") || placement.includes("right") ? 8 : 6
				};
			}),
			require_components_popper_helpers.transformOrigin({
				arrowWidth,
				arrowHeight
			}),
			referenceHidden && (0, _floating_ui_react.hide)({ padding: referenceHiddenOffsets })
		]
	});
	const arrowX = middlewareData.arrow?.x;
	const arrowY = middlewareData.arrow?.y;
	const [contentZIndex, setContentZIndex] = (0, react.useState)();
	(0, react.useLayoutEffect)(() => {
		if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
	}, [content]);
	const [side, align] = require_components_popper_helpers.getSideAlignFromPlacement(placementResult);
	(0, react.useEffect)(() => {
		setContext?.(floatingContext);
	}, [setContext, floatingContext]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_portal_or_fragment_index.PortalOrFragment, {
		disablePortal,
		container,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			"wds-ignore-dismissable-layer": "true",
			ref: refs.setFloating,
			...wrapperProps,
			"data-side": side,
			"data-align": align,
			"data-placement": placementResult,
			style: {
				...wrapperProps.style,
				...floatingStyles,
				...isPositioned ? {
					top: "0",
					left: "0",
					transform: `translate(${require_components_popper_helpers.roundByDPR(floatingContext.x)}px,${require_components_popper_helpers.roundByDPR(floatingContext.y)}px)`
				} : { transform: "translate(0, -200%)" },
				minWidth: "max-content",
				zIndex: contentZIndex === "auto" ? theme.zIndex.modal : contentZIndex,
				...middlewareData.hide?.referenceHidden && {
					visibility: "hidden",
					pointerEvents: "none"
				}
			},
			dir: props.dir,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_contexts.PopperContentProvider, {
				scope: __scopePopper,
				side,
				onArrowChange: setArrow,
				arrowX,
				arrowY,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
					ref: composedRefs,
					...props
				})
			})
		})
	});
});
PopperContent.displayName = require_components_popper_constants.POPPER_CONTENT_NAME;
//#endregion
exports.Popper = Popper;
exports.PopperAnchor = PopperAnchor;
exports.PopperArrow = PopperArrow;
exports.PopperContent = PopperContent;
