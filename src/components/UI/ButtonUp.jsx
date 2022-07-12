import './ButtonUp.css';
import React from 'react'
import { motion } from 'framer-motion';
import { AiOutlineUp } from 'react-icons/ai';

function ButtonUp() {

  return (
    <motion.a href='#home' className='button__up'
    initial={{scale: 0, opacity:0}}
    animate={{scale: 1, opacity: 1}}
    transition={{delay: 2.2}}
    ><AiOutlineUp className='button__up-icon'/></motion.a>
  )
}

export default ButtonUp