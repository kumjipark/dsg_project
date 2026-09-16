Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
let dayjs = require("dayjs");
dayjs = require_runtime.__toESM(dayjs);
let dayjs_plugin_isSameOrAfter_js = require("dayjs/plugin/isSameOrAfter.js");
dayjs_plugin_isSameOrAfter_js = require_runtime.__toESM(dayjs_plugin_isSameOrAfter_js);
let dayjs_plugin_isSameOrBefore_js = require("dayjs/plugin/isSameOrBefore.js");
dayjs_plugin_isSameOrBefore_js = require_runtime.__toESM(dayjs_plugin_isSameOrBefore_js);
let dayjs_plugin_isBetween_js = require("dayjs/plugin/isBetween.js");
dayjs_plugin_isBetween_js = require_runtime.__toESM(dayjs_plugin_isBetween_js);
let dayjs_plugin_weekday_js = require("dayjs/plugin/weekday.js");
dayjs_plugin_weekday_js = require_runtime.__toESM(dayjs_plugin_weekday_js);
let dayjs_plugin_utc_js = require("dayjs/plugin/utc.js");
dayjs_plugin_utc_js = require_runtime.__toESM(dayjs_plugin_utc_js);
let dayjs_plugin_timezone_js = require("dayjs/plugin/timezone.js");
dayjs_plugin_timezone_js = require_runtime.__toESM(dayjs_plugin_timezone_js);
//#region src/utils/internal/date.ts
const extendDayjs = () => {
	dayjs.default.extend(dayjs_plugin_isSameOrAfter_js.default);
	dayjs.default.extend(dayjs_plugin_isSameOrBefore_js.default);
	dayjs.default.extend(dayjs_plugin_isBetween_js.default);
	dayjs.default.extend(dayjs_plugin_weekday_js.default);
	dayjs.default.extend(dayjs_plugin_utc_js.default);
	dayjs.default.extend(dayjs_plugin_timezone_js.default);
};
//#endregion
exports.extendDayjs = extendDayjs;
