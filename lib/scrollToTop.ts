/**
 * Jump to the top of the page instantly.
 *
 * ScrollFx owns the Lenis instance, and Lenis keeps its own scroll value, so a
 * plain window.scrollTo alone would desync it and snap back on the next frame.
 * The event lets ScrollFx drive it.
 *
 * The direct scroll below covers the case where ScrollFx bailed out under
 * prefers-reduced-motion. There, two things fight it:
 *
 * 1. `html { scroll-behavior: smooth }` is set globally, so a plain scrollTo
 *    animates the whole way up. An explicit behaviour overrides the CSS.
 * 2. A smooth scroll already in flight (someone clicked a nav anchor a moment
 *    before hitting the logo) is NOT aborted by that jump; it resumes and
 *    drifts the page back down. So the top is held briefly and re-asserted.
 */
const HOLD_FRAMES = 40; // ~650ms, longer than a native smooth scroll

export function scrollToTop() {
  window.dispatchEvent(new CustomEvent("cb:scroll-top"));

  const html = document.documentElement;
  const previous = html.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  void html.offsetHeight; // flush the style change before scrolling

  const jump = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    } catch {
      window.scrollTo(0, 0);
    }
  };
  jump();

  let frames = 0;
  const release = () => {
    html.style.scrollBehavior = previous;
    window.removeEventListener("wheel", release);
    window.removeEventListener("touchstart", release);
    window.removeEventListener("keydown", release);
  };
  // Let a deliberate scroll by the visitor win immediately
  window.addEventListener("wheel", release, { passive: true, once: true });
  window.addEventListener("touchstart", release, { passive: true, once: true });
  window.addEventListener("keydown", release, { once: true });

  const hold = () => {
    if (html.style.scrollBehavior !== "auto") return; // already released
    if (window.scrollY !== 0) jump();
    if (++frames < HOLD_FRAMES) requestAnimationFrame(hold);
    else release();
  };
  requestAnimationFrame(hold);

  // Drop a lingering "#essays" style hash so the URL matches where we are
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}
