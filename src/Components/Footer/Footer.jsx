import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"

const Footer = () => {
  const {isLoggedIn} = useSelector((store) => store.user);
  return (
    <div className="mt-4">
      <div 
      className="h-56 sm:h-40 md:h-32 bg-[#000053] gap-6 flex md:flex-row flex-col md:justify-between justify-center text-center items-center px-24">
        <div>
          <p className="font-bold text-xl text-white">Sign up for ShopSphere</p>
          <p className="text-gray-400">Get email about our latest shops and <span className="text-yellow-400">special offers</span></p>
        </div>
        {
          !isLoggedIn && 
          <motion.button >
          <Link to='/sign-up' className="
        text-white text-lg border border-s-gray-100 hover:bg-blue-500 hover:border-none transition-colors duration-1000 ease-in-out px-4 py-2 rounded-lg">
          Sign Up
          </Link>
        </motion.button>
        }
      </div>

      <div className="md:flex md:flex-wrap px-20 justify-around text-gray-400 my-12">
        <div>
          <h2 className="text-black">Contact</h2>
          <p>Addresses:Southern Shan State, Myanmar</p>
          <p>+959 977 617 226</p>
          <p>Hours: 6:00 to 18:00 </p>
        </div>
        <div>
          <h2 className='text-black'>About</h2>
          <p><Link className="hover:text-gray-600">About us</Link></p>
          <p><Link className="hover:text-gray-600">Delivery Information</Link></p>
          <p><Link className="hover:text-gray-600">Privacy Policy</Link></p>
          <p><Link className="hover:text-gray-600">Contact us</Link></p>
          <p><Link className="hover:text-gray-600">Terms and Conditions</Link></p>
        </div>
        <div>
          <h2 className='text-black'>My Account</h2>
          <p><Link className="hover:text-gray-600">Sign in</Link></p>
          <p><Link className="hover:text-gray-600">My Wishlists</Link></p>
          <p><Link className="hover:text-gray-600">Track my order</Link></p>
          <p><Link className="hover:text-gray-600">Help</Link></p>
        </div>
        <div>
          <h2 className='text-black'>Follow us</h2>
          <div className="flex gap-4">
            <FontAwesomeIcon className="hover:text-gray-600 cursor-pointer" icon='fa-brands fa-facebook' />
            <FontAwesomeIcon className="hover:text-gray-600 cursor-pointer" icon='fa-brands fa-twitter' />
            <FontAwesomeIcon className="hover:text-gray-600 cursor-pointer" icon='fa-brands fa-instagram' />
            <FontAwesomeIcon className="hover:text-gray-600 cursor-pointer" icon='fa-brands fa-telegram'/>
            <FontAwesomeIcon className="hover:text-gray-600 cursor-pointer" icon='fa-brands fa-youtube'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer