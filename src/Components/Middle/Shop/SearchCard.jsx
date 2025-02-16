import { motion } from "framer-motion";
import StarRating from "../../Library/StarRating";


const SearchCard = (prop) => {
  const {product, itemVariant} = prop;
  
  return (
    <motion.div 
    variants={itemVariant}
    className="flex items-center gap-4 px-4">
      <div className="w-32 h-32 shrink-0"><img src={product.image} className="w-full h-full object-contain" /></div>
      <div>
        <h2 className="text-lg md:text-xl line-clamp-2 overflow-hidden">{product.name}</h2>
        <p className="text-gray-400">{product.brand}</p>
        <StarRating rating={product.rating} />
        <p className="mb-2">${product.price.toFixed(2)}</p>
        <a 
        href='products/123'
        className="px-4 py-2 rounded-3xl border border-gray-200
        transition-color duration-300 ease-in cursor-pointer
        hover:border-none hover:bg-black hover:text-white">See More</a>
      </div>
    </motion.div>
  )
}

export default SearchCard