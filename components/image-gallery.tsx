import ServerPhotoAlbum from "react-photo-album/server";
import "react-photo-album/rows.css";

import { StrapiImageType } from "@/lib/types";
import { Photo } from "react-photo-album";

type ImageGalleryProps = {
  props: StrapiImageType[];
};

const ImageGallery = ({ props }: ImageGalleryProps) => {
  const photos: Photo[] = props.map((prop) => {
    const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
    return {
      title: prop.name,
      src: process.env.STRAPI_API_URL + prop.url,
      alt: prop.alternativeText || "",
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
