import type { ReactNode } from "react";
import { Callout } from "./_internal/Callout";

export type InformationCalloutProps = {
  label?: string;
  children: ReactNode;
};

export function InformationCallout({ label = "Information", children }: InformationCalloutProps) {
  return (
    <Callout label={label} accent="gold">
      {children}
    </Callout>
  );
}
