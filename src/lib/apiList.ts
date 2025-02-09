import {
  NotionCareerProps,
  processCareerData,
  NotionCareerProjectProps,
  processCareerProjectData,
} from "@/types/career";
import {
  NotionSideProjectProps,
  processSideProjectData,
} from "@/types/sideProject";

// fetchCareerData
export const fetchCareerData = async () => {
  try {
    const response = await fetch("/api/career", { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: {
      id: string;
      properties?: NotionCareerProps["properties"] | null;
    }[] = await response.json();

    const careers = data.map((item) => ({
      id: item.id,
      properties: item.properties ? processCareerData([item])[0] ?? null : null,
    }));

    return careers;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// fetchCareerProjectData
export const fetchCareerProjectData = async () => {
  try {
    const response = await fetch("/api/career-project", { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: {
      id: string;
      properties?: NotionCareerProjectProps["properties"] | null;
    }[] = await response.json();

    const careerProjects = data.map((item) => {
      const processedData = processCareerProjectData([item]);
      return {
        id: item.id,
        properties: processedData.length > 0 ? processedData[0] : null, // 빈 배열이면 null
      };
    });

    return careerProjects;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// fetchSideProjectData
export const fetchSideProjectData = async () => {
  try {
    const response = await fetch("/api/side-project", { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: {
      id: string;
      url: string;
      properties: NotionSideProjectProps["properties"] | null;
    }[] = await response.json();

    const sideProjects = data.map((item) => {
      if (item.properties) {
        return {
          id: item.id,
          url: item.url,
          properties: processSideProjectData([item])[0], // 단일 객체 처리
        };
      }
      return { id: item.id, url: item.url, properties: null }; // properties가 null일 경우
    });

    return sideProjects;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};
