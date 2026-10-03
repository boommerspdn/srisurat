// Image shape shared by the existing section components.
export type StrapiImageType = {
  id: number;
  name: string;
  alternativeText: string | null;
  width: number;
  height: number;
  url: string;
};

export type HighlightType = {
  image: StrapiImageType;
  title: string;
  description: string;
};
