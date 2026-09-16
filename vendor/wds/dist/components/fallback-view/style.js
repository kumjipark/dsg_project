'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
const require_utils_typography = require("../../utils/typography.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/fallback-view/style.ts
const fallbackViewStyle = ({ platform, padding, width, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    width: ${require_utils_internal_css.toCssValue(width)};
    ${fallbackViewPlatformStyle({ platform })}
    ${fallbackViewPaddingStyle({ padding })}
    --wds-fallback-view-bottom-space: 0px;

    &:has([wds-component='fallback-view-image'])
      [wds-component='fallback-view-content'] {
      --wds-fallback-view-bottom-space: 20px;
    }

    [data-role='fallback-view-text-title'] {
      text-align: center;
      color: ${theme.semantic.label.normal};
    }
    [data-role='fallback-view-text-description'] {
      text-align: center;
      color: ${theme.semantic.label.alternative};
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${fallbackViewPlatformStyle({ platform: params?.platform })}
        ${fallbackViewPaddingStyle({ padding: params?.padding })}
        ${params?.width !== void 0 && _wanteddev_wds_engine.css`
          width: ${require_utils_internal_css.toCssValue(params.width)};
        `}
        ${params?.sx}
      `)}
  `;
const fallbackViewPlatformStyle = ({ platform }) => {
	switch (platform) {
		case "mobile": return _wanteddev_wds_engine.css`
        width: 335px;
        max-width: 100%;

        [data-role='fallback-view-text-title'] {
          ${require_utils_typography.typographyStyle("headline1", "bold")}
        }
        [data-role='fallback-view-text-description'] {
          ${require_utils_typography.typographyStyle("body2-reading")}
        }
      `;
		case "desktop": return _wanteddev_wds_engine.css`
        width: 400px;
        max-width: 100%;

        [data-role='fallback-view-text-title'] {
          ${require_utils_typography.typographyStyle("heading2", "bold")}
        }
        [data-role='fallback-view-text-description'] {
          ${require_utils_typography.typographyStyle("body1-reading")}
        }
      `;
	}
};
const fallbackViewPaddingStyle = ({ padding }) => {
	switch (padding) {
		case "compact": return _wanteddev_wds_engine.css`
        padding-top: 80px;
        padding-bottom: 80px;
      `;
		case "normal": return _wanteddev_wds_engine.css`
        padding-top: 160px;
        padding-bottom: 160px;
      `;
	}
};
const fallbackViewImageStyle = ({ platform, responsive }) => (theme) => _wanteddev_wds_engine.css`
    max-width: 100%;
    max-height: 100%;
    ${fallbackViewImagePlatformStyle({ platform })}

    img {
      max-width: 100%;
    }

    svg {
      width: 100%;
      height: 100%;
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle(responsive || {}, theme)((params) => _wanteddev_wds_engine.css`
        ${fallbackViewImagePlatformStyle({ platform: params?.platform })}
        ${params?.sx}
      `)}
  `;
const fallbackViewImagePlatformStyle = ({ platform }) => {
	switch (platform) {
		case "mobile": return _wanteddev_wds_engine.css`
        width: 128px;
        height: 128px;
      `;
		case "desktop": return _wanteddev_wds_engine.css`
        width: 160px;
        height: 160px;
      `;
	}
};
const fallbackViewContentStyle = ({ platform, responsive }) => (theme) => _wanteddev_wds_engine.css`
    ${fallbackViewContentPlatformStyle({ platform })}

    ${require_utils_internal_responsive_props.createResponsiveStyle(responsive || {}, theme)((params) => _wanteddev_wds_engine.css`
        ${fallbackViewContentPlatformStyle({ platform: params?.platform })}
        ${params?.sx}
      `)}
  `;
const fallbackViewContentPlatformStyle = ({ platform }) => {
	switch (platform) {
		case "mobile": return _wanteddev_wds_engine.css`
        padding-top: 8px;
        padding-bottom: calc(8px + var(--wds-fallback-view-bottom-space));
      `;
		case "desktop": return _wanteddev_wds_engine.css`
        padding-top: 12px;
        padding-bottom: calc(12px + var(--wds-fallback-view-bottom-space));
      `;
	}
};
//#endregion
exports.fallbackViewContentStyle = fallbackViewContentStyle;
exports.fallbackViewImageStyle = fallbackViewImageStyle;
exports.fallbackViewStyle = fallbackViewStyle;
