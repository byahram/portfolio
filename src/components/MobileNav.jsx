import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import { NavList } from "../utils/NavList";

const MobileNav = () => {
  return (
    <nav className="fixed left-[2rem] top-[2rem] right-[2rem] bottom-[2rem] z-[1000] md:hidden  mix-blend-difference">
      <ul className="flex flex-col gap-3 p-[2rem] justify-center align-middle text-center bg-light dark:bg-dark h-full">
        {NavList.map((item, index) => (
          <li
            key={index}
            className="flex-col p-4 cursor-pointer hover:scale-125 ease-in duration-300"
          >
            <Link to={item.url} className="text-[#696c6d] text-2xl mt-1">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
