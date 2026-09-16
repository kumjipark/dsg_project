'use client';
import { AUTOCOMPLETE_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/autocomplete/contexts.ts
const [AutocompleteProvider, useAutocompleteContext] = createContext(AUTOCOMPLETE_NAME);
//#endregion
export { AutocompleteProvider, useAutocompleteContext };
