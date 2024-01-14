import React from "react"; // eslint-disable-line no-unused-vars
// import WorkItem from "../components/WorkItem";
import { WorkList } from "../utils/WorkList";

const Work = () => {
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
        <ul className="section__content mt-5">
          {WorkList.map((item, index) => (
            <li key={index} className="flex flex-col text-right mt-5">
              <div className="flex flex-row-reverse gap-3">
                <div className="flex text-4xl font-medium">{item.title}</div>
                <div className="flex gap-1 items-end font-medium">
                  <span>{item.period}</span>
                  <span>/</span>
                  <span>{item.team}</span>
                  <span>/</span>
                  <span>{item.position}</span>
                </div>
              </div>
              <div className="flex gap-1 justify-end mt-2">
                <span>{item.role}</span>
              </div>
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
    </section>
  );
};

export default Work;
