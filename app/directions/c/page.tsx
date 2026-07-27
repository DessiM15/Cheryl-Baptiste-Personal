import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollFx from "@/components/ScrollFx";
import DirNav from "../DirNav";
import { ESSAYS, LANES, SUBSTACK } from "../data";

export default function DirectionC() {
  return (
    <main className="dirpage dir-c">
      <ScrollFx />
      <DirNav current="c" />
      <Hero />

      {/* ---------- essays: ghost numerals, offset rows ---------- */}
      <section className="c-essays">
        <div className="wrap-wide">
          <header className="c-head">
            <p className="c-kicker">The Essays</p>
            <h2 className="c-big">
              Two strands,
              <br />
              <em>one voice.</em>
            </h2>
          </header>

          {LANES.map((lane, li) => (
            <div className={`c-lane${li % 2 ? " shift" : ""}`} key={lane.key}>
              <p className="c-lane-label">{lane.label}</p>
              {ESSAYS.filter((e) => e.lane === lane.key).map((e, i) => (
                <a
                  className={`c-row${i % 2 ? " offset" : ""}`}
                  key={e.n}
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="c-ghost" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="c-row-body">
                    <span className="c-row-title">{e.title}</span>
                    <span className="c-row-excerpt">{e.excerpt}</span>
                    <span className="c-row-date">{e.date}</span>
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- image breaks the seam between two blocks ---------- */}
      <section className="c-seam">
        <div className="wrap-wide c-seam-inner">
          <figure className="c-seam-fig arch-frame">
            <Image
              src="/img/lv-wide.jpg"
              alt="Cheryl Baptiste on set at The Leadership Voice"
              width={1800}
              height={1013}
              sizes="(max-width: 900px) 92vw, 62vw"
            />
          </figure>
          <div className="c-seam-copy">
            <p className="c-kicker light">For the record</p>
            <h3 className="c-mid">
              Recognition matters,
              <br />
              the work matters more.
            </h3>
            <p className="c-seam-note">On set at The Leadership Voice.</p>
          </div>
        </div>
      </section>

      {/* ---------- quote with an overlapping plate ---------- */}
      <section className="c-quote">
        <div className="wrap-wide c-quote-grid">
          <figure className="c-quote-plate arch-frame" data-parallax="8">
            <Image
              src="/img/lv-desk.jpg"
              alt=""
              width={1800}
              height={1013}
              sizes="(max-width: 900px) 60vw, 34vw"
            />
          </figure>
          <blockquote className="c-statement display" data-lines>
            <span className="line">
              <span className="line-inner">We don&apos;t hate</span>
            </span>
            <span className="line">
              <span className="line-inner">our jobs. We hate</span>
            </span>
            <span className="line">
              <span className="line-inner">what our jobs</span>
            </span>
            <span className="line">
              <span className="line-inner">
                <em>have become.</em>
              </span>
            </span>
          </blockquote>
          <p className="c-attrib">From the essays</p>
        </div>
      </section>

      {/* ---------- about: portrait overhangs the column ---------- */}
      <section className="c-about">
        <div className="wrap-wide c-about-grid">
          <figure className="c-about-fig arch-frame" data-parallax="5">
            <Image
              src="/img/cheryl-hero.jpg"
              alt="Cheryl Baptiste"
              width={1600}
              height={2000}
              sizes="(max-width: 900px) 70vw, 32vw"
            />
          </figure>
          <div className="c-about-copy">
            <p className="c-kicker">About</p>
            <h3 className="c-mid">
              Someone saw something in me
              <br />
              <em>before I saw it in myself.</em>
            </h3>
            <p>
              I&apos;ve spent my career trying to be that person for others. Grassroots,
              nontraditional HR leader. No formal HR training, and everything else learned the real
              way: inside technology companies, sales floors, distribution centers, property
              management firms, and beauty brands.
            </p>
            <p>
              Early in my career, I decided my integrity was not for sale. Not for a title, not for
              job security, not to make a difficult moment easier. That decision has cost me a few
              times. It would be made again every time.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- closing ---------- */}
      <section className="c-closing">
        <div className="wrap-wide">
          <p className="script-note big">don&apos;t miss an essay</p>
          <h2 className="c-big on-ink">
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
