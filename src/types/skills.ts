export interface NotionSkillsRaw {
  id: string;
  properties?: {
    no: { number: number };
    category: { title: { plain_text: string }[] };
    skills: { rich_text: { plain_text: string }[] };
  };
}

export interface SkillsData {
  no: string;
  category: string;
  skills: string;
}

export interface SkillsItem {
  id: string;
  properties: SkillsData | null;
}

export const transformSkillsDataFromNotion = (
  rawData: NotionSkillsRaw[] | null
): SkillsData[] => {
  if (!rawData) return [];

  return rawData.map((item) => {
    const properties = item.properties;
    if (!properties) {
      return {
        no: "",
        category: "",
        skills: "",
      };
    }

    const { no, category, skills } = properties;

    return {
      no: no.number.toString(),
      category: category.title.map((text) => text.plain_text).join(""),
      skills: skills.rich_text.map((text) => text.plain_text).join(""),
    };
  });
};
