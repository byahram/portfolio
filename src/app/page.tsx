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
      <div className="introduction space-y-4 leading-relaxed text-gray-700 dark:text-gray-300 text-base">
        <p>
          안녕하세요. 항상 ‘왜?’를 고민하며 사용자 가치를 최우선으로 생각하는
          3년 차 프론트엔드 개발자 김아람입니다.
        </p>
        <p>
          새로운 기술과 변화에 열린 마음으로 빠르게 적응하며, 자율적으로 몰입해
          문제를 해결하는 개발자입니다. 긍정적인 에너지와 타협하지 않는
          집요함으로 더 나은 사용자 경험을 고민하고, 협업을 통해 함께 성장하는
          태도를 지향합니다.
        </p>
        <p>
          실패를 두려워하지 않고 꾸준히 실력을 키우며, 혁신을 실천하는
          개발자로서 최적의 서비스를 만들어가겠습니다. 항상 배움을 멈추지 않고,
          즐겁게 일하며 의미 있는 성과를 만들어가는 사람이 되겠습니다.
        </p>
      </div>

      {/* gallery */}
      <div className="gallery grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        {galleryList.map((item) => (
          <div
            key={item.id}
            className={`relative ${
              {
                1: "h-40",
                2: "sm:row-span-2 row-span-1",
                4: "row-span-2",
                5: "row-span-2",
                6: "h-40",
              }[item.id] || ""
            }`}
          >
            <Image
              onClick={() => setSelectedId(item.id)}
              alt={item.alt}
              src={item.src}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              className={`grayscale transition duration-300 hover:grayscale-0 rounded-lg object-cover ${
                {
                  2: "sm:object-top sm:object-center",
                  4: "sm:object-center",
                }[item.id] || ""
              }`}
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
              <div className="max-w-xl w-auto max-h-[80vh] overflow-hidden">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 90vw, 80vw"
                  className="rounded-md object-contain w-full h-full"
                />
              </div>
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
