Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
require("../../_virtual/_rolldown/runtime.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/hooks/internal/use-loose-context.tsx
const createLooseContext = (rootComponentName, defaultContext) => {
	const Context = (0, react.createContext)(defaultContext);
	const Provider = (props) => {
		const { children, ...context } = props;
		const value = (0, react.useMemo)(() => context, Object.values(context));
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Context.Provider, {
			value,
			children
		});
	};
	const useLooseContext = () => {
		const context = (0, react.useContext)(Context);
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
	};
	Provider.displayName = rootComponentName + "Provider";
	return [Provider, useLooseContext];
};
//#endregion
exports.default = createLooseContext;
