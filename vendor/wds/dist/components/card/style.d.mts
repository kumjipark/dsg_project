import { TypographyProps } from "../typography/types.mjs";
import { ThumbnailSkeletonProps } from "../thumbnail/types.mjs";
import { CardContentItemProps, CardProps, CardThumbnailProps, CardTitleProps, CardTitleSkeletonProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/card/style.d.ts
declare const cardStyle: ({
  xs,
  sm,
  md,
  lg,
  xl,
  width,
  platform
}: CardProps) => (theme: Theme) => SerializedStyles$1;
declare const cardThumbnailStyle: ({
  ratio,
  xs,
  sm,
  md,
  lg,
  xl
}: Omit<CardThumbnailProps, "src" | "width" | "alt">) => (theme: Theme) => SerializedStyles$1;
declare const cardThumbnailSkeletonStyle: ({
  ratio,
  xs,
  sm,
  md,
  lg,
  xl
}: ThumbnailSkeletonProps) => (theme: Theme) => SerializedStyles$1;
declare const cardThumbnailContentWrapperStyle: (theme: Theme) => SerializedStyles$1;
declare const cardThumbnailContentTextStyle: (theme: Theme) => SerializedStyles$1;
declare const cardThumbnailContentToggleIconStyle: (theme: Theme) => SerializedStyles$1;
declare const cardTitleStyle: (props: CardTitleProps) => (theme: Theme) => SerializedStyles$1;
declare const cardCaptionStyle: (props: TypographyProps) => (theme: Theme) => SerializedStyles$1;
declare const cardTypographyStyle: (props: TypographyProps, defaultWeight?: TypographyProps["weight"]) => (theme: Theme) => SerializedStyles$1 | undefined;
declare const cardContentStyle: SerializedStyles$1;
declare const cardContentItemStyle: ({
  variant,
  position
}: Pick<CardContentItemProps, "position" | "variant">) => SerializedStyles$1;
declare const cardSkeletonStyle: ({
  xs,
  sm,
  md,
  lg,
  xl,
  width,
  platform
}: CardProps) => (theme: Theme) => SerializedStyles$1;
declare const cardTitleSkeletonStyle: (props: CardTitleSkeletonProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { cardCaptionStyle, cardContentItemStyle, cardContentStyle, cardSkeletonStyle, cardStyle, cardThumbnailContentTextStyle, cardThumbnailContentToggleIconStyle, cardThumbnailContentWrapperStyle, cardThumbnailSkeletonStyle, cardThumbnailStyle, cardTitleSkeletonStyle, cardTitleStyle, cardTypographyStyle };