export const SUBSTACK = "https://substack.com/@cherylbaptiste";

export type Lane = "work" | "journey";

export type Essay = {
  n: string;
  title: string;
  date: string;
  lane: Lane;
  href: string;
  excerpt: string;
};

// Real posts. The Wall and Messy were read off Substack, the other two are
// already live on the site. Dash free, per Cheryl.
export const ESSAYS: Essay[] = [
  {
    n: "01",
    title: "Messy",
    date: "July 23, 2026",
    lane: "journey",
    href: "https://cherylbaptiste.substack.com/p/messy",
    excerpt:
      "When I left my last employer, it was messy. Really messy. And I've been sitting with something about that mess ever since.",
  },
  {
    n: "02",
    title: "The Wall",
    date: "July 9, 2026",
    lane: "journey",
    href: "https://cherylbaptiste.substack.com/p/the-wall",
    excerpt:
      "In January 2022 I started a business in about an hour. Not because I had a plan. Because I got laid off in mid December, the whole corporate office, part of a merger that was really a sale.",
  },
  {
    n: "03",
    title: "HR Has Become a Bad Word. And We Did That to Ourselves.",
    date: "June 22, 2026",
    lane: "work",
    href: SUBSTACK,
    excerpt:
      "Say you're in HR at a social event and watch what happens. There's a pause. A slight wince. Maybe a joke about watching what they say around you now. HR has become a punchline, a warning, a four letter word dressed up in two letters.",
  },
  {
    n: "04",
    title: "We Don't Hate Our Jobs. We Hate What Our Jobs Have Become.",
    date: "June 15, 2026",
    lane: "work",
    href: SUBSTACK,
    excerpt:
      "I was on a call recently with an HR leader I deeply respect. She stepped down from a CHRO role to take a director position. Not because she failed. Somewhere in that conversation, she said it plainly.",
  },
];

export const LANES: { key: Lane; label: string; blurb: string }[] = [
  {
    key: "work",
    label: "Work & Leadership",
    blurb: "What organizations get wrong about people, from someone who was in the room.",
  },
  {
    key: "journey",
    label: "The Journey",
    blurb: "Leaving, identity, faith, worthiness, becoming. The honest version.",
  },
];

export const TICKER = ["Work", "Leadership", "Identity", "Ambition", "Honesty"];
