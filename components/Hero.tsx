"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import CameoLockup from "./CameoLockup";

const SUBSTACK = "https://substack.com/@cherylbaptiste";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const [coldOpen, setColdOpen] = useState<"off" | "play" | "fade">("off");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const introDone = document.documentElement.dataset.intro === "done";
    const wantsOpen = !reduced && !introDone && window.innerWidth > 700;
    if (wantsOpen) {
      setColdOpen("play");
      const t1 = setTimeout(() => setColdOpen("fade"), 3600);
      const t2 = setTimeout(() => setColdOpen("off"), 5100);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const introDone = document.documentElement.dataset.intro === "done";
    const wantsOpen = !introDone && window.innerWidth > 700;
    // cold-open sessions hold the type reveal until her clip starts melting away
    const delay = introDone ? 0.15 : wantsOpen ? 3.9 : 2.6;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay, defaults: { ease: "power4.out" } });
      tl.fromTo(".hero-cameo", { autoAlpha: 0, y: -18 }, { autoAlpha: 1, y: 0, duration: 0.9 })
        .fromTo(".hero-portrait", { autoAlpha: 0, yPercent: 9, scale: 1.02 }, { autoAlpha: 1, yPercent: 0, scale: 1, duration: 1.5, ease: "power3.out" }, "-=0.4")
        .fromTo(".hero-sig", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1.2 }, "-=0.8")
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

      {coldOpen !== "off" && (
        <div className={`hero-open${coldOpen === "fade" ? " fading" : ""}`} aria-hidden="true">
          <video autoPlay muted playsInline preload="auto">
            <source src="/img/hero-open.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div className="hero-cameo" aria-hidden="true">
        <CameoLockup size={54} name={false} spin onDark />
      </div>

      <span className="side-word left" aria-hidden="true">Work &amp; Leadership</span>
      <span className="side-word right" aria-hidden="true">The Truth Between</span>

      <div className="hero-stage" aria-hidden="true">
        <div className="hero-portrait">
          <Image
            src="/cheryl-color.png"
            alt=""
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 700px) 88vw, 46vh"
          />
        </div>
        <span className="hero-sig">Cheryl Baptiste</span>
      </div>
      <h1 className="sr-only">Cheryl Baptiste: writing, speaking, advisory. Saying the quiet part out loud.</h1>

      <div className="hero-foot">
        <div className="hero-swap">
          <p className="hero-tag" aria-hidden="true">saying the quiet part out loud</p>
          <p className="hero-sub">Writing · Speaking · Advisory</p>
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
