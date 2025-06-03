import { HighlightType } from "@/lib/types";
import { StrapiImage } from "./strapi-image";
import { cn } from "@/lib/utils";

type HighlightProps = HighlightType & React.HTMLAttributes<HTMLDivElement>;

const Highlight = ({
  image,
  title,
  description,
  className,
  ...props
}: HighlightProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 ${cn(
        className,
      )}`}
      {...props}
    >
      <div className="relative size-28 sm:size-20 md:size-16">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={"object-contain"}
        />
      </div>
      <div className="flex flex-col text-white text-center md:text-start">
        <span className="text-xl sm:text-lg">{title}</span>
        <span className="sm:text-base">{description}</span>
      </div>
    </div>
  );
};

export default Highlight;
