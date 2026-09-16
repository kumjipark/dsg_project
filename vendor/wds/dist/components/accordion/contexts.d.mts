import * as _$react from "react";

//#region src/components/accordion/contexts.d.ts
type AccordionContextType = {
  expanded: boolean;
  disabled: boolean;
  onExpandedChange: (expanded: boolean) => void;
  summaryId: string;
  detailsId: string;
  disableAnimation: boolean;
};
declare const AccordionProvider: _$react.FC<AccordionContextType & {
    children: React.ReactNode;
  }>, useAccordionContext: (consumerName: string) => AccordionContextType;
//#endregion
export { AccordionProvider, useAccordionContext };