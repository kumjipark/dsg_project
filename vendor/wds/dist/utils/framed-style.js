Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../_virtual/_rolldown/runtime.js");
const require_utils_color = require("./color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let object_path = require("object-path");
object_path = require_runtime.__toESM(object_path);
//#region src/utils/framed-style.ts
const framedStyle = (params) => (theme) => {
	const { shadow = "semantic.elevation.shadow.normal.xsmall", size = "medium", invalid, disabled, selected } = params ?? {};
	const givenShadow = object_path.default.get(theme, shadow);
	const boxShadow = givenShadow ? givenShadow : theme.semantic.elevation.shadow.normal.xsmall;
	return _wanteddev_wds_engine.css`
    ${getSizeStyle(size)}
    ${getShadowStyle({
		base: boxShadow,
		invalid,
		selected
	}, theme)}

    background-color: transparent;
    display: flex;
    padding: var(--wds-framed-style-vertical-padding)
      var(--wds-framed-style-horizontal-padding);
    border-radius: var(--wds-framed-style-border-radius);
    position: relative;
    width: fit-content;
    height: fit-content;

    & > * {
      position: relative;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      pointer-events: none;
      border-radius: inherit;
      z-index: 0;
      transition: opacity 0.15s ease;
      transition: box-shadow ease 0.2s;
    }

    ${disabled && _wanteddev_wds_engine.css`
      &::before {
        opacity: ${theme.opacity[43]};
      }
    `}
  `;
};
const getSizeStyle = (size) => {
	switch (size) {
		case "small": return _wanteddev_wds_engine.css`
        --wds-framed-style-border-radius: 12px;
        --wds-framed-style-vertical-padding: 4px;
        --wds-framed-style-horizontal-padding: 12px;
      `;
		case "medium":
		default: return _wanteddev_wds_engine.css`
        --wds-framed-style-border-radius: 14px;
        --wds-framed-style-vertical-padding: 4px;
        --wds-framed-style-horizontal-padding: 16px;
      `;
		case "large": return _wanteddev_wds_engine.css`
        --wds-framed-style-border-radius: 16px;
        --wds-framed-style-vertical-padding: 4px;
        --wds-framed-style-horizontal-padding: 20px;
      `;
		case "xlarge": return _wanteddev_wds_engine.css`
        --wds-framed-style-border-radius: 20px;
        --wds-framed-style-vertical-padding: 8px;
        --wds-framed-style-horizontal-padding: 24px;
      `;
	}
};
const getShadowStyle = ({ base, invalid, selected }, theme) => {
	if (invalid) return _wanteddev_wds_engine.css`
      &::before {
        box-shadow:
          ${base},
          inset 0 0 0 1px
            ${require_utils_color.addOpacity(theme.semantic.status.negative, theme.opacity[28])};
      }
    `;
	if (selected) return _wanteddev_wds_engine.css`
      &::before {
        box-shadow:
          ${base},
          inset 0 0 0 2px
            ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[43])},
          inset 0 0 0 2px ${theme.semantic.background.normal.normal};
      }
    `;
	return _wanteddev_wds_engine.css`
    &::before {
      box-shadow:
        ${base},
        inset 0 0 0 1px ${theme.semantic.line.normal.neutral};
    }
  `;
};
//#endregion
exports.framedStyle = framedStyle;
