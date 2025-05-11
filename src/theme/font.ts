//Approach : we can create dynamic token for fonts

// const MIN_FONT = 12;
// export const font = ['xs', 'sm', 'md', 'lg', 'xl'];
// type fontType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
// type Fontsize = {
//   [key in fontType]: number;
// }
// export const fontSize: Fontsize = font.reduce(
//   (allFontSize, currentFontSize, index) => {
//     allFontSize = {...fontSize, [currentFontSize]: MIN_FONT * index};
//     return allFontSize;
//   },
//   {} as Fontsize,
// );

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
} as const;
