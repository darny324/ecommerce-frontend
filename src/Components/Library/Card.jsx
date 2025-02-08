import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

const Card = (prop) => {
  const {item} = prop;
  return (
    <div className="w-[250px] px-4 py-2 relative  shadow-[0px_0px_10px_rgba(0,0,0,0.25)]
    flex flex-col justify- bg-slate-200 cursor-pointer hover:scale-105 
    transition-[scale_1s_back-in-out]
    ">
      <img className="w-[96%] h-[250px]  object-contain" src={item.image}/>
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
    </div>
  )
}

export default Card