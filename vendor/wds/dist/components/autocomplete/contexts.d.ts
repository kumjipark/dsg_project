import { AutocompleteCollectionItem } from "./types.js";
import * as _$react from "react";

//#region src/components/autocomplete/contexts.d.ts
type AutocompleteContextValue = {
  value: string;
  onValueChange: (value: string) => void;
  input: HTMLInputElement | HTMLTextAreaElement | null;
  onInputChange: (input: HTMLInputElement | HTMLTextAreaElement | null) => void;
  open: boolean;
  onOpenChange: (open: boolean, force?: boolean) => void;
  contentId: string;
  width?: number;
  asSelect?: boolean;
  inputValue: string;
  onInputValueChange: (inputValue: string) => void;
  selectedOption: AutocompleteCollectionItem | null;
  onSelectedOptionChange: (value: AutocompleteCollectionItem | null) => void;
  onSearch?: (value: string) => void;
};
declare const AutocompleteProvider: _$react.FC<AutocompleteContextValue & {
    children: React.ReactNode;
  }>, useAutocompleteContext: (consumerName: string) => AutocompleteContextValue;
//#endregion
export { AutocompleteProvider, useAutocompleteContext };