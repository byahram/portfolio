import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import WorkModal from "../components/WorkModal";
import { WorkList } from "../utils/WorkList";
// import Lottie from 'react-lottie';

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="work" className="section bg-slate-600">
      {/** <div className="inner"> */}
      <div className="section__container">
        {/** section title */}
        <h2>Work</h2>
        <div className="section__title text-l font-semibold">
          ■ Work Experience
        </div>
        {/** work content */}
        <ul className="section__content mt-4">
          {WorkList.map((item, index) => (
            <li key={index} className="flex flex-col text-right mt-6">
              <div className="flex flex-row-reverse gap-3">
                <div className="relative flex text-4xl font-medium font-secondary cursor-pointer">
                  <span onClick={openModal}>{item.title}</span>
                  <span className="absolute -bottom-1 right-0 w-0 hover:w-full transition-all h-1 bg-yellow-400"></span>
                </div>
                <div className="flex gap-1 items-end font-normal">
                  <span>{item.period}</span>
                  {/* <span>/</span>
                  <span>{item.team}</span>
                  <span>/</span>
                  <span>{item.position}</span> */}
                </div>
              </div>
              {/* <div className="flex gap-1 justify-end mt-3">
                <span>{item.role}</span>
              </div> */}
            </li>
            // <WorkItem
            //   key={index}
            //   year={item.year}
            //   title={item.title}
            //   duration={item.duration}
            //   details={item.details}
            // />
          ))}
        </ul>
      </div>
      {/** </div> */}

      {/* <WorkModal isOpen={isModalOpen} closeModal={closeModal} /> */}
    </section>
  );
};

export default Work;
