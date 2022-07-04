import React from 'react'
import './Card.css'
import { motion } from 'framer-motion'
const GreyBorderCard = (props) => {

  
  const item = {
    hover: {
      scale: 1.1,
      opacity: 1
    },
    initial: {
      scale: 1,
      opacity: 1
    },
  }
  return (
    <motion.div variants={item} whileHover='hover' initial='initial' transition={{duration:1}} className={`${"card"} ${props.className}`}>
        {props.children}
    </motion.div>
  )
}

export default GreyBorderCard