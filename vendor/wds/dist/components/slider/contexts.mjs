'use client';
import { createContext } from "@radix-ui/react-context";
//#region src/components/slider/contexts.ts
const [SliderProvider, useSliderContext] = createContext("Slider");
//#endregion
export { SliderProvider, useSliderContext };
