// [Side Project] Notion 원시 데이터 구조
export interface NotionSideProjectProps {
  id: string;
  url: string;
  properties: {
    no: { number: number };
    title: { title: { plain_text: string }[] };
    description: { rich_text: { plain_text: string }[] };
    thumbnail: { url: string };
    tech: { multi_select: { name: string }[] };
    demo: { url: string };
    detail: { url: string };
  } | null; // properties가 null일 수 있도록 수정
}

// [Side Project] API에서 반환되는 데이터 타입 정의
export interface ApiResponse {
  id: string;
  url: string;
  properties: SideProjectData | null;
}

// [Side Project] 가공된 데이터
export interface SideProjectData {
  no: string;
  title: string;
  description: string;
  thumbnail: string;
  tech: string[];
  demo: string;
  detail: string;
}

// [Side Project] 데이터 처리 함수
export const processSideProjectData = (
  rawData: NotionSideProjectProps[] | null
): SideProjectData[] => {
  if (!rawData) return [];

  return rawData.map((item) => {
    const properties = item.properties;
    if (!properties) {
      return {
        no: "N/A", // 기본 값 설정
        title: "No Title",
        description: "No description",
        thumbnail: "",
        tech: [],
        demo: "",
        detail: "",
      };
    }
    const { no, title, description, thumbnail, tech, demo, detail } =
      properties;

    return {
      no: no.number.toString(),
      title: title.title.map((text) => text.plain_text).join(""),
      description: description.rich_text
        .map((text) => text.plain_text)
        .join(""),
      thumbnail: thumbnail.url,
      tech: tech.multi_select.map((techItem) => techItem.name),
      demo: demo.url,
      detail: detail.url,
    };
  });
};
