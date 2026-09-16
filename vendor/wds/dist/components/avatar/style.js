'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/avatar/style.ts
const avatarWrapperStyle = ({ size, variant, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    background-color: ${theme.semantic.background.normal.normal};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
      box-shadow: inset 0 0 0 1px
        ${require_utils_color.addOpacity(theme.semantic.label.normal, theme.opacity[5])};
      content: '';
      width: 100%;
      height: 100%;
      border-radius: inherit;
      color: inherit;
      font-size: inherit;
      position: absolute;
      inset: 0;
    }

    ${avatarSizeStyle(size, variant)}

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: inherit;
      color: inherit;
      font-size: inherit;
      text-align: center;

      ${variant === "person" ? _wanteddev_wds_engine.css`
            object-fit: cover;
          ` : _wanteddev_wds_engine.css`
            object-fit: contain;
          `}
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${avatarSizeStyle(params?.size, variant)}
        ${params?.sx}
      `)}
  `;
const fallbackWrapperStyle = (theme) => _wanteddev_wds_engine.css`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  color: inherit;
  font-size: inherit;
  background-color: ${theme.semantic.fill.strong};
  color: ${theme.semantic.static.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const avatarSizeStyle = (size, variant) => {
	const getBorderRadius = (rounded) => {
		switch (variant) {
			case "person": return _wanteddev_wds_engine.css`
          border-radius: 9999px;

          & > [wds-component='with-interaction'],
          & + [wds-component='with-interaction'] {
            border-radius: 9999px;
          }
        `;
			case "academy":
			case "company": return _wanteddev_wds_engine.css`
          border-radius: ${rounded}px;

          & > [wds-component='with-interaction'],
          & + [wds-component='with-interaction'] {
            border-radius: ${rounded + 8}px;
          }

          &::after {
            border-radius: ${rounded + 1.5}px;
          }
        `;
		}
	};
	if (typeof size === "number") return _wanteddev_wds_engine.css`
      width: ${size}px;
      height: ${size}px;
      font-size: calc(${size}px / 1.5);

      ${getBorderRadius(Math.ceil(size * .25 / 2) * 2)}
    `;
	switch (size) {
		case "xlarge": return _wanteddev_wds_engine.css`
        width: 56px;
        height: 56px;
        font-size: 37.4px;

        ${getBorderRadius(14)}
      `;
		case "large": return _wanteddev_wds_engine.css`
        width: 48px;
        height: 48px;
        font-size: 32px;

        ${getBorderRadius(12)}
      `;
		case "medium": return _wanteddev_wds_engine.css`
        width: 40px;
        height: 40px;
        font-size: 26.7px;

        ${getBorderRadius(10)}
      `;
		case "small": return _wanteddev_wds_engine.css`
        width: 32px;
        height: 32px;
        font-size: 21.4px;

        ${getBorderRadius(8)}
      `;
		case "xsmall": return _wanteddev_wds_engine.css`
        width: 24px;
        height: 24px;
        font-size: 16px;

        ${getBorderRadius(6)}
      `;
	}
};
//#endregion
exports.avatarWrapperStyle = avatarWrapperStyle;
exports.fallbackWrapperStyle = fallbackWrapperStyle;
