import AboutSection from "@/components/about-section-";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HighlightsSection from "@/components/highlights-section";
import ImageGallery from "@/components/image-gallery";
import NavBar from "@/components/nav-bar";
import PromotionSection from "@/components/promotion-section";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ศรีสุราษฎร์ บ้านน็อคดาวน์ สุราษฎร์ธานี | ราคาถูก คุณภาพดี",
  description:
    "รับสร้างบ้านน็อคดาวน์โครงเหล็ก ราคาเริ่มต้นเพียง 150,000 บาท ออฟฟิศสำเร็จรูป รับต่อเติม รีโนเวท ราคาถูก งานเร็ว แข็งแรงและปลอดภัย อันดับ 1 ในภาคใต้และ สุราษฎร์ฯ",
  icons: [
    {
      url: "/content/logo.png",
    },
  ],
  alternates: {
    canonical: "/",
  },
  robots: "index, follow",
  openGraph: {
    title: "ศรีสุราษฎร์ บ้านน็อคดาวน์ สุราษฎร์ธานี | ราคาถูก คุณภาพดี",
    description:
      "รับสร้างบ้านน็อคดาวน์โครงเหล็ก ราคาเริ่มต้นเพียง 150,000 บาท ออฟฟิศสำเร็จรูป รับต่อเติม รีโนเวท ราคาถูก งานเร็ว แข็งแรงและปลอดภัย อันดับ 1 ในภาคใต้และ สุราษฎร์ฯ",
    url: "https://srisurat.net",
    siteName: "ศรีสุราษฎร์ บ้านน็อคดาวน์",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Website Preview",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://srisurat.net"),
};

