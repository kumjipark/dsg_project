import { createContext, useContext, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/hooks/internal/use-loose-context.tsx
const createLooseContext = (rootComponentName, defaultContext) => {
	const Context = createContext(defaultContext);
	const Provider = (props) => {
		const { children, ...context } = props;
		const value = useMemo(() => context, Object.values(context));
		return /* @__PURE__ */ jsx(Context.Provider, {
			value,
			children
		});
	};
	const useLooseContext = () => {
		const context = useContext(Context);
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
	};
	Provider.displayName = rootComponentName + "Provider";
	return [Provider, useLooseContext];
};
//#endregion
export { createLooseContext as default };
