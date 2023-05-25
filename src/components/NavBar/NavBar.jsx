import React, { useContext } from 'react'
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import Logo from '../../Assets/img/Logo.png'
import './NavBar.css'
import { CartContext } from '../Cart/CartContexProvider';

export const NavBar = () => {
    const {cartList} = useContext(CartContext)
  return (
    <nav className='navBar'>
        <NavLink to={"/"}><img src={Logo} alt="Logo" className='navBarLogo'/></NavLink>
        <ul className='navBarList'>
            <li>
                <NavLink to={"/categoria/Hogar"}>Hogar</NavLink>
            </li>
            <li>
                <NavLink to={"/categoria/Oficina"}>Oficina</NavLink>
            </li>
            <li>
                <NavLink to={"/categoria/Decoración"}>Decoración</NavLink>
            </li>
        </ul>
        {cartList.length > 0 &&<CartWidget/>}
    </nav>
  )
}
