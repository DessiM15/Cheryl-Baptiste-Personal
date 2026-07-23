export default function CameoLockup({
  size = 120,
  name = true,
  onDark = false,
  spin = true,
}: {
  size?: number;
  name?: boolean;
  onDark?: boolean;
  spin?: boolean;
}) {
  const h = Math.round(size * 1.28);
  return (
    <span className={`lockup${onDark ? " on-dark" : ""}`}>
      <span className="cameo-box" style={{ width: size, height: h }}>
        <svg
          className={spin ? "ring spin" : "ring"}
          viewBox="0 0 100 128"
          aria-hidden="true"
          focusable="false"
        >
          <ellipse cx="50" cy="64" rx="45" ry="59" fill="none" strokeWidth="1.75" />
        </svg>
        <span className="cb" style={{ fontSize: size * 0.42 }}>
          <b className="c">C</b>
          <b className="b">B</b>
        </span>
      </span>
      {name && (
        <span className="lockup-name" style={{ fontSize: Math.max(9, size * 0.085), marginTop: size * 0.18 }}>
          CHERYL BAPTISTE
        </span>
      )}
    </span>
  );
}
