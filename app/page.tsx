import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollFx from "@/components/ScrollFx";
import EssayIndex from "@/components/EssayIndex";

const SUBSTACK = "https://substack.com/@cherylbaptiste";

const ESSAYS = [
  {
    n: "01",
    title: "HR Has Become a Bad Word. And We Did That to Ourselves.",
    date: "June 22, 2026",
    excerpt:
      "Say you're in HR at a social event and watch what happens. There's a pause. A slight wince. Maybe a joke about watching what they say around you now. HR has become a punchline, a warning, a four-letter word dressed up in two letters — and honesty matters more to me than defensiveness about how we got here.",
    peek: "/img/plaster-warm.jpg",
  },
  {
    n: "02",
    title: "We Don't Hate Our Jobs. We Hate What Our Jobs Have Become.",
    date: "June 15, 2026",
    excerpt:
      "I was on a call recently with an HR leader I deeply respect. She stepped down from a CHRO role to take a director position. Not because she failed. Somewhere in that conversation, she said it plainly: we don't hate our jobs. We hate what our jobs have become. I haven't stopped thinking about it since.",
    peek: "/img/arch-cream.jpg",
  },
];

const QUOTE_A = ["We", "don't", "hate", "our", "jobs."];
const QUOTE_B = ["We", "hate", "what", "our", "jobs", "have", "become."];

const TICKER = ["Work", "Leadership", "Identity", "Ambition", "Honesty"];

