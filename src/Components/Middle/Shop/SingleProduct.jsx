import Laptop from '../../../assets/laptop.png'
import Desktop from '../../../assets/desktop.png'
import Computer from '../../../assets/banner-computer.webp'
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StarRating from '../../Library/StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../Library/Modal';

const product = {
  id: "soundmax-pro-x3",
  name: "SoundMax Pro X3 - Wireless Noise-Canceling Headphones",
  shortName: "SoundMax Pro X3", 
  brand: "SoundMax",
  price: 199.99,
  discount: 0.2,
  quantity: 6, 
  options: [
    {
      label: "Normal", 
      price: 199.99, 
      quantity: 6,
    },
    {
      label: "Writing random nonsense bunch of things to make it longer", 
      price: 209.99, 
      quantity: 3,
    }, 
    {
      label: "Green", 
      price: 209.99, 
      quantity: 4,
    }, 
    {
      label: "Red", 
      price: 209.99, 
      quantity: 5,
    }
  ],
  description: "Industry-leading Active Noise Cancellation (ANC) with up to 40 hours of battery life and Bluetooth 5.2 for ultra-fast pairing.",
  attributes: {
    material: "Aluminum & Premium Plastic",
    connectivity: "Bluetooth 5.2, 3.5mm Audio Jack",
    noiseCancellation: "Active Noise Cancellation (ANC)",
    batteryLife: "40 Hours",
    chargingType: "USB-C Fast Charging",
    microphone: "Built-in Dual Mic",
    weight: "250g",
    driverSize: "40mm",
    frequencyResponse: "20Hz - 20kHz",
    charging: "USB-C, 1.5 hours full charge",
  },
  features: [
    "Active Noise Cancellation (ANC)",
    "Up to 40 hours of battery life",
    "Fast charging: 10 mins = 5 hours playback",
    "Bluetooth 5.2 for ultra-fast pairing",
    "Built-in AI voice assistant support",
  ],
  images: [
    Laptop, Desktop, Computer, Laptop
  ],
  reviews: [
    {
      user: "John D.",
      rating: 5,
      comment: "Best noise-canceling headphones I’ve ever used! Battery life is insane.Best noise-canceling headphones Best noise-canceling headphones Best noise-canceling headphones Best noise-canceling headphones Best noise-canceling headphones Best noise-canceling headphBest noise-canceling headphones ones ",
    },
    {
      user: "Sarah M.",
      rating: 4,
      comment: "Super comfortable, but I wish they had more color options!",
    },
  ],
  rating: 4.8,
  totalReviews: 1245,
  shipping: {
    freeShipping: true,
    estimatedDelivery: "Feb 15-17",
  },
  returnPolicy: "30-Day Money-Back Guarantee, 1-Year Warranty Included",
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], 
};

const Detail = (prop) => {
  const {addition, returnPolicy} = prop; 
  const features = Object.entries(addition);
  return (
    <div className='flex flex-col gap-4 w-[90%] md:w-[50%]'>

      <div>
        <h2>Description</h2>
        <p className='text-gray-400 text-sm '> - {product.description}</p>
      </div>
      <div>
        <h2>Additional Features</h2>
        <ul className=' list-disc text-gray-500 mt-2 ml-6'>
          {
            features.map((item) => {
              return <li key={item[1] + "+features"} className='mt-2' >
                {item[1]}
              </li>
            })
          }
        </ul>
      </div>

      <div>
        <h2>Return Policy</h2>
        <p className='text-gray-500'>- {returnPolicy}</p>
      </div>
      
    </div>
  )
}

const Review = (prop) => {
  const {rating, reviews, totalReviews} = prop;
  return (
    <div className='md:w-[60%] w-[90%]'>
      <div className='text-center'>
        <StarRating rating={rating} size='24px' />
        <p className='text-gray-500'>{totalReviews} reviews</p>
      </div>

      <ul className='flex flex-col gap-4 text-gray-500 mt-8'>
        {
          reviews.map((review, i) => {
            return <li key={review.user + '+review' + i}
            className='px-8 py-6 border-1 border-gray-400 rounded-lg'
            >
              <p>{review.comment}</p>
              <span className='flex items-center mt-2'>
                <img src='https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png'
                className='w-12 h-12 rounded-full object-contain'
                />
                <div>
                  <p className='text-black font-semibold'>{review.user}</p>
                  <StarRating rating={review.rating} size='14px' />
                </div>
              </span>
            </li>
          })
        }
      </ul>
    </div>
  )
}



