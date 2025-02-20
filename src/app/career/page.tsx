"use client";

import React, { useEffect, useState } from "react";
import Line from "@/components/common/Line";
import { CareerApiResponse, ProjApiResponse } from "@/types/career";
import { fetchCareerData, fetchCareerProjectData } from "@/lib/apiList";
import ErrorMessage from "@/components/common/ErrorMessage";
import CareerSkeleton from "@/components/career/CareerSkeleton";
import Introduction from "@/components/career/Introduction";
import { formatDate } from "@/utils/common";
import ListDot from "@/components/common/ListDot";
import ProjectDetails from "@/components/career/ProjectDetails";

export default function Experience() {
  const [careers, setCareers] = useState<CareerApiResponse[]>([]);
  const [careerProjects, setCareerProjects] = useState<ProjApiResponse[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingCareer, setIsLoadingCareer] = useState(true);
  const [isLoadingProject, setIsLoadingProject] = useState(true);
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (projectId: string | null) => {
    if (openProject === projectId) {
      setOpenProject(null);
    } else {
      setOpenProject(projectId);
    }
  };

  const fetchCareers = async () => {
    try {
      const processedData = await fetchCareerData();
      console.log("fetchCareerData processedData ---> ", processedData);
      setCareers(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setIsLoadingCareer(false);
    }
  };

  const fetchCareerProjects = async () => {
    try {
      const processedData = await fetchCareerProjectData();
      console.log("fetchCareerProjectData processedData ---> ", processedData);
      setCareerProjects(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setIsLoadingProject(false);
    }
  };

  useEffect(() => {
    fetchCareers();
    fetchCareerProjects();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section id="work" className="my-10 md:my-16">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Work Experience
      </h1>

      {isLoadingCareer || isLoadingProject ? (
        <CareerSkeleton />
      ) : (
        <>
          {/* introduction */}
          <Introduction />

          {/* Career List */}
          {careers.map((career) => (
            <React.Fragment key={career.properties?.no}>
              <Line />
              <article id={`career-0${career.properties?.no}`}>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">
                  {career.properties?.company}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-5">
                  {career.properties?.role},{" "}
                  {formatDate(career.properties?.employmentFrom)} -{" "}
                  {formatDate(career.properties?.employmentTo)}
                </p>
                <p className="desc mb-2">{career.properties?.description}</p>
                {career.properties?.rnr && (
                  <ul className="flex flex-col gap-1">
                    {career.properties?.rnr.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <ListDot />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Career Projects List */}
                {careerProjects.length > 0 && (
                  <div className="projects mt-5">
                    <h3 className="font-medium text-lg">Projects:</h3>
                    <ul className="list-none">
                      {careerProjects
                        .filter(
                          (project) =>
                            project.properties?.careerId[0] === career.id
                        )
                        .reverse()
                        .map((project, index) => (
                          <li key={index} className="mt-2">
                            <button
                              onClick={() =>
                                toggleProject(project.properties?.no ?? null)
                              }
                              className="w-full text-left font-semibold text-sm bg-gray-200 dark:bg-neutral-700 p-3 rounded-lg dark:text-light hover:bg-gray-300 dark:hover:bg-neutral-600"
                            >
                              {index + 1}. {project.properties?.title}
                            </button>
                            {openProject === project.properties?.no && (
                              <ProjectDetails project={project.properties} />
                            )}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </article>
            </React.Fragment>
          ))}
        </>
      )}
    </section>
  );
}
