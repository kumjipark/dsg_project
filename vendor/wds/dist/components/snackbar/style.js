'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_media = require("../../utils/media.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/snackbar/style.ts
const mountKeyframes = _wanteddev_wds_engine.keyframes`
  from {
    opacity: 0;
    height: 0;
    margin-top: 0;
  }
  to {
    opacity: 1;
    height: var(--wds-snackbar-animation-height);
    margin-top: var(--wds-snackbar-animation-margin-top);
  }
`;
const unmountKeyframes = _wanteddev_wds_engine.keyframes`
  from {
    opacity: 1;
    height: var(--wds-snackbar-animation-height);
    margin-top: var(--wds-snackbar-animation-margin-top);
  }
  to {
    opacity: 0;
    height: 0;
    margin-top: 0;
  }
`;
const wrapperStyle = ({ disableAnimation }) => (theme) => _wanteddev_wds_engine.css`
    backdrop-filter: blur(32px);
    will-change: backdrop-filter;
    border-radius: 12px;
    margin-top: var(--wds-snackbar-animation-margin-top);
    max-width: 100%;

    ${require_utils_media.respondMore(theme.breakpoint.sm)} {
      min-width: 356px;
      max-width: 420px;
    }
    ${require_utils_media.respondTo(theme.breakpoint.sm)} {
      width: 100%;
    }

    ${!disableAnimation && _wanteddev_wds_engine.css`
      &[data-status='open'] {
        animation: ${mountKeyframes} 0.2s ease;
      }
      &[data-status='close'] {
        animation: ${unmountKeyframes} 0.2s ease;
      }
    `}
  `;
const snackbarStyle = _wanteddev_wds_engine.css`
  border-radius: inherit;
  padding: 11px 16px;
  display: flex;
  gap: 16px;
  font-size: 20px;
  pointer-events: auto;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > :not([role='presentation']) {
    z-index: 1;
  }
`;
const firstOverlayStyle = (theme) => _wanteddev_wds_engine.css`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${require_utils_color.addOpacity(theme.semantic.inverse.background, theme.opacity[52])};
  inset: 0;
`;
const secondOverlayStyle = (theme) => _wanteddev_wds_engine.css`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[5])};
  inset: 0;
`;
const messageStyle = _wanteddev_wds_engine.css`
  padding: 5px 2px;
`;
const snackbarActionStyle = (theme) => _wanteddev_wds_engine.css`
  color: ${theme.semantic.static.white};
  margin: 0px 2px;
  flex-shrink: 0;

  & > span {
    ${require_utils_typography.typographyStyle("body2", "bold")}
  }

  & [wds-component='with-interaction'] {
    background-color: ${theme.semantic.background.normal.normal};
  }
`;
const textStyle = (theme) => _wanteddev_wds_engine.css`
  opacity: ${theme.opacity[88]};
  word-break: keep-all;
  overflow-wrap: anywhere;
`;
const fullWidthFlexBoxStyle = _wanteddev_wds_engine.css`
  width: 100%;
`;
const snackbarCloseButtonStyle = (theme) => _wanteddev_wds_engine.css`
  flex-shrink: 0;
  padding: 2px;
  width: fit-content;
  height: fit-content;

  svg {
    opacity: ${theme.opacity[61]};
  }

  & [wds-component='with-interaction'] {
    background-color: ${theme.semantic.background.normal.normal};
  }
`;
//#endregion
exports.firstOverlayStyle = firstOverlayStyle;
exports.fullWidthFlexBoxStyle = fullWidthFlexBoxStyle;
exports.messageStyle = messageStyle;
exports.secondOverlayStyle = secondOverlayStyle;
exports.snackbarActionStyle = snackbarActionStyle;
exports.snackbarCloseButtonStyle = snackbarCloseButtonStyle;
exports.snackbarStyle = snackbarStyle;
exports.textStyle = textStyle;
exports.wrapperStyle = wrapperStyle;
