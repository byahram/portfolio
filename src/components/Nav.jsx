import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import { NavList } from "../utils/navList";

const Nav = () => {
  return (
    <>
      {/* desktop nav */}
      <nav className="md:block hidden mt-10">
        <ul className="flex flex-col">
          {NavList.map((item, index) => (
            <li key={index} className="mt-1 underline-offset-1">
              <Link to={item.url} className="text-[#696c6d] text-lg">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
