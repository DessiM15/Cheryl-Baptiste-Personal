"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import CameoLockup from "./CameoLockup";

const SUBSTACK = "https://substack.com/@cherylbaptiste";

export default function Hero() {
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
          [".hero-swap", ".hero-foot .cta-row", ".scroll-cue"],
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09 },
          "-=0.7"
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero-scene">
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
        <span className="hero-script">saying the quiet part out loud</span>
      </div>
      <h1 className="sr-only">Cheryl Baptiste — Essays · Conversations · California</h1>

      <div className="hero-foot">
        <div className="hero-swap">
          <p className="hero-sub">Essays · Conversations · California</p>
        </div>

        <div className="cta-row">
          <a className="btn on-dark" href="#essays">Read the essays</a>
          <a className="btn ghost-dark" href={SUBSTACK} target="_blank" rel="noopener noreferrer">
            Subscribe
          </a>
        </div>
      </div>

      <span className="scroll-cue" aria-hidden="true">Scroll</span>
    </section>
  );
}
