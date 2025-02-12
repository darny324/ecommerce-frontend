import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion";
import StarRating from "./StarRating";



const Card = (prop) => {
  const children = {
    hidden: { x: 10,  }, 
    show: {x: 0, }
  }
  const {item} = prop;
  
  return (
    <motion.div variants={children} className=" px-4 py-2 relative  shadow-[0px_0px_10px_rgba(0,0,0,0.25)]
    flex flex-col justify- bg-slate-200 cursor-pointer hover:scale-105 
    transition-[scale_1s_back-in-out]
    ">
      <div className="w-full flex justify-center">
      <img className="w-[200px] h-[200px]  object-contain" src={item.image}/>
      </div>
      <span className="text-gray-500 text-sm">{item.brand}</span>
      <p className="font-semibold hover:text-green-700
      transition-[color_1s_ease-in-out]">{item.name}</p>
      <StarRating rating={item.rating} />
      <div className="text-green-700 font-semibold text-lg">${item.price.toFixed(2)}</div>
      <button className="
      absolute right-5 bottom-2 cursor-pointer text-green-400
      bg-gray-300 w-8 h-8 flex justify-center items-center rounded-full
      hover:scale-105 transition-[scale_0.5s_back-in-out]
      hover:opacity-85
      "><FontAwesomeIcon icon='cart-shopping'/></button>
    </motion.div>
  )
}

export default Card