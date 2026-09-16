'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_components_pagination_dots_constants = require("./constants.js");
//#region src/components/pagination-dots/helpers.ts
const getPaginationDotsVisibleArea = ({ maxDotCount, totalPages, currentPage }) => {
	if (!currentPage) return [0, maxDotCount - 1];
	const currentIndex = currentPage - 1;
	const reference = Math.floor(maxDotCount / 2);
	if (maxDotCount % 2 === 0 && currentIndex >= reference && totalPages - reference > currentIndex) return [currentIndex - reference + 1, currentIndex + Math.floor(maxDotCount / 2)];
	if (currentIndex <= reference) return [0, maxDotCount - 1];
	if (totalPages - reference <= currentIndex) return [totalPages - maxDotCount, totalPages - 1];
	return [currentIndex - Math.floor(maxDotCount / 2), currentIndex + Math.floor(maxDotCount / 2)];
};
const getPaginationDotScale = ({ index, visibleArea, maxDotCount, totalPages }) => {
	if (!(index >= visibleArea[0] && index <= visibleArea[1])) return 0;
	if (totalPages <= maxDotCount) return 1;
	if (visibleArea[0] === 0 && Math.floor(maxDotCount / 2) > index || visibleArea[0] === 1 && index === 2) return 1;
	if (visibleArea[1] === totalPages - 1 && index >= totalPages - Math.floor(maxDotCount / 2) - 1 || visibleArea[1] === totalPages - 2 && index === totalPages - 3) return 1;
	const distance = Math.min(Math.abs(index - visibleArea[0]), Math.abs(index - visibleArea[1]));
	if (visibleArea[0] === 1 && index === 1 || visibleArea[1] === totalPages - 2 && index === totalPages - 2) return require_components_pagination_dots_constants.MEDIUM_SCALE_RATIO;
	if (distance === 1) return maxDotCount <= 4 ? 1 : require_components_pagination_dots_constants.MEDIUM_SCALE_RATIO;
	if (distance === 0) return maxDotCount <= 4 ? require_components_pagination_dots_constants.MEDIUM_SCALE_RATIO : require_components_pagination_dots_constants.SMALL_SCALE_RATIO;
	return 1;
};
//#endregion
exports.getPaginationDotScale = getPaginationDotScale;
exports.getPaginationDotsVisibleArea = getPaginationDotsVisibleArea;
