import { Button } from "@turner-strategic/ui";

const publicationMeta = [
  { label: "Publication Number", value: "TS-MB-20260717-001" },
  { label: "Prepared by", value: "Office of Publications & Records" },
  { label: "Classification", value: "Internal" },
  { label: "Reading Time", value: "24 Minutes" },
  { label: "Published", value: "07:00 EDT" },
];

export function PublicationHeader() {
  return (
    <header className="border-institutional-black/10 border-t pt-16">
      <h2 className="text-display text-institutional-black font-semibold">Morning Brief</h2>

      <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
        {publicationMeta.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-caption text-charcoal">{label}</dt>
            <dd className="text-body text-institutional-black mt-1 font-medium">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
        <Button variant="primary">Open Today&apos;s Brief →</Button>
        <Button variant="secondary">Official PDF</Button>
      </div>
    </header>
  );
}
