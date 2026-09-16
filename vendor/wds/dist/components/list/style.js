'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
const require_utils_typography = require("../../utils/typography.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/list/style.ts
const listStyle = _wanteddev_wds_engine.css`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const listCellStyle = ({ verticalPadding, fillWidth, interactionPadding, selected, disabled, disableInteraction, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    width: 100%;
    padding-top: var(--wds-list-cell-vertical-padding);
    padding-bottom: var(--wds-list-cell-vertical-padding);
    padding-left: var(--wds-list-cell-horizontal-padding);
    padding-right: var(--wds-list-cell-horizontal-padding);

    ${disabled ? _wanteddev_wds_engine.css`
          cursor: initial;
          pointer-events: none;
          color: ${theme.semantic.label.alternative};
          opacity: ${theme.opacity[43]};
        ` : _wanteddev_wds_engine.css`
          color: ${selected ? theme.semantic.primary.normal : theme.semantic.label.normal};

          ${!disableInteraction && _wanteddev_wds_engine.css`
            cursor: pointer;
          `}
        `}

    &[data-disable-interaction='false'] {
      @media (pointer: fine) {
        &:hover {
          [data-role='list-cell-divider'] {
            opacity: 0;
          }
        }
      }

      &:active {
        [data-role='list-cell-divider'] {
          opacity: 0;
        }
      }
    }

    ${listCellPaddingStyle({ verticalPadding })}
    ${listCellFillWidthStyle({ fillWidth })}
    ${listCellInteractionPaddingStyle({
	fillWidth,
	interactionPadding
})}

    & > [wds-component='with-interaction'] {
      border-radius: inherit;
      display: var(--wds-list-cell-interaction-display, block);
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params, breakpoint) => _wanteddev_wds_engine.css`
        ${listCellPaddingStyle({ verticalPadding: params?.verticalPadding })}
        ${listCellFillWidthStyle({ fillWidth: params?.fillWidth })}
        ${listCellInteractionPaddingStyle({
	fillWidth: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "fillWidth", fillWidth, breakpoint),
	interactionPadding: params?.interactionPadding
})}
        ${params?.sx}
      `)}
  `;
const listTextContentWrapperStyle = (ellipsis) => _wanteddev_wds_engine.css`
  min-height: 24px;
  align-items: center;
  display: flex;
  flex: 1;
  position: relative;
  text-align: inherit;

  [data-role='list-text-content'] {
    display: block;
    text-align: inherit;
    width: 100%;
    ${listTextEllipsisStyle(ellipsis)}
  }
`;
const listTextEllipsisStyle = (ellipsis) => ellipsis ? _wanteddev_wds_engine.css`
        ${require_utils_typography.ellipsisTypographyStyle(1)}
        white-space: nowrap;
        overflow-wrap: anywhere;
        word-break: keep-all;
      ` : _wanteddev_wds_engine.css`
        word-break: keep-all;
        overflow-wrap: break-word;
      `;
const listCellInteractionPaddingStyle = ({ fillWidth, interactionPadding }) => {
	if (fillWidth) return _wanteddev_wds_engine.css`
      & > [wds-component='with-interaction'] {
        width: 100%;
      }
    `;
	return _wanteddev_wds_engine.css`
    --wds-list-cell-interaction-padding: ${require_utils_internal_css.toCssValue(interactionPadding) ?? "12px"};

    & > [wds-component='with-interaction'] {
      width: calc(100% + (var(--wds-list-cell-interaction-padding, 0px) * 2));
    }
  `;
};
const listCellPaddingStyle = ({ verticalPadding }) => _wanteddev_wds_engine.css`
  &,
  & ~ [wds-component='accordion-details'] {
    ${(() => {
	switch (verticalPadding) {
		case "none": return _wanteddev_wds_engine.css`
            --wds-list-cell-vertical-padding: 0px;
            --wds-list-cell-interaction-display: none;
          `;
		case "small": return _wanteddev_wds_engine.css`
            --wds-list-cell-vertical-padding: 8px;
            --wds-list-cell-interaction-display: block;
          `;
		case "large": return _wanteddev_wds_engine.css`
            --wds-list-cell-vertical-padding: 16px;
            --wds-list-cell-interaction-display: block;
          `;
		case "medium": return _wanteddev_wds_engine.css`
            --wds-list-cell-vertical-padding: 12px;
            --wds-list-cell-interaction-display: block;
          `;
	}
})()}
  }
`;
const listCellFillWidthStyle = ({ fillWidth }) => {
	switch (fillWidth) {
		case true: return _wanteddev_wds_engine.css`
        &,
        & ~ [wds-component='accordion-details'],
        & ~ [data-role='accordion-divider'] {
          --wds-list-cell-horizontal-padding: 20px;
        }
      `;
		case false: return _wanteddev_wds_engine.css`
        &,
        & ~ [wds-component='accordion-details'],
        & ~ [data-role='accordion-divider'] {
          --wds-list-cell-horizontal-padding: 0px;
        }
        border-radius: 12px;
      `;
	}
};
const listCellDividerStyle = _wanteddev_wds_engine.css`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0px);
  transition: opacity 0.15s ease;
  width: calc(100% - (var(--wds-list-cell-horizontal-padding) * 2));
`;
const listCellContentVariantStyle = ({ variant }) => (theme) => {
	switch (variant) {
		case "value": return _wanteddev_wds_engine.css`
          ${require_utils_typography.typographyStyle("body1", "regular")}
          color: ${theme.semantic.label.alternative};
        `;
		case "thumbnail": return _wanteddev_wds_engine.css`
          padding-right: 8px;
        `;
		case "icon": return _wanteddev_wds_engine.css`
          color: ${theme.semantic.label.alternative};
          font-size: 24px;
        `;
		case "avatar": return _wanteddev_wds_engine.css`
          padding-right: 8px;
        `;
		case "large-icon": return _wanteddev_wds_engine.css`
          & > div {
            flex-shrink: 0;
            width: fit-content;
            height: fit-content;
            border-radius: 12px;
            padding: 8px;
            color: ${theme.semantic.primary.normal};
            background-color: ${theme.semantic.fill.normal};
            font-size: 32px;
          }
        `;
		case "chevron": return _wanteddev_wds_engine.css`
          ${require_utils_typography.typographyStyle("body1", "regular")}
          color: ${theme.semantic.label.alternative};
        `;
		case "checkbox": return _wanteddev_wds_engine.css`
          &:not([data-role='list-item-trailing-content']):has(
              [wds-component='checkbox'][data-tight='true']
            ) {
            padding-right: 2px;
          }
        `;
		case "radio": return _wanteddev_wds_engine.css`
          &:not([data-role='list-item-trailing-content']):has(
              [wds-component='radio'][data-tight='true']
            ) {
            padding-right: 2px;
          }
        `;
	}
};
const listCellContentStyle = ({ variant }) => (theme) => _wanteddev_wds_engine.css`
    flex-shrink: 0;
    position: relative;

    &[data-role='list-item-trailing-content'] {
      justify-content: flex-end;
    }

    [wds-component='with-interaction'] {
      z-index: 1;
    }

    ${listCellContentVariantStyle({ variant })(theme)}
  `;
const listTextStyle = _wanteddev_wds_engine.css`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;
//#endregion
exports.listCellContentStyle = listCellContentStyle;
exports.listCellDividerStyle = listCellDividerStyle;
exports.listCellStyle = listCellStyle;
exports.listStyle = listStyle;
exports.listTextContentWrapperStyle = listTextContentWrapperStyle;
exports.listTextEllipsisStyle = listTextEllipsisStyle;
exports.listTextStyle = listTextStyle;
