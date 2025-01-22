import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import BadgeText from "@/components/BadgeText";
import { ProjectData } from "@/types/interface";

interface ProjectModalProps {
  project: ProjectData;
  closeModal: () => void;
}

export default function ProjectModal({
  project,
  closeModal,
}: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-5">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh]">
        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
        <div className="relative overflow-y-auto max-h-[calc(80vh-6rem)]">
          <div className="relative w-full h-0 pb-[56.25%] mb-2">
            <Image
              src="/images/default_16_9.avif"
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 rounded-md grayscale transition duration-300 hover:grayscale-0"
            />
          </div>
          <p className="mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <BadgeText key={tech}>{tech}</BadgeText>
            ))}
          </div>
        </div>
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-white text-black w-6 h-6"
        >
          <MdOutlineClose className="rounded-full w-full h-full p-0.5" />
        </button>
      </div>
    </div>
  );
}
