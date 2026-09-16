'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/page-counter/style.ts
const pageCounterStyle = ({ alternative, size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    list-style: none;
    margin: 0px;
    border-radius: 1000px;
    width: fit-content;
    position: relative;

    [data-role='page-counter-text'],
    [data-role='page-counter-divider'] {
      position: relative;
    }

    &::before {
      position: absolute;
      content: '';
      border-radius: inherit;
      ${alternative ? _wanteddev_wds_engine.css`
            background-color: ${require_utils_color.addOpacity(theme.atomic.coolNeutral[30], theme.opacity[61])};
          ` : _wanteddev_wds_engine.css`
            will-change: backdrop-filter;
            backdrop-filter: blur(32px) saturate(150%) brightness(150%);
            background-color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[35])};

            @supports (-webkit-backdrop-filter: none) {
              clip-path: inset(0 round 1000px);
              overflow: auto;
              border-radius: 0;
            }
          `}
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
    }

    ${alternative ? _wanteddev_wds_engine.css`
          [data-role='page-counter-text'] {
            color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[88])};

            &:first-of-type {
              text-shadow: 0px 0px 6px
                ${require_utils_color.addOpacity(theme.semantic.static.black, theme.opacity[8])};
            }
          }

          [data-role='page-counter-divider'] {
            color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[52])};
          }
        ` : _wanteddev_wds_engine.css`
          [data-role='page-counter-text'] {
            color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[88])};

            &:first-of-type {
              text-shadow: 0px 0px 6px
                ${require_utils_color.addOpacity(theme.semantic.static.black, theme.opacity[8])};
            }
          }

          [data-role='page-counter-divider'] {
            color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[61])};
          }
        `}

    ${paginationCounterSizeStyle({ size })}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${paginationCounterSizeStyle({ size: params?.size })}
        ${params?.sx}
      `)}
  `;
const paginationCounterSizeStyle = ({ size }) => {
	switch (size) {
		case "small": return _wanteddev_wds_engine.css`
        padding: 4px 10px;
        gap: 3px;

        [data-role='page-counter-divider'] {
          ${require_utils_typography.typographyStyle("label2", "regular")}
        }
        [data-role='page-counter-text'] {
          ${require_utils_typography.typographyStyle("label2", "bold")}
        }
      `;
		case "medium": return _wanteddev_wds_engine.css`
        padding: 6px 12px;
        gap: 4px;

        [data-role='page-counter-divider'] {
          ${require_utils_typography.typographyStyle("body2", "regular")}
        }
        [data-role='page-counter-text'] {
          ${require_utils_typography.typographyStyle("body2", "bold")}
        }
      `;
	}
};
const backgroundBlendStyle = (theme) => _wanteddev_wds_engine.css`
  position: absolute;
  content: '';
  background-color: ${require_utils_color.addOpacity(theme.semantic.static.black, theme.opacity[28])};
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  border-radius: inherit;
`;
//#endregion
exports.backgroundBlendStyle = backgroundBlendStyle;
exports.pageCounterStyle = pageCounterStyle;
