"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const GOLD = "#C6A15B";

export default function ReelPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.set(".scene", {
        opacity: 0,
        y: 36,
        filter: "blur(16px)",
      });

      gsap.set(".chaos-chip", {
        opacity: 0,
        scale: 0.72,
        y: 80,
      });

      gsap.set(".system-line", {
        scaleX: 0,
        transformOrigin: "left",
      });

      gsap.set(".system-node", {
        opacity: 0,
        scale: 0.3,
      });

      gsap.set(".dashboard", {
        opacity: 0,
        y: 80,
        scale: 0.94,
        filter: "blur(18px)",
      });

      gsap.set(".dash-row", {
        opacity: 0,
        y: 18,
      });

      gsap.set(".scan-beam", {
        opacity: 0,
        y: -280,
      });

      gsap.set(".check-row", {
        opacity: 0,
        x: -22,
      });

      gsap.set(".asset-card", {
        opacity: 0,
        y: 80,
        scale: 0.86,
      });

      gsap.set(".final-line", {
        opacity: 0,
        y: 60,
        filter: "blur(14px)",
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.3,
      });

      // Scene 1: The noise
      tl.to("#scene-1", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.75,
        ease: "power3.out",
      });

      tl.to(
        ".chaos-chip",
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: (i) => [-8, 6, -4, 7, -5][i] || 0,
          stagger: 0.08,
          duration: 0.65,
          ease: "back.out(1.7)",
        },
        0.35
      );

      tl.to(
        ".chaos-chip",
        {
          x: (i) => [14, -18, 10, -12, 16][i] || 0,
          y: (i) => [-12, 14, -16, 10, -10][i] || 0,
          repeat: 3,
          yoyo: true,
          stagger: 0.04,
          duration: 0.46,
          ease: "sine.inOut",
        },
        1.15
      );

      tl.to(
        "#scene-1",
        {
          opacity: 0,
          y: -58,
          filter: "blur(18px)",
          duration: 0.8,
          ease: "power3.inOut",
        },
        4.5
      );

      // Scene 2: Direction
      tl.to(
        "#scene-2",
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        5.0
      );

      tl.to(
        ".system-line",
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
        },
        5.55
      );

      tl.to(
        ".system-node",
        {
          opacity: 1,
          scale: 1,
          stagger: 0.13,
          duration: 0.46,
          ease: "back.out(1.8)",
        },
        5.75
      );

      tl.to(
        "#scene-2",
        {
          opacity: 0,
          y: -58,
          filter: "blur(18px)",
          duration: 0.8,
          ease: "power3.inOut",
        },
        8.9
      );

      // Scene 3: Campaign brief
      tl.to(
        "#scene-3",
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "power3.out",
        },
        9.4
      );

      tl.to(
        ".dashboard",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        9.85
      );

      tl.to(
        ".dash-row",
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.42,
          ease: "power3.out",
        },
        10.3
      );

      tl.to(
        "#scene-3",
        {
          opacity: 0,
          y: -58,
          filter: "blur(18px)",
          duration: 0.8,
          ease: "power3.inOut",
        },
        13.8
      );

      // Scene 4: Values review
      tl.to(
        "#scene-4",
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "power3.out",
        },
        14.3
      );

      tl.to(
        ".scan-beam",
        {
          opacity: 1,
          y: 300,
          duration: 1.7,
          ease: "power2.inOut",
        },
        14.95
      );

      tl.to(
        ".check-row",
        {
          opacity: 1,
          x: 0,
          stagger: 0.13,
          duration: 0.44,
          ease: "power3.out",
        },
        15.25
      );

      tl.to(
        "#scene-4",
        {
          opacity: 0,
          y: -58,
          filter: "blur(18px)",
          duration: 0.8,
          ease: "power3.inOut",
        },
        19.0
      );

      // Scene 5: Kit builds
      tl.to(
        "#scene-5",
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "power3.out",
        },
        19.5
      );

      tl.to(
        ".asset-card",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.09,
          duration: 0.5,
          ease: "back.out(1.45)",
        },
        20.15
      );

      tl.to(
        ".asset-card",
        {
          y: (i) => [-8, 8, -6, 6, -10, 8][i] || 0,
          repeat: 2,
          yoyo: true,
          stagger: 0.05,
          duration: 0.58,
          ease: "sine.inOut",
        },
        21.5
      );

      tl.to(
        "#scene-5",
        {
          opacity: 0,
          y: -58,
          filter: "blur(18px)",
          duration: 0.8,
          ease: "power3.inOut",
        },
        24.4
      );

      // Scene 6: Final
      tl.to(
        "#scene-6",
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        24.95
      );

      tl.to(
        ".final-line",
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.16,
          duration: 0.7,
          ease: "power4.out",
        },
        25.45
      );

      tl.to(
        root,
        {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        31.0
      );

      tl.set(root, { opacity: 1 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div
        ref={rootRef}
        className="relative h-screen max-h-[960px] w-full max-w-[540px] overflow-hidden bg-[#050505] text-white shadow-[0_0_80px_rgba(0,0,0,0.85)]"
      >
        <Background />

        {/* Scene 1 */}
        <section
          id="scene-1"
          className="scene absolute inset-0 flex flex-col justify-center px-8"
        >
          <Kicker label="The noise" />

          <h1 className="mt-8 text-[58px] font-black uppercase leading-[0.84] tracking-[-0.09em]">
            Everyone can
            <br />
            generate
            <br />
            <span style={{ color: GOLD }}>content</span>
          </h1>

          <p className="mt-6 max-w-sm text-lg leading-8 text-white/50">
            But generic output was not built for every audience
          </p>

          <div className="relative mt-12 h-[300px]">
            <ChaosChip className="chaos-chip left-2 top-2" text="Generic tone" />
            <ChaosChip className="chaos-chip right-4 top-12" text="Music-first edits" />
            <ChaosChip className="chaos-chip left-10 top-28" text="Broken Arabic layout" />
            <ChaosChip className="chaos-chip right-8 top-44" text="Random visuals" />
            <ChaosChip className="chaos-chip left-4 top-60" text="No values layer" />
          </div>
        </section>

        {/* Scene 2 */}
        <section
          id="scene-2"
          className="scene absolute inset-0 flex flex-col justify-center px-8"
        >
          <Kicker label="The insight" />

          <h1 className="mt-8 text-[58px] font-black uppercase leading-[0.84] tracking-[-0.09em]">
            Misqal
            <br />
            adds
            <br />
            <span style={{ color: GOLD }}>direction</span>
          </h1>

          <p className="mt-6 max-w-sm text-lg leading-8 text-white/50">
            A guided creative workflow for Muslim creators, brands, and organizations.
          </p>

          <div className="relative mt-14 rounded-[34px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="absolute left-10 right-10 top-[52%] h-px bg-white/10">
              <div className="system-line h-full bg-[#C6A15B]" />
            </div>

            <div className="relative z-10 grid grid-cols-5 gap-2 text-center">
              {["Brief", "Context", "Values", "Kit", "Publish"].map(
                (item, index) => (
                  <div key={item} className="system-node">
                    <div
                      className="mx-auto flex h-11 w-11 items-center justify-center rounded-full text-sm font-black text-black shadow-[0_0_30px_rgba(198,161,91,0.25)]"
                      style={{ backgroundColor: GOLD }}
                    >
                      {index + 1}
                    </div>
                    <div className="mt-3 text-[10px] font-black uppercase tracking-[-0.03em] text-white/55">
                      {item}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Scene 3 */}
        <section
          id="scene-3"
          className="scene absolute inset-0 flex flex-col justify-center px-8"
        >
          <Kicker label="One brief" />

          <h1 className="mt-8 text-[56px] font-black uppercase leading-[0.84] tracking-[-0.09em]">
            Start with
            <br />
            one real
            <br />
            <span style={{ color: GOLD }}>brief</span>
          </h1>

          <ProductDashboard />
        </section>

        {/* Scene 4 */}
        <section
          id="scene-4"
          className="scene absolute inset-0 flex flex-col justify-center px-8"
        >
          <Kicker label="Values layer" />

          <h1 className="mt-8 text-[56px] font-black uppercase leading-[0.84] tracking-[-0.09em]">
            Before
            <br />
            generation,
            <br />
            <span style={{ color: GOLD }}>review</span>
          </h1>

          <ValuesPanel />
        </section>

        {/* Scene 5 */}
        <section
          id="scene-5"
          className="scene absolute inset-0 flex flex-col justify-center px-8"
        >
          <Kicker label="Campaign kit" />

          <h1 className="mt-8 text-[56px] font-black uppercase leading-[0.84] tracking-[-0.09em]">
            Then
            <br />
            the kit
            <br />
            <span style={{ color: GOLD }}>builds</span>
          </h1>

          <div className="mt-10 grid grid-cols-2 gap-3">
            <AssetCard title="Reel script" meta="9:16" />
            <AssetCard title="Carousel copy" meta="8 slides" />
            <AssetCard title="Caption pack" meta="EN + UR" />
            <AssetCard title="WhatsApp copy" meta="Broadcast" />
            <AssetCard title="Visual direction" meta="Modest" />
            <AssetCard title="Thumbnail ideas" meta="3 options" />
          </div>
        </section>

        {/* Scene 6 */}
        <section
          id="scene-6"
          className="scene absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
        >
          <div className="final-line text-[42px] font-black uppercase tracking-[0.22em] text-[#C6A15B]">
            Misqal AI
          </div>

         

          <p className="final-line mt-10 text-lg leading-8 text-white/55">
            Join early access.
            <br />
            Get 3 months free.
          </p>
        </section>
      </div>
    </main>
  );
}

function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(198,161,91,0.10),transparent_30%),radial-gradient(circle_at_50%_82%,rgba(198,161,91,0.14),transparent_42%),linear-gradient(to_bottom,#020208,#050505_52%,#120b03)]" />

      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />

      <div
        className="absolute left-1/2 top-[10%] -translate-x-1/2 select-none text-[230px] font-black leading-none text-[#C6A15B]/[0.018]"
        dir="rtl"
        lang="ar"
      >
        مِثقال
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_58%,rgba(0,0,0,0.65)_100%)]" />
    </>
  );
}

