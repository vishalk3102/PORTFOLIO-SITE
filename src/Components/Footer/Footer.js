import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineArrowUp,
  AiOutlineCopyright,
} from "react-icons/ai";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <>
      <div id="footer" className="text-white w-full h-[4rem] ">
        <div className="max-w-[1200px] mx-auto grid grid-cols-4 md:grid-cols-3">
          <div className="flex flex-row items-center md:justify-around  p-2 md:p-3 md:m-3">
            <span className="flex justify-center items-center w-[10%] hover:cursor-pointer hover:scale-125 mx-3    md:mr-8">
              <a
                href="https://www.instagram.com/vishalk3102/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={30} />
              </a>
            </span>
            <span className="flex justify-center items-center w-[10%] hover:cursor-pointer hover:scale-125 mx-3  md:mr-8">
              <a
                href="https://github.com/vishalk3102"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub size={30} />
              </a>
            </span>
            <span className="flex justify-center items-center w-[10%] hover:cursor-pointer hover:scale-125 mx-3  md:mr-8">
              <a
                href="https://www.linkedin.com/in/vishalk3102/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin size={30} />
              </a>
            </span>
          </div>
          <div className="flex  justify-center items-center col-span-2 md:col-span-1">
            <span className="mr-2 scale-75 md:scale-100">
              <AiOutlineCopyright size={24} />
            </span>

            <p className="text-[0.7rem] md:text-[0.8rem]">
              {" "}
              All Right Reserved | Vishal Kumar | 2022
            </p>
          </div>
          <div className="flex  justify-center items-center text-[0.7rem] md:text-[0.8rem] hover:cursor-pointer">
            <Link
              activeClass="active"
              to="navbar"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
              delay={500}
            >
              Back to Top
            </Link>
            <span className="scale-75 md:scale-100">
              <Link
                activeClass="active"
                to="navbar"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
                delay={500}
              >
                <AiOutlineArrowUp className="m-2" size={20} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
