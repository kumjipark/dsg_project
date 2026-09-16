import { TypographyProps } from "../typography/types.js";
import { FlexBoxProps } from "../flex-box/types.js";
import { LabelProps } from "../label/types.js";
import { SlotProps } from "@radix-ui/react-slot";

//#region src/components/form/types.d.ts
type FormFieldProps = FlexBoxProps;
type FormLabelProps = LabelProps;
type FormMessageProps = TypographyProps;
type FormErrorMessageProps = TypographyProps;
type FormControlProps = SlotProps;
//#endregion
export { FormControlProps, FormErrorMessageProps, FormFieldProps, FormLabelProps, FormMessageProps };