import { ListCellContentProps } from "../list/types.js";
import { AutocompleteFieldProps, AutocompleteGroupProps, AutocompleteListProps, AutocompleteOptionProps, AutocompleteProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$_radix_ui_react_slot0 from "@radix-ui/react-slot";

//#region src/components/autocomplete/index.d.ts
declare const Autocomplete: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<AutocompleteProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const AutocompleteField: _$react.ForwardRefExoticComponent<_$_radix_ui_react_slot0.SlotProps & _$react.RefAttributes<HTMLElement>>;
declare const AutocompleteList: PolymorphicComponentInternal<AutocompleteListProps, "div">;
declare const AutocompleteGroup: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<AutocompleteGroupProps>, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const AutocompleteOption: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<AutocompleteOptionProps, "li">, "ref"> & _$react.RefAttributes<HTMLLIElement>>;
declare const AutocompleteOptionContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ListCellContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Autocomplete, AutocompleteField, type AutocompleteFieldProps, AutocompleteGroup, type AutocompleteGroupProps, AutocompleteList, type AutocompleteListProps, AutocompleteOption, AutocompleteOptionContent, type ListCellContentProps as AutocompleteOptionContentProps, type AutocompleteOptionProps, type AutocompleteProps };