'use client';
import { createResponsiveStyle } from "../../utils/internal/responsive-props.mjs";
import { toCssValue } from "../../utils/internal/css.mjs";
import { css, getColorByToken } from "@wanteddev/wds-engine";
//#region src/components/toggle-icon/style.ts
const toggleIconStyle = ({ xs, sm, md, lg, xl, activeColor, active, size }) => (theme) => css`
    ${toggleIconSizeStyle(size)}

    background-color: transparent;
    border-radius: 9999px;
    border: none;
    box-shadow: none;
    color: ${active ? getColorByToken(theme, activeColor) : theme.semantic.label.assistive};

    &:disabled,
    &[aria-disabled='true'] {
      color: ${theme.semantic.label.disable};
    }

    ${createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => css`
        ${toggleIconSizeStyle(params?.size)}
        ${params?.sx}
      `)}
  `;
const toggleIconSizeStyle = (size) => size !== void 0 ? css`
        width: ${toCssValue(size)};
        height: ${toCssValue(size)};
        font-size: ${toCssValue(size)};
      ` : void 0;
//#endregion
export { toggleIconStyle };
