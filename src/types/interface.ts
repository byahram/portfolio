// [Project] Notion 원시 데이터 구조
export interface NotionProjectProps {
  projectId: { title: { plain_text: string }[] };
  title: { rich_text: { plain_text: string }[] };
  description: { rich_text: { plain_text: string }[] };
  tech: { multi_select: { name: string }[] };
}
// [Project] 가공된 데이터
export interface ProjectData {
  projectId: string;
  title: string;
  description: string;
  tech: string[];
}
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
