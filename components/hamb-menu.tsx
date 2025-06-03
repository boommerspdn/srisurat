import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

type HambMenuProps = {
  phoneNumber: string;
  fbLink: string;
  fbLabel: string;
  lineLink: string;
  lineLabel: string;
};

const HambMenu = ({
  phoneNumber,
  fbLink,
  fbLabel,
  lineLink,
  lineLabel,
}: HambMenuProps) => {
  const phoneNumbers = phoneNumber.split("/").map((num) => num.trim());
  return (
    <Sheet>
      <SheetTrigger
        className="flex justify-center items-center size-8 bg-custom-orange absolute right-0 inset-y-0 my-auto rounded-full cursor-pointer shadow-2xl z-20"
        aria-label="ช่องทางการติดต่อ"
      >
        <AlignJustify size={19} className="mb-0.5" color="#fff" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>ช่องทางการติดต่อ</SheetTitle>
          <SheetDescription>
            หากต้องการสอบถาม หรือต้องการคำแนะนำ โปรดอย่ารอช้าที่จะติดต่อเรา
            ติดต่อกับเราโดยตรงได้ที่
          </SheetDescription>
          <div className="mt-6 space-y-6 text-base">
            <div className="flex gap-4">
              <Image
                src="/phone-call.png"
                alt="Phone เบอร์โทร - Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"
                width={30}
                height={30}
                className="object-contain"
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
            <a href={fbLink} target="_blank" className="flex gap-4">
              <Image
                src="/facebook.png"
                alt="Facebook - Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"
                width={30}
                height={30}
                className="object-contain"
              />
              <span>{fbLabel}</span>
            </a>
            <a href={lineLink} target="_blank" className="flex gap-4">
              <Image
                src="/line.png"
                alt="Line - Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"
                width={30}
                height={30}
                className="object-contain"
              />
              <span>{lineLabel}</span>
            </a>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default HambMenu;
