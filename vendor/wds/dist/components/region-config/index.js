'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_stores_region_store = require("../../stores/region-store.js");
let react = require("react");
//#region src/components/region-config/index.tsx
const RegionConfig = (0, react.memo)((props) => {
	const config = require_stores_region_store.useRegionStore((state) => state.config);
	const setConfig = require_stores_region_store.useRegionStore((state) => state.setConfig);
	const memoizedProps = (0, react.useMemo)(() => props, [JSON.stringify(props)]);
	const [prevConfig] = (0, react.useState)(config);
	(0, react.useEffect)(() => {
		if (Object.values(memoizedProps).length > 0) {
			setConfig(memoizedProps);
			return () => setConfig(prevConfig);
		}
	}, [memoizedProps, setConfig]);
	return null;
});
RegionConfig.displayName = "RegionConfig";
//#endregion
exports.RegionConfig = RegionConfig;
