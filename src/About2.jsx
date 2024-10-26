import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { Card, CardBody } from "@material-tailwind/react";
import Skills from "./Skills";
import About from "./About";

const About2 = ({ isDark }) => {
  return (
    <div className="flex flex-col gap-40 min-h-screen">
      <div className="flex flex-col justify-center items-center gap-10">
        <div>
          <h1
            className={`font-new text-xl whitespace-pre-wrap text-center font-bold ${
              isDark ? `border-white` : `border-darkBlue`
            } border-b-2 `}
          >
            About
          </h1>
        </div>

        <div className="flex flex-col w-3/4 justify-center items-center">
          <p className="font-new text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <FontAwesomeIcon
              className="cursor-pointer"
              size="lg"
              icon={faGraduationCap}
            />
            <h1 className="font-new text-xl">
              Computer Science and Engineering
            </h1>
            <h1 className="font-new text-base">
              Adama Science and Technology UNiversity
            </h1>
          </div>
        </div>
      </div>
      <div className="px-40">
        <About isDark={isDark} />
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div>
          {" "}
          <h1
            className={`font-new text-xl whitespace-pre-wrap text-center font-bold ${
              isDark ? `border-white` : `border-darkBlue`
            } border-b-2 `}
          >
            What I Do
          </h1>
        </div>

        <div className="md:flex grid w-3/4 justify-center gap-10">
          <Card
            className={` ${
              isDark
                ? `bg-gray-900 font-new text-white`
                : `bg-cardBack font-new  text-darkBlue`
            }`}
          >
            <CardBody>
              <div className="flex flex-col justify-center items-center gap-5">
                <div>
                  <h1 className="text-xl font-bold">Web Design</h1>
                </div>
                {/* <div className="flex flex-col w-3/4 justify-center items-center">
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div> */}
              </div>
            </CardBody>
          </Card>
          <Card
            className={` ${
              isDark
                ? `bg-gray-900 font-new text-white`
                : `bg-cardBack font-new  text-darkBlue`
            }`}
          >
            <CardBody className="">
              <div className="flex flex-col justify-center items-center gap-5">
                <div>
                  <h1 className="text-xl font-bold">Web Development</h1>
                </div>{" "}
                {/* <div className="flex flex-col w-3/4 justify-center items-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div> */}
              </div>
            </CardBody>
          </Card>
          <Card
            className={` ${
              isDark
                ? `bg-gray-900 font-new text-white`
                : `bg-cardBack font-new  text-darkBlue`
            }`}
          >
            <CardBody className="">
              <div className="flex flex-col justify-center items-center gap-5">
                <div>
                  <h1 className="text-xl font-bold">Software Development</h1>
                </div>{" "}
                {/* <div className="flex flex-col w-3/4 justify-center items-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div> */}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div>Skills</div>
        <div className="flex flex-col w-3/4 justify-center items-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
