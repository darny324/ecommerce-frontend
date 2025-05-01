import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux"
import { changeOption, clearCart, decrementQuantity, incrementQuantity, removeFromCart } from "../../../redux/cart";
import DropDown from "../../Library/DropDown";
import { Link } from "react-router-dom";

const CartItem = (prop) => {
  const {item, variant} = prop; 
  const dispatch = useDispatch();
  const [isChange, setIsChange] = useState(false);


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
      <span
      className="
      p-2 rounded-lg border border-stone-300 flex items-center gap-2">
        <p className="w-30 overflow-hidden whitespace-nowrap text-ellipsis">
          {item.options[item.optionNum].label}
        </p>
        <button className="cursor-pointer  relative">
          <FontAwesomeIcon icon={'angle-down'} className="hover:text-gray-400"
          onClick={() => setIsChange(!isChange)}
          />
          {
            isChange && 
            <DropDown 
            className={'absolute top-7 -right-5'}
            onChange={(e) => {dispatch(changeOption(
              {productId:item.productId, optionNum:Number(e.target.value)}
            ))}}>
              {
                item.options.map((option, index) => {
                  return <div className="w-34 overflow-hidden text-ellipsis 
                  py-2 px-4 hover:bg-gray-300
                  whitespace-nowrap"
                  
                  onClick={() => {
                    dispatch(changeOption(
                      {
                        productId: item.productId, 
                        optionNum: index,
                      }
                    ))
                    setIsChange(false);
                  }}
                  >
                    {option.label}
                  </div>
                })
              }
            </DropDown>
          }
        </button>
        
      </span>
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

const CartItemMobile = ({item, dispatch}) => {
  const [isChange, setIsChange] = useState(false);
  return (
    <div className="px-4 py-4 flex flex-col gap-2 bg-white rounded-lg border border-gray-400">
      <div className="flex items-center">
        <img src={item.image} className="w-10 h-10 object-contain" />
        <span className="text-[#004f99] font-semibold line-clamp-1 text-ellipsis">{item.name}</span>
      </div>

      <div>
        <span className="">price: </span>
        <span>${item.price}</span>
      </div>

      <div>
        <span className="">quantity: </span>
        <button 
        onClick={() => {dispatch(decrementQuantity({productId:item.productId}))}}
        className="py-1 px-2 mr-1 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200">-</button>
        <span>{item.quantity}</span>
        <button 
        onClick={() => {dispatch(incrementQuantity({productId:item.productId}))}}
        className="py-1 px-2 ml-1 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200">+</button>
      </div>


      <div>
        <span>total: </span>
        <span>${item.price * item.quantity}</span>
      </div>

      <div className="flex items-center">
        <span>options: </span>
        <span
        className="
        w-34
        p-2 rounded-lg border border-stone-300 flex items-center gap-2">
          <p className="w-30 overflow-hidden whitespace-nowrap text-ellipsis">
            {item.options[item.optionNum].label}
          </p>
          <button className="cursor-pointer  relative">
            <FontAwesomeIcon icon={'angle-down'} className="hover:text-gray-400"
            onClick={() => setIsChange(!isChange)}
            />
            {
              isChange && 
              <DropDown 
              className={'absolute top-7 -right-5'}
              onChange={(e) => {dispatch(changeOption(
                {productId:item.productId, optionNum:Number(e.target.value)}
              ))}}>
                {
                  item.options.map((option, index) => {
                    return <div className="w-34 overflow-hidden text-ellipsis 
                    py-2 px-4 hover:bg-gray-300
                    whitespace-nowrap"
                    
                    onClick={() => {
                      dispatch(changeOption(
                        {
                          productId: item.productId, 
                          optionNum: index,
                        }
                      ))
                      setIsChange(false);
                    }}
                    >
                      {option.label}
                    </div>
                  })
                }
              </DropDown>
            }
          </button>
          
        </span>
      </div>
      <div className="">
        <button 
        onClick={() => dispatch(removeFromCart({productId:item.productId}))}
        className="px-2 py-1 text-white rounded-lg bg-red-500 hover:bg-red-400 hover:scale-110 transition-all duration-300 ease-in-out">
          delete
        </button>
      </div>
    </div>
  )
}

const Counter = () => {
  const {cart} = useSelector((store) => store.cart);
  const [payment, setPayment] = useState('paypal');
  const dispatch = useDispatch();
  
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

  const getTotals = () => {
    let totalItems = 0;
    let totalPrice = 0.0;
    console.log(cart);

    cart.map((item) => {
      totalItems += item.quantity; 
      totalPrice += (item.price * item.quantity);
    })
    
    return [totalItems, totalPrice];
  }

  let totalItems = 0;
  let totalPrice = 0.0;

  [totalItems, totalPrice] = getTotals();
  
  
  return (
   <>
   <h1 className="text-center my-12 text-xl md:text-2xl">Checkout({totalItems})</h1>
    <div className="flex flex-col px-6 md:flex-row justify-center mt-4 gap-4 text-sm md:text-base">
      <motion.div
      className="hidden md:block"
      variants={container}
      initial='hidden'
      animate='show' 
      >
        <table
        
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
        </table>
        
          <div className="w-full flex justify-between mt-4">
            <Link 
            to='/shop/products'
            className="px-4 py-2 rounded-lg cursor-pointer bg-purple-500
            hover:bg-purple-400 hover:scale-105 transition-all duration-300 ease-in-out
              text-white ">Continue Shopping</Link>
            <button 
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 ml-2 rounded-lg cursor-pointer bg-stone-200 hover:bg-stone-300 hover:scale-105 transition-all duration-300 ease-in-out font-semibold text-red-400 mr-8">Clear Cart</button>
          </div>
      </motion.div>

      <motion.div
      className="flex flex-col gap-4 md:hidden"
      variants={container}
      initial='hidden'
      animate='show' 
      >
        {
          cart.map((item) => {
            return <CartItemMobile item={item} dispatch={dispatch}/>
          })
        }
        <div className="w-40 gap-2 flex flex-col mt-4">
            <Link 
            to='/shop/products'
            className="px-4 py-2 rounded-lg cursor-pointer bg-purple-500
            hover:bg-purple-400 hover:scale-105 transition-all duration-300 ease-in-out
              text-white ">Continue Shopping</Link>
            <button 
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 rounded-lg cursor-pointer bg-stone-200 hover:bg-stone-300 hover:scale-105 transition-all duration-300 ease-in-out font-semibold text-red-400 mr-8">Clear Cart</button>
          </div>
      </motion.div>

      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, ease: 'easeInOut'}}
      className="px-4 py-4 mb-10 border border-gray-400 rounded-md md:h-[300px]">
        <h2 className="text-base md:text-2xl">Order Summary</h2>
        <table className="w-[280px]">
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

            <tr className="text-red-500 font-bold text-base h-[50px]">
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