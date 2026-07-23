import Image from "next/image";

const SUBSTACK = "https://substack.com/@cherylbaptiste";

const ESSAYS = [
  {
    title: "HR Has Become a Bad Word. And We Did That to Ourselves.",
    date: "June 22, 2026",
    excerpt:
      "Say you're in HR at a social event and watch what happens. There's a pause. A slight wince. Maybe a joke about watching what they say around you now. HR has become a punchline, a warning, a four-letter word dressed up in two letters — and honesty matters more to me than defensiveness about how we got here.",
  },
  {
    title: "We Don't Hate Our Jobs. We Hate What Our Jobs Have Become.",
    date: "June 15, 2026",
    excerpt:
      "I was on a call recently with an HR leader I deeply respect. She stepped down from a CHRO role to take a director position. Not because she failed. Somewhere in that conversation, she said it plainly: we don't hate our jobs. We hate what our jobs have become. I haven't stopped thinking about it since.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="hero">
        <div className="wrap">
          <div>
            <p className="eyebrow">Essays · Advisory · California</p>
            <h1>
              Saying the quiet part <em>out loud.</em>
            </h1>
            <p className="lede">
              I&apos;m Cheryl Baptiste. I spent 25 years inside organizations — from small
              nonprofits to Fortune 50 — learning how work actually works. Now I write about
              leadership, identity, and the distance between what organizations say and what
              their people live. Candidly, because that&apos;s the only way I know how.
            </p>
            <div className="cta-row">
              <a className="btn" href="#essays">Read the essays</a>
              <a
                className="btn quiet"
                href={SUBSTACK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe on Substack
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <Image
              src="/cheryl.png"
              alt="Cheryl Baptiste"
              width={680}
              height={1020}
              priority
            />
          </div>
        </div>
      </section>

      {/* ---------- quote band ---------- */}
      <section className="quote-band">
        <div className="wrap">
          <blockquote>
            We don&apos;t hate our jobs. <em>We hate what our jobs have become.</em>
          </blockquote>
          <p className="attribution">From the essays</p>
        </div>
      </section>

      {/* ---------- essays ---------- */}
      <section id="essays">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">The Essays</p>
            <h2>Honest writing about work — from someone who was in the room.</h2>
            <p>
              New essays land on Substack first. These are the ones people keep sending each
              other.
            </p>
          </div>
          <div className="essay-list">
            {ESSAYS.map((e) => (
              <a
                key={e.title}
                className="essay"
                href={SUBSTACK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="date">{e.date}</span>
                <h3>{e.title}</h3>
                <p>{e.excerpt}</p>
                <span className="go">Read on Substack →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- media ---------- */}
      <section className="tinted" id="media">
        <div className="wrap media-grid">
          <div>
            <p className="eyebrow">In conversation</p>
            <h2>The podcast: leaving corporate, on her own terms.</h2>
            <p>
              Cheryl joins the conversation to talk about walking away from corporate HR
              leadership, what she watched the profession become, and why she bet on
              herself — cued to the moment she comes in.
            </p>
          </div>
          <div className="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/SIgFALciS-0?start=302"
              title="Cheryl Baptiste podcast conversation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ---------- about ---------- */}
      <section id="about">
        <div className="wrap">
          <p className="eyebrow">About</p>
          <div className="about-body" style={{ marginTop: 18 }}>
            <p className="lead-in">
              I got into this work because someone saw something in me before I saw it in
              myself — and I&apos;ve spent my career trying to be that person for others.
            </p>
            <p>
              I&apos;m a grassroots, nontraditional HR leader. No formal HR training — a
              business degree with a minor in finance, magna cum laude, a master&apos;s in
              education, and everything else learned the real way: inside technology companies,
              sales floors, distribution centers, property management firms, and beauty brands.
              What I found everywhere I went is that strong leadership and sound people
              decisions transcend industry.
            </p>
            <p>
              Early in my career I decided my integrity was not for sale. Not for a title, not
              for job security, not to make a difficult moment easier. That decision has cost me
              a few times. I&apos;d make it again every time — because the person in the room
              who tells the truth about what&apos;s happening, regardless of which side
              you&apos;re on, is the person organizations actually need.
            </p>
            <p>
              In 2022 I founded FGT Solutions, and in 2025 I left corporate to run it full time.
              These days I split myself between advising leaders and writing essays about work,
              leadership, and the journey from employee to entrepreneur — the honest version.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- bridge to FGT ---------- */}
      <section className="bridge">
        <div className="wrap">
          <div>
            <p className="eyebrow">When it&apos;s your organization</p>
            <h2>The writing is free. The truth about your organization is a project.</h2>
            <p>
              My firm, FGT Solutions, partners with founders and senior leaders when growth,
              pressure, and people issues have outgrown the old way of doing things.
            </p>
          </div>
          <a
            className="btn on-dark"
            href="https://fgtsco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit FGT Solutions
          </a>
        </div>
      </section>

      {/* ---------- subscribe ---------- */}
      <section className="subscribe">
        <div className="wrap">
          <p className="eyebrow">Don&apos;t miss an essay</p>
          <h2>The conversation is too important to have alone.</h2>
          <p>
            New essays on work, leadership, and the truth in between — delivered by Substack,
            free. If you&apos;ve felt any of this, or you&apos;re watching it happen around you,
            come say so.
          </p>
          <a className="btn" href={SUBSTACK} target="_blank" rel="noopener noreferrer">
            Subscribe on Substack
          </a>
        </div>
      </section>
    </main>
  );
}
