import { MenuActionAreaContentProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/menu/style.d.ts
declare const menuPopoverContentStyle: (theme: Theme) => SerializedStyles$1;
declare const menuScrollAreaStyle: (theme: Theme) => SerializedStyles$1;
declare const menuGroupTitleStyle: (theme: Theme) => SerializedStyles$1;
declare const menuGroupStyle: SerializedStyles$1;
declare const menuListStyle: SerializedStyles$1;
declare const menuItemStyle: (theme: Theme) => SerializedStyles$1;
declare const menuActionAreaStyle: (theme: Theme) => SerializedStyles$1;
declare const menuActionAreaContentStyle: (variant: MenuActionAreaContentProps["variant"]) => SerializedStyles$1;
//#endregion
export { menuActionAreaContentStyle, menuActionAreaStyle, menuGroupStyle, menuGroupTitleStyle, menuItemStyle, menuListStyle, menuPopoverContentStyle, menuScrollAreaStyle };