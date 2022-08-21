import React, { useState } from "react";
import Header from "./Header";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { aboutNavData } from "./Data";
import EducationDropdown from "./EducationDropdown";
import PositionDropDown from "./PositonDropdown";

const About = () => {
  const [dropDown, setDropDown] = useState(false);
  const [active, setActive] = useState(0);
  const handleClick = (index) => {
    setDropDown(!dropDown);
    setActive(index);
  };
  return (
    <>
      <div id="about" className="text-white w-full h-full mx-auto  mt-4 mb-10">
        <Header index={1} title="About" />
        <div className="max-w-[1100px] w-full  flex flex-col justify-start items-center  mx-auto p-6">
          <p className="text-[#009c86] flex justify-center items-center  mx-auto italic text-xl  p-2 my-3 capitalize font-bold">
            "Stop stopping Yourself"
          </p>
          <p className="flex justify-center items-center mx-auto p-2 my-3">
            I am Vishal Kumar, a Computer Science Undergraduate student at
            Graphic Era deemed to be university, Dehradun. <br /> I am a Full
            stack developer and a budding software engineer. I'm a quick learner
            and want to learn, explore and <br /> polish my skills as much as
            possible.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-evenly items-center my-3 mx-auto max-w-[1100px] w-full ">
          {aboutNavData.map((items) => {
            return (
              <>
                <div
                  className={`flex justify-center items-center p-3 m-5 ease duration-500 capitalize cursor-pointer ${
                    dropDown && active === items.id
                      ? "text-[#009c86]"
                      : "text-[#fff"
                  } `}
                  onClick={() => handleClick(items.id)}
                  key={items.id}
                >
                  {items.name}
                  <span className="mx-4">
                    {!dropDown && active === items.id ? (
                      <RiArrowDropDownLine size={24} />
                    ) : (
                      <RiArrowDropUpLine size={24} />
                    )}
                  </span>
                </div>
              </>
            );
          })}
        </div>
        <div
          className={
            !dropDown
              ? "hidden"
              : " max-w-[1000px] w-full mx-auto grid grid-cols-1"
          }
        >
          {active === 1 ? <EducationDropdown /> : <div></div>}
          {active === 2 ? <PositionDropDown /> : <div></div>}
        </div>
      </div>
    </>
  );
};

export default About;
