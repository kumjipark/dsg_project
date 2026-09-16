'use client';
import { createResponsiveStyle } from "../../utils/internal/responsive-props.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/round-checkbox/style.ts
const roundCheckboxStyle = ({ size, xs, sm, md, lg, xl }) => (theme) => css`
    border-radius: 9999px;

    [data-role='checkbox-icon-wrapper'] {
      border-radius: 9999px;
    }

    & svg {
      pointer-events: none;
    }

    &[aria-checked='true'] {
      [data-role='checkbox-icon-wrapper'] {
        border: none;
        box-shadow: none;
        background-color: ${theme.semantic.primary.normal};
      }
    }

    ${roundCheckboxSizeStyle({ size })}

    ${createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => css`
        ${roundCheckboxSizeStyle({ size: params?.size })}
      `)}
  `;
const roundCheckboxSizeStyle = ({ size }) => {
	switch (size) {
		case "medium": return css`
        padding: 2px;
      `;
	}
};
//#endregion
export { roundCheckboxSizeStyle, roundCheckboxStyle };
