import React from "react";
import { educationData } from "./Data";

const EducationDropdown = () => {
  return (
    <>
      <div>
        {educationData.map((items) => {
          return (
            <>
              <div
                className="max-w-[1000px] mx-auto w-[90%] grid grid-cols-3  justify-evenly  items-center border-solid border-2 border-white-100 rounded-[12px] my-3"
                key={items.id}
              >
                <div className="text-[14px] md:text-[1rem] col-span-2 p-2 md:p-4 md:mx-6">
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
                <div className="text-[14px] md:text-[1rem] col-span-1 p-2 md:p-4 md:mx-3">
                  <p className="capitalize">{items.time}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default EducationDropdown;
