// [Career] Notion 원시 데이터 구조
export interface NotionCareerProps {
  id: string;
  properties?: {
    // `?`를 추가하여 `undefined` 허용
    no: { number: number };
    company: { title: { plain_text: string }[] };
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
  } | null;
}

// [Career] API에서 반환되는 데이터 타입 정의
export interface CareerApiResponse {
  id: string;
  properties: CareerData | null;
}

// [Career] 가공된 데이터
export interface CareerData {
  no: string;
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
  rawData: NotionCareerProps[] | null
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
        employmentFrom: "",
        employmentTo: "",
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
      employment_period,
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
      employmentFrom: employment_period?.date?.start || null,
      employmentTo: employment_period?.date?.end || null,
      tenure: tenure.rich_text.map((text) => text.plain_text).join(""),
      status: status.status.name,
    };
  });
};

// [Career Project] Notion 원시 데이터 구조
export interface NotionCareerProjectProps {
  id: string;
  properties?: {
    no: { number: number };
    careerId: { relation: { id: string }[] };
    title: { title: { plain_text: string }[] };
    introduction: { rich_text: { plain_text: string }[] };
    team_composition: { rich_text: { plain_text: string }[] };
    contribution: { rich_text: { plain_text: string }[] };
    tech: { multi_select: { name: string }[] };
    responsibilities: { multi_select: { name: string }[] };
    achievements: { multi_select: { name: string }[] };
    from: { rich_text: { plain_text: string }[] };
    to: { rich_text: { plain_text: string }[] };
    reference: { rich_text: { plain_text: string }[] };
  } | null;
}

// [Career Project] API에서 반환되는 데이터 타입 정의
export interface ProjApiResponse {
  id: string;
  properties: CareerProjectData | null;
}

// [Career Project] 가공된 데이터
export interface CareerProjectData {
  no: string;
  careerId: string[];
  title: string;
  introduction: string;
  team_composition: string;
  contribution: string;
  tech: string[];
  responsibilities: string[];
  achievements: string[];
  from: string | null;
  to: string | null;
  reference: string | null;
}

// [Career Project] 데이터 처리 함수
export const processCareerProjectData = (
  rawData: NotionCareerProjectProps[] | null
): CareerProjectData[] => {
  if (!rawData) return [];

  return rawData.map((item) => {
    const properties = item.properties;
    if (!properties) {
      return {
        no: "",
        careerId: [],
        title: "",
        introduction: "",
        team_composition: "",
        contribution: "",
        tech: [],
        responsibilities: [],
        achievements: [],
        from: null,
        to: null,
        reference: null,
      };
    }

    const {
      no,
      careerId,
      title,
      introduction,
      team_composition,
      contribution,
      tech,
      responsibilities,
      achievements,
      from,
      to,
      reference,
    } = properties;

    return {
      no: no.number.toString(),
      careerId: careerId.relation.map((rel) => rel.id),
      title: title.title.map((text) => text.plain_text).join(""),
      introduction:
        introduction.rich_text?.map((text) => text.plain_text).join("") || "",
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
      reference:
        reference?.rich_text?.map((text) => text.plain_text).join("") || null,
    };
  });
};
