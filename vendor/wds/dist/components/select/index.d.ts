import { ListCellContentProps } from "../list/types.js";
import { TextFieldContentProps } from "../text-field/types.js";
import { MenuGroupProps } from "../menu/types.js";
import { OptionGroupProps, OptionProps, SelectProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/select/index.d.ts
declare const Select: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<SelectProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const OptionGroup: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<MenuGroupProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const Option: _$react.MemoExoticComponent<PolymorphicComponentInternal<OptionProps, "li">>;
declare const SelectContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TextFieldContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const OptionContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ListCellContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Option, OptionContent, type ListCellContentProps as OptionContentProps, OptionGroup, type OptionGroupProps, type OptionProps, Select, SelectContent, type TextFieldContentProps as SelectContentProps, type SelectProps };