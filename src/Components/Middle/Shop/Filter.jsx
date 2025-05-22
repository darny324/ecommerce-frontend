import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

const ratings = [
  { label: '1 star', value: 'rating>=1'},
  { label: '2 star', value: 'rating>=2'},
  { label: '3 star', value: 'rating>=3'},
  { label: '4 star', value: 'rating>=4'},
  { label: '5 star', value: 'rating>=5'},
]
const discount = [
  {label: '10%', value: 'discount>=10'}, 
  {label: '20%+', value: 'discount>=20'},
  {label: '40%+', value: 'discount>=40'},
  {label: '50%+', value: 'discount>=50'},
]


const Filter = (prop) => {
  const {children} = prop; 
  const [isShow, setIsShow] = useState(false);
  
  return (
    <div className="relative">
      <div className="hidden md:flex md:flex-col gap-4 pl-8">
        
        {children}
      </div>

      <button 
      onClick={() => setIsShow(!isShow)}
      className="flex md:hidden gap-2 items-center my-4">
         <span>Filters</span>
         {isShow ? <FontAwesomeIcon icon='chevron-up' /> : <FontAwesomeIcon icon='chevron-down' />}
      </button>

      
      <AnimatePresence>
      {
        isShow && <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          duration: 0.4, 
          type: 'tween', 
          ease: 'easeInOut'
        }}
        exit={{opacity: 0}}
        className="fixed right-0 top-0 bg-[#d1bcbca2] w-screen h-screen flex items-center overflow-y-scroll scrollbar-hidden"
        >
        <motion.div 
        initial={{y:300}}
        animate={{y:0}}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
        exit={{y:300}}
        className="px-4 rounded-lg bg-white  py-2 h-[500px] w-[100vw] overflow-y-scroll scrollbar-hidden">
        
          {children}

          <button 
          onClick={() => {setIsShow(false)}}
          className="text-white bg-black px-4 py-2 rounded-lg mt-2">
            Close
          </button>
        </motion.div>
      </motion.div>
      }
      </AnimatePresence>
    </div>
  )
}

export default Filter