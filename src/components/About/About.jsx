import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsg from "@mui/icons-material/PermPhoneMsg";
import variants from "../Animation/in-out";
import Profile from "../Pofile/Profile";
const About = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex flex-col min-h-screen  items-center justify-start"
    >
      <div>
        <div className="flex justify-end px-4 pt-4"></div>

        {/*Profile*/}
        <Profile />
      </div>
      <div className="about_content">
        <div className="title">About Me</div>
        <div className="details">
          I'm Joe Cristian Jamis, and because I love both programming and arts,
          I developed a keen interest in the development industry, particularly
          in web and mobile application development. I have the skills necessary to work in the React.js
          environment and create web applications that are user-friendly,
          responsive, and clean using popular CSS frameworks like Tailwind and
          Bootstrap. When I'm not at work, I
          typically use my leisure time to watch and read programming video
          courses and documentation on Udemy, YouTube, and other documentation
          sites while simultaneously creating a project based on what I have
          learned from them. 
        </div>
        <div className="title">Experience</div>
        <div className="details">
          <div>Email Campaign Template Designer</div>
          <div className="details">@Buyhomeseazy</div>
        </div>

        <div className="infos">
          <div className="infos_details">
            <div className="info_">
              <LocationOnIcon /> <span>Quezon City, NCR 1119 Philippines</span>
            </div>
            <div className="info_">
              <EmailIcon /> <span>jamisjoecristian@gmail.com</span>
            </div>
            <div className="info_">
              <PermPhoneMsg /> <span>09914219787/09213479586</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
