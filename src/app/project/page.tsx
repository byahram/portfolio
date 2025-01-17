"use client";

import { techStackOptions } from "@/store/store";
import { useEffect, useState } from "react";

// Define types for raw data
// interface NotionItem {
//   id: string;
//   properties: {
//     Name: {
//       title: { plain_text: string }[];
//     };
//   };
// }
interface InterfaceNotionData {
  description: { rich_text: { plain_text: string }[] };
  tech: { multi_select: { name: string }[] };
  title: { rich_text: { plain_text: string }[] };
  projectId: { title: { plain_text: string }[] };
}

type ProcessedData = {
  description: string;
  tech: string[];
  title: string;
  projectId: string;
};

const processNotionData = (rawData: InterfaceNotionData[]): ProcessedData[] => {
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
  const [projects, setProjects] = useState<ProcessedData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedStack, setSelectedStack] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/side-project", { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: { properties: InterfaceNotionData }[] = await response.json();
      const propertiesOnly = data.map((item) => item.properties);
      const processedData = processNotionData(propertiesOnly);
      console.log(" processedData :: ", processedData);
      setProjects(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredProjects = selectedStack
    ? projects
        .filter((project) => project.tech.includes(selectedStack))
        .reverse()
    : projects.reverse();

  return (
    <section id="about" className="my-10 md:my-16">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Project</h1>
      {/* <p>페이지 준비중입니다.</p> */}

      {/* Tech Stack Buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          className={`px-4 py-1 text-base rounded border transition-all ${
            selectedStack === ""
              ? "bg-neutral-600 text-light border-white dark:bg-neutral-600 dark:border-neutral-400 dark:text-light"
              : "bg-white dark:bg-light dark:border-neutral-600 dark:text-dark"
          }`}
          onClick={() => setSelectedStack("")}
        >
          All
        </button>
        {techStackOptions.map((tech) => (
          <button
            key={tech}
            className={`px-4 py-1 text-base rounded border transition-all ${
              selectedStack === tech
                ? "bg-neutral-600 text-light border-white dark:bg-neutral-600 dark:border-neutral-400 dark:text-light"
                : "bg-white dark:bg-light dark:border-neutral-600 dark:text-dark"
            }`}
            onClick={() => setSelectedStack(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.projectId}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-gray-100 border rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
