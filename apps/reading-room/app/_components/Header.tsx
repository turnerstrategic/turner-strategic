export function Header() {
  return (
    <header className="border-institutional-black/10 border-b px-8 py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <div
          aria-hidden="true"
          className="border-institutional-gold flex h-16 w-16 items-center justify-center rounded-full border"
        >
          <span className="text-caption text-institutional-gold/70 tracking-widest">SEAL</span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-heading1 text-institutional-black font-semibold tracking-wide">
            TURNER STRATEGIC
          </h1>
          <p className="text-caption text-charcoal">Established by Turner Legacy Partners</p>
          <p className="text-caption text-charcoal">Golden Isles G.A.</p>
          <p className="text-caption text-institutional-gold mt-1 italic tracking-wide">
            Per Rationem
          </p>
        </div>
      </div>
    </header>
  );
}
