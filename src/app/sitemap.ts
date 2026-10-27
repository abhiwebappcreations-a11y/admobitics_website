import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://admobitics.com";

  const routes = [
    "",
    "/about",
    "/advertise",
    "/how-it-works",
    "/network",
    "/partner",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-26"),
    changeFrequency: route === "" || route === "/advertise" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/advertise" ? 0.9 : 0.8,
  }));
}
