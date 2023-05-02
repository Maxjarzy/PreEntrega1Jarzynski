import React from 'react'
import { FaShoppingCart } from "react-icons/fa"


export const CartWidget = () => {
  return (
    <div className='Cart--Container'>
      <FaShoppingCart className='Cart--Icon'/>
      <p className='Cart--Paragraph'>{0}</p>
    </div>
  )
}
