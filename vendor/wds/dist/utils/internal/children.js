Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let react = require("react");
//#region src/utils/internal/children.ts
const findComponentInChildren = (nodes, key) => {
	return react.Children.toArray(nodes).map((node) => {
		if (!(0, react.isValidElement)(node) || !node.type) return null;
		const { type, props: { children } } = node;
		if (type[key]) return node.props;
		return findComponentInChildren(children, key);
	}).flat(Infinity).filter((v) => Boolean(v));
};
//#endregion
exports.findComponentInChildren = findComponentInChildren;
