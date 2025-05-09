import React from 'react'
import AdminNavBar from '../NavBar/AdminNavBar'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className=' h-screen flex'>
      <AdminNavBar />
      <Outlet />
    </div>
  )
}

export default MainPage