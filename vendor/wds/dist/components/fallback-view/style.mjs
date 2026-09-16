'use client';
import { createResponsiveStyle } from "../../utils/internal/responsive-props.mjs";
import { toCssValue } from "../../utils/internal/css.mjs";
import { typographyStyle } from "../../utils/typography.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/fallback-view/style.ts
const fallbackViewStyle = ({ platform, padding, width, xs, sm, md, lg, xl }) => (theme) => css`
    width: ${toCssValue(width)};
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

    ${createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => css`
        ${fallbackViewPlatformStyle({ platform: params?.platform })}
        ${fallbackViewPaddingStyle({ padding: params?.padding })}
        ${params?.width !== void 0 && css`
          width: ${toCssValue(params.width)};
        `}
        ${params?.sx}
      `)}
  `;
const fallbackViewPlatformStyle = ({ platform }) => {
	switch (platform) {
		case "mobile": return css`
        width: 335px;
        max-width: 100%;

        [data-role='fallback-view-text-title'] {
          ${typographyStyle("headline1", "bold")}
        }
        [data-role='fallback-view-text-description'] {
          ${typographyStyle("body2-reading")}
        }
      `;
		case "desktop": return css`
        width: 400px;
        max-width: 100%;

        [data-role='fallback-view-text-title'] {
          ${typographyStyle("heading2", "bold")}
        }
        [data-role='fallback-view-text-description'] {
          ${typographyStyle("body1-reading")}
        }
      `;
	}
};
const fallbackViewPaddingStyle = ({ padding }) => {
	switch (padding) {
		case "compact": return css`
        padding-top: 80px;
        padding-bottom: 80px;
      `;
		case "normal": return css`
        padding-top: 160px;
        padding-bottom: 160px;
      `;
	}
};
const fallbackViewImageStyle = ({ platform, responsive }) => (theme) => css`
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

    ${createResponsiveStyle(responsive || {}, theme)((params) => css`
        ${fallbackViewImagePlatformStyle({ platform: params?.platform })}
        ${params?.sx}
      `)}
  `;
const fallbackViewImagePlatformStyle = ({ platform }) => {
	switch (platform) {
		case "mobile": return css`
        width: 128px;
        height: 128px;
      `;
		case "desktop": return css`
        width: 160px;
        height: 160px;
      `;
	}
};
const fallbackViewContentStyle = ({ platform, responsive }) => (theme) => css`
    ${fallbackViewContentPlatformStyle({ platform })}

    ${createResponsiveStyle(responsive || {}, theme)((params) => css`
        ${fallbackViewContentPlatformStyle({ platform: params?.platform })}
        ${params?.sx}
      `)}
  `;
const fallbackViewContentPlatformStyle = ({ platform }) => {
	switch (platform) {
		case "mobile": return css`
        padding-top: 8px;
        padding-bottom: calc(8px + var(--wds-fallback-view-bottom-space));
      `;
		case "desktop": return css`
        padding-top: 12px;
        padding-bottom: calc(12px + var(--wds-fallback-view-bottom-space));
      `;
	}
};
//#endregion
export { fallbackViewContentStyle, fallbackViewImageStyle, fallbackViewStyle };
