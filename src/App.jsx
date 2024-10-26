import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import DisableRightClick from "./DisableRightClick";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import About2 from "./About2";
// import React, { useState } from "react";
import image from "./assets/right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faSunPlantWilt } from "@fortawesome/free-solid-svg-icons/faSunPlantWilt";
import { Button } from "@material-tailwind/react";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import Footer from "./Footer";

function App() {
  const [isDark, setIsDark] = useState(false);
  const handleDark = () => {
    setIsDark(!isDark);
  };
  return (
    <DisableRightClick>
      <div className="bg-lightYellow">
        <div
          className={`flex flex-col p-12 min-h-screen ${
            isDark ? `bg-gray-950 text-white` : `bg-lightYellow text-darkBlue`
          }`}
        >
          <div className="flex justify-between">
            <div>
              <h1 className="font-new text-xl ">Naol Atomsa</h1>
            </div>
            <div className="">
              <ul className="flex gap-10 font-new text-xl">
                <li className="hover:text-gray-500 cursor-pointer">Home</li>
                <li className="hover:text-gray-500 cursor-pointer">About</li>
                {/* <li className="hover:text-gray-500 cursor-pointer">Work</li>
                <li className="hover:text-gray-500 cursor-pointer">Service</li> */}

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
          </div>
          <Home isDark={isDark} />
          <About isDark={isDark} />
          <About2 isDark={isDark} />
        </div>
        <Footer />
      </div>
    </DisableRightClick>
  );
}

export default App;
