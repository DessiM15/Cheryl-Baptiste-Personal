import type { Metadata } from "next";
import "./directions.css";

// Internal review pages. Kept off search engines and out of the sitemap.
export const metadata: Metadata = {
  title: "Visual directions",
  robots: { index: false, follow: false },
};

export default function DirectionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
