import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-scroll";

const SocialIcon = () => {
  return (
    <>
      <div className="flex flex-col p-3">
        <span className="p-2  flex justify-center items-center w-[10%] hover:scale-150">
          <a
            href="https://www.instagram.com/vishalk3102/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram size={26} />
          </a>
        </span>
        <span className="p-2  flex justify-center items-center w-[10%] hover:scale-150">
          <a
            href="https://github.com/vishalk3102"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub size={26} />
          </a>
        </span>
        <span className="p-2  flex justify-center items-center w-[10%] hover:scale-150">
          <a
            href="https://www.linkedin.com/in/vishalk3102/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin size={26} />
          </a>
        </span>
        <span className="p-2  flex justify-center items-center w-[10%] hover:scale-150">
          <a
            href="https://www.linkedin.com/in/vishalk3102/"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail size={26} />
          </a>
        </span>
        <span className="p-1  pt-8  mt-4 flex  flex-col justify-center items-center w-[10%] h-[30%] hover:cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={500}
          >
            <p className="text-white text-[10px] rotate-90 mb-8">
              Scroll Down{" "}
            </p>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={500}
          >
            <BsArrowDown size={40} />
          </Link>
        </span>
      </div>
    </>
  );
};

export default SocialIcon;
