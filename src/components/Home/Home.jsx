import React from "react";
import "./Home.css";
import { Button, Chip } from "@mui/material";
import git from "../../assets/git_dark.svg";
import { motion } from "framer-motion";
import fb from "../../assets/fb.svg";
import { Link } from "react-router-dom";
import link from "../../assets/link.svg";
import { useSelector } from "react-redux";
import Project from "../Projects/Project";
import Skills from '../Skills/Skills'
import About from '../About/About'
import Contact from '../Contacts/Contact'
const Home = (props) => {
  const bgColor = useSelector((state) => state.toggle.mode);
  const textColor = useSelector((state) => state.toggle.textColor);
  let color = "";
  if (textColor === "var(--dark)") {
    color = "gray-900";
  } else {
    color = "white";
  }
  const button = {
    hover: {
      scale: 1.1,
      boxShadow: `0px 0px 8px ${textColor}`,
      transition: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  };

  const imageAnimation = {
    hover: {
      rotate: 20,
      transition: {
        yoyo: Infinity,
      },
    },
  };
  const textAnimation = {
    hover: {
      textShadow: `0px 0px 8px ${textColor}`,
      transition: {
        yoyo: Infinity,
      },
    },
  };
  return (
<div className="w-full flex flex-col items-center">
  <div className="md:w-9/12 w-full">

  <motion.div
      className="w-full flex flex-col min-h-screen  items-center justify-center"
      onClick={props.closeDrawer}
    >
      <div className="clip-wrapper">
        <motion.div
          initial={{ x: -100, y: -100, rotate: 2000 }}
          transition={{ duration: 2 }}
          animate={{ x: 0, y: 0 }}
          className="clip1"
          style={{ backgroundColor: textColor, transform: "rotate(20)" }}
        ></motion.div>
        <motion.div
          initial={{ x: -100, y: 100, rotate: 1000 }}
          transition={{ duration: 2 }}
          animate={{ x: 0, y: 0 }}
          className="clip2"
          style={{ backgroundColor: textColor }}
        ></motion.div>
        <motion.div
          initial={{ x: 100, y: -100, rotate: 1000 }}
          transition={{ duration: 2 }}
          animate={{ x: 0, y: 0 }}
          className="clip3"
          style={{ backgroundColor: textColor }}
        ></motion.div>
        <motion.div
          initial={{ x: 100, y: 100, rotate: 5000 }}
          transition={{ duration: 2 }}
          animate={{ x: 0, y: 0 }}
          className="clip4"
          style={{ backgroundColor: textColor }}
        ></motion.div>
      </div>
      <div className="greetings">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hello"
        >
          Hello there,
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="introduce"
        >
          <motion.div
            className={`border-b-2 font-bold border-${color}`}
            variants={textAnimation}
            whileHover="hover"
          >
            I'm Joe Cristian
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="profession"
        >
          <strong>react.js developer</strong>
        </motion.div>
        <div className="show_skills">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="m-1 text-xs"
            style={{ textColor, color: bgColor }}
          >
            <Chip sx={{ color: textColor }} label="react.js" />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            className="m-1 text-xs"
            transition={{ duration: 1.4 }}
            style={{ color: bgColor }}
          >
            <Chip sx={{ color: textColor }} label="mongodb" />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6 }}
            className="m-1 text-xs"
            style={{ color: bgColor }}
          >
            <Chip sx={{ color: textColor }} label="firebase" />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="m-1 text-xs"
            style={{ color: bgColor }}
          >
            <Chip sx={{ color: textColor }} label="redux" />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex p-1 rounded-full"
          style={{ backgroundColor: "white" }}
        >
          <motion.div className="w-5 m-1 z-10">
            <a href="https://github.com/JangManWol-source">
              <motion.img
                variants={imageAnimation}
                whileHover="hover"
                src={git}
                alt=""
              />
            </a>
          </motion.div>
          <div className="w-5 m-1 z-10">
            <a href="https://web.facebook.com/joetian.jamis.7/">
              <motion.img
                variants={imageAnimation}
                whileHover="hover"
                src={fb}
                alt=""
              />
            </a>
          </div>
          <motion.div className="w-5 m-1 z-10">
            <a href="https://www.linkedin.com/in/joe-cristian-jamis-311531212/">
              <motion.img
                variants={imageAnimation}
                whileHover="hover"
                src={link}
                alt=""
              />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="w-full flex flex-col items-center p-2"
        >
          <motion.div className="m-1" variants={button} whileHover="hover">
            <Link style={{ textDecoration: "none" }} to="/projects/">
              <Button
                variant="contained"
                size="small"
                style={{ backgroundColor: textColor, color: bgColor }}
              >
                View My Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    <Project />
    <Skills />
    <About />
    <Contact />
  </div>
</div>
  );
};

export default Home;