const SingleProduct = () => {
  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const [selected, setSelected] = useState('detail');
  const [showAll, setShowAll] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const information = Object.entries(product.attributes);
  const visibleInfo = showAll ? information : information.slice(0, 0);
  const [selectedOption, setSelectedOption] = useState(0);
  const inStock = useRef(product.quantity);
  
  

  const rowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const camelToNormal = (str) => {
    const arr = str.split('');
    let result = [];
    arr.forEach((ch, i) => {
      if ( i === 0 ) result.push(ch.toUpperCase())
      else if ( ch === ch.toUpperCase())
      {
        result.push(' ');
        result.push(ch);
      } else result.push(ch);
    })
    return result.join('');
  }

  return (
    <div className='flex flex-col items-center'>
      

      <div className="flex md:flex-row flex-col items-center md:px-8  mt-12 gap-8">
      
        <div className='flex flex-col gap-2 w-76 md:w-96'>
          <motion.div
          key={selectedImg}
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{ease: 'circInOut', duration: 0.5, }}
          >
          <motion.img 
          src={selectedImg} className='w-full h-52 md:h-96 rounded-lg border-1 border-gray-300 bg-[#bd9090b8] object-contain'/>
          </motion.div>
          <div className='grid grid-cols-4 gap-2'>
            {
              product.images.map((img, i) => {
                return <img 
                key={img+'image' + i} src={img} 
                onClick={() => setSelectedImg(img)}
                className={`w-24 hover:border-2 hover:border-gray-400 ${selectedImg === img ? 'border-2 border-yellow-300' : ''} cursor-pointer h-20 object-contain rounded-lg bg-[#bd9090b8]`} />
              })
            }
          </div>
        </div>

        <div className='md:w-[32rem] w-76 flex flex-col gap-2'>
          <div className='font-semibold text-gray-500'>
            shop/products/{product.shortName}
          </div>
          <h1 className='text-lg'>{product.name}</h1>
          <span className='flex gap-2 text-gray-400 text-sm'>
            <StarRating rating={product.rating} /> <span>{product.totalReviews} reviews</span>
          </span>
          <p>
            <span className={`${product.discount !== 0 ? 'line-through text-gray-400' : 'font-semibold text-xl'}`}>${product.price}</span>
            {
              product.discount !== 0 ? 
              <>
              <span className='md:text-xl font-semibold ml-2'>${Math.floor(product.price * (1 - product.discount) * 100) /100}</span>
              <span className='md:text-xl text-red-400 ml-2'>-{product.discount * 100}%</span>
              </> : <></>
            } 
          </p>

          <div>
            <h2 className='md:text-xl text-lg'>Products Information</h2>
            <table className="w-full">
              <motion.tbody>
                <AnimatePresence>
                  {visibleInfo.map((info) => (
                    <motion.tr
                      key={info[1]}
                      className="h-7"
                      variants={rowVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <td className="text-black font-semibold">{camelToNormal(info[0])}</td>
                      <td className="text-gray-500">{info[1]}</td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </motion.tbody>
            </table>
            <motion.button 
            layout='preserve-aspect'
            className='
            text-blue-500 hover:text-blue-300 transition-colors duration-500
            ease-in-out md:text-bg text-sm flex items-center gap-2'
            onClick={() => setShowAll(!showAll)}
            on
            >
              <span>{showAll ? 'See less' : 'See more'}</span>
              <FontAwesomeIcon icon={showAll ? 'chevron-up' : 'chevron-down'} />
            </motion.button>
          </div>
          {
            product.options && <div>
            <div className='flex gap-2'>
              {
                product.options.map( (option, index) => {
                  const [modal, setModal] = useState(false);
                  const [isLongPress, setIsLongPress] = useState(false);
                  const timeRef = useRef(null);
                  useEffect(() => {
                    if ( isLongPress ){
                      setModal(true);
                    }
                  }, [isLongPress])
                  return <div 
                  onClick={() => {
                    setSelectedOption(index);
                    inStock.current = option.quantity;
                  }}
                  onTouchStart={() => {
                    timeRef.current = setTimeout(() => {
                      setIsLongPress(true);
                    }, 500);
                  }}
                  onTouchEnd={() => {
                    if ( timeRef.current) clearTimeout(timeRef.current);
                    setIsLongPress(false);
                  }}
                  onDoubleClick={() => setModal(true)}
                  
                  key={option.label + index} 
                  className={`w-22 h-22 p-1 rounded-md cursor-pointer bg-stone-100 shadow-xl ${selectedOption === index ? 'border border-blue-600': ''}`}>
                    <p className='line-clamp-2 text-sm text-ellipsis'>{option.label}</p>
                    <p className='text-red-300 text-xs'>${option.price}</p>
                    <p className='text-xs'>{option.quantity}</p>
                    <AnimatePresence>
                      {modal && <Modal width='200px'>
                        <div 
                          onClick={() => setModal(false)}
                          className='w-8 h-8 flex hover:bg-stone-200 cursor-pointer justify-center items-center bg-stone-300 absolute rounded-full right-2 top-2'>
                            <FontAwesomeIcon icon='fas fa-xmark' />
                        </div>
                        <div>{option.label}</div>
                        <div className='text-red-300 mt-3'>$ {option.price}</div>
                        <div>Quantity: {option.quantity}</div>
                      </Modal>}
                    </AnimatePresence>
                  </div>
                })
              }
            </div>
          </div>
          }

          

          <div>
            <span className='font-semibold'>Quantiy</span> 
            <select 
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className='outline-none border-1 border-gray-500 rounded-md px-2 py-0.5 ml-2'>
              {
                [...Array(inStock.current)].map((_, i) => {
                  return <option key={i + "quantity-option"}
                  value={i+1}
                  >{i + 1}</option>
                })
              }
            </select>
          </div>

          <motion.button 
          whileTap={{
            scale: 0.90,
          }}
          transition={{
            duration: 0.1, 
            ease: 'easeInOut',
          }}
          className='w-48 h-10  cursor-pointer hover:bg-fuchsia-400 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg bg-fuchsia-600 flex items-center gap-2 justify-center text-white'>
            <FontAwesomeIcon icon='shopping-cart'/>
            <span>Add To Cart</span>
          </motion.button>
          
        </div>
      </div>

      <div className='flex flex-col items-center gap-4'>
        <div className='flex justify-center gap-8 text-xl font-semibold text-gray-400 mt-8 ' >
          <span className='relative cursor-pointer hover:text-gray-300' onClick={() => setSelected('detail')}>
            Details

            <AnimatePresence>
            {
              selected === 'detail' && 
              <motion.div 
              className="origin-center absolute h-0.5 bottom-0 left-0 right-0 bg-[#1c1818]"
              initial={{scaleX: 0}}
              animate={{scaleX: 1}}
              exit={{scaleX: 0}}
              transition={{
                type: 'spring', 
                stiffness: 500, 
                damping: 30, 
              }}
              >
              </motion.div>
            }
            </AnimatePresence>
          </span>
          <span className='relative cursor-pointer hover:text-gray-300' onClick={() => setSelected('review')}>
            Reviews
            <AnimatePresence>
            {
              selected === 'review' && 
              <motion.div 
              className="origin-center absolute h-0.5 bottom-0 left-0 right-0 bg-[#1c1818]"
              initial={{scaleX: 0}}
              animate={{scaleX: 1}}
              exit={{scaleX: 0}}
              transition={{
                type: 'spring', 
                stiffness: 500, 
                damping: 30, 
              }}
              >
              </motion.div>
            }
            </AnimatePresence>
          </span>
        </div>

        {
          selected === 'detail' ?
          <Detail addition={product.features} returnPolicy={product.returnPolicy} />
          : <Review rating={product.rating} totalReviews={product.totalReviews} reviews={product.reviews} />
        }

      </div>
    </div>
  )
}

export default SingleProduct