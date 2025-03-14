import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import {  useSelector } from "react-redux"

const CartItem = (prop) => {
  const [isUpdateQuantity, setIsUpdateQuantity] = useState(false);
  const {item, variant} = prop; 
  return <motion.div 
  variants={variant}
  className="flex items-center px-4 gap-4 py-4 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
    <img src={item.image} className="w-24 h-24 object-contain" />
    <div>
      <h2 className="line-clamp-3 overflow-ellipsis">{item.name}</h2>
      <p className="text-red-500">${item.price.toFixed(2)}</p>
      {
        isUpdateQuantity ? 
        <span className="flex items-center gap-2">
          <p>Quantity</p>
          <select className="border-1 border-gray-400 rounded-md">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button className="text-blue-500 cursor-pointer hover:text-blue-400"
          onClick={() => setIsUpdateQuantity(false)}
          >Change</button>
          <button className="text-blue-500 cursor-pointer hover:text-blue-400"
          onClick={() => setIsUpdateQuantity(false)}
          >Cancel</button>
        </span>
        : <span className="flex items-center gap-2">
        <p>Quantity:{item.quantity} </p>
        <button className="text-blue-500 cursor-pointer hover:text-blue-400"
        onClick={() => setIsUpdateQuantity(true)}
        >Update</button>
        <button className="text-blue-500 cursor-pointer hover:text-blue-400">Delete</button>
      </span>
      }
    </div>
  </motion.div>
}

const Counter = () => {
  const {cart, totalPrice, totalItems} = useSelector((store) => store.cart);
  const [payment, setPayment] = useState('paypal');
  
  const container = {
    hidden: {
      y: 80, 
      opacity: 0, 
    }, 
    show: {
      y: 0, 
      opacity: 1, 
      transition: {
        staggerChildren: 0.1, 
        duration: 0.5, 
      }
    }, 
    
  }
  const itemVariant = {
    hidden: {
      y: 20, 
      opacity: 0, 
    }, 
    show: {
      y: 0, 
      opacity: 1, 
    }
  }
  
  
  return (
   <>
   <h1 className="text-center my-12">Checkout({totalItems})</h1>
    <div className="flex flex-col px-6 md:flex-row justify-center mt-4 gap-4">
      <motion.div
      variants={container}
      initial='hidden'
      animate='show' 
      className="md:w-[35%] flex flex-col gap-4">
      {
        cart.map((item) => <CartItem variant={itemVariant} key={item.id+"+cartitem+" + item.name} item={item} />)
      }
      </motion.div>

      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, ease: 'easeInOut'}}
      className="px-4 py-4 border border-gray-400 rounded-md md:h-[300px]">
        <h2>Order Summary</h2>
        <table className="w-[300px]">
          <tbody>
            <tr>
              <td>items({totalItems}):</td>
              <td>${totalPrice}</td>
            </tr>

            <tr>
              <td>Tax Rate:</td>
              <td>10%</td>
            </tr>

            <tr className="h-[50px]">
              <td>Estimated Tax:</td>
              <td>${(totalPrice * (0.1)).toFixed(2)}</td>
            </tr>

            <div className="bg-gray-400 h-0.5 " />

            <tr className="text-red-500 font-bold text-lg h-[50px]">
              <td>Order Total:</td>
              <td>${(totalPrice * 1.1).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div 
          onClick={() => setPayment('paypal')}
          className={`px-2 py-1 cursor-pointer border rounded-sm mr-2 ${payment === 'paypal' ? 'border-blue-400' : 'border-stone-300'} inline-block`}>
            <FontAwesomeIcon icon='fa-brands fa-paypal' className="text-blue-600" /> <span>Paypal</span>
          </div>
          <div 
          onClick={() => setPayment('card')}
          className={`px-2 py-1 cursor-pointer border rounded-sm mr-2 ${payment === 'card' ? 'border-blue-400' : 'border-stone-300'}  inline-block`}>
            <FontAwesomeIcon icon='fas fa-credit-card' className="text-red-400" /> <span>Card</span>
          </div>
        </div>
        <motion.button 
        whileTap={{
          scale: 0.95, 
          transition: {
            duration: 0.1, 
            ease: 'easeInOut',
          }
        }}
        className="bg-yellow-300 mt-2 cursor-pointer hover:opacity-70 hover:scale-105 
        transition-all  duratin-300 ease-in-out text-white py-2 rounded-lg w-full 
        font-bold">
          Purchase Now
        </motion.button>
      </motion.div>
    </div>
   </>
  )
}

export default Counter