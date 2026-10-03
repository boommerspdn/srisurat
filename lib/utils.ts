import { clsx, type ClassValue } from "clsx";
import type { Metadata } from "next";
import type { BlocksContent } from "@strapi/blocks-react-renderer";
import { twMerge } from "tailwind-merge";
import content from "./site-content.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Kept for existing image components; all content images now use public paths.
export function getStrapiMedia(url: string | null) {
  return url;
}

export const getPageData = async () => ({
  ...content,
  aboutUsList: content.aboutUsList as BlocksContent,
});

export const getMetadata = async (): Promise<Metadata> => ({
  title: content.Seo.metaTitle,
  description: content.Seo.metaDescription,
  icons: [{ url: content.logo.url }],
  metadataBase: new URL("https://srisurat.net"),
  alternates: { canonical: "/" },
  robots: "index, follow",
  openGraph: {
    title: content.Seo.metaTitle,
    description: content.Seo.metaDescription,
    url: "https://srisurat.net",
    siteName: content.name,
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Website Preview" }],
    type: "website",
  },
});
