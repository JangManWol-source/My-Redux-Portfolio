import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import variants from "../Animation/in-out";
import "react-alice-carousel/lib/alice-carousel.css";
import cardData from "../Data/CardData";
const Project = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      <div className="p-8">
        <span className="title">Projects</span>
        <div>
          You are welcome to view the project's live demo and source code for
          free. This project is purely intended for educational purposes. It
          would be my pleasure to see feedback from you.
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        {cardData.map((each) => (
          <motion.div
            key={each.id}
            whileHover={{ scale: 1.1 }}
            className="rounded overflow-hidden text-xs hover:bg-slate-400 shadow-lg w-full lg:w-1/3 h-auto m-8"
          >
            <img className="w-full" src={each.img} alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{each.title}</div>
              <p className="text-base">{each.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="mr-5">Built with:</span>
              {each.built.map((each) => (
                <span
                  key={each.item}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{each.item}
                </span>
              ))}
              <div className="w-full flex items-center justify-center sm:justify-end">
                <a href={each.demo}>
                  <button className="bg-gray-300 m-2 hover:bg-gray-400 text-gray-800 text-xs font-bold py-2 px-4 rounded inline-flex items-center">
                    <VisibilityIcon />
                    <span>See live</span>
                  </button>
                </a>
                <a href={each.github}>
                  <button className="bg-gray-300 m-2 hover:bg-gray-400 text-gray-800 text-xs font-bold py-2 px-4 rounded inline-flex items-center">
                    <GitHubIcon />
                    <span>Visit repo</span>
                  </button>
                </a>
              </div>
              <span></span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
