'use client';
import { useEffect, useState } from "react";
//#region src/hooks/use-transition-status.ts
const useTransitionStatus = ({ duration = 250, open = false }) => {
	const [status, setStatus] = useState("initial");
	const hasExited = !useDelayUnmount(open, duration);
	if (!hasExited && status === "close") setStatus("unmounted");
	useEffect(() => {
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
	const [isMounted, setIsMounted] = useState(open);
	if (open && !isMounted) setIsMounted(true);
	useEffect(() => {
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
export { useTransitionStatus as default };
