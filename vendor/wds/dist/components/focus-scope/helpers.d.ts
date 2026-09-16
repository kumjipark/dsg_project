//#region src/components/focus-scope/helpers.d.ts
/**
 * Most of this file is based on code from @radix-ui/react-focus-scope.
 * MIT Licensed, Copyright (c) 2022 WorkOS

 * https://github.com/radix-ui/primitives/blob/main/packages/react/focus-scope/src/FocusScope.tsx
 */
type FocusableTarget = HTMLElement | {
  focus(): void;
};
declare const focus: (element?: FocusableTarget | null, {
  select
}?: {
  select?: boolean | undefined;
}) => void;
declare const focusFirst: (candidates: Array<HTMLElement>, {
  select
}?: {
  select?: boolean | undefined;
}) => void;
declare const getTabbableEdges: (container: HTMLElement) => readonly [HTMLElement | undefined, HTMLElement | undefined];
declare const getTabbableCandidates: (container: HTMLElement) => HTMLElement[];
declare const getTabbableForFirstFocus: (nodes: Array<HTMLElement>) => HTMLElement[];
declare const arrayRemove: <T>(array: Array<T>, item: T) => T[];
declare const removeLinks: (items: Array<HTMLElement>) => HTMLElement[];
//#endregion
export { arrayRemove, focus, focusFirst, getTabbableCandidates, getTabbableEdges, getTabbableForFirstFocus, removeLinks };