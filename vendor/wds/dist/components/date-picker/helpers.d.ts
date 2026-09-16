import { DateType } from "../date-calendar/types.js";
import { DatePickerFormat } from "./types.js";

//#region src/components/date-picker/helpers.d.ts
declare const invalidDate: Date;
type DateFormatTextSection = {
  format: DatePickerFormat;
  value: string;
  startIndex: number;
  endIndex: number;
  index: number;
  type: 'text';
  options: Array<string>;
};
type DateFormatNumericSection = {
  format: DatePickerFormat;
  value: string;
  startIndex: number;
  endIndex: number;
  index: number;
  type: 'numeric';
};
type DateFormatSection = DateFormatTextSection | DateFormatNumericSection;
declare const getRegexFormat: (format: DatePickerFormat, locale: string | undefined) => RegExp;
declare const parseSections: (text: string, formatChunks: Array<string>, locale: string | undefined) => {
  format: DatePickerFormat;
  value: string;
  isMatched: boolean;
  isDefaultFormat: boolean;
}[] | null;
declare const toFormat: (date: DateType, format: string, locale: string | undefined, timezone?: string) => string;
declare const parseFromFormat: (text: string, format: string, previousValue: DateType, locale: string | undefined, timezone?: string) => Date | null;
declare const getDateformatSections: (inputValue: string, format: string, locale: string | undefined) => DateFormatSection[];
declare const getClosetSection: (cursorPosition: number, sections: Array<DateFormatSection>) => DateFormatSection | undefined;
declare const localeFormat: (value: DateType, format: string, locale: string | undefined, timezone: string | undefined) => string | null | undefined;
declare const getNumericFormatRange: (format: DatePickerFormat, value: DateType, timezone: string | undefined) => {
  minValue: number;
  maxValue: number;
  isComplete: (v: string) => boolean;
};
/**
 * Computes the new section value string for ArrowUp/ArrowDown.
 */
declare const getIncrementedSectionValue: (section: DateFormatSection, direction: "up" | "down", value: DateType, timezone: string | undefined) => string | undefined;
/**
 * Computes the section value string for Home/End.
 */
declare const getBoundSectionValue: (section: DateFormatSection, bound: "home" | "end", value: DateType, timezone: string | undefined) => string | undefined;
/**
 * Processes a character key input into a section.
 * Returns the new input string, whether input is finished, and the updated ref value.
 * Returns `undefined` if the key is not valid for the section.
 */
declare const processCharacterInput: (key: string, section: DateFormatSection, currentSectionRef: string, currentInput: string, locale: string | undefined, value: DateType, timezone: string | undefined) => {
  newInput: string;
  isFinished: boolean;
  newSectionRef: string;
} | undefined;
//#endregion
export { DateFormatNumericSection, DateFormatSection, DateFormatTextSection, getBoundSectionValue, getClosetSection, getDateformatSections, getIncrementedSectionValue, getNumericFormatRange, getRegexFormat, invalidDate, localeFormat, parseFromFormat, parseSections, processCharacterInput, toFormat };