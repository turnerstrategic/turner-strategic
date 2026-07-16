export const fontFamily = {
  sans: "TBD",
  serif: "TBD",
  mono: "TBD",
} as const;

export const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  xxl: "1.5rem",
  xxxl: "2rem",
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
} as const;

export const typeScale = {
  display: { fontSize: "3.5rem", fontWeight: fontWeight.bold, lineHeight: lineHeight.tight },
  heading1: { fontSize: "2.5rem", fontWeight: fontWeight.bold, lineHeight: lineHeight.tight },
  heading2: {
    fontSize: fontSize.xxxl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.tight,
  },
  heading3: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.normal,
  },
  body: { fontSize: fontSize.md, fontWeight: fontWeight.regular, lineHeight: lineHeight.normal },
  caption: { fontSize: fontSize.sm, fontWeight: fontWeight.regular, lineHeight: lineHeight.normal },
} as const;

export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  typeScale,
} as const;
