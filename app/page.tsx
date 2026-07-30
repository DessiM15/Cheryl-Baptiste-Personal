import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollFx from "@/components/ScrollFx";
import { ESSAYS, LANES, SUBSTACK } from "./data";

const QUOTE = [
  "We", "don't", "hate", "our", "jobs.",
  "We", "hate", "what", "our", "jobs", "have", "become.",
];

export default function Home() {
  return (
    <main className="cine">
      <ScrollFx />
      <Hero />

      {/* ---------- full bleed panel: type over media ---------- */}
      <section className="b-panel bleed">
        <Image
          className="b-panel-img"
          src="/img/lv-wide.jpg"
          alt="Cheryl Baptiste on set at The Leadership Voice"
          width={1800}
          height={1013}
          sizes="100vw"
        />
        <div className="b-panel-veil" aria-hidden="true" />
        <div className="b-panel-copy">
          <p className="b-kicker">For the record</p>
          <h2 className="b-huge">
            In the room,
            <br />
            <em>on the record.</em>
          </h2>
          <p className="b-panel-note">On set at The Leadership Voice.</p>
        </div>
      </section>

      {/* ---------- horizontal essay rail ---------- */}
      <section id="essays" className="b-rail-section">
        <div className="wrap-wide b-rail-head">
          <div>
            <p className="b-kicker dark">The Essays</p>
            <h2 className="b-big">
              Honest writing
              <br />
              about work, and the
              <br />
              <em>journey around it.</em>
            </h2>
            <p className="b-rail-sub">
              Two strands, one voice. New essays land on Substack first.
            </p>
          </div>
          <p className="b-rail-hint">Scroll sideways</p>
        </div>

        <div className="b-rail">
          {ESSAYS.map((e) => {
            const lane = LANES.find((l) => l.key === e.lane)!;
            return (
              <a
                className="b-card"
                key={e.n}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="b-card-lane">{lane.label}</span>
                <span className="b-card-num">{e.n}</span>
                <span className="b-card-title">{e.title}</span>
                <span className="b-card-excerpt">{e.excerpt}</span>
                <span className="b-card-date">{e.date}</span>
              </a>
            );
          })}
          <div className="b-rail-end" aria-hidden="true" />
        </div>
      </section>

      {/* ---------- pinned quote over dark bleed ---------- */}
      <section className="b-quote quote-scene bleed">
        <div className="b-quote-media" aria-hidden="true">
          {/* deliberately not .quote-arch — that class is capped at 360px */}
          <video
            className="b-quote-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/img/quote-poster.jpg"
          >
            <source src="/img/quote-loop.mp4" type="video/mp4" />
          </video>
          {/* the still carries small screens and reduced motion */}
          <Image
            className="b-quote-still"
            src="/img/quote-poster.jpg"
            alt=""
            width={1400}
            height={1038}
            sizes="100vw"
          />
        </div>
        <div className="b-quote-veil" aria-hidden="true" />
        <blockquote className="b-quote-words quote-words">
          {QUOTE.map((w, i) => (
            <span className="w" key={i}>
              {w}{" "}
            </span>
          ))}
        </blockquote>
      </section>

      {/* ---------- split: image holds one half edge to edge ---------- */}
      <section id="about" className="b-split bleed">
        <div className="b-split-media">
          <Image
            src="/img/about-blue.jpg"
            alt="Cheryl Baptiste at work, mid thought, in a blue dress"
            width={1600}
            height={2000}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="b-split-copy">
          <p className="b-kicker">About</p>
          <h2 className="b-big">
            Someone saw something in me before I saw it in myself.
          </h2>
          <p>
            I&apos;ve spent my career trying to be that person for others. Grassroots,
            nontraditional, no formal HR training, and everything else learned the real way.
          </p>
          <p>
            Early in my career I decided my integrity was not for sale. That decision has cost me a
            few times. It would be made again every time.
          </p>
          <a className="btn on-dark" href="#essays">
            Read the essays
          </a>
        </div>
      </section>

      {/* ---------- closing panel ---------- */}
      <section className="b-cta bleed">
        <div className="wrap-wide">
          <p className="script-note big">don&apos;t miss an essay</p>
          <h2 className="b-huge">
            The conversation is too
            <br />
            <em>important to have alone.</em>
          </h2>
          <a className="btn on-dark" href={SUBSTACK} target="_blank" rel="noopener noreferrer">
            Subscribe on Substack
          </a>
        </div>
      </section>
    </main>
  );
}
