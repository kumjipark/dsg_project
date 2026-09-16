import { Merge, WithSxProps } from "@wanteddev/wds-engine";
import { ComponentRef, ReactNode, Ref } from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

//#region src/components/scroll-area/types.d.ts
type ScrollAreaProps = WithSxProps<Merge<{
  size?: 'small' | 'medium' | 'responsive';
  scrollbars?: 'vertical' | 'horizontal' | 'both';
  viewportRef?: Ref<ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaViewport>>;
  viewportProps?: WithSxProps<ScrollAreaPrimitive.ScrollAreaViewportProps>;
  /**
   * Sets the z-index of the scroll bar.
   */
  zIndex?: number;
  children?: ReactNode;
}, ScrollAreaPrimitive.ScrollAreaProps>>;
type ScrollBarProps = WithSxProps<Merge<Pick<ScrollAreaProps, 'size' | 'children'>, ScrollAreaPrimitive.ScrollAreaScrollbarProps>>;
//#endregion
export { ScrollAreaProps, ScrollBarProps };