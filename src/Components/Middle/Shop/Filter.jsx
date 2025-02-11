import { useState } from "react";
import CheckSection from "./CheckSection";
import ChoiceList from "./ChoiceList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

const ratings = [
  { label: '1 star', value: 'rating>=1'},
  { label: '2 star', value: 'rating>=2'},
  { label: '3 star', value: 'rating>=3'},
  { label: '4 star', value: 'rating>=4'},
  { label: '5 star', value: 'rating>=5'},
]
const discount = [
  {label: '10%', value: 'discount>=10'}, 
  {label: '20%+', value: 'discount>=20'},
  {label: '40%+', value: 'discount>=40'},
  {label: '50%+', value: 'discount>=50'},
]


const Filter = (prop) => {
  const {children} = prop; 
  const [isShow, setIsShow] = useState(false);
  const [sliderValue, setSliderValue] = useState(20);
  return (
    <div className="relative">
      <div className="hidden md:flex md:flex-col gap-4 pl-8">
        <div>
          <p>${sliderValue.toFixed(2)}</p>
          <input type="range" min='20' max='20000' value={sliderValue}
          onChange={(e) => setSliderValue(parseInt(e.target.value))}
          />
          <button className="border border-gray-400 cursor-pointer hover:bg-gray-200 px-2 rounded-3xl">Find</button>
        </div>
        <CheckSection title='Ratings'  options={ratings} filterType='numeric' />
        <CheckSection title='Discount' options={discount} filterType='numeric'/>
        <CheckSection title='Condition' filterType='numeric'  options={[{label:'new', value: 'condition=new'}, {label:'used', value: 'condition=used'}]} />
        {children}
      </div>

      <button 
      onClick={() => setIsShow(!isShow)}
      className="flex md:hidden gap-2 items-center my-4">
         <span>Filters</span>
         {isShow ? <FontAwesomeIcon icon='chevron-up' /> : <FontAwesomeIcon icon='chevron-down' />}
      </button>

      <AnimatePresence>
      {
        isShow && <motion.div
        initial={{y: 500}}
        animate={{y: 50}}
        transition={{
          duration: 0.8, 
          type: 'tween', 
          ease: 'easeInOut'
        }}
        exit={{y:500}}
        className="px-4 rounded-lg absolute bg-[#f3eded] py-2 h-[500px] w-[100vw] overflow-y-scroll scrollbar-hidden"
        >
        <div>
          <p>${sliderValue.toFixed(2)}</p>
          <input type="range" min='20' max='20000' value={sliderValue}
          onChange={(e) => setSliderValue(parseInt(e.target.value))}
          />
          <button className="border border-gray-400 cursor-pointer hover:bg-gray-200 px-2 rounded-3xl">Find</button>
        </div>
        <ChoiceList />
        <CheckSection title='Ratings'  options={ratings} filterType='numeric' />
        <CheckSection title='Discount'  options={discount} filterType='numeric' />
        <CheckSection title='Condition'   options={[{label:'new', value: 'condition=new'}, {label:'used', value: 'condition=used'}]} filterType='numeric' />
        {children}
      </motion.div>
      }
      </AnimatePresence>
    </div>
  )
}

export default Filter