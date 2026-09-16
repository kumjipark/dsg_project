import { TypographyProps } from "../typography/types.js";
import { ListCellContentProps, ListCellProps } from "../list/types.js";
import { ReactNode } from "react";
import { Merge, SxProp, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/accordion/types.d.ts
type AccordionProps = WithSxProps<{
  /** Whether the accordion is expanded. */expanded?: boolean; /** Whether the accordion is expanded by default. */
  defaultExpanded?: boolean; /** Whether to disable the accordion. */
  disabled?: boolean; /** Whether to show the divider. */
  divider?: boolean; /** Callback function when the expanded state changes. */
  onChange?: (expanded: boolean) => void; /** Whether to disable the expand animation. */
  disableAnimation?: boolean;
}>;
type AccordionSummaryProps = Merge<{
  /**
   * Content displayed in the leading area.
   * Pass an element wrapped with `AccordionSummaryContent`.
   */
  leadingContent?: ReactNode;
  /**
   * Content displayed in the trailing area.
   * Pass an element wrapped with `AccordionSummaryContent`.
   */
  trailingContent?: ReactNode;
}, Omit<ListCellProps, 'selected' | 'divider'>>;
type AccordionSummaryContentProps = Merge<{
  /** Rotates the content when expanded is true. */rotate?: boolean;
}, ListCellContentProps>;
type AccordionDetailsProps = WithSxProps<{
  /** Keeps the details mounted in the DOM even when expanded is false. */forceMount?: boolean; /** The styles for the wrapper. */
  wrapperSx?: SxProp;
}>;
type AccordionDescriptionProps = TypographyProps;
type AccordionContentProps = WithSxProps<{
  children?: ReactNode;
}>;
//#endregion
export { AccordionContentProps, AccordionDescriptionProps, AccordionDetailsProps, AccordionProps, AccordionSummaryContentProps, AccordionSummaryProps };