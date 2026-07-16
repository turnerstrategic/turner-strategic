const primaryNavItems = [
  "Reading Room",
  "Morning Brief",
  "Capital Book",
  "Research",
  "Committee",
  "Publications",
  "Library",
];

const secondaryNavItems = ["Institution", "Search"];

export function LeftNav() {
  return (
    <nav className="border-institutional-black/10 w-56 shrink-0 border-r px-6 py-12">
      <ul className="flex flex-col gap-1">
        {primaryNavItems.map((item) => (
          <li key={item}>
            <button
              type="button"
              aria-current={item === "Reading Room" ? "page" : undefined}
              className={`text-body w-full rounded-sm px-3 py-2 text-left transition-colors ${
                item === "Reading Room"
                  ? "border-institutional-gold bg-institutional-black/5 text-institutional-black border-l-2 font-medium"
                  : "text-charcoal hover:bg-institutional-black/5"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <ul className="border-institutional-black/10 mt-8 flex flex-col gap-1 border-t pt-8">
        {secondaryNavItems.map((item) => (
          <li key={item}>
            <button
              type="button"
              className="text-body text-charcoal hover:bg-institutional-black/5 w-full rounded-sm px-3 py-2 text-left transition-colors"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
