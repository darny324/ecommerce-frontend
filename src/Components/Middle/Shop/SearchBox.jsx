import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import ChoiceList from "./ChoiceList";



const SearchBox = () => {
  const [input, setInput] = useState("");
  
  
  return (
    <div className="flex justify-center  mt-8">
      <div className="flex md:w-[50%] items-center">
        <span className="hidden md:block"><ChoiceList /></span>
        <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        className="bg-stone-300 text-lg focus:outline-amber-300 flex-[1]
        px-4 py-2 rounded-bl-lg rounded-tl-lg md:rounded-none
        " />
        <button className=" rounded-br-lg rounded-tr-lg bg-amber-400
        px-4 h-11 cursor-pointer hover:bg-amber-300">
          <FontAwesomeIcon icon='search'/>
        </button>
      </div>
    </div>
  )
}

export default SearchBox