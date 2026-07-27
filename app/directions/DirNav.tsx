import Link from "next/link";

const DIRS = [
  { key: "a", label: "A · Broadsheet" },
  { key: "b", label: "B · Cinematic" },
  { key: "c", label: "C · Layered" },
];

export default function DirNav({ current }: { current: string }) {
  return (
    <nav className="dirnav" aria-label="Visual directions">
      <Link href="/directions" className="dirnav-home">
        Directions
      </Link>
      {DIRS.map((d) => (
        <Link
          key={d.key}
          href={`/directions/${d.key}`}
          className={`dirnav-item${current === d.key ? " on" : ""}`}
          aria-current={current === d.key ? "page" : undefined}
        >
          {d.label}
        </Link>
      ))}
    </nav>
  );
}
