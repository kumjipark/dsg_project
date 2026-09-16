import { AutocompleteCollectionItem } from "./types.mjs";

//#region src/components/autocomplete/helpers.d.ts
declare const focusSelectedOption: (option: AutocompleteCollectionItem | undefined, items: Array<AutocompleteCollectionItem>, focusVisible?: boolean) => void;
declare const setAttributeSelection: (element: HTMLElement | null, items: Array<AutocompleteCollectionItem>, focusVisible?: boolean) => void;
declare const resetAttributeSelection: (items: Array<AutocompleteCollectionItem>) => void;
//#endregion
export { focusSelectedOption, resetAttributeSelection, setAttributeSelection };