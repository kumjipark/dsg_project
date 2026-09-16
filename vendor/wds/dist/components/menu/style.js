'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/menu/style.ts
const menuPopoverContentStyle = (theme) => _wanteddev_wds_engine.css`
  padding: 0;
  width: 320px;
  box-shadow: ${theme.semantic.elevation.shadow.normal.small};
  border-radius: 16px;
  backdrop-filter: none;
  background-color: transparent;
`;
const menuScrollAreaStyle = (theme) => _wanteddev_wds_engine.css`
  width: 100%;
  min-width: 140px;
  max-height: 416px;
  height: auto;
  border-radius: inherit;
  border: 1px solid ${theme.semantic.line.solid.neutral};
  background-color: ${theme.semantic.background.elevated.normal};

  [data-radix-scroll-area-content] {
    width: 100%;
    min-width: initial !important;
  }
`;
const menuGroupTitleStyle = (theme) => _wanteddev_wds_engine.css`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 4px 20px;
  z-index: 10;
  margin: auto auto auto 0;
  background-color: ${theme.semantic.background.elevated.normal};
`;
const menuGroupStyle = _wanteddev_wds_engine.css`
  width: 100%;
`;
const menuListStyle = _wanteddev_wds_engine.css`
  padding: 8px 0;
`;
const menuItemStyle = (theme) => _wanteddev_wds_engine.css`
  width: calc(100% - 40px);

  &:focus-visible {
    outline: none;

    > [wds-component='with-interaction'] {
      opacity: 0.06;
    }
  }

  [data-role='menu-item-active-icon-check'] {
    color: ${theme.semantic.primary.normal};
  }
`;
const menuActionAreaStyle = (theme) => _wanteddev_wds_engine.css`
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 56px;
  padding: 0 12px;
  max-height: 56px;
  background-color: ${theme.semantic.background.elevated.normal};
  z-index: 10;
  border-top: 1px solid ${theme.semantic.line.solid.alternative};
`;
const menuActionAreaContentStyle = (variant) => _wanteddev_wds_engine.css`
  flex-shrink: 0;
  width: fit-content;
  height: fit-content;

  &[data-role='menu-action-area-leading-content'] {
    ${variant === "icon" && _wanteddev_wds_engine.css`
      padding-left: 6px;
    `}

    ${variant === "text-button" && _wanteddev_wds_engine.css`
      padding-left: 8px;
    `}

    ${variant === "badge" && _wanteddev_wds_engine.css`
      padding-left: 6px;
    `}
  }

  &[data-role='menu-action-area-trailing-content'] {
    ${variant === "badge" && _wanteddev_wds_engine.css`
      padding-right: 6px;
    `}
  }
`;
//#endregion
exports.menuActionAreaContentStyle = menuActionAreaContentStyle;
exports.menuActionAreaStyle = menuActionAreaStyle;
exports.menuGroupStyle = menuGroupStyle;
exports.menuGroupTitleStyle = menuGroupTitleStyle;
exports.menuItemStyle = menuItemStyle;
exports.menuListStyle = menuListStyle;
exports.menuPopoverContentStyle = menuPopoverContentStyle;
exports.menuScrollAreaStyle = menuScrollAreaStyle;
