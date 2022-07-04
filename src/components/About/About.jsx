import React from "react";
import "./About.css";
import prof from '../../assets/prof.jpg'
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsg from "@mui/icons-material/PermPhoneMsg";
import variants from "../Animation/in-out";
const About = () => {
  
  return (
    <motion.div variants={variants} initial='initial' animate='animate' exit='exit' className="w-full flex flex-col min-h-screen  items-center justify-start">
      <div>
    <div class="flex justify-end px-4 pt-4">
       
    </div>
    <div class="flex flex-col items-center pb-10">
        <image class="mb-3 w-24 h-24 rounded-full shadow-lg" src={prof}/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Joe Cristian Jamis</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Web Developer</span>
        <div class="flex mt-4 space-x-3 lg:mt-6">
            <a href="https://web.facebook.com/joetian.jamis.7/" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="https://web.facebook.com/joetian.jamis.7/" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
      </div>
      <div className="about_content">
        <div className="title">About Me</div>
        <div className="details">
          I'm Joe Cristian Jamis, and because I love both programming and the
          arts, I developed a keen interest in the development industry,
          particularly in web and mobile application development.   When I'm not
          at work, I typically use my leisure time to watch and read programming
          video courses and documentation on Udemy, YouTube, and other
          documentation sites while simultaneously creating a project based on
          what I have learned from them.
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
