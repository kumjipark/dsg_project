'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/date-calendar/style.ts
const dateCalendarStyle = (theme) => _wanteddev_wds_engine.css`
  width: 276px;
  background-color: ${theme.semantic.background.elevated.normal};
`;
const stickyDateCalendarStyle = (theme) => _wanteddev_wds_engine.css`
  top: 0;
  z-index: 10;
  position: sticky;
  background: ${require_utils_color.addOpacity(theme.semantic.background.elevated.normal, theme.opacity[88])};
  backdrop-filter: blur(32px);
`;
const dateCalendarHeaderStyle = _wanteddev_wds_engine.css`
  padding: 20px 12px 10px 12px;
`;
const dateCalendarHeaderLabelStyle = _wanteddev_wds_engine.css`
  padding: 0px 12px;
`;
const weekdayCellStyle = _wanteddev_wds_engine.css`
  padding: 11px 0px;
  width: 36px;
`;
const dateCalendarHeaderLabelButtonStyle = (theme) => _wanteddev_wds_engine.css`
  color: ${theme.semantic.label.normal};
  padding-top: 0px;
  padding-bottom: 0px;

  & > [wds-component='with-interaction'] {
    height: calc(100% + 8px);
  }
`;
const dateCalendarHeaderNavigationStyle = _wanteddev_wds_engine.css`
  padding: 3px 9px;
`;
const dateCalendarWrapperStyle = _wanteddev_wds_engine.css`
  height: 334px;
  width: 276px;

  [data-radix-scroll-area-viewport] {
    scroll-padding-top: 54px;
  }
`;
const dateYearMonthWrapperStyle = _wanteddev_wds_engine.css`
  padding: 2px 12px;
  outline: none;
`;
const dayItemButtonStyle = (theme) => _wanteddev_wds_engine.css`
  color: ${theme.semantic.label.normal};
  border: none;
  border-radius: 10000px;
  padding: 7px 0px;
  margin: 2px;
  background-color: transparent;

  ${require_utils_typography.typographyStyle("label2", "medium")}

  &:disabled {
    cursor: initial;
    color: ${theme.semantic.label.assistive};
  }

  &[data-other-month='true'] {
    color: ${theme.semantic.label.assistive};
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

  &[aria-selected='true'] {
    color: ${theme.semantic.static.white};
    background-color: ${theme.semantic.primary.normal};
    &:disabled,
    &[data-other-month='true'] {
      color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[43])};
      background-color: ${theme.semantic.primary.normal};
    }
  }

  &[aria-checked='true'] {
    color: ${theme.semantic.static.white};
    background-color: ${theme.semantic.primary.normal};
    &:disabled,
    &[data-other-month='true'] {
      color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[43])};
      background-color: ${theme.semantic.primary.normal};
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
`;
//#endregion
exports.dateCalendarHeaderLabelButtonStyle = dateCalendarHeaderLabelButtonStyle;
exports.dateCalendarHeaderLabelStyle = dateCalendarHeaderLabelStyle;
exports.dateCalendarHeaderNavigationStyle = dateCalendarHeaderNavigationStyle;
exports.dateCalendarHeaderStyle = dateCalendarHeaderStyle;
exports.dateCalendarStyle = dateCalendarStyle;
exports.dateCalendarWrapperStyle = dateCalendarWrapperStyle;
exports.dateYearMonthWrapperStyle = dateYearMonthWrapperStyle;
exports.dayItemButtonStyle = dayItemButtonStyle;
exports.stickyDateCalendarStyle = stickyDateCalendarStyle;
exports.weekdayCellStyle = weekdayCellStyle;
