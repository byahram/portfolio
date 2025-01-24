import {
  NotionCareerProps,
  processCareerData,
  NotionCareerProjectProps,
  processCareerProjectData,
} from "@/types/career";
import { NotionSideProjProps, processSideProjData } from "@/types/sideProject";

// fetchCareerData
export const fetchCareerData = async () => {
  try {
    const response = await fetch("/api/career", { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: { properties: NotionCareerProps }[] = await response.json();
    const propertiesOnly = data.map((item) => item.properties);
    return processCareerData(propertiesOnly);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// fetchCareerData
export const fetchCareerProjectData = async () => {
  try {
    const response = await fetch("/api/career-project", { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: { properties: NotionCareerProjectProps }[] =
      await response.json();
    const propertiesOnly = data.map((item) => item.properties);
    return processCareerProjectData(propertiesOnly);
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

    const data: { properties: NotionSideProjProps }[] = await response.json();
    const propertiesOnly = data.map((item) => item.properties);
    return processSideProjData(propertiesOnly);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};
