'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/category/style.ts
const categoryListStyle = ({ isScrollableLeft, isScrollableRight, horizontalPadding, verticalPadding, size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    width: 100%;
    list-style: none;
    position: relative;
    padding: 0;
    margin: 0;
    gap: 20px;

    [data-radix-scroll-area-viewport] {
      position: relative;
    }
    [data-radix-scroll-area-content] {
      overflow: hidden;
    }

    ${categoryPaddingStyle({
	horizontalPadding,
	isScrollableLeft,
	isScrollableRight
})}
    ${categorySizeStyle({
	size,
	verticalPadding
})}


    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params, breakpoint) => _wanteddev_wds_engine.css`
        ${categoryPaddingStyle({
	horizontalPadding: params?.horizontalPadding,
	isScrollableLeft,
	isScrollableRight
})}
        ${(params?.horizontalPadding !== void 0 || params?.size !== void 0) && _wanteddev_wds_engine.css`
          ${categorySizeStyle({
	size: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "size", params.size, breakpoint),
	verticalPadding: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "verticalPadding", params.verticalPadding, breakpoint)
})}
        `}
        ${params?.sx}
      `)}
  `;
const categoryPaddingStyle = ({ horizontalPadding, isScrollableLeft, isScrollableRight }) => {
	switch (horizontalPadding) {
		case true: return _wanteddev_wds_engine.css`
        [data-role='category-list-icon-button'] {
          display: flex;
        }

        &:not(:has([data-role='category-list-icon-button']))
          [data-radix-scroll-area-content] {
          padding: 0px var(--wds-category-list-padding, 20px);
        }

        &:has([data-role='category-list-icon-button'])
          [data-radix-scroll-area-content] {
          padding: 0px 0px 0px var(--wds-category-list-padding, 20px);
        }

        ${isScrollableRight ? _wanteddev_wds_engine.css`
              &:not(:has([data-role='category-list-icon-button']))
                [data-radix-scroll-area-wrapper] {
                mask-image: none;
              }

              &:has([data-role='category-list-icon-button'])
                [data-radix-scroll-area-wrapper] {
                mask-image: ${require_utils_color.getGradientMaskImage("right", "48px", "mask")};
              }
            ` : _wanteddev_wds_engine.css`
              &:not(:has([data-role='category-list-icon-button']))
                [data-radix-scroll-area-wrapper],
              &:has([data-role='category-list-icon-button'])
                [data-radix-scroll-area-wrapper] {
                mask-image: none;
              }
            `}

        --wds-category-icon-button-padding: 0px
          calc(var(--wds-category-list-padding, 20px) - 4px) 0px 0px;
      `;
		case false: return _wanteddev_wds_engine.css`
        [data-role='category-list-icon-button'] {
          display: flex;
        }

        &:not(:has([data-role='category-list-icon-button']))
          [data-radix-scroll-area-content],
        &:has([data-role='category-list-icon-button'])
          [data-radix-scroll-area-content] {
          padding: 0px;
        }

        ${isScrollableLeft || isScrollableRight ? _wanteddev_wds_engine.css`
              &:has([data-role='category-list-icon-button'])
                [data-radix-scroll-area-wrapper],
              &:not(:has([data-role='category-list-icon-button']))
                [data-radix-scroll-area-wrapper] {
                mask-composite: intersect;
                mask-image: ${[isScrollableLeft && require_utils_color.getGradientMaskImage("left", "48px", "mask"), isScrollableRight && require_utils_color.getGradientMaskImage("right", "48px", "mask")].filter(Boolean).join(", ")};
              }
            ` : _wanteddev_wds_engine.css`
              &:not(:has([data-role='category-list-icon-button']))
                [data-radix-scroll-area-wrapper],
              &:has([data-role='category-list-icon-button'])
                [data-radix-scroll-area-wrapper] {
                mask-image: none;
              }
            `}

        --wds-category-icon-button-padding: 0px;
      `;
	}
};
const categorySizeStyle = ({ size, verticalPadding }) => {
	switch (size) {
		case "small": return _wanteddev_wds_engine.css`
        [data-role='category-list-wrapper'] {
          gap: 4px;

          ${verticalPadding === true && _wanteddev_wds_engine.css`
            padding: 8px 0px;
          `}

          ${verticalPadding === false && _wanteddev_wds_engine.css`
            padding: 0px;
          `}
        }
      `;
		case "medium": return _wanteddev_wds_engine.css`
        [data-role='category-list-wrapper'] {
          gap: 6px;

          ${verticalPadding === true && _wanteddev_wds_engine.css`
            padding: 8px 0px;
          `}

          ${verticalPadding === false && _wanteddev_wds_engine.css`
            padding: 0px;
          `}
        }
      `;
		case "large": return _wanteddev_wds_engine.css`
        [data-role='category-list-wrapper'] {
          gap: 8px;

          ${verticalPadding === true && _wanteddev_wds_engine.css`
            padding: 10px 0px;
          `}

          ${verticalPadding === false && _wanteddev_wds_engine.css`
            padding: 0px;
          `}
        }
      `;
		case "xlarge": return _wanteddev_wds_engine.css`
        [data-role='category-list-wrapper'] {
          gap: 10px;

          ${verticalPadding === true && _wanteddev_wds_engine.css`
            padding: 10px 0px;
          `}

          ${verticalPadding === false && _wanteddev_wds_engine.css`
            padding: 0px;
          `}
        }
      `;
	}
};
const scrollWrapperStyle = _wanteddev_wds_engine.css`
  width: 100%;
  height: fit-content;
  background-color: transparent;

  [data-radix-scroll-area-viewport] {
    scroll-behavior: smooth;
  }

  [data-role='scroll-area-vertical-bar'] {
    display: none;
  }

  [data-role='scroll-area-horizontal-bar'] {
    display: none;
  }
