import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CustomerList = () => {
  const [sort, setSort] = useState('Default');
  const [showSort, setShowSort] = useState(false);

  const changeSorting = (str) => {
    setSort(str);
    setShowSort(false);
  }
  return (
    <div className='w-full h-full px-4 py-4 bg-white'>
        <h2>Customers</h2>
        <div className='mt-4 mx-4 p-4 rounded-lg shadow-[0px_0px_5px_0px] h-[500px] overflow-y-scroll'>
          <div className='flex justify-between'>
            <div className='bg-gray-200 rounded-full py-2 w-[400px] flex items-center px-4 gap-2'>
              <FontAwesomeIcon icon='fa-solid fa-search' className='text-gray-400' />
              <input className='w-[350px] outline-none text-gray-600' />
            </div>
            <div className='relative'>
              <button onClick={() => {setShowSort(!showSort)}} className='btn btn-neutral btn-soft'>
                {sort} <FontAwesomeIcon icon='fa-solid fa-sort' />
              </button>
              {
                showSort && 
                <ul className='menu absolute top-10 left-0 bg-base-100 p-2 shadow-sm w-[150px]'>
                  <li onClick={() => {changeSorting('Default');}}>
                    <a>Default</a>
                  </li>
                  <li onClick={() => {changeSorting('Latest');}}>
                    <a >Latest</a>
                  </li>
                  <li onClick={() => {changeSorting('Orders Count');}}> 
                    <a >Orders Count</a>
                  </li>
                  <li onClick={() => {changeSorting('Name');}}>
                    <a >Name</a>
                  </li>
                  <li onClick={() => {changeSorting('Email');}}>
                    <a >Email</a>
                  </li>
                </ul>
              }
            </div>
          </div>

          <table className=' table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Orders Count</th>
              </tr>
            </thead>
            <tbody className=''>
              <tr className='table-row font-semibold'> 
                <td>Johnathan</td>
                <td>john@gmail.com</td>
                <td>09792380380</td>
                <td>4</td>
                <td>
                  <Link to='123' className='btn btn-neutral btn-soft btn-sm'>Details</Link>
                </td>
              </tr>
              <tr className='table-row font-semibold'> 
                <td>Johnathan</td>
                <td>john@gmail.com</td>
                <td>09792380380</td>
                <td>4</td>
                <td>
                  <Link className='btn btn-neutral btn-soft btn-sm'>Details</Link>
                </td>
              </tr>
              <tr className='table-row font-semibold'> 
                <td>Johnathan</td>
                <td>john@gmail.com</td>
                <td>09792380380</td>
                <td>4</td>
                <td>
                  <Link className='btn btn-neutral btn-soft btn-sm'>Details</Link>
                </td>
              </tr>
              <tr className='table-row font-semibold'> 
                <td>Johnathan</td>
                <td>john@gmail.com</td>
                <td>09792380380</td>
                <td>4</td>
                <td>
                  <Link className='btn btn-neutral btn-soft btn-sm'>Details</Link>
                </td>
              </tr>
              <tr className='table-row font-semibold'> 
                <td>Johnathan</td>
                <td>john@gmail.com</td>
                <td>09792380380</td>
                <td>4</td>
                <td>
                  <Link className='btn btn-neutral btn-soft btn-sm'>Details</Link>
                </td>
              </tr>
              <tr className='table-row font-semibold'> 
                <td>Johnathan</td>
                <td>john@gmail.com</td>
                <td>09792380380</td>
                <td>4</td>
                <td>
                  <Link className='btn btn-neutral btn-soft btn-sm'>Details</Link>
                </td>
              </tr>
              <tr className='table-row font-semibold'> 
                <td>Johnathan</td>
                <td>john@gmail.com</td>
                <td>09792380380</td>
                <td>4</td>
                <td>
                  <Link className='btn btn-neutral btn-soft btn-sm'>Details</Link>
                </td>
              </tr>
              <tr className='table-row font-semibold'> 
                <td>Johnathan</td>
                <td>john@gmail.com</td>
                <td>09792380380</td>
                <td>4</td>
                <td>
                  <Link className='btn btn-neutral btn-soft btn-sm'>Details</Link>
                </td>
              </tr>
              <tr className='table-row font-semibold'> 
                <td>Johnathan</td>
                <td>john@gmail.com</td>
                <td>09792380380</td>
                <td>4</td>
                <td>
                  <Link className='btn btn-neutral btn-soft btn-sm'>Details</Link>
                </td>
              </tr>
              <tr className='table-row font-semibold'> 
                <td>Johnathan</td>
                <td>john@gmail.com</td>
                <td>09792380380</td>
                <td>4</td>
                <td>
                  <Link className='btn btn-neutral btn-soft btn-sm'>Details</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default CustomerList