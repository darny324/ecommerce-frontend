import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const MenuCard = (prop) => {
  
  const {title, items, to} = prop;
  return (
    <motion.div 
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{
      ease: 'circInOut', 
      duration: 0.7, 
      type: 'tween'
    }}
    className="
    md:w-[22rem] w-[18rem] rounded-lg px-3 py-4 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]
    ">
      <h2>{title}</h2>
      <div className="grid grid-cols-2 justify-items-center mb-4">
        {items.map((item) => {
          return <span key={`${item.name}+menu`} className="">
            <img src={item.image} className="w-26 h-26 md:w-28 md:h-28 object-contain" />
            <p>{item.name}</p>
          </span>
        })}
        
      </div>
      <button className="self-end">
          <Link to={to} className="
          px-3 py-1 rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.25)]
          hover:bg-blue-500 hover:text-white ml-4 
          transition-color duration-700 ease-in-out flex items-center gap-1
          "><span>See more</span><FontAwesomeIcon icon='arrow-right' /></Link>
        </button>
    </motion.div>
  )
}

export default MenuCard