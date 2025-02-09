import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import BadgeText from "@/components/common/BadgeText";
import { SideProjectData } from "@/types/sideProject";

interface ProjectModalProps {
  project: SideProjectData;
  closeModal: () => void;
}

export default function ProjectModal({
  project,
  closeModal,
}: ProjectModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div
        className="relative bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] border border-gray-300 dark:bg-neutral-800 dark:border-neutral-600"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-light mb-4">
          {project.title}
        </h2>
        <div className="relative overflow-y-auto max-h-[calc(80vh-6rem)] space-y-4">
          <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
            <Image
              src={project.thumbnail || "/images/default_16_9.avif"}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 transition duration-300 rounded-lg shadow-md"
            />
          </div>
          <ul>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((tech) => (
                <BadgeText key={tech}>{tech}</BadgeText>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 py-3 text-center bg-neutral-700 dark:bg-light dark:text-black text-light font-bold rounded-lg shadow-md transition"
                >
                  Demo
                </a>
              )}
              {project.detail && (
                <a
                  href={project.detail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 py-3 text-center bg-light text-black border border-neutral-400 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100 rounded-lg shadow-md font-bold transition"
                >
                  More Info
                </a>
              )}
            </div>
          </ul>
        </div>
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-white text-black dark:bg-neutral-800 dark:text-light w-6 h-6"
        >
          <MdOutlineClose className="rounded-full w-full h-full p-0.5" />
        </button>
      </motion.div>
    </motion.div>
  );
}
