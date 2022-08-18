import React from "react";
import loader2 from "../Assets/loader2.gif";

const Loader = () => {
  return (
    <>
      <div className=" text-white w-full h-screen  flex justify-center items-center">
        <img className="w-[300px] h-300px]" src={loader2} alt="loading icon" />
      </div>
    </>
  );
};

export default Loader;
