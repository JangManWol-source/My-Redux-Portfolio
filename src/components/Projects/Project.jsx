import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import variants from "../Animation/in-out";
import "react-alice-carousel/lib/alice-carousel.css";
import cardData from "../Data/CardData";
import { Button, Card, Chip } from "@mui/material";
const Project = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen w-full"
    >
      <div className="p-8">
        <span className="title">Projects</span>
        <div>
          You are welcome to view the project's live demo and source code for
          free. This project is purely intended for educational purposes. It
          would be my pleasure to see feedback from you.
        </div>
      </div>
      <div className="grid lg:grid-cols-2 overflow-hidden w-full">
        {cardData.map((each) => (
          <div
            key={each.id}
            className="hover:brightness-90 m-2 p-1 rounded-sm bg-white"
          >
            <div>
              <img className="h-80 object-cover w-full" src={each.img} alt="" />
            </div>
            <div className="p-10">
              <div className="text-black/90 font-semibold">{each.title}</div>
              <div className="text-black/90 leading-5 text-sm">
                {each.description}
              </div>
              <br />
              <div>
                {each.built.map((built) => (
                  <Chip
                    key={Math.random().toString()}
                    label={built.item}
                    className="mr-2 mb-1"
                  />
                ))}
              </div>

              <br />
              <div className="w-full flex justify-end">
                <div>
                  <a href={each.demo} target="_blank" rel="noreferrer">
                    <button className="bg-gray-300 m-2 hover:bg-green-400 text-gray-800 text-xs font-bold py-2 px-4 rounded inline-flex items-center">
                      <span>See live</span>
                    </button>
                  </a>
                  <a href={each.github} target="_blank" rel="noreferrer">
                    <button className="bg-gray-300 m-2 hover:bg-blue-400 text-gray-800 text-xs font-bold py-2 px-4 rounded inline-flex items-center">
                      <span>Visit repo</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
