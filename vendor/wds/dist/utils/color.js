Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/utils/color.ts
const gradientOffset = [
	1,
	.859704,
	.73763,
	.632,
	.541037,
	.462963,
	.396,
	.33837,
	.288296,
	.244,
	.203704,
	.16563,
	.128,
	.089037,
	.046963
];
const gradientOpacity = [
	0,
	.142163,
	.269304,
	.3824,
	.48243,
	.57037,
	.6472,
	.713896,
	.771437,
	.8208,
	.862963,
	.898904,
	.9296,
	.95603,
	.97917
];
const maskGradientOffset = [
	1,
	.859704,
	.73763,
	.632,
	.541037,
	.462963,
	.396,
	.33837,
	.288296,
	.244,
	.203704,
	.16563,
	.128,
	.089037,
	.046963,
	0
];
const maskGradientOpacity = [
	1,
	.857837,
	.730696,
	.6176,
	.51757,
	.42963,
	.3528,
	.286104,
	.228563,
	.1792,
	.137037,
	.101096,
	.0704,
	.0439704,
	.0208296,
	0
];
const getGradientMaskImage = (variant, size = "100%", type = "solid") => {
	const isMask = type === "mask";
	const gradientBaseOpacity = isMask ? maskGradientOpacity : gradientOpacity;
	const gradientBaseOffset = isMask ? maskGradientOffset : gradientOffset;
	return `linear-gradient(to ${isMask ? variant : {
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left"
	}[variant]}, ${gradientBaseOffset.map((offset, i) => `rgba(0, 0, 0, ${Math.round(gradientBaseOpacity[i] * 100) / 100}) calc(100% - calc(${size} * ${Math.round(offset * 100) / 100}))`).join(", ")})`;
};
const gradient = (color, variant, size = "100%", type = "solid") => {
	return `mask-image: ${getGradientMaskImage(variant, size, type)}; background-color: ${color};
  `;
};
const addOpacity = (color, value) => `rgba(${color.startsWith("var(") ? color.replace(")", "-rgb)") : hexToRgb(color)}, ${value})`;
const hexToRgb = (hexColor) => {
	const parsedColor = hexColor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => r + r + g + g + b + b);
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(parsedColor);
	if (result && result.length > 2) return `${parseInt(result[1] || "", 16)}, ${parseInt(result[2] || "", 16)}, ${parseInt(result[3] || "", 16)}`;
	return null;
};
//#endregion
exports.addOpacity = addOpacity;
exports.getGradientMaskImage = getGradientMaskImage;
exports.gradient = gradient;
