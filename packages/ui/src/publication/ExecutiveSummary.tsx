import { Prose } from "./_internal/Prose";
import { SectionHeading } from "./SectionHeading";

export type ExecutiveSummaryProps = {
  paragraphs: string[];
};

export function ExecutiveSummary({ paragraphs }: ExecutiveSummaryProps) {
  return (
    <SectionHeading id="executive-summary" title="Executive Summary">
      <Prose paragraphs={paragraphs} />
    </SectionHeading>
  );
}
