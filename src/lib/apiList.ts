import {
  NotionRoutingRaw,
  RoutingItem,
  transformRoutingDataFromNotion,
} from "@/types/routing";
import {
  NotionProfileRaw,
  ProfileItem,
  transformProfileDataFromNotion,
} from "@/types/profile";
import {
  GalleryItem,
  NotionGalleryRaw,
  transformGalleryDataFromNotion,
} from "@/types/gallery";
import {
  EducationItem,
  NotionEducationRaw,
  transformEducationDataFromNotion,
} from "@/types/education";
import {
  NotionSkillsRaw,
  SkillsItem,
  transformSkillsDataFromNotion,
} from "@/types/skills";
import {
  CertificationItem,
  NotionCertificationRaw,
  transformCertificationDataFromNotion,
} from "@/types/certification";
import {
  CareerItem,
  NotionCareerRaw,
  transformCareerDataFromNotion,
} from "@/types/career";
import {
  NotionProjectsRaw,
  ProjectsItem,
  transformProjectsDataFromNotion,
} from "@/types/projects";

// fetchRoutingData
export const fetchRoutingData = async () => {
  try {
    const response = await fetch("/api/notion?type=routing", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: NotionRoutingRaw[] = await response.json();

    const routing: RoutingItem[] = data.map((item) => ({
      id: item.id,
      properties: item.properties
        ? transformRoutingDataFromNotion([item])[0] ?? null
        : null,
    }));

    return routing;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// fetchProfileData
export const fetchProfileData = async () => {
  try {
    const response = await fetch("/api/notion?type=profile", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: NotionProfileRaw[] = await response.json();

    const profile: ProfileItem[] = data.map((item) => ({
      id: item.id,
      properties: item.properties
        ? transformProfileDataFromNotion([item])[0] ?? null
        : null,
    }));

    return profile;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// fetchGalleryData
export const fetchGalleryData = async () => {
  try {
    const response = await fetch("/api/notion?type=gallery", { method: "GET" });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: NotionGalleryRaw[] = await response.json();

    const gallery: GalleryItem[] = data.map((item) => ({
      id: item.id,
      properties: item.properties
        ? transformGalleryDataFromNotion([item])[0] ?? null
        : null,
    }));

    return gallery;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// fetchEducationData
export const fetchEducationData = async () => {
  try {
    const response = await fetch("/api/notion?type=education", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: NotionEducationRaw[] = await response.json();

    const routing: EducationItem[] = data.map((item) => ({
      id: item.id,
      properties: item.properties
        ? transformEducationDataFromNotion([item])[0] ?? null
        : null,
    }));

    return routing;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// fetchSkillsData
export const fetchSkillsData = async () => {
  try {
    const response = await fetch("/api/notion?type=skills", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: NotionSkillsRaw[] = await response.json();

    const skills: SkillsItem[] = data.map((item) => ({
      id: item.id,
      properties: item.properties
        ? transformSkillsDataFromNotion([item])[0] ?? null
        : null,
    }));

    return skills;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// fetchCertificationData
export const fetchCertificationData = async () => {
  try {
    const response = await fetch("/api/notion?type=certification", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: NotionCertificationRaw[] = await response.json();

    const certification: CertificationItem[] = data.map((item) => ({
      id: item.id,
      properties: item.properties
        ? transformCertificationDataFromNotion([item])[0] ?? null
        : null,
    }));

    return certification;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// fetchCareerData
export const fetchCareerData = async () => {
  try {
    const response = await fetch("/api/career?type=career", { method: "GET" });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: NotionCareerRaw[] = await response.json();

    const career: CareerItem[] = data.map((item) => ({
      id: item.id,
      properties: item.properties
        ? transformCareerDataFromNotion([item])[0] ?? null
        : null,
    }));

    return career;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// fetchProjectsData
export const fetchProjectsData = async () => {
  try {
    const response = await fetch("/api/notion?type=projects", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: NotionProjectsRaw[] = await response.json();

    const projects: ProjectsItem[] = data.map((item) => ({
      id: item.id,
      properties: item.properties
        ? transformProjectsDataFromNotion([item])[0] ?? null
        : null,
    }));

    return projects;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};
