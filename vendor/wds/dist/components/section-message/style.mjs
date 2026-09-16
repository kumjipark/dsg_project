'use client';
import { addOpacity } from "../../utils/color.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/section-message/style.ts
const sectionMessageWrapperStyle = css`
  width: 100%;
  border-radius: 12px;
  padding: 12px;
  backdrop-filter: blur(32px);
  position: relative;

  & > :not([role='presentation']) {
    z-index: 1;
  }
`;
const firstOverlayStyle = (theme) => css`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${addOpacity(theme.semantic.background.normal.normal, theme.opacity[88])};
  inset: 0;
  border-radius: inherit;
`;
const secondOverlayStyle = (variant) => (theme) => {
	const getBackgroundColor = () => {
		switch (variant) {
			case "info": return theme.semantic.primary.normal;
			case "positive": return theme.semantic.status.positive;
			case "negative": return theme.semantic.status.negative;
			case "cautionary": return theme.semantic.status.cautionary;
			default: return theme.semantic.label.assistive;
		}
	};
	return css`
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: inherit;
      background-color: ${addOpacity(getBackgroundColor(), theme.opacity[5])};
      inset: 0;
    `;
};
const sectionMessageIconStyle = (variant) => (theme) => {
	const defaultVariantStyle = css`
      position: relative;
      font-size: 20px;
      padding: 1px 0px;
      height: fit-content;

      &::before {
        inset: 0;
        width: 8px;
        height: 10px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 999px;
        position: absolute;
        content: '';
        z-index: -1;
        background-color: ${theme.semantic.static.white};
      }
    `;
	switch (variant) {
		case "info": return css`
          color: ${theme.semantic.primary.normal};
          ${defaultVariantStyle}
        `;
		case "positive": return css`
          color: ${theme.semantic.status.positive};
          ${defaultVariantStyle}
        `;
		case "negative": return css`
          color: ${theme.semantic.status.negative};
          ${defaultVariantStyle}
        `;
		case "cautionary": return css`
          color: ${theme.semantic.status.cautionary};
          ${defaultVariantStyle}
        `;
		default: return css`
          color: ${theme.semantic.label.alternative};
          position: relative;
          font-size: 20px;
          padding: 2px 0px;
          height: fit-content;
        `;
	}
};
const sectionMessageTrailingButtonStyle = css`
  padding: 0px 8px;
  height: 22px;
  flex-shrink: 0;
`;
const sectionMessageCloseButtonStyle = css`
  flex-shrink: 0;
  margin: 1px 0px;
  height: fit-content;
`;
//#endregion
export { firstOverlayStyle, secondOverlayStyle, sectionMessageCloseButtonStyle, sectionMessageIconStyle, sectionMessageTrailingButtonStyle, sectionMessageWrapperStyle };
