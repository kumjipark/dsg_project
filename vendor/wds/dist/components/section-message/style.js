'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/section-message/style.ts
const sectionMessageWrapperStyle = _wanteddev_wds_engine.css`
  width: 100%;
  border-radius: 12px;
  padding: 12px;
  backdrop-filter: blur(32px);
  position: relative;

  & > :not([role='presentation']) {
    z-index: 1;
  }
`;
const firstOverlayStyle = (theme) => _wanteddev_wds_engine.css`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${require_utils_color.addOpacity(theme.semantic.background.normal.normal, theme.opacity[88])};
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
	return _wanteddev_wds_engine.css`
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: inherit;
      background-color: ${require_utils_color.addOpacity(getBackgroundColor(), theme.opacity[5])};
      inset: 0;
    `;
};
const sectionMessageIconStyle = (variant) => (theme) => {
	const defaultVariantStyle = _wanteddev_wds_engine.css`
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
		case "info": return _wanteddev_wds_engine.css`
          color: ${theme.semantic.primary.normal};
          ${defaultVariantStyle}
        `;
		case "positive": return _wanteddev_wds_engine.css`
          color: ${theme.semantic.status.positive};
          ${defaultVariantStyle}
        `;
		case "negative": return _wanteddev_wds_engine.css`
          color: ${theme.semantic.status.negative};
          ${defaultVariantStyle}
        `;
		case "cautionary": return _wanteddev_wds_engine.css`
          color: ${theme.semantic.status.cautionary};
          ${defaultVariantStyle}
        `;
		default: return _wanteddev_wds_engine.css`
          color: ${theme.semantic.label.alternative};
          position: relative;
          font-size: 20px;
          padding: 2px 0px;
          height: fit-content;
        `;
	}
};
const sectionMessageTrailingButtonStyle = _wanteddev_wds_engine.css`
  padding: 0px 8px;
  height: 22px;
  flex-shrink: 0;
`;
const sectionMessageCloseButtonStyle = _wanteddev_wds_engine.css`
  flex-shrink: 0;
  margin: 1px 0px;
  height: fit-content;
`;
//#endregion
exports.firstOverlayStyle = firstOverlayStyle;
exports.secondOverlayStyle = secondOverlayStyle;
exports.sectionMessageCloseButtonStyle = sectionMessageCloseButtonStyle;
exports.sectionMessageIconStyle = sectionMessageIconStyle;
exports.sectionMessageTrailingButtonStyle = sectionMessageTrailingButtonStyle;
exports.sectionMessageWrapperStyle = sectionMessageWrapperStyle;
