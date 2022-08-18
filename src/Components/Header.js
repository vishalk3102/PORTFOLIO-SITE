import React from "react";
import { motion } from "framer-motion";

const Header = (props) => {
  return (
    <>
      <div
        className={
          props.index === 1
            ? "flex w-full h-[4rem] justify-start items-center"
            : "flex flex-row-reverse w-full h-[4rem] justify-start items-center"
        }
      >
        <div className="w-[75%] h-[0.1rem]  bg-white"></div>

        <span className="text-white uppercase font-bold text-center p-2 text-2xl">
          {props.index === 1 ? (
            <motion.div
              initial={{ opacity: 0, x: "100px" }}
              whileInView={{ opacity: 1, x: "0px" }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              {props.title}
            </motion.div>
          ) : (
            <motion.div
              initial={{ x: "-100px", opacity: 0 }}
              whileInView={{ x: "0px", opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              {props.title}
            </motion.div>
          )}
        </span>
      </div>
    </>
  );
};

export default Header;
