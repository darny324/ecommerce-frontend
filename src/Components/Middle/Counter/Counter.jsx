import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import {  useDispatch, useSelector } from "react-redux"
import { changeOption, decrementQuantity, incrementQuantity, removeFromCart } from "../../../redux/cart";

const CartItem = (prop) => {
  const {item, variant} = prop; 
  const dispatch = useDispatch();
  return <motion.tr 
  variants={variant}
  className="px-4 mt-4 gap-4 py-4 grid items-center grid-cols-[repeat(6,minmax(100px,130px))] rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
    <td className="flex items-center">
      <img src={item.image} className="w-10 h-10 object-contain" />
      <span className="text-[#004f99] font-semibold line-clamp-1 text-ellipsis">{item.name}</span>
    </td>

    <td>
      <span>${item.price}</span>
    </td>

    <td>
      <button 
      onClick={() => {dispatch(decrementQuantity({productId:item.productId}))}}
      className="py-1 px-2 mr-1 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200">-</button>
      <span>{item.quantity}</span>
      <button 
      onClick={() => {dispatch(incrementQuantity({productId:item.productId}))}}
      className="py-1 px-2 ml-1 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200">+</button>
    </td>

    <td>
      <span>${item.price * item.quantity}</span>
    </td>

    <td>
      <select 
      onChange={(e) => {dispatch(changeOption({productId:item.productId, optionNum:Number(e.target.value)}))}}
      className="w-28 line-clamp-1 text-ellipsis p-2 rounded-lg border border-stone-300">
        {
          item.options.map((option, index) => {
            return <option
            value={index}
            >
              {option.label}
            </option>
          })
        }
      </select>
    </td>
    <td className="text-center">
      <button 
      onClick={() => dispatch(removeFromCart({productId:item.productId}))}
      className="text-red-400 cursor-pointer hover:text-red-500 hover:scale-110 transition-all duration-300 ease-in-out">
        <FontAwesomeIcon icon={'trash'}/>
      </button>
    </td>
    
    
  </motion.tr>
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
      <motion.table
      variants={container}
      initial='hidden'
      animate='show' 
      className="flex flex-col gap-4 text-sm mr-8">
      {
        cart?.length > 0 && 
        <thead>
          <tr className="grid grid-cols-[repeat(6,minmax(100px,130fr))]">
            <th className=" text-left ">Product</th>
            <th className=" text-left">Price</th>
            <th className=" text-left">Quantity</th>
            <th className=" text-left">Total</th>
            <th className=" text-left">Options</th>
            <th className=" text-left"></th>
          </tr>
        </thead>
      }
      <tbody>
      {
        cart.map((item) => <CartItem variant={itemVariant} key={item.id+"+cartitem+" + item.name} item={item} />)
      }
      </tbody>
      </motion.table>

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

            <tr>
            <td className="bg-gray-400 h-0.5 "> </td>
            </tr>

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