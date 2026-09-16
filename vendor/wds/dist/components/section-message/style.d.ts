import { SectionMessageProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/section-message/style.d.ts
declare const sectionMessageWrapperStyle: SerializedStyles$1;
declare const firstOverlayStyle: (theme: Theme) => SerializedStyles$1;
declare const secondOverlayStyle: (variant: SectionMessageProps["variant"]) => (theme: Theme) => SerializedStyles$1;
declare const sectionMessageIconStyle: (variant: SectionMessageProps["variant"]) => (theme: Theme) => SerializedStyles$1;
declare const sectionMessageTrailingButtonStyle: SerializedStyles$1;
declare const sectionMessageCloseButtonStyle: SerializedStyles$1;
//#endregion
export { firstOverlayStyle, secondOverlayStyle, sectionMessageCloseButtonStyle, sectionMessageIconStyle, sectionMessageTrailingButtonStyle, sectionMessageWrapperStyle };