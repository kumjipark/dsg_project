'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/avatar-group/style.ts
const avatarGroupStyle = ({ size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    width: fit-content;

    & > * {
      position: relative;
    }

    ${avatarGroupSizeStyle(size)}

    [wds-component='avatar'] {
      flex-shrink: 0;
      position: relative;

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        left: 0px;
        position: absolute;
        top: 0px;
        border-radius: inherit;
        border: 1.5px solid ${theme.semantic.background.normal.normal};
        margin: -1.5px;
        box-sizing: content-box;
      }
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${avatarGroupSizeStyle(params?.size)}
        ${params?.sx}
      `)}
  `;
const avatarGroupSizeStyle = (size) => {
	switch (size) {
		case "small": return _wanteddev_wds_engine.css`
        gap: 10px;
        [wds-component='avatar'] {
          margin-left: -8px;

          &:last-child {
            margin-left: 0px;
          }
        }
      `;
		case "xsmall": return _wanteddev_wds_engine.css`
        gap: 8px;
        [wds-component='avatar'] {
          margin-left: -6px;

          &:last-child {
            margin-left: 0px;
          }
        }
      `;
	}
};
//#endregion
exports.avatarGroupStyle = avatarGroupStyle;
