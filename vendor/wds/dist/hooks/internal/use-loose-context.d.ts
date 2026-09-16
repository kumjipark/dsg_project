import { ReactNode } from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/hooks/internal/use-loose-context.d.ts
declare const createLooseContext: <ContextValueType extends object | null>(rootComponentName: string, defaultContext?: ContextValueType) => readonly [{
  (props: ContextValueType & {
    children: ReactNode;
  }): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
}, () => ContextValueType | undefined];
//#endregion
export { createLooseContext as default };