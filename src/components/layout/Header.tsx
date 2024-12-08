"use client";

import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header id="header" className="-ml-[8px] tracking-tight">
      <div className="flex justify-between items-center lg:sticky lg:top-20">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
