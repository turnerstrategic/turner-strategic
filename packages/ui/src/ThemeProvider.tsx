"use client";

import { createContext, useContext, type ReactNode } from "react";
import {
  colors,
  spacing,
  typography,
  radius,
  shadows,
} from "@turner-strategic/design-system/tokens";

const theme = { colors, spacing, typography, radius, shadows } as const;

export type Theme = typeof theme;

const ThemeContext = createContext<Theme>(theme);

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
