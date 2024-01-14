import React, { useState, useEffect, useContext } from "react"; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router } from "react-router-dom";
// import { motion } from "framer-motion";
// import { CursorContext } from "./context/CursorContext";

import BgLayout from "./layout/bgLayout";
import Header from "./components/Header";
import AnimRoutes from "./router/AnimRoutes";

function App() {
  // const { cursorVariatns, cursorBG } = useContext(CursorContext);
  return (
    <>
      <Router>
        <BgLayout />
        <Header />
        <main id="main">
          <AnimRoutes />
        </main>
      </Router>

      {/** cursor */}
      {/* <motion.div
        variants={cursorVariatns}
        animate={cursorBG}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full z-[999]"
      ></motion.div> */}
    </>
  );
}

export default App;
