import { darkTheme, lightTheme } from "../theme/index.mjs";

//#region src/types/index.d.ts
type Theme = typeof lightTheme | typeof darkTheme;
type BreakPoint = Theme['breakpoint'];
type Spacing = Theme['spacing'];
type MergeWithDot<T extends string> = T extends '' ? '' : `.${T}`;
type ObjectToNestedKeys<T> = (T extends object ? { [K in Exclude<keyof T, symbol>]: `${K}${MergeWithDot<ObjectToNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>] : '') extends infer D ? Extract<D, string> : never;
type ThemeToken = ObjectToNestedKeys<Theme>;
type PickThemeShadowToken<T extends string> = T extends `semantic.elevation.shadow.${infer _}` ? T : never;
type ThemeShadowToken = PickThemeShadowToken<ObjectToNestedKeys<Pick<Theme, 'semantic'>>>;
type ThemeColorsToken = ObjectToNestedKeys<Pick<Theme, 'atomic'>> | Exclude<ObjectToNestedKeys<Pick<Theme, 'semantic'>>, 'semantic.platform.ios.navigation' | ThemeShadowToken>;
type ThemeOpacityToken = ObjectToNestedKeys<Pick<Theme, 'opacity'>>;
//#endregion
export { BreakPoint, Spacing, Theme, ThemeColorsToken, ThemeOpacityToken, ThemeShadowToken, ThemeToken };