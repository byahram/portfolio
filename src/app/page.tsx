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
      <div className="introduction space-y-4 leading-relaxed text-gray-700 dark:text-gray-300 text-sm sm:text-base">
        <p>
          안녕하세요. 항상 ‘왜?’를 고민하며 사용자 가치를 최우선으로 생각하는
          3년 차 프론트엔드 개발자 김아람입니다.
        </p>
        <p>
          웹/앱 서비스와 플랫폼 개발 경험을 바탕으로 Vue.js와 Nuxt.js를 활용해
          직관적이고 효율적인 사용자 인터페이스를 구현해왔습니다. API 연동을
          통해 비즈니스 로직을 설계하고, 검색 엔진 최적화(SEO) 전략을 수립 및
          실행한 경험도 보유하고 있습니다.
        </p>
        <p>
          현재는 React와 Next.js를 개인적으로 학습하며, 컴포넌트 재사용성과 웹
          성능 최적화에 대한 깊이 있는 이해를 쌓아가고 있습니다. 끊임없이 배우고
          성장하며, 더 나은 디지털 경험을 제공하는 개발자가 되기 위해 노력하고
          있습니다.
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
