import React from "react";
import ReactTyped from "react-typed";
import img2 from "../Assets/img2.png";
import SocialIcon from "./SocialIcon";
import resume from "../Assets/Vishal_resume.pdf";
import { Link } from "react-scroll";

const Hero = () => {
  const handleClick = (e) => {
    console.log("clicked");
  };
  return (
    <>
      <div id="hero" className="text-white w-full grid md:grid-cols-2">
        <div className="max-w-[800px] w-full h-screen text-center flex flex-col justify-center mx-auto md:ml-24">
          <h2 className="md:text-5xl sm:text-4xl text-2xl font-bold  p-4 md:pb-7 ">
            Hey there !
          </h2>
          <h3 className="md:text-6xl sm:text-5xl text-3xl font-bold  p-2  md:py-6">
            I am Vishal Kumar
          </h3>
          <div>
            <p className=" text-2xl md:text-3xl p-2 capitalize">
              A{" "}
              <ReactTyped
                strings={["web developer", "software developer"]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </p>
          </div>
          <div className="flex justify-center items-center my-5">
            <div
              className="text-[#fff] w-[20%] m-3 p-3 border-solid border-2 border-[#009c86] rounded bg-[#009c86] hover:cursor-pointer hover:scale-110"
              onClick={() => handleClick}
            >
              <a href={resume} target="_blank" rel="noreferrer" download>
                Resume
              </a>
            </div>

            <div className="text-[#fff] w-[20%] m-3 p-3 border-solid border-2 rounded border-[#009c86] hover:cursor-pointer hover:scale-105">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={500}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className=" hidden md:flex md:absolute md:left-0 md:w-[10%]">
            <SocialIcon />
          </div>
        </div>
        <div className="text-center flex justify-center items-center mx-auto">
          <img className="w-[500px]" src={img2} alt="gif animated " />
        </div>
      </div>
    </>
  );
};

export default Hero;
