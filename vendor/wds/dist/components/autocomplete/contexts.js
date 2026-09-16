'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_autocomplete_constants = require("./constants.js");
//#region src/components/autocomplete/contexts.ts
const [AutocompleteProvider, useAutocompleteContext] = (0, require("@radix-ui/react-context").createContext)(require_components_autocomplete_constants.AUTOCOMPLETE_NAME);
//#endregion
exports.AutocompleteProvider = AutocompleteProvider;
exports.useAutocompleteContext = useAutocompleteContext;
