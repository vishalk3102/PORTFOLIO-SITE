import React, { useState } from "react";
import Header from "./Header";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { aboutNavData } from "./Data";
import { educationData } from "./Data";

const About = () => {
  const [dropDown, setDropDown] = useState(false);
  const handleClick = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <div id="about" className="text-white w-full h-screen mx-auto  mt-4 ">
        <Header index={1} title="About" />
        <div className="max-w-[1100px] w-full  flex flex-col justify-start items-center  mx-auto p-6">
          <p className="text-[#009c86] flex justify-center items-center  mx-auto italic text-xl  p-2 my-3 capitalize font-bold">
            "Stop stopping Yourself"
          </p>
          <p className="flex justify-center items-center mx-auto p-2 my-3">
            Hi, I am a Computer Science Undergraduate student at Graphic Era
            deemed to be university, Dehradun. I am a budding Software Engineer,
            who is aiming to learn everything about different technologies. I am
            currently learning C, C++, Web development and aspiring to become a
            Full-stack web developer. I'm a quick learner and want to learn,
            explore and polish my skills as much as I can.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-evenly items-center my-3 mx-auto max-w-[1100px] w-full ">
          {aboutNavData.map((items) => {
            return (
              <>
                <div
                  className="flex justify-center items-center p-3 m-5 ease duration-500 capitalize cursor-pointer "
                  onClick={handleClick}
                  key={items.id}
                >
                  {items.name}
                  <span className="mx-4">
                    {!dropDown ? (
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
        <div>
          {educationData.map((items) => {
            return (
              <>
                <div
                  className={
                    !dropDown
                      ? "hidden"
                      : "max-w-[1100px] w-[90%]  mx-auto flex  justify-evenly  items-center border-solid border-2 border-white-100 rounded-[12px] my-3"
                  }
                  key={items.id}
                >
                  <div className="p-4">
                    <p className="p-1">
                      <span className="mr-2">College :</span>
                      {items.organization}
                    </p>
                    <p className="p-1">
                      <span className="mr-2">Course :</span>
                      {items.Course}
                    </p>
                    <p className="p-1">
                      <span className="mr-2">Major :</span>
                      {items.major}
                    </p>
                    <p className="p-1">
                      <span className="mr-2">Grade :</span>
                      {items.grade}
                    </p>
                  </div>
                  <div>
                    <p className="capitalize">{items.time}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
