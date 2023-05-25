import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { CartContext } from '../Cart/CartContexProvider'


export const CartWidget = () => {

  const {totalItems} = useContext(CartContext)
  
  return (

    <Link to='/cart' className='navBarCart'><FaShoppingCart/>{totalItems()}</Link>

    
  )
}

