import { respondMore } from "../media.mjs";
import { css } from "@wanteddev/wds-engine";
import objectPath from "object-path";
//#region src/utils/internal/responsive-props.ts
const order = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
];
const createEmptyResponsiveStyle = (responsive) => (theme) => css`
    ${createResponsiveStyle(responsive, theme)((params) => css`
        ${params?.sx}
      `)}
  `;
const createResponsiveStyle = (responsive, theme) => (cb) => {
	return css`
      ${Object.entries(responsive).sort(([a], [b]) => {
		return order.findIndex((v) => v === a) - order.findIndex((v) => v === b);
	}).map(([bp, value]) => {
		if (!value || !Object.values(value).some((v) => v !== void 0)) return;
		switch (bp) {
			case "xs": return css`
                ${respondMore(theme.breakpoint.xs)} {
                  ${cb(value, "xs")}
                }
              `;
			case "sm": return css`
                ${respondMore(theme.breakpoint.sm)} {
                  ${cb(value, "sm")}
                }
              `;
			case "md": return css`
                ${respondMore(theme.breakpoint.md)} {
                  ${cb(value, "md")}
                }
              `;
			case "lg": return css`
                ${respondMore(theme.breakpoint.lg)} {
                  ${cb(value, "lg")}
                }
              `;
			case "xl": return css`
                ${respondMore(theme.breakpoint.xl)} {
                  ${cb(value, "xl")}
                }
              `;
		}
	})};
    `;
};
const getPreviousValue = (params, key, defaultValue, breakpoint) => {
	switch (breakpoint) {
		case "xl": return objectPath.get(params.xl || {}, key) ?? objectPath.get(params.lg || {}, key) ?? objectPath.get(params.md || {}, key) ?? objectPath.get(params.sm || {}, key) ?? objectPath.get(params.xs || {}, key) ?? defaultValue;
		case "lg": return objectPath.get(params.lg || {}, key) ?? objectPath.get(params.md || {}, key) ?? objectPath.get(params.sm || {}, key) ?? objectPath.get(params.xs || {}, key) ?? defaultValue;
		case "md": return objectPath.get(params.md || {}, key) ?? objectPath.get(params.sm || {}, key) ?? objectPath.get(params.xs || {}, key) ?? defaultValue;
		case "sm": return objectPath.get(params.sm || {}, key) ?? objectPath.get(params.xs || {}, key) ?? defaultValue;
		default: return objectPath.get(params.xs || {}, key) ?? defaultValue;
	}
};
/**
* Splits responsive breakpoint props by specified keys.
* Returns `picked` containing only the specified keys and `rest` containing everything else.
*/
const splitResponsiveProps = (bp, keys) => {
	if (!bp) return {
		picked: void 0,
		rest: void 0
	};
	const picked = {};
	const rest = {};
	for (const [k, v] of Object.entries(bp)) if (keys.includes(k)) picked[k] = v;
	else rest[k] = v;
	const hasPicked = Object.keys(picked).length > 0;
	const hasRest = Object.keys(rest).length > 0;
	return {
		picked: hasPicked ? picked : void 0,
		rest: hasRest ? rest : void 0
	};
};
//#endregion
export { createEmptyResponsiveStyle, createResponsiveStyle, getPreviousValue, splitResponsiveProps };
