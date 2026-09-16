'use client';
import { Children, isValidElement } from "react";
//#region src/components/select/helpers.ts
const convertNodeToOption = (node, givenValue) => {
	const { key, props: { children, value, ...restProps } } = node;
	if (isValidElement(children)) return convertNodeToOption(children, givenValue ?? value);
	return {
		key,
		value: givenValue ?? value,
		label: children,
		...restProps
	};
};
const convertChildrenToData = (nodes) => {
	return Children.toArray(nodes).map((node) => {
		if (!isValidElement(node) || !node.type) return null;
		const { type: { isOptionGroup, isOption }, props: { children } } = node;
		if (!isOptionGroup && isOption) return convertNodeToOption(node);
		return convertChildrenToData(children);
	}).flat(Infinity).filter((v) => Boolean(v) && v.value !== void 0);
};
//#endregion
export { convertChildrenToData };
