export type PublicationMetadataItem = {
  label: string;
  value: string;
};

export type PublicationMetadataProps = {
  items: PublicationMetadataItem[];
};

export function PublicationMetadata({ items }: PublicationMetadataProps) {
  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-4">
      {items.map(({ label, value }) => (
        <div key={label}>
          <dt className="text-caption text-charcoal">{label}</dt>
          <dd className="text-body text-institutional-black mt-1 font-medium">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
