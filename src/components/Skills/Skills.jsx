import React, { useState } from "react";
import { Card } from "@mui/material";
import { Tab } from '@headlessui/react'
import { AnimateSharedLayout, motion } from "framer-motion";
import variants from "../Animation/in-out";
import skillsData from "../Data/SkillsData";
import Info from "../Infos/Info";
const Skills = () => {
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

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
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
        <AnimateSharedLayout>
            <Tab.Group>
        <Tab.List className="flex space-x-1 w-full m-1 md:w-11/12 rounded-xl bg-gray-700 p-1">
          {(chipData).map((category) => (
            <Tab
            
            onClick={chipHandler}
              key={category.id}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg p-1 text-sm font-medium leading-5 dark:text-white',
                  'ring-white ring-opacity-40 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-yellow-600 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-gray-900'
                )
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
       
      </Tab.Group>
        </AnimateSharedLayout>
        </div>
        <div className="z-40 w-full flex flex-wrap items-center justify-center">
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
