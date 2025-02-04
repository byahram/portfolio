// [Side Project] Notion 원시 데이터 구조
export interface NotionSideProjProps {
  projectId: { title: { plain_text: string }[] };
  title: { rich_text: { plain_text: string }[] };
  description: { rich_text: { plain_text: string }[] };
  thumbnail: { url: string };
  tech: { multi_select: { name: string }[] };
  demo: { url: string };
  more: { url: string };
}

// [Side Project] 가공된 데이터
export interface SideProjectData {
  projectId: string;
  title: string;
  thumbnail: string;
  description: string;
  tech: string[];
  demo: string;
  more: string;
}

// [Side Project] 데이터 처리 함수
export const processSideProjData = (
  rawData: NotionSideProjProps[]
): SideProjectData[] => {
  return rawData.map((item) => {
    const { description, tech, title, projectId, thumbnail, demo, more } = item;

    return {
      projectId: projectId.title.map((text) => text.plain_text).join(""),
      title: title.rich_text.map((text) => text.plain_text).join(""),
      description: description.rich_text
        .map((text) => text.plain_text)
        .join(""),
      thumbnail: thumbnail.url,
      tech: tech.multi_select.map((techItem) => techItem.name),
      demo: demo.url,
      more: more.url,
    };
  });
};
