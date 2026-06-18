"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GOLD = "#C6A15B";

type HeadingWord = {
  text: string;
  gold?: boolean;
};

type AnimatedSectionHeadingProps = {
  kicker?: string;
  words: HeadingWord[];
  subcopy?: string;
  className?: string;
};

export default function AnimatedSectionHeading({
  kicker,
  words,
  subcopy,
  className = "",
}: AnimatedSectionHeadingProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const wordEls = gsap.utils.toArray<HTMLElement>(".animated-heading-word");
      const subcopyEl = section.querySelector(".animated-heading-subcopy");

      gsap.set(wordEls, {
        opacity: 0.12,
        yPercent: 80,
        filter: "blur(14px)",
      });

      if (subcopyEl) {
        gsap.set(subcopyEl, {
          opacity: 0,
          y: 28,
          filter: "blur(10px)",
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 45%",
          scrub: 1,
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
          index * 0.09
        );
      });

      if (subcopyEl) {
        tl.to(
          subcopyEl,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.28,
            ease: "power3.out",
          },
          words.length * 0.09 + 0.08
        );
      }
    }, section);

    return () => ctx.revert();
  }, [words.length]);

  return (
    <div ref={sectionRef} className={className}>
      {kicker && (
        <div className="mb-8 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.24em] text-white/35 sm:mb-10 sm:text-[11px] sm:tracking-[0.28em]">
          <span>{kicker}</span>
          <span className="h-px w-16 bg-white/20 sm:w-20" />
        </div>
      )}

      <h2 className="max-w-6xl text-[clamp(3rem,7.8vw,7.4rem)] font-black uppercase leading-[0.82] tracking-[-0.09em] text-white">
        {words.map((word, index) => (
          <span
            key={`${word.text}-${index}`}
            className="mr-[0.18em] inline-block overflow-hidden align-bottom"
          >
            <span
              className="animated-heading-word inline-block"
              style={{
                color: word.gold ? GOLD : "white",
              }}
            >
              {word.text}
            </span>
          </span>
        ))}
      </h2>

      {subcopy && (
        <p className="animated-heading-subcopy mt-8 max-w-2xl text-[15px] leading-7 text-white/50 sm:text-base sm:leading-8 md:text-lg lg:text-xl lg:leading-9">
          {subcopy}
        </p>
      )}
    </div>
  );
}