import { Callout } from "./_internal/Callout";

export type EvidencePanelProps = {
  label?: string;
  points: string[];
};

export function EvidencePanel({ label = "Supporting Evidence", points }: EvidencePanelProps) {
  return (
    <Callout label={label} accent="gold">
      <ul className="flex flex-col gap-2">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span aria-hidden="true" className="text-institutional-gold">
              •
            </span>
            {point}
          </li>
        ))}
      </ul>
    </Callout>
  );
}
