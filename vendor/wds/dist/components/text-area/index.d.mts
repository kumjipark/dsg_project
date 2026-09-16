import { TextAreaContentProps, TextAreaProps } from "./types.mjs";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/text-area/index.d.ts
declare const TextArea: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TextAreaProps, "textarea">, "ref"> & _$react.RefAttributes<HTMLTextAreaElement>>;
declare const TextAreaContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TextAreaContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { TextArea, TextAreaContent, type TextAreaContentProps, type TextAreaProps };