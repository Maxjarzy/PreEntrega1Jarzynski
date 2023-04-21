import React from 'react'
import { FaShoppingCart } from "react-icons/fa"


export const CartWidget = () => {
  return (
    <div className='cart-container'>
      <FaShoppingCart className='cartIcon'/>
      <p className='cart-paragraph'>{0}</p>
    </div>
  )
}
