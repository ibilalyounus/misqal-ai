"use client";

import { useEffect, useState } from "react";
import DawnIntro from "./components/DawnIntro";
import ScrollStatement from "./components/ScrollStatement";
import HeroReelMockup from "./components/HeroReelMockup";
import AnimatedSectionHeading from "./components/AnimatedSectionHeading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionKicker from "./components/SectionKicker";
const GOLD = "#C6A15B";

const LAYOUT = {
  sectionX: "px-5 sm:px-6 md:px-10 lg:px-12",
  sectionY: "py-20 sm:py-24 md:py-28 lg:py-32",
  max: "mx-auto max-w-[1500px]",
  sectionGap: "mt-12 sm:mt-16 lg:mt-20",
};

const TYPE = {
  kicker:
    "text-[10px] sm:text-[11px] font-black uppercase tracking-[0.24em] sm:tracking-[0.28em] text-white/35",

  heroTitle:
    "max-w-[1050px] text-[clamp(2.35rem,8.8vw,8.8rem)] font-black uppercase leading-[0.84] tracking-[-0.085em]",

  sectionTitle:
    "max-w-6xl text-[clamp(3.4rem,9vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.095em]",

  subTitle:
    "text-[clamp(2.3rem,5vw,4.8rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]",

  body:
    "max-w-2xl text-[13.5px] sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-white/55",

  cardTitle:
    "text-2xl sm:text-3xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white",

  cardBody:
    "text-sm sm:text-base leading-6 sm:leading-7 text-white/45",
};

