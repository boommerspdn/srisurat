import AboutSection from "@/components/about-section-";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HighlightsSection from "@/components/highlights-section";
import ImageGallery from "@/components/image-gallery";
import NavBar from "@/components/nav-bar";
import PromotionSection from "@/components/promotion-section";
import { flattenAttributes } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/global?populate[0]=Seo&fields=name&populate[1]=logo`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      cache: "no-store",
    },
  );

  const json = await res.json();
  const seo = json.data.Seo;
  const faviconUrl = process.env.STRAPI_API_URL + json.data.logo.url;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    icons: [{ url: faviconUrl }],
  };
}

const Page = async () => {
  const reponse = await fetch(
    `${process.env.STRAPI_API_URL}/api/global?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    },
  );
  const data = await reponse.json();
  const flattenedData = flattenAttributes(data);

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
          <h4 className="text-5xl lg:text-7xl font-bold">
            {flattenedData.introSection.title}
          </h4>
          <p className="text-xl pb-4">
            {flattenedData.introSection.description}
          </p>
          <ImageGallery props={flattenedData.introImages} />
        </div>
        <PromotionSection images={flattenedData.promoBanner} />
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
          phoneNumber={flattenedData.contactNumber}
          address={flattenedData.contactAddress}
          location={flattenedData.contactLocation}
        />
      </div>
      <Footer
        copyright={flattenedData.copyright}
        fbLink={flattenedData.facebookLink}
        lineLink={flattenedData.lineLink}
      />
    </div>
  );
};

export default Page;
