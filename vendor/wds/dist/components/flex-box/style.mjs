'use client';
import { createResponsiveStyle } from "../../utils/internal/responsive-props.mjs";
import { toCssValue } from "../../utils/internal/css.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/flex-box/style.ts
const flexBoxStyle = ({ xs, sm, md, lg, xl, ...props }) => (theme) => css`
    display: flex;
    ${flexibleStyle(props)}

    ${createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => css`
        ${flexibleStyle(params)}
        ${params?.sx}
      `)}
  `;
const flexibleStyle = ({ flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, flexBasis, gap, rowGap, columnGap } = {}) => css`
  ${gap !== void 0 && css`
    gap: ${toCssValue(gap)};
  `}
  ${rowGap !== void 0 && css`
    row-gap: ${toCssValue(rowGap)};
  `}
    ${columnGap !== void 0 && css`
    column-gap: ${toCssValue(columnGap)};
  `}
  ${flexDirection !== void 0 && css`
    flex-direction: ${flexDirection};
  `}
  ${flexWrap !== void 0 && css`
    flex-wrap: ${flexWrap};
  `}
	${justifyContent !== void 0 && css`
    justify-content: ${justifyContent};
  `}
	${alignItems !== void 0 && css`
    align-items: ${alignItems};
  `}
	${alignContent !== void 0 && css`
    align-content: ${alignContent};
  `}
	${order !== void 0 && css`
    order: ${order};
  `}
	${flex !== void 0 && css`
    flex: ${flex};
  `}
	${flexGrow !== void 0 && css`
    flex-grow: ${flexGrow};
  `}
	${flexShrink !== void 0 && css`
    flex-shrink: ${flexShrink};
  `}
	${alignSelf !== void 0 && css`
    align-self: ${alignSelf};
  `}
  ${flexBasis !== void 0 && css`
    flex-basis: ${toCssValue(flexBasis)};
  `}
`;
//#endregion
export { flexBoxStyle };
