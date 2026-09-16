'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/text-area/style.ts
const textAreaWrapperStyle = ({ disabled, invalid, width = "fit-content", xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    border: none;
    transition: box-shadow ease 0.2s;
    box-shadow:
      inset 0 0 0 1px ${theme.semantic.line.normal.neutral},
      ${theme.semantic.elevation.shadow.normal.xsmall};
    border-radius: 12px;
    background-color: ${theme.semantic.background.transparent.normal};
    backdrop-filter: blur(32px);
    padding: 12px;

    ${invalid && _wanteddev_wds_engine.css`
      box-shadow:
        inset 0 0 0 1px
          ${require_utils_color.addOpacity(theme.semantic.status.negative, theme.opacity[28])},
        ${theme.semantic.elevation.shadow.normal.xsmall};
    `}

    ${disabled ? _wanteddev_wds_engine.css`
          background-color: ${theme.semantic.fill.alternative};
          backdrop-filter: none;
          box-shadow:
            inset 0 0 0 1px ${theme.semantic.line.normal.alternative},
            ${theme.semantic.elevation.shadow.normal.xsmall};
          cursor: default;
        ` : _wanteddev_wds_engine.css`
          cursor: text;

          @supports selector(:has(*)) {
            &:where(:has(textarea:focus)) {
              ${invalid ? _wanteddev_wds_engine.css`
                    box-shadow:
                      inset 0 0 0 2px
                        ${require_utils_color.addOpacity(theme.semantic.status.negative, theme.opacity[43])},
                      ${theme.semantic.elevation.shadow.normal.xsmall};
                  ` : _wanteddev_wds_engine.css`
                    box-shadow:
                      inset 0 0 0 2px
                        ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[43])},
                      ${theme.semantic.elevation.shadow.normal.xsmall};
                  `}
            }
          }

          @supports not selector(:has(*)) {
            &:where(:focus-within) {
              ${invalid ? _wanteddev_wds_engine.css`
                    box-shadow:
                      inset 0 0 0 2px
                        ${require_utils_color.addOpacity(theme.semantic.status.negative, theme.opacity[43])},
                      ${theme.semantic.elevation.shadow.normal.xsmall};
                  ` : _wanteddev_wds_engine.css`
                    box-shadow:
                      inset 0 0 0 2px
                        ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[43])},
                      ${theme.semantic.elevation.shadow.normal.xsmall};
                  `}
            }
          }
        `}

    width: ${require_utils_internal_css.toCssValue(width)};

    button {
      flex-shrink: 0;
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
    }

    [data-radix-scroll-area-viewport] {
      height: var(--wds-text-area-scroll-height);
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
      `)}
  `;
const textAreaStyle = ({ xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    height: var(--wds-text-area-height);
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 4px;
    flex-shrink: 2;
    background-color: transparent;
    caret-color: ${theme.semantic.primary.normal};
    outline: none;
    border: none;
    resize: none;
    color: ${theme.semantic.label.normal};
    ${require_utils_typography.typographyStyle("body1-reading", "regular")}

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::placeholder {
      ${require_utils_typography.typographyStyle("body1-reading", "regular")}
      color: ${theme.semantic.label.assistive};
    }

    &:disabled {
      color: ${theme.semantic.label.alternative};
    }

    &:disabled::placeholder {
      color: ${theme.semantic.label.disable};
    }

    &:focus {
      outline: none;
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${Boolean(params?.width) && _wanteddev_wds_engine.css`
          width: ${params.width};
        `}

        ${params?.sx}
      `)}
  `;
const textAreaBottomAreaStyle = _wanteddev_wds_engine.css`
  width: 100%;
`;
const textAreaContentStyle = _wanteddev_wds_engine.css`
  flex-shrink: 0;
  width: fit-content;
  height: fit-content;
`;
const textAreaCharacterCounterStyle = (theme) => _wanteddev_wds_engine.css`
  padding: 0px 4px;
  opacity: ${theme.opacity[74]};

  &[data-is-overflow='true'] {
    [data-role='text-area-content-character-counter-length'] {
      color: ${theme.semantic.status.negative};
    }
  }
`;
const invalidIconWrapperStyle = (theme) => _wanteddev_wds_engine.css`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.semantic.static.white};
  }

  svg {
    color: ${theme.semantic.status.negative};
    z-index: 1;
  }
`;
//#endregion
exports.invalidIconWrapperStyle = invalidIconWrapperStyle;
exports.textAreaBottomAreaStyle = textAreaBottomAreaStyle;
exports.textAreaCharacterCounterStyle = textAreaCharacterCounterStyle;
exports.textAreaContentStyle = textAreaContentStyle;
exports.textAreaStyle = textAreaStyle;
exports.textAreaWrapperStyle = textAreaWrapperStyle;
