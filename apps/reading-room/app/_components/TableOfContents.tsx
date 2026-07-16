import { tableOfContentsSections } from "./tableOfContents.data";

export function TableOfContents() {
  return (
    <nav aria-label="Table of contents" className="sticky top-12 w-56">
      <p className="text-caption text-charcoal uppercase tracking-widest">Contents</p>
      <ul className="border-institutional-black/10 mt-4 flex flex-col gap-1 border-l">
        {tableOfContentsSections.map(({ id, title }, index) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={index === 0 ? "location" : undefined}
              className={`text-caption -ml-px block border-l-2 px-4 py-1.5 transition-colors ${
                index === 0
                  ? "border-institutional-gold text-institutional-black font-medium"
                  : "text-charcoal hover:text-institutional-black border-transparent"
              }`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
