import React from "react";

interface ProjectDetailsProps {
  project: {
    title?: string;
    introduction?: string;
    tech?: string[];
    team_composition?: string;
    contribution?: string;
    responsibilities?: string[];
    achievements: string[];
    reference?: string | null;
  };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <ul className="project-details mt-2 p-4 bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 rounded-lg transition-all duration-300 ease-in-out">
      {/* 프로젝트 제목 */}
      {/* {project?.title && (
        <li className="font-semibold text-lg text-gray-800 dark:text-gray-200">
          {project?.title}
        </li>
      )} */}

      {/* 소개 */}
      {project?.introduction && (
        <li className="mt-2 text-sm flex items-start">
          <p className="font-medium leading-5.5">{project?.introduction}</p>
        </li>
      )}

      {/* 기술 스택 */}
      {Array.isArray(project?.tech) && project?.tech.length > 0 && (
        <li className="list-disc list-inside mt-2 text-sm">
          <strong className="text-gray-700 dark:text-gray-300">Techs:</strong>{" "}
          {project?.tech.join(", ")}
        </li>
      )}

      {/* 기여도 & 팀 구성 */}
      {project?.contribution && project?.team_composition && (
        <li className="list-disc list-inside mt-2 text-sm">
          <strong className="text-gray-700 dark:text-gray-300">
            Contribution:
          </strong>{" "}
          {project?.contribution} / {project?.team_composition}
        </li>
      )}

      {/* 담당 역할 */}
      {project?.responsibilities && (
        <>
          <li className="list-disc list-inside mt-2 text-sm">
            <strong className="text-gray-700 dark:text-gray-300">
              Responsibilities:
            </strong>
            <ul className="list-inside text-sm ml-4 mt-1">
              {project?.responsibilities.map((task, i) => (
                <li key={i}>- {task}</li>
              ))}
            </ul>
          </li>
        </>
      )}

      {/* 주요 성과 */}
      {project?.achievements?.length > 0 && (
        <>
          <li className="list-disc list-inside mt-2 text-sm">
            <strong className="text-gray-700 dark:text-gray-300">
              Achievements:
            </strong>
            <ul className="list-inside text-sm ml-4 mt-1">
              {project?.achievements.map((task, i) => (
                <li key={i}>- {task}</li>
              ))}
            </ul>
          </li>
        </>
      )}

      {/* 참고 링크 */}
      {project?.reference && (
        <li className="list-disc list-inside mt-2 text-sm">
          <strong className="text-gray-700 dark:text-gray-300">More:</strong>{" "}
          <a
            href={project?.reference}
            className="text-blue-600 dark:text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            click
          </a>
        </li>
      )}
    </ul>
  );
};

export default ProjectDetails;
