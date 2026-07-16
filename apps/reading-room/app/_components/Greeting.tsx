const statusItems = [
  { label: "Morning Brief Published", value: "07:00 EDT" },
  { label: "Institution Status", value: "Operational" },
  { label: "Last Market Close", value: "Thursday, July 16, 2026" },
];

export function Greeting() {
  return (
    <div>
      <h1 className="text-heading1 text-institutional-black font-semibold">
        Good Morning, Chairman.
      </h1>
      <p className="text-body text-charcoal mt-2">Friday, July 17, 2026</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {statusItems.map(({ label, value }) => (
          <div key={label}>
            <p className="text-caption text-charcoal">{label}</p>
            <p className="text-body text-institutional-black mt-1 font-medium">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
