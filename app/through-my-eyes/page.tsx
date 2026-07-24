import type { Metadata } from "next";
import Image from "next/image";
import ScrollFx from "@/components/ScrollFx";

export const metadata: Metadata = {
  title: "Through my eyes",
  description:
    "Places the work has taken Cheryl Baptiste: panels, boardrooms, and conference floors, in her own snapshots.",
};

type Shot = {
  src: string;
  caption: string;
  place: string;
  w: number;
  h: number;
  arch?: boolean;
  span?: string;
};

const SHOTS: Shot[] = [
  {
    src: "/img/gallery/g-ai-panel.jpg",
    place: "On stage",
    caption: "A panel on HR leadership in the age of AI",
    w: 1400,
    h: 1050,
    arch: true,
    span: "tall",
  },
  {
    src: "/img/gallery/g-ucla.jpg",
    place: "UCLA Anderson School of Business",
    caption: "DEI panel, in conversation",
    w: 1400,
    h: 1050,
    span: "wide",
  },
  {
    src: "/img/gallery/g-vivatech.jpg",
    place: "VivaTech · Paris",
    caption: "2025",
    w: 1400,
    h: 1867,
    arch: true,
    span: "tall",
  },
  {
    src: "/img/gallery/g-mcf-2.jpg",
    place: "MCF strategy meeting",
    caption: "The team",
    w: 1400,
    h: 1050,
    span: "wide",
  },
  {
    src: "/img/gallery/g-conference.jpg",
    place: "On the conference floor",
    caption: "Between sessions",
    w: 1400,
    h: 1050,
  },
  {
    src: "/img/gallery/g-mcf-1.jpg",
    place: "MCF strategy meeting",
    caption: "An evening with the women in the work",
    w: 1400,
    h: 1050,
  },
  {
    src: "/img/gallery/g-dei-detail.jpg",
    place: "DEI panel",
    caption: "Backstage",
    w: 1400,
    h: 1867,
    arch: true,
    span: "tall",
  },
];

export default function ThroughMyEyes() {
  return (
    <main className="gallery-page">
      <ScrollFx />
      <section className="gallery-head">
        <div className="wrap">
          <p className="script-note gs-reveal">places the work has taken me</p>
          <h1 className="display" data-lines>
            <span className="line"><span className="line-inner">Through my eyes.</span></span>
          </h1>
          <p className="sec-sub gs-reveal">
            Panels, boardrooms, conference floors. The rooms this work opens, as I saw them.
          </p>
        </div>
      </section>

      <section className="gallery-grid-wrap">
        <div className="wrap">
          <div className="gallery-grid">
            {SHOTS.map((s) => (
              <figure key={s.src} className={`shot${s.span ? ` ${s.span}` : ""} gs-reveal`}>
                <div className={s.arch ? "arch-frame" : "shot-frame"}>
                  <Image
                    src={s.src}
                    alt={`${s.place}: ${s.caption}`}
                    width={s.w}
                    height={s.h}
                    sizes="(max-width: 700px) 92vw, 44vw"
                  />
                </div>
                <figcaption>
                  <span className="place">{s.place}</span>
                  <span className="cap">{s.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="block-espresso gallery-close">
        <div className="wrap">
          <p className="script-note gs-reveal">the conversation continues</p>
          <div className="gs-reveal">
            <a className="btn on-dark" href="/#essays">Read the essays</a>
          </div>
        </div>
      </section>
    </main>
  );
}
