// [Side Project]  Notion 원시 데이터 구조
export interface NotionSideProjectProps {
  projectId: { title: { plain_text: string }[] };
  title: { rich_text: { plain_text: string }[] };
  description: { rich_text: { plain_text: string }[] };
  tech: { multi_select: { name: string }[] };
}

// [Side Project] 가공된 데이터
export interface SideProjectData {
  projectId: string;
  title: string;
  description: string;
  tech: string[];
}

// [Side Project] 데이터 처리 함수
export const processSideProjectData = (
  rawData: NotionSideProjectProps[]
): SideProjectData[] => {
  return rawData.map((item) => {
    const { description, tech, title, projectId } = item;

    return {
      description: description.rich_text
        .map((text) => text.plain_text)
        .join(""),
      tech: tech.multi_select.map((techItem) => techItem.name),
      title: title.rich_text.map((text) => text.plain_text).join(""),
      projectId: projectId.title.map((text) => text.plain_text).join(""),
    };
  });
};
