import type { Metadata, Viewport } from "next";
import { Playfair_Display, Libre_Baskerville, Mulish } from "next/font/google";
import "./globals.css";
import Cameo from "@/components/Cameo";
import CameoIntro from "@/components/CameoIntro";
import PalettePill from "@/components/PalettePill";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const body = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});
const sans = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cherylbaptiste.com"),
  title: {
    default: "Cheryl Baptiste — Work, leadership, and the truth in between",
    template: "%s · Cheryl Baptiste",
  },
  description:
    "Cheryl Baptiste writes candidly about work, leadership, identity, and the journey from employee to entrepreneur. Founder of FGT Solutions. 25+ years shaping people strategy from small nonprofits to Fortune 50.",
  openGraph: {
    title: "Cheryl Baptiste",
    description: "Essays on work, leadership, and the truth in between.",
    url: "https://cherylbaptiste.com",
    siteName: "Cheryl Baptiste",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#3B2C21",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cheryl Baptiste",
  url: "https://cherylbaptiste.com",
  jobTitle: "Founder & Principal, FGT Solutions",
  worksFor: { "@type": "Organization", name: "FGT Solutions", url: "https://fgtsco.com" },
  sameAs: [
    "https://www.linkedin.com/in/cheryl-l-baptiste-56567723",
    "https://substack.com/@cherylbaptiste",
  ],
  address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
  description:
    "Writer and advisor on work, leadership, and organizations. 25+ years in human resources across small nonprofits to Fortune 50 corporations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var p=localStorage.getItem("palette");if(p)document.documentElement.dataset.palette=p;if(sessionStorage.getItem("cb-intro"))document.documentElement.dataset.intro="done";}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${serif.variable} ${body.variable} ${sans.variable}`}>
        <CameoIntro />

        <header className="site-header">
          <div className="wrap">
            <a className="brand" href="/" aria-label="Cheryl Baptiste home">
              <Cameo height={40} />
              <span className="name">Cheryl Baptiste</span>
            </a>
            <nav className="main-nav" aria-label="Main">
              <a href="/#essays">Essays</a>
              <a href="/#media">Media</a>
              <a href="/#about">About</a>
              <a href="https://fgtsco.com" target="_blank" rel="noopener noreferrer">
                FGT Solutions ↗
              </a>
              <a
                className="btn quiet"
                style={{ padding: "10px 18px" }}
                href="https://substack.com/@cherylbaptiste"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="wrap">
            <div className="cols">
              <a className="brand" href="/" aria-label="Cheryl Baptiste home">
                <Cameo height={34} />
              </a>
              <nav aria-label="Footer">
                <a href="/#essays">Essays</a>
                <a href="/#media">Media</a>
                <a href="/#about">About</a>
                <a
                  href="https://www.linkedin.com/in/cheryl-l-baptiste-56567723"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://substack.com/@cherylbaptiste"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Substack
                </a>
                <a href="https://fgtsco.com" target="_blank" rel="noopener noreferrer">
                  FGT Solutions
                </a>
              </nav>
            </div>
            <p className="fineprint">
              © {new Date().getFullYear()} Cheryl Baptiste · California · Essays on work,
              leadership, and the truth in between.
            </p>
          </div>
        </footer>

        <PalettePill />
      </body>
    </html>
  );
}
