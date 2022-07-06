import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo_p.png";
import { motion } from "framer-motion";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer, toggleMode } from "../../features/toggles";
import { Sling as Hamburger } from "hamburger-react";
const NavBar = (props) => {
 
  const nightMode = useSelector((state) => state.toggle.isNightMode);
  const [isNight, setNight] = useState(nightMode)
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.toggle.drawerIsOpen);
  const modeHandler = () => {
    dispatch(toggleMode());
  };

  useEffect(()=>{
    setNight(nightMode)
  }, [isNight, nightMode])

  return (
    <div
      className="border-gray-200 px-2 sticky top-0 z-50 sm:px-4 py-2.5"
      style={{ backgroundColor: "#1f1f1f" }}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="icon_menu">
          <motion.div
            className="mode"
            initial={{ y: -50, x: 20 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1 }}
            onClick={modeHandler}
          >
            {isNight ? <LightModeIcon sx={{color:'white'}} /> : <NightsStayIcon sx={{color:'white'}} />}
          </motion.div>
          <div className="menu_icon" onClick={props.iconHandler}>
            <Hamburger color="white"
              size={20}
              toggled={isDrawerOpen}
              toggle={() => {
                dispatch(toggleDrawer());

                console.log("click");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
