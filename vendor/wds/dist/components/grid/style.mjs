'use client';
import { createResponsiveStyle } from "../../utils/internal/responsive-props.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/grid/style.ts
const gridStyle = ({ xs, sm, md, lg, xl, ...props }) => (theme) => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    ${gridContainerStyle(props, theme)}

    ${createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => css`
        ${gridContainerStyle(params, theme)}
        ${params?.sx}
      `)}
  `;
const gridContainerStyle = ({ alignItems, justifyContent, spacing, rowSpacing, columnSpacing } = {}, theme) => css`
  ${Boolean(alignItems) && css`
    align-items: ${alignItems};
  `}
  ${Boolean(justifyContent) && css`
    justify-content: ${justifyContent};
  `}

  ${gridSpacingStyle(rowSpacing || spacing, "row", theme)}
  ${gridSpacingStyle(columnSpacing || spacing, "column", theme)}
`;
const gridSpacingStyle = (spacing, type, theme) => {
	if (!spacing) return;
	if (typeof spacing === "number") return css`
      --wds-${type}-spacing: ${theme.spacing[spacing]};

      ${type === "column" ? css`
              margin-top: calc(var(--wds-${type}-spacing) * -1);
            ` : css`
              width: calc(100% + var(--wds-${type}-spacing));
              margin-left: calc(var(--wds-${type}-spacing) * -1);
            `}
    `;
};
//#endregion
export { gridStyle };
