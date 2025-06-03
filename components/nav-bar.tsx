import { Separator } from "@/components/ui/separator";
import { StrapiImage } from "./strapi-image";
import HambMenu from "./hamb-menu";
import { StrapiImageType } from "@/lib/types";

type NavBarProps = {
  logo: StrapiImageType;
  fbLink: string;
  fbLabel: string;
  lineLink: string;
  lineLabel: string;
  phoneNumber: string;
};

const NavBar = ({
  logo,
  fbLink,
  fbLabel,
  lineLink,
  lineLabel,
  phoneNumber,
}: NavBarProps) => {
  return (
    <div className="container absolute inset-x-0 py-2 z-20">
      <div className="flex justify-center relative pb-4">
        <div className="relative h-24">
          <StrapiImage
            src={logo.url}
            alt={
              logo.alternativeText ||
              "Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์ - โลโก้"
            }
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain h-full w-auto"
            priority={true}
          />
        </div>
        <HambMenu
          fbLink={fbLink}
          fbLabel={fbLabel}
          lineLink={lineLink}
          lineLabel={lineLabel}
          phoneNumber={phoneNumber}
        />
      </div>
      <Separator className="bg-custom-brown" />
    </div>
  );
};

export default NavBar;
