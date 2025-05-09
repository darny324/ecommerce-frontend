import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PieChart from '../../../Library/PieChart'

const items = [
    {
        color: 'red', 
        name: 'Laptops & Computers',
        percentage: 0.15, 
    }, 
    {
        name: "Smartphones & Tablets", 
        color: 'blue', 
        percentage: 0.1, 
    }, 
    {
        name: "TVs & Home Entertainment", 
        color: 'black', 
        percentage: 0.25, 
    }, 
    {
        name: "Wearable Technology", 
        color: 'green', 
        percentage: 0.35, 
    }, 
    {
        name: "Home Appliances", 
        color: "magenta", 
        percentage: 0.15,
    }
]

const Dashboard = () => {
  return (
    <section className='bg-stone-300 w-full ml-52'>
        <div className='h-28 w-full bg-white flex items-center px-10'>
            <div>
                <h2>Welcome, Khant Sin Kyal</h2>
                <p className='text-gray-400'>Here are today's stats for your online store</p>
            </div>
        </div>


        <div className='px-4 py-4 flex  gap-4'>
            <div className='card bg-base-100 w-80 h-40'>
                <div className='card-body'>
                    <div className='flex gap-4 items-center'>
                        <span className='w-12 h-12 text-xl flex justify-center items-center rounded-2xl bg-gray-300'>
                          <FontAwesomeIcon icon='fa-solid fa-shopping-bag' />
                        </span>

                        <div>
                            <p className='text-xl font-semibold'>Total Sales</p>
                            <p className='text-gray-500'>30 orders</p>
                        </div>
                    </div>

                    <div className='text-xl font-semibold'>$9392.48</div>
                    <div className='flex justify-between'>
                        <span className='font-semibold'>+15.6% </span>
                        <span><b>+1.4k</b> this week</span>
                    </div>
                </div>
            </div>

            <div className='card bg-base-100 w-80 h-40'>
                <div className='card-body'>
                    <div className='flex gap-4 items-center'>
                        <span className='w-12 h-12 text-xl flex justify-center items-center rounded-2xl bg-gray-300'>
                          <FontAwesomeIcon icon='fa-solid fa-user' />
                        </span>

                        <div>
                            <p className='text-xl font-semibold'>Visitors</p>
                        </div>
                    </div>

                    <div className='text-xl font-semibold'>893</div>
                    <div className='flex justify-between'>
                        <span className='font-semibold'>+15.6% </span>
                        <span><b>+1.4k</b> this week</span>
                    </div>
                </div>
            </div>
            
            <div className='card bg-base-100 w-72 h-104 p-4'>
                <div className='card-title'>Top Categories</div>
                <div className='flex justify-center mt-6'>
                    <PieChart radius={50} strokeWidth={6} items={items} rounded={true} gap={8}/>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    {
                        items.map((item) => {
                            return <div className='flex items-center gap-2'>
                                <div style={{
                                    width: '24px', 
                                    height: '24px', 
                                    backgroundColor: item.color,
                                    display: 'inline-block'
                                }}/>
                                <div className='tooltip tooltip-right tooltip-info'>
                                    <div className='tooltip-content'>{item.percentage * 100}%</div>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        })
                    }
                </div>


            </div>
        </div>

    </section>
  )
}

export default Dashboard