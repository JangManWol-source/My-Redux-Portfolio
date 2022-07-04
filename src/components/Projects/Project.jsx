import React from "react";
import joellibee from "../../assets/joellibee.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import variants from "../Animation/in-out";
const Project = () => {
  const cardData = [
    {
      id: Math.random().toString(),
      img: joellibee,
      title: "Jollibee Clone App Named Joellibee",
      description: "",
      built: [
        { item: "react.js" },
        { item: "redux-toolkit" },
        { item: "material-ui" },
        { item: "mongoDB" },
        { item: "node.js" },
        { item: "express.js" },
      ],
      github: "",
      demo: "",
    },
    {
      id: Math.random().toString(),
      img: joellibee,
      title: "Jollibee Clone App Named Joellibee",
      description: "",
      built: [
        { item: "react.js" },
        { item: "redux-toolkit" },
        { item: "material-ui" },
        { item: "mongoDB" },
        { item: "node.js" },
        { item: "express.js" },
      ],
      github: "",
      demo: "",
    },
  ];
  return (
    <motion.div variants={variants} initial='initial' animate='animate' exit='exit' className="w-full flex flex-col min-h-screen  items-center justify-start">
      <span className="title">Projects</span>
      {cardData.map((each) => (
        <motion.div whileHover={{scale: 1.1}} class="rounded overflow-hidden text-xs hover:bg-gray-600 shadow-lg w-11/12 lg:w-1/2 h-auto m-8">
          <img class="w-full" src={each.img} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{each.title}</div>
            <p class="text-base">{each.description}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span className="mr-5">Built with:</span>
            {each.built.map((each) => (
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                #{each.item}
              </span>
            ))}
           <div>
           <button class="bg-gray-300 m-2 hover:bg-gray-400 text-gray-800 text-xs font-bold py-2 px-4 rounded inline-flex items-center">
              <VisibilityIcon />
              <span>See live</span>
            </button>
            <button class="bg-gray-300 m-2 hover:bg-gray-400 text-gray-800 text-xs font-bold py-2 px-4 rounded inline-flex items-center">
              <GitHubIcon />
              <span>Visit repo</span>
            </button>
           </div>
            <span></span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Project;
