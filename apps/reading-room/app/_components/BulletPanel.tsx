type BulletPanelProps = {
  title: string;
  items: string[];
};

export function BulletPanel({ title, items }: BulletPanelProps) {
  return (
    <section>
      <h3 className="text-caption text-charcoal uppercase tracking-widest">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-body text-institutional-black flex gap-3">
            <span aria-hidden="true" className="text-institutional-gold">
              •
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
