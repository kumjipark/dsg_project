'use client';
import { createResponsiveStyle, getPreviousValue } from "../../utils/internal/responsive-props.mjs";
import { toCssValue } from "../../utils/internal/css.mjs";
import { ellipsisTypographyStyle, typographyStyle } from "../../utils/typography.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/list/style.ts
const listStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const listCellStyle = ({ verticalPadding, fillWidth, interactionPadding, selected, disabled, disableInteraction, xs, sm, md, lg, xl }) => (theme) => css`
    width: 100%;
    padding-top: var(--wds-list-cell-vertical-padding);
    padding-bottom: var(--wds-list-cell-vertical-padding);
    padding-left: var(--wds-list-cell-horizontal-padding);
    padding-right: var(--wds-list-cell-horizontal-padding);

    ${disabled ? css`
          cursor: initial;
          pointer-events: none;
          color: ${theme.semantic.label.alternative};
          opacity: ${theme.opacity[43]};
        ` : css`
          color: ${selected ? theme.semantic.primary.normal : theme.semantic.label.normal};

          ${!disableInteraction && css`
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

    ${createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params, breakpoint) => css`
        ${listCellPaddingStyle({ verticalPadding: params?.verticalPadding })}
        ${listCellFillWidthStyle({ fillWidth: params?.fillWidth })}
        ${listCellInteractionPaddingStyle({
	fillWidth: getPreviousValue({
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
const listTextContentWrapperStyle = (ellipsis) => css`
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
const listTextEllipsisStyle = (ellipsis) => ellipsis ? css`
        ${ellipsisTypographyStyle(1)}
        white-space: nowrap;
        overflow-wrap: anywhere;
        word-break: keep-all;
      ` : css`
        word-break: keep-all;
        overflow-wrap: break-word;
      `;
const listCellInteractionPaddingStyle = ({ fillWidth, interactionPadding }) => {
	if (fillWidth) return css`
      & > [wds-component='with-interaction'] {
        width: 100%;
      }
    `;
	return css`
    --wds-list-cell-interaction-padding: ${toCssValue(interactionPadding) ?? "12px"};

    & > [wds-component='with-interaction'] {
      width: calc(100% + (var(--wds-list-cell-interaction-padding, 0px) * 2));
    }
  `;
};
const listCellPaddingStyle = ({ verticalPadding }) => css`
  &,
  & ~ [wds-component='accordion-details'] {
    ${(() => {
	switch (verticalPadding) {
		case "none": return css`
            --wds-list-cell-vertical-padding: 0px;
            --wds-list-cell-interaction-display: none;
          `;
		case "small": return css`
            --wds-list-cell-vertical-padding: 8px;
            --wds-list-cell-interaction-display: block;
          `;
		case "large": return css`
            --wds-list-cell-vertical-padding: 16px;
            --wds-list-cell-interaction-display: block;
          `;
		case "medium": return css`
            --wds-list-cell-vertical-padding: 12px;
            --wds-list-cell-interaction-display: block;
          `;
	}
})()}
  }
`;
const listCellFillWidthStyle = ({ fillWidth }) => {
	switch (fillWidth) {
		case true: return css`
        &,
        & ~ [wds-component='accordion-details'],
        & ~ [data-role='accordion-divider'] {
          --wds-list-cell-horizontal-padding: 20px;
        }
      `;
		case false: return css`
        &,
        & ~ [wds-component='accordion-details'],
        & ~ [data-role='accordion-divider'] {
          --wds-list-cell-horizontal-padding: 0px;
        }
        border-radius: 12px;
      `;
	}
};
const listCellDividerStyle = css`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0px);
  transition: opacity 0.15s ease;
  width: calc(100% - (var(--wds-list-cell-horizontal-padding) * 2));
`;
const listCellContentVariantStyle = ({ variant }) => (theme) => {
	switch (variant) {
		case "value": return css`
          ${typographyStyle("body1", "regular")}
          color: ${theme.semantic.label.alternative};
        `;
		case "thumbnail": return css`
          padding-right: 8px;
        `;
		case "icon": return css`
          color: ${theme.semantic.label.alternative};
          font-size: 24px;
        `;
		case "avatar": return css`
          padding-right: 8px;
        `;
		case "large-icon": return css`
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
		case "chevron": return css`
          ${typographyStyle("body1", "regular")}
          color: ${theme.semantic.label.alternative};
        `;
		case "checkbox": return css`
          &:not([data-role='list-item-trailing-content']):has(
              [wds-component='checkbox'][data-tight='true']
            ) {
            padding-right: 2px;
          }
        `;
		case "radio": return css`
          &:not([data-role='list-item-trailing-content']):has(
              [wds-component='radio'][data-tight='true']
            ) {
            padding-right: 2px;
          }
        `;
	}
};
const listCellContentStyle = ({ variant }) => (theme) => css`
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
const listTextStyle = css`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;
//#endregion
export { listCellContentStyle, listCellDividerStyle, listCellStyle, listStyle, listTextContentWrapperStyle, listTextEllipsisStyle, listTextStyle };
