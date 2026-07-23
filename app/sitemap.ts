import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://cherylbaptiste.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://cherylbaptiste.com/through-my-eyes", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
