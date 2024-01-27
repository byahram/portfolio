import React from "react"; // eslint-disable-line no-unused-vars
import { TypeAnimation } from "react-type-animation";

const Project = () => {
  return (
    <section id="projects" className="section">
      <div className="section__container">
        <h2>Projects</h2>
        <div className="flex font-semibold text-4xl">
          <TypeAnimation
            sequence={[
              "Working on a Project!",
              1000,
              "Thanks for waiting :)",
              1000,
              "Will be updated very very soon",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
