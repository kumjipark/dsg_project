import { ReactNode } from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/hooks/internal/use-scope-context.d.ts
type ScopeObject<T extends ReadonlyArray<string>> = { [K in T[number] as `__scope${Capitalize<K>}`]: string };
declare const createScope: <T extends ReadonlyArray<string>>(...components: T) => (scope: string) => ScopeObject<T>;
declare const createScopeContext: <ContextValueType extends object | null>(rootComponentName: string, defaultContext?: ContextValueType) => readonly [{
  (props: ContextValueType & {
    scope: string;
    children: ReactNode;
  }): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
}, (consumerName: string, scope: string) => ContextValueType];
type ScopedProps<T, Scope extends string> = T & { [key in `__scope${Scope}`]?: string };
//#endregion
export { ScopedProps, createScope, createScopeContext };