'use client';
import { css } from "@wanteddev/wds-engine";
//#region src/components/autocomplete/style.ts
const autocompleteListStyle = (theme) => css`
  padding: 0px;
  box-shadow: ${theme.semantic.elevation.shadow.normal.small};
  border-radius: 16px;
  background-color: ${theme.semantic.background.elevated.normal};
`;
const autocompleteScrollAreaStyle = (theme) => css`
  border: 1px solid ${theme.semantic.line.solid.neutral};
  border-radius: 16px;
  min-width: 140px;
  height: auto;
  max-height: 400px;
  border-radius: inherit;
`;
const autocompleteListContentStyle = css`
  display: flex;
  align-items: center;
  padding: 8px 0px;
`;
const autocompleteGroupTitleStyle = (theme) => css`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 4px 20px;
  z-index: 10;
  margin: auto auto auto 0;
  background-color: ${theme.semantic.background.elevated.normal};
`;
const autocompleteOptionStyle = (theme) => css`
  width: calc(100% - 40px);
  cursor: pointer;

  &[aria-disabled='true'] {
    cursor: initial;
  }

  [data-role='autocomplete-option-active-icon-check'] {
    color: ${theme.semantic.primary.normal};
  }

  &[data-focus='true'] > [wds-component='with-interaction'] {
    opacity: ${theme.opacity[0]};
  }

  &[data-focus-visible='true'] > [wds-component='with-interaction'] {
    opacity: 0.06;
  }
`;
//#endregion
export { autocompleteGroupTitleStyle, autocompleteListContentStyle, autocompleteListStyle, autocompleteOptionStyle, autocompleteScrollAreaStyle };
