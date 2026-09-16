import { ImageBaseProps } from "../image-base/types.mjs";
import { SkeletonProps } from "../skeleton/types.mjs";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { CSSProperties, ReactNode } from "react";

//#region src/components/thumbnail/types.d.ts
type ThumbnailDefaultProps = WithSxProps<{
  /** The ratio of the thumbnail. */ratio?: '1:1' | '5:4' | '4:3' | '3:2' | '16:10' | '1.618:1' | '16:9' | '2:1' | '21:9';
  /**
   * Whether to enable portrait mode.
   * The aspect ratio is now specified as height:width instead of width:height.
   */
  portrait?: boolean; /** Whether to enable the border. */
  border?: boolean; /** Whether to enable the radius. */
  radius?: boolean;
  children?: ReactNode; /** The overlay of the thumbnail. */
  overlay?: ReactNode; /** The width of the thumbnail. */
  width?: CSSProperties['width'];
}>;
type ThumbnailResponsiveProps = ResponsiveProps<Pick<ThumbnailDefaultProps, 'ratio' | 'portrait' | 'radius' | 'border' | 'width'>>;
type ThumbnailBaseProps = Merge<ThumbnailDefaultProps, ThumbnailResponsiveProps>;
type ThumbnailProps = Merge<ThumbnailBaseProps, ImageBaseProps>;
type ThumbnailSkeletonDefaultProps = Omit<SkeletonProps, 'radius'>;
type ThumbnailSkeletonProps = Merge<ThumbnailBaseProps, ThumbnailSkeletonDefaultProps>;
//#endregion
export { ThumbnailProps, ThumbnailSkeletonDefaultProps, ThumbnailSkeletonProps };