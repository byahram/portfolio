/* eslint-disable react/prop-types */
import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-r pr-2 border-dark">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-dark rounded-full mt-1.5 -left-1.5 border-dark" />
        <p className="flex flex-wrap gap-4 items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500">{details}</p>
      </li>
    </ol>
  );
};

WorkItem.propsTypes = {
  children: PropTypes.node.isRequired,
};

export default WorkItem;
