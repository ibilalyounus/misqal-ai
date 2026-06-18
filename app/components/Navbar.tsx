"use client";

const GOLD = "#C6A15B";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] border-b border-white/10 bg-black/45 px-5 py-4 text-white backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <span
            className="text-lg font-black uppercase tracking-[0.22em]"
            style={{ color: GOLD }}
          >
            Misqal
          </span>
          <span className="text-xs font-black uppercase tracking-[0.22em] text-white/50">
            AI
          </span>
        </a>

        <div className="hidden items-center gap-7 text-[11px] font-black uppercase tracking-[0.18em] text-white/45 md:flex">
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
</div>

        <a
          href="#waitlist"
          className="rounded-full border border-[#C6A15B]/40 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#C6A15B] transition hover:bg-[#C6A15B] hover:text-black sm:px-5"
        >
          Join waitlist
        </a>
      </div>
    </nav>
  );
}