import BadgeText from "@/components/common/BadgeText";
import { SideProjectData } from "@/types/sideProject";
import Image from "next/image";

interface ProjectCardProps {
  project: SideProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-white text-gray-600 dark:text-light dark:bg-neutral-800 dark:border-neutral-600 group">
      <div className="relative w-full h-0 pb-[65.25%] mb-2 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt="thumbnail"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 rounded-md grayscale transition duration-300 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-dark/40 text-light flex items-center justify-center rounded-full shadow-md hover:bg-dark transition"
          >
            Demo
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-light/40 text-black flex items-center justify-center rounded-full shadow-md hover:bg-light transition"
          >
            More
          </a>
        </div>
      </div>
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-base line-clamp-2 overflow-hidden text-ellipsis h-12 mt-1">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <BadgeText key={tech}>{tech}</BadgeText>
        ))}
      </div>
      <div className="mt-6 flex justify-between gap-4 md:hidden">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 py-3 text-center bg-dark/80 dark:bg-light dark:text-black text-light font-bold rounded-lg shadow-md transition"
        >
          Demo
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 py-3 text-center bg-light text-black rounded-lg shadow-md font-bold transition"
        >
          More
        </a>
      </div>
    </div>
  );
}
