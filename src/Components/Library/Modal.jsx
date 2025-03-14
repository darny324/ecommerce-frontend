import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'

const Modal = ({children, width, height}) => {
    
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
        duration: 0.2,
        ease: 'easeInOut'
    }}
    exit={{opacity: 0}}
    className='fixed z-10 left-0 top-0 cursor-default w-screen h-screen bg-[#beadad93] flex justify-center items-center'>
        <motion.div 
        style={{
            width: width || '400px', 
        }}
        initial={{y:300}}
        animate={{y:0}}
        transition={{
            duration: 0.7, 
            type:'tween', 
            ease: 'easeInOut'
        }}
        exit={{y:300}}
        className='py-8 rounded-lg bg-white px-6 relative'>
            
            {children}
        </motion.div>
    </motion.div>
  )
}

export default Modal