'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/components/text-area/helpers.ts
const DEFAULT_LINE_HEIGHT = 26;
const getTextAreaDefaultHeight = ({ minRows = 2 }) => {
	return {
		"--wds-text-area-scroll-height": `${minRows * DEFAULT_LINE_HEIGHT}px`,
		"--wds-text-area-height": `${minRows * DEFAULT_LINE_HEIGHT}px`
	};
};
//#endregion
exports.getTextAreaDefaultHeight = getTextAreaDefaultHeight;
