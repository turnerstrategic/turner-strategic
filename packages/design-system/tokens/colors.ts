export const colors = {
  institutionalGold: "#8B7A3E",
  institutionalBlack: "#111111",
  ivory: "#F8F6F1",
  charcoal: "#3C3C3C",
} as const;

export type ColorToken = keyof typeof colors;
