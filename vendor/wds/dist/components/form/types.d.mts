import { TypographyProps } from "../typography/types.mjs";
import { FlexBoxProps } from "../flex-box/types.mjs";
import { LabelProps } from "../label/types.mjs";
import { SlotProps } from "@radix-ui/react-slot";

//#region src/components/form/types.d.ts
type FormFieldProps = FlexBoxProps;
type FormLabelProps = LabelProps;
type FormMessageProps = TypographyProps;
type FormErrorMessageProps = TypographyProps;
type FormControlProps = SlotProps;
//#endregion
export { FormControlProps, FormErrorMessageProps, FormFieldProps, FormLabelProps, FormMessageProps };