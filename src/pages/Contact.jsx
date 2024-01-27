import React from "react"; // eslint-disable-line no-unused-vars
import { TypeAnimation } from "react-type-animation";
import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiSolidConversation,
} from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section__container">
        <h2>Contact</h2>

        {/* typeanimation */}
        <div className="flex text-2xl pr-1">
          <TypeAnimation
            sequence={[
              "Nice to Meet You ❤",
              1000,
              "Hope to See You Again ❤",
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

        {/* sns */}
        <div className="w-full flex justify-end gap-1 pt-3">
          <BiLogoGmail
            onClick={() => window.open(`mailto:ahram0223@naver.com`)}
            size={50}
            className="icon"
          />
          <BiSolidConversation
            onClick={() => window.open(`tel:01046874654`)}
            size={50}
            className="icon"
          />
          <BiLogoGithub
            onClick={() => window.open(`https://github.com/byahram/`)}
            size={50}
            className="icon"
          />
          <BiLogoInstagramAlt
            onClick={() => window.open(`https://www.instagram.com/__ahram.k/`)}
            size={50}
            className="icon"
          />
        </div>

        {/* copyright */}
        <div className="pt-3">
          COPYRIGHT 2024. Ahram Kim. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
