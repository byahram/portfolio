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
