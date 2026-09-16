'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
const require_utils_typography = require("../../utils/typography.js");
const require_components_modal_constants = require("./constants.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/modal/style.ts
const modalDimmerStyle = (theme) => _wanteddev_wds_engine.css`
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: ${theme.semantic.material.dimmer};

  &[data-visibility='visible'] {
    transition: opacity ease 200ms;
    opacity: 1;
  }

  &[data-visibility='hidden'] {
    transition: opacity ease 200ms;
    pointer-events: none;
    opacity: 0;
  }
`;
const modalContainerWrapperStyle = ({ variant, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    position: fixed;
    display: flex;
    z-index: ${theme.zIndex.modal};
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;

    &[data-visibility='hidden'] {
      pointer-events: none;
    }

    @supports (height: 100dvh) {
      height: 100dvh;
    }

    ${modalContainerWrapperVariant(variant)}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${Boolean(params?.variant) && modalContainerWrapperVariant(params.variant)}

        ${params?.sx}
      `)}
  `;
const modalContainerWrapperVariant = (variant) => {
	switch (variant) {
		case "full": return _wanteddev_wds_engine.css`
        justify-content: center;
        align-items: initial;
        padding: 0px;

        [data-role='modal-dimmer'][data-status='close'] {
          opacity: initial;
          pointer-events: none;
          transition: initial;
        }

        [data-role='modal-container-scroll-area']:has(
            [wds-component='top-navigation'][data-variant='floating']
          ) {
          background: initial;
          will-change: unset;
        }
      `;
		case "popup": return _wanteddev_wds_engine.css`
        align-items: center;
        justify-content: center;
        padding: 20px;

        [data-role='modal-dimmer'][data-status='close'] {
          opacity: initial;
          pointer-events: none;
          transition: initial;
        }

        [data-role='modal-container-scroll-area']:has(
            [wds-component='top-navigation'][data-variant='floating']
          ) {
          background: initial;
          will-change: unset;
        }
      `;
		case "bottom": return _wanteddev_wds_engine.css`
        padding: 0px;
        align-items: flex-end;
        justify-content: center;

        [data-role='modal-dimmer'][data-status='close'] {
          opacity: 0;
          pointer-events: none;
          transition: opacity ease 200ms;
        }

        [data-role='modal-container-scroll-area']:has(
            [wds-component='top-navigation'][data-variant='floating']
          ) {
          background: inherit;
          will-change: backdrop-filter;
        }
      `;
	}
};
const modalBottomMountKeyframes = _wanteddev_wds_engine.keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(var(--wds-modal-translate, 0px));
  }
`;
const modalContainerStyle = ({ resize, variant, size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    outline: none;
    background-color: ${theme.semantic.background.elevated.normal};

    [wds-component='top-navigation'] {
      z-index: 5;
      position: sticky;
      top: var(--wds-modal-grabber-height-guard, 0px);
      left: 0px;
    }

    [wds-component='action-area'] {
      position: sticky;
      z-index: 5;
      bottom: 0;
      left: 0;
    }

    ${modalContainerSize(size, resize)}
    ${modalContainerVariant(variant)}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params, breakpoint) => _wanteddev_wds_engine.css`
        ${(params?.resize || params?.size || params?.variant) && _wanteddev_wds_engine.css`
          ${modalContainerSize(require_utils_internal_responsive_props.getPreviousValue({
	xs,
	sm,
	md,
	lg,
	xl
}, "size", size, breakpoint), require_utils_internal_responsive_props.getPreviousValue({
	xs,
	sm,
	md,
	lg,
	xl
}, "resize", resize, breakpoint))}
          ${modalContainerVariant(require_utils_internal_responsive_props.getPreviousValue({
	xs,
	sm,
	md,
	lg,
	xl
}, "variant", variant, breakpoint))}
        `}

        ${params?.sx}
      `)};
  `;
const modalContainerSize = (size, resize) => {
	switch (size) {
		case "small": return _wanteddev_wds_engine.css`
        width: 360px;
        min-width: 320px;
        max-width: 100%;
        height: initial;
        max-height: 100%;

        ${resize === "fixed" && _wanteddev_wds_engine.css`
          height: 400px;
        `}

        --wds-modal-popup-border-radius: 12px;
        --wds-modal-content-margin: 20px;
        --wds-top-navigation-padding-x: 16px;
        --wds-top-navigation-padding-y: 16px;
        --wds-top-navigation-padding: var(--wds-top-navigation-padding-y)
          var(--wds-top-navigation-padding-x);
        --wds-top-navigation-min-height: 56px;
        --wds-action-area-margin-x: var(--wds-modal-content-margin);
        --wds-action-area-margin-y: var(--wds-modal-content-margin);

        [wds-component='top-navigation'] {
          --wds-tab-list-padding: var(--wds-modal-content-margin);
        }

        [data-role='action-area-extra-content'] {
          margin-top: calc(
            var(--wds-action-area-margin-x) - var(--wds-action-area-margin-y)
          );
          margin-bottom: calc(4px + var(--wds-action-area-margin-y, 20px));
        }

        [data-role='navigation-title'] {
          padding: 0px 4px;
        }
      `;
		case "medium": return _wanteddev_wds_engine.css`
        width: 400px;
        min-width: 320px;
        max-width: 100%;
        height: initial;
        max-height: 100%;

        ${resize === "fixed" && _wanteddev_wds_engine.css`
          height: 480px;
        `}

        --wds-modal-popup-border-radius: 12px;
        --wds-modal-content-margin: 20px;
        --wds-top-navigation-padding-x: 16px;
        --wds-top-navigation-padding-y: 20px;
        --wds-top-navigation-padding: var(--wds-top-navigation-padding-y)
          var(--wds-top-navigation-padding-x);
        --wds-top-navigation-min-height: 64px;
        --wds-action-area-margin-x: var(--wds-modal-content-margin);
        --wds-action-area-margin-y: var(--wds-modal-content-margin);

        [wds-component='top-navigation'] {
          --wds-tab-list-padding: var(--wds-modal-content-margin);
        }

        [data-role='action-area-extra-content'] {
          margin-top: calc(
            var(--wds-action-area-margin-x) - var(--wds-action-area-margin-y)
          );
          margin-bottom: calc(4px + var(--wds-action-area-margin-y, 20px));
        }

        [data-role='navigation-title'] {
          padding: 0px 4px;
        }
      `;
		case "large": return _wanteddev_wds_engine.css`
        width: 480px;
        min-width: 320px;
        max-width: 100%;
        height: initial;
        max-height: 100%;

        ${resize === "fixed" && _wanteddev_wds_engine.css`
          height: 560px;
        `}

        --wds-modal-popup-border-radius: 20px;
        --wds-modal-content-margin: 24px;
        --wds-top-navigation-padding-x: 20px;
        --wds-top-navigation-padding-y: 20px;
        --wds-top-navigation-padding: var(--wds-top-navigation-padding-y)
          var(--wds-top-navigation-padding-x);
        --wds-top-navigation-min-height: 64px;
        --wds-action-area-margin-x: var(--wds-modal-content-margin);
        --wds-action-area-margin-y: var(--wds-modal-content-margin);

        [wds-component='top-navigation'] {
          --wds-tab-list-padding: var(--wds-modal-content-margin);
        }

        [data-role='action-area-extra-content'] {
          margin-top: calc(
            var(--wds-action-area-margin-x) - var(--wds-action-area-margin-y)
          );
          margin-bottom: var(--wds-action-area-margin-y);
        }

        [data-role='navigation-title'] {
          padding: 0px 4px;
        }
      `;
		case "xlarge": return _wanteddev_wds_engine.css`
        width: 560px;
        min-width: 320px;
        max-width: 100%;
        height: initial;
        max-height: 100%;

        ${resize === "fixed" && _wanteddev_wds_engine.css`
          height: 640px;
        `}

        --wds-modal-popup-border-radius: 20px;
        --wds-modal-content-margin: 32px;
        --wds-top-navigation-padding-x: 28px;
        --wds-top-navigation-padding-y: 24px;
        --wds-top-navigation-padding: var(--wds-top-navigation-padding-y)
          var(--wds-top-navigation-padding-x);
        --wds-top-navigation-min-height: 72px;
        --wds-action-area-margin-x: var(--wds-modal-content-margin);
        --wds-action-area-margin-y: 24px;
        --wds-action-area-extra-content-margin: var(
          --wds-action-area-margin,
          20px
        );

        [wds-component='top-navigation'] {
          --wds-tab-list-padding: var(--wds-modal-content-margin);
        }

        [data-role='action-area-extra-content'] {
          margin-top: calc(
            var(--wds-action-area-margin-x) - var(--wds-action-area-margin-y)
          );
          margin-bottom: var(--wds-action-area-margin-y);
        }

        [data-role='navigation-title'] {
          padding: 0px 4px;
        }
      `;
	}
};
const modalContainerVariant = (variant) => {
	switch (variant) {
		case "full": return _wanteddev_wds_engine.css`
        min-width: initial;
        max-height: initial;
        max-width: 100%;
        width: 100%;
        height: 100%;
        animation: none;
        max-height: 100%;
        border-radius: 0px;
        padding: initial;
        transition: none;

        &[data-status='open'] {
          transform: initial;
          transition: none;
        }

        &[data-status='close'] {
          transform: initial;
        }

        [data-role='navigation-title'] {
          user-select: initial;
        }

        &[data-status='open'][data-visibility='visible'] {
          box-shadow: none;
          transition: none;
        }

        &[data-status='open'][data-visibility='hidden'] {
          box-shadow: none;
          transition: initial;
        }
      `;
		case "popup": return _wanteddev_wds_engine.css`
        border-radius: var(--wds-modal-popup-border-radius, 12px);
        animation: none;
        max-height: min(760px, 100%);
        padding: initial;
        overflow: hidden;
        transition: none;

        &[data-status='open'] {
          transform: initial;
          transition: none;
        }

        &[data-status='close'] {
          transform: initial;
        }

        [data-role='navigation-title'] {
          user-select: initial;
        }

        &[data-status='open'][data-visibility='visible'] {
          box-shadow: none;
          transition: none;
        }

        &[data-status='open'][data-visibility='hidden'] {
          box-shadow: none;
          transition: initial;
        }
      `;
		case "bottom": return _wanteddev_wds_engine.css`
        padding: 0px 0px env(safe-area-inset-bottom, 0px) 0px;
        max-height: calc(100% - env(safe-area-inset-top, 0px) - 40px);
        border-radius: 12px 12px 0px 0px;
        max-width: 480px;
        width: 100%;
        min-width: initial;
        overflow: hidden;
        transition:
          transform 200ms ease,
          box-shadow 200ms ease;
        pointer-events: auto;
        transform: translateY(var(--wds-modal-translate, 0px));
        animation: 0.2s ease ${modalBottomMountKeyframes};

        &[data-status='open'] {
          transform: translateY(var(--wds-modal-translate, 0px));
        }

        &[data-status='close'] {
          transform: translateY(100%);
        }

        [data-role='navigation-title'] {
          user-select: none;
        }

        &[data-status='open'][data-visibility='visible'] {
          box-shadow: none;
        }

        &[data-status='open'][data-visibility='hidden'] {
          box-shadow: ${require_components_modal_constants.BOTTOM_SHEET_SHADOW};
          transition:
            transform 200ms ease,
            box-shadow 200ms ease;
        }
      `;
	}
};
const modalNavigationStyle = ({ variant }) => {
	switch (variant) {
		case "emphasized": return _wanteddev_wds_engine.css`
        [data-role='top-navigation-wrapper'] {
          padding: var(--wds-top-navigation-padding-y, 16px)
            var(--wds-top-navigation-padding-x, 16px);
          min-height: var(--wds-top-navigation-min-height, 64px);
          gap: 16px;
          width: 100%;
          justify-content: initial;
        }

        [data-role='top-navigation-leading-content-wrapper'],
        [data-role='top-navigation-trailing-content-wrapper'] {
          flex: 0 0 auto;
          position: relative;
          right: initial;
          top: initial;
          left: initial;
        }

        [data-role='navigation-title'] {
          flex: 1 1 auto;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-height: 24px;
          width: initial;
          justify-content: initial;

          h2 {
            width: initial;
            ${require_utils_typography.typographyStyle("heading2", "bold")}
            ${require_utils_typography.ellipsisTypographyStyle(2)}
          -webkit-line-clamp: 1;
          }
        }
      `;
	}
};
const modalGrabberStyle = (theme) => _wanteddev_wds_engine.css`
  min-width: inherit;
  position: absolute;
  padding: 7px 2px 0px 2px;
  margin-bottom: 8px;
  background-color: ${theme.semantic.background.elevated.normal};
  width: 100%;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  touch-action: pan-y;

  &::after {
    content: '';
    border-radius: 1000px;
    width: 40px;
    height: 5px;
    margin: 0 auto;
    display: block;
    background-color: ${theme.semantic.fill.strong};
  }
`;
const modalContentStyle = ({ gap, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    width: 100%;
    padding-top: var(--wds-modal-content-margin, 20px);
    padding-bottom: var(--wds-modal-content-margin, 20px);

    ${gap !== void 0 ? _wanteddev_wds_engine.css`
          gap: calc(var(--wds-modal-content-margin, 20px));
        ` : _wanteddev_wds_engine.css`
          gap: ${require_utils_internal_css.toCssValue(gap)};
        `}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${params?.gap !== void 0 && _wanteddev_wds_engine.css`
          gap: ${require_utils_internal_css.toCssValue(params.gap)};
        `}
        ${params?.sx}
      `)}
  `;
const modalContentItemStyle = () => _wanteddev_wds_engine.css`
  padding: 0px calc(var(--wds-modal-content-margin, 20px));
`;
//#endregion
exports.modalContainerStyle = modalContainerStyle;
exports.modalContainerWrapperStyle = modalContainerWrapperStyle;
exports.modalContentItemStyle = modalContentItemStyle;
exports.modalContentStyle = modalContentStyle;
exports.modalDimmerStyle = modalDimmerStyle;
exports.modalGrabberStyle = modalGrabberStyle;
exports.modalNavigationStyle = modalNavigationStyle;
