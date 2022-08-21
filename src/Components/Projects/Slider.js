import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { techIconData } from "../Data";

const Slider = ({ items }) => {
  return (
    <>
      <div
        key={items.id}
        className="grid md:grid-cols-3 md:h-[500px] h-screen border-solid border-2 border-[#fff] rounded  m-10"
      >
        <div className=" md:col-span-2 flex justify-center items-center ">
          <img
            src={items.imgSrc}
            alt="slider img 1"
            className=" w-[400px] h-[250px]  sm:w-[400px] sm:h-[250px]  md:w-[550px] md:h-[350px] rounded mt-6"
          />
        </div>
        <div className="flex flex-col  justify-start items-start mt-12   p-2 pl-20 md:p-2">
          <h4 className="text-[#fff]  text-xl md:text-2xl font-semibold p-2">
            {items.title}
          </h4>
          <p className="text-[#fff] text-[0.8rem] md:text-[1rem] font-normal mt-1 p-2">
            {items.description}
          </p>
          <p className="text-[#fff] text-[1rem] md:text-[1.2rem] font-medium  mt-4 p-2">
            Technologies -
          </p>
          <div className="flex justify-center items-center p-1 md:p-2 mt-1">
            {techIconData.map((items) => {
              return (
                <>
                  <span key={items.id} className="p-2 md:p-3 m-1">
                    {items.icon}
                  </span>
                </>
              );
            })}
          </div>
          <div className=" w-[100px] p-2 m-1 md:m-2 border-solid border-2 flex justify- items items-center border-[#009c86] rounded bg-[#009c86] hover:cursor-pointer hover:scale-105">
            <a
              href={items.urlLink}
              target="_blank"
              rel="noreferrer"
              className="mr-1 p-1/2 w-full flex justify-around items-center"
            >
              Live
              <BsArrowRightShort size={24} className="scale-125" />
            </a>
          </div>
          <div className=" w-[100px] p-2 m-1 md:m-2 font-medium border-solid border-2  border-[#009c86] rounded flex justify-start items-center hover:cursor-pointer hover:scale-105">
            <a
              href={items.urlCode}
              target="_blank"
              rel="noreferrer"
              className="mr-1 p-1/2 w-full flex justify-around items-center"
            >
              Code
              <BsArrowRightShort size={24} className="scale-125" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
