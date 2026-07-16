import { Prose } from "./_internal/Prose";
import { SectionHeading } from "./SectionHeading";

export type ExecutiveDirectorNoteProps = {
  paragraphs: string[];
  signature?: string;
};

export function ExecutiveDirectorNote({ paragraphs, signature }: ExecutiveDirectorNoteProps) {
  return (
    <SectionHeading id="executive-directors-note" title="Executive Director's Note">
      <Prose paragraphs={paragraphs} />
      {signature ? <p className="text-body text-charcoal mt-4 italic">{signature}</p> : null}
    </SectionHeading>
  );
}
