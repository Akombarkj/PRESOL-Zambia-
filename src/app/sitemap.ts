import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://www.presol.co.zm"; return ["", "/about", "/solutions", "/projects", "/impact", "/how-it-works", "/contact", "/request-a-quote", "/gallery", "/faq", "/privacy"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
