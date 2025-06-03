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
  const phoneNumbers = phoneNumber.split("/").map((num) => num.trim());
  return (
    <>
      <div className="grid grid-cols-7 sm:pt-12">
        <div className="col-span-full">
          <div className="grid grid-cols-12">
            <img
              src="/orange-line.png"
              alt="Orange line"
              className="hidden col-start-4 col-span-4 sm:block -z-50"
            />
          </div>
        </div>
        <div className="col-span-full order-2 sm:order-1 sm:col-span-2 relative row-span-2">
          <StrapiImage
            src={image.url}
            alt={
              image.alternativeText ||
              "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์ - ติดต่อเรา"
            }
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto px-12 sm:px-0"
          />
        </div>
        <div className="col-span-full order-1 sm:order-2 sm:col-span-5">
          <div className="relative flex justify-center items-center text-center ">
            <img src="/cloud-blob.png" alt="Cloud blob" className="-z-50" />
            <h3 className="absolute font-sriracha text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
              {title}
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-2 md:gap-4 col-span-full sm:col-span-5 order-3 mt-6 2xl:mt-0 xl:mt-12 sm:ps-[2rem] lg:ps-[5rem] xl:ps-[4rem] 2xl:ps-[8rem] sm:text-xl xl:text-2xl font-sriracha">
          <div className="flex gap-4 items-center">
            <Image
              src="/phone-call.png"
              alt="phone"
              width={0}
              height={0}
              sizes="100vw"
              className="size-10 2xl:size-12"
            />
            <div className="flex flex-wrap items-center max-w-full">
              {phoneNumbers.map((number, index) => (
                <a key={index} href={`tel:${number}`}>
                  {number}
                  {index < phoneNumbers.length - 1 && (
                    <span className="mx-1">/</span>
                  )}
                </a>
              ))}
            </div>
          </div>
          <a href={fbLink} target="_blank" className="flex gap-4 items-center">
            <Image
              src="/facebook.png"
              alt="Facebook - Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"
              width={0}
              height={0}
              sizes="100vw"
              className="size-10 2xl:size-12"
            />
            <span>{fbLabel}</span>
          </a>
          <a
            href={lineLink}
            target="_blank"
            className="flex gap-4 items-center"
          >
            <Image
              src="/line.png"
              alt="Line - Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"
              width={0}
              height={0}
              sizes="100vw"
              className="size-10 2xl:size-12"
            />
            <span>{lineLabel}</span>
          </a>
        </div>
      </div>
      <div>
        <div className="flex">
          <img
            src="/location.png"
            alt="Location ทีอยู่ - Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"
            className="w-14 mt-auto sm:mt-0 sm:w-auto object-contain"
          />
          <span className="font-sriracha sm:text-3xl text-center sm:pt-[2rem]">
            {address}
          </span>
        </div>
        <iframe
          title={address}
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
