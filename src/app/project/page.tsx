"use client";

import ErrorMessage from "@/components/common/ErrorMessage";
import ProjectModal from "@/components/project/DetailModal";
import ProjectCard from "@/components/project/ProjectCard";
import SkeletonLoading from "@/components/project/ProjectSkeleton";
import TechStackFilter from "@/components/project/TechStackFilter";
import { techStackOptions } from "@/store/store";
import { ProjectData, NotionProjectProps } from "@/types/interface";
import { useEffect, useState } from "react";

const processProjectData = (rawData: NotionProjectProps[]): ProjectData[] => {
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

export default function Project() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStack, setSelectedStack] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const fetchData = async () => {
    try {
      const response = await fetch("/api/side-project", { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: { properties: NotionProjectProps }[] = await response.json();
      const propertiesOnly = data.map((item) => item.properties);
      const processedData = processProjectData(propertiesOnly);
      console.log(" processedData :: ", processedData);
      setProjects(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = selectedStack
    ? projects
        .filter((project) => project.tech.includes(selectedStack))
        .reverse()
    : projects.reverse();

  return (
    <section id="about" className="my-10 md:my-16">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Project</h1>

      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <>
          {/* Tech Stack Buttons */}
          <TechStackFilter
            techStackOptions={techStackOptions}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />

          {/* Projects List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.projectId}
                project={project}
                openModal={openModal}
              />
            ))}
          </div>
        </>
      )}

      {/* 모달 */}
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}
    </section>
  );
}
