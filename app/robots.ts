import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "http://www.herrera-velutini.com/sitemap.xml",
    host: "http://www.herrera-velutini.com",
  };
}