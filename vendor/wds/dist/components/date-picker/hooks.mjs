'use client';
import { dateTypeToDateObject, isDateTypeEmpty, isValidDate } from "../date-calendar/helpers.mjs";
import { getBoundSectionValue, getClosetSection, getDateformatSections, getIncrementedSectionValue, getRegexFormat, parseFromFormat, processCharacterInput, toFormat } from "./helpers.mjs";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
//#region src/components/date-picker/hooks.ts
const useDateField = ({ value, format = "YYYY.MM.DD", locale, timezone, setValue, readOnly, disabled }) => {
	const inputRef = useRef(null);
	const [focusedSection, setFocusedSection] = useState();
	const [inputValue, setInputValue] = useState(isValidDate(value) ? toFormat(value, format, locale, timezone) : "");
	const [sections, setSections] = useState(getDateformatSections(inputValue, format, locale));
	const sectionValueRef = useRef("");
	useEffect(() => {
		sectionValueRef.current = "";
	}, [focusedSection?.index]);
	const handleValueChange = useCallback((v) => {
		const newInputValue = isValidDate(v) ? toFormat(v, format, locale, timezone) : "";
		isTriggeredChange.current = true;
		setInputValue(newInputValue);
		setSections(getDateformatSections(newInputValue, format, locale));
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
	const handleInputValueChange = useCallback(() => {
		setInputValue(!inputValue ? format : inputValue);
	}, [inputValue, format]);
	useEffect(() => {
		const newSections = getDateformatSections(!inputValue ? "" : isValidDate(value) ? toFormat(value, format, locale, timezone) : format, format, locale);
		setSections(newSections);
		if (focusedSection) setFocusedSection(newSections[focusedSection.index]);
	}, [
		format,
		locale,
		timezone
	]);
	const isFirstRender = useRef(true);
	const isTriggeredChange = useRef(false);
	const prevTimezone = useRef(timezone);
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		if (isTriggeredChange.current) {
			isTriggeredChange.current = false;
			return;
		}
		if (!inputValue) if (isValidDate(value)) {
			const newInputValue = isValidDate(value) ? toFormat(value, format, locale, timezone) : format;
			setInputValue(newInputValue);
			setSections(getDateformatSections(newInputValue, format, locale));
			if (focusedSection) setFocusedSection(sections[focusedSection.index]);
		} else setSections(getDateformatSections(format, format, locale));
		else {
			const newInputValue = isValidDate(value) ? toFormat(value, format, locale, timezone) : format;
			setInputValue(newInputValue);
			setSections(getDateformatSections(newInputValue, format, locale));
			if (focusedSection) setFocusedSection(sections[focusedSection.index]);
		}
		if (isValidDate(value) && prevTimezone.current !== timezone) {
			setValue(dateTypeToDateObject(value, timezone));
			prevTimezone.current = timezone;
		}
	}, [
		timezone,
		value,
		locale,
		format
	]);
	const handleNextSection = useCallback((newInputValue, newSectionValue) => {
		if (!focusedSection) return;
		const nextSection = newSectionValue[focusedSection.index + 1];
		const parsedDate = parseFromFormat(newInputValue, format, value, locale, timezone);
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
	const handlePaste = useCallback((e) => {
		const newValue = e.clipboardData.getData("text");
		e.preventDefault();
		if (!focusedSection || readOnly || disabled) return;
		if (e.currentTarget.selectionStart === 0 && e.currentTarget.selectionEnd === inputValue.length) {
			const parsedDate = parseFromFormat(newValue, format, value, locale, timezone);
			if (parsedDate && isValidDate(parsedDate)) {
				const newSectionValue = getDateformatSections(newValue, format, locale);
				setValue(parsedDate);
				setInputValue(toFormat(parsedDate, format, locale, timezone));
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
			const regex = getRegexFormat(focusedSection.format, locale);
			const match = newValue.match(regex);
			if (match) {
				const newInputValue = inputValue.slice(0, focusedSection.startIndex) + match[0] + inputValue.slice(focusedSection.endIndex);
				setInputValue(newInputValue);
				handleNextSection(newInputValue, getDateformatSections(newInputValue, format, locale));
			}
		} else {
			const numericValue = parseInt(newValue);
			if (!isNaN(numericValue)) {
				const newInputValue = inputValue.slice(0, focusedSection.startIndex) + `${numericValue.toString().slice((focusedSection.format.length === 1 ? 2 : focusedSection.format.length) * -1).replace(/^0+/, "").padStart(focusedSection.format.length, "0")}` + inputValue.slice(focusedSection.endIndex);
				const newSectionValue = getDateformatSections(newInputValue, format, locale);
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
	const focusTimestamp = useRef(0);
	const handleClick = useCallback((e) => {
		if ("setSelectionRange" in e.currentTarget) {
			let cursorPosition = e.currentTarget.selectionStart ?? 0;
			if (!inputValue || e.timeStamp - focusTimestamp.current < 300) cursorPosition = 0;
			const closetSection = getClosetSection(cursorPosition, sections);
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
		handleFocus: useCallback((e) => {
			if (e.currentTarget.tagName !== "TEXTAREA" && e.currentTarget.tagName !== "INPUT") return;
			if (!inputValue) focusTimestamp.current = e.timeStamp;
			const newInputValue = !inputValue ? format : inputValue;
			const newSections = getDateformatSections(newInputValue, format, locale);
			flushSync(() => {
				setSections(newSections);
				setInputValue(newInputValue);
			});
			const closetSection = getClosetSection(0, newSections);
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
		handleBlur: useCallback(() => {
			setFocusedSection(void 0);
			sectionValueRef.current = "";
			isTriggeredChange.current = false;
			if (inputValue === format || isDateTypeEmpty(value)) setInputValue("");
		}, [
			format,
			inputValue,
			value
		]),
		handleKeyDown: useCallback((e) => {
			if (e.currentTarget.tagName !== "TEXTAREA" && e.currentTarget.tagName !== "INPUT" || !focusedSection) return;
			switch (e.key) {
				case "Tab": return;
				case "Backspace":
					e.preventDefault();
					if (readOnly || disabled) return;
					sectionValueRef.current = "";
					if (e.currentTarget.selectionStart === 0 && e.currentTarget.selectionEnd === inputValue.length) {
						const removedInputValue = format;
						const removedSections = getDateformatSections(format, format, locale);
						const parsedNewDateFromFormat = parseFromFormat(removedInputValue, format, value, locale, timezone);
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
					const removedSections = getDateformatSections(removedInputValue, format, locale);
					const parsedNewDateFromFormat = parseFromFormat(removedInputValue, format, value, locale, timezone);
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
					const newSectionVal = getIncrementedSectionValue(focusedSection, e.key === "ArrowUp" ? "up" : "down", value, timezone);
					if (newSectionVal == null) return;
					const newInputValue = inputValue.slice(0, focusedSection.startIndex) + newSectionVal + inputValue.slice(focusedSection.endIndex);
					const newSectionValue = getDateformatSections(newInputValue, format, locale);
					const parsedDate = parseFromFormat(newInputValue, format, value, locale, timezone);
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
					const boundVal = getBoundSectionValue(focusedSection, e.key === "Home" ? "home" : "end", value, timezone);
					if (boundVal == null) return;
					const newInputValue = inputValue.slice(0, focusedSection.startIndex) + boundVal + inputValue.slice(focusedSection.endIndex);
					const newSectionValue = getDateformatSections(newInputValue, format, locale);
					const parsedDate = parseFromFormat(newInputValue, format, value, locale, timezone);
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
			const charResult = processCharacterInput(e.key, focusedSection, sectionValueRef.current, inputValue, locale, value, timezone);
			if (!charResult) return;
			const { newInput: newInputValue, isFinished, newSectionRef } = charResult;
			sectionValueRef.current = newSectionRef;
			const newSectionValue = getDateformatSections(newInputValue, format, locale);
			if (isFinished) {
				setInputValue(newInputValue);
				setSections(newSectionValue);
				handleNextSection(newInputValue, newSectionValue);
			} else {
				const parsedDate = parseFromFormat(newInputValue, format, value, locale, timezone);
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
export { useDateField };
