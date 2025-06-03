import Image from "next/image";
import { StrapiImageType } from "@/lib/types";
import { StrapiImage } from "./strapi-image";

type ContactSectionProps = {
  image: StrapiImageType;
  title: string;
  lineLabel: string;
  lineLink: string;
  fbLabel: string;
  fbLink: string;
  phoneNumber: string;
  address: string;
  location: string;
};

const ContactSection = ({
  image,
  title,
  lineLabel,
  lineLink,
  fbLabel,
  fbLink,
  phoneNumber,
  address,
  location,
}: ContactSectionProps) => {
  return (
    <>
      <div className="grid grid-cols-7 pt-12">
        <div className="col-span-2 relative">
          <img
            src="/orange-line.png"
            alt="Orange line"
            className="absolute -right-[15rem] -top-[8rem] -z-50"
          />
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || ""}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-5">
          <div className="relative flex justify-center items-center text-center">
            <img src="/cloud-blob.png" alt="Cloud blob" className="-z-50" />
            <h3 className="absolute font-sriracha text-5xl">{title}</h3>
          </div>
          <div className="mt-12 space-y-6 ps-[9rem] text-xl font-sriracha">
            <div className="flex gap-4 items-center">
              <Image src="/phone-call.png" alt="phone" width={40} height={40} />
              <span>{phoneNumber}</span>
            </div>
            <a
              href={fbLink}
              target="_blank"
              className="flex gap-4 items-center"
            >
              <Image src="/facebook.png" alt="phone" width={40} height={40} />
              <span>{fbLabel}</span>
            </a>
            <a
              href={lineLink}
              target="_blank"
              className="flex gap-4 items-center"
            >
              <Image src="/line.png" alt="phone" width={40} height={40} />
              <span>{lineLabel}</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <img src="/location.png" alt="location" />
          <h6 className="font-sriracha text-3xl text-center pt-[2rem]">
            {address}
          </h6>
        </div>
        <iframe
          src={location}
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactSection;
