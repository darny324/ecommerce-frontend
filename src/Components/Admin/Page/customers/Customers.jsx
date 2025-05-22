import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Customers = () => {
  

  return (
    <div className='ml-52 px-4 py-4 w-full h-full bg-gray-300'>
      <Outlet />
    </div>
  )
}

export default Customers