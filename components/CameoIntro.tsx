"use client";

import { useEffect, useRef } from "react";

/**
 * Full-screen cameo entrance. Plays once per browser session:
 * an inline script in layout stamps data-intro="done" before paint
 * on repeat visits, so this overlay never flashes for returning readers.
 */
export default function CameoIntro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      sessionStorage.setItem("cb-intro", "seen");
    } catch {}
    const el = ref.current;
    if (!el) return;
    el.classList.add("leaving");
    const t = setTimeout(() => {
      document.documentElement.dataset.intro = "done";
    }, 3100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="intro-overlay" ref={ref} aria-hidden="true">
      <div className="intro-cameo">
        <div className="ring3d">
          <svg viewBox="0 0 130 168">
            <ellipse
              cx="65"
              cy="84"
              rx="58"
              ry="77"
              fill="none"
              stroke="var(--on-deep)"
              strokeWidth="1.75"
            />
          </svg>
        </div>
        <div className="intro-letters">
          <b className="c">C</b>
          <b className="b">B</b>
        </div>
        <div className="intro-word">CHERYL&nbsp;&nbsp;BAPTISTE</div>
      </div>
    </div>
  );
}
