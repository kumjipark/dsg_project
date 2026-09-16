'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_virtual_input_index = require("../virtual-input/index.js");
const require_components_slider_helpers = require("./helpers.js");
const require_components_slider_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/slider/index.tsx
const PAGE_KEYS = ["PageUp", "PageDown"];
const ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
const Slider = (0, react.forwardRef)(({ title, label, min = 0, max = 100, step = 1, minStepBetweenThumbs = 0, defaultValue = [min], disableSwapThumbs = false, value, onValueChange, onValueChangeComplete, disabled, name, onPointerDown, onPointerUp, onPointerMove, onPointerCancel, onKeyDown, onChange: _, ...props }, forwardedRef) => {
	const labelId = (0, react.useId)();
	const thumbRefs = (0, react.useRef)(/* @__PURE__ */ new Set());
	const currentFocusedIndex = (0, react.useRef)(0);
	const rect = (0, react.useRef)(void 0);
	const activePointerId = (0, react.useRef)(null);
	const [node, setNode] = (0, react.useState)(null);
	const [values = [], setValues] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: value,
		defaultProp: defaultValue,
		onChange: (v) => {
			[...thumbRefs.current][currentFocusedIndex.current]?.focus();
			onValueChange?.(v);
		}
	});
	const slideStartValues = (0, react.useRef)(values);
	/**
	* `values` is a render closure, and a fast drag lands several moves — and
	* its release — inside one batch, before React re-renders. Every one of
	* those would compute from, and compare against, the values the drag
	* started at. This ref carries what was last committed so each step sees
	* the one before it.
	*/
	const committedValues = (0, react.useRef)(values);
	const handleValueChange = (0, react.useCallback)((nextValue, index, isCompleted = false) => {
		const decimalCount = nextValue.toString().split(".")[1]?.length ?? 0;
		const calculatedNextValue = require_components_slider_helpers.clamp(Math.round(Math.round((nextValue - min) / step * step + min) * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount), [min, max]);
		const prevValues = committedValues.current;
		const nextValues = [
			...prevValues.slice(0, index),
			calculatedNextValue,
			...prevValues.slice(index + 1)
		];
		const stepsBetweenValue = Math.min(...nextValues.slice(0, -1).map((v, i) => nextValues[i + 1] - v));
		if (disableSwapThumbs && stepsBetweenValue < minStepBetweenThumbs || minStepBetweenThumbs > 0 && stepsBetweenValue < minStepBetweenThumbs) return;
		const sortedNextValues = [...nextValues].sort((a, b) => a - b);
		/**
		* `indexOf` resolves to the leftmost slot when thumbs share a value,
		* which would hand the focus over to a thumb the user never touched.
		* Keep the dragged thumb where it is unless sorting actually moved it.
		*/
		currentFocusedIndex.current = sortedNextValues[index] === calculatedNextValue ? index : sortedNextValues.indexOf(calculatedNextValue);
		if (sortedNextValues.toString() === prevValues.toString()) return;
		committedValues.current = sortedNextValues;
		if (isCompleted) onValueChangeComplete?.(sortedNextValues);
		setValues(sortedNextValues);
	}, [
		max,
		min,
		onValueChangeComplete,
		setValues,
		step,
		minStepBetweenThumbs,
		disableSwapThumbs
	]);
	const getValueFromPointer = (pointerPosition) => {
		if (!node) return;
		const newRect = rect.current || node.getBoundingClientRect();
		const cb = require_components_slider_helpers.linearScale([0, newRect.width], [min, max]);
		rect.current = newRect;
		return cb(pointerPosition - newRect.left);
	};
	/**
	* A touch gesture can be taken away at any moment — a system swipe, an
	* incoming call — and `pointercancel` is the only notice we get. Treat it
	* exactly like a release so the values the user already dragged to are
	* reported and the cached rect cannot leak into the next drag.
	*/
	const endSlide = (event) => {
		if (activePointerId.current !== event.pointerId) return;
		const target = event.target;
		if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
		activePointerId.current = null;
		rect.current = void 0;
		/**
		* Comparing a single index misses changes whenever thumbs end up
		* stacked or swapped, so compare the whole set instead.
		*/
		const finalValues = committedValues.current;
		if (slideStartValues.current.toString() !== finalValues.toString()) onValueChangeComplete?.(finalValues);
	};
	/**
	* Outside a drag the ref only mirrors what is rendered, so a controlled
	* update or a form reset reaches it. During one it must not: a controlled
	* parent can re-render with the value it has not applied yet, which would
	* hand the drag back its own starting point and swallow the completion.
	*/
	(0, react.useEffect)(() => {
		if (activePointerId.current !== null) return;
		committedValues.current = values;
	});
	const initialValuesRef = (0, react.useRef)(values);
	(0, react.useEffect)(() => {
		const form = node?.closest("form");
		if (form) {
			const reset = () => setValues(initialValuesRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [node, setValues]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		as: "span",
		flexDirection: "column",
		ref: forwardedRef,
		...props,
		sx: [{ width: "100%" }, props.sx],
		children: [
			typeof title !== "undefined" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				as: require_components_typography_index.Typography,
				gap: "4px",
				"data-role": "slider-title",
				align: "center",
				display: "block",
				variant: "headline2",
				weight: "bold",
				alignItems: "center",
				color: disabled ? "semantic.label.disable" : "semantic.label.normal",
				sx: { margin: "0 auto 32px auto" },
				children: typeof title === "function" ? title({
					values,
					disabled,
					min,
					max
				}) : title
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
				sx: require_components_slider_style.sliderProgressWrapperStyle({ disabled }),
				"data-role": "slider-progress-wrapper",
				as: "span",
				ref: setNode,
				onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(onKeyDown, (e) => {
					if (disabled) return;
					if (e.key === "Home") {
						e.preventDefault();
						handleValueChange(min, 0, true);
					} else if (e.key === "End") {
						e.preventDefault();
						handleValueChange(max, values.length - 1, true);
					} else if (PAGE_KEYS.concat(ARROW_KEYS).includes(e.key)) {
						e.preventDefault();
						const multiplier = PAGE_KEYS.includes(e.key) || e.shiftKey && ARROW_KEYS.includes(e.key) ? 10 : 1;
						const atIndex = currentFocusedIndex.current;
						const newValue = values[atIndex];
						handleValueChange(newValue + step * multiplier * ([
							"Home",
							"PageDown",
							"ArrowDown",
							"ArrowLeft"
						].includes(e.key) ? -1 : 1), atIndex, true);
					}
				}),
				onPointerDown: (0, _radix_ui_primitive.composeEventHandlers)(onPointerDown, (event) => {
					if (disabled) return;
					/**
					* A touch device happily starts a second pointer mid-drag. Letting
					* it through would reset the drag origin and teleport the thumb
					* under the finger that is already dragging. The *same* pointer
					* pressing again means we missed its release, so let it take the
					* drag over rather than deadlocking the slider.
					*/
					if (activePointerId.current !== null && activePointerId.current !== event.pointerId) return;
					activePointerId.current = event.pointerId;
					slideStartValues.current = values;
					committedValues.current = values;
					const target = event.target;
					target.setPointerCapture(event.pointerId);
					event.preventDefault();
					const closestThumb = target.closest("[data-role=\"slider-thumb\"]");
					if (closestThumb && thumbRefs.current.has(closestThumb)) closestThumb.focus();
					else {
						const newValue = getValueFromPointer(event.clientX);
						if (newValue === void 0) return;
						handleValueChange(newValue, require_components_slider_helpers.getClosestThumbIndex(values, newValue));
					}
				}),
				onPointerMove: (0, _radix_ui_primitive.composeEventHandlers)(onPointerMove, (event) => {
					if (disabled || activePointerId.current !== event.pointerId) return;
					/**
					* A release can go missing entirely — the button comes up outside
					* the window, the window loses focus mid-drag, the captured node
					* is torn out from under us. `buttons` is the ground truth for
					* "still held", so trust it over our own bookkeeping instead of
					* trailing a pointer that was let go a long time ago.
					*/
					if (event.buttons === 0) {
						endSlide(event);
						return;
					}
					const newValue = getValueFromPointer(event.clientX);
					if (newValue === void 0) return;
					handleValueChange(newValue, currentFocusedIndex.current);
				}),
				onPointerUp: (0, _radix_ui_primitive.composeEventHandlers)(onPointerUp, endSlide),
				onPointerCancel: (0, _radix_ui_primitive.composeEventHandlers)(onPointerCancel, endSlide),
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
					sx: require_components_slider_style.sliderProgressStyle,
					"data-role": "slider-progress-range",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
						sx: require_components_slider_style.sliderProgressRangeStyle,
						"data-role": "slider-progress",
						style: {
							left: `${values.length > 1 ? require_components_slider_helpers.convertValueToPercentage(Math.min(...values), min, max) : 0}%`,
							right: `${100 - require_components_slider_helpers.convertValueToPercentage(Math.max(...values), min, max)}%`
						}
					})
				}), values.map((v, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SliderThumb, {
					disabled,
					name,
					length: value?.length ?? 0,
					value: v,
					min,
					max,
					"aria-labelledby": labelId,
					onFocus: () => currentFocusedIndex.current = index,
					thumbs: thumbRefs.current
				}, index))]
			}),
			typeof label !== "undefined" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				"data-role": "slider-label-wrapper",
				sx: {
					position: "relative",
					height: "20px",
					marginTop: "8px"
				},
				children: values.map((v, i) => {
					const render = typeof label === "function" ? label({
						value: v,
						index: i,
						min,
						max,
						disabled
					}) : label;
					if (!render) return null;
					return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
						"data-role": "slider-label",
						variant: "label1",
						weight: "medium",
						display: "inline-block",
						style: {
							left: `${require_components_slider_helpers.convertValueToPercentage(values[i] ?? 0, min, max)}%`,
							transform: `translateX(-${require_components_slider_helpers.convertValueToPercentage(values[i] ?? 0, min, max)}%)`
						},
						sx: {
							position: "absolute",
							width: "max-content"
						},
						color: disabled ? "semantic.label.disable" : "semantic.label.normal",
						children: render
					}, i);
				})
			})
		]
	});
});
Slider.displayName = "Slider";
const SliderThumb = ({ name, disabled, min, max, value, length, thumbs, ...props }) => {
	const [thumb, setThumb] = (0, react.useState)(null);
	const isFormControl = thumb ? Boolean(thumb.closest("form")) : true;
	(0, react.useEffect)(() => {
		if (thumb) {
			thumbs.add(thumb);
			return () => {
				thumbs.delete(thumb);
			};
		}
	}, [thumb, thumbs]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
		ref: setThumb,
		as: "span",
		role: "slider",
		"aria-valuemin": min,
		"aria-valuemax": max,
		"aria-valuenow": value,
		"aria-disabled": disabled,
		tabIndex: disabled ? -1 : 0,
		style: {
			left: require_components_slider_helpers.convertValueToPercentage(value, min, max) + "%",
			transform: `translateX(${require_components_slider_helpers.convertValueToPercentage(value, min, max) * -1}%)`
		},
		"data-role": "slider-thumb",
		sx: require_components_slider_style.sliderThumbStyle,
		...props,
		onPointerDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onPointerDown, () => {
			thumb?.focus();
		}),
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			"data-role": "slider-thumb-interaction",
			as: "span",
			sx: require_components_slider_style.sliderThumbInteractionStyle
		}), isFormControl && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_virtual_input_index.VirtualValueInput, {
			type: "range",
			name: length > 1 ? `${name}[]` : name,
			value,
			defaultValue: value
		})]
	}) });
};
SliderThumb.displayName = "SliderThumb";
//#endregion
exports.Slider = Slider;
