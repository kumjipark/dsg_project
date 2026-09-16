'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_image_base_helpers = require("./helpers.js");
let react = require("react");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/image-base/index.tsx
const ImageBase = (0, react.forwardRef)(({ src, onError, onLoad, onAbort, ...props }, forwardedRef) => {
	const ref = (0, react.useRef)(null);
	const abortControllerRef = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, forwardedRef);
	(0, react.useEffect)(() => {
		if (!src) return;
		abortControllerRef.current?.abort();
		abortControllerRef.current = new AbortController();
		const abortController = abortControllerRef.current;
		require_components_image_base_helpers.loadImage(src, abortController.signal).then(() => {
			onLoad?.();
		}).catch((err) => {
			if (err instanceof DOMException && err.name === "AbortError") onAbort?.();
			else onError?.();
		});
		return () => {
			abortController.abort();
		};
	}, [src]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
		ref: composedRefs,
		src,
		...props
	});
});
ImageBase.displayName = "ImageBase";
//#endregion
exports.ImageBase = ImageBase;
