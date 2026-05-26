import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://www.herrera-velutini.com",
      lastModified: new Date()
    },
  ];
}