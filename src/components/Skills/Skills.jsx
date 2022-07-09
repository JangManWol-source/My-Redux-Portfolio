import React, { useState } from "react";
import { Card, Chip } from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import variants from "../Animation/in-out";
import skillsData from "../Data/SkillsData";
import Info from "../Infos/Info";
const Skills = () => {
  const textColor = useSelector((state) => state.toggle.textColor);
  const [selected, setSelected] = useState("all");
  const chipData = [
    {
      id: Math.random().toString(),
      name: "all",
    },
    {
      id: Math.random().toString(),
      name: "web",
    },
    {
      id: Math.random().toString(),
      name: "database",
    },
    {
      id: Math.random().toString(),
      name: "animation",
    },
    {
      id: Math.random().toString(),
      name: "android",
    },
  ];

  const filteredSkills = skillsData.filter((each) => each.type === selected);
  const chipHandler = (e) => {
    let selectedValue = e.target.outerText;
    setSelected(selectedValue);
  };
  return (
    <motion.div variants={variants} initial='initial' animate='animate' exit='exit' className="w-full flex flex-col min-h-screen items-center justify-start">
      <div className="md:full p-4">
        <div className="title">My Expertise</div>
        <div className="text-left text-xs border-b-2 w-20">Related Skills</div>
        <div className="flex justify-center flex-wrap">
          {chipData.map((each) => (
            <div
              className="hover:bg-yellow-500 hover:font-bold hover:text-gray-900 active:bg-yellow-500 rounded-full text-white bg-gray-800 pl-2 pr-2 pt-1 pb-1 text-xs m-1"
              onClick={chipHandler}
              key={each.id}
            >{each.name}</div>
          ))}
        </div>
        <div className="w-full flex flex-wrap items-center justify-center">
          {selected === "all" &&
            skillsData.map((each) => (
              <Card
                key={each.id}
                className="w-2/5 font-bold md:w-32 hover:rotate-2 hover:scale-110 text-center m-2 p-2 h-20 flex flex-col justify-center items-center"
              >
                <img className="w-12 h-auto" src={each.img} alt="" />
                <div style={{ fontSize: 8, color: "#1f1f1f" }}>
                  {each.title}
                </div>
              </Card>
            ))}
          {filteredSkills.map((each) => (
            <Card
              key={each.id}
              className="w-2/5 md:w-32 font-bold  hover:rotate-2 hover:scale-110 text-center m-2 p-2 h-20 flex flex-col justify-center items-center"
            >
              <img className="w-12 h-auto" src={each.img} alt="" />
              <div style={{ fontSize: 8, color: "#1f1f1f" }}>{each.title}</div>
            </Card>
          ))}
        </div>

        <div className="w-full text-left text-xs pt-20">
          I've been concentrating more on web programming as of late, utilizing
          MongoDB as the backend and React.js with Redux Toolkit as the
          frontend. I can utilize my knowledge of the front-end field in any
          situation. To become a confident full-stack developer, I am eager to study more and expand my skills.
        </div>
        
      <Info />
      </div>

    </motion.div>
  );
};

export default Skills;
