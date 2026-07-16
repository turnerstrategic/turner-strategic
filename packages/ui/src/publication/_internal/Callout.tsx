import type { ReactNode } from "react";
import { AccentBar, type AccentColor } from "./AccentBar";
import { Eyebrow } from "./Eyebrow";

type CalloutProps = {
  label: string;
  accent: AccentColor;
  children: ReactNode;
};

export function Callout({ label, accent, children }: CalloutProps) {
  return (
    <AccentBar accent={accent}>
      <Eyebrow>{label}</Eyebrow>
      <div className="text-body text-institutional-black mt-2 leading-relaxed">{children}</div>
    </AccentBar>
  );
}
