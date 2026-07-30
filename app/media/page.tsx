import type { Metadata } from "next";
import ScrollFx from "@/components/ScrollFx";

const SUBSTACK = "https://substack.com/@cherylbaptiste";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Cheryl Baptiste on camera: the long conversation about leaving corporate, and the Executive of the Year segment from 2024.",
};

export default function Media() {
  return (
    <main className="cine media-page">
      <ScrollFx />

      <section className="mp-head">
        <div className="wrap-wide">
          <p className="b-kicker dark">Media</p>
          <h1 className="b-big">
            In her own words,
            <br />
            <em>with the camera running.</em>
          </h1>
          <p className="b-rail-sub">
            Longer than an essay and considerably less polished. This is what it sounds like when
            she is in the room.
          </p>
        </div>
      </section>

      {/* ---------- the long conversation ---------- */}
      <section className="mp-feature bleed">
        <div className="wrap-wide mp-grid">
          <div className="gs-reveal">
            <p className="b-kicker">In conversation</p>
            <h2 className="b-big">Leaving corporate, on her own terms.</h2>
            <p className="mp-note">
              Cheryl on walking away from corporate HR leadership, what she watched the profession
              become, and why she bet on herself. Candid, warm, and zero corporate polish.
            </p>
          </div>
          <div className="mp-player gs-reveal">
            <video controls playsInline preload="metadata" poster="/img/cheryl-talk-poster.jpg">
              <source src="/img/cheryl-talk.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ---------- executive of the year ---------- */}
      <section className="mp-second">
        <div className="wrap-wide mp-grid">
          <div className="gs-reveal">
            <p className="b-kicker dark">For the record</p>
            <h2 className="b-big">Executive of the Year, 2024.</h2>
            <p className="b-rail-sub">
              When Cheryl was named HR Executive of the Year during her corporate years at Murad,
              the cameras turned to her, her team, and her boss to ask what it is like to work with
              her. Cued to the moment her segment begins.
            </p>
          </div>
          <div className="video-frame gs-reveal">
            <iframe
              src="https://www.youtube-nocookie.com/embed/SIgFALciS-0?start=302"
              title="Cheryl Baptiste, HR Executive of the Year 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="b-cta bleed">
        <div className="wrap-wide">
          <p className="script-note big">the rest is written down</p>
          <h2 className="b-huge">
            The essays go
            <br />
            <em>further than the camera.</em>
          </h2>
          <a className="btn on-dark" href="/#essays">
            Read the essays
          </a>
          <a
            className="btn ghost-dark mp-second-cta"
            href={SUBSTACK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </main>
  );
}
