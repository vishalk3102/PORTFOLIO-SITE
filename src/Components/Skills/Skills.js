import React from "react";
import Header from "../Header";
import { skillData } from "../Data";

const Skills = () => {
  return (
    <>
      <div id="skills" className="text-white w-full  h-full mx-auto my-5">
        <Header index={2} title="Skills" />
        <div className="max-w-[1000px] mx-auto  w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-9 gap-x-9 my-6 p-4 text-center mt-10">
          {skillData.map((items, index) => {
            return (
              <>
                <span
                  className="cursor-pointer p-3 flex justify-center items-center hover:scale-125"
                  key={index}
                >
                  {items.icon}
                </span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
