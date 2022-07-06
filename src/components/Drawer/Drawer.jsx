
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { toggleDrawer } from "../../features/toggles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactsIcon from '@mui/icons-material/Contacts';
import CottageIcon from '@mui/icons-material/Cottage';
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
            y: '-100',
            opacity: 0,
           
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .5
            }
        },
        exit: {
            opacity: 0,
            y: '100'
        }
    }
  return (
    <AnimatePresence>
       <motion.aside variants={variants} initial='initial' animate='animate' exit='exit' className="w-64 fixed z-20 min-h-screen" aria-label="Sidebar">
   <div className="overflow-y-auto  py-4 min-h-full h-full px-3 bg-gray-50 w-screen dark:bg-gray-800">
      <ul onClick={()=>{
                dispatch(toggleDrawer())
            }} className="space-y-2">
                  <li>
            <Link  to={'/'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <CottageIcon />
               <span className="ml-3">Home</span>
            </Link>
         </li>
         <li>
            <Link  to={'/about/'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <AccountCircleIcon />
               <span className="ml-3">About Me</span>
            </Link>
         </li>
         <li>
            <Link to="/projects/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <ComputerIcon />
               <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
              
            </Link>
         </li>
      
         <li>
            <Link to="/skills/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <BusinessCenterIcon />
               <span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
            </Link>
         </li>
         <li>
            <Link to="/contacts/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <ContactsIcon />
               <span className="flex-1 ml-3 whitespace-nowrap">Contacts</span>
            </Link>
         </li>
      </ul>
   </div>
</motion.aside>variants='variants' initial='initial'
    </AnimatePresence>
  );
};

export default Drawer;
