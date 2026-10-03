import Image from "next/image";

interface StrapiImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
  fill,
  sizes,
  priority,
}: Readonly<StrapiImageProps>) {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={className}
      fill={fill}
      sizes={sizes}
      priority={priority}
    />
  );
}
