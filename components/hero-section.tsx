import { StrapiImageType } from "@/lib/types";
import { StrapiImage } from "./strapi-image";
import { Button } from "./ui/button";

type HeroSectionProps = {
  text: string;
  button: string;
  image: StrapiImageType;
};

const HeroSection = ({ text, button, image }: HeroSectionProps) => {
  return (
    <div className="relative flex justify-center size-full py-[.7rem] xl:py-[1.5rem]">
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"}
        className="absolute -z-10 object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="self-end space-y-2 grid place-items-center w-full z-10 px-2">
        <p className="font-medium text-white z-20">{text}</p>
        <Button
          size={"lg"}
          className="w-full max-w-[480px] bg-custom-orange rounded-full shadow text-lg"
        >
          {button}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
