import { StrapiImageType } from "@/lib/types";
import { StrapiImage } from "./strapi-image";

type PromotionSectionProps = {
  images: StrapiImageType[];
};

const PromotionSection = ({ images }: PromotionSectionProps) => {
  return (
    <div className="space-y-6">
      {images.map((image) => (
        <StrapiImage
          key={image.id}
          src={image.url}
          alt={
            image.alternativeText ||
            "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์ - โปรโมชั่น"
          }
          width={0}
          height={0}
          sizes={"100vw"}
          className="w-full h-auto"
        />
      ))}
    </div>
  );
};

export default PromotionSection;
