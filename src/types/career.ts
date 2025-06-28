export interface NotionCareerRaw {
  id: string;
  properties?: {
    no: { number: number };
    company: { title: { plain_text: string }[] };
    description: { rich_text: { plain_text: string }[] };
    team: { rich_text: { plain_text: string }[] };
    position: { rich_text: { plain_text: string }[] };
    role: { rich_text: { plain_text: string }[] };
    rnr: { multi_select: { name: string }[] };
    techs: { multi_select: { name: string }[] };
    period: {
      date: {
        start: string;
        end: string | null;
      } | null;
    };
    tenure: { rich_text: { plain_text: string }[] };
    status: { status: { name: string } };
  } | null;
}

export interface CareerData {
  no: string;
  company: string;
  description: string;
  team: string;
  position: string;
  role: string;
  rnr: string[];
  techs: string[];
  employFrom: string | null;
  employTo: string | null;
  tenure: string;
  status: string;
}

export interface CareerItem {
  id: string;
  properties: CareerData | null;
}

export const transformCareerDataFromNotion = (
  rawData: NotionCareerRaw[] | null
): CareerData[] => {
  if (!rawData) return [];

  return rawData.map((item) => {
    const properties = item.properties;
    if (!properties) {
      return {
        no: "",
        company: "",
        description: "",
        team: "",
        position: "",
        role: "",
        rnr: [],
        techs: [],
        employFrom: "",
        employTo: "",
        tenure: "",
        status: "",
      };
    }

    const {
      no,
      company,
      description,
      team,
      position,
      role,
      rnr,
      techs,
      period,
      tenure,
      status,
    } = properties;

    return {
      no: no.number.toString(),
      company: company.title.map((text) => text.plain_text).join(""),
      description: description.rich_text
        .map((text) => text.plain_text)
        .join(""),
      team: team.rich_text.map((text) => text.plain_text).join(""),
      position: position.rich_text.map((text) => text.plain_text).join(""),
      role: role.rich_text.map((text) => text.plain_text).join(""),
      rnr: rnr.multi_select.map((item) => item.name),
      techs: techs.multi_select.map((techItem) => techItem.name),
      employFrom: period?.date?.start || null,
      employTo: period?.date?.end || null,
      tenure: tenure.rich_text.map((text) => text.plain_text).join(""),
      status: status.status.name,
    };
  });
};
