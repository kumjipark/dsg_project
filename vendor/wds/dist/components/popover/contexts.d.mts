import { PopoverProps } from "./types.mjs";
import * as _$react from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/popover/contexts.d.ts
type PopoverContextValue = {
  contentId: string;
  triggerId: string;
  open: boolean;
  onOpenChange: Exclude<PopoverProps['onOpenChange'], undefined>;
};
declare const PopoverProvider: {
    (props: PopoverContextValue & {
      scope: string;
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, usePopoverContext: (consumerName: string, scope: string) => PopoverContextValue;
//#endregion
export { PopoverProvider, usePopoverContext };