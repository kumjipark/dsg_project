'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/card-list/style.ts
const cardListPlatformStyle = ({ platform }) => {
	switch (platform) {
		case "desktop": return _wanteddev_wds_engine.css`
        gap: 16px;

        // thumbnail
        [wds-component='thumbnail'],
        [wds-component='thumbnail-skeleton'] {
          width: 120px;
        }
        // text
        [wds-component='card-title'] {
          ${require_utils_typography.typographyStyle("body1", "bold")}
        }
        [wds-component='card-caption'] {
          ${require_utils_typography.typographyStyle("label2", "medium")}
        }
      `;
		case "mobile": return _wanteddev_wds_engine.css`
        gap: 12px;

        // thumbnail
        [wds-component='thumbnail'],
        [wds-component='thumbnail-skeleton'] {
          width: 96px;
        }
        // text
        [wds-component='card-title'] {
          ${require_utils_typography.typographyStyle("body2", "bold")}
        }
        [wds-component='card-caption'] {
          ${require_utils_typography.typographyStyle("label2", "medium")}
        }
      `;
	}
};
const cardListStyle = ({ xs, sm, md, lg, xl, width, platform }) => (theme) => _wanteddev_wds_engine.css`
    width: ${width ?? "100%"};
    max-width: 100%;
    ${cardListPlatformStyle({ platform })}

    &:hover {
      [wds-component='thumbnail'] img {
        transform: scale(1.025);
      }
    }

    // thumbnail
    [wds-component='thumbnail'],
    [wds-component='thumbnail-skeleton'] {
      aspect-ratio: 3 / 2;
    }
    // text
    [wds-component='card-title'] {
      ${require_utils_typography.ellipsisTypographyStyle(1)}
    }
    [wds-component='card-caption'] {
      ${require_utils_typography.ellipsisTypographyStyle(1)}
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${params?.width !== void 0 && _wanteddev_wds_engine.css`
          width: ${params.width};
        `}
        ${cardListPlatformStyle({ platform: params?.platform })}
        ${params?.sx}
      `)}
  `;
const cardListContentStyle = _wanteddev_wds_engine.css`
  width: 24px;
  height: 24px;
  font-size: 24px;
`;
const cardListSkeletonPlatformStyle = ({ platform, hasLeadingContent, hasTrailingContent }) => {
	switch (platform) {
		case "desktop": return _wanteddev_wds_engine.css`
        gap: 16px;
        padding-left: ${hasLeadingContent ? "40px" : "0"};
        padding-right: ${hasTrailingContent ? "40px" : "0"};

        // thumbnail
        [wds-component='thumbnail'],
        [wds-component='thumbnail-skeleton'] {
          width: 120px;
        }
        // skeleton
        [wds-component='card-title-skeleton'] {
          width: 75%;
          height: 24px;
        }
      `;
		case "mobile": return _wanteddev_wds_engine.css`
        gap: 12px;
        padding-left: ${hasLeadingContent ? "36px" : "0"};
        padding-right: ${hasTrailingContent ? "36px" : "0"};

        // thumbnail
        [wds-component='thumbnail'],
        [wds-component='thumbnail-skeleton'] {
          width: 96px;
        }
        // skeleton
        [wds-component='card-title-skeleton'] {
          width: 75%;
          height: 22px;
        }
      `;
	}
};
const cardListSkeletonStyle = ({ xs, sm, md, lg, xl, width, platform, hasLeadingContent, hasTrailingContent }) => (theme) => _wanteddev_wds_engine.css`
    width: ${width ?? "100%"};
    max-width: 100%;

    ${cardListSkeletonPlatformStyle({
	platform,
	hasLeadingContent,
	hasTrailingContent
})}

    // thumbnail
    [wds-component='thumbnail'], [wds-component='thumbnail-skeleton'] {
      aspect-ratio: 3 / 2;
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${params?.width !== void 0 && _wanteddev_wds_engine.css`
          width: ${params.width};
        `}
        ${cardListSkeletonPlatformStyle({
	platform: params?.platform,
	hasLeadingContent,
	hasTrailingContent
})}
        ${params?.sx}
      `)}
  `;
//#endregion
exports.cardListContentStyle = cardListContentStyle;
exports.cardListSkeletonStyle = cardListSkeletonStyle;
exports.cardListStyle = cardListStyle;
