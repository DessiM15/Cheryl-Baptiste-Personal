"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import CameoLockup from "./CameoLockup";

const SUBSTACK = "https://substack.com/@cherylbaptiste";

const MOODS = {
  off: {
    script: "saying the quiet part out loud",
    sub: "Essays · Conversations · California",
    ctas: [
      { href: "#essays", label: "Read the essays", cls: "btn on-dark", ext: false },
      { href: SUBSTACK, label: "Subscribe", cls: "btn ghost-dark", ext: true },
    ],
  },
  board: {
    script: "advising the leaders who run them",
    sub: "People Strategy · Leadership Advisory",
    ctas: [
      { href: "https://fgtsco.com", label: "Visit FGT Solutions", cls: "btn on-dark", ext: true },
      { href: "#about", label: "About Cheryl", cls: "btn ghost-dark", ext: false },
    ],
  },
} as const;

export default function Hero() {
  const [mood, setMood] = useState<keyof typeof MOODS>("off");
  const m = MOODS[mood];
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const introDone = document.documentElement.dataset.intro === "done";
    const delay = introDone ? 0.15 : 2.6;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay, defaults: { ease: "power4.out" } });
      tl.fromTo(".hero-cameo", { autoAlpha: 0, y: -18 }, { autoAlpha: 1, y: 0, duration: 0.9 })
        .fromTo(".giant-back .line-inner", { yPercent: 112 }, { yPercent: 0, duration: 1.25 }, "-=0.5")
        .fromTo(".hero-portrait", { autoAlpha: 0, yPercent: 9, scale: 1.02 }, { autoAlpha: 1, yPercent: 0, scale: 1, duration: 1.5, ease: "power3.out" }, "-=0.9")
        .fromTo(".giant-front .line-inner", { yPercent: 112 }, { yPercent: 0, duration: 1.2 }, "-=1.0")
        .fromTo(".hero-script", { autoAlpha: 0, scale: 0.92, rotate: -8 }, { autoAlpha: 1, scale: 1, rotate: -5, duration: 1 }, "-=0.6")
        .fromTo(".side-word", { autoAlpha: 0, letterSpacing: "0.9em" }, { autoAlpha: 1, letterSpacing: "0.34em", duration: 1.1, stagger: 0.08 }, "-=0.8")
        .fromTo(
          [".mood-toggle", ".hero-swap", ".hero-foot .cta-row", ".scroll-cue"],
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09 },
          "-=0.7"
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className={`hero-scene${mood === "board" ? " board" : ""}`}>
      <div className="hero-media" aria-hidden="true">
        <video autoPlay muted loop playsInline poster="/img/hero-poster.jpg" preload="metadata">
          <source src="/img/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-veil" aria-hidden="true" />

      <div className="hero-cameo" aria-hidden="true">
        <CameoLockup size={54} name={false} spin onDark />
      </div>

      <span className="side-word left" aria-hidden="true">Work &amp; Leadership</span>
      <span className="side-word right" aria-hidden="true">The Truth Between</span>

      <div className="hero-stage" aria-hidden="true">
        <span className="giant giant-back">
          <span className="line"><span className="line-inner">Cheryl</span></span>
        </span>
        <div className="hero-portrait">
          <Image
            src="/cheryl-duotone.png"
            alt=""
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 700px) 88vw, 46vh"
          />
        </div>
        <span className="giant giant-front">
          <span className="line"><span className="line-inner">Baptiste</span></span>
        </span>
        <span className="hero-script" key={mood}>{m.script}</span>
      </div>
      <h1 className="sr-only">Cheryl Baptiste — {m.sub}</h1>

      <div className="hero-foot">
        <div className="mood-toggle" role="group" aria-label="Choose how to meet Cheryl">
          <button type="button" className={mood === "off" ? "on" : ""} aria-pressed={mood === "off"} onClick={() => setMood("off")}>
            Off the record
          </button>
          <span className="sep" aria-hidden="true" />
          <button type="button" className={mood === "board" ? "on" : ""} aria-pressed={mood === "board"} onClick={() => setMood("board")}>
            Boardroom
          </button>
        </div>

        <div key={mood} className="hero-swap">
          <p className="hero-sub">{m.sub}</p>
        </div>

        <div className="cta-row" key={`cta-${mood}`}>
          {m.ctas.map((c) =>
            c.ext ? (
              <a key={c.label} className={c.cls} href={c.href} target="_blank" rel="noopener noreferrer">
                {c.label}
              </a>
            ) : (
              <a key={c.label} className={c.cls} href={c.href}>
                {c.label}
              </a>
            )
          )}
        </div>
      </div>

      <span className="scroll-cue" aria-hidden="true">Scroll</span>
    </section>
  );
}
