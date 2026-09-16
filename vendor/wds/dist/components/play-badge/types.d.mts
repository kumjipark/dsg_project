import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/play-badge/types.d.ts
type PlayBadgeDefaultProps = WithSxProps<{
  /** The size of the play badge. */size?: 'medium' | 'large' | 'small'; /** If true, renders a fallback style that looks natural in environments where `blur` is not supported. */
  alternative?: boolean;
}>;
type PlayBadgeResponsiveProps = ResponsiveProps<Pick<PlayBadgeDefaultProps, 'size'>>;
type PlayBadgeProps = Merge<PlayBadgeDefaultProps, PlayBadgeResponsiveProps>;
//#endregion
export { PlayBadgeDefaultProps, PlayBadgeProps, PlayBadgeResponsiveProps };