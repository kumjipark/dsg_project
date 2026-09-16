'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/progress-tracker/style.ts
const progressTrackerWrapperStyle = ({ direction }) => _wanteddev_wds_engine.css`
  width: 100%;
  height: fit-content;
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;

  ${direction === "horizontal" ? _wanteddev_wds_engine.css`
        flex-direction: row;
      ` : _wanteddev_wds_engine.css`
        flex-direction: column;
      `}
`;
const progressTrackerItemVerticalStyle = _wanteddev_wds_engine.css`
  position: relative;

  [data-role='progress-tracker-item-label'] {
    display: block;
    text-align: left;
    margin-right: 6px;
  }
`;
const progressTrackerItemVerticalLabelWrapperStyle = _wanteddev_wds_engine.css`
  margin-bottom: 12px;
  height: 20px;
`;
const progressTrackerItemHorizontalStyle = _wanteddev_wds_engine.css`
  flex: 1 0 0;
  min-width: 0;

  [data-role='progress-tracker-item-label'] {
    ${require_utils_typography.ellipsisTypographyStyle(1)}
  }
`;
const progressTrackerItemHorizontalWrapperStyle = _wanteddev_wds_engine.css`
  width: 100%;
  position: relative;
`;
const progressTrackerItemDividerStyle = (isActive, direction) => (theme) => _wanteddev_wds_engine.css`
    background-color: ${isActive ? theme.semantic.primary.normal : theme.semantic.line.normal.normal};

    ${direction === "vertical" ? _wanteddev_wds_engine.css`
          height: 100%;
          width: 1px;
          flex: 1 1 0;
        ` : _wanteddev_wds_engine.css`
          flex: 1 1 auto;
          height: 1px;
        `}
  `;
const progressTrackerItemContentStyle = _wanteddev_wds_engine.css`
  padding-bottom: 20px;
  width: 100%;
`;
const progressCircleStyle = (isActive, completed) => (theme) => _wanteddev_wds_engine.css`
    background-color: ${theme.semantic.fill.strong};
    color: ${theme.semantic.static.white};
    position: relative;
    width: 20px;
    height: 20px;
    position: relative;
    border-radius: 9999px;
    font-size: 14px;

    [data-role='progress-tracker-item-step'] {
      text-shadow: 0px 0px 12px
        ${require_utils_color.addOpacity(theme.semantic.static.black, theme.opacity[12])};
    }

    ${(isActive || completed) && _wanteddev_wds_engine.css`
      background-color: ${theme.semantic.primary.normal};

      [data-role='progress-tracker-item-step'] {
        text-shadow: none;
      }
    `}
  `;
//#endregion
exports.progressCircleStyle = progressCircleStyle;
exports.progressTrackerItemContentStyle = progressTrackerItemContentStyle;
exports.progressTrackerItemDividerStyle = progressTrackerItemDividerStyle;
exports.progressTrackerItemHorizontalStyle = progressTrackerItemHorizontalStyle;
exports.progressTrackerItemHorizontalWrapperStyle = progressTrackerItemHorizontalWrapperStyle;
exports.progressTrackerItemVerticalLabelWrapperStyle = progressTrackerItemVerticalLabelWrapperStyle;
exports.progressTrackerItemVerticalStyle = progressTrackerItemVerticalStyle;
exports.progressTrackerWrapperStyle = progressTrackerWrapperStyle;
