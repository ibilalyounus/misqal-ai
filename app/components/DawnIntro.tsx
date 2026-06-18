"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GOLD = "#C6A15B";

export default function DawnIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const skyRef = useRef<HTMLDivElement | null>(null);
  const sunRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);
  const raysRef = useRef<HTMLDivElement | null>(null);
  const horizonRef = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);
  const hazeRef = useRef<HTMLDivElement | null>(null);
  const brandWrapRef = useRef<HTMLDivElement | null>(null);
  const misqalWordRef = useRef<HTMLSpanElement | null>(null);
  const aiWordRef = useRef<HTMLSpanElement | null>(null);
  const arabicRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const sky = skyRef.current;
    const sun = sunRef.current;
    const halo = haloRef.current;
    const rays = raysRef.current;
    const horizon = horizonRef.current;
    const glare = glareRef.current;
    const haze = hazeRef.current;
    const brandWrap = brandWrapRef.current;
    const misqalWord = misqalWordRef.current;
    const aiWord = aiWordRef.current;
    const arabic = arabicRef.current;

    if (
      !section ||
      !sky ||
      !sun ||
      !halo ||
      !rays ||
      !horizon ||
      !glare ||
      !haze ||
      !brandWrap ||
      !misqalWord ||
      !aiWord ||
      !arabic
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(sun, {
        yPercent: 125,
        scale: 0.82,
      });

      gsap.set(halo, {
        opacity: 0,
        scale: 0.65,
      });

      gsap.set(rays, {
        opacity: 0,
        scale: 0.85,
        rotate: -10,
      });

      gsap.set(horizon, {
        opacity: 0.25,
        scaleX: 0.25,
      });

      gsap.set(glare, {
        opacity: 0,
        scaleX: 0.7,
      });

      gsap.set(haze, {
        opacity: 0,
        y: 30,
      });

      gsap.set(brandWrap, {
        y: 120,
      });

      gsap.set([misqalWord, aiWord], {
        yPercent: 120,
        opacity: 0,
        filter: "blur(18px)",
      });

      gsap.set(arabic, {
        y: 100,
        opacity: 0,
        filter: "blur(14px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=270%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(
        sky,
        {
          background:
            "linear-gradient(to bottom, #020208 0%, #050505 42%, #1d1307 100%)",
          duration: 0.42,
          ease: "none",
        },
        0
      );

      tl.to(
        sun,
        {
          yPercent: -48,
          scale: 1.08,
          duration: 0.68,
          ease: "power2.out",
        },
        0.02
      );

      tl.to(
        halo,
        {
          opacity: 1,
          scale: 1.22,
          duration: 0.58,
          ease: "power2.out",
        },
        0.08
      );

      tl.to(
        horizon,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.45,
          ease: "power2.out",
        },
        0.12
      );

      tl.to(
        haze,
        {
          opacity: 1,
          y: 0,
          duration: 0.42,
          ease: "power2.out",
        },
        0.14
      );

      tl.to(
        glare,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.46,
          ease: "power2.out",
        },
        0.16
      );

      tl.to(
        rays,
        {
          opacity: 0.22,
          scale: 1.04,
          rotate: 0,
          duration: 0.52,
          ease: "power2.out",
        },
        0.22
      );

      tl.to(
        brandWrap,
        {
          y: -12,
          duration: 0.42,
          ease: "power3.out",
        },
        0.58
      );

      tl.to(
        misqalWord,
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.38,
          ease: "power4.out",
        },
        0.62
      );

      tl.to(
        aiWord,
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.34,
          ease: "power4.out",
        },
        0.72
      );

      tl.to(
        arabic,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.42,
          ease: "power3.out",
        },
        0.86
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#030303]"
    >
      <div
        ref={skyRef}
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#020208_0%,#030306_48%,#050505_100%)]"
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:34px_34px]" />

      <div
        ref={haloRef}
        className="absolute left-1/2 top-[68%] h-[78vw] max-h-[980px] w-[78vw] max-w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,210,120,0.26) 0%, rgba(230,170,70,0.14) 26%, rgba(198,161,91,0.08) 44%, rgba(198,161,91,0.03) 60%, transparent 74%)",
        }}
      />

      <div
        ref={raysRef}
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 220deg at 50% 68%,
            transparent 0deg,
            rgba(198,161,91,0.06) 12deg,
            transparent 30deg,
            rgba(255,225,165,0.04) 48deg,
            transparent 68deg,
            rgba(198,161,91,0.04) 88deg,
            transparent 112deg,
            rgba(255,225,165,0.035) 136deg,
            transparent 166deg
          )`,
          mixBlendMode: "screen",
        }}
      />

      <div
        ref={hazeRef}
        className="absolute left-1/2 top-[65%] z-[6] h-[24vh] w-[110vw] -translate-x-1/2 blur-[50px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,190,90,0.20) 0%, rgba(220,150,60,0.10) 34%, rgba(198,161,91,0.04) 55%, transparent 76%)",
        }}
      />

      <div
        ref={sunRef}
        className="absolute left-1/2 top-[68%] h-[30vw] max-h-[410px] w-[30vw] max-w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 50% 45%,
              rgba(255,248,220,1) 0%,
              rgba(255,233,170,0.98) 16%,
              rgba(255,202,110,0.96) 34%,
              rgba(235,170,70,0.93) 52%,
              rgba(198,161,91,0.88) 68%,
              rgba(198,161,91,0.26) 82%,
              rgba(198,161,91,0.02) 100%
            )
          `,
          boxShadow: `
            0 0 35px rgba(255,225,160,0.32),
            0 0 90px rgba(255,200,110,0.24),
            0 0 180px rgba(198,161,91,0.18),
            0 0 300px rgba(198,161,91,0.12)
          `,
          filter: "blur(0.2px)",
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[68%] z-[5] h-[30vw] max-h-[410px] w-[30vw] max-w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[10px]"
        style={{
          background:
            "radial-gradient(circle at 52% 40%, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.08) 18%, transparent 40%)",
          mixBlendMode: "screen",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 top-[68%] z-10 bg-[#030303]" />

      <div
        ref={glareRef}
        className="absolute left-1/2 top-[67.8%] z-[15] h-[10vh] w-[95vw] -translate-x-1/2 origin-center blur-[28px]"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(255,220,150,0.10) 16%, rgba(255,210,120,0.35) 34%, rgba(255,245,220,0.52) 50%, rgba(255,210,120,0.35) 66%, rgba(255,220,150,0.10) 84%, transparent 100%)",
        }}
      />

      <div
        ref={horizonRef}
        className="absolute left-1/2 top-[68%] z-20 h-px w-[86vw] -translate-x-1/2 origin-center"
        style={{
          background: `linear-gradient(
            to right,
            transparent 0%,
            rgba(198,161,91,0.25) 18%,
            ${GOLD} 35%,
            #ffe7b0 50%,
            ${GOLD} 65%,
            rgba(198,161,91,0.25) 82%,
            transparent 100%
          )`,
          boxShadow:
            "0 0 18px rgba(255,220,150,0.35), 0 0 60px rgba(198,161,91,0.28)",
        }}
      />

      {/* English Misqal AI — locked in its own position */}
      <div
        ref={brandWrapRef}
        className="absolute left-1/2 top-[23%] z-30 flex w-full -translate-x-1/2 items-baseline justify-center gap-x-8 overflow-hidden px-6 text-center text-[clamp(3.2rem,10vw,9rem)] font-black uppercase leading-[0.8] tracking-[0.32em] [text-indent:0.32em]"
      >
        <span ref={misqalWordRef} className="inline-block">
          Misqal
        </span>

        <span
          ref={aiWordRef}
          className="inline-block"
          style={{ color: GOLD }}
        >
          AI
        </span>
      </div>

      {/* Arabic Misqal — bigger, lower, full opacity */}
      <div
        ref={arabicRef}
        className="absolute left-1/2 top-[74%] z-30 w-full -translate-x-1/2 text-center text-[18vw] font-black leading-none text-[#C6A15B] md:text-[9vw]"
        dir="rtl"
        lang="ar"
      >
        مِثقال
      </div>

      <div className="pointer-events-none absolute inset-0 z-40 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_52%,rgba(0,0,0,0.56)_100%)]" />
    </section>
  );
}