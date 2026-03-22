import AboutSection from "@/components/about-section-";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HighlightsSection from "@/components/highlights-section";
import ImageGallery from "@/components/image-gallery";
import NavBar from "@/components/nav-bar";
import PromotionSection from "@/components/promotion-section";
import { getMetadata, getPageData } from "@/lib/utils";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadata();
}

const Page = async () => {
  const flattenedData = await getPageData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: flattenedData.name,
    logo: flattenedData.logo.url,
    description:
      "รับสร้างบ้านน็อคดาวน์ในสุราษฎร์ธานี (Knockdown House in Surat Thani)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "36 Bang Sai, Mueang Surat Thani District",
      addressLocality: "Surat Thani",
      postalCode: "84000",
      addressCountry: "TH",
    },
    telephone: "+66-88-994-9037",
    openingHours: "Mo-Sa 08:00-18:00",
    url: "https://srisurat.net",
    sameAs: [flattenedData.facebookLink, flattenedData.tiktokLink],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="relative size-full">
        <NavBar
          logo={flattenedData.logo}
          tiktokLabel={flattenedData.contactTiktok}
          tiktokLink={flattenedData.tiktokLink}
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
    </>
  );
};

export default Page;
