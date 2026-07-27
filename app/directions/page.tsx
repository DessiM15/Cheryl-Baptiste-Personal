import Link from "next/link";

const CARDS = [
  {
    key: "a",
    tag: "Direction A",
    name: "Broadsheet",
    blurb:
      "Typographic energy. Huge serif statements against a dense, hairline-ruled essay index. Full-bleed rules and plates, a drop cap, very little motion. The loudest thing on the page is the type.",
  },
  {
    key: "b",
    tag: "Direction B",
    name: "Cinematic",
    blurb:
      "Media energy. Edge to edge photo panels with the headline sitting on the image, a horizontal essay rail you scroll sideways, a pinned quote over a darkened still, and a half-and-half split scene.",
  },
  {
    key: "c",
    tag: "Direction C",
    name: "Layered",
    blurb:
      "Compositional energy. Oversized ghost numerals behind the essay rows, offset and shifted lanes, and images that break the grid and straddle the seam between the cream and ink blocks.",
  },
];

export default function DirectionsIndex() {
  return (
    <main className="dirpage">
      <div className="wrap-wide dirindex">
        <h1>Three ways to give the site a pulse.</h1>
        <p className="lede">
          Same content in all three, same hero, same Ink &amp; Bone palette. The only thing that
          changes is how much energy the layout carries and where it comes from. Scroll each one,
          then pick the level. The switcher at the bottom moves between them.
        </p>

        <div className="dircards">
          {CARDS.map((c) => (
            <Link className="dircard" key={c.key} href={`/directions/${c.key}`}>
              <p className="tag">{c.tag}</p>
              <h2>{c.name}</h2>
              <p>{c.blurb}</p>
              <span className="go">Scroll it &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
