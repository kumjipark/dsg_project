'use client';
import { createResponsiveStyle } from "../../utils/internal/responsive-props.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/grid-item/style.ts
const gridItemStyle = ({ xs, sm, md, lg, xl, ...props }) => (theme) => css`
    padding-top: calc(var(--wds-column-spacing));
    padding-left: calc(var(--wds-row-spacing));

    ${gridItemAlignStyle(props)}

    ${createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => css`
        ${gridItemAlignStyle(params)}
        ${params?.sx}
      `)}
  `;
const gridItemAlignStyle = ({ offset, columns, alignSelf } = {}) => {
	return css`
    ${Boolean(alignSelf) && css`
      align-self: ${alignSelf};
    `}

    ${gridItemLayoutStyle(columns)}
    ${gridItemOffsetStyle(offset)}
  `;
};
const gridItemOffsetStyle = (value) => {
	if (!value) return;
	if (value === "auto") return css`
      margin-left: auto;
    `;
	return css`
    margin-left: calc(100% * ${value} / 12);
  `;
};
const gridItemLayoutStyle = (value) => {
	if (!value) return;
	if (value === true) return css`
      flex-grow: 1;
      flex-basis: 0;
      flex-shrink: initial;
      max-width: 100%;
      width: initial;
    `;
	if (value === "auto") return css`
      flex: 0 0 auto;
      max-width: initial;
      width: auto;
    `;
	return css`
    max-width: ${Math.round(value / 12 * 1e8) / 1e6}%;
    width: initial;
    flex-grow: 0;
    flex-basis: ${Math.round(value / 12 * 1e8) / 1e6}%;
    flex-shrink: initial;
  `;
};
//#endregion
export { gridItemStyle };
