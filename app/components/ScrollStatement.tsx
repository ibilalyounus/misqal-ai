"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GOLD = "#C6A15B";

export default function ScrollStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  

 const words = [
  { text: "The creative OS", gold: true },
  { text: "built for", gold: false },
  { text: "Muslim campaigns", gold: true },
  { text: "serving", gold: false },
  { text: "2 billion people", gold: true },
];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

   const section = sectionRef.current;

if (!section) return;

   const ctx = gsap.context(() => {
  const wordEls = gsap.utils.toArray<HTMLElement>(".statement-word");

  gsap.set(wordEls, {
        opacity: 0.12,
        yPercent: 80,
        filter: "blur(14px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=260%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      wordEls.forEach((word, index) => {
        tl.to(
          word,
          {
            opacity: 1,
            yPercent: 0,
            filter: "blur(0px)",
            duration: 0.18,
            ease: "power3.out",
          },
          index * 0.11
        );
      });

      tl.to(
        ".statement-subcopy",
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.3,
          ease: "power3.out",
        },
        0.95
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center overflow-hidden border-t border-white/10 bg-[#050505] px-6 text-white md:px-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[20%] h-[520px] w-[520px] rounded-full bg-[#C6A15B]/[0.07] blur-[150px]" />

       <div
  className="absolute right-[-8%] top-[4%] select-none text-[40vw] font-black leading-none text-[#C6A15B]/[0.01]"
  dir="rtl"
  lang="ar"
>
  مِثقال
</div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1150px]">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-white/35 sm:mb-8 sm:text-[11px] sm:tracking-[0.28em]">
        <span>Every piece of content, made to count.</span>
        <span className="hidden h-px w-16 bg-white/20 sm:block" />
        <span dir="rtl" lang="ar">
          مِثقال
        </span>
      </div>

        <h2 className="relative z-10 mx-auto max-w-[1150px] px-6 text-center text-[clamp(2.65rem,7.2vw,7.5rem)] font-black uppercase leading-[0.83] tracking-[-0.08em] text-white">
          {words.map((word, index) => (
            <span
              key={`${word.text}-${index}`}
              className="mr-[0.18em] inline-block overflow-hidden align-bottom"
            >
              <span
  className="statement-word inline-block"
  style={{
    color: word.gold ? GOLD : "white",
  }}
>
  {word.text}
</span>
            </span>
          ))}
        </h2>

        <p className="statement-subcopy mt-12 max-w-2xl translate-y-8 text-xl leading-9 text-white/45 opacity-0 blur-sm">
          Misqal AI · مِثقال · The Creative OS for Muslim-Audience Campaigns
        </p>
      </div>
    </section>
  );
}