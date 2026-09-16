'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
const require_components_typography_style = require("../typography/style.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/card/style.ts
const cardPlatformStyle = ({ platform }) => {
	switch (platform) {
		case "desktop": return _wanteddev_wds_engine.css`
        gap: 8px;
        --wds-card-content-item-top-position-margin-top: 2px;
        --wds-card-content-item-top-position-margin-bottom: 4px;

        --wds-card-content-item-bottom-position-margin-top: 8px;
        // thumbnail
        [wds-component='thumbnail'],
        [wds-component='thumbnail-skeleton'] {
          width: 100%;
          aspect-ratio: 3 / 2;
        }
        // thumbnail content
        [data-role='card-thumbnail-content-wrapper'] {
          padding: 14px;
        }
        [data-role='card-thumbnail-content-text'] {
          ${require_utils_typography.typographyStyle("label2", "bold")}
        }
        [data-role='card-thumbnail-content-toggle-icon'] {
          > button {
            width: 24px;
            height: 24px;
            font-size: 24px;
          }
        }
        // content
        [wds-component='card-content'] {
          padding: 0 6px;
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
        gap: 6px;

        --wds-card-content-item-top-position-margin-top: 2px;
        --wds-card-content-item-top-position-margin-bottom: 4px;

        --wds-card-content-item-bottom-position-margin-top: 6px;
        // thumbnail
        [wds-component='thumbnail'],
        [wds-component='thumbnail-skeleton'] {
          width: 100%;
          aspect-ratio: 4 / 3;
        }
        // thumbnail content
        [data-role='card-thumbnail-content-wrapper'] {
          padding: 10px;
        }
        [data-role='card-thumbnail-content-text'] {
          ${require_utils_typography.typographyStyle("caption2", "bold")}
        }
        [data-role='card-thumbnail-content-toggle-icon'] {
          > button {
            width: 20px;
            height: 20px;
            font-size: 20px;
          }
        }
        // content
        [wds-component='card-content'] {
          padding: 0 2px;
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
const cardStyle = ({ xs, sm, md, lg, xl, width, platform }) => (theme) => _wanteddev_wds_engine.css`
    --wds-card-thumbnail-overlay-z-index: 1;
    --wds-card-thumbnail-content-z-index: 2;

    width: ${require_utils_internal_css.toCssValue(width) ?? "100%"};
    ${cardPlatformStyle({ platform })}

    &:hover {
      [wds-component='thumbnail'] img {
        transform: scale(1.025);
      }
    }

    // thumbnail
    [wds-component='thumbnail'],
    [wds-component='thumbnail-skeleton'] {
      width: 100%;
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${params?.width !== void 0 && _wanteddev_wds_engine.css`
          width: ${require_utils_internal_css.toCssValue(params.width)};
        `}
        ${cardPlatformStyle({ platform: params?.platform })}
        ${params?.sx}
      `)}
  `;
const cardThumbnailRatioStyle = ({ ratio }) => {
	if (!ratio) return;
	const [width, height] = ratio.split(":");
	return _wanteddev_wds_engine.css`
    & [wds-component='thumbnail'],
    &[wds-component='thumbnail-skeleton'] {
      aspect-ratio: ${`${width} / ${height}`};
    }
  `;
};
const cardThumbnailStyle = ({ ratio, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    position: relative;

    [wds-component='thumbnail'] {
      overflow: hidden;

      img {
        will-change: transform;
        transition: transform 0.2s ease;
      }
    }

    ${cardThumbnailRatioStyle({ ratio })}
    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${cardThumbnailRatioStyle({ ratio: params?.ratio })}
        ${params?.sx}
      `)}
  `;
const cardThumbnailSkeletonStyle = ({ ratio, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    width: 100%;
    ${cardThumbnailRatioStyle({ ratio })}
    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${cardThumbnailRatioStyle({ ratio: params?.ratio })}
        ${params?.sx}
      `)}
  `;
const cardThumbnailContentWrapperStyle = (theme) => _wanteddev_wds_engine.css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  > * {
    z-index: var(--wds-card-thumbnail-content-z-index);
  }

  // overlay
  &::before {
    ${require_utils_color.gradient(theme.semantic.static.black, "bottom", "100%", "mask")}
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    opacity: ${theme.opacity[35]};
    z-index: var(--wds-card-thumbnail-overlay-z-index);
  }
`;
const cardThumbnailContentTextStyle = (theme) => _wanteddev_wds_engine.css`
  color: ${theme.semantic.static.white};
`;
const cardThumbnailContentToggleIconStyle = (theme) => _wanteddev_wds_engine.css`
  button[aria-pressed='false'] {
    color: ${theme.semantic.static.white};
  }
`;
const cardTitleStyle = (props) => (theme) => _wanteddev_wds_engine.css`
  ${require_utils_typography.ellipsisTypographyStyle(2)}

  &[wds-component='card-title'] {
    ${cardTypographyStyle(props, "bold")(theme)}
  }
`;
const cardCaptionStyle = (props) => (theme) => _wanteddev_wds_engine.css`
    ${require_utils_typography.ellipsisTypographyStyle()}

    &[wds-component='card-caption'] {
      ${cardTypographyStyle(props, "medium")(theme)}
    }
  `;
const cardTypographyStyle = (props, defaultWeight) => (theme) => {
	if (Object.keys(props).length === 0) return;
	const getTypographyStyle = ({ variant, weight }) => {
		if (!variant && !weight) return;
		if (!variant) return _wanteddev_wds_engine.css`
          ${require_components_typography_style.getWeightMap("body1")[weight ?? defaultWeight ?? "regular"]}
        `;
		return require_utils_typography.typographyStyle(variant, weight);
	};
	const { xs, sm, md, lg, xl } = props;
	return _wanteddev_wds_engine.css`
      ${getTypographyStyle(props)}

      ${Boolean(props.color) && _wanteddev_wds_engine.css`
        color: ${(0, _wanteddev_wds_engine.getColorByToken)(theme, props.color)};
      `}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
		xs,
		sm,
		md,
		lg,
		xl
	}, theme)((params) => _wanteddev_wds_engine.css`
          ${getTypographyStyle(params ?? {})}
        `)}
    `;
};
const cardContentStyle = _wanteddev_wds_engine.css`
  overflow: hidden;

  [wds-component='card-title'],
  [wds-component='card-title-skeleton'] {
    margin-bottom: 2px;
  }
`;
const cardContentItemStyle = ({ variant, position }) => _wanteddev_wds_engine.css`
  gap: ${variant === "badge" ? "6px" : 0};

  ${(() => {
	switch (position) {
		case "top": return _wanteddev_wds_engine.css`
          margin-top: var(--wds-card-content-item-top-position-margin-top);
          margin-bottom: var(
            --wds-card-content-item-top-position-margin-bottom
          );
        `;
		case "bottom": return _wanteddev_wds_engine.css`
          margin-top: var(--wds-card-content-item-bottom-position-margin-top);
        `;
	}
})()};
`;
const cardSkeletonPlatformStyle = ({ platform }) => {
	switch (platform) {
		case "desktop": return _wanteddev_wds_engine.css`
        gap: 8px;
        --wds-card-content-item-top-position-margin-top: 4px;
        --wds-card-content-item-top-position-margin-bottom: 4px;

        --wds-card-content-item-bottom-position-margin-top: 8px;

        // thumbnail
        [wds-component='thumbnail'],
        [wds-component='thumbnail-skeleton'] {
          width: 100%;
          aspect-ratio: 3 / 2;
        }
        // content
        [wds-component='card-content'] {
          padding: 0 6px;
        }
        // skeleton
        [wds-component='card-title-skeleton'] {
          width: 100%;
          height: 24px;
        }
      `;
		case "mobile": return _wanteddev_wds_engine.css`
        gap: 6px;
        --wds-card-content-item-top-position-margin-top: 2px;
        --wds-card-content-item-top-position-margin-bottom: 4px;

        --wds-card-content-item-bottom-position-margin-top: 6px;

        // thumbnail
        [wds-component='thumbnail'],
        [wds-component='thumbnail-skeleton'] {
          width: 100%;
          aspect-ratio: 4 / 3;
        }
        // content
        [wds-component='card-content'] {
          padding: 0 2px;
        }
        // skeleton
        [wds-component='card-title-skeleton'] {
          width: 100%;
          height: 22px;
        }
      `;
	}
};
const cardSkeletonStyle = ({ xs, sm, md, lg, xl, width, platform }) => (theme) => _wanteddev_wds_engine.css`
    width: ${width ?? "100%"};
    ${cardSkeletonPlatformStyle({ platform })}

    // thumbnail
    [wds-component='thumbnail'],
    [wds-component='thumbnail-skeleton'] {
      width: 100%;
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
        ${cardSkeletonPlatformStyle({ platform: params?.platform })}
        ${params?.sx}
      `)}
  `;
const cardTitleSkeletonStyle = (props) => (theme) => _wanteddev_wds_engine.css`
    &[wds-component='card-title-skeleton'] {
      ${cardSkeletonWidthStyle(props)(theme)}
    }
  `;
const cardSkeletonWidthStyle = ({ width, height, xs, sm, md, lg, xl }) => (theme) => {
	return _wanteddev_wds_engine.css`
      ${width !== void 0 && _wanteddev_wds_engine.css`
        width: ${require_utils_internal_css.toCssValue(width)};
      `}
      ${height !== void 0 && _wanteddev_wds_engine.css`
        height: ${require_utils_internal_css.toCssValue(height)};
      `}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
		xs,
		sm,
		md,
		lg,
		xl
	}, theme)((params) => _wanteddev_wds_engine.css`
          ${params?.width !== void 0 && _wanteddev_wds_engine.css`
            width: ${require_utils_internal_css.toCssValue(params.width)};
          `}
          ${params?.height !== void 0 && _wanteddev_wds_engine.css`
            height: ${require_utils_internal_css.toCssValue(params.height)};
          `}
        `)}
    `;
};
//#endregion
exports.cardCaptionStyle = cardCaptionStyle;
exports.cardContentItemStyle = cardContentItemStyle;
exports.cardContentStyle = cardContentStyle;
exports.cardSkeletonStyle = cardSkeletonStyle;
exports.cardStyle = cardStyle;
exports.cardThumbnailContentTextStyle = cardThumbnailContentTextStyle;
exports.cardThumbnailContentToggleIconStyle = cardThumbnailContentToggleIconStyle;
exports.cardThumbnailContentWrapperStyle = cardThumbnailContentWrapperStyle;
exports.cardThumbnailSkeletonStyle = cardThumbnailSkeletonStyle;
exports.cardThumbnailStyle = cardThumbnailStyle;
exports.cardTitleSkeletonStyle = cardTitleSkeletonStyle;
exports.cardTitleStyle = cardTitleStyle;
exports.cardTypographyStyle = cardTypographyStyle;
