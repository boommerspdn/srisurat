import ServerPhotoAlbum from "react-photo-album/server";
import "react-photo-album/rows.css";

import { StrapiImageType } from "@/lib/types";
import { Photo } from "react-photo-album";

type ImageGalleryProps = {
  props: StrapiImageType[];
};

const ImageGallery = ({ props }: ImageGalleryProps) => {
  const photos: Photo[] = props.map((prop) => {
    return {
      title: prop.name,
      src: prop.url,
      alt: prop.alternativeText || "สินค้า ศรีสุราษฎร์ บ้านน็อคดาวน์",
      width: prop.width,
      height: prop.height,
    } as Photo;
  });

  return (
    <ServerPhotoAlbum
      layout="rows"
      photos={photos}
      targetRowHeight={200}
      breakpoints={[300, 600]}
      sizes={{
        size: "1168px",
        sizes: [
          { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
        ],
      }}
    />
  );
};

export default ImageGallery;
