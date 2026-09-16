import { ImageBaseProps } from "../image-base/types.mjs";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";

//#region src/components/avatar/types.d.ts
type AvatarDefaultProps = WithSxProps<{
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number;
  variant?: 'person' | 'company' | 'academy';
  children?: ReactNode;
}>;
type AvatarResponsiveProps = ResponsiveProps<Pick<AvatarDefaultProps, 'size'>>;
type AvatarProps = Merge<Merge<AvatarDefaultProps, AvatarResponsiveProps>, ImageBaseProps>;
//#endregion
export { AvatarProps };