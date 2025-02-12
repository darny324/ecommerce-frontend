import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default StarRating;