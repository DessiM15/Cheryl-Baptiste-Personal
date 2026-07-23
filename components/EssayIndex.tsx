"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const SUBSTACK = "https://substack.com/@cherylbaptiste";

export type Essay = {
  n: string;
  title: string;
  date: string;
  excerpt: string;
  peek: string;
};

export default function EssayIndex({ essays }: { essays: Essay[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const peek = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced || !wrap.current || !peek.current) return;

    const el = peek.current;
    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
    let visible = false;

    const hide = () => {
      if (!visible) return;
      visible = false;
      gsap.to(el, { autoAlpha: 0, scale: 0.92, duration: 0.3, ease: "power3.in", overwrite: true });
    };

    // Everything is driven by real pointer movement. Hover state that appears
    // because the page scrolled under a stationary cursor never shows the peek,
    // and the peek can never appear at a stale position.
    const move = (e: MouseEvent) => {
      const row = (e.target as HTMLElement).closest?.(".essay-row") as HTMLElement | null;
      if (!row) {
        hide();
        return;
      }
      const src = row.dataset.peek || "";
      if (img.current && img.current.getAttribute("src") !== src) img.current.src = src;
      if (!visible) {
        visible = true;
        gsap.set(el, { x: e.clientX + 28, y: e.clientY - 130 });
        gsap.to(el, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "power3.out", overwrite: true });
      } else {
        xTo(e.clientX + 28);
        yTo(e.clientY - 130);
      }
    };

    const container = wrap.current;
    container.addEventListener("mousemove", move);
    container.addEventListener("mouseleave", hide);
    window.addEventListener("scroll", hide, { passive: true });
    return () => {
      container.removeEventListener("mousemove", move);
      container.removeEventListener("mouseleave", hide);
      window.removeEventListener("scroll", hide);
    };
  }, []);

  return (
    <div ref={wrap}>
      <div className="essay-index">
        {essays.map((e) => (
          <a
            key={e.n}
            className="essay-row gs-reveal"
            data-peek={e.peek}
            href={SUBSTACK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="num">{e.n}</span>
            <span className="body">
              <span className="date">{e.date}</span>
              <h3>{e.title}</h3>
              <p>{e.excerpt}</p>
            </span>
            <span className="go" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
      <div ref={peek} className="essay-peek" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={img} alt="" src={essays[0]?.peek} />
      </div>
    </div>
  );
}
