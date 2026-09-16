'use client';
import { Divider } from "../divider/index.mjs";
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { ListCell, ListCellContent } from "../list/index.mjs";
import { AnimationPresence } from "../animation-presence/index.mjs";
import { ACCORDION_CONTENT_NAME, ACCORDION_DESCRIPTION_NAME, ACCORDION_DETAILS_NAME, ACCORDION_NAME, ACCORDION_SUMMARY_CONTENT_NAME, ACCORDION_SUMMARY_NAME } from "./constants.mjs";
import { AccordionProvider, useAccordionContext } from "./contexts.mjs";
import { accordionContentStyle, accordionDetailsStyle, accordionDetailsWrapperStyle, accordionDividerStyle, accordionStyle, accordionSummaryContentStyle, accordionSummaryStyle, accordionSummaryTextStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useId, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconChevronDownSmall } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { usePrevious } from "@radix-ui/react-use-previous";
import { useSize } from "@radix-ui/react-use-size";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/accordion/index.tsx
const Accordion = forwardRef(({ disableAnimation = false, defaultExpanded, expanded: originExpanded, onChange, disabled = false, divider = true, sx, children, ...props }, ref) => {
	const [expanded, setExpand] = useControllableState({
		prop: originExpanded,
		defaultProp: defaultExpanded ?? false,
		onChange
	});
	return /* @__PURE__ */ jsx(AccordionProvider, {
		expanded,
		disabled,
		onExpandedChange: setExpand,
		summaryId: useId(),
		detailsId: useId(),
		disableAnimation,
		children: /* @__PURE__ */ jsxs(Box, {
			ref,
			as: "div",
			...props,
			sx: [accordionStyle({
				disabled,
				expanded
			}), sx],
			children: [children, divider && /* @__PURE__ */ jsx(Divider, {
				"data-role": "accordion-divider",
				color: "semantic.line.normal.alternative",
				sx: accordionDividerStyle({ disableAnimation })
			})]
		})
	});
});
Accordion.displayName = ACCORDION_NAME;
const AccordionSummary = forwardRef(({ disabled: givenDisabled, children, leadingContent, trailingContent, textProps, verticalPadding = "large", sx, ...props }, ref) => {
	const { expanded, disabled: accordionDisabled, onExpandedChange, detailsId, summaryId } = useAccordionContext(ACCORDION_SUMMARY_NAME);
	const disabled = givenDisabled || accordionDisabled;
	return /* @__PURE__ */ jsx(ListCell, {
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
		trailingContent: trailingContent ? trailingContent : /* @__PURE__ */ jsx(AccordionSummaryContent, {
			variant: "icon",
			rotate: true,
			"data-role": "accordion-summary-expand-icon",
			children: /* @__PURE__ */ jsx(IconChevronDownSmall, { sx: (theme) => ({ color: theme.semantic.label.normal }) })
		}),
		textProps: {
			variant: "body2",
			weight: "bold",
			...textProps,
			sx: [accordionSummaryTextStyle, textProps?.sx]
		},
		...props,
		sx: [accordionSummaryStyle({ disabled }), sx],
		onClick: composeEventHandlers(props.onClick, (e) => {
			if (disabled) return;
			onExpandedChange(!expanded);
			e.preventDefault();
		}),
		children
	});
});
AccordionSummary.displayName = ACCORDION_SUMMARY_NAME;
const AccordionSummaryContent = forwardRef(({ sx, rotate = false, variant, ...props }, ref) => {
	const { expanded, disableAnimation } = useAccordionContext(ACCORDION_SUMMARY_CONTENT_NAME);
	return /* @__PURE__ */ jsx(ListCellContent, {
		ref,
		...props,
		variant,
		sx: [accordionSummaryContentStyle({
			variant,
			expanded,
			disableAnimation,
			rotate
		}), sx]
	});
});
AccordionSummaryContent.displayName = ACCORDION_SUMMARY_CONTENT_NAME;
const AccordionDetails = forwardRef(({ sx, children, forceMount = false, wrapperSx, ...props }, forwardedRef) => {
	const { expanded, detailsId, summaryId, disableAnimation } = useAccordionContext(ACCORDION_DETAILS_NAME);
	const ref = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const [wrapperNode, setWrapperNode] = useState(null);
	const height = useSize(wrapperNode)?.height;
	const prevExpanded = usePrevious(expanded);
	useEffect(() => {
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
	return /* @__PURE__ */ jsx(AnimationPresence, {
		present: expanded || forceMount,
		children: /* @__PURE__ */ jsx(Box, {
			ref: composedRefs,
			"wds-component": "accordion-details",
			"aria-labelledby": summaryId,
			"aria-hidden": !expanded,
			id: detailsId,
			...props,
			"data-status": expanded ? "open" : "close",
			sx: [accordionDetailsStyle({
				disableAnimation,
				shouldAnimate: prevExpanded !== expanded
			}), wrapperSx],
			style: {
				"--wds-accordion-height": `${height}px`,
				...props.style
			},
			children: /* @__PURE__ */ jsx(FlexBox, {
				ref: setWrapperNode,
				"data-role": "accordion-details-wrapper",
				sx: [accordionDetailsWrapperStyle, sx],
				children
			})
		})
	});
});
AccordionDetails.displayName = ACCORDION_DETAILS_NAME;
const AccordionDescription = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(Typography, {
		ref,
		as: "p",
		variant: "label1",
		weight: "regular",
		color: "semantic.label.neutral",
		...props
	});
});
AccordionDescription.displayName = ACCORDION_DESCRIPTION_NAME;
const AccordionContent = forwardRef(({ sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		"wds-component": "accordion-content",
		ref,
		...props,
		sx: [accordionContentStyle, sx]
	});
});
AccordionContent.displayName = ACCORDION_CONTENT_NAME;
//#endregion
export { Accordion, AccordionContent, AccordionDescription, AccordionDetails, AccordionSummary, AccordionSummaryContent };
