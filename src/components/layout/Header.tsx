"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import ThemeBtn from "./ThemeBtn";
import LanguageBtn from "./LanguageBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setScrolled(window.scrollY > 10);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isMobile]);

  return (
    <header id="header" className="relative tracking-tight">
      <div className="relative flex justify-between items-center w-full">
        <div
          className={`transition-all ${
            scrolled
              ? "fixed top-4 left-4 bg-dark/10 dark:bg-white/50 dark:text-dark px-6 py-3 rounded-3xl shadow-lg z-10"
              : ""
          }`}
        >
          <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div
          className={`flex items-center gap-2 md:gap-4 transition-all ${
            scrolled
              ? "fixed top-4 right-4 bg-dark/10 dark:bg-white/50 dark:text-dark px-6 py-3 rounded-3xl shadow-lg z-10"
              : ""
          }`}
        >
          <ThemeBtn />
          <LanguageBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
