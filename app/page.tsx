import AboutSection from "@/components/about-section-";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HighlightsSection from "@/components/highlights-section";
import ImageGallery from "@/components/image-gallery";
import NavBar from "@/components/nav-bar";
import PromotionSection from "@/components/promotion-section";
import { StrapiImage } from "@/components/strapi-image";
import { Button } from "@/components/ui/button";
import { flattenAttributes } from "@/lib/utils";
import Image from "next/image";

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
      <div className="container py-16 space-y-24">
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
        <div className="text-center space-y-6">
          <h4 className="text-7xl font-bold">
            {flattenedData.introSection.title}
          </h4>
          <p className="text-xl">{flattenedData.introSection.description}</p>
        </div>
        <ImageGallery props={flattenedData.introImages} />
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
