'use client';
//#region src/components/category/helpers.ts
const getCategoryListItemSize = (context, { xs, sm, md, lg, xl }) => {
	return {
		size: context.size,
		xs: {
			size: context.responsive?.xs?.size,
			...xs
		},
		sm: {
			size: context.responsive?.sm?.size,
			...sm
		},
		md: {
			size: context.responsive?.md?.size,
			...md
		},
		lg: {
			size: context.responsive?.lg?.size,
			...lg
		},
		xl: {
			size: context.responsive?.xl?.size,
			...xl
		}
	};
};
//#endregion
export { getCategoryListItemSize };
