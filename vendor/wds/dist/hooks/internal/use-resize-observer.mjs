import { debounce } from "../../utils/internal/debounce.mjs";
import { useEffect } from "react";
//#region src/hooks/internal/use-resize-observer.ts
const useResizeObserver = (target, callback) => {
	useEffect(() => {
		if (!target) return;
		let rAF;
		const rAFHandleResize = () => {
			cancelAnimationFrame(rAF);
			rAF = requestAnimationFrame(() => {
				callback();
			});
		};
		const debounceHandleResize = debounce(callback);
		const containerWindow = target.ownerDocument.defaultView || window;
		containerWindow.addEventListener("resize", debounceHandleResize);
		let resizeObserver;
		if (typeof ResizeObserver !== "undefined") {
			resizeObserver = new ResizeObserver(() => {
				(process.env.NODE_ENV === "test" ? rAFHandleResize : callback)();
			});
			resizeObserver.observe(target);
		}
		return () => {
			debounceHandleResize.clear();
			cancelAnimationFrame(rAF);
			containerWindow.removeEventListener("resize", debounceHandleResize);
			if (resizeObserver) {
				resizeObserver.unobserve(target);
				resizeObserver.disconnect();
			}
		};
	}, [target, callback]);
};
//#endregion
export { useResizeObserver as default };
