import { FallbackViewProps } from "./types.js";
import * as _$react from "react";
import { BreakPoint } from "@wanteddev/wds-engine";

//#region src/components/fallback-view/contexts.d.ts
type FallbackViewContextType = {
  platform?: Exclude<FallbackViewProps['platform'], undefined>;
  responsive?: Pick<FallbackViewProps, keyof BreakPoint>;
};
declare const FallbackViewProvider: _$react.FC<FallbackViewContextType & {
    children: React.ReactNode;
  }>, useFallbackViewContext: (consumerName: string) => FallbackViewContextType;
//#endregion
export { FallbackViewContextType, FallbackViewProvider, useFallbackViewContext };