'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/autocomplete/style.ts
const autocompleteListStyle = (theme) => _wanteddev_wds_engine.css`
  padding: 0px;
  box-shadow: ${theme.semantic.elevation.shadow.normal.small};
  border-radius: 16px;
  background-color: ${theme.semantic.background.elevated.normal};
`;
const autocompleteScrollAreaStyle = (theme) => _wanteddev_wds_engine.css`
  border: 1px solid ${theme.semantic.line.solid.neutral};
  border-radius: 16px;
  min-width: 140px;
  height: auto;
  max-height: 400px;
  border-radius: inherit;
`;
const autocompleteListContentStyle = _wanteddev_wds_engine.css`
  display: flex;
  align-items: center;
  padding: 8px 0px;
`;
const autocompleteGroupTitleStyle = (theme) => _wanteddev_wds_engine.css`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 4px 20px;
  z-index: 10;
  margin: auto auto auto 0;
  background-color: ${theme.semantic.background.elevated.normal};
`;
const autocompleteOptionStyle = (theme) => _wanteddev_wds_engine.css`
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
exports.autocompleteGroupTitleStyle = autocompleteGroupTitleStyle;
exports.autocompleteListContentStyle = autocompleteListContentStyle;
exports.autocompleteListStyle = autocompleteListStyle;
exports.autocompleteOptionStyle = autocompleteOptionStyle;
exports.autocompleteScrollAreaStyle = autocompleteScrollAreaStyle;
