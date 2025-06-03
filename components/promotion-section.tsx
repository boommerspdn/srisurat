import Image from "next/image";
import { StrapiImageType } from "@/lib/types";
import { StrapiImage } from "./strapi-image";

type PromotionSectionProps = {
  images: StrapiImageType[];
};

const PromotionSection = ({ images }: PromotionSectionProps) => {
  return (
    <>
      {images.map((image) => (
        <StrapiImage
          key={image.id}
          src={image.url}
          alt={image.alternativeText || "No alternative text"}
          width={0}
          height={0}
          sizes={"100vw"}
          className="w-full h-auto"
        />
      ))}
    </>
  );
};

export default PromotionSection;
