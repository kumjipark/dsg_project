'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/check-mark/style.ts
const checkMarkStyle = ({ size, bold, tight, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    padding: 0px;
    background-color: transparent;
    border-radius: 9999px;
    border: none;
    box-shadow: none;
    ${checkMarkSizeStyle({
	size,
	bold,
	tight
})}

    svg {
      opacity: 1;
      transform: none;
      transition: color 0.15s ease;
    }

    [data-role='checkbox-icon-wrapper'] {
      background-color: transparent;
      color: ${theme.semantic.label.assistive};
      border-radius: 9999px;
      border: none;
      box-shadow: none;
    }

    &[aria-checked='true'] {
      [data-role='checkbox-icon-wrapper'] {
        background-color: transparent;
        color: ${theme.semantic.primary.normal};
        transform: none;
      }
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params, breakpoint) => _wanteddev_wds_engine.css`
        ${(params?.size !== void 0 || params?.bold !== void 0) && _wanteddev_wds_engine.css`
          ${checkMarkSizeStyle({
	size: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "size", params.size, breakpoint),
	bold: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "bold", params.bold, breakpoint),
	tight
})}
        `}
        ${params?.sx}
      `)}
  `;
const checkMarkSizeStyle = ({ size, bold, tight }) => {
	switch (size) {
		case "medium": return _wanteddev_wds_engine.css`
        font-size: 24px;
        width: 24px;
        height: 24px;
        padding: 0px;

        ${tight && _wanteddev_wds_engine.css`
          width: 20px;

          svg {
            display: block;
            margin: 0 auto;
          }

          [wds-component='with-interaction'] {
            width: calc(100% + 12px);
          }
        `}

        & ~ label {
          ${require_utils_typography.typographyStyle("body2", bold ? "bold" : "regular")}
        }
      `;
		case "small": return _wanteddev_wds_engine.css`
        font-size: 20px;
        width: 20px;
        height: 20px;
        padding: 0px;

        ${tight && _wanteddev_wds_engine.css`
          width: 16px;

          svg {
            display: block;
            margin: 0 auto;
          }

          [wds-component='with-interaction'] {
            width: calc(100% + 12px);
          }
        `}

        & ~ label {
          ${require_utils_typography.typographyStyle("label1", bold ? "bold" : "regular")}
        }
      `;
	}
};
//#endregion
exports.checkMarkStyle = checkMarkStyle;
