export interface NotionCertificationRaw {
  id: string;
  properties?: {
    no: { number: number };
    name: { title: { plain_text: string }[] };
    organized: { rich_text: { plain_text: string }[] };
    date: { date: { start: string; end: string | null } };
  };
}

export interface CertificationData {
  no: string;
  name: string;
  organized: string;
  date: string;
}

export interface CertificationItem {
  id: string;
  properties: CertificationData | null;
}

export const transformCertificationDataFromNotion = (
  rawData: NotionCertificationRaw[] | null
): CertificationData[] => {
  if (!rawData) return [];

  return rawData.map((item) => {
    const properties = item.properties;
    if (!properties) {
      return {
        no: "",
        name: "",
        organized: "",
        date: "",
      };
    }

    const { no, name, organized, date } = properties;

    return {
      no: no.number.toString(),
      name: name.title.map((text) => text.plain_text).join(""),
      organized: organized.rich_text.map((text) => text.plain_text).join(""),
      date: date.date.start,
    };
  });
};
