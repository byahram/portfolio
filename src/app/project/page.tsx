"use client";

// import { projectsList, techStackOptions } from "@/store/store";
// import { useState } from "react";

export default function Project() {
  // const [selectedStack, setSelectedStack] = useState("");

  // const filteredProjects = selectedStack
  //   ? projectsList.filter((project) =>
  //       project.techStack.includes(selectedStack)
  //     )
  //   : projectsList;

  return (
    <section id="about" className="my-10 md:my-16">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Project</h1>
      <p>페이지 준비중입니다.</p>

      {/* Tech Stack Buttons */}
      {/* <div className="mb-8 flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded border ${
            selectedStack === "" ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => setSelectedStack("")}
        >
          All
        </button>
        {techStackOptions.map((tech) => (
          <button
            key={tech}
            className={`px-4 py-2 rounded border ${
              selectedStack === tech ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setSelectedStack(tech)}
          >
            {tech}
          </button>
        ))}
      </div> */}

      {/* Projects List */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
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
      </div> */}
    </section>
  );
}
