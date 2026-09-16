'use client';
//#region src/components/slider/helpers.ts
const clamp = (value, [min, max]) => Math.min(max, Math.max(min, value));
const convertValueToPercentage = (value, min, max) => {
	return clamp(100 / (max - min) * (value - min), [0, 100]);
};
const linearScale = (input, output) => {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
};
const getClosestThumbIndex = (values, nextValue) => {
	if (values.length === 1) return 0;
	const distances = values.map((value) => Math.abs(value - nextValue));
	const closestDistance = Math.min(...distances);
	const firstIndex = distances.indexOf(closestDistance);
	const lastIndex = distances.lastIndexOf(closestDistance);
	/**
	* When thumbs sit on the exact same value, `indexOf` always resolves to the
	* leftmost one. Pick the thumb on the side being dragged instead, otherwise
	* stacked thumbs can no longer be pulled apart.
	*/
	if (firstIndex !== lastIndex && values[firstIndex] === values[lastIndex]) return nextValue > values[firstIndex] ? lastIndex : firstIndex;
	return firstIndex;
};
//#endregion
export { clamp, convertValueToPercentage, getClosestThumbIndex, linearScale };
