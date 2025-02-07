"use client";

import React from "react";
import Nav from "./Nav";
import ThemeBtn from "./ThemeBtn";
// import LanguageBtn from "./LanguageBtn";

const Header = () => {
  return (
    <header id="header" className="-ml-[8px] tracking-tight">
      <div className="flex justify-between items-center">
        <Nav />
        {/* <LanguageBtn /> */}
        <ThemeBtn />
      </div>
    </header>
  );
};

export default Header;
