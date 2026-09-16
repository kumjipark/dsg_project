'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/accordion/style.ts
const accordionStyle = ({ disabled, expanded }) => _wanteddev_wds_engine.css`
  & > *:not([data-role='accordion-divider']) {
    opacity: ${disabled ? .2 : 1};
  }

  ${!expanded && _wanteddev_wds_engine.css`
    @media (pointer: fine) {
      &:has(:hover),
      &:hover {
        :not(:has([data-disable-interaction='true'])) {
          [data-role='accordion-divider'] {
            opacity: 0;
          }
        }
      }
    }

    &:has(:hover),
    &:has(:active),
    &:hover,
    &:active {
      :not(:has([data-disable-interaction='true'])) {
        [data-role='accordion-divider'] {
          opacity: 0;
        }
      }
    }
  `}
`;
const accordionSummaryStyle = ({ disabled }) => _wanteddev_wds_engine.css`
  ${!disabled && _wanteddev_wds_engine.css`
    cursor: pointer;
  `}
`;
const accordionSummaryTextStyle = _wanteddev_wds_engine.css`
  min-height: 24px;
  justify-content: center;
`;
const accordionSummaryContentStyle = ({ expanded, disableAnimation, rotate, variant }) => _wanteddev_wds_engine.css`
  min-width: 20px;
  font-size: 20px;
  min-height: 24px;
  z-index: 1;

  ${variant === "icon" && _wanteddev_wds_engine.css`
    &[data-role='list-item-trailing-content'],
    &[data-role='accordion-summary-expand-icon'] {
      padding: 2px 0px;
    }

    &:not(
        :is(
            [data-role='list-item-trailing-content'],
            [data-role='accordion-summary-expand-icon']
          )
      ) {
      padding: 2px;
    }
  `}

  [wds-component='icon-button'] {
    width: 100%;
    height: 100%;
  }

  ${rotate && _wanteddev_wds_engine.css`
    will-change: transform;
    transform: rotate(0deg);

    ${!disableAnimation && _wanteddev_wds_engine.css`
      transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    `}

    ${expanded && _wanteddev_wds_engine.css`
      transform: rotate(180deg);
    `}
  `}
`;
const mountKeyframes = _wanteddev_wds_engine.keyframes`
  from {
    height: 0px;
    overflow: hidden;
  }
  to {
    height: var(--wds-accordion-height);
    overflow: var(--wds-accordion-overflow);
  }
`;
const unmountKeyframes = _wanteddev_wds_engine.keyframes`
  from {
    height: var(--wds-accordion-height);
    overflow: var(--wds-accordion-overflow);
  }

  to {
    height: 0px;
    overflow: hidden;
  }
`;
const accordionDetailsStyle = ({ shouldAnimate, disableAnimation }) => _wanteddev_wds_engine.css`
  will-change: height, overflow;
  height: initial;
  overflow: visible;
  &[data-status='close'] {
    height: 0px;
    overflow: hidden;
  }

  ${!disableAnimation && shouldAnimate && _wanteddev_wds_engine.css`
    &[data-status='open'] {
      animation: ${mountKeyframes} 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    &[data-status='close'] {
      animation: ${unmountKeyframes} 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    }
  `}
`;
const accordionDetailsWrapperStyle = _wanteddev_wds_engine.css`
  flex-direction: column;
  padding-top: calc(16px - var(--wds-list-cell-vertical-padding, 16px));
  padding-bottom: var(--wds-list-cell-vertical-padding, 16px);
  padding-left: calc(var(--wds-list-cell-horizontal-padding, 0px));
  padding-right: calc(var(--wds-list-cell-horizontal-padding, 0px));
`;
const accordionDividerStyle = ({ disableAnimation }) => _wanteddev_wds_engine.css`
  margin: 0 auto;
  width: calc(100% - (var(--wds-list-cell-horizontal-padding, 0px) * 2));
  will-change: opacity;

  ${!disableAnimation && _wanteddev_wds_engine.css`
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  `}
`;
const accordionContentStyle = _wanteddev_wds_engine.css`
  margin-top: var(--wds-list-cell-vertical-padding, 16px);
`;
//#endregion
exports.accordionContentStyle = accordionContentStyle;
exports.accordionDetailsStyle = accordionDetailsStyle;
exports.accordionDetailsWrapperStyle = accordionDetailsWrapperStyle;
exports.accordionDividerStyle = accordionDividerStyle;
exports.accordionStyle = accordionStyle;
exports.accordionSummaryContentStyle = accordionSummaryContentStyle;
exports.accordionSummaryStyle = accordionSummaryStyle;
exports.accordionSummaryTextStyle = accordionSummaryTextStyle;
