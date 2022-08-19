import React from "react";
import { ResponsibilityData } from "./Data";

const PositionDropdown = () => {
  return (
    <>
      <div>
        {ResponsibilityData.map((items) => {
          return (
            <>
              <div
                className="w-[100%] flex  justify-evenly  items-center border-solid border-2 border-white-100 rounded-[12px] my-3 "
                key={items.id}
              >
                <div className="p-4">
                  <p className="p-1">
                    <span className="mr-2">College :</span>
                    {items.organization}
                  </p>
                  <p className="p-1">
                    <span className="mr-2">Course :</span>
                    {items.position}
                  </p>
                </div>
                <div>
                  <p className="capitalize px-5">{items.time}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PositionDropdown;
