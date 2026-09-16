'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/content-badge/style.ts
const contentBadgeStyle = ({ xs, sm, md, lg, xl, ...props }) => (theme) => _wanteddev_wds_engine.css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;

    ${contentBadgeColorVariant(props, theme)}
    ${getSizeStyle(props)}

  ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${getSizeStyle(params || {})}
        ${params?.sx}
      `)}
  `;
const getSizeStyle = ({ size }) => {
	switch (size) {
		case "medium": return _wanteddev_wds_engine.css`
        border-radius: 10px;
        padding: 5px 8px;
        gap: 4px;
        ${require_utils_typography.typographyStyle("label2", "medium")}

        svg {
          font-size: 14px;
        }
      `;
		case "small": return _wanteddev_wds_engine.css`
        border-radius: 8px;
        padding: 4px 6px;
        gap: 4px;
        ${require_utils_typography.typographyStyle("caption1", "medium")}

        svg {
          font-size: 14px;
        }
      `;
		case "xsmall": return _wanteddev_wds_engine.css`
        border-radius: 8px;
        padding: 3px 6px;
        gap: 2px;
        ${require_utils_typography.typographyStyle("caption2", "medium")}

        svg {
          font-size: 12px;
        }
      `;
	}
};
const contentBadgeColorVariant = ({ variant, color, accentColor, neutralColor }, theme) => {
	const { font, background, border } = contentBadgeColorStyle({
		color,
		accentColor,
		neutralColor
	}, theme);
	if (!font && !background && !border) return;
	switch (variant) {
		case "solid": return _wanteddev_wds_engine.css`
        background-color: ${background};
        color: ${font};
      `;
		case "outlined": return _wanteddev_wds_engine.css`
        background-color: ${theme.semantic.background.normal.normal};
        color: ${font};
        box-shadow: inset 0 0 0 1px ${border};
      `;
	}
};
const contentBadgeColorStyle = ({ color, accentColor, neutralColor }, theme) => {
	if (color === "neutral") return {
		font: (0, _wanteddev_wds_engine.getColorByToken)(theme, neutralColor),
		background: theme.semantic.fill.normal,
		border: theme.semantic.line.normal.normal
	};
	return {
		font: (0, _wanteddev_wds_engine.getColorByToken)(theme, accentColor),
		background: require_utils_color.addOpacity((0, _wanteddev_wds_engine.getColorByToken)(theme, accentColor), theme.opacity[8]),
		border: require_utils_color.addOpacity((0, _wanteddev_wds_engine.getColorByToken)(theme, accentColor), theme.opacity[43])
	};
};
//#endregion
exports.contentBadgeStyle = contentBadgeStyle;
