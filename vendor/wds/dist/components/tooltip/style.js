'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/tooltip/style.ts
const mountKeyframes = _wanteddev_wds_engine.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const unmountKeyframes = _wanteddev_wds_engine.keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const tooltipWrapperStyle = ({ size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    backdrop-filter: blur(32px);
    max-width: 280px;

    &[data-status='open'] {
      animation: ${mountKeyframes} 200ms ease-in-out;
    }

    &[data-status='close'] {
      animation: ${unmountKeyframes} 200ms ease-in-out;
    }

    ${tooltipWrapperSizeStyle({ size })}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${tooltipWrapperSizeStyle({ size: params?.size })}
        ${params?.sx}
      `)}
  `;
const tooltipWrapperSizeStyle = ({ size }) => {
	switch (size) {
		case "small": return _wanteddev_wds_engine.css`
        border-radius: 6px;

        [data-role='tooltip-content-text'],
        [data-role='tooltip-content-shortcut'] {
          ${require_utils_typography.typographyStyle("caption2", "medium")}
        }

        [data-role='tooltip-content-text-wrapper'] {
          padding: 0px;
        }

        [data-role='tooltip-content'] {
          padding: 5px 8px;
        }

        [data-role='tooltip-content-close-button'] {
          font-size: 10px;

          & > [wds-component='with-interaction'] {
            width: calc(100% + 8px);
            height: calc(100% + 8px);
          }
        }

        [data-role='tooltip-content-close-button-wrapper'] {
          padding: 2px 0px;
        }

        [data-role='tooltip-arrow-medium'] {
          display: none;
        }

        [data-role='tooltip-arrow-small'] {
          display: initial;
        }
      `;
		case "medium": return _wanteddev_wds_engine.css`
        border-radius: 8px;

        [data-role='tooltip-content-text'],
        [data-role='tooltip-content-shortcut'] {
          ${require_utils_typography.typographyStyle("label1", "medium")}
        }

        [data-role='tooltip-content-text-wrapper'] {
          padding: 0px 2px;
        }

        [data-role='tooltip-content'] {
          padding: 8px 10px;
        }

        [data-role='tooltip-content-close-button'] {
          font-size: 16px;

          & > [wds-component='with-interaction'] {
            width: calc(100% + 16px);
            height: calc(100% + 16px);
          }
        }

        [data-role='tooltip-content-close-button-wrapper'] {
          padding: 2px;
        }

        [data-role='tooltip-arrow-medium'] {
          display: initial;
        }

        [data-role='tooltip-arrow-small'] {
          display: none;
        }
      `;
	}
};
const tooltipContentStyle = (theme) => _wanteddev_wds_engine.css`
  border-radius: inherit;
  background-color: ${require_utils_color.addOpacity(theme.semantic.inverse.background, theme.opacity[88])};
  color: ${theme.semantic.inverse.label};
  position: relative;

  &::before {
    border-radius: inherit;
    background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[5])};
    content: '';
    inset: 0;
    position: absolute;
  }

  button {
    color: ${require_utils_color.addOpacity(theme.semantic.inverse.label, theme.opacity[61])} !important;
  }

  [wds-component='with-interaction'] {
    background: ${theme.semantic.inverse.label};
  }
`;
const tooltipContentShortcutStyle = (theme) => _wanteddev_wds_engine.css`
  color: ${require_utils_color.addOpacity(theme.semantic.inverse.label, theme.opacity[61])};
  width: fit-content;
  flex-shrink: 0;
`;
//#endregion
exports.tooltipContentShortcutStyle = tooltipContentShortcutStyle;
exports.tooltipContentStyle = tooltipContentStyle;
exports.tooltipWrapperSizeStyle = tooltipWrapperSizeStyle;
exports.tooltipWrapperStyle = tooltipWrapperStyle;
