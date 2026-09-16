'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_divider_index = require("../divider/index.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_list_index = require("../list/index.js");
const require_components_animation_presence_index = require("../animation-presence/index.js");
const require_components_accordion_constants = require("./constants.js");
const require_components_accordion_contexts = require("./contexts.js");
const require_components_accordion_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_use_previous = require("@radix-ui/react-use-previous");
let _radix_ui_react_use_size = require("@radix-ui/react-use-size");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/accordion/index.tsx
const Accordion = (0, react.forwardRef)(({ disableAnimation = false, defaultExpanded, expanded: originExpanded, onChange, disabled = false, divider = true, sx, children, ...props }, ref) => {
	const [expanded, setExpand] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originExpanded,
		defaultProp: defaultExpanded ?? false,
		onChange
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_accordion_contexts.AccordionProvider, {
		expanded,
		disabled,
		onExpandedChange: setExpand,
		summaryId: (0, react.useId)(),
		detailsId: (0, react.useId)(),
		disableAnimation,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
			ref,
			as: "div",
			...props,
			sx: [require_components_accordion_style.accordionStyle({
				disabled,
				expanded
			}), sx],
			children: [children, divider && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_divider_index.Divider, {
				"data-role": "accordion-divider",
				color: "semantic.line.normal.alternative",
				sx: require_components_accordion_style.accordionDividerStyle({ disableAnimation })
			})]
		})
	});
});
Accordion.displayName = require_components_accordion_constants.ACCORDION_NAME;
const AccordionSummary = (0, react.forwardRef)(({ disabled: givenDisabled, children, leadingContent, trailingContent, textProps, verticalPadding = "large", sx, ...props }, ref) => {
	const { expanded, disabled: accordionDisabled, onExpandedChange, detailsId, summaryId } = require_components_accordion_contexts.useAccordionContext(require_components_accordion_constants.ACCORDION_SUMMARY_NAME);
	const disabled = givenDisabled || accordionDisabled;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCell, {
		ref,
		"wds-component": "accordion-summary",
		as: "div",
		role: "button",
		verticalPadding,
		disabled,
		"aria-disabled": disabled,
		disableInteraction: disabled,
		"aria-expanded": expanded,
		"aria-controls": detailsId,
		tabIndex: disabled ? -1 : 0,
		id: summaryId,
		leadingContent,
		trailingContent: trailingContent ? trailingContent : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AccordionSummaryContent, {
			variant: "icon",
			rotate: true,
			"data-role": "accordion-summary-expand-icon",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronDownSmall, { sx: (theme) => ({ color: theme.semantic.label.normal }) })
		}),
		textProps: {
			variant: "body2",
			weight: "bold",
			...textProps,
			sx: [require_components_accordion_style.accordionSummaryTextStyle, textProps?.sx]
		},
		...props,
		sx: [require_components_accordion_style.accordionSummaryStyle({ disabled }), sx],
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
			if (disabled) return;
			onExpandedChange(!expanded);
			e.preventDefault();
		}),
		children
	});
});
AccordionSummary.displayName = require_components_accordion_constants.ACCORDION_SUMMARY_NAME;
const AccordionSummaryContent = (0, react.forwardRef)(({ sx, rotate = false, variant, ...props }, ref) => {
	const { expanded, disableAnimation } = require_components_accordion_contexts.useAccordionContext(require_components_accordion_constants.ACCORDION_SUMMARY_CONTENT_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCellContent, {
		ref,
		...props,
		variant,
		sx: [require_components_accordion_style.accordionSummaryContentStyle({
			variant,
			expanded,
			disableAnimation,
			rotate
		}), sx]
	});
});
AccordionSummaryContent.displayName = require_components_accordion_constants.ACCORDION_SUMMARY_CONTENT_NAME;
const AccordionDetails = (0, react.forwardRef)(({ sx, children, forceMount = false, wrapperSx, ...props }, forwardedRef) => {
	const { expanded, detailsId, summaryId, disableAnimation } = require_components_accordion_contexts.useAccordionContext(require_components_accordion_constants.ACCORDION_DETAILS_NAME);
	const ref = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	const [wrapperNode, setWrapperNode] = (0, react.useState)(null);
	const height = (0, _radix_ui_react_use_size.useSize)(wrapperNode)?.height;
	const prevExpanded = (0, _radix_ui_react_use_previous.usePrevious)(expanded);
	(0, react.useEffect)(() => {
		if (ref.current) ref.current.querySelectorAll("a, button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), details, [tabindex]").forEach((elm) => {
			const currentTabIndex = elm.getAttribute("tabindex");
			const prevTabIndex = elm.getAttribute("data-prev-tabindex");
			if (elm.closest("[wds-component=\"accordion-details\"]") !== ref.current) return;
			if (expanded) {
				if (prevTabIndex === "unset") elm.removeAttribute("tabindex");
				else if (prevTabIndex !== null) elm.setAttribute("tabindex", prevTabIndex);
				elm.removeAttribute("data-prev-tabindex");
			} else {
				if (prevTabIndex === null) elm.setAttribute("data-prev-tabindex", currentTabIndex || "unset");
				elm.setAttribute("tabindex", "-1");
			}
		});
	}, [expanded]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_animation_presence_index.AnimationPresence, {
		present: expanded || forceMount,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			ref: composedRefs,
			"wds-component": "accordion-details",
			"aria-labelledby": summaryId,
			"aria-hidden": !expanded,
			id: detailsId,
			...props,
			"data-status": expanded ? "open" : "close",
			sx: [require_components_accordion_style.accordionDetailsStyle({
				disableAnimation,
				shouldAnimate: prevExpanded !== expanded
			}), wrapperSx],
			style: {
				"--wds-accordion-height": `${height}px`,
				...props.style
			},
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				ref: setWrapperNode,
				"data-role": "accordion-details-wrapper",
				sx: [require_components_accordion_style.accordionDetailsWrapperStyle, sx],
				children
			})
		})
	});
});
AccordionDetails.displayName = require_components_accordion_constants.ACCORDION_DETAILS_NAME;
const AccordionDescription = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		ref,
		as: "p",
		variant: "label1",
		weight: "regular",
		color: "semantic.label.neutral",
		...props
	});
});
AccordionDescription.displayName = require_components_accordion_constants.ACCORDION_DESCRIPTION_NAME;
const AccordionContent = (0, react.forwardRef)(({ sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		"wds-component": "accordion-content",
		ref,
		...props,
		sx: [require_components_accordion_style.accordionContentStyle, sx]
	});
});
AccordionContent.displayName = require_components_accordion_constants.ACCORDION_CONTENT_NAME;
//#endregion
exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionDescription = AccordionDescription;
exports.AccordionDetails = AccordionDetails;
exports.AccordionSummary = AccordionSummary;
exports.AccordionSummaryContent = AccordionSummaryContent;
