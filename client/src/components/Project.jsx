import React from 'react'
import image7 from "../assets/image7.png"
import image6 from "../assets/image6.png"
import image8 from "../assets/image8.png"
import image9 from "../assets/image9.png"
import image10 from "../assets/image10.png"
import image11 from "../assets/image11.png"
import "../css/project.css"

export default function Project() {
  return (

<div>

    
    
     <div>
        <h1 className='data'>PROJECT</h1>
     </div>
    
    <div className='projects'>
        <div>
            <img src={image7}alt="" />
            <p>ANANDVILAS</p>
        </div>
        <div>
            <img src={image8}alt="" />
            <p>DIPLOMATIC GREEN</p>
        </div>
        <div>
            <img src={image9}alt="" />
            <p>AMAN VILA</p>
        </div>
        <div>
            <img src={image10}alt="" />
            <p>81 BUSINESS HUB</p>
        </div>
        <div>
            <img src={image11}alt="" />
            <p>KOHINOOR</p>
        </div>
        <div>
            <img src={image6}alt="" />
            <p>EMERALD BAY</p>
        </div>

        </div>
   
</div>
  )
}