function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setLeaving(true);
          }, 350);

          setTimeout(() => {
            onComplete();
          }, 1100);

          return 100;
        }

        const randomJump = Math.floor(Math.random() * 9) + 3;
        return Math.min(current + randomJump, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex min-h-screen flex-col justify-between bg-[#050505] px-6 py-6 text-white transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] md:px-10 md:py-8 ${
        leaving ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[11px] font-black uppercase tracking-[0.28em] text-white/45">
            Misqal <span style={{ color: GOLD }}>AI</span>
          </div>
          <div className="mt-2 text-xs text-white/30" dir="rtl" lang="ar">
            مِثقال
          </div>
        </div>

        <div className="text-right text-[11px] font-black uppercase tracking-[0.28em] text-white/45">
          Loading
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 items-center">
        <div className="w-full">
          <div className="overflow-hidden">
            <h1 className="loader-title text-[18vw] font-black uppercase leading-[0.78] tracking-[-0.1em] text-white">
              Misqal <span style={{ color: GOLD }}>AI</span>
            </h1>
          </div>

          <div className="mt-8 flex items-end justify-between gap-6">
            <div className="max-w-md text-sm uppercase leading-6 tracking-[0.22em] text-white/35">
              Workflow-first AI content suite for Muslim audiences
            </div>

            <div className="text-[14vw] font-black leading-none tracking-[-0.1em] text-white md:text-[10vw]">
              {progress.toString().padStart(3, "0")}
            </div>
          </div>

          <div className="mt-6 h-px w-full overflow-hidden bg-white/10">
            <div
              className="h-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%`, backgroundColor: GOLD }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between text-[10px] font-black uppercase tracking-[0.28em] text-white/30">
        <div>Brief</div>
        <div>Values</div>
        <div>Workflow</div>
        <div>Output</div>
      </div>

      <style jsx>{`
        .loader-title {
          transform: translateY(0);
          animation: loaderText 1.1s cubic-bezier(0.76, 0, 0.24, 1) both;
        }

        @keyframes loaderText {
          from {
            transform: translateY(110%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function WorkflowSection() {
  const steps = [
    {
      number: "01",
      title: "Brief",
      text: "Name your campaign, audience, platform, and intent. That's all Misqal needs to start. No template to fill, no prompt to craft.",
    },
    {
      number: "02",
      title: "Values Layer",
      text: "Your creative guardrails apply automatically — no music, modest visual direction, no misuse of sacred text, culturally respectful tone. Set once, held everywhere.",
    },
    {
      number: "03",
      title: "Creative Direction",
      text: "Hooks, angles, visual approach, narrative structure, and content framing — generated in seconds, shaped around your audience and values.",
    },
    {
      number: "04",
      title: "Content Kit",
      text: "Reel script, captions in Arabic, English and Urdu, thumbnail brief, carousel structure, story sequence, email header — assembled from the same brief, in the same workflow.",
    },
    {
      number: "05",
      title: "Publish",
      text: "Export clean, post-ready assets. Music-free video notes. RTL-correct Arabic layouts. Everything sized for the platforms your audience actually uses.",
    },
  ];

  return (
   <section id="workflow" 
   className={`relative z-30 bg-[#050505] ${LAYOUT.sectionX} ${LAYOUT.sectionY} text-white`}>
      <div className="mx-auto max-w-[1500px]">
        <SectionKicker number="[[ 001 ]]" label="The workflow" />

<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
  <AnimatedSectionHeading
    words={[
      { text: "One brief", gold: false },
      { text: "Five outputs", gold: false },
      { text: "Zero compromise", gold: true },
    ]}
  />

  <p className={TYPE.body}>
    Misqal <span style={{ color: GOLD }}>AI</span> turns one campaign brief into a complete content system —
    strategy, script, visual direction, multilingual copy, and platform-ready assets. No prompt engineering.
    No values rework. No tool-switching.
  </p>
</div>

        <div className="mt-20 grid gap-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group grid gap-6 border-t border-white/10 py-8 transition hover:border-[#C6A15B]/50 md:grid-cols-[120px_320px_1fr]"
            >
              <div className="text-sm font-black uppercase tracking-[0.28em] text-[#C6A15B]">
                {step.number}
              </div>

              <h3 className="text-4xl font-black uppercase tracking-[-0.07em] text-white md:text-5xl">
                {step.title}
              </h3>

              <p className="max-w-2xl text-lg leading-8 text-white/45 group-hover:text-white/65">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function BuiltForSection() {
  const audiences = [
    {
      title: "Creator",
      text: "Turn ideas into scripts, captions, thumbnails, carousels, and publish-ready content.",
    },
    {
      title: "Agency",
      text: "Produce client-ready campaigns, proposals, reports, and content systems faster.",
    },
    {
      title: "Brand",
      text: "Launch Muslim-audience campaigns with posts, stories, ads, Reels, and creator briefs.",
    },
    {
      title: "Media House",
      text: "Build recurring Muslim-audience content with consistent tone, visuals, and workflows.",
    },
    {
      title: "Organization",
      text: "Create announcements, campaigns, education content, and community updates without a full creative team.",
    },
  ];

  return (
   <section id="built-for" 
   className={`relative z-30 border-t border-white/10 bg-[#050505] ${LAYOUT.sectionX} ${LAYOUT.sectionY} text-white`}>
      <div className="mx-auto max-w-[1500px]">
        <SectionKicker number="[[ 002 ]]" label="Built for" />
        

        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
  <AnimatedSectionHeading
    words={[
      { text: "Built for", gold: false },
      { text: "the people", gold: false },
      { text: "creating for", gold: false },
      { text: "Muslim audience", gold: true },
    ]}
  />

  <div className="grid gap-4">
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
      <div className="text-4xl font-black tracking-[-0.08em]" style={{ color: GOLD }}>
        2B+
      </div>
      <p className="mt-3 text-sm font-bold leading-6 text-white/45">
        Muslims globally. Not a niche audience.
      </p>
    </div>

    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
      <div className="text-4xl font-black tracking-[-0.08em]" style={{ color: GOLD }}>
        Global
      </div>
      <p className="mt-3 text-sm font-bold leading-6 text-white/45">
        Creators, agencies, brands, media houses, and organizations.
      </p>
    </div>

    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
      <div className="text-4xl font-black tracking-[-0.08em]" style={{ color: GOLD }}>
        Underserved
      </div>
      <p className="mt-3 text-sm font-bold leading-6 text-white/45">
        Existing tools generate, but they do not understand Muslim-audience values.
      </p>
    </div>
  </div>
</div>




        <div className={`${LAYOUT.sectionGap} grid gap-4 sm:grid-cols-2 lg:grid-cols-5`}>
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group min-h-[220px] rounded-[1.6rem] p-5 transition duration-300 sm:min-h-[250px] lg:min-h-[270px] lg:rounded-[2rem]"
            >
              <div className="mb-14 text-sm font-black uppercase tracking-[0.24em] text-[#C6A15B]">
                00{index + 1}
              </div>

              <h3 className="text-3xl font-black uppercase tracking-[-0.06em] text-white">
                {audience.title}
              </h3>

              <p className="mt-5 text-sm leading-6 text-white/45 group-hover:text-white/65">
                {audience.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuiteSection() {
  const modules = [
    {
      title: "No-Music Reel Kit",
      text: "Hooks, scripts, caption overlays, b-roll direction, thumbnail ideas, and edit notes for silent or no-music content.",
    },
    {
      title: "Campaign Kit",
      text: "Posts, stories, captions, ad copy, WhatsApp copy, email copy, and CTA variants from one brief.",
    },
    {
      title: "Creator Brand Kit",
      text: "Media kit, brand pitch, rate card, collaboration proposal, and post-campaign report structure.",
    },
    {
      title: "Multilingual Layout Kit",
      text: "Content directions for English, Arabic and Urdu layouts without breaking readability or cultural tone.",
    },
    {
      title: "Values Layer",
      text: "Creative guardrails for modest visual direction, respectful messaging, and Muslim-audience sensitivity.",
    },
  ];

  return (
    <section id="suite"
    className={`relative z-30 border-t border-white/10 bg-[#050505] ${LAYOUT.sectionX} ${LAYOUT.sectionY} text-white`}>
      <div className="mx-auto max-w-[1500px]">
        <SectionKicker number="[[ 003 ]]" label="The suite" />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
  <AnimatedSectionHeading
    
    words={[
      { text: "One OS", gold: false },
      { text: "Every ", gold: false },
      { text: "Muslim campaign needs", gold: true },
    ]}
  />

  <p className={TYPE.body}>
    Misqal <span style={{ color: GOLD }}>AI</span> is organized around real creative jobs — not blank prompts.
    Each module turns a specific content need into a repeatable workflow.
  </p>
</div>

        <div className={`${LAYOUT.sectionGap} grid gap-4 sm:grid-cols-2 lg:grid-cols-5`}>
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-2 hover:border-[#C6A15B]/50 hover:bg-[#C6A15B]/[0.04]"
            >
              <div className="absolute right-4 top-4 text-7xl font-black leading-none tracking-[-0.1em] text-white/[0.035]">
                {index + 1}
              </div>

              <div className="relative z-10">
                <div className="mb-16 text-sm font-black uppercase tracking-[0.24em] text-[#C6A15B]">
                  Module 00{index + 1}
                </div>

                <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-white">
                  {module.title}
                </h3>

                <p className="mt-6 text-sm leading-6 text-white/45 group-hover:text-white/65">
                  {module.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const tools = [
    {
      name: "Sora",
      strength: "High-end text-to-video generation.",
      gap: "Not built around Muslim-audience workflows, brand kits, or values-aware campaign systems.",
    },
    {
      name: "Runway",
      strength: "Powerful AI video generation and video-to-video editing.",
      gap: "Strong production tool, but not a Muslim-first content planning and publishing workflow.",
    },
    {
      name: "Midjourney",
      strength: "Beautiful AI image generation and short image-to-video outputs.",
      gap: "Excellent visuals, but not structured for campaigns, captions, multilingual layouts, or creator kits.",
    },
    {
      name: "Adobe Firefly",
      strength: "Professional AI image, video, audio, and design generation.",
      gap: "Broad creative platform, but not specialized for Muslim-audience messaging and content systems.",
    },
    {
      name: "Canva AI",
      strength: "Accessible design creation, editable layouts, and brand-friendly templates.",
      gap: "Easy design tool, but not a values-aware workflow engine for Muslim creators and teams.",
    },
    {
      name: "CapCut AI",
      strength: "Fast creator editing, subtitles, background removal, voice, and video polish.",
      gap: "Great for editing, but not for campaign strategy, values layer, or content kit generation.",
    },
    {
      name: "Pika",
      strength: "Fast playful AI video effects and trend-based short-form creation.",
      gap: "Great for viral effects, but not for respectful, recurring Muslim-audience content workflows.",
    },
  ];

  const misqalAdvantages = [
    "Muslim-audience context built into every output",
    "Values guardrails that hold across the entire workflow",
    "Music-free Reel and video workflows, by default",
    "Arabic, Urdu, and English layout logic — simultaneously",
    "Campaign kits, not one-off prompt outputs",
    "Designed for creators, agencies, brands, media houses, and organisations",
  ];

  return (
    <section id="why"
    className={`relative z-30 border-t border-white/10 bg-[#050505] ${LAYOUT.sectionX} ${LAYOUT.sectionY} text-white`}>
      <div className="mx-auto max-w-[1500px]">
        <SectionKicker number="[[ 004 ]]" label="Why Misqal" />

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
  <AnimatedSectionHeading
    
    words={[
      { text: "They", gold: false },
      { text: "generate", gold: false },
      { text: "Misqal", gold: false },
      { text: "orchestrates", gold: true },
    ]}
  />

  <p className={TYPE.body}>
    The world does not need another blank prompt box. It needs a creative workflow that understands audience,
    context, tone, values, and campaign logic before anything is generated.
    <br className="hidden md:block" />
    Misqal <span style={{ color: GOLD }}>AI</span> sits before and around the creative tools — turning one campaign brief into a complete Muslim-audience content system.
  </p>
</div>

        <div className="mt-20 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 md:p-7">
            <div className="mb-6 text-[11px] font-black uppercase tracking-[0.28em] text-white/35">
              Global AI creative tools
            </div>

            <div className="grid gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="grid gap-4 rounded-[1.4rem] border border-white/10 bg-[#080808] p-5 transition hover:border-[#C6A15B]/45 md:grid-cols-[160px_1fr_1fr]"
                >
                  <h3 className="text-2xl font-black uppercase tracking-[-0.06em] text-white">
                    {tool.name}
                  </h3>

                  <p className="text-sm leading-6 text-white/50">
                    <span className="font-black text-white/70">Best at: </span>
                    {tool.strength}
                  </p>

                  <p className="text-sm leading-6 text-white/42">
                    <span className="font-black text-[#C6A15B]">Gap: </span>
                    {tool.gap}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#C6A15B]/25 bg-[#C6A15B]/[0.045] p-6 md:p-7">
            <div className="mb-8 text-[11px] font-black uppercase tracking-[0.28em] text-[#C6A15B]">
              Misqal advantage
            </div>

            <h3 className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.08em] text-white">
              The missing
<br />
creative
<br />
layer for
<br />
Muslim campaigns
            </h3>

            <div className="mt-10 grid gap-3">
              {misqalAdvantages.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-t border-white/10 pt-4"
                >
                  <div className="text-sm font-black text-[#C6A15B]">
                    0{index + 1}
                  </div>

                  <p className="text-base font-bold leading-7 text-white/65">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[1.4rem] border border-white/10 bg-black/30 p-5">
  <p className="text-lg font-black leading-7 tracking-[-0.04em] text-white">
    Misqal is not trying to out-generate Sora, Runway, Midjourney, Canva, or CapCut.
  </p>

  <p className="mt-4 text-sm leading-6 text-white/45">
    Those tools are powerful. But they were not designed around Muslim-audience campaign logic. Misqal fills the missing layer: brief, context, values, direction, and kit assembly.
  </p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}


function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [liveCount, setLiveCount] = useState(139);
const [countPulse, setCountPulse] = useState(false);

const waitlistAvatars = [
  { name: "Amina", initials: "A" },
  { name: "Yusuf", initials: "Y" },
  { name: "Huda", initials: "H" },
  { name: "Omar", initials: "O" },
  { name: "Sara", initials: "S" },
];
useEffect(() => {
  const interval = setInterval(() => {
    const shouldUpdate = Math.random() > 0.55;

    if (shouldUpdate) {
      setLiveCount((prev) => prev + 1);
      setCountPulse(true);

      setTimeout(() => {
        setCountPulse(false);
      }, 700);
    }
  }, 7000);

  return () => clearInterval(interval);
}, []);
  const roles = [
    "Creator",
    "Agency",
    "Brand",
    "Media House",
    "Organization",
    "Other",
  ];

 async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (!email || !role) return;

  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        role,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Something went wrong.");
      return;
    }

    console.log("Waitlist signup:", result);

    setSubmitted(true);
  } catch {
    alert("Something went wrong. Please try again.");
  }
}

  return (
    <section
      id="waitlist"
      className="relative z-30 border-t border-white/10 bg-[#050505] px-6 py-32 text-white md:px-10"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[#C6A15B]/[0.1] blur-[170px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-[520px] w-[520px] rounded-full bg-emerald-400/[0.06] blur-[150px]" />

        <div
          className="absolute left-1/2 top-[8%] -translate-x-1/2 select-none text-[22vw] font-black leading-none text-white/[0.018]"
          dir="rtl"
          lang="ar"
        >
          مِثقال
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
  <SectionKicker number="[[ 005 ]]" label="Waitlist" />

  <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
    <div>
      <AnimatedSectionHeading
        words={[
          { text: "Build with us", gold: false },
          { text: "before", gold: false },
          { text: "the world sees it", gold: true },
        ]}
      />

      <p className={`mt-8 sm:mt-10 ${TYPE.body}`}>
        Join the early access list for Misqal <span style={{ color: GOLD }}>AI</span>.
        Early users get <span className="font-black text-white">three months free</span>, priority onboarding,
        and a direct role in shaping the first creative operating system built for Muslim-audience campaigns.
      </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
  <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-5">
    <div className="text-5xl font-black tracking-[-0.08em]" style={{ color: GOLD }}>
      01
    </div>
    <p className="mt-3 text-sm font-bold leading-6 text-white/45">
      Three months free when we launch
    </p>
  </div>

  <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-5">
    <div className="text-5xl font-black tracking-[-0.08em]" style={{ color: GOLD }}>
      02
    </div>
    <p className="mt-3 text-sm font-bold leading-6 text-white/45">
      Priority Access before the public release
    </p>
  </div>
</div>
          <div className="mt-10 rounded-[1.8rem] border border-[#C6A15B]/25 bg-[#C6A15B]/[0.045] p-6">
            <p className="text-2xl font-black leading-tight tracking-[-0.05em] text-white">
              Help build the creative infrastructure our community deserves.
            </p>

            <p className="mt-4 text-base leading-7 text-white/55">
              By joining, you help us improve the workflows, guardrails, language support,
              and creative systems Muslim creators and teams actually need. Your feedback helps
              build better tools for the Muslim creative community.
            </p>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.65)] backdrop-blur-xl md:p-7">
          {submitted ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
              <div
                className="mb-8 flex h-20 w-20 items-center justify-center rounded-full text-4xl font-black text-black"
                style={{ backgroundColor: GOLD }}
              >
                ✓
              </div>

              <h3 className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.08em] text-white">
                Alhamdulillah,
                <br />
                you are on the list
              </h3>

              <p className="mt-6 max-w-sm text-base leading-7 text-white/50">
                We’ll reach out when early access opens. You’ll receive the 3-month free plan
                as part of the first builder group, InshAllah
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C6A15B]">
                  Waitlist access
                </div>

                <h3 className="mt-4 text-5xl font-black uppercase leading-[0.85] tracking-[-0.08em] text-white">
                  Reserve
                  <br />
                  your spot
                </h3>

                <p className="mt-5 text-base leading-7 text-white/45">
                  Join the early group helping shape Misqal before public launch.
                </p>
              </div>


<div className="mb-6 rounded-[1.6rem] border border-white/10 bg-black/30 p-4">
  <div className="flex items-center gap-4">
    <div className="flex -space-x-3">
      {waitlistAvatars.map((avatar, index) => (
        <div
          key={avatar.name}
          title={avatar.name}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-black text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          style={{
            background:
              index % 3 === 0
                ? "linear-gradient(135deg, #C6A15B, #8B6B2C)"
                : index % 3 === 1
                ? "linear-gradient(135deg, #0F766E, #134E4A)"
                : "linear-gradient(135deg, #2A2A2A, #111111)",
          }}
        >
          {avatar.initials}
        </div>
      ))}
    </div>

    <div className="min-w-0">
      <div className="flex items-center gap-2">
        <span
          className={`text-lg font-black tracking-[-0.05em] text-white transition-all duration-300 ${
            countPulse ? "scale-110 text-[#C6A15B]" : ""
          }`}
        >
          {liveCount}
        </span>
        <span className="text-sm font-bold text-white/75">
          people already joined the waitlist
        </span>
      </div>

      <div className="mt-1 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs text-white/35">
          Early access is filling in real time
        </span>
      </div>
    </div>
  </div>
</div>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-16 rounded-2xl border border-white/10 bg-black/35 px-5 text-white outline-none placeholder:text-white/25 transition focus:border-[#C6A15B]/70"
                />

                <select
                  required
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="h-16 rounded-2xl border border-white/10 bg-black/35 px-5 text-white outline-none transition focus:border-[#C6A15B]/70"
                >
                  <option value="">I am a...</option>
                  {roles.map((item) => (
                    <option key={item} value={item} className="bg-[#050505]">
                      {item}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="h-16 rounded-2xl px-6 text-sm font-black uppercase tracking-[0.22em] text-black transition hover:opacity-90"
                  style={{ backgroundColor: GOLD }}
                >
                  Join waitlist
                </button>
              </form>

              <div className="mt-6 grid gap-3 text-sm leading-6 text-white/45">
                <div className="flex items-start gap-3">
                  <span style={{ color: GOLD }}>✦</span>
                  <span>3 months free when Misqal launches.</span>
                </div>

                <div className="flex items-start gap-3">
                  <span style={{ color: GOLD }}>✦</span>
                  <span>Priority access to early product workflows.</span>
                </div>

                <div className="flex items-start gap-3">
                  <span style={{ color: GOLD }}>✦</span>
                  <span>Help shape a creative tool for the Muslim community.</span>
                </div>
              </div>

              <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-6 text-white/30">
                No spam. Early access updates only. We’ll use your feedback to improve the product before launch.
              </p>
            </>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}

function HomeIntro() {


  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* Fixed nav */}
      <Navbar />

      <DawnIntro />

<ScrollStatement />


      {/* SCREEN 2: proper hero page */}
     <section
  id="hero"
  className={`relative z-30 flex min-h-screen items-center overflow-hidden bg-[#050505] ${LAYOUT.sectionX} py-20 sm:py-24 md:py-28 lg:py-32`}
>
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[-12%] top-[20%] h-[560px] w-[560px] rounded-full bg-[#C6A15B]/[0.08] blur-[150px]" />
    <div className="absolute right-[-14%] bottom-[18%] h-[520px] w-[520px] rounded-full bg-emerald-400/[0.055] blur-[150px]" />
    <div
      className="absolute right-[5%] top-[14%] select-none text-[18vw] font-black leading-none text-white/[0.025]"
      dir="rtl"
      lang="ar"
    >
      مِثقال
    </div>
  </div>

  <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-[minmax(0,1fr)_150px] items-center gap-4 sm:grid-cols-[minmax(0,1fr)_230px] sm:gap-8 md:grid-cols-[minmax(0,1fr)_300px] lg:grid-cols-[minmax(0,1fr)_430px] xl:grid-cols-[minmax(0,1fr)_470px]">
    <div className="min-w-0">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-white/35 sm:mb-8 sm:text-[11px] sm:tracking-[0.28em]">
        <span>Every piece of content, made to count.</span>
        <span className="hidden h-px w-16 bg-white/20 sm:block" />
        <span dir="rtl" lang="ar">
          مِثقال
        </span>
      </div>

      <h1 className={TYPE.heroTitle}>
        Not a prompt
        <br />
        tool
        <br />
        Rather A
        <br />
        <span style={{ color: GOLD }}>Campaign System</span>
      </h1>

      <p className={`mt-7 sm:mt-9 ${TYPE.body}`}>
        Misqal <span style={{ color: GOLD }}>AI</span> is a creative operating system for Muslim-audience campaigns.
        <br className="hidden md:block" />
        Brief, strategy, visuals, copy and export — in one workflow.
        <br className="hidden md:block" />
        Values-driven by default, not by checkbox.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
        <a
          href="#waitlist"
          className="rounded-full bg-white px-6 py-4 text-center text-[11px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#C6A15B] sm:px-8 sm:text-xs"
        >
          Get early access
        </a>

        <a
          href="#workflow"
          className="rounded-full border border-white/20 px-6 py-4 text-center text-[11px] font-black uppercase tracking-[0.2em] text-white/70 transition hover:border-[#C6A15B] hover:text-[#C6A15B] sm:px-8 sm:text-xs"
        >
          How it works
        </a>
      </div>
    </div>

    <div className="flex justify-end">
      <HeroReelMockup />
    </div>
  </div>
</section>
      <WorkflowSection />
      <BuiltForSection />
      <SuiteSection />
      <ComparisonSection />
      <WaitlistSection />
      <Footer/>
      <style jsx global>{`
  html {
    scroll-behavior: smooth;
  }

`}</style>
    </main>
  );
}
export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <HomeIntro />
    </>
  );
}