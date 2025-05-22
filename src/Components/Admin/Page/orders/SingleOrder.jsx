import React from 'react'
import { Link } from 'react-router-dom'

const SingleOrder = () => {
  return (
    <div className='bg-white w-full h-full flex'>
        <div className='w-[40%] border-r border-r-gray-300 flex flex-col items-center py-2'>
            <h2>Item List</h2>
            <div className='w-full px-8 py-2 flex flex-col gap-4 carousel'>
                <div className='card w-[90%] rounded-lg shadow-[0px_0px_2px] carousel-item'>
                    <figure className='px-10 pt-10'>
                        <img
                        src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                        className='rounded-xl'
                        />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title w-full text-center'>Sound ProMax</h2>
                        <p>
                            <div className='text-sm text-gray-400'>Price</div>
                            <div className='font-semibold'>$399.99</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Quantity</div>
                            <div className='font-semibold'>3 items</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Variations</div>
                            <div className='font-semibold'>16GB RAM</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Description</div>
                            <div className='font-semibold'>Hias dfkja sdlfaio uklejr ioajsd fjas dl;fuaio ewjkas diful asdklf ;ajlds f;alsdfj asdf kljasdjl;f</div>
                        </p>
                    </div>
                </div>
                <div className='card w-[90%] rounded-lg shadow-[0px_0px_2px] carousel-item'>
                    <figure className='px-10 pt-10'>
                        <img
                        src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                        className='rounded-xl'
                        />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title w-full text-center'>Sound ProMax</h2>
                        <p>
                            <div className='text-sm text-gray-400'>Price</div>
                            <div className='font-semibold'>$399.99</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Quantity</div>
                            <div className='font-semibold'>3 items</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Variations</div>
                            <div className='font-semibold'>16GB RAM</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Description</div>
                            <div className='font-semibold'>Hias dfkja sdlfaio uklejr ioajsd fjas dl;fuaio ewjkas diful asdklf ;ajlds f;alsdfj asdf kljasdjl;f</div>
                        </p>
                    </div>
                </div>
                <div className='card w-[90%] rounded-lg shadow-[0px_0px_2px] carousel-item'>
                    <figure className='px-10 pt-10'>
                        <img
                        src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                        className='rounded-xl'
                        />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title w-full text-center'>Sound ProMax</h2>
                        <p>
                            <div className='text-sm text-gray-400'>Price</div>
                            <div className='font-semibold'>$399.99</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Quantity</div>
                            <div className='font-semibold'>3 items</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Variations</div>
                            <div className='font-semibold'>16GB RAM</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Description</div>
                            <div className='font-semibold'>Hias dfkja sdlfaio uklejr ioajsd fjas dl;fuaio ewjkas diful asdklf ;ajlds f;alsdfj asdf kljasdjl;f</div>
                        </p>
                    </div>
                </div>
                <div className='card w-[90%] rounded-lg shadow-[0px_0px_2px] carousel-item'>
                    <figure className='px-10 pt-10'>
                        <img
                        src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                        className='rounded-xl'
                        />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title w-full text-center'>Sound ProMax</h2>
                        <p>
                            <div className='text-sm text-gray-400'>Price</div>
                            <div className='font-semibold'>$399.99</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Quantity</div>
                            <div className='font-semibold'>3 items</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Variations</div>
                            <div className='font-semibold'>16GB RAM</div>
                        </p>
                        <p>
                            <div className='text-sm text-gray-400'>Description</div>
                            <div className='font-semibold'>Hias dfkja sdlfaio uklejr ioajsd fjas dl;fuaio ewjkas diful asdklf ;ajlds f;alsdfj asdf kljasdjl;f</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className=' px-4 flex flex-col overflow-y-scroll w-[60%]'>
            <div className='flex flex-col gap-2 py-4 w-full border-b border-b-gray-300'>
                <p>
                    <div className='text-gray-400 text-sm'>OrderId</div>
                    <div className='font-semibold'>832lkdsasdfaweir</div>
                </p>
                <p>
                    <div className='text-gray-400 text-sm'>User</div>
                    <div className='font-semibold'>Arthur Dane</div>
                </p>
                <p>
                    <div className='text-gray-400 text-sm'>Location</div>
                    <div className='font-semibold'>Myanmar/Shan/NyaungShwe</div>
                </p>
                <p>
                    <div className='text-gray-400 text-sm'>Date</div>
                    <div className='font-semibold'>{Date(Date.now()).toString()}</div>
                </p>
                <p>
                    <div className='text-gray-400 text-sm'>Delivery</div>
                    <div className='font-semibold text-error'>pending</div>
                </p>
                <div>
                    <button className='btn btn-error mr-2'>Delete</button>
                    <Link to='../' className='btn btn-neutral btn-soft'>Back</Link>
                </div>
            </div>

            <div className='px-2 py-2 w-[45%] flex flex-col gap-2'>
                <h2>Order Summary</h2>
                <div className='w-full flex justify-between'>
                    <div className='text-base text-gray-600'>Subtotal</div>
                    <div className='text-gray-400'>$5593</div>
                </div>

                <div className='w-full flex justify-between'>
                    <div className='text-base text-gray-500'>Discount</div>
                    <div className='text-gray-400'><b className='text-blue-400'>-</b>$92</div>
                </div>

                <div className='w-full flex justify-between'>
                    <div className='text-base text-gray-500'>Delivery</div>
                    <div className='text-gray-400'>$20</div>
                </div>

                <div className='w-full flex justify-between'>
                    <div className='text-base text-gray-500'>Tax</div>
                    <div className='text-gray-400'>[2%] <b className='text-red-400'>+</b> $25</div>
                </div>

                <div className='w-full flex justify-between'>
                    <div className='text-base font-semibold text-gray-700'>Total</div>
                    <div className='font-semibold text-red-400'>$4829</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SingleOrder