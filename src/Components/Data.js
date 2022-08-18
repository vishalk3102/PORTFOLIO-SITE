import React from "react";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { AiOutlineGithub } from "react-icons/ai";
import sliderImg1 from "../Assets/sliderImg1.jpeg";
import sliderImg2 from "../Assets/sliderImg2.jpeg";
import sliderImg3 from "../Assets/sliderImg3.jpeg";

export const aboutNavData = [
  {
    id: 1,
    name: "education",
  },
  {
    id: 2,
    name: "certifications",
  },
  {
    id: 3,
    name: "Position of responsibility",
  },
];
export const educationData = [
  {
    id: 1,
    organization: "Graphic Era University",
    Course: "Bachelor's of Technology",
    major: "Computer Science and Engineering",
    grade: "9.4 / 10",
    time: "sept 2020 -july 2024",
  },
  {
    id: 2,
    organization: "Graphic Era University",
    Course: "Bachelor's of Technology",
    major: "Computer Science and Engineering",
    grade: "9.4 / 10",
    time: "sept 2020 -july 2024",
  },
];
export const skillData = [
  {
    id: 1,
    icon: <SiReact size={100} />,
  },
  {
    id: 2,
    icon: <FaNodeJs size={100} />,
  },
  {
    id: 3,
    icon: <SiJavascript size={100} />,
  },
  {
    id: 4,
    icon: <SiMongodb size={100} />,
  },
  {
    id: 5,
    icon: <SiHtml5 size={100} />,
  },
  {
    id: 6,
    icon: <SiTailwindcss size={100} />,
  },
  {
    id: 7,
    icon: <SiBootstrap size={100} />,
  },
  {
    id: 8,
    icon: <DiCss3 size={100} />,
  },
  {
    id: 9,
    icon: <FaJava size={100} />,
  },
  {
    id: 10,
    icon: <AiOutlineGithub size={100} />,
  },
  {
    id: 11,
    icon: <SiExpress size={100} />,
  },
  {
    id: 12,
    icon: <SiFirebase size={100} />,
  },
];

export const sliderData = [
  {
    id: 1,
    imgSrc: sliderImg1,
    title: "Global School Website",
    urlCode: "https://github.com/vishalk3102/globalschoolreactwebsite",
    urlLive: "https://globalschoolreact.herokuapp.com/",
    description: "A website to show all realted information regarding school.",
  },
  {
    id: 2,
    imgSrc: sliderImg2,
    title: "uPay",
    urlCode: "https://github.com/vishalk3102/uPay",
    urlLive: "https://upay-react.herokuapp.com/",
    description:
      "Website for Payment that features all the essential details for payment sites",
  },

  {
    id: 3,
    imgSrc: sliderImg3,
    title: "EnigmaDev",
    urlCode: "https://github.com/vishalk3102/Enigma-Dev",
    urlLive: "https://enigma-dev.herokuapp.com/",
    description:
      "A website that manage different business and show all the relevant information related to it.",
  },
];

export const techIconData = [
  {
    id: 1,
    icon: <SiReact size={30} />,
  },
  {
    id: 2,
    icon: <SiBootstrap size={30} />,
  },
  {
    id: 3,
    icon: <SiJavascript size={30} />,
  },
];
