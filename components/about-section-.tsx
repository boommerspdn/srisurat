import { StrapiImageType } from "@/lib/types";
import RichText from "./rich-text";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { StrapiImage } from "./strapi-image";

type AboutSectionProps = {
  image: StrapiImageType;
  title: string;
  description: string;
  list: BlocksContent;
};

const AboutSection = ({
  image,
  title,
  description,
  list,
}: AboutSectionProps) => {
  return (
    <div className="grid grid-cols-7 gap-12">
      <div className="col-span-3">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || ""}
          width={9}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col gap-8 col-span-4">
        <h3 className="text-7xl font-bold">{title}</h3>
        <p className="text-xl">{description}</p>
        <RichText data={list}></RichText>
      </div>
    </div>
  );
};

export default AboutSection;
