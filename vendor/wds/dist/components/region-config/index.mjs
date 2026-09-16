'use client';
import { useRegionStore } from "../../stores/region-store.mjs";
import { memo, useEffect, useMemo, useState } from "react";
//#region src/components/region-config/index.tsx
const RegionConfig = memo((props) => {
	const config = useRegionStore((state) => state.config);
	const setConfig = useRegionStore((state) => state.setConfig);
	const memoizedProps = useMemo(() => props, [JSON.stringify(props)]);
	const [prevConfig] = useState(config);
	useEffect(() => {
		if (Object.values(memoizedProps).length > 0) {
			setConfig(memoizedProps);
			return () => setConfig(prevConfig);
		}
	}, [memoizedProps, setConfig]);
	return null;
});
RegionConfig.displayName = "RegionConfig";
//#endregion
export { RegionConfig };
