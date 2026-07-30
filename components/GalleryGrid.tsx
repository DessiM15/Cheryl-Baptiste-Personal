"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type Shot = { src: string; place: string; caption: string };

export default function GalleryGrid({ shots }: { shots: Shot[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const tiles = useRef<Array<HTMLButtonElement | null>>([]);
  const dialog = useRef<HTMLDivElement>(null);
  const returnTo = useRef<number | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    const i = returnTo.current;
    if (i != null) tiles.current[i]?.focus();
  }, []);

  const step = useCallback(
    (d: number) => {
      setOpen((cur) => (cur == null ? cur : (cur + d + shots.length) % shots.length));
    },
    [shots.length]
  );

  useEffect(() => {
    if (open == null) return;

    dialog.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    };

    // Lenis binds smooth scrolling to window, and body overflow does not stop
    // it. Swallow the wheel in the capture phase so the page cannot drift
    // behind the lightbox.
    const eat = (e: Event) => {
      e.preventDefault();
      e.stopImmediatePropagation();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", eat, { capture: true, passive: false });
    window.addEventListener("touchmove", eat, { capture: true, passive: false });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", eat, { capture: true });
      window.removeEventListener("touchmove", eat, { capture: true });
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const shot = open == null ? null : shots[open];

  return (
    <>
      <div className="gal-grid">
        {shots.map((s, i) => (
          <button
            key={s.src}
            ref={(el) => {
              tiles.current[i] = el;
            }}
            className="gshot gs-reveal"
            type="button"
            onClick={() => {
              returnTo.current = i;
              setOpen(i);
            }}
            aria-label={`Open photo: ${s.place}, ${s.caption}`}
          >
            <Image
              src={s.src}
              alt={`${s.place}: ${s.caption}`}
              width={1400}
              height={1400}
              sizes="(max-width: 520px) 92vw, (max-width: 880px) 46vw, 30vw"
            />
            <span className="gcap">
              <span className="place">{s.place}</span>
              <span className="cap">{s.caption}</span>
            </span>
          </button>
        ))}
      </div>

      {shot && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={`${shot.place}: ${shot.caption}`}
          tabIndex={-1}
          ref={dialog}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button className="lb-btn lb-close" type="button" onClick={close} aria-label="Close">
            &#10005;
          </button>
          <button
            className="lb-btn lb-prev"
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
          >
            &#8249;
          </button>

          <figure className="lb-fig">
            <Image
              src={shot.src}
              alt={`${shot.place}: ${shot.caption}`}
              width={1400}
              height={1400}
              sizes="(max-width: 900px) 92vw, 74vh"
              priority
            />
            <figcaption className="lb-cap">
              <span className="place">{shot.place}</span>
              <span className="cap">{shot.caption}</span>
              <span className="count">
                {open! + 1} of {shots.length}
              </span>
            </figcaption>
          </figure>

          <button
            className="lb-btn lb-next"
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
