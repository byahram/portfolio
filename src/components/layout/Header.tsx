"use client";

import React from "react";
import Nav from "./Nav";
import ThemeBtn from "./ThemeBtn";

const Header = () => {
  return (
    <header id="header" className="-ml-[8px] tracking-tight">
      <div className="flex justify-between items-center lg:sticky lg:top-20">
        <Nav />
        <ThemeBtn />
      </div>
    </header>
  );
};

export default Header;
