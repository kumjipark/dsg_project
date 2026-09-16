import { TypographyProps } from "../typography/types.js";
import { AccordionContentProps, AccordionDescriptionProps, AccordionDetailsProps, AccordionProps, AccordionSummaryContentProps, AccordionSummaryProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/accordion/index.d.ts
declare const Accordion: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<AccordionProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const AccordionSummary: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<AccordionSummaryProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const AccordionSummaryContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<AccordionSummaryContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const AccordionDetails: PolymorphicComponentInternal<AccordionDetailsProps, "div">;
declare const AccordionDescription: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TypographyProps, "p">, "ref"> & _$react.RefAttributes<HTMLParagraphElement>>;
declare const AccordionContent: PolymorphicComponentInternal<AccordionContentProps, "div">;
//#endregion
export { Accordion, AccordionContent, type AccordionContentProps, AccordionDescription, type AccordionDescriptionProps, AccordionDetails, type AccordionDetailsProps, type AccordionProps, AccordionSummary, AccordionSummaryContent, type AccordionSummaryContentProps, type AccordionSummaryProps };