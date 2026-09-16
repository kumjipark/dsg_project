'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_date_calendar_helpers = require("../date-calendar/helpers.js");
const require_components_date_picker_helpers = require("../date-picker/helpers.js");
let react = require("react");
let react_dom = require("react-dom");
//#region src/components/date-range-picker/hooks.ts
const RANGE_SEPARATOR = " - ";
const buildCombinedValue = (startValue, endValue) => {
	return `${startValue}${RANGE_SEPARATOR}${endValue}`;
};
const useDateRangeField = ({ value, format = "YYYY.MM.DD", locale, timezone, setValue, readOnly, disabled }) => {
	const inputRef = (0, react.useRef)(null);
	const [startInputValue, setStartInputValue] = (0, react.useState)(require_components_date_calendar_helpers.isValidDate(value[0]) ? require_components_date_picker_helpers.toFormat(value[0], format, locale, timezone) : "");
	const [endInputValue, setEndInputValue] = (0, react.useState)(require_components_date_calendar_helpers.isValidDate(value[1]) ? require_components_date_picker_helpers.toFormat(value[1], format, locale, timezone) : "");
	const [startSections, setStartSections] = (0, react.useState)(require_components_date_picker_helpers.getDateformatSections(startInputValue || format, format, locale));
	const [endSections, setEndSections] = (0, react.useState)(require_components_date_picker_helpers.getDateformatSections(endInputValue || format, format, locale));
	const [focusedSection, setFocusedSection] = (0, react.useState)();
	const sectionValueRef = (0, react.useRef)("");
	const isTriggeredChange = (0, react.useRef)(false);
	const isFirstRender = (0, react.useRef)(true);
	const focusTimestamp = (0, react.useRef)(0);
	(0, react.useEffect)(() => {
		sectionValueRef.current = "";
	}, [focusedSection?.index, focusedSection?.position]);
	const activeStartInput = startInputValue || format;
	const activeEndInput = endInputValue || format;
	const inputValue = !startInputValue && !endInputValue ? "" : buildCombinedValue(activeStartInput, activeEndInput);
	const endOffset = activeStartInput.length + 3;
	(0, react.useEffect)(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		if (isTriggeredChange.current) {
			isTriggeredChange.current = false;
			return;
		}
		const newStart = require_components_date_calendar_helpers.isValidDate(value[0]) ? require_components_date_picker_helpers.toFormat(value[0], format, locale, timezone) : "";
		const newEnd = require_components_date_calendar_helpers.isValidDate(value[1]) ? require_components_date_picker_helpers.toFormat(value[1], format, locale, timezone) : "";
		setStartInputValue(newStart);
		setEndInputValue(newEnd);
		setStartSections(require_components_date_picker_helpers.getDateformatSections(newStart || format, format, locale));
		setEndSections(require_components_date_picker_helpers.getDateformatSections(newEnd || format, format, locale));
	}, [
		value[0],
		value[1],
		format,
		locale,
		timezone
	]);
	const getCurrentValue = (0, react.useCallback)((position) => {
		return position === "start" ? value[0] : value[1];
	}, [value]);
	const getCurrentInputValue = (0, react.useCallback)((position) => {
		return position === "start" ? activeStartInput : activeEndInput;
	}, [activeStartInput, activeEndInput]);
	const updateInputAndSections = (0, react.useCallback)((position, newInputValue) => {
		const newSections = require_components_date_picker_helpers.getDateformatSections(newInputValue, format, locale);
		if (position === "start") {
			setStartInputValue(newInputValue);
			setStartSections(newSections);
		} else {
			setEndInputValue(newInputValue);
			setEndSections(newSections);
		}
		return newSections;
	}, [format, locale]);
	const tryParse = (0, react.useCallback)((position, inputStr) => {
		const parsed = require_components_date_picker_helpers.parseFromFormat(inputStr, format, getCurrentValue(position), locale, timezone);
		if (parsed && !readOnly && !disabled) {
			setValue(position === "start" ? [parsed, value[1]] : [value[0], parsed]);
			isTriggeredChange.current = true;
		}
	}, [
		disabled,
		format,
		getCurrentValue,
		locale,
		readOnly,
		setValue,
		timezone,
		value
	]);
	const makeFocused = (0, react.useCallback)((section, position) => {
		return {
			...section,
			position
		};
	}, []);
	const setSelectionForSection = (0, react.useCallback)((section, position) => {
		const offset = position === "start" ? 0 : endOffset;
		requestAnimationFrame(() => {
			inputRef.current?.setSelectionRange(section.startIndex + offset, section.endIndex + offset);
		});
	}, [endOffset]);
	const handleNextSection = (0, react.useCallback)((position, newInputStr, newSections, currentLocalIndex) => {
		const nextLocalSection = newSections[currentLocalIndex + 1];
		tryParse(position, newInputStr);
		if (nextLocalSection) {
			sectionValueRef.current = "";
			setFocusedSection(makeFocused(nextLocalSection, position));
			setSelectionForSection(nextLocalSection, position);
		} else if (position === "start") {
			const firstEndSection = endSections[0];
			if (firstEndSection) {
				sectionValueRef.current = "";
				setFocusedSection(makeFocused(firstEndSection, "end"));
				setSelectionForSection(firstEndSection, "end");
			}
		} else {
			const lastSection = newSections[currentLocalIndex];
			if (lastSection) {
				const resolved = newSections.find((s) => s.format === lastSection.format) ?? lastSection;
				setFocusedSection(makeFocused(resolved, position));
				setSelectionForSection(resolved, position);
			}
		}
	}, [
		endSections,
		makeFocused,
		setSelectionForSection,
		tryParse
	]);
	const handleValueChange = (0, react.useCallback)((v) => {
		isTriggeredChange.current = true;
		const newStart = require_components_date_calendar_helpers.isValidDate(v[0]) ? require_components_date_picker_helpers.toFormat(v[0], format, locale, timezone) : "";
		const newEnd = require_components_date_calendar_helpers.isValidDate(v[1]) ? require_components_date_picker_helpers.toFormat(v[1], format, locale, timezone) : "";
		setStartInputValue(newStart);
		setEndInputValue(newEnd);
		setStartSections(require_components_date_picker_helpers.getDateformatSections(newStart || format, format, locale));
		setEndSections(require_components_date_picker_helpers.getDateformatSections(newEnd || format, format, locale));
		setValue(v);
	}, [
		format,
		locale,
		setValue,
		timezone
	]);
	const handleFocus = (0, react.useCallback)((e) => {
		if (e.currentTarget.tagName !== "TEXTAREA" && e.currentTarget.tagName !== "INPUT") return;
		if (!startInputValue && !endInputValue) focusTimestamp.current = e.timeStamp;
		const newStart = startInputValue || format;
		const newEnd = endInputValue || format;
		const newStartSections = require_components_date_picker_helpers.getDateformatSections(newStart, format, locale);
		const newEndSections = require_components_date_picker_helpers.getDateformatSections(newEnd, format, locale);
		(0, react_dom.flushSync)(() => {
			setStartInputValue(newStart);
			setEndInputValue(newEnd);
			setStartSections(newStartSections);
			setEndSections(newEndSections);
		});
		const closetSection = require_components_date_picker_helpers.getClosetSection(0, newStartSections);
		if (closetSection) {
			setFocusedSection(makeFocused(closetSection, "start"));
			e.currentTarget.setSelectionRange(closetSection.startIndex, closetSection.endIndex);
		}
	}, [
		endInputValue,
		format,
		locale,
		makeFocused,
		startInputValue
	]);
	const handleClick = (0, react.useCallback)((e) => {
		if (!("setSelectionRange" in e.currentTarget)) return;
		let cursorPosition = e.currentTarget.selectionStart ?? 0;
		if (!startInputValue && !endInputValue || e.timeStamp - focusTimestamp.current < 300) cursorPosition = 0;
		const position = cursorPosition < endOffset ? "start" : "end";
		const localSections = position === "start" ? startSections : endSections;
		const offset = position === "start" ? 0 : endOffset;
		const adjustedCursor = cursorPosition - offset;
		const closetSection = require_components_date_picker_helpers.getClosetSection(Math.max(0, adjustedCursor), localSections);
		if (closetSection) {
			e.preventDefault();
			setFocusedSection(makeFocused(closetSection, position));
			e.currentTarget.setSelectionRange(closetSection.startIndex + offset, closetSection.endIndex + offset);
		}
	}, [
		endInputValue,
		endOffset,
		endSections,
		makeFocused,
		startInputValue,
		startSections
	]);
	const handleBlur = (0, react.useCallback)(() => {
		setFocusedSection(void 0);
		sectionValueRef.current = "";
		isTriggeredChange.current = false;
		const startEmpty = startInputValue === format || require_components_date_calendar_helpers.isDateTypeEmpty(value[0]);
		const endEmpty = endInputValue === format || require_components_date_calendar_helpers.isDateTypeEmpty(value[1]);
		if (startEmpty && endEmpty) {
			setStartInputValue("");
			setEndInputValue("");
		}
	}, [
		endInputValue,
		format,
		startInputValue,
		value
	]);
	return {
		inputRef,
		inputValue,
		focusedSection,
		handlePaste: (0, react.useCallback)((e) => {
			e.preventDefault();
			if (!focusedSection || readOnly || disabled) return;
			const pastedText = e.clipboardData.getData("text");
			const { position } = focusedSection;
			const localSections = position === "start" ? startSections : endSections;
			const currentInput = getCurrentInputValue(position);
			const localIndex = focusedSection.index;
			const section = localSections[localIndex];
			if (!section) return;
			if (e.currentTarget.selectionStart === 0 && e.currentTarget.selectionEnd === inputValue.length) {
				const parts = pastedText.split(RANGE_SEPARATOR);
				if (parts.length === 2) {
					const parsedStart = require_components_date_picker_helpers.parseFromFormat(parts[0], format, value[0], locale, timezone);
					const parsedEnd = require_components_date_picker_helpers.parseFromFormat(parts[1], format, value[1], locale, timezone);
					if (parsedStart && parsedEnd) {
						handleValueChange([parsedStart, parsedEnd]);
						return;
					}
				}
			}
			if (section.type === "text") {
				const regex = require_components_date_picker_helpers.getRegexFormat(section.format, locale);
				const match = pastedText.match(regex);
				if (match) {
					const newInput = currentInput.slice(0, section.startIndex) + match[0] + currentInput.slice(section.endIndex);
					handleNextSection(position, newInput, updateInputAndSections(position, newInput), localIndex);
				}
			} else {
				const numericValue = parseInt(pastedText);
				if (!isNaN(numericValue)) {
					const padded = numericValue.toString().slice((section.format.length === 1 ? 2 : section.format.length) * -1).replace(/^0+/, "").padStart(section.format.length, "0");
					const newInput = currentInput.slice(0, section.startIndex) + padded + currentInput.slice(section.endIndex);
					handleNextSection(position, newInput, updateInputAndSections(position, newInput), localIndex);
				}
			}
		}, [
			disabled,
			endSections,
			focusedSection,
			format,
			getCurrentInputValue,
			handleNextSection,
			handleValueChange,
			inputValue.length,
			locale,
			readOnly,
			startSections,
			timezone,
			updateInputAndSections,
			value
		]),
		handleFocus,
		handleClick,
		handleBlur,
		handleKeyDown: (0, react.useCallback)((e) => {
			if (e.currentTarget.tagName !== "TEXTAREA" && e.currentTarget.tagName !== "INPUT" || !focusedSection) return;
			const { position } = focusedSection;
			const localSections = position === "start" ? startSections : endSections;
			const currentInput = getCurrentInputValue(position);
			const localIndex = focusedSection.index;
			const section = localSections[localIndex];
			if (!section) return;
			const updateSection = (newSectionValue) => {
				const newInput = currentInput.slice(0, section.startIndex) + newSectionValue + currentInput.slice(section.endIndex);
				const newSections = updateInputAndSections(position, newInput);
				tryParse(position, newInput);
				const updatedSection = newSections[localIndex];
				if (updatedSection) {
					setFocusedSection(makeFocused(updatedSection, position));
					setSelectionForSection(updatedSection, position);
				}
			};
			switch (e.key) {
				case "Tab": return;
				case "Backspace": {
					e.preventDefault();
					if (readOnly || disabled) return;
					sectionValueRef.current = "";
					const clearedInput = currentInput.slice(0, section.startIndex) + section.format + currentInput.slice(section.endIndex);
					const clearedSections = updateInputAndSections(position, clearedInput);
					tryParse(position, clearedInput);
					const clearedSection = clearedSections[localIndex];
					if (clearedSection) {
						setFocusedSection(makeFocused(clearedSection, position));
						setSelectionForSection(clearedSection, position);
					}
					return;
				}
				case "ArrowRight": {
					e.preventDefault();
					const nextLocal = localSections[localIndex + 1];
					if (nextLocal) {
						setFocusedSection(makeFocused(nextLocal, position));
						setSelectionForSection(nextLocal, position);
					} else if (position === "start") {
						const firstEnd = endSections[0];
						if (firstEnd) {
							setFocusedSection(makeFocused(firstEnd, "end"));
							setSelectionForSection(firstEnd, "end");
						}
					}
					return;
				}
				case "ArrowLeft": {
					e.preventDefault();
					const prevLocal = localSections[localIndex - 1];
					if (prevLocal) {
						setFocusedSection(makeFocused(prevLocal, position));
						setSelectionForSection(prevLocal, position);
					} else if (position === "end") {
						const lastStart = startSections[startSections.length - 1];
						if (lastStart) {
							setFocusedSection(makeFocused(lastStart, "start"));
							setSelectionForSection(lastStart, "start");
						}
					}
					return;
				}
				case "ArrowUp":
				case "ArrowDown": {
					e.preventDefault();
					if (readOnly || disabled) return;
					const newVal = require_components_date_picker_helpers.getIncrementedSectionValue(section, e.key === "ArrowUp" ? "up" : "down", getCurrentValue(position), timezone);
					if (newVal != null) updateSection(newVal);
					return;
				}
				case "Home":
				case "End": {
					e.preventDefault();
					if (readOnly || disabled) return;
					const boundVal = require_components_date_picker_helpers.getBoundSectionValue(section, e.key === "Home" ? "home" : "end", getCurrentValue(position), timezone);
					if (boundVal != null) updateSection(boundVal);
					return;
				}
			}
			if (e.ctrlKey || e.metaKey || e.altKey || readOnly || disabled) return;
			e.preventDefault();
			const charResult = require_components_date_picker_helpers.processCharacterInput(e.key, section, sectionValueRef.current, currentInput, locale, getCurrentValue(position), timezone);
			if (!charResult) return;
			const { newInput, isFinished, newSectionRef } = charResult;
			sectionValueRef.current = newSectionRef;
			const newSections = updateInputAndSections(position, newInput);
			if (isFinished) handleNextSection(position, newInput, newSections, localIndex);
			else {
				tryParse(position, newInput);
				const updated = newSections[localIndex];
				if (updated) {
					setFocusedSection(makeFocused(updated, position));
					setSelectionForSection(updated, position);
				}
			}
		}, [
			disabled,
			endSections,
			focusedSection,
			getCurrentInputValue,
			getCurrentValue,
			handleNextSection,
			makeFocused,
			locale,
			readOnly,
			setSelectionForSection,
			startSections,
			timezone,
			tryParse,
			updateInputAndSections
		]),
		handleValueChange,
		handleInputValueChange: (0, react.useCallback)(() => {}, [])
	};
};
//#endregion
exports.useDateRangeField = useDateRangeField;
