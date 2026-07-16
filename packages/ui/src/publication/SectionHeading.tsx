import type { ReactNode } from "react";

export type SectionHeadingProps = {
  id: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ id, title, children }: SectionHeadingProps) {
  return (
    <section id={id} className="border-institutional-black/10 scroll-mt-8 border-t pt-10">
      <h2 className="text-heading3 text-institutional-black font-semibold">{title}</h2>
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