function Kicker({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.28em] text-white/35">
      <span style={{ color: GOLD }}>✦</span>
      <span className="h-px w-14 bg-white/20" />
      <span>{label}</span>
    </div>
  );
}

function ChaosChip({ text, className }: { text: string; className: string }) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-white/65 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    >
      {text}
    </div>
  );
}

function ProductDashboard() {
  return (
    <div className="dashboard mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.24em] text-white/30">
            Campaign Kit
          </div>
          <div className="mt-1 text-sm font-black text-white/85">
            Ramadan donation campaign
          </div>
        </div>

        <div className="rounded-full bg-[#C6A15B]/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#C6A15B]">
          Draft
        </div>
      </div>

      <div className="grid gap-3 p-5">
        <DashRow label="Audience" value="Muslim families in the UK" />
        <DashRow label="Goal" value="Increase donations in the last 10 nights" />
        <DashRow label="Tone" value="Warm · respectful · urgent" />
        <DashRow label="Languages" value="English + Urdu" />
      </div>
    </div>
  );
}

function DashRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="dash-row rounded-2xl border border-white/10 bg-black/25 p-4">
      <div className="text-[10px] font-black uppercase tracking-[0.22em] text-white/30">
        {label}
      </div>
      <div className="mt-2 text-base font-bold leading-6 text-white/75">
        {value}
      </div>
    </div>
  );
}

function ValuesPanel() {
  return (
    <div className="relative mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="scan-beam absolute left-0 right-0 top-0 z-20 h-20 bg-gradient-to-b from-[#C6A15B]/35 to-transparent blur-sm" />

      <CheckRow text="Sacred text handled safely" />
      <CheckRow text="No music-first direction" />
      <CheckRow text="Respectful Ramadan tone" />
      <CheckRow text="Modest visual guidance" />
      <CheckRow text="English + Urdu layout logic" />

      <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
        <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
          Values layer approved
        </div>
      </div>
    </div>
  );
}

function CheckRow({ text }: { text: string }) {
  return (
    <div className="check-row mb-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 last:mb-0">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-sm font-black text-black">
        ✓
      </div>
      <div className="text-base font-bold text-white/75">{text}</div>
    </div>
  );
}

function AssetCard({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="asset-card min-h-[120px] rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <div
        className="mb-7 flex h-8 w-8 items-center justify-center rounded-full bg-[#C6A15B]/15 text-sm"
        style={{ color: GOLD }}
      >
        ✦
      </div>

      <div className="text-sm font-black uppercase leading-5 tracking-[-0.03em] text-white/85">
        {title}
      </div>

      <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/30">
        {meta}
      </div>
    </div>
  );
}