function Ticker() {
  const run = TICKER.map((w) => (
    <span key={w} className="tick">
      {w} <i className="tick-script">&amp;</i>
    </span>
  ));
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {run}
        {run}
        {run}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollFx />
      <Hero />

      <Ticker />

      {/* ---------- essays · cream ---------- */}
      <section id="essays" className="block-cream essays-block">
        <div className="wrap">
          <div className="essays-head">
            <div>
              <p className="eyebrow gs-reveal">The Essays</p>
              <h2 className="display" data-lines>
                <span className="line"><span className="line-inner">Honest writing about work —</span></span>
                <span className="line"><span className="line-inner">from someone <em>in the room.</em></span></span>
              </h2>
              <p className="sec-sub gs-reveal">
                New essays land on Substack first. These are the ones people keep sending each other.
              </p>
            </div>
            <div className="arch-frame essays-arch" data-parallax="6">
              <Image src="/img/panel.jpg" alt="Cheryl Baptiste speaking on a panel" width={1400} height={1050} sizes="(max-width: 820px) 60vw, 320px" />
            </div>
          </div>

          <EssayIndex essays={ESSAYS} />
          <div className="essays-cta gs-reveal">
            <a className="btn quiet" href={SUBSTACK} target="_blank" rel="noopener noreferrer">
              Read all essays on Substack
            </a>
          </div>
        </div>
      </section>

      {/* ---------- quote · olive ---------- */}
      <section className="block-olive quote-scene">
        <div className="wrap quote-grid">
          <div className="arch-frame quote-arch">
            <video autoPlay muted loop playsInline preload="metadata" aria-label="Cheryl Baptiste, in conversation">
              <source src="/img/cheryl-loop.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <p className="script-note gs-reveal">the quiet part</p>
            <blockquote className="display quote-words">
              {QUOTE_A.map((w, i) => (
                <span key={`a${i}`} className="w">{w}</span>
              ))}{" "}
              <em>
                {QUOTE_B.map((w, i) => (
                  <span key={`b${i}`} className="w">{w}</span>
                ))}
              </em>
            </blockquote>
            <p className="attribution gs-reveal">From the essays</p>
          </div>
        </div>
      </section>

      {/* ---------- media · espresso ---------- */}
      <section className="block-espresso" id="media">
        <div className="wrap media-grid">
          <div className="gs-reveal">
            <p className="script-note">in her words</p>
            <h2 className="display-sm">Hear it from Cheryl directly.</h2>
            <p className="on-dark-soft">
              Three minutes of exactly what it sounds like to work with her — candid, warm, and
              zero corporate polish.
            </p>
          </div>
          <div className="talk-frame gs-reveal">
            <video controls playsInline preload="metadata" poster="/img/cheryl-talk-poster.jpg">
              <source src="/img/cheryl-talk.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="wrap media-grid media-secondary">
          <div className="gs-reveal">
            <p className="eyebrow" style={{ color: "var(--on-deep-soft)" }}>In conversation</p>
            <h2 className="display-sm">The podcast: leaving corporate, on her own terms.</h2>
            <p className="on-dark-soft">
              Cheryl joins the conversation to talk about walking away from corporate HR leadership,
              what she watched the profession become, and why she bet on herself — cued to the
              moment she comes in.
            </p>
          </div>
          <div className="video-frame gs-reveal">
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

      {/* ---------- about · cream ---------- */}
      <section id="about" className="block-cream">
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow gs-reveal">About</p>
            <div className="about-body">
              <p className="lead-in gs-reveal">
                I got into this work because someone saw something in me before I saw it in
                myself — and I&apos;ve spent my career trying to be that person for others.
              </p>
              <p className="gs-reveal">
                I&apos;m a grassroots, nontraditional HR leader. No formal HR training — a business
                degree with a minor in finance, magna cum laude, a master&apos;s in education, and
                everything else learned the real way: inside technology companies, sales floors,
                distribution centers, property management firms, and beauty brands. What I found
                everywhere I went is that strong leadership and sound people decisions transcend
                industry.
              </p>
              <p className="gs-reveal">
                Early in my career I decided my integrity was not for sale. Not for a title, not for
                job security, not to make a difficult moment easier. That decision has cost me a few
                times. I&apos;d make it again every time — because the person in the room who tells
                the truth about what&apos;s happening, regardless of which side you&apos;re on, is
                the person organizations actually need.
              </p>
              <p className="gs-reveal">
                In 2022 I founded FGT Solutions, and in 2025 I left corporate to run it full time.
                These days I split myself between advising leaders and writing essays about work,
                leadership, and the journey from employee to entrepreneur — the honest version.
              </p>
            </div>
          </div>
          <div className="about-side">
            <div className="arch-frame portrait-arch" data-parallax="5">
              <Image src="/cheryl.png" alt="Cheryl Baptiste" width={680} height={1020} sizes="(max-width: 880px) 80vw, 360px" />
            </div>
            <p className="script-note under-portrait" aria-hidden="true">honestly, Cheryl</p>
          </div>
        </div>
      </section>

      {/* ---------- bridge to FGT · golden coast ---------- */}
      <section className="scene bridge">
        <div className="media" data-parallax="10" aria-hidden="true">
          <Image src="/img/coast-gold.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="wrap">
          <p className="eyebrow gs-reveal">When it&apos;s your organization</p>
          <h2 className="display" data-lines>
            <span className="line"><span className="line-inner">The writing is free.</span></span>
            <span className="line"><span className="line-inner"><em>The truth about your</em></span></span>
            <span className="line"><span className="line-inner"><em>organization is a project.</em></span></span>
          </h2>
          <div className="bridge-row gs-reveal">
            <p>
              My firm, FGT Solutions, partners with founders and senior leaders when growth,
              pressure, and people issues have outgrown the old way of doing things.
            </p>
            <a className="btn on-dark" href="https://fgtsco.com" target="_blank" rel="noopener noreferrer">
              Visit FGT Solutions
            </a>
          </div>
        </div>
      </section>

      {/* ---------- closing · espresso ---------- */}
      <section className="block-espresso closing">
        <div className="wrap">
          <p className="script-note big gs-reveal">don&apos;t miss an essay</p>
          <h2 className="display" data-lines>
            <span className="line"><span className="line-inner">The conversation is too</span></span>
            <span className="line"><span className="line-inner"><em>important to have alone.</em></span></span>
          </h2>
          <p className="on-dark-soft closing-sub gs-reveal">
            New essays on work, leadership, and the truth in between — delivered by Substack, free.
            If you&apos;ve felt any of this, or you&apos;re watching it happen around you: come say so.
          </p>
          <div className="gs-reveal">
            <a className="btn on-dark" href={SUBSTACK} target="_blank" rel="noopener noreferrer">
              Subscribe on Substack
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
