import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import qs from "qs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function flattenAttributes(data: any): any {
  // Base case for recursion
  if (!data) return null;

  // Handling array data
  if (Array.isArray(data)) {
    return data.map(flattenAttributes);
  }

  let flattened: { [key: string]: any } = {};

  // Handling attributes
  if (data.attributes) {
    for (let key in data.attributes) {
      if (
        typeof data.attributes[key] === "object" &&
        data.attributes[key] !== null &&
        "data" in data.attributes[key]
      ) {
        flattened[key] = flattenAttributes(data.attributes[key].data);
      } else {
        flattened[key] = data.attributes[key];
      }
    }
  }

  // Copying non-attributes and non-data properties
  for (let key in data) {
    if (key !== "attributes" && key !== "data") {
      flattened[key] = data[key];
    }
  }

  // Handling nested data
  if (data.data) {
    flattened = { ...flattened, ...flattenAttributes(data.data) };
  }

  return flattened;
}

export function getStrapiURL() {
  return process.env.STRAPI_API_URL ?? "http://127.0.0.1:1337";
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

async function waitForStrapi(): Promise<boolean> {
  const maxRetries = 48;
  const delay = 5000;

  for (let i = 0; i < maxRetries; i++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    try {
      const res = await fetch(`${getStrapiURL()}/admin`, {
        method: "HEAD",
        cache: "no-store",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.status < 500) {
        console.log(`✅ Strapi is awake! (Attempt ${i + 1})`);
        return true;
      }
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (error.name === "AbortError") {
        console.log(
          `[Attempt ${i + 1}] Ping timed out, Strapi still booting...`,
        );
      } else {
        console.log(
          `[Attempt ${i + 1}] Connection refused, Strapi still cold...`,
        );
      }
    }

    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  return false;
}

export const getPageData = async () => {
  try {
    await waitForStrapi();
    const baseUrl = getStrapiURL();

    const query = qs.stringify(
      {
        populate: {
          introSection: true,
          Seo: true,
          introImages: {
            fields: ["url", "alternativeText", "width", "height", "name"],
          },
          promoBanner: { fields: ["url", "alternativeText"] },
          aboutUsImage: { fields: ["url"] },
          contactImage: { fields: ["url"] },
          heroImage: { fields: ["url"] },
          logo: { fields: ["url"] },
          highlightLeftImage: { fields: ["url"] },
          highlightMidImage: { fields: ["url"] },
          highlightRightImage: { fields: ["url"] },
        },
      },
      { encodeValuesOnly: true },
    );

    const path = `/api/global?${query}`;
    const url = new URL(path, baseUrl);

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      next: { revalidate: 900 },
    });

    if (!res.ok) {
      console.error(`Strapi Error: ${res.status} ${res.statusText}`);
      throw new Error("Failed to fetch page data");
    }

    const data = await res.json();
    return flattenAttributes(data.data);
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch page data");
  }
};

export const getMetadata = async () => {
  const defaultMetadata: Metadata = {
    title: "ศรีสุราษฎร์ บ้านน็อคดาวน์",
    description:
      "รับสร้างบ้านน็อคดาวน์โครงเหล็ก ราคาเริ่มต้นเพียง 90,000 บาท ออฟฟิศสำเร็จรูป รับต่อเติม รีโนเวท",
  };

  try {
    const isAwake = await waitForStrapi();

    if (!isAwake) {
      console.warn("Strapi did not wake up in 240s, using defaults.");
      return defaultMetadata;
    }

    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/global?populate[0]=Seo&populate[1]=logo&fields[0]=name&populate[2]=heroImage`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      },
    );

    if (!res.ok) throw new Error(`Strapi error: ${res.status}`);

    const json = await res.json();
    const seo = json.data.Seo;
    const faviconUrl = json.data.logo.url;

    return {
      title: seo.metaTitle,
      description: seo.metaDescription,
      icons: [{ url: faviconUrl }],
      metadataBase: new URL(`${process.env.DOMAIN_NAME}`),
      alternates: { canonical: "/" },
      robots: "index, follow",
      openGraph: {
        title: seo.metaTitle,
        description: seo.metaDescription,
        url: process.env.DOMAIN_NAME,
        siteName: json.data.name,
        images: [
          {
            url: `${process.env.DOMAIN_NAME}/api/og`,
            width: 1200,
            height: 630,
            alt: "Website Preview",
          },
        ],
        type: "website",
      },
    };
  } catch (error) {
    console.error("Failed to load metadata:", error);
    return defaultMetadata;
  }
};
