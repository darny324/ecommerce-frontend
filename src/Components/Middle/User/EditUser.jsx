import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const EditUser = () => {
    const [user, setUser] = useState({});
  return (
    <div className='flex justify-center py-8'>
        <div className='w-[400px] flex flex-col gap-2 shadow-[0px_0px_3px_0px] px-12 py-2 rounded-lg'>
            <div className=''>
                <label className='font-semibold block px-2'>Name</label>
                <input value={user.name ? user.name : ''} className='border w-[300px] border-gray-400 outline-none px-2 py-2 rounded-box' placeholder='e.g., John' />
            </div>
            <div className=''>
                <label className='font-semibold block px-2'>Email</label>
                <input value={user.email ? user.email : ''} className='border w-[300px] border-gray-400 outline-none px-2 py-2 rounded-box' placeholder='e.g., example@gmai.com' />
            </div>
            
            <div className=''>
                <label className='font-semibold block px-2'>Phone No.</label>
                <input value={user.name ? user.name : ''} className='border w-[300px] border-gray-400 outline-none px-2 py-2 rounded-box' placeholder='e.g., 09-xxx-xxx-xxx' />
            </div>

            <div className='flex flex-col gap-2'>
                <label className='font-semibold block px-2'>Address</label>
                <input value={user.name ? user.name : ''} className='border w-[300px] border-gray-400 outline-none px-2 py-2 rounded-box' placeholder='Country' />
                <input value={user.name ? user.name : ''} className='border w-[300px] border-gray-400 outline-none px-2 py-2 rounded-box' placeholder='State' />
                <input value={user.name ? user.name : ''} className='border w-[300px] border-gray-400 outline-none px-2 py-2 rounded-box' placeholder='City/Town' />
            </div>

            <div className='w-full'>
                    <button className='btn btn-neutral mr-2'>
                        Edit 
                    </button>
                    <Link className='btn btn-neutral btn-soft'>
                        Back
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default EditUser