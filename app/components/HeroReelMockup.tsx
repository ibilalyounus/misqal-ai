export default function HeroReelMockup() {
  return (
    <div className="relative ml-auto w-full max-w-[150px] sm:max-w-[230px] md:max-w-[300px] lg:max-w-[420px]">
      {/* outer glow */}
      <div className="absolute -inset-5 rounded-[2.5rem] bg-[#C6A15B]/25 blur-2xl sm:-inset-8 lg:blur-3xl" />

      {/* phone frame */}
      <div className="relative overflow-hidden rounded-[1.7rem] border border-[#C6A15B]/25 bg-[#080604] p-1.5 shadow-[0_30px_100px_rgba(198,161,91,0.18)] sm:rounded-[2.4rem] sm:p-2.5 lg:rounded-[3rem] lg:p-3">
        {/* notch - hidden on tiny mobile */}
        <div className="absolute left-1/2 top-5 z-20 hidden h-6 w-28 -translate-x-1/2 rounded-full bg-black/85 sm:block" />

        {/* MOBILE/TABLET simplified screen */}
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.25rem] bg-[#C6A15B] sm:rounded-[1.9rem] lg:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.38),transparent_34%),linear-gradient(to_bottom,#D8B96B,#9A7330)]" />

          <div className="absolute inset-x-3 top-4 rounded-2xl bg-black/18 p-3 backdrop-blur-md sm:inset-x-4 sm:top-5 sm:p-4">
            <div className="text-[8px] font-black uppercase tracking-[0.22em] text-black/55 sm:text-[10px]">
              Campaign Kit
            </div>

            <div className="mt-2 text-[18px] font-black uppercase leading-[0.86] tracking-[-0.08em] text-black sm:text-[28px]">
              Ramadan
              <br />
              Donation
            </div>
          </div>

          <div className="absolute inset-x-3 top-[38%] grid gap-2 sm:inset-x-4 sm:gap-3">
            <MiniRow label="Audience" value="Muslim families" />
            <MiniRow label="Tone" value="Warm · respectful" />
            <MiniRow label="Values" value="Approved" />
          </div>

          <div className="absolute inset-x-3 bottom-4 rounded-2xl bg-black p-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:inset-x-4 sm:bottom-5 sm:p-4">
            <div className="text-[8px] font-black uppercase tracking-[0.22em] text-[#C6A15B] sm:text-[10px]">
              Output ready
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2 text-[8px] font-black uppercase tracking-[0.08em] text-white/75 sm:text-[10px]">
              <span>Reel</span>
              <span>Caption</span>
              <span>Carousel</span>
              <span>WhatsApp</span>
            </div>
          </div>
        </div>

        {/* DESKTOP live reel */}
        <div className="relative hidden aspect-[9/16] overflow-hidden rounded-[2.35rem] bg-[#050505] lg:block">
          <iframe
            src="/reel"
            title="Misqal AI concept reel"
            className="h-full w-full border-0"
          />
        </div>
      </div>

      {/* label only on desktop */}
      <div className="absolute -bottom-5 left-1/2 z-30 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white/60 backdrop-blur-xl sm:block">
        Live campaign workflow
      </div>
    </div>
  );
}

function MiniRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-black/18 p-2 backdrop-blur-md sm:rounded-2xl sm:p-3">
      <div className="text-[7px] font-black uppercase tracking-[0.18em] text-black/45 sm:text-[9px]">
        {label}
      </div>
      <div className="mt-1 text-[10px] font-black leading-tight text-black sm:text-[14px]">
        {value}
      </div>
    </div>
  );
}