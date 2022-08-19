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
                className="max-w-[1100px] w-[100%] grid grid-cols-3  justify-evenly  items-center border-solid border-2 border-white-100 rounded-[12px] my-3"
                key={items.id}
              >
                <div className="p-4 col-span-2">
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
                <div className="col-span-1">
                  <p className="capitalize px-3">{items.time}</p>
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
