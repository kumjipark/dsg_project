'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/push-badge/style.ts
const pushBadgeWrapperStyle = ({ offsetX, offsetY, variant, size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    width: fit-content;
    height: fit-content;
    display: inline-flex;
    vertical-align: middle;
    position: relative;
    border-radius: inherit;

    --wds-push-badge-offset-x: ${offsetX ?? "0px"};
    --wds-push-badge-offset-y: ${offsetY ?? "0px"};

    & > [wds-component='push-badge'] {
      ${pushBadgeSizeStyle({
	variant,
	size
})}
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${params?.size && _wanteddev_wds_engine.css`
          & > [wds-component='push-badge'] {
            ${pushBadgeSizeStyle({
	variant,
	size
})}
          }
        `}

        ${params?.offsetX !== void 0 && _wanteddev_wds_engine.css`
          --wds-push-badge-offset-x: ${params.offsetX};
        `}
          ${params?.offsetY !== void 0 && _wanteddev_wds_engine.css`
          --wds-push-badge-offset-y: ${params.offsetY};
        `}
        ${params?.sx}
      `)}
  `;
const pushBadgeStyle = ({ variant, invisible, position }) => (theme) => _wanteddev_wds_engine.css`
    z-index: 1;
    position: absolute;
    transition: transform 0.2s ease;
    transform-origin: 0% 0%;

    ${pushBadgePositionStyle({
	invisible,
	position
})}
    ${pushBadgeVariantStyle({ variant }, theme)}
  `;
const pushBadgePositionStyle = ({ position, invisible }) => {
	switch (position) {
		case "top-left": return _wanteddev_wds_engine.css`
        top: calc(0px + var(--wds-push-badge-offset-y));
        left: calc(0px + var(--wds-push-badge-offset-x));
        transform: scale(0) translate(-50%, -50%);
        ${!invisible && _wanteddev_wds_engine.css`
          transform: scale(1) translate(-50%, -50%);
        `}
      `;
		case "top-center": return _wanteddev_wds_engine.css`
        top: calc(0px + var(--wds-push-badge-offset-y));
        left: calc(50% + var(--wds-push-badge-offset-x));
        transform: scale(0) translate(-50%, -50%);
        ${!invisible && _wanteddev_wds_engine.css`
          transform: scale(1) translate(-50%, -50%);
        `}
      `;
		case "top-right": return _wanteddev_wds_engine.css`
        top: calc(0px + var(--wds-push-badge-offset-y));
        left: calc(100% + var(--wds-push-badge-offset-x));
        transform: scale(0) translate(-50%, -50%);
        ${!invisible && _wanteddev_wds_engine.css`
          transform: scale(1) translate(-50%, -50%);
        `}
      `;
		case "middle-left": return _wanteddev_wds_engine.css`
        top: calc(50% + var(--wds-push-badge-offset-y));
        left: calc(0px + var(--wds-push-badge-offset-x));
        transform: scale(0) translate(-50%, -50%);
        ${!invisible && _wanteddev_wds_engine.css`
          transform: scale(1) translate(-50%, -50%);
        `}
      `;
		case "middle-center": return _wanteddev_wds_engine.css`
        top: calc(50% + var(--wds-push-badge-offset-y));
        left: calc(50% + var(--wds-push-badge-offset-x));
        transform: scale(0) translate(-50%, -50%);
        ${!invisible && _wanteddev_wds_engine.css`
          transform: scale(1) translate(-50%, -50%);
        `}
      `;
		case "middle-right": return _wanteddev_wds_engine.css`
        top: calc(50% + var(--wds-push-badge-offset-y));
        left: calc(100% + var(--wds-push-badge-offset-x));
        transform: scale(0) translate(-50%, -50%);
        ${!invisible && _wanteddev_wds_engine.css`
          transform: scale(1) translate(-50%, -50%);
        `}
      `;
		case "bottom-left": return _wanteddev_wds_engine.css`
        top: calc(100% + var(--wds-push-badge-offset-y));
        left: calc(0px + var(--wds-push-badge-offset-x));
        transform: scale(0) translate(-50%, -50%);
        ${!invisible && _wanteddev_wds_engine.css`
          transform: scale(1) translate(-50%, -50%);
        `}
      `;
		case "bottom-center": return _wanteddev_wds_engine.css`
        top: calc(100% + var(--wds-push-badge-offset-y));
        left: calc(50% + var(--wds-push-badge-offset-x));
        transform: scale(0) translate(-50%, -50%);
        ${!invisible && _wanteddev_wds_engine.css`
          transform: scale(1) translate(-50%, -50%);
        `}
      `;
		case "bottom-right": return _wanteddev_wds_engine.css`
        top: calc(100% + var(--wds-push-badge-offset-y));
        left: calc(100% + var(--wds-push-badge-offset-x));
        transform: scale(0) translate(-50%, -50%);
        ${!invisible && _wanteddev_wds_engine.css`
          transform: scale(1) translate(-50%, -50%);
        `}
      `;
	}
};
const pushBadgeVariantStyle = ({ variant }, theme) => {
	switch (variant) {
		case "dot": return _wanteddev_wds_engine.css`
        display: inline-flex;
        justify-content: center;
        flex-shrink: 0;
        align-items: center;
        color: ${theme.semantic.primary.normal};

        svg {
          width: 1em !important;
          height: 1em !important;
        }
      `;
		default: return _wanteddev_wds_engine.css`
        text-align: center;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        color: ${theme.semantic.static.white};
        background-color: ${theme.semantic.primary.normal};
        border-radius: 9999px;

        & > [data-role='push-badge-text'] {
          display: block;
        }
      `;
	}
};
const pushBadgeSizeStyle = ({ size, variant }) => {
	switch (variant) {
		case "dot": switch (size) {
			case "xsmall": return _wanteddev_wds_engine.css`
            font-size: 4px;
          `;
			case "small": return _wanteddev_wds_engine.css`
            font-size: 6px;
          `;
			case "medium": return _wanteddev_wds_engine.css`
            font-size: 8px;
          `;
		}
		case "new": switch (size) {
			case "xsmall": return _wanteddev_wds_engine.css`
            height: 16px;
            min-width: 16px;
            aspect-ratio: 1 / 1;

            [data-role='push-badge-text'] {
              ${require_utils_typography.typographyStyle("caption2", "bold")}
              line-height: 1;
            }
          `;
			case "small": return _wanteddev_wds_engine.css`
            height: 20px;
            min-width: 20px;
            aspect-ratio: 1 / 1;

            [data-role='push-badge-text'] {
              ${require_utils_typography.typographyStyle("caption2", "bold")}
              line-height: 1;
            }
          `;
			case "medium": return _wanteddev_wds_engine.css`
            height: 24px;
            min-width: 24px;
            aspect-ratio: 1 / 1;

            [data-role='push-badge-text'] {
              ${require_utils_typography.typographyStyle("label1", "bold")}
              line-height: 1;
            }
          `;
		}
		case "number": switch (size) {
			case "xsmall": return _wanteddev_wds_engine.css`
            height: 16px;
            min-width: 16px;
            padding: 1px 4px;

            [data-role='push-badge-text'] {
              ${require_utils_typography.typographyStyle("caption2", "bold")}
              line-height: 1;
            }
          `;
			case "small": return _wanteddev_wds_engine.css`
            height: 20px;
            min-width: 20px;
            padding: 3px 6px;

            [data-role='push-badge-text'] {
              ${require_utils_typography.typographyStyle("caption2", "bold")}
              line-height: 1;
            }
          `;
			case "medium": return _wanteddev_wds_engine.css`
            height: 24px;
            min-width: 24px;
            padding: 2px 7px;

            [data-role='push-badge-text'] {
              ${require_utils_typography.typographyStyle("label1", "bold")}
              line-height: 1;
            }
          `;
		}
	}
};
//#endregion
exports.pushBadgeStyle = pushBadgeStyle;
exports.pushBadgeWrapperStyle = pushBadgeWrapperStyle;
