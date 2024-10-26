import React, { useState } from "react";
import image from "./assets/right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import {
  faFaceLaughWink,
  faHandPointRight,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import { faSunPlantWilt } from "@fortawesome/free-solid-svg-icons/faSunPlantWilt";
import { Button } from "@material-tailwind/react";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { ProgressLabelOutside } from "./ProgressLabelOutside";
import Skills from "./Skills";

function About({ isDark }) {
  return (
    <>
      <div
        className={`flex md:flex-row flex-col min-h-screen justify-center items-center gap-10 ${
          isDark ? `bg-gray-950 text-white` : `bg-lightYellow text-darkBlue`
        }`}
      >
        <div className="flex flex-col items-center gap-5 w-full px-20">
          <div className="flex flex-col justify-center gap-10 items-center ">
            <h1
              className={`font-new text-xl whitespace-pre-wrap text-center font-bold ${
                isDark ? `border-white` : `border-darkBlue`
              } border-b-2 `}
            >
              About
            </h1>

            <h1 className="font-new text-3xl p-2 flex justify-center items-center gap-2">
              Why You Hire me!
              <FontAwesomeIcon icon={faFaceLaughWink} />
            </h1>

            <p className="font-new text-xl">
              25-year-old male. Passionate Full-Stack developer with a keen
              interest in software development and machine learning. Known for
              my enthusiasm and energy at work.
            </p>
          </div>

          <ProgressLabelOutside
            name="HTML/CSS"
            percent="90% "
            value={90}
            color="orange"
          />
          <ProgressLabelOutside
            name="TailwindCss"
            percent="85% "
            value={85}
            color="blue"
          />
          <ProgressLabelOutside
            name="React Js"
            percent="70% "
            value={70}
            color="blue"
          />
          <ProgressLabelOutside
            name="Node Js"
            percent="60% "
            value={60}
            color="green"
          />
          <ProgressLabelOutside
            name="SpringBoot"
            percent="50% "
            value={50}
            color="green"
          />
        </div>
      </div>
      {/* <Skills /> */}
    </>
  );
}

export default About;
