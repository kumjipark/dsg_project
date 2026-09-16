'use client';
import { interpolationTheme } from "../utils/interpolation.mjs";
import useTheme from "./use-theme.mjs";
//#region src/hooks/use-sx-props.ts
const useSxProps = () => {
	const theme = useTheme();
	const mergeSxProps = (sx) => {
		return interpolationTheme(sx, theme);
	};
	return mergeSxProps;
};
//#endregion
export { useSxProps as default };
