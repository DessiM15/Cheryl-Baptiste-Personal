"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function ScrollFx() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.classList.add("fx-off");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // native anchor jumps fight Lenis — route them through it
    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href^="/#"], a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.replace("/", "");
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -70 });
      }
    };
    document.addEventListener("click", onAnchor);

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 760;

      // hero media slow zoom + content drift as you leave the hero
      const heroMedia = document.querySelector(".hero-scene .hero-media");
      if (heroMedia) {
        gsap.to(heroMedia, {
          scale: 1.14,
          ease: "none",
          scrollTrigger: { trigger: ".hero-scene", start: "top top", end: "bottom top", scrub: true },
        });
      }
      const heroStage = document.querySelectorAll(".hero-stage, .hero-foot, .hero-cameo");
      if (heroStage.length) {
        gsap.to(heroStage, {
          yPercent: -10,
          autoAlpha: 0.2,
          ease: "none",
          scrollTrigger: { trigger: ".hero-scene", start: "top top", end: "88% top", scrub: true },
        });
      }

      // generic parallax layers
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax || 12) * (isMobile ? 0.5 : 1);
        gsap.fromTo(
          el,
          { yPercent: speed },
          {
            yPercent: -speed,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      // arch frames unveil from the bottom
      document.querySelectorAll<HTMLElement>(".arch-frame").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%" },
          }
        );
      });

      // big statements rise line by line
      document.querySelectorAll<HTMLElement>("[data-lines]").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll(".line-inner"),
          { yPercent: 108 },
          {
            yPercent: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });

      // pinned quote scene: words surface one by one as you scroll through
      const quoteWords = document.querySelectorAll(".quote-words .w");
      if (quoteWords.length && !isMobile) {
        const qtl = gsap.timeline({
          scrollTrigger: {
            trigger: ".quote-scene",
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: true,
            anticipatePin: 1,
          },
        });
        qtl
          .fromTo(quoteWords, { opacity: 0.14 }, { opacity: 1, stagger: 0.09, ease: "none" })
          .fromTo(".quote-arch", { yPercent: 7, scale: 1.05 }, { yPercent: -4, scale: 1, ease: "none" }, 0);
      }

      // soft rise for everything tagged gs-reveal
      ScrollTrigger.batch(".gs-reveal", {
        start: "top 86%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 44, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1, stagger: 0.09, ease: "power3.out", overwrite: true }
          ),
      });
      gsap.set(".gs-reveal", { autoAlpha: 0 });
    });

    return () => {
      document.removeEventListener("click", onAnchor);
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
