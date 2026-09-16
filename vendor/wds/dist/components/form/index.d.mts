import { LabelProps } from "../label/types.mjs";
import { FormControlProps, FormErrorMessageProps, FormFieldProps, FormLabelProps, FormMessageProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";
import * as _$_radix_ui_react_slot0 from "@radix-ui/react-slot";

//#region src/components/form/index.d.ts
declare const FormField: PolymorphicComponentInternal<FormFieldProps, "div">;
declare const FormLabel: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<LabelProps, "label">, "ref"> & _$react.RefAttributes<HTMLLabelElement>>;
declare const FormControl: _$react.ForwardRefExoticComponent<_$_radix_ui_react_slot0.SlotProps & _$react.RefAttributes<HTMLElement>>;
declare const FormMessage: PolymorphicComponentInternal<FormMessageProps, "p">;
declare const FormErrorMessage: PolymorphicComponentInternal<FormErrorMessageProps, "p">;
//#endregion
export { FormControl, type FormControlProps, FormErrorMessage, type FormErrorMessageProps, FormField, type FormFieldProps, FormLabel, type FormLabelProps, FormMessage, type FormMessageProps };