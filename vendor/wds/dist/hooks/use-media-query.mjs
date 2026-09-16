'use client';
import { respondMore, respondTo } from "../utils/media.mjs";
import { useTheme } from "@wanteddev/wds-engine";
//#region src/hooks/use-media-query.ts
const useMediaQuery = () => {
	const theme = useTheme();
	/**
	* `respondDown` has the same function as `respondDown`, and works when it is smaller than the specified breakpoint.
	*
	* @example
	* // returns `@media screen and (max-width: 767px)`
	* respondTo('768px');
	*/
	const respondTo$1 = (breakpoint) => respondTo(breakpoint);
	/**
	* `respondUp` has the same function as `respondUp`, and works when it is smaller than the specified breakpoint.
	*
	* @example
	* // returns `@media screen and (min-width: 768px)`
	* respondUp('768px');
	*/
	const respondMore$1 = (breakpoint) => respondMore(breakpoint);
	/**
	* `respondTo` has the same function as `respondTo`, and works when it is smaller than the specified breakpoint.
	*
	* @example
	* // returns `@media screen and (max-width: 767px)`
	* respondDown('768px');
	*/
	const respondDown = (breakpoint) => respondTo(breakpoint);
	/**
	* `respondMore` has the same function as `respondMore`, and works when it is larger than the specified breakpoint.
	*
	* @example
	* // returns `@media screen and (min-width: 768px)`
	* respondDown('768px');
	*/
	const respondUp = (breakpoint) => respondMore(breakpoint);
	return {
		breakpoint: theme.breakpoint,
		respondTo: respondTo$1,
		respondMore: respondMore$1,
		respondUp,
		respondDown
	};
};
//#endregion
export { useMediaQuery as default };
