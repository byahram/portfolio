"use client";

import React from "react";
import Nav from "./Nav";
import ThemeBtn from "./ThemeBtn";
// import Language from "./LangBtn";

const Header = () => {
  return (
    <header id="header" className="-ml-[8px] tracking-tight">
      <div className="flex justify-between items-center lg:sticky lg:top-20">
        <Nav />
        <div className="right flex gap-4 items-center justify-center">
          {/* <Language /> */}
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
