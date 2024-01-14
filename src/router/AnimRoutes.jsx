import React, { useState, useEffect, useContext } from "react"; // eslint-disable-line no-unused-vars
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Work from "../pages/Work";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/skills" element={<Skill />} />
        <Route path="/portfolio/work" element={<Work />} />
        <Route path="/portfolio/project" element={<Project />} />
        <Route path="/portfolio/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
