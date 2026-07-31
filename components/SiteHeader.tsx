"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CameoLockup from "./CameoLockup";
import { scrollToTop } from "@/lib/scrollToTop";

const SUBSTACK = "https://substack.com/@cherylbaptiste";

export default function SiteHeader() {
  const pathname = usePathname();
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const scrolled = !atTop || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  // Already home: jump straight back to the top instead of reloading the page.
  // Anywhere else the link navigates normally and lands at the top.
  const onBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/" || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    close();
    scrollToTop();
  };

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}
    >
      <div className="bar">
        <nav className="side left" aria-label="Primary left">
          <a href="/#essays">Essays</a>
          <a href="/media">Media</a>
          <a href="/through-my-eyes">Gallery</a>
        </nav>

        <a
          className="center-brand"
          href="/"
          onClick={onBrandClick}
          aria-label="Cheryl Baptiste home"
        >
          <CameoLockup size={30} name spin onDark={false} />
        </a>

        <nav className="side right" aria-label="Primary right">
          <a href="/#about">About</a>
          <a href="https://fgtsco.com" target="_blank" rel="noopener noreferrer">
            FGT&nbsp;↗
          </a>
        </nav>

        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`menu-overlay${open ? " open" : ""}`} aria-hidden={!open}>
        <CameoLockup size={64} onDark spin />
        <div style={{ height: 18 }} />
        <a className="item" href="/#essays" onClick={close}>Essays</a>
        <a className="item" href="/media" onClick={close}>Media</a>
        <a className="item" href="/through-my-eyes" onClick={close}>Through my eyes</a>
        <a className="item" href="/#about" onClick={close}>About</a>
        <a className="item" href="https://fgtsco.com" target="_blank" rel="noopener noreferrer" onClick={close}>
          FGT Solutions ↗
        </a>
        <div className="small-row">
          <a className="btn on-dark" href={SUBSTACK} target="_blank" rel="noopener noreferrer">
            Subscribe on Substack
          </a>
        </div>
      </div>
    </header>
  );
}
