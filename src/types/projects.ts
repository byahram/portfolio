export interface NotionProjectsRaw {
  id: string;
  properties?: {
    no: { number: number };
    title: { title: { plain_text: string }[] };
    careerId: { relation: { id: string }[] };
    description: { rich_text: { plain_text: string }[] };
    thumbnail: { rich_text: { plain_text: string }[] };
    team_composition: { rich_text: { plain_text: string }[] };
    contribution: { rich_text: { plain_text: string }[] };
    tech: { multi_select: { name: string }[] };
    responsibilities: { multi_select: { name: string }[] };
    achievements: { multi_select: { name: string }[] };
    from: { rich_text: { plain_text: string }[] };
    to: { rich_text: { plain_text: string }[] };
    demo: {
      rich_text: {
        plain_text: string;
        text?: {
          link?: {
            url: string;
          };
        };
      }[];
    };

    github: {
      rich_text: {
        plain_text: string;
        text?: {
          link?: {
            url: string;
          };
        };
      }[];
    };
  } | null;
}

export interface ProjectsData {
  no: string;
  title: string;
  careerId: string[];
  description: string;
  thumbnail: string;
  team_composition: string;
  contribution: string;
  tech: string[];
  responsibilities: string[];
  achievements: string[];
  from: string | null;
  to: string | null;
  demo: string | null;
  github: string | null;
}

export interface ProjectsItem {
  id: string;
  properties: ProjectsData | null;
}

export const transformProjectsDataFromNotion = (
  rawData: NotionProjectsRaw[] | null
): ProjectsData[] => {
  if (!rawData) return [];

  return rawData.map((item) => {
    const properties = item.properties;
    if (!properties) {
      return {
        no: "",
        title: "",
        careerId: [],
        description: "",
        thumbnail: "",
        team_composition: "",
        contribution: "",
        tech: [],
        responsibilities: [],
        achievements: [],
        from: null,
        to: null,
        demo: null,
        github: null,
      };
    }

    const {
      no,
      title,
      careerId,
      description,
      thumbnail,
      team_composition,
      contribution,
      tech,
      responsibilities,
      achievements,
      from,
      to,
      demo,
      github,
    } = properties;

    return {
      no: no.number.toString(),
      title: title.title.map((text) => text.plain_text).join(""),
      careerId: careerId.relation.map((rel) => rel.id),
      description:
        description.rich_text?.map((text) => text.plain_text).join("") || "",
      thumbnail:
        thumbnail.rich_text?.map((text) => text.plain_text).join("") || "",
      team_composition:
        team_composition.rich_text?.map((text) => text.plain_text).join("") ||
        "",
      contribution:
        contribution.rich_text?.map((text) => text.plain_text).join("") || "",
      tech: tech?.multi_select?.map((item) => item.name) ?? [],
      responsibilities:
        responsibilities?.multi_select?.map((techItem) => techItem.name) ?? [],
      achievements:
        achievements?.multi_select?.map((techItem) => techItem.name) ?? [],
      from: from?.rich_text?.map((text) => text.plain_text).join("") || null,
      to: to?.rich_text?.map((text) => text.plain_text).join("") || null,
      demo: demo.rich_text?.map((text) => text.text?.link?.url).join("") || "",
      github:
        github.rich_text?.map((text) => text.text?.link?.url).join("") || "",
    };
  });
};
