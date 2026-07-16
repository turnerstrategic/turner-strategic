import type { ReactNode } from "react";
import { Eyebrow } from "./_internal/Eyebrow";

export type PublicationHeaderProps = {
  eyebrow?: string;
  title: string;
  actions?: ReactNode;
};

export function PublicationHeader({ eyebrow, title, actions }: PublicationHeaderProps) {
  return (
    <header className="border-institutional-black/10 border-t pt-16">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h1
        className={`text-display text-institutional-black font-semibold ${eyebrow ? "mt-2" : ""}`}
      >
        {title}
      </h1>
      {actions ? (
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">{actions}</div>
      ) : null}
    </header>
  );
}
