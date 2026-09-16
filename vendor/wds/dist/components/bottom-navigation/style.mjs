'use client';
import { css } from "@wanteddev/wds-engine";
//#region src/components/bottom-navigation/style.ts
const bottomNavigationStyle = (theme) => css`
  ${theme.semantic.platform.ios.navigation}
  border-style: solid;
  border-top-width: 1px;
  border-color: ${theme.semantic.line.normal.alternative};
  height: 56px;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &[data-scroll-end='true'] {
    border-color: transparent;
    background-color: transparent;
    backdrop-filter: none;
  }
`;
const bottomNavigationItemStyle = (theme) => css`
  color: ${theme.semantic.interaction.inactive};
  padding: 9px 0px;
  background-color: transparent;
  font-size: 24px;

  &[aria-current='page'] {
    color: ${theme.semantic.primary.normal};
  }
`;
//#endregion
export { bottomNavigationItemStyle, bottomNavigationStyle };