`;
const categoryListItemStyle = ({ size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    scroll-margin-inline: 25px;
    position: relative;
    ${categoryListItemSizeStyle({ size })}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${categoryListItemSizeStyle(params)}
      `)}
  `;
const categoryListItemSizeStyle = ({ size } = {}) => {
	switch (size) {
		case "small": return _wanteddev_wds_engine.css`
        border-radius: 6px;
        padding: 4px 7px;
        gap: 2px;

        svg {
          font-size: 12px;
        }
        & > span {
          ${require_utils_typography.typographyStyle("caption1", "medium")}
          padding: 0 1px;
        }
      `;
		case "medium": return _wanteddev_wds_engine.css`
        border-radius: 8px;
        padding: 6px 8px;
        gap: 2px;

        svg {
          font-size: 14px;
        }
        & > span {
          ${require_utils_typography.typographyStyle("label1", "medium")}
          padding: 0 2px;
        }
      `;
		case "large": return _wanteddev_wds_engine.css`
        border-radius: 8px;
        padding: 7px 11px;
        gap: 3px;

        svg {
          font-size: 14px;
        }

        & > span {
          ${require_utils_typography.typographyStyle("body2", "medium")}
          padding: 0 2px;
        }
      `;
		case "xlarge": return _wanteddev_wds_engine.css`
        border-radius: 10px;
        padding: 9px 12px;
        gap: 3px;

        svg {
          font-size: 16px;
        }
        & > span {
          ${require_utils_typography.typographyStyle("body2", "medium")}
          padding: 0 2px;
        }
      `;
	}
};
const stickyButtonStyle = _wanteddev_wds_engine.css`
  position: sticky;
  right: 0px;
  height: 100%;
  flex-shrink: 0;
  padding: var(--wds-category-icon-button-padding, 0px);
`;
//#endregion
exports.categoryListItemStyle = categoryListItemStyle;
exports.categoryListStyle = categoryListStyle;
exports.scrollWrapperStyle = scrollWrapperStyle;
exports.stickyButtonStyle = stickyButtonStyle;
