export const shadows = {
  none: "none",
  sm: "0 1px 2px rgba(17, 17, 17, 0.05)",
  md: "0 4px 8px rgba(17, 17, 17, 0.08)",
  lg: "0 10px 20px rgba(17, 17, 17, 0.10)",
  xl: "0 20px 40px rgba(17, 17, 17, 0.12)",
} as const;

export type ShadowToken = keyof typeof shadows;
