import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "linear", duration: 1 }}
      >
        <div
          id="navbar"
          className="text-white flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]"
        >
          <h1 className="w-full font-signature font-bold text-[#fff] text-4xl">
            Vishal Kumar
          </h1>
          <ul className="hidden md:flex capitalize">
            <li className="p-4 hover:cursor-pointer hover:text-[#009c86]">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={500}
              >
                Home
              </Link>
            </li>
            <li className="p-4 hover:cursor-pointer hover:text-[#009c86]">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={500}
              >
                About
              </Link>
            </li>
            <li className="p-4 hover:cursor-pointer hover:text-[#009c86]">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={500}
              >
                Skills
              </Link>
            </li>
            <li className="p-4 hover:cursor-pointer hover:text-[#009c86]">
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={500}
              >
                Projects
              </Link>
            </li>
            <li className="py-3 px-5 border-solid border-2  text-[#fff] rounded border-[#009c86] bg-[#009c86] hover:cursor-pointer hover:scale-105">
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
            </li>
          </ul>
          <div onClick={handleClick} className="block  md:hidden">
            {!nav ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
          </div>

          {/* MOBILE DEVICE-MENU  CODE  */}

          <div
            id="navmobile"
            className={
              !nav
                ? "fixed left-[-100%]"
                : "fixed left-0 top-0  w-[60%] h-full bg-[#02020a] ease-in-out duration-500"
            }
          >
            <h1 className="w-full font-signature font-bold text-[#fff] text-4xl m-7">
              Vishal Kumar
            </h1>
            <ul className="p-4 capitalize">
              <li className="p-4 hover:cursor-pointer hover:text-[#009c86]">
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={500}
                >
                  Home
                </Link>
              </li>
              <li className="p-4 hover:cursor-pointer hover:text-[#009c86]">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={500}
                >
                  About
                </Link>
              </li>
              <li className="p-4 hover:cursor-pointer hover:text-[#009c86]">
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={500}
                >
                  Skills
                </Link>
              </li>
              <li className="p-4 hover:cursor-pointer hover:text-[#009c86]">
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={500}
                >
                  Projects
                </Link>
              </li>
              <li className="w-[50%] mt-4 py-3 px-5 border-solid border-2 rounded text-[#fff] border-[#009c86] bg-[#009c86] hover:cursor-pointer hover:scale-105">
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
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
