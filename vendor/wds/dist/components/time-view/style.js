'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/time-view/style.ts
const timeViewStyle = _wanteddev_wds_engine.css`
  max-height: 324px;
  padding: 0 8px;
  overflow: hidden;
`;
const timeListStyle = () => _wanteddev_wds_engine.css`
  height: 100%;

  &::after {
    content: '';
    display: block;
    min-height: calc(100% - 32px);
  }
`;
const timeListScrollArea = _wanteddev_wds_engine.css`
  width: 100%;
  height: 100%;
`;
const timeListScrollAreaStyle = () => _wanteddev_wds_engine.css`
  height: 100%;
  max-height: 100%;

  [data-radix-scroll-area-viewport] {
    padding: 8px 0;
  }
  [data-radix-scroll-area-content] {
    height: 100%;
  }
`;
const timeItemStyle = ({ active, disabled, variant }) => (theme) => _wanteddev_wds_engine.css`
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    width: 60px;

    ${variant === "first" ? _wanteddev_wds_engine.css`
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        ` : variant === "last" ? _wanteddev_wds_engine.css`
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
          ` : variant === "single" && _wanteddev_wds_engine.css`
            border-radius: 8px;
          `};

    &,
    p {
      text-align: center;
      font-weight: 400;
    }

    ${!disabled && active && _wanteddev_wds_engine.css`
      &,
      p {
        color: ${theme.semantic.label.normal};
      }

      background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[8])};
    `}

    &:focus-visible {
      outline: none;

      [wds-component='with-interaction'] {
        opacity: 0.06;
      }
    }
  `;
//#endregion
exports.timeItemStyle = timeItemStyle;
exports.timeListScrollArea = timeListScrollArea;
exports.timeListScrollAreaStyle = timeListScrollAreaStyle;
exports.timeListStyle = timeListStyle;
exports.timeViewStyle = timeViewStyle;
