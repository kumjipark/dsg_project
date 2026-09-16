'use client';
//#region src/components/fallback-view/helpers.ts
const getFallbackViewButtonSize = (context, { size, xs, sm, md, lg, xl }) => {
	return {
		size: size ?? getFallbackViewButtonSizePlatform(context.platform),
		xs: {
			size: getFallbackViewButtonSizePlatform(context.responsive?.xs?.platform),
			...xs
		},
		sm: {
			size: getFallbackViewButtonSizePlatform(context.responsive?.sm?.platform),
			...sm
		},
		md: {
			size: getFallbackViewButtonSizePlatform(context.responsive?.md?.platform),
			...md
		},
		lg: {
			size: getFallbackViewButtonSizePlatform(context.responsive?.lg?.platform),
			...lg
		},
		xl: {
			size: getFallbackViewButtonSizePlatform(context.responsive?.xl?.platform),
			...xl
		}
	};
};
const getFallbackViewButtonSizePlatform = (platform) => {
	switch (platform) {
		case "desktop": return "large";
		case "mobile": return "small";
	}
};
//#endregion
export { getFallbackViewButtonSize };
