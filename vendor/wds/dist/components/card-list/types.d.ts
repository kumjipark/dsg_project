import { FlexBoxProps } from "../flex-box/types.js";
import { CardProps, CardThumbnailProps } from "../card/types.js";
import { ReactNode } from "react";
import { Merge, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/card-list/types.d.ts
type CardListDefaultProps = WithSxProps<{
  /**
   * Content displayed in the leading area.
   * Pass an element wrapped with `CardListContent`.
   */
  leadingContent?: ReactNode;
  /**
   * Content displayed in the trailing area.
   * Pass an element wrapped with `CardListContent`.
   */
  trailingContent?: ReactNode;
  children?: ReactNode;
}>;
type CardListProps = Merge<CardProps, CardListDefaultProps>;
type CardListThumbnailProps = CardThumbnailProps;
type CardListContentDefaultProps = {
  variant?: 'checkbox' | 'icon' | 'toggle-icon' | 'custom';
};
type CardListContentProps = Merge<CardListContentDefaultProps, FlexBoxProps>;
type CardListSkeletonDefaultProps = {
  /** Whether to show the leading content. */hasLeadingContent?: boolean; /** Whether to show the trailing content. */
  hasTrailingContent?: boolean;
};
type CardListSkeletonProps = Merge<CardListSkeletonDefaultProps, CardProps>;
//#endregion
export { CardListContentProps, CardListProps, CardListSkeletonDefaultProps, CardListSkeletonProps, CardListThumbnailProps };