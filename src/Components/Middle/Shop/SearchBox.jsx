import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const ChoiceList = (prop) => {
  const {choice, changeChoice} = prop;
  const [isShow, setIsShow] = useState(false);

  return (
    <div  className="relative">
      <button  onClick={() => setIsShow(!isShow)} 
      className="cursor-pointer bg-gray-200 text-sm rounded-bl-lg rounded-tl-lg
      px-3 py-3">
        <span>{choice}
        <FontAwesomeIcon icon='chevron-down'/>  
        </span> 
      </button>
      {
        isShow && <div className="
        absolute bg-gray-300 flex flex-col 
        ">
        <p className="hover:bg-gray-500 cursor-pointer py-2 px-2" onClick={() => {changeChoice('All'); setIsShow(false)}}>All</p>
        <p className="hover:bg-gray-500 cursor-pointer py-2 px-2" onClick={() => {changeChoice('Electronics'); setIsShow(false)}}>Electronics</p>
        <p className="hover:bg-gray-500 cursor-pointer py-2 px-2" onClick={() => {changeChoice('Clothes'); setIsShow(false)}}>Clothes</p>
        <p className="hover:bg-gray-500 cursor-pointer py-2 px-2" onClick={() => {changeChoice('Sports'); setIsShow(false)}}>Sports</p>
        <p className="hover:bg-gray-500 cursor-pointer py-2 px-2" onClick={() => {changeChoice('Books and Stationery'); setIsShow(false)}}>Books and Stationery</p>
      </div>
      }
    </div>
  )
}

const SearchBox = () => {
  const [choice, setChoice] = useState('All');
  const [input, setInput] = useState("");
  return (
    <div className="flex justify-center mt-8">
      <div className="flex w-[50%] items-center">
      <ChoiceList choice={choice} changeChoice={setChoice} />
      <input 
      type="text" 
      value={input} 
      onChange={(e) => setInput(e.target.value)} 
      className="bg-stone-300 text-lg focus:outline-amber-300 flex-[1]
      px-4 py-2
      " />
      <button className=" rounded-br-lg rounded-tr-lg bg-amber-400
      px-4 py-[10px] cursor-pointer hover:bg-amber-300">
        <FontAwesomeIcon icon='search'/>
      </button>
    </div>
    </div>
  )
}

export default SearchBox