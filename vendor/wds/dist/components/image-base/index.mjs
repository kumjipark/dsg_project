'use client';
import { loadImage } from "./helpers.mjs";
import { forwardRef, useEffect, useRef } from "react";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { jsx } from "react/jsx-runtime";
//#region src/components/image-base/index.tsx
const ImageBase = forwardRef(({ src, onError, onLoad, onAbort, ...props }, forwardedRef) => {
	const ref = useRef(null);
	const abortControllerRef = useRef(null);
	const composedRefs = useComposedRefs(ref, forwardedRef);
	useEffect(() => {
		if (!src) return;
		abortControllerRef.current?.abort();
		abortControllerRef.current = new AbortController();
		const abortController = abortControllerRef.current;
		loadImage(src, abortController.signal).then(() => {
			onLoad?.();
		}).catch((err) => {
			if (err instanceof DOMException && err.name === "AbortError") onAbort?.();
			else onError?.();
		});
		return () => {
			abortController.abort();
		};
	}, [src]);
	return /* @__PURE__ */ jsx("img", {
		ref: composedRefs,
		src,
		...props
	});
});
ImageBase.displayName = "ImageBase";
//#endregion
export { ImageBase };
