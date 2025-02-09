"use client";

import ErrorMessage from "@/components/common/ErrorMessage";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectSkeleton from "@/components/project/ProjectSkeleton";
import TechStackFilter from "@/components/project/TechStackFilter";
import { techStackOptions } from "@/store/store";
import { useEffect, useState } from "react";
import { ApiResponse } from "@/types/sideProject";
import { FaRegFolderOpen } from "react-icons/fa";
import { fetchSideProjectData } from "@/lib/apiList";

export default function Projects() {
  const [projects, setProjects] = useState<ApiResponse[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStack, setSelectedStack] = useState("");

  const fetchSideProjects = async () => {
    try {
      const processedData = await fetchSideProjectData();
      console.log("fetchSideProjects processedData ---> ", processedData);
      setProjects(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSideProjects();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const filteredProjects = selectedStack
    ? projects
        .filter(
          (project) =>
            project.properties?.tech?.includes(selectedStack) ?? false
        )
        .reverse()
    : projects.reverse();

  return (
    <section id="about" className="my-10 md:my-16">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Project</h1>

      {isLoading ? (
        <ProjectSkeleton />
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
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center py-10 text-gray-500 dark:text-gray-300">
                <FaRegFolderOpen className="text-5xl mb-3 text-gray-400 dark:text-gray-500" />
                <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                  프로젝트가 없습니다.
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  다른 기술 스택을 선택해 보세요!
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}
