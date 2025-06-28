export interface NotionGalleryRaw {
  id: string;
  properties?: {
    no: { number: number };
    src: { title: { plain_text: string }[] };
    alt: { rich_text: { plain_text: string }[] };
  };
}

export interface GalleryData {
  no: string;
  src: string;
  alt: string;
}

export interface GalleryItem {
  id: string;
  properties: GalleryData | null;
}

export const transformGalleryDataFromNotion = (
  rawData: NotionGalleryRaw[] | null
): GalleryData[] => {
  if (!rawData) return [];

  return rawData.map((item) => {
    const properties = item.properties;
    if (!properties) {
      return {
        no: "",
        src: "",
        alt: "",
      };
    }

    const { no, src, alt } = properties;

    return {
      no: no.number.toString(),
      src: src.title.map((text) => text.plain_text).join(""),
      alt: alt.rich_text.map((text) => text.plain_text).join(""),
    };
  });
};
