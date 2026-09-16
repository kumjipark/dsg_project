'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/play-badge/style.ts
const playBadgeStyle = ({ size, alternative, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    margin: 0px;
    border-radius: 1000px;
    position: relative;
    width: fit-content;
    height: fit-content;
    ${playBadgeSizeStyle(size)}

    ${alternative ? _wanteddev_wds_engine.css`
          background-color: ${require_utils_color.addOpacity(theme.atomic.coolNeutral[30], theme.opacity[61])};
        ` : _wanteddev_wds_engine.css`
          backdrop-filter: blur(32px);
          background-color: ${require_utils_color.addOpacity(theme.atomic.coolNeutral[40], theme.opacity[28])};
        `}

    svg {
      position: relative;
      color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[88])};
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => {
	return _wanteddev_wds_engine.css`
        ${playBadgeSizeStyle(params?.size)}
        ${params?.sx}
      `;
})}
  `;
const playBadgeSizeStyle = (size) => {
	switch (size) {
		case "small": return _wanteddev_wds_engine.css`
        padding: 6px;
        svg {
          font-size: 24px;
        }
      `;
		case "medium": return _wanteddev_wds_engine.css`
        padding: 10px;
        svg {
          font-size: 40px;
        }
      `;
		case "large": return _wanteddev_wds_engine.css`
        padding: 12px;
        svg {
          font-size: 56px;
        }
      `;
	}
};
//#endregion
exports.playBadgeStyle = playBadgeStyle;
