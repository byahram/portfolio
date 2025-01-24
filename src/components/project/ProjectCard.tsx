import BadgeText from "@/components/BadgeText";
import { SideProjectData } from "@/types/sideProject";
import Image from "next/image";

interface ProjectCardProps {
  project: SideProjectData;
  openModal: (project: SideProjectData) => void;
}

export default function ProjectCard({ project, openModal }: ProjectCardProps) {
  return (
    <div
      className="p-4 cursor-pointer border rounded-lg shadow hover:shadow-lg transition bg-white text-gray-600 dark:text-light dark:bg-neutral-800 dark:border-neutral-600"
      onClick={() => openModal(project)}
    >
      <div className="relative w-full h-0 pb-[65.25%] mb-2">
        <Image
          src="/images/default_16_9.avif"
          alt="thumbnail"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 rounded-md grayscale transition duration-300 hover:grayscale-0"
        />
      </div>
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-base">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <BadgeText key={tech}>{tech}</BadgeText>
        ))}
      </div>
    </div>
  );
}
