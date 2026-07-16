import { SectionHeading } from "./SectionHeading";

export type InstitutionScorecardItem = {
  label: string;
  value: string;
};

export type InstitutionScorecardProps = {
  items: InstitutionScorecardItem[];
};

export function InstitutionScorecard({ items }: InstitutionScorecardProps) {
  return (
    <SectionHeading id="institution-scorecard" title="Institution Scorecard">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
        {items.map(({ label, value }) => (
          <div key={label}>
            <p className="text-caption text-charcoal">{label}</p>
            <p className="text-heading3 text-institutional-black mt-1 font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </SectionHeading>
  );
}
