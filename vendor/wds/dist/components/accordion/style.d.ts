import { AccordionSummaryContentProps } from "./types.js";
import { SerializedStyles } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";

//#region src/components/accordion/style.d.ts
declare const accordionStyle: ({
  disabled,
  expanded
}: {
  disabled: boolean;
  expanded: boolean;
}) => SerializedStyles;
declare const accordionSummaryStyle: ({
  disabled
}: {
  disabled: boolean;
}) => SerializedStyles;
declare const accordionSummaryTextStyle: SerializedStyles;
declare const accordionSummaryContentStyle: ({
  expanded,
  disableAnimation,
  rotate,
  variant
}: {
  rotate: boolean;
  expanded: boolean;
  disableAnimation: boolean;
  variant: AccordionSummaryContentProps["variant"];
}) => SerializedStyles;
declare const accordionDetailsStyle: ({
  shouldAnimate,
  disableAnimation
}: {
  shouldAnimate: boolean;
  disableAnimation: boolean;
}) => SerializedStyles;
declare const accordionDetailsWrapperStyle: SerializedStyles;
declare const accordionDividerStyle: ({
  disableAnimation
}: {
  disableAnimation: boolean;
}) => SerializedStyles;
declare const accordionContentStyle: SerializedStyles;
//#endregion
export { accordionContentStyle, accordionDetailsStyle, accordionDetailsWrapperStyle, accordionDividerStyle, accordionStyle, accordionSummaryContentStyle, accordionSummaryStyle, accordionSummaryTextStyle };