import React, { useState } from "react";
import image from "./assets/right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faSunPlantWilt } from "@fortawesome/free-solid-svg-icons/faSunPlantWilt";
import { Button } from "@material-tailwind/react";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
const Home = ({ isDark }) => {
  // const [isDark, setIsDark] = useState(false);
  // const handleDark = () => {
  //   setIsDark(!isDark);
  // };

  return (
    <div
      className={`flex flex-col p-12 min-h-screen ${
        isDark ? `bg-gray-950 text-white` : `bg-lightYellow text-darkBlue`
      }`}
    >
      {/* <div className="flex justify-between">
        <div>
          <h1 className="font-new text-xl ">Naol Atomsa</h1>
        </div>
        <div className="">
          <ul className="flex gap-10 font-new text-xl">
            <li className="hover:text-gray-500 cursor-pointer">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">About</li>
            <li className="hover:text-gray-500 cursor-pointer">Work</li>
            <li className="hover:text-gray-500 cursor-pointer">Service</li>

            <li className="hover:text-gray-500 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex gap-10">
          <div>
            <FontAwesomeIcon
              className="cursor-pointer"
              size="lg"
              icon={faGithub}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="cursor-pointer"
              size="lg"
              icon={faLinkedin}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="cursor-pointer"
              size="lg"
              icon={faSquareInstagram}
            />
          </div>
          <div>
            <FontAwesomeIcon
              onClick={handleDark}
              className="cursor-pointer"
              size="xl"
              color={isDark ? "yellow" : "blue"}
              icon={faMoon}
            />
          </div>
        </div>
      </div> */}
      <div className="w-full h-screen md:flex p-10 justify-between items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-new text-xl">Hello, I'm Naol,</h1>
          <h1 className="font-new text-6xl whitespace-pre-wrap text-center font-bold ">
            Software {"\n"} Developer
          </h1>
          <h1 className="font-new text-xl">Based in Ethiopia</h1>
          <Button
            className={`font-new normal-case text-xl flex justify-center items-center gap-2 hover:text-gray-500 ${
              isDark ? `` : `bg-yellow-100 text-darkBlue`
            }`}
          >
            Here is my cv
            <FontAwesomeIcon icon={faDownload} />
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
