'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_typography = require("../../utils/typography.js");
const require_components_with_interaction_style = require("../with-interaction/style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/pagination/style.ts
const paginationStyle = ({ variant }) => variant === "extended" && _wanteddev_wds_engine.css`
    min-height: 32px;
  `;
const paginationItemStyle = _wanteddev_wds_engine.css`
  width: fit-content;
`;
const pageButtonStyle = (theme) => _wanteddev_wds_engine.css`
  width: fit-content;
  min-width: 20px;

  // TextButton Typography
  > span {
    ${require_utils_typography.typographyStyle("body2", "regular")}
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
        ${require_utils_typography.typographyStyle("body2", "medium")}
        color: ${theme.semantic.label.normal};
      }

      [wds-component='with-interaction'] {
        ${require_components_with_interaction_style.activeInteractionStyle(theme, "light")}
      }
    }
  }
`;
const paginationFieldStyle = _wanteddev_wds_engine.css`
  border-radius: 8px;

  [data-role='text-field-wrapper'] {
    padding: 6px;
  }

  input {
    ${require_utils_typography.typographyStyle("label1", "medium")}
    text-align: center;
  }

  [data-role='text-field-reset'] {
    display: none;
  }
`;
const paginationContentStyle = _wanteddev_wds_engine.css`
  flex: 1;
  min-width: max-content;
  min-height: 32px;
  align-items: center;

  &[data-role='pagination-trailing-content-wrapper'] {
    justify-content: flex-end;
  }
`;
//#endregion
exports.pageButtonStyle = pageButtonStyle;
exports.paginationContentStyle = paginationContentStyle;
exports.paginationFieldStyle = paginationFieldStyle;
exports.paginationItemStyle = paginationItemStyle;
exports.paginationStyle = paginationStyle;
