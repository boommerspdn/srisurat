import type { Metadata } from "next";
import AboutSection from "@/components/about-section-";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HighlightsSection from "@/components/highlights-section";
import ImageGallery from "@/components/image-gallery";
import NavBar from "@/components/nav-bar";
import PromotionSection from "@/components/promotion-section";
import { flattenAttributes } from "@/lib/utils";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const defaultMetadata: Metadata = {
    title: "ศรีสุราษฎร์ บ้านน็อคดาวน์",
    description:
      "รับสร้างบ้านน็อคดาวน์โครงเหล็ก ราคาเริ่มต้นเพียง 90,000 บาท ออฟฟิศสำเร็จรูป รับต่อเติม รีโนเวท",
  };

  try {
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
}

const getPageData = async () => {
  try {
    const baseUrl = process.env.STRAPI_API_URL ?? "http://127.0.0.1:1337";
    const path = "/api/global?populate=*";

    const url = new URL(path, baseUrl);
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch page data");

    const data = await res.json();

    return flattenAttributes(data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch page data");
  }
};

const Page = async () => {
  const flattenedData = await getPageData();

  return (
    <div className="relative size-full">
      <NavBar
        logo={flattenedData.logo}
        fbLink={flattenedData.facebookLink}
        fbLabel={flattenedData.contactFacebook}
        lineLink={flattenedData.lineLink}
        lineLabel={flattenedData.contactLine}
        phoneNumber={flattenedData.contactNumber}
      />
      <HeroSection
        text={flattenedData.heroText}
        button={flattenedData.buttonText}
        image={flattenedData.heroImage}
        link={flattenedData.buttonLink}
      />
      <div className="container py-16 space-y-16 md:space-y-24 xl:space-y-32">
        <HighlightsSection
          highlightLeft={{
            title: flattenedData.highlightLeftTitle,
            description: flattenedData.highlightLeftDescription,
            image: flattenedData.highlightLeftImage,
          }}
          highlightMid={{
            title: flattenedData.highlightMidTitle,
            description: flattenedData.highlightMidDescription,
            image: flattenedData.highlightMidImage,
          }}
          highlightRight={{
            title: flattenedData.highlightRightTitle,
            description: flattenedData.highlightRightDescription,
            image: flattenedData.highlightRightImage,
          }}
        />
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold">
            {flattenedData.introSection.title}
          </h1>
          <p className="text-xl pb-4">
            {flattenedData.introSection.description}
          </p>
          <ImageGallery props={flattenedData.introImages} />
        </div>
        <PromotionSection images={flattenedData.promoBanner} />
        <div>
          <AboutSection
            image={flattenedData.aboutUsImage}
            title={flattenedData.aboutUsTitle}
            description={flattenedData.aboutUsDescription}
            list={flattenedData.aboutUsList}
          />
          <ContactSection
            image={flattenedData.contactImage}
            title={flattenedData.contactTitle}
            lineLabel={flattenedData.contactLine}
            lineLink={flattenedData.lineLink}
            fbLabel={flattenedData.contactFacebook}
            fbLink={flattenedData.facebookLink}
            tiktokLabel={flattenedData.contactTiktok}
            tiktokLink={flattenedData.tiktokLink}
            phoneNumber={flattenedData.contactNumber}
            address={flattenedData.contactAddress}
            location={flattenedData.contactLocation}
            mapLink={flattenedData.mapLink}
          />
        </div>
      </div>
      <Footer
        copyright={flattenedData.copyright}
        fbLink={flattenedData.facebookLink}
        tiktokLink={flattenedData.tiktokLink}
        lineLink={flattenedData.lineLink}
      />
    </div>
  );
};

export default Page;
