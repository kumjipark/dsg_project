'use client';
import { addOpacity } from "../../utils/color.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/popover/style.ts
const popoverStyle = (variant) => (theme) => css`
    background-color: ${addOpacity(theme.semantic.background.elevated.normal, theme.opacity[88])};
    border-radius: 16px;
    outline-style: none;
    box-shadow: ${theme.semantic.elevation.shadow.spread.small};
    backdrop-filter: blur(32px);
    min-width: 140px;

    ${popoverVariantStyle(variant)}
  `;
const popoverVariantStyle = (variant) => {
	switch (variant) {
		case "custom": return css`
        padding: 16px;
      `;
		default: return css`
        border-radius: 12px;
        padding: 12px 14px;
        max-width: 360px;
        flex-direction: column;
        gap: 0px;
      `;
	}
};
//#endregion
export { popoverStyle };
