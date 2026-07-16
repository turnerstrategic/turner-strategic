import type { ReactNode } from "react";
import { Callout } from "./_internal/Callout";

export type RiskPanelProps = {
  label?: string;
  children: ReactNode;
};

export function RiskPanel({ label = "Risk Disclosure", children }: RiskPanelProps) {
  return (
    <Callout label={label} accent="black">
      {children}
    </Callout>
  );
}
