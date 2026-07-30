import type { Metadata, Viewport } from "next";
import { Playfair_Display, Libre_Baskerville, Mulish, Ephesis, Allison } from "next/font/google";
import "./globals.css";
import CameoIntro from "@/components/CameoIntro";
import CameoLockup from "@/components/CameoLockup";
import SiteHeader from "@/components/SiteHeader";

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
const script = Ephesis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});
const signature = Allison({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cherylbaptiste.com"),
  title: {
    default: "Cheryl Baptiste · Work, leadership, and the truth in between",
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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cheryl Baptiste, saying the quiet part out loud" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheryl Baptiste",
    description: "Essays on work, leadership, and the truth in between.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
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
            __html: `try{if(sessionStorage.getItem("cb-intro"))document.documentElement.dataset.intro="done";}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${serif.variable} ${body.variable} ${sans.variable} ${script.variable} ${signature.variable}`}>
        <CameoIntro />
        <SiteHeader />

        {children}

        <footer className="site-footer">
          <div className="wrap">
            <div className="cols">
              <a href="/" aria-label="Cheryl Baptiste home" style={{ textDecoration: "none" }}>
                <CameoLockup size={44} spin={false} />
              </a>
              <nav aria-label="Footer">
                <a href="/#essays">Essays</a>
                <a href="/media">Media</a>
                <a href="/through-my-eyes">Through my eyes</a>
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
            <p className="footer-note">
              The essays live here. The organizational work has a firm of its own,{" "}
              <a href="https://fgtsco.com" target="_blank" rel="noopener noreferrer">
                FGT Solutions
              </a>
              .
            </p>
            <p className="fineprint">
              © {new Date().getFullYear()} Cheryl Baptiste · California · Essays on work,
              leadership, and the truth in between.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
