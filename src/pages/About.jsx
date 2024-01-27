import React from "react"; // eslint-disable-line no-unused-vars
// import Skills from "./Skill";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section__container">
        <h2>About</h2>
        <div className="section__title text-l font-semibold">■ Interest</div>
        <div className="section__content mt-5"></div>

        <div className="section__title text-l font-semibold">■ Education</div>
        <div className="section__content mt-5"></div>
        <div className="section__title text-l font-semibold">■ Skills</div>
        <div className="section__content mt-5"></div>
        <div className="section__title text-l font-semibold">■ Language</div>
        <div className="section__content mt-5"></div>
        <div className="section__title text-l font-semibold">
          ■ Certification
        </div>
        {/* <Interest />
        <Skills />
        <Education /> */}
      </div>
    </section>
  );
};

export default About;
