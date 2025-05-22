import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { products } from '../../../../../test_products';
import { Link } from 'react-router-dom';


const categories = [
    "Category", 
    "Desktops & Laptops", 
    "Smartphones & Tablets", 
    "Televisions & Monitors", 
    "Audio Devices", 
    "Wearable Tech",
];

const sort = [
    "default", "latest", "trending", "highest rated", "most bought",
]

const ProductQuery = () => {
    
    const [showCat, setShowCat] = useState(false);
    const category = useRef(categories[0]);

    const sorting = useRef(sort[0]);
    
    const [showSort, setShowSort] = useState(false);
  return (
    <div className='bg-gray-300 py-4 h-full w-full flex flex-col'>
        

        <div className='px-12 flex justify-between'>
            <h1>Products Grid</h1>
            <Link
            to='create'
            className='btn btn-primary rounded-field flex items-center'>
                <FontAwesomeIcon icon='fa-solid fa-plus-circle' />
                <span>Create New Product</span>
                
            </Link>
        </div>

        <div className='flex-1 bg-white mx-8 rounded-field'>
            <div className='px-4 py-2 flex justify-between border-b border-b-gray-300'>
                <input className='input input-gray-300 rounded-box w- focus:outline-none  outline-none' placeholder='Search' />
                
                <div className='flex gap-4'>
                    <div className='relative'>
                        <button className='btn btn-neutral btn-soft'
                        onClick={() => {
                            setShowCat(!showCat);
                        }}
                        >
                            <div className='w-28 text-ellipsis overflow-hidden whitespace-nowrap'>{category.current}</div>
                            <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
                        </button>

                        {
                            showCat ? 
                            <div className='absolute bg-white z-1 shadow-sm menu p-2 -left-5 rounded-md'>
                                
                                {
                                    categories.map((c) => {
                                        return <div className='p-2 hover:bg-gray-300 rounded-field cursor-pointer'
                                        onClick={() => {
                                            category.current = c;
                                            setShowCat(false);
                                        }}
                                        >{c}</div>
            
                                    })
                                }

                            </div>
                        : <></>
                        }
                    </div>

                    <div className='relative '>
                        <button className='btn btn-neutral btn-soft'
                        onClick={() => {
                            setShowSort(!showSort);
                        }}
                        >
                            <div className='w-24 text-ellipsis overflow-hidden whitespace-nowrap'>{sorting.current}</div>
                            <FontAwesomeIcon icon='fa-solid fa-sort' />
                        </button>

                        {
                            showSort ? 
                            <div className='absolute bg-white z-1 shadow-sm menu p-2 -left-5 rounded-md'>
                                
                                {
                                    sort.map((c) => {
                                        return <div className='p-2 hover:bg-gray-300 rounded-field cursor-pointer'
                                        onClick={() => {
                                            sorting.current = c;
                                            setShowSort(false);
                                        }}
                                        >{c}</div>
            
                                    })
                                }

                            </div>
                        : <></>
                        }
                    </div>
                </div>
            </div>



            <div className='px-4 py-4 grid grid-cols-4 h-[450px] gap-4 overflow-scroll'>
                <div className='card border border-base-300 w-50 h-[250px] shadow-sm '>
                    <figure className='h-[180px]'>
                        <img 
                        className=' h-[180px]'
                        src='https://www.footprintseducation.in/blog/wp-content/uploads/2024/02/Preschooler-using-Computer-1024x624.jpg'
                        />
                    </figure>
                    <div className='card-body gap-1 px-4 '>
                        <p className='font-semibold'>Acer 9382</p>
                        <div className='font-semibold text-red-400'>$832</div>
                        <div className='w-full flex justify-between'>
                            <button className='btn btn-accent btn-sm'>
                                <FontAwesomeIcon icon='fa-solid fa-edit' />
                                <span>Edit</span>
                            </button>
                            <button className='btn btn-error btn-sm'>
                                <FontAwesomeIcon icon='fa-solid fa-trash' />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
                {
                    products.map((product) => {
                        return <div 
                        key={product._id + "+products"}
                        className='card border border-base-300 w-50 h-[250px] shadow-sm '>
                            <figure className=''>
                                <img 
                                className='h-[180px] object-contain'
                                src={product.images[product.main_image_option]}
                                />
                            </figure>
                            <div className='card-body gap-1 px-4 '>
                                <p className='font-semibold w-28 whitespace-nowrap overflow-hidden text-ellipsis'>{product.name}</p>
                                <div className='font-semibold text-red-400'>${product.price}</div>
                                <div className='w-full flex justify-between'>
                                    <Link 
                                    to={`edit/${product._id}`}
                                    className='btn btn-accent btn-sm'>
                                        <FontAwesomeIcon icon='fa-solid fa-edit' />
                                        <span>Edit</span>
                                    </Link>
                                    <button className='btn btn-error btn-sm'>
                                        <FontAwesomeIcon icon='fa-solid fa-trash' />
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ProductQuery