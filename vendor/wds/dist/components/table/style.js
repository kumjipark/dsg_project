'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_style = require("../with-interaction/style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/table/style.ts
const tableStyle = (theme) => _wanteddev_wds_engine.css`
  --wds-table-head-cell-padding-x: 20px;
  --wds-table-head-cell-padding-y: 8px;
  --wds-table-head-cell-min-height: 44px;

  --wds-table-cell-padding-x: 20px;
  --wds-table-cell-padding-y: 16px;
  --wds-table-cell-min-height: 44px;

  --wds-table-border-color: ${theme.semantic.line.solid.neutral};

  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--wds-table-border-color);

  table {
    display: table;
    margin: 0;
    padding: 0;
    border-collapse: separate;
    border-spacing: 0;
    border: none;
    width: 100%;
    position: relative;

    tfoot:has(tr) tr:last-child th,
    tfoot:has(tr) tr:last-child td {
      border-bottom: none;
    }

    :not(:has(tfoot tr)):has(tbody tr) tbody tr:last-child th,
    :not(:has(tfoot tr)):has(tbody tr) tbody tr:last-child td {
      border-bottom: none;
    }

    :not(:has(tfoot tr)):not(:has(tbody tr)) thead tr:last-child th,
    :not(:has(tfoot tr)):not(:has(tbody tr)) thead tr:last-child td {
      border-bottom: none;
    }
  }
`;
const scrollAreaStyle = _wanteddev_wds_engine.css`
  display: flex;
  flex-direction: column;
`;
const tableHeadCellStyle = _wanteddev_wds_engine.css`
  padding: var(--wds-table-head-cell-padding-y, 8px) 0px
    var(--wds-table-head-cell-padding-y, 8px)
    var(--wds-table-head-cell-padding-x, 20px);
  height: var(--wds-table-head-cell-min-height, 44px);
  vertical-align: middle;
  display: table-cell;
  border: none;
  border-bottom: 1px solid var(--wds-table-border-color);
`;
const tableCellStyle = _wanteddev_wds_engine.css`
  padding: var(--wds-table-cell-padding-y, 16px) 0px
    var(--wds-table-cell-padding-y, 16px) var(--wds-table-cell-padding-x, 20px);
  vertical-align: middle;
  display: table-cell;
  border: none;
  height: var(--wds-table-cell-min-height, 44px);
  border-bottom: 1px solid var(--wds-table-border-color);
`;
const tableRowStyle = (interaction) => (theme) => _wanteddev_wds_engine.css`
  position: relative;
  display: table-row;
  margin: 0;
  padding: 0;
  border: none;

  td:last-child {
    padding-right: var(--wds-table-head-cell-padding-x, 20px);
  }
  th:last-child {
    padding-right: var(--wds-table-head-cell-padding-x, 20px);
  }

  ${interaction && _wanteddev_wds_engine.css`
    cursor: pointer;

    ::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      width: 100%;
      height: 100%;
      background-color: ${theme.semantic.label.normal};
      opacity: 0;
      transition:
        background ease 0.2s,
        opacity ease 0.2s;
    }

    &:hover::after {
      ${require_components_with_interaction_style.hoverInteractionStyle(theme, "normal")}
    }

    &:active::after {
      ${require_components_with_interaction_style.activeInteractionStyle(theme, "normal")}
    }
  `}
`;
const tableHeadStyle = (isSticky) => (theme) => _wanteddev_wds_engine.css`
  margin: 0;
  padding: 0;
  display: table-header-group;
  position: sticky;
  top: 0px;
  z-index: 1;
  border: none;
  will-change: backdrop-filter;

  ${isSticky ? _wanteddev_wds_engine.css`
        ${theme.semantic.platform.ios.navigation}

        &::before {
          content: '';
          width: 100%;
          height: 100%;
          inset: 0;
          z-index: -1;
          position: absolute;
          background-color: ${theme.semantic.fill.alternative};
        }
      ` : _wanteddev_wds_engine.css`
        background-color: ${theme.semantic.fill.alternative};
      `}
`;
const tableBodyStyle = _wanteddev_wds_engine.css`
  margin: 0;
  padding: 0;
  display: table-row-group;
  border: none;
`;
const tableFootStyle = _wanteddev_wds_engine.css`
  margin: 0;
  padding: 0;
  display: table-row-group;
  border: none;
`;
const paginationWrapperStyle = _wanteddev_wds_engine.css`
  padding: var(--wds-table-cell-padding-y, 16px)
    var(--wds-table-cell-padding-x, 20px);
  border-top: 1px solid var(--wds-table-border-color);
`;
//#endregion
exports.paginationWrapperStyle = paginationWrapperStyle;
exports.scrollAreaStyle = scrollAreaStyle;
exports.tableBodyStyle = tableBodyStyle;
exports.tableCellStyle = tableCellStyle;
exports.tableFootStyle = tableFootStyle;
exports.tableHeadCellStyle = tableHeadCellStyle;
exports.tableHeadStyle = tableHeadStyle;
exports.tableRowStyle = tableRowStyle;
exports.tableStyle = tableStyle;
