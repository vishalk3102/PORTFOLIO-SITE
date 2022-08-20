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
      <div className="flex md:flex-col justify-evenly p-3">
        <span className="p-2  flex justify-center items-center hover:scale-150">
          <a
            href="https://www.instagram.com/vishalk3102/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram size={26} />
          </a>
        </span>
        <span className="p-2  flex justify-center items-center hover:scale-150">
          <a
            href="https://github.com/vishalk3102"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub size={26} />
          </a>
        </span>
        <span className="p-2  flex justify-center items-center hover:scale-150">
          <a
            href="https://www.linkedin.com/in/vishalk3102/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin size={26} />
          </a>
        </span>
        <span className="p-2  flex justify-center items-center hover:scale-150">
          <a
            href="mailto:karande.vishal3102@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail size={26} />
          </a>
        </span>
        <span className="p-1  md:pt-8  md:mt-4 flex  md:flex-col justify-center items-center h-[30%] hover:cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={500}
          >
            <p className="text-white text-[10px] md:rotate-90 md:mb-8">
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
            <BsArrowDown size={40} className="mx-1 scale-50 md:scale-100" />
          </Link>
        </span>
      </div>
    </>
  );
};

export default SocialIcon;
