'use client';
import { RADIO_GROUP_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/radio-group/contexts.ts
const [RadioGroupProvider, useRadioGroupContext] = createContext(RADIO_GROUP_NAME);
//#endregion
export { RadioGroupProvider, useRadioGroupContext };
