import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollFx from "@/components/ScrollFx";
import DirNav from "../DirNav";
import { ESSAYS, LANES, TICKER, SUBSTACK } from "../data";

export default function DirectionA() {
  return (
    <main className="dirpage dir-a">
      <ScrollFx />
      <DirNav current="a" />
      <Hero />

      <div className="a-rule bleed" aria-hidden="true" />

      <div className="ticker bleed" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1, 2].map((r) => (
            <span key={r} className="ticker-run">
              {TICKER.map((w) => (
                <span key={w} className="tick">
                  {w} <i className="tick-script">&amp;</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- essays: dense broadsheet index ---------- */}
      <section className="a-essays">
        <div className="wrap-wide">
          <header className="a-masthead">
            <p className="a-kicker">The Essays</p>
            <h2 className="a-giant">
              Honest writing
              <br />
              about work, and the
              <br />
              <em>journey around it.</em>
            </h2>
            <p className="a-standfirst">
              Two strands, one voice. New essays land on Substack first.
            </p>
          </header>

          {LANES.map((lane) => (
            <div className="a-lane" key={lane.key}>
              <div className="a-lane-head">
                <h3>{lane.label}</h3>
                <p>{lane.blurb}</p>
              </div>

              <ol className="a-index">
                {ESSAYS.filter((e) => e.lane === lane.key).map((e, i) => (
                  <li key={e.n}>
                    <a href={e.href} target="_blank" rel="noopener noreferrer">
                      <span className="a-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="a-body">
                        <span className="a-title">{e.title}</span>
                        <span className="a-excerpt">{e.excerpt}</span>
                      </span>
                      <span className="a-date">{e.date}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- quote: full bleed statement ---------- */}
      <section className="a-quote bleed">
        <div className="wrap-wide">
          <p className="a-quote-mark" aria-hidden="true">
            &ldquo;
          </p>
          <blockquote className="a-statement display" data-lines>
            <span className="line">
              <span className="line-inner">We don&apos;t hate our jobs.</span>
            </span>
            <span className="line">
              <span className="line-inner">We hate what our jobs</span>
            </span>
            <span className="line">
              <span className="line-inner">
                <em>have become.</em>
              </span>
            </span>
          </blockquote>
          <p className="a-attrib">From the essays</p>
        </div>
      </section>

      {/* ---------- media: bleed plate, caption in the margin ---------- */}
      <section className="a-media">
        <div className="a-plate bleed" data-parallax="6">
          <Image
            src="/img/lv-wide.jpg"
            alt="Cheryl Baptiste on set at The Leadership Voice"
            width={1800}
            height={1013}
            sizes="100vw"
          />
        </div>
        <div className="wrap-wide a-caption-row">
          <p className="a-kicker">For the record</p>
          <div className="a-caption">
            <p className="a-caption-lede">
              Recognition matters, but the work matters more. Here is one moment that captured
              both.
            </p>
            <p className="a-caption-note">
              On set at The Leadership Voice. Details to come.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- about: margin label, narrow measure ---------- */}
      <section className="a-about">
        <div className="wrap-wide a-about-grid">
          <p className="a-kicker sticky">About</p>
          <div className="a-prose">
            <p className="a-dropcap">
              I got into this work because someone saw something in me before I saw it in myself.
              I&apos;ve spent my career trying to be that person for others.
            </p>
            <p>
              I&apos;m a grassroots, nontraditional HR leader. No formal HR training. A business
              degree with a minor in finance, magna cum laude, a master&apos;s in education, and
              everything else learned the real way: inside technology companies, sales floors,
              distribution centers, property management firms, and beauty brands. What I found
              everywhere I went is that strong leadership and sound people decisions transcend
              industry.
            </p>
            <p>
              Early in my career, I decided my integrity was not for sale. Not for a title, not for
              job security, not to make a difficult moment easier. That decision has cost me a few
              times. It would be made again every time, because the person in the room who tells
              the truth about what&apos;s happening, regardless of which side they&apos;re on, is
              the person organizations actually need.
            </p>
            <p>
              In 2022, FGT Solutions was founded. In 2025, corporate life was left to run it full
              time. These days, the work is writing, speaking, and advising leaders one on one.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- closing ---------- */}
      <section className="a-closing bleed">
        <div className="wrap-wide">
          <p className="script-note big">don&apos;t miss an essay</p>
          <h2 className="a-giant on-ink">
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
