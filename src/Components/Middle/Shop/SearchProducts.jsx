import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import {  useSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import { motion } from "framer-motion";
import { products } from "../../../../test_products";


const Pagination = (prop) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1; 
  const param = Object.fromEntries(searchParams);
  const {totalPages} = prop;
  const pages = [];
  if ( totalPages <= 5 ) {
    for ( let i = 1; i <= 5; i++ )pages.push(i);
  } else {
    
    if ( currentPage < 3 ) {
      pages.push(1);
      pages.push(2);
      pages.push(3); 
      pages.push('...');
      pages.push(totalPages);
    } else if ( currentPage < (totalPages - 2)){
      pages.push(1);
      pages.push('...');
      pages.push(currentPage-1);
      pages.push(currentPage);
      pages.push(currentPage+1);
      pages.push('...');
      pages.push(totalPages);
    } else {
      pages.push(1);
      pages.push('...');
      pages.push(totalPages-2);
      pages.push(totalPages-1);
      pages.push(totalPages);
    }
  
  }

  const changePage = (pageNum) => {
    setSearchParams({...param, page: pageNum});
    window.location.reload();
  }
  

  return (
    <div className="flex gap-1 md:gap-4 mt-6 items-center justify-center">
      <button onClick={() => changePage(currentPage - 1)} className="cursor-pointer hover:bg-gray-200 w-7 h-7 rounded-full flex justify-center items-center">
        <FontAwesomeIcon icon='chevron-left' />
      </button>
      {
        pages.map((p, i) => {
          return (
            <Fragment key={i + "+pagination"}>
            {
              p === '...' ? 
              <p>{p}</p>
              : <button onClick={() => changePage(p)} className={
                `${currentPage === p ? 'bg-gray-300' : ''} w-7 h-7 flex justify-center cursor-pointer items-center rounded-full hover:bg-gray-200 `
              }><span>{p}</span></button>
            }
            </Fragment>
          )
        })
      }
      <button onClick={() => changePage(currentPage + 1)} className="hover:bg-gray-200 cursor-pointer w-7 h-7 rounded-full flex justify-center items-center">
        <FontAwesomeIcon icon='chevron-right' />
      </button>
    </div>
  )
}



const SearchProducts = () => {
  
  const totlaPages = 23; 

  const container = {
    hidden: {
      opacity: 0, 
    }, 
    show: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.2, 
        duration: 1, 
      }
    }, 
    
  }
  const itemVariant = {
    hidden: {
      y: 40, 
      opacity: 0, 
    }, 
    show: {
      y: 0, 
      opacity: 1, 
      transition: {
        duration: 0.5,
      }
    }
  }
  
  return (
    <div>
      <motion.div 
      variants={container}
      initial='hidden' 
      animate='show'
      className="flex flex-col gap-6 md:ml-8 mt-4">
      {
        products.map(p => <SearchCard key={p.name + '+searchcard'} itemVariant={itemVariant} product={p} />)
      }
      </motion.div>
      <Pagination totalPages={totlaPages} />
    </div>
  )
}

export default SearchProducts