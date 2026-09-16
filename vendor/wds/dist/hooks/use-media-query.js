'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
require("../_virtual/_rolldown/runtime.js");
const require_utils_media = require("../utils/media.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/hooks/use-media-query.ts
const useMediaQuery = () => {
	const theme = (0, _wanteddev_wds_engine.useTheme)();
	/**
	* `respondDown` has the same function as `respondDown`, and works when it is smaller than the specified breakpoint.
	*
	* @example
	* // returns `@media screen and (max-width: 767px)`
	* respondTo('768px');
	*/
	const respondTo$1 = (breakpoint) => require_utils_media.respondTo(breakpoint);
	/**
	* `respondUp` has the same function as `respondUp`, and works when it is smaller than the specified breakpoint.
	*
	* @example
	* // returns `@media screen and (min-width: 768px)`
	* respondUp('768px');
	*/
	const respondMore$1 = (breakpoint) => require_utils_media.respondMore(breakpoint);
	/**
	* `respondTo` has the same function as `respondTo`, and works when it is smaller than the specified breakpoint.
	*
	* @example
	* // returns `@media screen and (max-width: 767px)`
	* respondDown('768px');
	*/
	const respondDown = (breakpoint) => require_utils_media.respondTo(breakpoint);
	/**
	* `respondMore` has the same function as `respondMore`, and works when it is larger than the specified breakpoint.
	*
	* @example
	* // returns `@media screen and (min-width: 768px)`
	* respondDown('768px');
	*/
	const respondUp = (breakpoint) => require_utils_media.respondMore(breakpoint);
	return {
		breakpoint: theme.breakpoint,
		respondTo: respondTo$1,
		respondMore: respondMore$1,
		respondUp,
		respondDown
	};
};
//#endregion
exports.default = useMediaQuery;
