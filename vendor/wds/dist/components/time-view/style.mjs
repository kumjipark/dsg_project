'use client';
import { addOpacity } from "../../utils/color.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/time-view/style.ts
const timeViewStyle = css`
  max-height: 324px;
  padding: 0 8px;
  overflow: hidden;
`;
const timeListStyle = () => css`
  height: 100%;

  &::after {
    content: '';
    display: block;
    min-height: calc(100% - 32px);
  }
`;
const timeListScrollArea = css`
  width: 100%;
  height: 100%;
`;
const timeListScrollAreaStyle = () => css`
  height: 100%;
  max-height: 100%;

  [data-radix-scroll-area-viewport] {
    padding: 8px 0;
  }
  [data-radix-scroll-area-content] {
    height: 100%;
  }
`;
const timeItemStyle = ({ active, disabled, variant }) => (theme) => css`
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    width: 60px;

    ${variant === "first" ? css`
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        ` : variant === "last" ? css`
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
          ` : variant === "single" && css`
            border-radius: 8px;
          `};

    &,
    p {
      text-align: center;
      font-weight: 400;
    }

    ${!disabled && active && css`
      &,
      p {
        color: ${theme.semantic.label.normal};
      }

      background-color: ${addOpacity(theme.semantic.primary.normal, theme.opacity[8])};
    `}

    &:focus-visible {
      outline: none;

      [wds-component='with-interaction'] {
        opacity: 0.06;
      }
    }
  `;
//#endregion
export { timeItemStyle, timeListScrollArea, timeListScrollAreaStyle, timeListStyle, timeViewStyle };
