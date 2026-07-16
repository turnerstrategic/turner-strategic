import type { ReactNode } from "react";

export type AccentColor = "gold" | "black";

type AccentBarProps = {
  accent: AccentColor;
  children: ReactNode;
};

const accentClassName: Record<AccentColor, string> = {
  gold: "border-institutional-gold",
  black: "border-institutional-black",
};

export function AccentBar({ accent, children }: AccentBarProps) {
  return <div className={`border-l-2 py-1 pl-6 ${accentClassName[accent]}`}>{children}</div>;
}
