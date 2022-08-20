import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "./Header";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FiSend, FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();

  const handleChange = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i3oopla",
        "template_ezn9k37",
        formRef.current,
        "HNFxVhwn1e0rIL5Hs"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent succesfully");
        },
        (error) => {
          console.log(error.text);
          alert("Message not sent succesfully");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div id="contact" className="text-white mt-20 h-full">
        <Header index={2} title="Get in Touch" />
        <div className="max-w-[1100px] w-full mx-auto my-10 grid grid-cols-1 md:grid-cols-2">
          <div className="m-5">
            <p className="p-3 m-3 text-white text-[1.5rem] font-medium ">
              I am available for Freelance Work and other Opportunities. <br />
              <br />
              <br />
              Connect with me via Call or Email{" "}
            </p>
            <div className="p-3 m-3 flex justify-start items-center hover:cursor-pointer  hover:text-[#009c86]">
              <a
                href="mailto:karande.vishal3102@gmail.com"
                className="p-2 mr-2 hover:cursor-pointer"
              >
                <FiMail size={24} />
              </a>
              <span>Karande.vishal3102@gmail.com</span>
            </div>
            <div className="p-3 m-3 flex justify-start items-center hover:cursor-pointer  hover:text-[#009c86]">
              <span className="p-2 mr-2 hover:cursor-pointer">
                <FiPhone size={24} />
              </span>
              <span>+91 8459126643</span>
            </div>
            <div className="flex flex-row items-center justify-start p-3 m-3">
              <span className="p-2  flex justify-center items-center w-[10%] hover:cursor-pointer hover:scale-150 mr-8">
                <a
                  href="https://www.instagram.com/vishalk3102/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size={30} />
                </a>
              </span>
              <span className="p-2  flex justify-center items-center w-[10%] hover:cursor-pointer hover:scale-150 mr-8">
                <a
                  href="https://github.com/vishalk3102"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub size={30} />
                </a>
              </span>
              <span className="p-2  flex justify-center items-center w-[10%] hover:cursor-pointer hover:scale-150 mr-8">
                <a
                  href="https://www.linkedin.com/in/vishalk3102/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={30} />
                </a>
              </span>
            </div>
          </div>
          <div className="m-5 p-3">
            <form onSubmit={sendEmail} ref={formRef}>
              <div className="flex flex-col">
                <span className="Capitalize ">Full Name</span>
                <input
                  className="w-full md:w-[75%] bg-white-300 text-gray-900 mt-2 p-3 rounded"
                  type="text"
                  placeholder=""
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-8 flex  flex-col">
                <span className="Capitalize">Email</span>
                <input
                  className="w-full md:w-[75%] bg-white-300 text-gray-900 mt-2 p-3 rounded"
                  type="text"
                  placeholder=""
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-8 flex  flex-col">
                <span className="Capitalize">Message</span>
                <textarea
                  className="w-full md:w-[75%] h-32 bg-white-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="7"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className=" text-[#fff] w-[30%] flex justify-around items-center m-3 ml-0 p-3 border-solid border-2  border-[#009c86] rounded bg-[#009c86] hover:cursor-pointer hover:scale-105"
                >
                  Submit
                  <FiSend size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
