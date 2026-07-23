export default function Cameo({
  height = 44,
  onDark = false,
}: {
  height?: number;
  onDark?: boolean;
}) {
  const w = Math.round(height * (100 / 128));
  const ring = onDark ? "var(--on-deep)" : "var(--deep)";
  const c = onDark ? "var(--on-deep-soft)" : "var(--accent)";
  const b = onDark ? "var(--on-deep)" : "var(--deep)";
  return (
    <svg
      className="cameo-mark"
      width={w}
      height={height}
      viewBox="0 0 100 128"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="50" cy="64" rx="45" ry="59" fill="none" stroke={ring} strokeWidth="2.5" />
      <text
        x="26"
        y="80"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="44"
        fill={c}
      >
        C
      </text>
      <text
        x="52"
        y="80"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="44"
        fill={b}
      >
        B
      </text>
    </svg>
  );
}
