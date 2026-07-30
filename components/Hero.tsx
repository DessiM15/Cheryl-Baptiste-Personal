"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const SUBSTACK = "https://substack.com/@cherylbaptiste";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const introDone = document.documentElement.dataset.intro === "done";
    // returning visitors skip the cameo overlay, so the type comes in almost immediately
    const delay = introDone ? 0.15 : 2.6;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay, defaults: { ease: "power4.out" } });
      tl.fromTo(".hero-sig", { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 1.1 })
        .fromTo(
          ".hero-plate",
          { autoAlpha: 0, y: 34, scale: 1.015 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.3, ease: "power3.out" },
          "-=0.85"
        )
        .fromTo(
          [".hero-lede", ".hero-quiet", ".hero-cta"],
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1 },
          "-=0.95"
        )
        .fromTo(".scroll-cue", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero-split">
      <div className="wrap hero-grid">
        <h1 className="hero-sig">Cheryl Baptiste</h1>

        <figure className="hero-plate">
          <Image
            src="/img/cheryl-pro.jpg"
            alt="Cheryl Baptiste, arms crossed, in a navy blazer"
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 900px) 86vw, 40vw"
          />
        </figure>

        <div className="hero-copy">
          <p className="hero-lede">
            Writing, speaking, and advisory work on leadership, work, and the personal journey
            around both.
          </p>
          <p className="hero-quiet">Saying the quiet part out loud.</p>

          <div className="cta-row hero-cta">
            <a className="btn" href="#essays">Read the essays</a>
            <a className="btn quiet" href={SUBSTACK} target="_blank" rel="noopener noreferrer">
              Subscribe on Substack
            </a>
          </div>
        </div>
      </div>

      <span className="scroll-cue" aria-hidden="true">Scroll</span>
    </section>
  );
}
