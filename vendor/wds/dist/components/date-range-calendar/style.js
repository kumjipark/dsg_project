'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/date-range-calendar/style.ts
const rangeCalendarContainerStyle = _wanteddev_wds_engine.css`
  display: flex;
  flex-direction: row;
`;
const rangePanelStyle = (theme) => _wanteddev_wds_engine.css`
  width: 276px;
  background-color: ${theme.semantic.background.elevated.normal};
  flex-shrink: 0;
`;
const rangePanelHeaderStyle = _wanteddev_wds_engine.css`
  padding: 20px 12px 10px 12px;
`;
const rangePanelHeaderLabelStyle = _wanteddev_wds_engine.css`
  padding: 0px 12px;
`;
const rangePanelHeaderNavigationStyle = _wanteddev_wds_engine.css`
  padding: 3px 9px;
`;
const rangePanelWrapperStyle = _wanteddev_wds_engine.css`
  height: 334px;
  width: 276px;

  [data-radix-scroll-area-viewport] {
    scroll-padding-top: 54px;
  }
`;
const rangeStickyHeaderStyle = (theme) => _wanteddev_wds_engine.css`
  top: 0;
  z-index: 10;
  position: sticky;
  background: ${require_utils_color.addOpacity(theme.semantic.background.elevated.normal, theme.opacity[88])};
  backdrop-filter: blur(32px);
`;
const rangeWeekdayCellStyle = _wanteddev_wds_engine.css`
  padding: 11px 0px;
  width: 36px;
`;
const rangeGridWrapperStyle = _wanteddev_wds_engine.css`
  padding: 2px 12px;
  outline: none;
  row-gap: 2px;
  column-gap: 0px;
`;
const rangeCellBaseStyle = (theme) => _wanteddev_wds_engine.css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 0;
    right: 0;
    background-color: transparent;
    pointer-events: none;
  }

  &[data-in-range='true']::before {
    background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[8])};
  }

  &[data-range-start='true']::before {
    background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[8])};
    left: 50%;
  }

  &[data-range-end='true']::before {
    background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[8])};
    right: 50%;
  }

  &[data-range-start='true'][data-range-end='true']::before {
    display: none;
  }
`;
const rangeDayCellStyle = (theme) => _wanteddev_wds_engine.css`
  ${rangeCellBaseStyle(theme)}
  width: 36px;
`;
const rangeMonthYearCellStyle = rangeCellBaseStyle;
const rangeDayItemStyle = (theme) => _wanteddev_wds_engine.css`
  color: ${theme.semantic.label.normal};
  border: none;
  padding: 7px 0px;
  margin: 2px;
  background-color: transparent;
  position: relative;
  z-index: 1;
  border-radius: 8px;
  height: fit-content;

  ${require_utils_typography.typographyStyle("label2", "medium")}

  &:disabled {
    cursor: initial;
    color: ${theme.semantic.label.assistive};
  }

  &[data-other-month='true'] {
    color: ${theme.semantic.label.disable};
  }

  &[aria-current='date'] {
    color: ${theme.semantic.primary.normal};
    background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[8])};

    &:disabled,
    &[data-other-month='true'] {
      color: ${theme.semantic.label.disable};
      background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[8])};
    }
  }

  &:not(:hover):not(:active) > [wds-component='with-interaction'] {
    transition: none;
  }

  &:focus-visible {
    outline: none;

    & > [wds-component='with-interaction'] {
      transition: none;
      opacity: 0.06;
    }
  }

  &[aria-selected='true'] {
    color: ${theme.semantic.static.white};
    background-color: ${theme.semantic.primary.normal};
    &:disabled,
    &[data-other-month='true'] {
      color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[43])};
      background-color: ${theme.semantic.primary.normal};
    }
  }
`;
//#endregion
exports.rangeCalendarContainerStyle = rangeCalendarContainerStyle;
exports.rangeDayCellStyle = rangeDayCellStyle;
exports.rangeDayItemStyle = rangeDayItemStyle;
exports.rangeGridWrapperStyle = rangeGridWrapperStyle;
exports.rangeMonthYearCellStyle = rangeMonthYearCellStyle;
exports.rangePanelHeaderLabelStyle = rangePanelHeaderLabelStyle;
exports.rangePanelHeaderNavigationStyle = rangePanelHeaderNavigationStyle;
exports.rangePanelHeaderStyle = rangePanelHeaderStyle;
exports.rangePanelStyle = rangePanelStyle;
exports.rangePanelWrapperStyle = rangePanelWrapperStyle;
exports.rangeStickyHeaderStyle = rangeStickyHeaderStyle;
exports.rangeWeekdayCellStyle = rangeWeekdayCellStyle;
