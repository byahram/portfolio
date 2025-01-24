// [Career] Notion 원시 데이터 구조
export interface NotionCareerProps {
  careerId: { title: { plain_text: string }[] };
  projectId: { relation: { id: string }[] };
  company: { rich_text: { plain_text: string }[] };
  description: { rich_text: { plain_text: string }[] };
  team: { rich_text: { plain_text: string }[] };
  position: { rich_text: { plain_text: string }[] };
  role: { rich_text: { plain_text: string }[] };
  rnr: { multi_select: { name: string }[] };
  techs: { multi_select: { name: string }[] };
  employment_period: {
    date: {
      start: string;
      end: string | null;
    } | null;
  };
  tenure: { rich_text: { plain_text: string }[] };
  status: { status: { name: string } };
}

// [Career] 가공된 데이터
export interface CareerData {
  careerId: string;
  projectId: string[];
  company: string;
  description: string;
  team: string;
  position: string;
  role: string;
  rnr: string[];
  techs: string[];
  employmentFrom: string | null;
  employmentTo: string | null;
  tenure: string;
  status: string;
}

// [Career] 데이터 처리 함수
export const processCareerData = (
  rawData: NotionCareerProps[]
): CareerData[] => {
  return rawData.map((item) => {
    const {
      careerId,
      projectId,
      company,
      description,
      team,
      position,
      role,
      rnr,
      techs,
      employment_period,
      tenure,
      status,
    } = item;

    return {
      careerId: careerId.title.map((text) => text.plain_text).join(""),
      projectId: projectId.relation.map((rel) => rel.id),
      company: company.rich_text.map((text) => text.plain_text).join(""),
      description: description.rich_text
        .map((text) => text.plain_text)
        .join(""),
      team: team.rich_text.map((text) => text.plain_text).join(""),
      position: position.rich_text.map((text) => text.plain_text).join(""),
      role: role.rich_text.map((text) => text.plain_text).join(""),
      rnr: rnr.multi_select.map((item) => item.name),
      techs: techs.multi_select.map((techItem) => techItem.name),
      employmentFrom: employment_period?.date?.start || null,
      employmentTo: employment_period?.date?.end || null,
      tenure: tenure.rich_text.map((text) => text.plain_text).join(""),
      status: status.status.name,
    };
  });
};

// [Career Project] Notion 원시 데이터 구조
export interface NotionCareerProjectProps {
  projectId: { title: { plain_text: string }[] };
  careerId: { relation: { id: string }[] };
  title: { rich_text: { plain_text: string }[] };
  team_composition: { rich_text: { plain_text: string }[] };
  contribution: { rich_text: { plain_text: string }[] };
  tech: { multi_select: { name: string }[] };
  responsibilities: { multi_select: { name: string }[] };
  achievements: { multi_select: { name: string }[] };
  from: { rich_text: { plain_text: string }[] };
  to: { rich_text: { plain_text: string }[] };
  reference: { rich_text: { plain_text: string }[] };
}

// [Career Project] 가공된 데이터
export interface CareerProjectData {
  projectId: string;
  careerId: string[];
  title: string;
  team_composition: string;
  contribution: string;
  tech: string[];
  responsibilities: string[];
  achievements: string[];
  from: string;
  to: string | null;
  reference: string | null;
}

// [Career Project] 데이터 처리 함수
export const processCareerProjectData = (
  rawData: NotionCareerProjectProps[]
): CareerProjectData[] => {
  return rawData.map((item) => {
    const {
      projectId,
      careerId,
      title,
      team_composition,
      contribution,
      tech,
      responsibilities,
      achievements,
      from,
      to,
      reference,
    } = item;

    return {
      projectId: projectId.title.map((text) => text.plain_text).join(""),
      careerId: careerId.relation.map((rel) => rel.id),
      title: title.rich_text.map((text) => text.plain_text).join(""),
      team_composition: team_composition.rich_text
        .map((text) => text.plain_text)
        .join(""),
      contribution: contribution.rich_text
        .map((text) => text.plain_text)
        .join(""),
      tech: tech.multi_select.map((item) => item.name),
      responsibilities: responsibilities.multi_select.map(
        (techItem) => techItem.name
      ),
      achievements: achievements.multi_select.map((techItem) => techItem.name),
      from: from.rich_text.map((text) => text.plain_text).join(""),
      to: to.rich_text.map((text) => text.plain_text).join(""),
      reference: reference.rich_text.map((text) => text.plain_text).join(""),
    };
  });
};
