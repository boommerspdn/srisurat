type FooterProps = {
  copyright: string;
  fbLink: string;
  lineLink: string;
};

const Footer = ({ copyright, fbLink, lineLink }: FooterProps) => {
  return (
    <div className="bg-custom-orange h-[4rem] text-white grid grid-cols-3 items-center px-12">
      <span className="col-start-2 text-center">{copyright}</span>
      <div className="col-start-3 justify-self-end flex gap-4">
        <a href={fbLink}>
          <img
            src="/facebook-black.png"
            alt=""
            className="size-8"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(678%) hue-rotate(14deg) brightness(103%) contrast(102%)",
            }}
          />
        </a>
        <a href={lineLink} target="_blank">
          <img
            src="/line-black.png"
            alt=""
            className="size-8"
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
