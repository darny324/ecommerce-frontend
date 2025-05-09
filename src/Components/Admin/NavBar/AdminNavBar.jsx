import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom';

const adminNav = [
    {
        name: 'Dashboard', 
        icon: 'fa-solid fa-bars'
    }, 
    {
        name: "Products", 
        icon: "fa-solid fa-box-archive",
    }, 
    {
        name: "Orders", 
        icon: "fa-solid fa-dolly",
    }, 
    {
        name: "Customers", 
        icon: "fa-solid fa-users"
    }
]

const AdminNavBar = () => {
  return (
    <nav className='w-52 navbar flex-col justify-start bg-base-300 px-0 h-screen fixed'>
        <h2 className='my-5 text-success'>ShopSphere</h2>

        {
            adminNav.map((page) => {
                return <Link 
                to={page.name.toLowerCase()}
                className='
                py-4 cursor-pointer text-primary hover:bg-primary font-semibold hover:text-white w-full
                transition-colors duration-300 ease-in-out flex pl-8 items-center gap-2
                '>
                    <FontAwesomeIcon className='' icon={`${page.icon}`} />
                    <button className='cursor-pointer'>{page.name}</button>
                </Link>
            })
        }




    </nav>
  )
}

export default AdminNavBar