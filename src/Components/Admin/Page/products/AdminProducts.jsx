import React from 'react'
import ProductQuery from './ProductQuery'
import { Outlet } from 'react-router-dom'

const AdminProudcts = () => {
  return (
    <div className='ml-52 w-full h-full'>
      <div className='w-full h-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminProudcts