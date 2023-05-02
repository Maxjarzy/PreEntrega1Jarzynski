import React from 'react'
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import Logo from '../../Assets/img/Logo.png'
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className='NavBar'>
        <NavLink to={"/"}><img src={Logo} alt="Logo" className='NavBar--Logo'/></NavLink>
        <ul className='NavBar--List'>
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
        <CartWidget/>
    </nav>
  )
}
