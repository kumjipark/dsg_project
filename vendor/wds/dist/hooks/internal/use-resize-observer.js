Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_debounce = require("../../utils/internal/debounce.js");
let react = require("react");
//#region src/hooks/internal/use-resize-observer.ts
const useResizeObserver = (target, callback) => {
	(0, react.useEffect)(() => {
		if (!target) return;
		let rAF;
		const rAFHandleResize = () => {
			cancelAnimationFrame(rAF);
			rAF = requestAnimationFrame(() => {
				callback();
			});
		};
		const debounceHandleResize = require_utils_internal_debounce.debounce(callback);
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
exports.default = useResizeObserver;
