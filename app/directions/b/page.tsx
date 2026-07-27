import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollFx from "@/components/ScrollFx";
import DirNav from "../DirNav";
import { ESSAYS, LANES, SUBSTACK } from "../data";

export default function DirectionB() {
  return (
    <main className="dirpage dir-b">
      <ScrollFx />
      <DirNav current="b" />
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
      <section className="b-rail-section">
        <div className="wrap-wide b-rail-head">
          <div>
            <p className="b-kicker dark">The Essays</p>
            <h2 className="b-big">Two strands, one voice.</h2>
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
          {/* deliberately not .quote-arch — that class is capped at 360px on the live site */}
          <Image
            src="/img/lv-desk.jpg"
            alt=""
            width={1800}
            height={1013}
            sizes="100vw"
          />
        </div>
        <div className="b-quote-veil" aria-hidden="true" />
        <blockquote className="b-quote-words quote-words">
          {["We", "don't", "hate", "our", "jobs.", "We", "hate", "what", "our", "jobs", "have", "become."].map(
            (w, i) => (
              <span className="w" key={i}>
                {w}{" "}
              </span>
            )
          )}
        </blockquote>
      </section>

      {/* ---------- split: image holds one half edge to edge ---------- */}
      <section className="b-split bleed">
        <div className="b-split-media">
          <Image
            src="/img/cheryl-hero.jpg"
            alt="Cheryl Baptiste"
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
          <a className="btn on-dark" href="#">
            Read the full story
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