const Page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ศรีสุราษฎร์ บ้านน็อคดาวน์",
    logo: "https://srisurat.net/content/logo.png",
    description:
      "รับสร้างบ้านน็อคดาวน์ในสุราษฎร์ธานี (Knockdown House in Surat Thani)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "36 Bang Sai, Mueang Surat Thani District",
      addressLocality: "Surat Thani",
      postalCode: "84000",
      addressCountry: "TH",
    },
    telephone: "097-979-0912",
    openingHours: "Mo-Sa 08:00-18:00",
    url: "https://srisurat.net",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61563082658799#",
      "https://www.tiktok.com/@suratthanihome",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18491569296"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18491569296');
        `}
      </Script>

      <div className="relative size-full">
        <NavBar
          logo={{
            url: "/content/logo.png",
            name: "logo.png",
            alternativeText: "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์ - โลโก้",
            width: 192,
            height: 192,
            id: 1,
          }}
          tiktokLabel={"@suratthanihome"}
          tiktokLink={"https://www.tiktok.com/@suratthanihome"}
          fbLink={"https://www.facebook.com/profile.php?id=61563082658799#"}
          fbLabel={"ศรีสุราษฎร์ บ้านน็อคดาวน์"}
          lineLink={"https://line.me/ti/p/gQcTWVxkbE"}
          lineLabel={"srisurat"}
          phoneNumber={"097-979-0912"}
        />
        <HeroSection
          text={"บ้านราคาถูก ที่ดูไม่ถูกคุณภาพต้องมาก่อนกำไร"}
          button={"ติดต่อสั่งซื้อ"}
          image={{
            url: "/content/hero.jpg",
            name: "hero.jpg",
            alternativeText: "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์",
            width: 1815,
            height: 966,
            id: 2,
          }}
          link={"https://www.facebook.com/profile.php?id=61563082658799#"}
        />
        <div className="container py-16 space-y-16 md:space-y-24 xl:space-y-32">
          <HighlightsSection
            highlightLeft={{
              title: "ราคาประหยัด",
              description: "คุณภาพเกินราคา",
              image: {
                url: "/content/piggy-bank.png",
                name: "piggy-bank.png",
                alternativeText: "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์",
                width: 385,
                height: 379,
                id: 3,
              },
            }}
            highlightMid={{
              title: "วัสดุอย่างดี",
              description: "แข็งแรง ทนทาน",
              image: {
                url: "/content/floor.png",
                name: "floor.png",
                alternativeText: "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์",
                width: 384,
                height: 385,
                id: 4,
              },
            }}
            highlightRight={{
              title: "รวดเร็ว ทันใจ",
              description: "พร้อมอยู่ภายใน 1 อาทิตย์",
              image: {
                url: "/content/on-time.png",
                name: "on-time.png",
                alternativeText: "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์",
                width: 339,
                height: 327,
                id: 5,
              },
            }}
          />
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold">
              {"ศรีสุราษฎร์ บ้านน็อคดาวน์"}
            </h1>
            <p className="text-xl pb-4">
              {
                "รับสร้างบ้านน็อคดาวน์โครงเหล็ก ราคาเริ่มต้นเพียง 150,000 บาท ออฟฟิศสำเร็จรูป รับต่อเติม รีโนเวท ราคาถูก งานเร็ว แข็งแรงและปลอดภัย อันดับ 1 ในภาคใต้และ สุราษฎร์ฯ"
              }
            </p>
            <ImageGallery
              props={[
                {
                  url: "/content/intro-7.webp",
                  name: "intro-7.webp",
                  alternativeText: "สินค้า ศรีสุราษฎร์ บ้านน็อคดาวน์",
                  width: 1477,
                  height: 1108,
                  id: 6,
                },
                {
                  url: "/content/intro-6.webp",
                  name: "intro-6.webp",
                  alternativeText: "สินค้า ศรีสุราษฎร์ บ้านน็อคดาวน์",
                  width: 1706,
                  height: 1280,
                  id: 7,
                },
                {
                  url: "/content/intro-8.webp",
                  name: "intro-8.webp",
                  alternativeText: "สินค้า ศรีสุราษฎร์ บ้านน็อคดาวน์",
                  width: 1108,
                  height: 1477,
                  id: 8,
                },
                {
                  url: "/content/intro-1.webp",
                  name: "intro-1.webp",
                  alternativeText: "สินค้า ศรีสุราษฎร์ บ้านน็อคดาวน์",
                  width: 1242,
                  height: 930,
                  id: 9,
                },
                {
                  url: "/content/intro-2.webp",
                  name: "intro-2.webp",
                  alternativeText:
                    "สินค้า ศรีสุราษฎร์ บ้านน็อคดาวน์ - srisurat",
                  width: 1242,
                  height: 1656,
                  id: 10,
                },
                {
                  url: "/content/intro-3.webp",
                  name: "intro-3.webp",
                  alternativeText:
                    "สินค้า ศรีสุราษฎร์ บ้านน็อคดาวน์ - srisurat",
                  width: 1242,
                  height: 1656,
                  id: 11,
                },
                {
                  url: "/content/intro-5.webp",
                  name: "intro-5.webp",
                  alternativeText:
                    "สินค้า ศรีสุราษฎร์ บ้านน็อคดาวน์ - srisurat",
                  width: 1242,
                  height: 1656,
                  id: 12,
                },
                {
                  url: "/content/intro-4.webp",
                  name: "intro-4.webp",
                  alternativeText:
                    "สินค้า ศรีสุราษฎร์ บ้านน็อคดาวน์ - srisurat",
                  width: 1242,
                  height: 1656,
                  id: 13,
                },
              ]}
            />
          </div>
          <PromotionSection
            images={[
              {
                url: "/content/promo-1.webp",
                name: "promo-1.webp",
                alternativeText: "บ้านสไตล์ English Cottage",
                width: 1076,
                height: 1522,
                id: 14,
              },
            ]}
          />
          <div>
            <AboutSection
              image={{
                url: "/content/material-info.webp",
                name: "material-info.webp",
                alternativeText:
                  "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์ - เกี่ยวกับเรา",
                width: 960,
                height: 1280,
                id: 15,
              }}
              title={"เราเน้นสเปควัสดุมา อันดับหนึ่ง"}
              description={
                "เราจะลบภาพจำกับคำว่าบ้านน็อคดาวน์ในอดีตที่คนส่วน\nใหญ่จะมองว่าไม่แข็งแรง ไม่ทน ไม่สวยทุกอย่าง\nจะต้องถูกพัฒนา สร้างโดยทีมงานมืออาชีพ มากประสบการณ์"
              }
              list={[
                {
                  type: "list",
                  format: "unordered",
                  children: [
                    {
                      type: "list-item",
                      children: [
                        {
                          text: "โครงสร้างเหล็กกัลวาไนท์ มาตรฐาน มอก. ทุกรอยเชื่อม เจียตกแต่งและทาสีป้องกันสนิม",
                          type: "text",
                        },
                      ],
                    },
                    {
                      type: "list-item",
                      children: [
                        {
                          text: "แผ่นผนัง ระบบแซนวิชพาแนล เหล็ก BlueScope, แผ่นผนังสมาทบอร์ด SCG, ภายในผนังไฟเบอร์คาร์บอน",
                          type: "text",
                        },
                      ],
                    },
                    {
                      type: "list-item",
                      children: [
                        {
                          text: "หลังคา Shingle roof Design หรือหลังคาเมทัลชีท PU ชั้นกลาง ใส่ฉนวนใยหินกันร้อนให้ฟรีทุกหลัง กันความร้อน กันเสียง",
                          type: "text",
                        },
                      ],
                    },
                    {
                      type: "list-item",
                      children: [
                        {
                          text: "สี และวัสดุเพิ่มเติม SCG, TOA, 4Seasons, เบเยอร์",
                          type: "text",
                        },
                      ],
                    },
                    {
                      type: "list-item",
                      children: [
                        {
                          text: "ติดตั้งระบบไฟ ระบบน้ำครบจบพร้อมอยู่ทุกหลัง",
                          type: "text",
                        },
                      ],
                    },
                  ],
                },
              ]}
            />
            <ContactSection
              image={{
                url: "/content/young-man.png",
                name: "young-man.png",
                alternativeText:
                  "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์ - ติดต่อเรา",
                width: 1197,
                height: 1613,
                id: 16,
              }}
              title={"ต้องการซื้อบ้านน็อคดาวน์กับเรา?"}
              lineLabel={"srisurat"}
              lineLink={"https://line.me/ti/p/gQcTWVxkbE"}
              fbLabel={"ศรีสุราษฎร์ บ้านน็อคดาวน์"}
              fbLink={"https://www.facebook.com/profile.php?id=61563082658799#"}
              tiktokLabel={"@suratthanihome"}
              tiktokLink={"https://www.tiktok.com/@suratthanihome"}
              phoneNumber={"097-979-0912"}
              address={
                "ศรีสุราษฎร์ บ้านน็อคดาวน์ 36 บางไทร 3 ต.บางไทร อ เมือง สุราษฎร์ธานี 84000"
              }
              location={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.772610514037!2d99.2989996!3d9.174973399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305405cb2a6c166d%3A0xc425837725445d33!2z4Lio4Lij4Li14Liq4Li44Lij4Liy4Lip4LiO4Lij4LmMIOC4muC5ieC4suC4meC4meC5h-C4reC4hOC4lOC4suC4p-C4meC5jA!5e0!3m2!1sen!2sth!4v1749021788409!5m2!1sen!2sth"
              }
              mapLink={"https://g.co/kgs/rkydpa8"}
            />
          </div>
        </div>
        <Footer
          copyright={"© 2026 Srisurat Copyright "}
          fbLink={"https://www.facebook.com/profile.php?id=61563082658799#"}
          tiktokLink={"https://www.tiktok.com/@suratthanihome"}
          lineLink={"https://line.me/ti/p/gQcTWVxkbE"}
        />
      </div>
    </>
  );
};

export default Page;
