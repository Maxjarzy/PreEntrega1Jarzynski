import React, { useContext } from 'react'
import { CartContext } from "../Cart/CartContexProvider";
import { CartItem } from './CartItem';
import { Link } from "react-router-dom";


export const Cart = () => {

  const {cartList, removeList, compraTotal, totalItems} = useContext(CartContext);

  if(totalItems() === 0){
    return (
      <div>
        <h1>El carrito está vacío</h1>
        <Link to='/'>Ir la inicio</Link>
      </div>
    )
  }

  return(
    <div>
        <h1>Su compra</h1>
        {
          cartList.map(item => <CartItem key={item.id} {...item}/>)
        }
        <p>Total de su compra: ${cartList.length === 0 ? "0" : compraTotal()}</p>
        <button onClick={removeList}>Vacíar carrito</button>
        <button>CheckOut</button>
      </div>
  )


 
}
