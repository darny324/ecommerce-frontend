import  "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import logoName from '../../assets/logo-name.png'

const items = ['Home', 'Shop', 'About' ,'Contact', 'Counter'];

const NavBar = () => {
  const {pathname} = useLocation();
  let path;
  if ( pathname.startsWith('/')) path = 'Home'; 
  if ( pathname.startsWith('/shop')) path = "Shop"; 
  if ( pathname.startsWith('/about')) path = "About";
  if ( pathname.startsWith('/contact')) path = "Contact";
  if ( pathname.startsWith('/counter')) path = 'Counter';
  const [selected, setSelected] = useState(path);
  const [clickMenu, setClickMenu] = useState(false);
  
  return (
    <nav className='flex shadow-[0px_5px_5px_rgba(0,0,0,0.25)] h-12 justify-between items-center px-4 sm:px-16 z-10 sticky top-0 bg-stone-100'>
      <Link to='/'>
        <img src={logoName} className="w-32"
        />
      </Link>
      <button className="sm:hidden cursor-pointer" onClick={() => setClickMenu(!clickMenu)}>
        <FontAwesomeIcon icon='bars' />
      </button>
      <motion.div className='hidden sm:flex gap-8 text-slate-600'
        
        >
        {
          items.map((item) => {
            
            let path = item.toLowerCase();
            if ( path === 'home') path = '';
            return (
              <Link key={item} to={path} onClick={() => setSelected(item)} className="relative">
                <motion.span whileHover={{
                  color: '#2199de', 
                }}>
                {
                  path === 'counter' ? 
                  <FontAwesomeIcon icon='shopping-bag' />
                  : item
                }
                </motion.span>
                <AnimatePresence>
                {
                  selected === item && 
                  <motion.div 
                  className="origin-center absolute h-0.5 bottom-0 left-0 right-0 bg-sky-600"
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
                
              </Link>
            )
          })
        }

        <Link to='sign-in' className="relative">
          <motion.span whileHover={{
            color: '#2199de', 
          }}>
          Sign In
          </motion.span>
        </Link>
      </motion.div>
      
      <AnimatePresence>
      {
        clickMenu &&
        <motion.div className={`flex flex-col absolute h-screen bg-stone-100 
          px-8 right-0 top-12 pt-2 items-center justify-start gap-4
          text-slate-600`}
          initial={{
            x: 150, 
          }}
          animate={{
            x: 0, 
          }}
          exit={{
            x: 150, 
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut'
          }}
          >
          {
            items.map((item) => {
              
              let path = item.toLowerCase();
              if ( path === 'home') path = '';
              return (
                <Link key={item} to={path} onClick={() => {setSelected(item); setClickMenu(false);}} className="relative">
                  <motion.span whileHover={{
                    color: '#2199de', 
                  }}>
                  {
                    path === 'counter' ? 
                    <FontAwesomeIcon icon='shopping-bag' />
                    : item
                  }
                  </motion.span>
                  <AnimatePresence>
                  {
                    selected === item && 
                    <motion.div 
                    className="origin-center absolute h-0.5 bottom-0 left-0 right-0 bg-sky-600"
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
                  
                </Link>
              )
            })
          }
          <Link to='sign-in' className="relative">
            <motion.span whileHover={{
              color: '#2199de', 
            }}>
            Sign In
            </motion.span>
          </Link>
        </motion.div>
      }
      </AnimatePresence>
    </nav>
  )
}

/**
 * 
 * npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
 */

export default NavBar
