"use client";

import { useState } from "react";
import BadgeText from "@/components/common/BadgeText";
import { motion } from "framer-motion";
import { ApiResponse } from "@/types/sideProject";
import Image from "next/image";
import ProjectModal from "@/components/project/ProjectModal";

interface ProjectCardProps {
  project: ApiResponse;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-white text-gray-600 dark:text-light dark:bg-neutral-800 dark:border-neutral-600 group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative w-full h-0 pb-[65.25%] mb-2 overflow-hidden">
          <Image
            src={project.properties?.thumbnail || ""}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 rounded-md grayscale transition duration-300 group-hover:grayscale-0"
          />
        </div>
        <h2 className="text-xl font-semibold">{project.properties?.title}</h2>
        <p className="text-base line-clamp-2 overflow-hidden text-ellipsis h-12 mt-1">
          {project.properties?.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.properties?.tech.slice(0, 3).map((tech) => (
            <BadgeText key={tech}>{tech}</BadgeText>
          ))}
        </div>
      </motion.div>

      {/* 모달 창 */}
      {isModalOpen && project.properties && (
        <ProjectModal
          project={project.properties} // project 데이터를 전달
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
