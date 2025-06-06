type FooterProps = {
  copyright: string;
  fbLink: string;
  lineLink: string;
  tiktokLink: string;
};

const Footer = ({ copyright, fbLink, lineLink, tiktokLink }: FooterProps) => {
  return (
    <div className="bg-custom-orange h-[4rem] text-white grid grid-cols-3 items-center px-6 sm:px-12">
      <span className="col-start-1 col-span-2 md:col-span-1  md:col-start-2 text-center text-base sm:text-lg">
        {copyright}
      </span>
      <div className="col-start-3 justify-self-end flex gap-4">
        <a href={tiktokLink}>
          <img
            src="/tiktok-black.png"
            alt="TikTok - Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"
            className="size-6 sm:size-8"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(678%) hue-rotate(14deg) brightness(103%) contrast(102%)",
            }}
          />
        </a>
        <a href={fbLink}>
          <img
            src="/facebook-black.png"
            alt="Facebook - Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"
            className="size-6 sm:size-8"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(678%) hue-rotate(14deg) brightness(103%) contrast(102%)",
            }}
          />
        </a>
        <a href={lineLink} target="_blank">
          <img
            src="/line-black.png"
            alt="Line - Srisurat ศรีสุราษฎร์บ้านน็อคดาวน์"
            className="size-6 sm:size-8"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(678%) hue-rotate(14deg) brightness(103%) contrast(102%)",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
