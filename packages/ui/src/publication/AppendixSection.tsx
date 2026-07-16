import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

export type AppendixSectionProps = {
  children: ReactNode;
};

export function AppendixSection({ children }: AppendixSectionProps) {
  return (
    <SectionHeading id="appendix" title="Appendix">
      {children}
    </SectionHeading>
  );
}
