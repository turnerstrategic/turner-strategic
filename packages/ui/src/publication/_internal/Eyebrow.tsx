import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
};

export function Eyebrow({ children }: EyebrowProps) {
  return <p className="text-caption text-charcoal uppercase tracking-widest">{children}</p>;
}
