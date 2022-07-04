import React, { useState } from "react";
import { Card, Chip } from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import variants from "../Animation/in-out";
import skillsData from "../Data/SkillsData";
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
      <div className="md:w-9/12 p-4">
        <div className="title">My Expertise</div>
        <div className="text-left text-xs border-b-2 w-20">Related Skills</div>
        <div className="flex justify-center flex-wrap">
          {chipData.map((each) => (
            <Chip
              onClick={chipHandler}
              sx={{
                marginRight: 1,
                marginTop: 1,
                color: textColor,
                fontSize: 10,
                height: "fit-content",
              }}
              label={each.name}
              key={each.id}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {selected === "all" &&
            skillsData.map((each) => (
              <Card
                key={each.id}
                className="w-20 m-2 p-2 h-20 flex flex-col justify-center items-center"
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
              className="w-20 m-2 p-2 h-20 flex flex-col justify-center items-center"
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
      </div>
    </motion.div>
  );
};

export default Skills;
