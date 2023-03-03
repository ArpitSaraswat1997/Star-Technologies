import React from 'react'
import Logo from "../assets/Logo.png"
import "../css/header.css"
import { Link } from 'react-router-dom'




export default function Header() {
  return (
    // <div className='main'>
    <div className='header'>
        <img src={Logo} alt=""/>
       <li><Link to="/"  className="link">Home</Link></li>

       <li> <Link to ="/Project" className="link">Projects </Link></li>
       <li> <Link to ="/Emerald" className="link">Emerald </Link></li>

 

       
        <span class="material-symbols-outlined">more_vert</span>
    </div>
    // </div>
  )
}
