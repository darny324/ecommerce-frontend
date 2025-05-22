import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Orders = () => {
  return (
    <div className='ml-52 px-4 w-screen h-screen bg-gray-300 flex justify-center py-4'>
      <Outlet />
    </div>
  )
}

export default Orders