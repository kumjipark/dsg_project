'use client';
import { ellipsisTypographyStyle } from "../../utils/typography.mjs";
import { addOpacity } from "../../utils/color.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/progress-tracker/style.ts
const progressTrackerWrapperStyle = ({ direction }) => css`
  width: 100%;
  height: fit-content;
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;

  ${direction === "horizontal" ? css`
        flex-direction: row;
      ` : css`
        flex-direction: column;
      `}
`;
const progressTrackerItemVerticalStyle = css`
  position: relative;

  [data-role='progress-tracker-item-label'] {
    display: block;
    text-align: left;
    margin-right: 6px;
  }
`;
const progressTrackerItemVerticalLabelWrapperStyle = css`
  margin-bottom: 12px;
  height: 20px;
`;
const progressTrackerItemHorizontalStyle = css`
  flex: 1 0 0;
  min-width: 0;

  [data-role='progress-tracker-item-label'] {
    ${ellipsisTypographyStyle(1)}
  }
`;
const progressTrackerItemHorizontalWrapperStyle = css`
  width: 100%;
  position: relative;
`;
const progressTrackerItemDividerStyle = (isActive, direction) => (theme) => css`
    background-color: ${isActive ? theme.semantic.primary.normal : theme.semantic.line.normal.normal};

    ${direction === "vertical" ? css`
          height: 100%;
          width: 1px;
          flex: 1 1 0;
        ` : css`
          flex: 1 1 auto;
          height: 1px;
        `}
  `;
const progressTrackerItemContentStyle = css`
  padding-bottom: 20px;
  width: 100%;
`;
const progressCircleStyle = (isActive, completed) => (theme) => css`
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
        ${addOpacity(theme.semantic.static.black, theme.opacity[12])};
    }

    ${(isActive || completed) && css`
      background-color: ${theme.semantic.primary.normal};

      [data-role='progress-tracker-item-step'] {
        text-shadow: none;
      }
    `}
  `;
//#endregion
export { progressCircleStyle, progressTrackerItemContentStyle, progressTrackerItemDividerStyle, progressTrackerItemHorizontalStyle, progressTrackerItemHorizontalWrapperStyle, progressTrackerItemVerticalLabelWrapperStyle, progressTrackerItemVerticalStyle, progressTrackerWrapperStyle };
