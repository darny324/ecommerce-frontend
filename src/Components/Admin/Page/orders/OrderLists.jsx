import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const OrderLists = () => {
  return (
    <div className='h-full bg-white'>
        <table className='table table-sm'>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Products</th>
              <th>Total Items</th>
              <th>Total Price</th>
              <th>Payment Method</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3839fakloeioidklafj2</td>
              <td>
                <details className="dropdown">
                  <summary className="btn btn-sm m-1">List <FontAwesomeIcon icon="fa-solid fa-chevron-down" /></summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </details>
              </td>
              <td>8</td>
              <td>$48.99</td>
              <td>Card</td>
              <td>
                <button className='btn btn-sm btn-error btn-soft'>Delete</button>
              </td>
              <td>
                <Link to='123' className='btn btn-neutral btn-soft btn-sm'>Details</Link>
              </td>
            </tr>
            <tr>
              <td>3839fakloeioidklafj2</td>
              <td>
                <details className="dropdown">
                  <summary className="btn btn-sm m-1">List <FontAwesomeIcon icon="fa-solid fa-chevron-down" /></summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </details>
              </td>
              <td>8</td>
              <td>$48.99</td>
              <td>Card</td>
              <td>
                <button className='btn btn-sm btn-error btn-soft'>Delete</button>
              </td>
              <td>
                <Link to='123' className='btn btn-neutral btn-soft btn-sm'>Details</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default OrderLists