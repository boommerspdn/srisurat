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
    <div className={`flex items-center gap-6 ${cn(className)}`} {...props}>
      <div className="relative size-16">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "ศรีสุราษฐร์ บ้านน็อคดาวน์"}
          fill
          className={"object-contain"}
        />
      </div>
      <div className="flex flex-col text-white">
        <span>{title}</span>
        <span className="text-base">{description}</span>
      </div>
    </div>
  );
};

export default Highlight;
