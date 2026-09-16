import { FlexBoxProps } from "../flex-box/types.mjs";
import { ListCellProps, ListProps } from "../list/types.mjs";
import { PopoverContentProps, PopoverProps, PopoverTriggerProps } from "../popover/types.mjs";
import { Merge, WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";

//#region src/components/menu/types.d.ts
type MenuDefaultProps = {
  /**
   * The default value of the menu.
   * To use MenuItem as a checkbox, provide an Array<string>.
   */
  defaultValue?: string | Array<string>;
  /**
   * The value of the menu.
   * To use MenuItem as a checkbox, provide an Array<string>.
   */
  value?: string | Array<string>;
  /**
   * Callback function when the value changes.
   */
  onValueChange?: (value?: string | Array<string>) => void;
  children?: ReactNode;
};
type MenuProps = Merge<MenuDefaultProps, PopoverProps>;
type MenuTriggerProps = PopoverTriggerProps;
type MenuContentProps = Pick<PopoverContentProps, 'position' | 'offset' | 'container' | 'disablePortal' | 'trappedContent' | 'onMountAutoFocus' | 'onUnmountAutoFocus' | 'trapped' | 'loop' | 'referenceHidden' | 'referenceHiddenOffsets' | 'setContext' | 'wrapperProps' | 'forceMount' | 'onInteractOutside' | 'disableFocusScope' | 'onFocusOutside' | 'onPointerDownOutside' | 'onDismiss' | 'disableOutsidePointerEvents' | 'sx' | 'children'>;
type MenuListProps = ListProps;
type MenuGroupDefaultProps = WithSxProps<{
  title?: ReactNode;
  children?: ReactNode;
}>;
type MenuGroupProps = Merge<MenuGroupDefaultProps, FlexBoxProps>;
type MenuItemDefaultProps = WithSxProps<{
  /**
   * Use 'normal' or 'radio' variant for single selection, and 'checkbox' for multi selection.
   */
  variant?: 'normal' | 'radio' | 'checkbox';
  /**
   * Content displayed in the leading area.
   * Pass an element wrapped with `MenuItemContent`.
   */
  leadingContent?: ReactNode;
  /**
   * Content displayed in the trailing area.
   * Pass an element wrapped with `MenuItemContent`.
   */
  trailingContent?: ReactNode;
  children?: ReactNode;
  value: string;
}>;
type MenuItemProps = Merge<MenuItemDefaultProps, ListCellProps>;
type MenuItemRadioProps = Omit<MenuItemProps, 'variant'>;
type MenuItemCheckboxProps = Omit<MenuItemProps, 'variant'>;
type MenuActionAreaProps = WithSxProps<{
  /**
   * Content displayed in the leading area.
   * Pass an element wrapped with `MenuActionAreaContent`.
   */
  leadingContent?: ReactNode;
  /**
   * Content displayed in the trailing area.
   * Pass an element wrapped with `MenuActionAreaContent`.
   */
  trailingContent?: ReactNode;
  /**
   * Generally, use leadingContent and trailingContent instead of children.
   */
  children?: ReactNode;
}>;
type MenuActionAreaContentProps = WithSxProps<{
  variant?: 'icon' | 'button' | 'icon-button' | 'text-button' | 'chip-filter' | 'badge' | 'custom';
  children?: ReactNode;
}>;
//#endregion
export { MenuActionAreaContentProps, MenuActionAreaProps, MenuContentProps, MenuDefaultProps, MenuGroupDefaultProps, MenuGroupProps, MenuItemCheckboxProps, MenuItemDefaultProps, MenuItemProps, MenuItemRadioProps, MenuListProps, MenuProps, MenuTriggerProps };