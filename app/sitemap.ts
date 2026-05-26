import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://herrera-velutini.com",
      lastModified: new Date()
    },
  ];
}