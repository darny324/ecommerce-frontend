import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HalfStar = (prop) => {
  const {isDisplay} = prop;
  return (
    <FontAwesomeIcon icon={isDisplay ? 'star-half-alt': 'star'} className={isDisplay ? 'text-yellow-300' : 'text-gray-300'} />
  )
}



const StarRating = (prop) => {
  const {rating} = prop; 
  const fullstars = Math.trunc(rating);
  const noStars = Math.trunc(5-rating);
  const fraction = rating - fullstars; 
  const isHalfStar = (fraction >= 0.5);
  return (
    <div >
      {
        [...Array(fullstars)].map((_, i) => {
          
          return <FontAwesomeIcon icon='star' key={i+ '+fullstar'} className="text-yellow-400" />
        })
      }
      <HalfStar isDisplay={isHalfStar} />
      {
        [...Array(noStars)].map((_, i) => {
          
          return <FontAwesomeIcon icon='star' key={i+ '+nostar'} className="text-gray-300" />
        })
      }
    </div>
  )
}

const SearchCard = (prop) => {
  const {product} = prop;
  return (
    <div className="flex items-center gap-4 px-4">
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
    </div>
  )
}

export default SearchCard