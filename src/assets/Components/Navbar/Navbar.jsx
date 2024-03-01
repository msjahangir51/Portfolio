import React, { useState } from 'react'

import "./Navbar.css"

import { NavLink } from 'react-router-dom'
// icons 
import { HiOutlineBars3 } from "react-icons/hi2";

import { LiaTimesSolid } from "react-icons/lia";

import { CgArrowLongRight } from "react-icons/cg";

function Navbar() {
    const [toggle,SetToggle] =useState(true)

    !toggle ? document.body.classList.add("active") : document.body.classList.remove("active");
    return (
    <div className='navbarNav'>
        <div className="conteinar navbar">
            <div className="logo">Ozlan</div>
            <ul className={`nav ${!toggle ? "active" : "" }`}>
                <li><NavLink to="/">HOme</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/service">Servoce</NavLink></li>
                <li><NavLink to="/protfolio">Protfolio</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
                {
                    toggle ? <HiOutlineBars3 className='Navbars' onClick={()=> SetToggle(!toggle)} size={24}/>  : <LiaTimesSolid className='Navbars' onClick={()=> SetToggle(!toggle)} size={24}/>
                }
            </div>
    </div>
  )
}

export default Navbar