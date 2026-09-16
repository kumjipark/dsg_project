import { ImageBaseProps } from "../image-base/types.js";
import { ReactNode } from "react";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

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