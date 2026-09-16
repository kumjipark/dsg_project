import { ButtonProps } from "../button/types.js";
import { TypographyProps } from "../typography/types.js";
import { FlexBoxProps } from "../flex-box/types.js";
import { CSSProperties, ReactNode } from "react";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/fallback-view/types.d.ts
type FallbackViewDefaultProps = WithSxProps<{
  platform?: 'desktop' | 'mobile';
  padding?: 'normal' | 'compact';
  width?: CSSProperties['width'];
  children?: ReactNode;
}>;
type FallbackViewResponsiveProps = ResponsiveProps<Pick<FallbackViewDefaultProps, 'platform' | 'padding' | 'width'>>;
type FallbackViewProps = Merge<Merge<FallbackViewDefaultProps, FallbackViewResponsiveProps>, FlexBoxProps>;
type FallbackViewImageProps = FlexBoxProps;
type FallbackViewContentProps = FlexBoxProps;
type FallbackViewTextDefaultProps = WithSxProps<{
  title?: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}>;
type FallbackViewTextProps = Merge<FallbackViewTextDefaultProps, TypographyProps>;
type FallbackViewButtonProps = ButtonProps;
//#endregion
export { FallbackViewButtonProps, FallbackViewContentProps, FallbackViewDefaultProps, FallbackViewImageProps, FallbackViewProps, FallbackViewResponsiveProps, FallbackViewTextDefaultProps, FallbackViewTextProps };