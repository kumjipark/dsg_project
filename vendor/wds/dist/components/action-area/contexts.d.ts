import { ActionAreaProps } from "./types.js";
import * as _$react from "react";

//#region src/components/action-area/contexts.d.ts
type ActionAreaContextValue = Pick<ActionAreaProps, 'variant'>;
declare const ActionAreaProvider: _$react.FC<ActionAreaContextValue & {
    children: React.ReactNode;
  }>, useActionAreaContext: (consumerName: string) => ActionAreaContextValue;
//#endregion
export { ActionAreaProvider, useActionAreaContext };