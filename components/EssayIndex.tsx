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

    const move = (e: MouseEvent) => {
      xTo(e.clientX + 28);
      yTo(e.clientY - 130);
    };
    const container = wrap.current;
    const enterRow = (src: string) => () => {
      if (img.current && img.current.getAttribute("src") !== src) img.current.src = src;
      gsap.to(el, { autoAlpha: 1, scale: 1, duration: 0.45, ease: "power3.out" });
    };
    const leave = () => gsap.to(el, { autoAlpha: 0, scale: 0.92, duration: 0.35, ease: "power3.in" });

    container.addEventListener("mousemove", move);
    container.addEventListener("mouseleave", leave);
    // scrolling moves the page under a stationary cursor without firing
    // mouseleave — hide the peek on any scroll so it can't strand on screen
    window.addEventListener("scroll", leave, { passive: true });
    const rows = container.querySelectorAll<HTMLAnchorElement>(".essay-row");
    const handlers: Array<[HTMLAnchorElement, () => void]> = [];
    rows.forEach((row) => {
      const fn = enterRow(row.dataset.peek || "");
      row.addEventListener("mouseenter", fn);
      handlers.push([row, fn]);
    });
    return () => {
      container.removeEventListener("mousemove", move);
      container.removeEventListener("mouseleave", leave);
      window.removeEventListener("scroll", leave);
      handlers.forEach(([row, fn]) => row.removeEventListener("mouseenter", fn));
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
