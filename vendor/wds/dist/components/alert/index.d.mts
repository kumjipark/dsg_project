import { TypographyProps } from "../typography/types.mjs";
import { FlexBoxProps } from "../flex-box/types.mjs";
import { AlertActionAreaButtonProps, AlertActionAreaProps, AlertContainerProps, AlertContentProps, AlertDescriptionProps, AlertDimmerProps, AlertHeadingProps, AlertProps, AlertTriggerProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";
import * as _$_radix_ui_react_slot0 from "@radix-ui/react-slot";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/alert/index.d.ts
declare const Alert: {
  ({
    open: openProp,
    defaultOpen,
    onOpenChange,
    children
  }: AlertProps): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
};
/**
 * Use the form `<Alert dimmer={<AlertDimmer />} />`.
 * Only used to apply custom styles to the Dimmer.
 */
declare const AlertDimmer: PolymorphicComponentInternal<AlertDimmerProps, "div">;
declare const AlertTrigger: _$react.ForwardRefExoticComponent<_$_radix_ui_react_slot0.SlotProps & _$react.RefAttributes<HTMLElement>>;
declare const AlertContainer: PolymorphicComponentInternal<AlertContainerProps, "div">;
declare const AlertContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const AlertHeading: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TypographyProps, "h2">, "ref"> & _$react.RefAttributes<HTMLHeadingElement>>;
declare const AlertDescription: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TypographyProps, "p">, "ref"> & _$react.RefAttributes<HTMLParagraphElement>>;
declare const AlertActionArea: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const AlertActionAreaButton: PolymorphicComponentInternal<AlertActionAreaButtonProps, "button">;
//#endregion
export { Alert, AlertActionArea, AlertActionAreaButton, type AlertActionAreaButtonProps, type AlertActionAreaProps, AlertContainer, type AlertContainerProps, AlertContent, type AlertContentProps, AlertDescription, type AlertDescriptionProps, AlertDimmer, type AlertDimmerProps, AlertHeading, type AlertHeadingProps, type AlertProps, AlertTrigger, type AlertTriggerProps };