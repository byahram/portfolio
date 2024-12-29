"use client";

import React, { useState } from "react";
import BadgeText from "@/components/BadgeText";
import Line from "@/components/Line";
import { experienceList } from "@/store/store";

export default function Work() {
  const [openProject, setOpenProject] = useState<{
    experienceId: number;
    projId: number;
  } | null>(null);

  const toggleProject = (experienceId: number, projId: number) => {
    setOpenProject(
      openProject?.experienceId === experienceId &&
        openProject?.projId === projId
        ? null
        : { experienceId, projId }
    );
  };

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

      {/* Work List */}
      {experienceList.map((experience) => (
        <>
          <Line />
          <article key={experience.id} id={`work-${experience.id}`}>
            <h2 className="font-medium text-xl mb-1 tracking-tighter">
              {experience.company}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {experience.role}, {experience.duration.from}-
              {experience.duration.to || "Present"}
            </p>
            <div className="desc mt-5">
              <p>
                I joined <a href="https://vercel.com/home">Vercel</a> early to
                grow <a href="https://nextjs.org">Next.js</a> and our developer
                community. I built our Developer Relations team to teach our
                community about our products.
              </p>
            </div>
            {/* Project List */}
            {experience.projects.length > 0 && (
              <div className="projects mt-5">
                <h3 className="font-medium text-lg">Projects:</h3>
                <ul className="list-none">
                  {experience.projects.map((project, index) => (
                    <li key={index} className="mt-2">
                      <button
                        onClick={() =>
                          toggleProject(experience.id, project.projId)
                        }
                        className="w-full text-left font-semibold text-sm bg-gray-200 dark:bg-gray-400 p-3 rounded-lg dark:text-dark"
                      >
                        Project {index + 1}
                      </button>
                      {openProject?.experienceId === experience.id &&
                        openProject.projId === project.projId && (
                          <div className="project-details mt-2 p-3 bg-gray-100 dark:bg-gray-300 dark:text-dark rounded-lg">
                            <p>Details for Project {index + 1}</p>
                            {/* Add project details here */}
                          </div>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </>
      ))}
    </section>
  );
}
