import { TypographyProps } from "../typography/types.mjs";
import { FlexBoxProps } from "../flex-box/types.mjs";
import { SkeletonProps } from "../skeleton/types.mjs";
import { ThumbnailProps, ThumbnailSkeletonProps } from "../thumbnail/types.mjs";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { CSSProperties, ReactNode } from "react";

//#region src/components/card/types.d.ts
type CardDefaultProps = WithSxProps<{
  platform?: 'desktop' | 'mobile';
  width?: CSSProperties['width'];
  children?: ReactNode;
}>;
type CardResponsiveProps = ResponsiveProps<Omit<CardDefaultProps, 'sx'>>;
type CardProps = Merge<Merge<CardDefaultProps, CardResponsiveProps>, FlexBoxProps>;
type CardThumbnailDefaultProps = Merge<{
  /**
   * Leading content is displayed as overlay areas on top of the thumbnail.
   * Place them in the leading area by wrapping them with CardThumbnailContent.
   */
  leadingContent?: ReactNode;
  /**
   * Trailing content is displayed as overlay areas on top of the thumbnail.
   * Place them in the trailing area by wrapping them with CardThumbnailContent.
   */
  trailingContent?: ReactNode;
  children?: ReactNode;
}, Omit<ThumbnailProps, 'border' | 'radius'>>;
type CardThumbnailResponsiveProps = ResponsiveProps<Pick<CardThumbnailDefaultProps, 'ratio'>>;
type CardThumbnailProps = Merge<CardThumbnailResponsiveProps, CardThumbnailDefaultProps>;
type CardThumbnailContentProps = Merge<{
  variant?: 'text' | 'toggle-icon' | 'custom';
}, FlexBoxProps>;
type CardTitleProps = TypographyProps;
type CardCaptionProps = TypographyProps;
type CardContentProps = FlexBoxProps;
type CardContentItemDefaultProps = {
  variant?: 'badge' | 'custom';
  position?: 'top' | 'bottom';
};
type CardContentItemProps = Merge<CardContentItemDefaultProps, FlexBoxProps>;
type CardCaptionSkeletonDefaultProps = {
  type?: 'normal' | 'extra' | 'sub';
  children?: ReactNode;
};
type CardCaptionSkeletonProps = Merge<CardCaptionSkeletonDefaultProps, SkeletonProps>;
type CardTitleSkeletonProps = SkeletonProps;
type CardThumbnailSkeletonProps = ThumbnailSkeletonProps;
//#endregion
export { CardCaptionProps, CardCaptionSkeletonProps, CardContentItemDefaultProps, CardContentItemProps, CardContentProps, CardDefaultProps, CardProps, CardResponsiveProps, CardThumbnailContentProps, CardThumbnailDefaultProps, CardThumbnailProps, CardThumbnailResponsiveProps, CardThumbnailSkeletonProps, CardTitleProps, CardTitleSkeletonProps };