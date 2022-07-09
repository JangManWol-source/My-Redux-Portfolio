import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PermPhoneMsg from "@mui/icons-material/PermPhoneMsg";
import { motion } from "framer-motion";
import variants from "../Animation/in-out";
import Profile from "../Pofile/Profile";
const Contact = () => {
  const buttonColor = useSelector((state)=> state.toggle.textColor)
  const color = useSelector((state)=> state.toggle.mode)
  return (
    <motion.div variants={variants} initial='initial' animate='animate' exit='exit' className="w-full flex flex-col min-h-screen  items-center justify-start sm:justify-start">
     

      <form className=" w-full flex flex-col items-end rounded px-8 pt-1 pb-8 mb-4 m-10">
      <div className="title w-full text-left py-5 text-x1" >Let's talk</div>
        <div className="mb-4 w-full">
        
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="mb-4 w-full">
       
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            type="email"
            placeholder="Email"
          />
        </div>


        <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Your message"
    ></textarea>
    
  <Button variant='contained' sx={{backgroundColor: buttonColor, color: color, marginTop: 5 }}>Submit</Button>
      </form>


      <div className="w-full pl-7 flex pb-7">
          <div className="infos_details">
          <div className="info_"><LocationOnIcon /> <span>Quezon City, NCR 1119 Philippines</span></div>
          <div className="info_"><EmailIcon/> <span>jamisjoecristian@gmail.com</span></div>
          <div className="info_"><PermPhoneMsg/> <span>09914219787/09213479586</span></div>
          </div>
        </div>
    </motion.div>
  );
};

export default Contact;
