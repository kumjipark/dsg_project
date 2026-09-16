'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/tab/style.ts
const tabListStyle = ({ isScrollableLeft, isScrollableRight, resize, horizontalPadding, size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
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

    ${tabPaddingStyle({
	horizontalPadding,
	resize,
	isScrollableLeft,
	isScrollableRight
})}
    ${tabSizeStyle({
	size,
	resize
})}

    [data-role="tab-list-wrapper"] {
      gap: calc(var(--wds-tab-padding-x) * 2);
    }

    &::after {
      position: absolute;
      background-color: ${theme.semantic.line.normal.alternative};
      content: '';
      left: 0px;
      bottom: 0px;
      height: 1px;
      width: 100%;
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params, breakpoint) => _wanteddev_wds_engine.css`
        ${(Boolean(params?.resize) || Boolean(params?.size) || params?.horizontalPadding !== void 0) && _wanteddev_wds_engine.css`
          ${tabPaddingStyle({
	horizontalPadding: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "horizontalPadding", horizontalPadding, breakpoint),
	resize: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "resize", resize, breakpoint),
	isScrollableLeft,
	isScrollableRight
})}
          ${tabSizeStyle({
	size: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "size", size, breakpoint),
	resize: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "resize", resize, breakpoint)
})}
        `}
        ${params?.sx}
      `)}
  `;
const tabPaddingStyle = ({ horizontalPadding, resize, isScrollableLeft, isScrollableRight }) => {
	if (resize === "fill") return _wanteddev_wds_engine.css`
      &:not(:has([data-role='tab-list-icon-button'])),
      &:has([data-role='tab-list-icon-button']) {
        [data-radix-scroll-area-wrapper] {
          mask-image: none;
        }
        [data-radix-scroll-area-content] {
          padding: 0px;
        }
      }

      [data-role='tab-list-icon-button'] {
        display: none;
      }

      --wds-tab-list-item-flex: 1 1 0;
      --wds-tab-list-item-overflow: hidden;
      --wds-tab-list-item-text-display: block;
      --wds-tab-list-item-text-align: center;
      --wds-tab-icon-button-padding: 0px;
    `;
	switch (horizontalPadding) {
		case true: return _wanteddev_wds_engine.css`
        [data-role='tab-list-icon-button'] {
          display: flex;
        }

        &:not(:has([data-role='tab-list-icon-button']))
          [data-radix-scroll-area-content] {
          padding: 0px var(--wds-tab-list-padding, 20px);
        }

        &:has([data-role='tab-list-icon-button'])
          [data-radix-scroll-area-content] {
          padding: 0px 0px 0px var(--wds-tab-list-padding, 20px);
        }

        ${isScrollableRight ? _wanteddev_wds_engine.css`
              &:not(:has([data-role='tab-list-icon-button']))
                [data-radix-scroll-area-wrapper] {
                mask-image: none;
              }

              &:has([data-role='tab-list-icon-button'])
                [data-radix-scroll-area-wrapper] {
                mask-image: ${require_utils_color.getGradientMaskImage("right", "48px", "mask")};
              }
            ` : _wanteddev_wds_engine.css`
              &:not(:has([data-role='tab-list-icon-button']))
                [data-radix-scroll-area-wrapper],
              &:has([data-role='tab-list-icon-button'])
                [data-radix-scroll-area-wrapper] {
                mask-image: none;
              }
            `}

        --wds-tab-list-item-flex: initial;
        --wds-tab-list-item-overflow: initial;
        --wds-tab-list-item-text-display: block;
        --wds-tab-list-item-text-align: initial;
        --wds-tab-icon-button-padding: 0px
          calc(var(--wds-tab-list-padding, 20px) - 4px) 0px 0px;
      `;
		case false: return _wanteddev_wds_engine.css`
        [data-role='tab-list-icon-button'] {
          display: flex;
        }

        &:not(:has([data-role='tab-list-icon-button']))
          [data-radix-scroll-area-content],
        &:has([data-role='tab-list-icon-button'])
          [data-radix-scroll-area-content] {
          padding: 0px;
        }

        ${isScrollableLeft || isScrollableRight ? _wanteddev_wds_engine.css`
              &:has([data-role='tab-list-icon-button'])
                [data-radix-scroll-area-wrapper],
              &:not(:has([data-role='tab-list-icon-button']))
                [data-radix-scroll-area-wrapper] {
                mask-composite: intersect;
                mask-image: ${[isScrollableLeft && require_utils_color.getGradientMaskImage("left", "48px", "mask"), isScrollableRight && require_utils_color.getGradientMaskImage("right", "48px", "mask")].filter(Boolean).join(", ")};
              }
            ` : _wanteddev_wds_engine.css`
              &:not(:has([data-role='tab-list-icon-button']))
                [data-radix-scroll-area-wrapper],
              &:has([data-role='tab-list-icon-button'])
                [data-radix-scroll-area-wrapper] {
                mask-image: none;
              }
            `}

        --wds-tab-list-item-flex: initial;
        --wds-tab-list-item-overflow: initial;
        --wds-tab-list-item-text-display: block;
        --wds-tab-list-item-text-align: initial;
        --wds-tab-icon-button-padding: 0px;
      `;
	}
};
const tabSizeStyle = ({ size, resize }) => {
	switch (size) {
		case "small": return _wanteddev_wds_engine.css`
        --wds-tab-padding-x: ${resize === "fill" ? "0px" : "12px"};
        --wds-tab-padding-y: 9px;

        [wds-component='tab-list-item'] {
          ${require_utils_typography.typographyStyle("body2", "bold")}
        }
      `;
		case "medium": return _wanteddev_wds_engine.css`
        --wds-tab-padding-x: ${resize === "fill" ? "0px" : "12px"};
        --wds-tab-padding-y: 12px;

        [wds-component='tab-list-item'] {
          ${require_utils_typography.typographyStyle("headline2", "bold")}
        }
      `;
		case "large": return _wanteddev_wds_engine.css`
        --wds-tab-padding-x: ${resize === "fill" ? "0px" : "12px"};
        --wds-tab-padding-y: 14px;

        [wds-component='tab-list-item'] {
          ${require_utils_typography.typographyStyle("headline2", "bold")}
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
const tabListWrapperStyle = (theme) => _wanteddev_wds_engine.css`
  position: relative;

  --wds-tab-list-active-divider-color: ${theme.semantic.label.strong};
  --wds-tab-list-disabled-divider-color: ${theme.semantic.fill.alternative};

  --wds-tab-list-divider-color: var(--wds-tab-list-active-divider-color);

  &:has([aria-selected='true'][aria-disabled='true']) {
    --wds-tab-list-divider-color: var(--wds-tab-list-disabled-divider-color);
  }
`;
const motionDividerStyle = _wanteddev_wds_engine.css`
  position: absolute;
  height: 2px;
  background-color: var(--wds-tab-list-divider-color);
  transition: background-color 0.2s ease;
  display: none;
`;
const tabListItemStyle = ({ disabled }) => (theme) => _wanteddev_wds_engine.css`
    padding: var(--wds-tab-padding-y) 0px;
    scroll-margin-inline: 25px;
    flex: var(--wds-tab-list-item-flex, initial);
    overflow: var(--wds-tab-list-item-overflow, initial);
    position: relative;
    cursor: pointer;

    [data-role='tab-list-item-text-wrapper'] {
      position: relative;
      margin: 0;
      height: fit-content;
      padding: 0;
    }

    [data-role='tab-list-item-text'] {
      white-space: nowrap;
      transition: color 0.2s ease;
      display: var(--wds-tab-list-item-text-display, block);
      text-align: var(--wds-tab-list-item-text-align, initial);
    }

    [data-role='tab-list-item-divider'] {
      position: absolute;
      left: 0;
      transition: background-color 0.2s ease;
      bottom: calc(var(--wds-tab-padding-y) * -1);
      max-height: 0px;
      height: 2px;
      width: 100%;
      background-color: transparent;
      will-change: auto;
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
    }

    ${disabled ? _wanteddev_wds_engine.css`
          cursor: initial;
          [data-role='tab-list-item-text'] {
            color: ${theme.semantic.label.disable};
          }

          &[data-ssr-motion='true'] {
            [data-role='tab-list-item-divider'] {
              max-height: 2px;
              background-color: var(--wds-tab-list-disabled-divider-color);
            }
          }
        ` : _wanteddev_wds_engine.css`
          &[aria-selected='false']:hover [data-role='tab-list-item-text'] {
            color: ${theme.semantic.label.alternative};
          }

          &[aria-selected='false'] [data-role='tab-list-item-text'] {
            color: ${theme.semantic.label.assistive};
            &:hover {
              color: ${theme.semantic.label.alternative};
            }
          }

          &[aria-selected='true'] {
            [data-role='tab-list-item-text'] {
              color: ${theme.semantic.label.strong};
            }

            &[data-ssr-motion='true'] {
              [data-role='tab-list-item-divider'] {
                max-height: 2px;
                background-color: var(--wds-tab-list-active-divider-color);
              }
            }
          }
        `}

    &:focus-visible {
      outline-offset: -1px;
    }
  `;
const tabListItemInteractionStyle = _wanteddev_wds_engine.css`
  position: absolute;
  width: calc(100% + (var(--wds-tab-padding-x) * 2));
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
`;
const stickyButtonStyle = _wanteddev_wds_engine.css`
  position: sticky;
  right: 0px;
  height: 100%;
  flex-shrink: 0;
  padding: var(--wds-tab-icon-button-padding, 0px);
`;
//#endregion
exports.motionDividerStyle = motionDividerStyle;
exports.scrollWrapperStyle = scrollWrapperStyle;
exports.stickyButtonStyle = stickyButtonStyle;
exports.tabListItemInteractionStyle = tabListItemInteractionStyle;
exports.tabListItemStyle = tabListItemStyle;
exports.tabListStyle = tabListStyle;
exports.tabListWrapperStyle = tabListWrapperStyle;
