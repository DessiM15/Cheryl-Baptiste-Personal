import type { Metadata } from "next";
import Image from "next/image";
import ScrollFx from "@/components/ScrollFx";
import GalleryGrid, { type Shot } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Through my eyes",
  description:
    "Places the work has taken Cheryl Baptiste: panels, boardrooms, studios, and conference floors, in her own snapshots.",
};

// Every tile is a square cut from the original photo, not from an earlier crop.
// Order alternates bright and dark so the grid has a rhythm. The on stage shot
// sits last on purpose: the panel above the grid is the same photograph, so
// opening with it read as a repeat.
const SHOTS: Shot[] = [
  {
    src: "/img/gallery/g-lv-monitor.jpg",
    place: "The Leadership Voice",
    caption: "Behind the camera",
  },
  {
    src: "/img/gallery/g-ucla.jpg",
    place: "UCLA Anderson School of Business",
    caption: "DEI panel, in conversation",
  },
  {
    src: "/img/gallery/g-vivatech.jpg",
    place: "VivaTech · Paris",
    caption: "2025",
  },
  {
    src: "/img/gallery/g-mcf-2.jpg",
    place: "MCF strategy meeting",
    caption: "The team",
  },
  {
    src: "/img/gallery/g-conference.jpg",
    place: "On the conference floor",
    caption: "Between sessions",
  },
  {
    src: "/img/gallery/g-dei-detail.jpg",
    place: "DEI panel",
    caption: "Backstage",
  },
  {
    src: "/img/gallery/g-desk.jpg",
    place: "Between the rooms",
    caption: "Most of the work looks like this",
  },
  {
    src: "/img/gallery/g-mcf-1.jpg",
    place: "MCF strategy meeting",
    caption: "An evening with the women in the work",
  },
  {
    src: "/img/gallery/g-ai-panel.jpg",
    place: "On stage",
    caption: "A panel on HR leadership in the age of AI",
  },
];

export default function ThroughMyEyes() {
  return (
    <main className="cine gallery-page">
      <ScrollFx />
      <section className="b-panel bleed gallery-panel">
        <Image
          className="b-panel-img"
          src="/img/panel.jpg"
          alt="Cheryl Baptiste speaking on a panel"
          width={1400}
          height={1050}
          sizes="100vw"
          priority
        />
        <div className="b-panel-veil" aria-hidden="true" />
        <div className="b-panel-copy">
          <p className="b-kicker">Through my eyes</p>
          <h1 className="b-huge">
            Places the work
            <br />
            <em>has taken me.</em>
          </h1>
          <p className="b-panel-note">
            Panels, boardrooms, conference floors. The rooms this work opens, as I saw them.
          </p>
        </div>
      </section>

      <section className="gallery-grid-wrap">
        <div className="wrap-wide">
          <GalleryGrid shots={SHOTS} />
        </div>
      </section>

      <section className="b-cta bleed gallery-close">
        <div className="wrap-wide">
          <p className="script-note big">the conversation continues</p>
          <h2 className="b-huge">
            The rooms are the setting.
            <br />
            <em>The writing is the point.</em>
          </h2>
          <a className="btn on-dark" href="/#essays">Read the essays</a>
        </div>
      </section>
    </main>
  );
}
