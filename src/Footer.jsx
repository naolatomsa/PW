import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const currentYear = currentTime.getFullYear();
  return (
    <div className="bg-gray-800 flex flex-col px-10 gap-5 text-white font-new text-xl">
      <div className="flex flex-col gap-10 justify-center items-center border-b-2 py-5 border-gray-700">
        <div>
          <h1>Software Developer</h1>
        </div>
        <div className="flex gap-10">
          <div>
            <FontAwesomeIcon
              className="cursor-pointer"
            //   size="md"
              icon={faGithub}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="cursor-pointer"
            //   size="lg"
              icon={faLinkedin}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="cursor-pointer"
            //   size="lg"
              icon={faSquareInstagram}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="cursor-pointer"
            //   size="lg"
              icon={faSquareInstagram}
            />
          </div>
        </div>
      </div>

      <div className="pb-5">© naolatomsa {currentYear}</div>
    </div>
  );
};

export default Footer;
