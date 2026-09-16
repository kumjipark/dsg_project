import { BreakPoint, ResponsiveProps, SerializedStyles, Theme } from "@wanteddev/wds-engine";

//#region src/utils/internal/responsive-props.d.ts
declare const createEmptyResponsiveStyle: (responsive: ResponsiveProps<any>) => (theme: Theme) => SerializedStyles;
declare const createResponsiveStyle: <T extends ResponsiveProps<any>>(responsive: T, theme: Theme) => (cb: (param: T[keyof T], breakpoint?: keyof BreakPoint) => SerializedStyles) => SerializedStyles;
declare const getPreviousValue: <T extends object, K extends keyof T>(params: ResponsiveProps<T>, key: K, defaultValue: T[K], breakpoint: keyof BreakPoint) => T[K];
/**
 * Splits responsive breakpoint props by specified keys.
 * Returns `picked` containing only the specified keys and `rest` containing everything else.
 */
declare const splitResponsiveProps: <T extends Record<string, unknown>, K extends keyof T>(bp: T | undefined, keys: Array<K>) => {
  picked: Pick<T, K> | undefined;
  rest: Omit<T, K> | undefined;
};
//#endregion
export { createEmptyResponsiveStyle, createResponsiveStyle, getPreviousValue, splitResponsiveProps };