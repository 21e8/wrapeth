import { MetadataRoute } from "next";
import { CHAIN_IDS, SUPPORTED_CHAINS } from "./_constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "/", lastModified: new Date() },
    ...SUPPORTED_CHAINS.map((chain) => ({
      url: `/${CHAIN_IDS[chain.id]}`,
      lastModified: new Date(),
    })),
  ];
}
