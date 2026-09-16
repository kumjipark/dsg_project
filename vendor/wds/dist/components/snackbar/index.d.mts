import { TypographyProps } from "../typography/types.mjs";
import { FlexBoxProps } from "../flex-box/types.mjs";
import { IconButtonProps } from "../icon-button/types.mjs";
import { SnackbarActionProps, SnackbarCloseButtonProps, SnackbarContentProps, SnackbarDescriptionProps, SnackbarExtraContentProps, SnackbarHeadingProps, SnackbarProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal, PolymorphicPropsInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/snackbar/index.d.ts
declare const Snackbar: PolymorphicComponentInternal<SnackbarProps, "div">;
declare const SnackbarContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<SnackbarContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const SnackbarExtraContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const SnackbarHeading: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TypographyProps, "p">, "ref"> & _$react.RefAttributes<HTMLParagraphElement>>;
declare const SnackbarDescription: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TypographyProps, "p">, "ref"> & _$react.RefAttributes<HTMLParagraphElement>>;
declare const SnackbarAction: PolymorphicComponentInternal<SnackbarActionProps, "button">;
declare const SnackbarCloseButton: _$react.ForwardRefExoticComponent<Omit<PolymorphicPropsInternal<IconButtonProps, "button">, "ref"> & _$react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { Snackbar, SnackbarAction, type SnackbarActionProps, SnackbarCloseButton, type SnackbarCloseButtonProps, SnackbarContent, type SnackbarContentProps, SnackbarDescription, type SnackbarDescriptionProps, SnackbarExtraContent, type SnackbarExtraContentProps, SnackbarHeading, type SnackbarHeadingProps, type SnackbarProps };