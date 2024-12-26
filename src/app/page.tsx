"use client";

import { galleryList } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

export default function Home() {
  const [selectedId, setSelectedId] = useState<null | number>(null);

  const selectedItem = galleryList.find((item) => item.id === selectedId);

  return (
    <section id="home" className="my-10 md:my-16">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hello, I am Ahram Kim 👋
      </h1>

      {/* introduction */}
      <div className="introduction">
        안녕하세요. 3년차 프론트엔드 김아람입니다.
      </div>

      {/* gallery */}
      <div className="gallery grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        {galleryList.map((item, index) => (
          <div className={`${item.divClass}`} key={index}>
            <Image
              onClick={() => setSelectedId(item.id)}
              alt={`${item.alt}`}
              src={`${item.src}`}
              fill
              sizes={`${item.sizes}`}
              className={`grayscale transition duration-300 hover:grayscale-0 ${item.imgClass}`}
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative bg-white rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                width={500}
                height={500}
                className="rounded-md"
              />
              <button
                className="absolute top-4 right-4 bg-white hover:bg-black text-black hover:text-white w-6 h-6 border-black border-2 rounded-full"
                onClick={() => setSelectedId(null)}
              >
                <MdOutlineClose
                  width={100}
                  height={100}
                  className=" rounded-full w-full h-full p-0.5"
                />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
