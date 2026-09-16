'use client';
import { typographyStyle } from "../../utils/typography.mjs";
import { activeInteractionStyle } from "../with-interaction/style.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/pagination/style.ts
const paginationStyle = ({ variant }) => variant === "extended" && css`
    min-height: 32px;
  `;
const paginationItemStyle = css`
  width: fit-content;
`;
const pageButtonStyle = (theme) => css`
  width: fit-content;
  min-width: 20px;

  // TextButton Typography
  > span {
    ${typographyStyle("body2", "regular")}
    will-change: font-weight, color;
    transition:
      font-weight 0.15s ease,
      color 0.15s ease;
  }

  // TextButton Interaction
  [wds-component='with-interaction'] {
    width: calc(100% + 10px);
  }

  &:not([aria-disabled='true']) {
    > span {
      color: ${theme.semantic.label.neutral};
    }

    &[aria-current='page'] {
      > span {
        ${typographyStyle("body2", "medium")}
        color: ${theme.semantic.label.normal};
      }

      [wds-component='with-interaction'] {
        ${activeInteractionStyle(theme, "light")}
      }
    }
  }
`;
const paginationFieldStyle = css`
  border-radius: 8px;

  [data-role='text-field-wrapper'] {
    padding: 6px;
  }

  input {
    ${typographyStyle("label1", "medium")}
    text-align: center;
  }

  [data-role='text-field-reset'] {
    display: none;
  }
`;
const paginationContentStyle = css`
  flex: 1;
  min-width: max-content;
  min-height: 32px;
  align-items: center;

  &[data-role='pagination-trailing-content-wrapper'] {
    justify-content: flex-end;
  }
`;
//#endregion
export { pageButtonStyle, paginationContentStyle, paginationFieldStyle, paginationItemStyle, paginationStyle };
