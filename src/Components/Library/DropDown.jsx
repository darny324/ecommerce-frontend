import React from 'react'

const DropDown = ({children, className}) => {
  return (
    <div className={`${className} border border-gray-300  bg-white rounded-lg flex flex-col
    `}>
        {children}
    </div>
  )
}

export default DropDown