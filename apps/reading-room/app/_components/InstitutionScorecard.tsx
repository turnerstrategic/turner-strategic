const scorecardItems = [
  { label: "Institution Return (YTD)", value: "+18.42%" },
  { label: "Alpha vs S&P 500", value: "+4.77%" },
  { label: "Alpha vs Nasdaq-100", value: "+2.81%" },
  { label: "Active Holdings", value: "17" },
  { label: "Cash Allocation", value: "12%" },
  { label: "Chairman Actions", value: "2" },
];

export function InstitutionScorecard() {
  return (
    <section id="institution-scorecard" aria-label="Institution scorecard" className="scroll-mt-8">
      <p className="text-caption text-charcoal uppercase tracking-widest">Institution Scorecard</p>
      <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
        {scorecardItems.map(({ label, value }) => (
          <div key={label}>
            <p className="text-caption text-charcoal">{label}</p>
            <p className="text-heading3 text-institutional-black mt-1 font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
