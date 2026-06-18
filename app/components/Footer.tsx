const GOLD = "#C6A15B";

export default function Footer() {
  return (
    <footer className="relative z-30 border-t border-white/10 bg-black px-5 py-10 text-white sm:px-8">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div
            className="text-sm font-black uppercase tracking-[0.24em]"
            style={{ color: GOLD }}
          >
            Misqal AI
          </div>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
            A creative operating system for Muslim-audience campaigns.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-xs font-black uppercase tracking-[0.18em] text-white/35">
          <a href="#workflow" className="transition hover:text-white">
            Workflow
          </a>

          <a href="#built-for" className="transition hover:text-white">
            Built For
          </a>

          <a href="#suite" className="transition hover:text-white">
            Suite
          </a>

          <a href="#why" className="transition hover:text-white">
            Why Misqal
          </a>

          <a href="#waitlist" className="transition hover:text-white">
            Waitlist
          </a>
        </div>
      </div>
    </footer>
  );
}