'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
require("../_virtual/_rolldown/runtime.js");
let react = require("react");
//#region src/hooks/use-transition-status.ts
const useTransitionStatus = ({ duration = 250, open = false }) => {
	const [status, setStatus] = (0, react.useState)("initial");
	const hasExited = !useDelayUnmount(open, duration);
	if (!hasExited && status === "close") setStatus("unmounted");
	(0, react.useEffect)(() => {
		if (!open) {
			setStatus("close");
			return;
		}
		setStatus("initial");
		const rAF = requestAnimationFrame(() => {
			setStatus("open");
		});
		return () => {
			cancelAnimationFrame(rAF);
		};
	}, [open, duration]);
	return {
		hasExited,
		status
	};
};
const useDelayUnmount = (open, durationMs) => {
	const [isMounted, setIsMounted] = (0, react.useState)(open);
	if (open && !isMounted) setIsMounted(true);
	(0, react.useEffect)(() => {
		if (!open && isMounted) {
			const timeout = setTimeout(() => setIsMounted(false), durationMs);
			return () => clearTimeout(timeout);
		}
	}, [
		open,
		isMounted,
		durationMs
	]);
	return isMounted;
};
//#endregion
exports.default = useTransitionStatus;
