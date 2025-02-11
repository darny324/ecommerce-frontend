import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const ChoiceList = () => {
  const [isShow, setIsShow] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const param = Object.fromEntries(searchParams);
  let str = searchParams.get('type') ? captalizeFirst(searchParams.get('type')) : 'All';
  str = str.split('-').join(' ');
  
  function captalizeFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  const changeType = (type) => {
    setSearchParams({...param, type: type});
    setIsShow(false);
    window.location.reload();
  }

  return (
    <div  className="relative">
      <button  onClick={() => setIsShow(!isShow)} 
      className="cursor-pointer bg-gray-200 text-sm md:rounded-l-lg
      px-3  h-11 rounded-r-lg md:rounded-r-none">
        <span className="mr-2">{str}</span> 
        <FontAwesomeIcon icon='chevron-down'/>  
      </button>
      {
        isShow && <div className="
        absolute bg-gray-300 flex flex-col 
        ">
        <button onClick={() => changeType('all')} className="hover:bg-gray-500 cursor-pointer py-2 px-2" >All</button>
        <button onClick={() => changeType('electronics')} className="hover:bg-gray-500 cursor-pointer py-2 px-2" >Electronics</button>
        <button onClick={() => changeType('clothes')} className="hover:bg-gray-500 cursor-pointer py-2 px-2" >Clothes</button>
        <button onClick={() => changeType('sports')} className="hover:bg-gray-500 cursor-pointer py-2 px-2" >Sports</button>
        <button onClick={() => changeType('books-and-Stationery')} className="hover:bg-gray-500 cursor-pointer py-2 px-2">Books and Stationery</button>
      </div>
      }
      
    </div>
  )
}

export default ChoiceList