import { Children, isValidElement } from "react";
//#region src/utils/internal/children.ts
const findComponentInChildren = (nodes, key) => {
	return Children.toArray(nodes).map((node) => {
		if (!isValidElement(node) || !node.type) return null;
		const { type, props: { children } } = node;
		if (type[key]) return node.props;
		return findComponentInChildren(children, key);
	}).flat(Infinity).filter((v) => Boolean(v));
};
//#endregion
export { findComponentInChildren };
