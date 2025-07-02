export interface NotionEducationRaw {
  id: string;
  properties?: {
    no: { number: number };
    name: { title: { plain_text: string }[] };
    location: { rich_text: { plain_text: string }[] };
    degree: { rich_text: { plain_text: string }[] };
    major: { rich_text: { plain_text: string }[] };
    gpa: { rich_text: { plain_text: string }[] };
    status: { status: { name: string } };
    from: { rich_text: { plain_text: string }[] };
    to: { rich_text: { plain_text: string }[] };
    language: { rich_text: { plain_text: string }[] };
  };
}

export interface EducationData {
  no: string;
  name: string;
  location: string;
  degree: string;
  major: string;
  gpa: string;
  status: string;
  from: string;
  to: string;
  language: string;
}

export interface EducationItem {
  id: string;
  properties: EducationData | null;
}

export const transformEducationDataFromNotion = (
  rawData: NotionEducationRaw[] | null
): EducationData[] => {
  if (!rawData) return [];

  return rawData.map((item) => {
    const properties = item.properties;
    if (!properties) {
      return {
        no: "",
        name: "",
        location: "",
        degree: "",
        major: "",
        gpa: "",
        status: "",
        from: "",
        to: "",
        language: "",
      };
    }

    const {
      no,
      name,
      location,
      degree,
      major,
      gpa,
      status,
      from,
      to,
      language,
    } = properties;

    return {
      no: no.number.toString(),
      name: name.title.map((text) => text.plain_text).join(""),
      location: location.rich_text.map((text) => text.plain_text).join(""),
      degree: degree.rich_text.map((text) => text.plain_text).join(""),
      major: major.rich_text.map((text) => text.plain_text).join(""),
      gpa: gpa.rich_text.map((text) => text.plain_text).join(""),
      status: status.status.name,
      from: from.rich_text.map((text) => text.plain_text).join(""),
      to: to.rich_text.map((text) => text.plain_text).join(""),
      language: language.rich_text.map((text) => text.plain_text).join(""),
    };
  });
};
