const SUBSTACK = "https://substack.com/@cherylbaptiste";

export type Essay = {
  n: string;
  title: string;
  date: string;
  excerpt: string;
};

export default function EssayIndex({ essays }: { essays: Essay[] }) {
  return (
    <div className="essay-index">
      {essays.map((e) => (
        <a
          key={e.n}
          className="essay-row gs-reveal"
          href={SUBSTACK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="num">{e.n}</span>
          <span className="body">
            <span className="date">{e.date}</span>
            <h3>{e.title}</h3>
            <p>{e.excerpt}</p>
          </span>
          <span className="go" aria-hidden="true">→</span>
        </a>
      ))}
    </div>
  );
}
