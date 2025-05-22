import React from 'react'
import { Link } from 'react-router-dom'

const SingleCustomer = () => {
  return (
    <div className='w-full h-full bg-white rounded-md'>
        <div className='h-[40%] border-b border-b-gray-300'>
            <div className='px-8 py-4 grid grid-cols-3'>
                <div>
                    <p className='text-gray-400'>Name</p>
                    <p className='font-semibold'>Johnantan</p>
                </div>
                <div>
                    <p className='text-gray-400'>Email</p>
                    <p className='font-semibold'>John@gmail.com</p>
                </div>
                <div>
                    <p className='text-gray-400'>Address</p>
                    <p className='font-semibold'>
                        Myanmar <br/> Shan State <br/> Nyaung Shwe
                    </p>
                </div>
                <div>
                    <p className='text-gray-400'>Phone No.</p>
                    <p className='font-semibold'>09-792-380-380</p>
                </div>
                <div>
                    <p className='text-gray-400'>Orders Count</p>
                    <p className='font-semibold'>4</p>
                </div>
            </div>
            <div className='px-8'>
                <Link to='../' className='btn btn-neutral'>Back</Link>
            </div>
        </div>
        <div className='h-[60%]'>
            <div className='px-4 py-4 h-[95%] overflow-y-scroll'>
                <h2>Orders</h2>
                <div className='flex mt-2 flex-wrap gap-4'>
                    <div className='w-[300px] h-[150px] grid grid-cols-2 text-sm p-2 rounded-md shadow-[0px_0px_5px_0px]'>
                        <div>
                            <p className='text-gray-400 text-xs'>OrderId</p>
                            <p className='font-semibold'>38sdklfauus392</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Items</p>
                            <p className='font-semibold'>8 items</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Price</p>
                            <p className='font-semibold text-red-400'>$8192.99</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Date</p>
                            <p className='font-semibold'>{Date(Date.now()).toString()}</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[150px] grid grid-cols-2 text-sm p-2 rounded-md shadow-[0px_0px_5px_0px]'>
                        <div>
                            <p className='text-gray-400 text-xs'>OrderId</p>
                            <p className='font-semibold'>38sdklfauus392</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Items</p>
                            <p className='font-semibold'>8 items</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Price</p>
                            <p className='font-semibold text-red-400'>$8192.99</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Date</p>
                            <p className='font-semibold'>{Date(Date.now()).toString()}</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[150px] grid grid-cols-2 text-sm p-2 rounded-md shadow-[0px_0px_5px_0px]'>
                        <div>
                            <p className='text-gray-400 text-xs'>OrderId</p>
                            <p className='font-semibold'>38sdklfauus392</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Items</p>
                            <p className='font-semibold'>8 items</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Price</p>
                            <p className='font-semibold text-red-400'>$8192.99</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Date</p>
                            <p className='font-semibold'>{Date(Date.now()).toString()}</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[150px] grid grid-cols-2 text-sm p-2 rounded-md shadow-[0px_0px_5px_0px]'>
                        <div>
                            <p className='text-gray-400 text-xs'>OrderId</p>
                            <p className='font-semibold'>38sdklfauus392</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Items</p>
                            <p className='font-semibold'>8 items</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Price</p>
                            <p className='font-semibold text-red-400'>$8192.99</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Date</p>
                            <p className='font-semibold'>{Date(Date.now()).toString()}</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[150px] grid grid-cols-2 text-sm p-2 rounded-md shadow-[0px_0px_5px_0px]'>
                        <div>
                            <p className='text-gray-400 text-xs'>OrderId</p>
                            <p className='font-semibold'>38sdklfauus392</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Items</p>
                            <p className='font-semibold'>8 items</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Price</p>
                            <p className='font-semibold text-red-400'>$8192.99</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Date</p>
                            <p className='font-semibold'>{Date(Date.now()).toString()}</p>
                        </div>
                    </div>


                    <div className='w-[300px] h-[150px] grid grid-cols-2 text-sm p-2 rounded-md shadow-[0px_0px_5px_0px]'>
                        <div>
                            <p className='text-gray-400 text-xs'>OrderId</p>
                            <p className='font-semibold'>38sdklfauus392</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Items</p>
                            <p className='font-semibold'>8 items</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Price</p>
                            <p className='font-semibold text-red-400'>$8192.99</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Date</p>
                            <p className='font-semibold'>{Date(Date.now()).toString()}</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[150px] grid grid-cols-2 text-sm p-2 rounded-md shadow-[0px_0px_5px_0px]'>
                        <div>
                            <p className='text-gray-400 text-xs'>OrderId</p>
                            <p className='font-semibold'>38sdklfauus392</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Items</p>
                            <p className='font-semibold'>8 items</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Total Price</p>
                            <p className='font-semibold text-red-400'>$8192.99</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>Date</p>
                            <p className='font-semibold'>{Date(Date.now()).toString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleCustomer