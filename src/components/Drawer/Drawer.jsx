import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import prof from '../../assets/prof.jpg'
import { AnimatePresence, motion } from "framer-motion";
import { toggleDrawer } from "../../features/toggles";
import "./Drawer.css";
const Drawer = () => {
    let bgColor = useSelector((state) => state.toggle.textColor)
    let textColor = useSelector((state) => state.toggle.mode)
    if(bgColor === 'var(--dark)'){
        bgColor = 'black'
    }else if(bgColor === 'var(--light)'){
        bgColor = 'white'
    }

    if(textColor === 'var(--dark)'){
        textColor = 'black'
    }else if(textColor === 'var(--light)'){
        textColor = 'white'
    }
    console.log(bgColor)
    const dispatch = useDispatch()
    const variants = {
        initial: {
            x: '-100ch',
            opacity: 0,
           
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .5
            }
        },
        exit: {
            opacity: 0,
            x: '-100ch',
            transition:{
                duration: .5
            }
        }
    }
  return (
    <AnimatePresence>
        <motion.div variants={variants} initial='initial' animate='animate' exit='exit' className="drawer" onClick={()=>{
        dispatch(toggleDrawer())
    }}>
     <div className="drawer_inside" style={{backgroundColor: bgColor, color: textColor}}>
      <div className="drawer_content">
        <div className="drawer_header">
            <Avatar src={prof} sx={{width:50, height: 'auto'}} />
            <div>Joe Cristian Jamis</div>
            <div className="line" style={{backgroundColor: textColor, margin:20}}></div>
        </div>
        <div className="drawer_menus">
            <div className="hover:border-b-4 hover:border-gray-700">
                <Link to={'/'} className={`hover:font-bold`}>Home</Link>
            </div>
            <div className="hover:border-b-4 hover:border-gray-700">
                <Link to={'/projects/'} className={`hover:font-bold `}>Projects</Link>
            </div>
            <div className="hover:border-b-4 hover:border-gray-700">
                <Link to={'/skills/'} className={`hover:font-bold`}>Skills</Link>
            </div>
            <div className="hover:border-b-4 hover:border-gray-700">
                <Link to={'/contacts/'} className={`hover:font-bold`}>Contacts</Link>
            </div>
            <div className="hover:border-b-4 hover:border-gray-700">
                <Link to={'/about/'} className={`hover:font-bold`}>About</Link>
            </div>

          
        </div>

      </div>
     </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Drawer;
