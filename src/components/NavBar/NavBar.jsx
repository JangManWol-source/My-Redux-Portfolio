import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo_p.png";
import { motion } from "framer-motion";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import {useDispatch, useSelector} from 'react-redux'
import { toggleDrawer, toggleMode } from "../../features/toggles";
import { Sling as Hamburger } from 'hamburger-react'
const NavBar = (props) => {
  const nightMode = useSelector((state) => state.toggle.isNightMode)
  const dispatch = useDispatch()
  const isDrawerOpen = useSelector((state) => state.toggle.drawerIsOpen)
  const modeHandler = () => {
    dispatch(toggleMode())
  };
  
  return (
    <div className="nav_bar">
      <div className="nav_bar_content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="icon_menu">
          <motion.div className="mode" 
                  initial={{ y: -50, x: 20 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 1 }} onClick={modeHandler}>
       
            {nightMode ? <LightModeIcon />:<NightsStayIcon />}
          </motion.div>
          <div className="menu_icon" onClick={props.iconHandler}>
            <Hamburger size={20} toggled={isDrawerOpen} toggle={()=>{
              dispatch(toggleDrawer())
              
              console.log('click')
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
