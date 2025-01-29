"use client";

import React, { useEffect, useState } from "react";
import BadgeText from "@/components/BadgeText";
import Line from "@/components/Line";
import { ApiResponse, CareerProjectData } from "@/types/career";
import { fetchCareerData, fetchCareerProjectData } from "@/lib/apiList";
import ErrorMessage from "@/components/common/ErrorMessage";

export default function Experience() {
  const [careers, setCareers] = useState<ApiResponse[]>([]);
  const [careerProjects, setCareerProjects] = useState<CareerProjectData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingCareer, setIsLoadingCareer] = useState(true);
  const [isLoadingProject, setIsLoadingProject] = useState(true);
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (projectId: string) => {
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

      const careersArray = processedData.map((item) => ({
        properties: item.properties,
        id: item.id,
      }));
      setCareers(careersArray);
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

  if (isLoadingCareer || isLoadingProject) {
    return <div>Loading...</div>;
  }

  return (
    <section id="work" className="my-10 md:my-16">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Work Experience
      </h1>

      {/* introduction */}
      <div>
        {`I'm a frontend developer, optimist, and community builder. I currently work as the VP of Product at`}
        <span className="not-prose">
          <BadgeText>asdf</BadgeText>
        </span>
        {`, where I help teach the `}
        <BadgeText>asdf</BadgeText>
        {` community, an open-source web framework built with `}
        <BadgeText>asdf</BadgeText>.
      </div>

      {/* Career List */}
      {careers.map((career) => (
        <React.Fragment key={career.properties?.careerId}>
          <Line />
          <article id={`career-${career.properties?.careerId}`}>
            <h2 className="font-medium text-xl mb-1 tracking-tighter">
              {career.properties?.company}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {career.properties?.role}, {career.properties?.employmentFrom}-
              {career.properties?.employmentTo || "Present"}
            </p>
            <div className="desc mt-5">
              <p>
                I joined <a href="https://vercel.com/home">Vercel</a> early to
                grow <a href="https://nextjs.org">Next.js</a> and our developer
                community. I built our Developer Relations team to teach our
                community about our products.
              </p>
            </div>
            {careerProjects.length > 0 && (
              <div className="projects mt-5">
                <h3 className="font-medium text-lg">Projects:</h3>
                <ul className="list-none">
                  {careerProjects
                    .filter((project) => project.careerId[0] === career.id)
                    .reverse()
                    .map((project, index) => (
                      <li key={index} className="mt-2">
                        <button
                          onClick={() => toggleProject(project.projectId)}
                          className="w-full text-left font-semibold text-sm bg-gray-200 dark:bg-gray-400 p-3 rounded-lg dark:text-dark"
                        >
                          {index + 1}. {project.title}
                        </button>
                        {openProject === project.projectId && (
                          <div className="project-details mt-2 p-3 bg-gray-100 dark:bg-gray-300 dark:text-dark rounded-lg">
                            <p>Details for Project {index + 1}</p>
                          </div>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </article>
        </React.Fragment>
      ))}
    </section>
  );
}
