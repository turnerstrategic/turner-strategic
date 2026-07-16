import type { ReactNode } from "react";

export type PublicationFooterProps = {
  children: ReactNode;
};

export function PublicationFooter({ children }: PublicationFooterProps) {
  return (
    <footer className="border-institutional-black/10 mt-16 border-t pt-10">
      <div className="text-caption text-charcoal leading-relaxed">{children}</div>
    </footer>
  );
}
