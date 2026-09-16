'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let react = require("react");
//#region src/components/select/helpers.ts
const convertNodeToOption = (node, givenValue) => {
	const { key, props: { children, value, ...restProps } } = node;
	if ((0, react.isValidElement)(children)) return convertNodeToOption(children, givenValue ?? value);
	return {
		key,
		value: givenValue ?? value,
		label: children,
		...restProps
	};
};
const convertChildrenToData = (nodes) => {
	return react.Children.toArray(nodes).map((node) => {
		if (!(0, react.isValidElement)(node) || !node.type) return null;
		const { type: { isOptionGroup, isOption }, props: { children } } = node;
		if (!isOptionGroup && isOption) return convertNodeToOption(node);
		return convertChildrenToData(children);
	}).flat(Infinity).filter((v) => Boolean(v) && v.value !== void 0);
};
//#endregion
exports.convertChildrenToData = convertChildrenToData;
