import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
      <NavLink to='/' className="left">JituMall</NavLink>
       <div className="right">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products </NavLink>
        <NavLink to={"/cart"}>Cart </NavLink>
       </div>
    </div>
  )
}

export default Navbar