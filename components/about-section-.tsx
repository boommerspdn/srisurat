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
    <div className="grid grid-cols-12 lg:space-x-12 space-y-12 lg:space-y-0">
      <div className="col-span-full lg:col-span-6 2xl:col-span-5">
        <StrapiImage
          src={image.url}
          alt={
            image.alternativeText ||
            "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์ - เกี่ยวกับเรา"
          }
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col gap-8 lg:gap-4 2xl:gap-8 col-span-full lg:col-span-6 2xl:col-span-7">
        <h3 className="text-5xl/14 xl:text-7xl text-center lg:text-start font-bold break-words">
          {title}
        </h3>
        <p className="text-xl break-words">{description}</p>
        <RichText
          data={list}
          listSpaceClass="space-y-3 lg:space-y-2 2xl:space-y-4 break-words"
        ></RichText>
      </div>
    </div>
  );
};

export default AboutSection;
