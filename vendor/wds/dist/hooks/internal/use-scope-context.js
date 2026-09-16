Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/hooks/internal/use-scope-context.tsx
const createScope = (...components) => {
	const useScope = (scope) => {
		return (0, react.useMemo)(() => {
			const result = {};
			components.forEach((component) => {
				const scopeKey = `__scope${component}`;
				result[scopeKey] = scope ? `${scope}/${component}` : component;
			});
			return result;
		}, [scope]);
	};
	return useScope;
};
const createScopeContext = (rootComponentName, defaultContext) => {
	const contextCache = /* @__PURE__ */ new Map();
	const Provider = (props) => {
		const { children, scope, ...context } = props;
		if (!contextCache.has(scope)) {
			const Context = (0, react.createContext)(defaultContext);
			contextCache.set(scope, Context);
		}
		const Context = contextCache.get(scope);
		const value = (0, react.useMemo)(() => context, Object.values(context));
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Context.Provider, {
			value,
			children
		});
	};
	const useScopeContext = (consumerName, scope) => {
		if (!contextCache.has(scope)) throw new Error(`${consumerName} must be rendered inside a ${rootComponentName}Provider with scope="${scope}"`);
		const context = (0, react.useContext)(contextCache.get(scope));
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
		throw new Error(`${consumerName} must be rendered inside a ${rootComponentName}Provider with scope="${scope}"`);
	};
	Provider.displayName = rootComponentName + "Provider";
	return [Provider, useScopeContext];
};
//#endregion
exports.createScope = createScope;
exports.createScopeContext = createScopeContext;
