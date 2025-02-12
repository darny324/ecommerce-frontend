import Laptop from '../../../assets/laptop.png'
import Desktop from '../../../assets/desktop.png'
import Computer from '../../../assets/banner-computer.webp'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StarRating from '../../Library/StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const product = {
  id: "soundmax-pro-x3",
  name: "SoundMax Pro X3 - Wireless Noise-Canceling Headphones",
  brand: "SoundMax",
  price: 199.99,
  discount: 0.2,
  stock: 5,
  colorOptions: [
    {color: '#000000'},
    {color: '#ffffff'},
    {color: '#6CB4EE'} 
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
      comment: "Best noise-canceling headphones I’ve ever used! Battery life is insane.",
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
};





const SingleProduct = () => {
  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const [showAll, setShowAll] = useState(false);
  const information = Object.entries(product.attributes);
  const visibleInfo = showAll ? information : information.slice(0, 0);
  const [selectedColor, setSelectedColor] = useState(product.colorOptions[0].color);


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
    <div className="flex justify-center mt-12 gap-8">
      <div className='flex flex-col gap-2 w-96'>
        <motion.div
        key={selectedImg}
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{ease: 'circInOut', duration: 0.5, }}
        >
        <motion.img 
        src={selectedImg} className='w-full h-96 rounded-lg border-1 border-gray-300 bg-[#bd9090b8] object-contain'/>
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

      <div className='w-[32rem] flex flex-col gap-2'>
        <h1>{product.name}</h1>
        <p className='text-gray-400 text-sm'>{product.description}</p>
        <span className='flex gap-2 text-gray-400 text-sm'>
          <StarRating rating={product.rating} /> <span>{product.totalReviews} reviews</span>
        </span>
        <p>
          <span className={`${product.discount !== 0 ? 'line-through text-gray-400' : 'font-semibold text-xl'}`}>${product.price}</span>
          {
            product.discount !== 0 ? 
            <>
            <span className='text-xl font-semibold ml-2'>${Math.floor(product.price * (1 - product.discount) * 100) /100}</span>
            <span className='text-xl text-red-400 ml-2'>-{product.discount * 100}%</span>
            </> : <></>
          } 
        </p>

        <div>
          <h2>Products Information</h2>
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
          ease-in-out flex items-center gap-2'
          onClick={() => setShowAll(!showAll)}
          >
            <span>{showAll ? 'See less' : 'See more'}</span>
            <FontAwesomeIcon icon={showAll ? 'chevron-up' : 'chevron-down'} />
          </motion.button>
        </div>
        <div>
          <h2>Color</h2>
          <div className='flex gap-2'>
            {
              product.colorOptions.map( (option) => {
                return <div 
                key={option.color + 'color'} 
                onClick={() => setSelectedColor(option.color)} 
                style={{backgroundColor: option.color}} 
                className={`w-6 h-6 rounded-full border-2
                ${selectedColor === option.color ? 'border-red-400' : 'border-gray-400'}`} ></div>
              })
            }
          </div>
        </div>

        <div>
          <span className='font-semibold'>Quantiy</span> 
          <select className='outline-none border-1 border-gray-500 rounded-md px-2 py-0.5 ml-2'>
            {
              [...Array(product.stock)].map((_, i) => {
                return <option key={i + "quantity-option"}
                
                >{i}</option>
              })
            }
          </select>
        </div>

        <button className='w-48 h-10 cursor-pointer hover:bg-fuchsia-400 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg bg-fuchsia-600 flex items-center gap-2 justify-center text-white'>
          <FontAwesomeIcon icon='shopping-cart'/>
          <span>Add To Cart</span>
        </button>
        
      </div>
    </div>
  )
}

export default SingleProduct