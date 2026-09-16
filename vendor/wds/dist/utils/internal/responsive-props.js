Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_utils_media = require("../media.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let object_path = require("object-path");
object_path = require_runtime.__toESM(object_path);
//#region src/utils/internal/responsive-props.ts
const order = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
];
const createEmptyResponsiveStyle = (responsive) => (theme) => _wanteddev_wds_engine.css`
    ${createResponsiveStyle(responsive, theme)((params) => _wanteddev_wds_engine.css`
        ${params?.sx}
      `)}
  `;
const createResponsiveStyle = (responsive, theme) => (cb) => {
	return _wanteddev_wds_engine.css`
      ${Object.entries(responsive).sort(([a], [b]) => {
		return order.findIndex((v) => v === a) - order.findIndex((v) => v === b);
	}).map(([bp, value]) => {
		if (!value || !Object.values(value).some((v) => v !== void 0)) return;
		switch (bp) {
			case "xs": return _wanteddev_wds_engine.css`
                ${require_utils_media.respondMore(theme.breakpoint.xs)} {
                  ${cb(value, "xs")}
                }
              `;
			case "sm": return _wanteddev_wds_engine.css`
                ${require_utils_media.respondMore(theme.breakpoint.sm)} {
                  ${cb(value, "sm")}
                }
              `;
			case "md": return _wanteddev_wds_engine.css`
                ${require_utils_media.respondMore(theme.breakpoint.md)} {
                  ${cb(value, "md")}
                }
              `;
			case "lg": return _wanteddev_wds_engine.css`
                ${require_utils_media.respondMore(theme.breakpoint.lg)} {
                  ${cb(value, "lg")}
                }
              `;
			case "xl": return _wanteddev_wds_engine.css`
                ${require_utils_media.respondMore(theme.breakpoint.xl)} {
                  ${cb(value, "xl")}
                }
              `;
		}
	})};
    `;
};
const getPreviousValue = (params, key, defaultValue, breakpoint) => {
	switch (breakpoint) {
		case "xl": return object_path.default.get(params.xl || {}, key) ?? object_path.default.get(params.lg || {}, key) ?? object_path.default.get(params.md || {}, key) ?? object_path.default.get(params.sm || {}, key) ?? object_path.default.get(params.xs || {}, key) ?? defaultValue;
		case "lg": return object_path.default.get(params.lg || {}, key) ?? object_path.default.get(params.md || {}, key) ?? object_path.default.get(params.sm || {}, key) ?? object_path.default.get(params.xs || {}, key) ?? defaultValue;
		case "md": return object_path.default.get(params.md || {}, key) ?? object_path.default.get(params.sm || {}, key) ?? object_path.default.get(params.xs || {}, key) ?? defaultValue;
		case "sm": return object_path.default.get(params.sm || {}, key) ?? object_path.default.get(params.xs || {}, key) ?? defaultValue;
		default: return object_path.default.get(params.xs || {}, key) ?? defaultValue;
	}
};
/**
* Splits responsive breakpoint props by specified keys.
* Returns `picked` containing only the specified keys and `rest` containing everything else.
*/
const splitResponsiveProps = (bp, keys) => {
	if (!bp) return {
		picked: void 0,
		rest: void 0
	};
	const picked = {};
	const rest = {};
	for (const [k, v] of Object.entries(bp)) if (keys.includes(k)) picked[k] = v;
	else rest[k] = v;
	const hasPicked = Object.keys(picked).length > 0;
	const hasRest = Object.keys(rest).length > 0;
	return {
		picked: hasPicked ? picked : void 0,
		rest: hasRest ? rest : void 0
	};
};
//#endregion
exports.createEmptyResponsiveStyle = createEmptyResponsiveStyle;
exports.createResponsiveStyle = createResponsiveStyle;
exports.getPreviousValue = getPreviousValue;
exports.splitResponsiveProps = splitResponsiveProps;
