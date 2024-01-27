import React, { useContext, useState } from "react"; // eslint-disable-line no-unused-vars
import { TabMenu, SkillItems } from "../utils/AboutUtils";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeSkill, setActiveSkill] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    console.log("tabNumber ::: ", tabNumber);
  };

  const handleSkillClick = (skillNumber) => {
    setActiveSkill(skillNumber);
    console.log("skillNumber ::: ", skillNumber);
  };

  return (
    <section id="skills" className="section">
      <div className="section__container">
        {/** section title */}
        <h2>Skills</h2>
        {/** tab menu */}
        <div className="tab-btn flex">
          {TabMenu.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer flex items-center justify-center border border-solid rounded-xl w-[130px] h-[40px]  ${
                activeTab === item.no
                  ? "bg-dark text-light border-dark dark:bg-light dark:text-black dark:border-light"
                  : "text-dark border-dark dark:text-light dark:border-light"
              } ${index == 0 ? "mr-4" : ""}`}
              onClick={() => handleTabClick(item.no)}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/** content */}
        <div className="tab-cont">
          {SkillItems.map((item, index) => (
            <div
              key={index}
              className={`content grid-cols-3 gap-5 mt-5 mx-auto ${
                activeTab === item.no ? "grid" : "hidden"
              }`}
            >
              {item.skills.map((item2, index2) => (
                <div
                  key={index2}
                  className={`cont border border-[#9CA3AF] hover:border-black border-solid rounded-xl aspect-square w-[200px] p-4 ${
                    activeSkill === item2.so
                      ? "bg-dark text-light border-dark dark:bg-light dark:text-black dark:border-light"
                      : "text-dark border-dark dark:text-light dark:border-light"
                  }`}
                  onClick={() => handleSkillClick(item2.so)}
                >
                  {item.no === 1 ? (
                    <div className="w-full h-full flex flex-col justify-between">
                      <p className="mb-20">{item2.title}</p>
                      <p>{item2.desc}</p>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col justify-between">
                      <p className="mb-20">{item2.title}</p>
                      <p>{item2.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/** </div> */}
    </section>
  );
};

export default Skills;
