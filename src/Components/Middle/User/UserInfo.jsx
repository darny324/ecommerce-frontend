import React from 'react'
import DefaultUser from '../../../assets/default_user.avif'
import { Link } from 'react-router-dom'

const UserInfo = () => {
  return (
    <div className='flex justify-center my-28'>
        <div className='flex flex-col items-center'>
            <img src={DefaultUser} className='w-[200px] h-[200px] object-contain rounded-full'/>
            
        </div>
        <div className='py-4 grid grid-cols-3'>
            <div>
                <p className='text-sm text-gray-400'>Name</p>
                <p className='text-lg font-semibold'>Johnantan</p>
            </div>
            <div>
                <p className='text-sm text-gray-400'>Address</p>
                <p className='text-base font-semibold'>Myanmar<br/>Shan State<br/>NyaungShwe </p>
            </div>
            
            <div>
                <p className='text-sm text-gray-400'>Email</p>
                <p className='text-lg font-semibold'>john@gmail.com</p>
            </div>
            <div>
                <p className='text-sm text-gray-400'>Phone No.</p>
                <p className='text-lg font-semibold'>09-792-380-380</p>
            </div>
            <div className='flex items-center text-blue-600'>
                <Link to='edit'>Edit Info</Link>
            </div>
        </div>
    </div>
  )
}

export default UserInfo