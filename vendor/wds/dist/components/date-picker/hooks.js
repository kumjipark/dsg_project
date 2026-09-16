'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_date_calendar_helpers = require("../date-calendar/helpers.js");
const require_components_date_picker_helpers = require("./helpers.js");
let react = require("react");
let react_dom = require("react-dom");
//#region src/components/date-picker/hooks.ts
const useDateField = ({ value, format = "YYYY.MM.DD", locale, timezone, setValue, readOnly, disabled }) => {
	const inputRef = (0, react.useRef)(null);
	const [focusedSection, setFocusedSection] = (0, react.useState)();
	const [inputValue, setInputValue] = (0, react.useState)(require_components_date_calendar_helpers.isValidDate(value) ? require_components_date_picker_helpers.toFormat(value, format, locale, timezone) : "");
	const [sections, setSections] = (0, react.useState)(require_components_date_picker_helpers.getDateformatSections(inputValue, format, locale));
	const sectionValueRef = (0, react.useRef)("");
	(0, react.useEffect)(() => {
		sectionValueRef.current = "";
	}, [focusedSection?.index]);
	const handleValueChange = (0, react.useCallback)((v) => {
		const newInputValue = require_components_date_calendar_helpers.isValidDate(v) ? require_components_date_picker_helpers.toFormat(v, format, locale, timezone) : "";
		isTriggeredChange.current = true;
		setInputValue(newInputValue);
		setSections(require_components_date_picker_helpers.getDateformatSections(newInputValue, format, locale));
		setValue(v);
		if (focusedSection) setFocusedSection(sections[focusedSection.index]);
	}, [
		focusedSection,
		format,
		locale,
		sections,
		setValue,
		timezone
	]);
	const handleInputValueChange = (0, react.useCallback)(() => {
		setInputValue(!inputValue ? format : inputValue);
	}, [inputValue, format]);
	(0, react.useEffect)(() => {
		const newSections = require_components_date_picker_helpers.getDateformatSections(!inputValue ? "" : require_components_date_calendar_helpers.isValidDate(value) ? require_components_date_picker_helpers.toFormat(value, format, locale, timezone) : format, format, locale);
		setSections(newSections);
		if (focusedSection) setFocusedSection(newSections[focusedSection.index]);
	}, [
		format,
		locale,
		timezone
	]);
	const isFirstRender = (0, react.useRef)(true);
	const isTriggeredChange = (0, react.useRef)(false);
	const prevTimezone = (0, react.useRef)(timezone);
	(0, react.useEffect)(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		if (isTriggeredChange.current) {
			isTriggeredChange.current = false;
			return;
		}
		if (!inputValue) if (require_components_date_calendar_helpers.isValidDate(value)) {
			const newInputValue = require_components_date_calendar_helpers.isValidDate(value) ? require_components_date_picker_helpers.toFormat(value, format, locale, timezone) : format;
			setInputValue(newInputValue);
			setSections(require_components_date_picker_helpers.getDateformatSections(newInputValue, format, locale));
			if (focusedSection) setFocusedSection(sections[focusedSection.index]);
		} else setSections(require_components_date_picker_helpers.getDateformatSections(format, format, locale));
		else {
			const newInputValue = require_components_date_calendar_helpers.isValidDate(value) ? require_components_date_picker_helpers.toFormat(value, format, locale, timezone) : format;
			setInputValue(newInputValue);
			setSections(require_components_date_picker_helpers.getDateformatSections(newInputValue, format, locale));
			if (focusedSection) setFocusedSection(sections[focusedSection.index]);
		}
		if (require_components_date_calendar_helpers.isValidDate(value) && prevTimezone.current !== timezone) {
			setValue(require_components_date_calendar_helpers.dateTypeToDateObject(value, timezone));
			prevTimezone.current = timezone;
		}
	}, [
		timezone,
		value,
		locale,
		format
	]);
	const handleNextSection = (0, react.useCallback)((newInputValue, newSectionValue) => {
		if (!focusedSection) return;
		const nextSection = newSectionValue[focusedSection.index + 1];
		const parsedDate = require_components_date_picker_helpers.parseFromFormat(newInputValue, format, value, locale, timezone);
		if (parsedDate && !readOnly && !disabled) {
			setValue(parsedDate);
			isTriggeredChange.current = true;
		}
		if (nextSection) {
			sectionValueRef.current = "";
			setFocusedSection(nextSection);
			requestAnimationFrame(() => {
				inputRef.current?.setSelectionRange(nextSection.startIndex, nextSection.endIndex);
			});
		} else {
			const nextFocusedSection = newSectionValue.find((section) => section.format === focusedSection.format) ?? focusedSection;
			setFocusedSection(nextFocusedSection);
			requestAnimationFrame(() => {
				inputRef.current?.setSelectionRange(nextFocusedSection.startIndex, nextFocusedSection.endIndex);
			});
		}
	}, [
		focusedSection,
		format,
		value,
		locale,
		timezone,
		readOnly,
		disabled,
		setValue
	]);
	const handlePaste = (0, react.useCallback)((e) => {
		const newValue = e.clipboardData.getData("text");
		e.preventDefault();
		if (!focusedSection || readOnly || disabled) return;
		if (e.currentTarget.selectionStart === 0 && e.currentTarget.selectionEnd === inputValue.length) {
			const parsedDate = require_components_date_picker_helpers.parseFromFormat(newValue, format, value, locale, timezone);
			if (parsedDate && require_components_date_calendar_helpers.isValidDate(parsedDate)) {
				const newSectionValue = require_components_date_picker_helpers.getDateformatSections(newValue, format, locale);
				setValue(parsedDate);
				setInputValue(require_components_date_picker_helpers.toFormat(parsedDate, format, locale, timezone));
				setSections(newSectionValue);
				setFocusedSection(newSectionValue[newSectionValue.length - 1]);
				isTriggeredChange.current = true;
				requestAnimationFrame(() => {
					inputRef.current?.setSelectionRange(newSectionValue[newSectionValue.length - 1].startIndex, newSectionValue[newSectionValue.length - 1].endIndex);
				});
				return;
			} else {
				inputRef.current?.setSelectionRange(sections[focusedSection.index].startIndex, sections[focusedSection.index].endIndex);
				return;
			}
		}
		if (focusedSection.type === "text") {
			const regex = require_components_date_picker_helpers.getRegexFormat(focusedSection.format, locale);
			const match = newValue.match(regex);
			if (match) {
				const newInputValue = inputValue.slice(0, focusedSection.startIndex) + match[0] + inputValue.slice(focusedSection.endIndex);
				setInputValue(newInputValue);
				handleNextSection(newInputValue, require_components_date_picker_helpers.getDateformatSections(newInputValue, format, locale));
			}
		} else {
			const numericValue = parseInt(newValue);
			if (!isNaN(numericValue)) {
				const newInputValue = inputValue.slice(0, focusedSection.startIndex) + `${numericValue.toString().slice((focusedSection.format.length === 1 ? 2 : focusedSection.format.length) * -1).replace(/^0+/, "").padStart(focusedSection.format.length, "0")}` + inputValue.slice(focusedSection.endIndex);
				const newSectionValue = require_components_date_picker_helpers.getDateformatSections(newInputValue, format, locale);
				setInputValue(newInputValue);
				handleNextSection(newInputValue, newSectionValue);
			}
		}
	}, [
		focusedSection,
		readOnly,
		disabled,
		inputValue,
		format,
		value,
		locale,
		timezone,
		setValue,
		sections,
		handleNextSection
	]);
	const focusTimestamp = (0, react.useRef)(0);
	const handleClick = (0, react.useCallback)((e) => {
		if ("setSelectionRange" in e.currentTarget) {
			let cursorPosition = e.currentTarget.selectionStart ?? 0;
			if (!inputValue || e.timeStamp - focusTimestamp.current < 300) cursorPosition = 0;
			const closetSection = require_components_date_picker_helpers.getClosetSection(cursorPosition, sections);
			if (closetSection) {
				e.preventDefault();
				setFocusedSection(closetSection);
				e.currentTarget.setSelectionRange(closetSection.startIndex, closetSection.endIndex);
			}
		}
	}, [inputValue, sections]);
	return {
		inputRef,
		inputValue,
		focusedSection,
		sections,
		handlePaste,
		handleFocus: (0, react.useCallback)((e) => {
			if (e.currentTarget.tagName !== "TEXTAREA" && e.currentTarget.tagName !== "INPUT") return;
			if (!inputValue) focusTimestamp.current = e.timeStamp;
			const newInputValue = !inputValue ? format : inputValue;
			const newSections = require_components_date_picker_helpers.getDateformatSections(newInputValue, format, locale);
			(0, react_dom.flushSync)(() => {
				setSections(newSections);
				setInputValue(newInputValue);
			});
			const closetSection = require_components_date_picker_helpers.getClosetSection(0, newSections);
			if (closetSection) {
				setFocusedSection(closetSection);
				e.currentTarget.setSelectionRange(closetSection.startIndex, closetSection.endIndex);
			}
		}, [
			format,
			inputValue,
			locale
		]),
		handleClick,
		handleBlur: (0, react.useCallback)(() => {
			setFocusedSection(void 0);
			sectionValueRef.current = "";
			isTriggeredChange.current = false;
			if (inputValue === format || require_components_date_calendar_helpers.isDateTypeEmpty(value)) setInputValue("");
		}, [
			format,
			inputValue,
			value
		]),
		handleKeyDown: (0, react.useCallback)((e) => {
			if (e.currentTarget.tagName !== "TEXTAREA" && e.currentTarget.tagName !== "INPUT" || !focusedSection) return;
			switch (e.key) {
				case "Tab": return;
				case "Backspace":
					e.preventDefault();
					if (readOnly || disabled) return;
					sectionValueRef.current = "";
					if (e.currentTarget.selectionStart === 0 && e.currentTarget.selectionEnd === inputValue.length) {
						const removedInputValue = format;
						const removedSections = require_components_date_picker_helpers.getDateformatSections(format, format, locale);
						const parsedNewDateFromFormat = require_components_date_picker_helpers.parseFromFormat(removedInputValue, format, value, locale, timezone);
						setInputValue(removedInputValue);
						setSections(removedSections);
						setFocusedSection(removedSections[0]);
						if (parsedNewDateFromFormat) {
							setValue(parsedNewDateFromFormat);
							isTriggeredChange.current = true;
						}
						if (removedSections[0]) requestAnimationFrame(() => {
							inputRef.current?.setSelectionRange(removedSections[0].startIndex, removedSections[0].endIndex);
						});
						return;
					}
					const removedInputValue = inputValue.slice(0, focusedSection.startIndex) + focusedSection.format + inputValue.slice(focusedSection.endIndex);
					const removedSections = require_components_date_picker_helpers.getDateformatSections(removedInputValue, format, locale);
					const parsedNewDateFromFormat = require_components_date_picker_helpers.parseFromFormat(removedInputValue, format, value, locale, timezone);
					setInputValue(removedInputValue);
					setSections(removedSections);
					setFocusedSection(removedSections[focusedSection.index]);
					if (parsedNewDateFromFormat) {
						setValue(parsedNewDateFromFormat);
						isTriggeredChange.current = true;
					}
					requestAnimationFrame(() => {
						inputRef.current?.setSelectionRange(removedSections[focusedSection.index].startIndex, removedSections[focusedSection.index].endIndex);
					});
					return;
				case "ArrowUp":
				case "ArrowDown": {
					e.preventDefault();
					if (readOnly || disabled) return;
					const newSectionVal = require_components_date_picker_helpers.getIncrementedSectionValue(focusedSection, e.key === "ArrowUp" ? "up" : "down", value, timezone);
					if (newSectionVal == null) return;
					const newInputValue = inputValue.slice(0, focusedSection.startIndex) + newSectionVal + inputValue.slice(focusedSection.endIndex);
					const newSectionValue = require_components_date_picker_helpers.getDateformatSections(newInputValue, format, locale);
					const parsedDate = require_components_date_picker_helpers.parseFromFormat(newInputValue, format, value, locale, timezone);
					setInputValue(newInputValue);
					setSections(newSectionValue);
					setFocusedSection(newSectionValue[focusedSection.index]);
					if (parsedDate) {
						setValue(parsedDate);
						isTriggeredChange.current = true;
					}
					requestAnimationFrame(() => {
						inputRef.current?.setSelectionRange(newSectionValue[focusedSection.index].startIndex, newSectionValue[focusedSection.index].endIndex);
					});
					return;
				}
				case "ArrowRight":
					e.preventDefault();
					if (focusedSection.index === sections.length - 1) {
						requestAnimationFrame(() => {
							inputRef.current?.setSelectionRange(focusedSection.startIndex, focusedSection.endIndex);
						});
						return;
					}
					setFocusedSection(sections[focusedSection.index + 1]);
					requestAnimationFrame(() => {
						inputRef.current?.setSelectionRange(sections[focusedSection.index + 1].startIndex, sections[focusedSection.index + 1].endIndex);
					});
					return;
				case "ArrowLeft":
					e.preventDefault();
					if (focusedSection.index === 0) {
						requestAnimationFrame(() => {
							inputRef.current?.setSelectionRange(focusedSection.startIndex, focusedSection.endIndex);
						});
						return;
					}
					setFocusedSection(sections[focusedSection.index - 1]);
					requestAnimationFrame(() => {
						inputRef.current?.setSelectionRange(sections[focusedSection.index - 1].startIndex, sections[focusedSection.index - 1].endIndex);
					});
					return;
				case "Home":
				case "End": {
					e.preventDefault();
					if (readOnly || disabled) return;
					const boundVal = require_components_date_picker_helpers.getBoundSectionValue(focusedSection, e.key === "Home" ? "home" : "end", value, timezone);
					if (boundVal == null) return;
					const newInputValue = inputValue.slice(0, focusedSection.startIndex) + boundVal + inputValue.slice(focusedSection.endIndex);
					const newSectionValue = require_components_date_picker_helpers.getDateformatSections(newInputValue, format, locale);
					const parsedDate = require_components_date_picker_helpers.parseFromFormat(newInputValue, format, value, locale, timezone);
					setInputValue(newInputValue);
					setSections(newSectionValue);
					setFocusedSection(newSectionValue[focusedSection.index]);
					if (parsedDate) {
						setValue(parsedDate);
						isTriggeredChange.current = true;
					}
					requestAnimationFrame(() => {
						inputRef.current?.setSelectionRange(newSectionValue[focusedSection.index].startIndex, newSectionValue[focusedSection.index].endIndex);
					});
					return;
				}
			}
			if (e.ctrlKey || e.metaKey || e.altKey || readOnly || disabled) return;
			e.preventDefault();
			const charResult = require_components_date_picker_helpers.processCharacterInput(e.key, focusedSection, sectionValueRef.current, inputValue, locale, value, timezone);
			if (!charResult) return;
			const { newInput: newInputValue, isFinished, newSectionRef } = charResult;
			sectionValueRef.current = newSectionRef;
			const newSectionValue = require_components_date_picker_helpers.getDateformatSections(newInputValue, format, locale);
			if (isFinished) {
				setInputValue(newInputValue);
				setSections(newSectionValue);
				handleNextSection(newInputValue, newSectionValue);
			} else {
				const parsedDate = require_components_date_picker_helpers.parseFromFormat(newInputValue, format, value, locale, timezone);
				setInputValue(newInputValue);
				setSections(newSectionValue);
				setFocusedSection(newSectionValue[focusedSection.index]);
				if (parsedDate) {
					setValue(parsedDate);
					isTriggeredChange.current = true;
				}
				requestAnimationFrame(() => {
					inputRef.current?.setSelectionRange(newSectionValue[focusedSection.index].startIndex, newSectionValue[focusedSection.index].endIndex);
				});
			}
		}, [
			focusedSection,
			readOnly,
			disabled,
			inputValue,
			format,
			locale,
			timezone,
			sections,
			setValue,
			value,
			handleNextSection
		]),
		handleValueChange,
		handleInputValueChange
	};
};
//#endregion
exports.useDateField = useDateField;
