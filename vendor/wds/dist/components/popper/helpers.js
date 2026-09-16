'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/components/popper/helpers.ts
const roundByDPR = (value) => {
	const dpr = window.devicePixelRatio || 1;
	return Math.round(value * dpr) / dpr;
};
const getPlacementMapper = (placement) => {
	const [side = "top", align = "center"] = placement.split("-");
	const mergePlaceSide = () => align === "center" ? "" : `-${align}`;
	return `${side}${mergePlaceSide()}`;
};
const getSideAlignFromPlacement = (placement) => {
	const [placedSide, placedAlign = "center"] = placement.split("-");
	return [placedSide, placedAlign];
};
const transformOrigin = (options) => ({
	name: "transformOrigin",
	options,
	fn(data) {
		const { placement, rects, middlewareData } = data;
		const isArrowHidden = middlewareData.arrow?.centerOffset !== 0;
		const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
		const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
		const [placedSide, placedAlign] = getSideAlignFromPlacement(placement);
		const noArrowAlign = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[placedAlign];
		const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
		const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
		let x = "";
		let y = "";
		switch (placedSide) {
			case "bottom":
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${-arrowHeight}px`;
				break;
			case "top":
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${rects.floating.height + arrowHeight}px`;
				break;
			case "right":
				x = `${-arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
				break;
			case "left":
				x = `${rects.floating.width + arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
				break;
		}
		return { data: {
			x,
			y
		} };
	}
});
//#endregion
exports.getPlacementMapper = getPlacementMapper;
exports.getSideAlignFromPlacement = getSideAlignFromPlacement;
exports.roundByDPR = roundByDPR;
exports.transformOrigin = transformOrigin;
