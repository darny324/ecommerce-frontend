import React from 'react'
import DefaultUser from '../../../assets/default_user.avif'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../../redux/user'

const UserInfo = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((store) => store.user);
  return (
    <div className='flex justify-center my-28'>
        <div className='flex flex-col items-center'>
            <img src={DefaultUser} className='w-[200px] h-[200px] object-contain rounded-full'/>
            
        </div>
        <div className='py-4 grid grid-cols-3'>
            <div>
                <p className='text-sm text-gray-400'>Name</p>
                <p className='text-lg font-semibold'>{user.name}</p>
            </div>
            <div>
                <p className='text-sm text-gray-400'>Address</p>
                <p className='text-base font-semibold'>
                    {user.address.country}<br/>{user.address.state}<br/>{user.address.city} 
                </p>
            </div>
            
            <div>
                <p className='text-sm text-gray-400'>Email</p>
                <p className='text-lg font-semibold'>{user.email}</p>
            </div>
            <div className='flex items-center text-blue-600'>
                <Link to='edit'>Edit Info</Link>
            </div>
            <div 
            
            className='flex items-center text-blue-600'>
                <button 
                onClick={() => {
                    dispatch(logOut());
                }}
                className='btn btn-error btn-soft btn-sm'>Sign out</button>
            </div>
        </div>
    </div>
  )
}

export default UserInfo