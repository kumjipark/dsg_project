import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/stepper/style.d.ts
declare const stepperWrapperStyle: SerializedStyles$1;
declare const stepperChevronStyle: (theme: Theme) => SerializedStyles$1;
declare const stepperCircleStyle: (isActive: boolean, completed: boolean) => (theme: Theme) => SerializedStyles$1;
declare const stepperLabelStyle: SerializedStyles$1;
//#endregion
export { stepperChevronStyle, stepperCircleStyle, stepperLabelStyle, stepperWrapperStyle };