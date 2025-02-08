import { Link } from "react-router-dom"
import ProductImg from '../../../assets/products.png'
import { motion } from "framer-motion"

const Intro = () => {
  
  return (
    <motion.div
    className={`h-[600px] sm:h-[500px] bg-teal-100 flex flex-col-reverse sm:flex-row justify-center gap-20 sm:items-center
    px-10
    `}
    initial={{
      opacity: 0, 
    }}
    whileInView={{opacity: 1}}
    transition={{
      duration: 3, 
      ease: 'easeInOut'
    }}
    >
      <motion.div
      initial={{
        x: 700, 
      }}
      animate={{
        x: 0, 
      }}
      transition={{
        duration: 1, 
        ease: 'easeInOut'
      }}
      >
        <span className="text-gray-500">Shop Smart, Live Better!</span>
        <p className="text-xl mb-4 font-semibold">
          <span>Bringing you the best products,</span>  <br/>
          <span className="text-green-400">at the best prices, with the best service</span></p>
        <motion.button
        whileHover={{
          scale: 1.05, 
        }}
        whileTap={{
          scale: 0.95, 
        }}
        ><Link to='/shop' 
        className="text-white rounded-xl px-4 py-2 bg-pink-300">Shop Now</Link></motion.button>
      </motion.div>
      <motion.div
      initial={{
        x: -700, 
      }}
      animate={{
        x: 0, 
      }}
      transition={{
        duration: 1, 
        ease: 'easeInOut'
      }}
      >
        <img src={ProductImg}/>
      </motion.div>
    </motion.div>
  )
}

export default Intro