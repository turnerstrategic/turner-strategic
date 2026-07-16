import type { ReactNode } from "react";

type ReaderShellProps = {
  tableOfContents: ReactNode;
  children: ReactNode;
};

// Generic two-column reading shell, reused by future Publication/Research/Archive modes.
export function ReaderShell({ tableOfContents, children }: ReaderShellProps) {
  return (
    <div className="flex gap-16">
      <div className="shrink-0">{tableOfContents}</div>
      <article className="min-w-0 max-w-3xl flex-1">{children}</article>
    </div>
  );
}
