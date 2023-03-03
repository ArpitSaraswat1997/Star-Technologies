import React from 'react'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import "../css/homepage.css"
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <>
    <div className='homepage'>
      <h2>CRAFTING <br />
     EXCEPTIONAL <br />
      LIFESTYLE</h2>
      <img className='image1' src={image1} alt="" />
    </div>
{/* 
    part2 */}
     
     <div className='part2'>

        <div className='para'>    
        <h4 className='the-aravallis'>THE ARAVALLIS</h4>
        <p>SECTOR 61,GURUGRAM</p>
        <span class="material-symbols-outlined">remove</span>
        
        <p>10 min from horizon centre</p>
        <span class="material-symbols-outlined">remove</span>
   
        <p>High end Specifications</p>
        <span class="material-symbols-outlined">remove</span>
         <p>luxsary club house</p>
        </div>
        <div>
            <div className='newLine'>
            <h5 className='line'>.</h5>
            <h2>New LAUNCH</h2>
            </div>
         <img  src={image2} alt="" />
         <br />

         <button className='knowmore-btn'>Know More</button>
        </div>
     </div>



    {/* third sextion */}

    <div className='part3'>
        <div className='para3'>
            <img src={image3} alt="" />
        </div>
            <div className='part3-Data'>
                <div className='newLine'>
              <h5 className='line'>.</h5>
              <h2 className='deliverd'>DELIVERED</h2>
            </div>
            <h4 className='diplomatic-green'>DIPLOMATIC GREENS  <br />
            LOCATION</h4>
            <p className='Para-part3'>Sector 110 & 111 Gurguon </p>
            <span class="material-symbols-outlined">remove</span>

            <h5 className='diplomatic-green'>PROPERTY TYPE</h5>
            <p className='Para-part3' >Diplomatic green apartments  <br />
            Residentials</p>
            <span class="material-symbols-outlined">remove</span>
            
            <p className='Para-part3'>Diplomatic green ensures the world <br /> is need your Oyster. The Property's  <br /> vantage location ensures you stay  <br />  connected . networked and in the midst <br /> of urban amenities</p>

            <button className='knowmore-btn'>Know More</button>
            </div>
           
    </div>

    {/* allProjectbtton */}

    <div>
        <button className='allProject'>
          <Link to="/project">View All Project</Link>  
        </button>
    </div>

    <div className='part-4'>
        <img src={image4} alt="" />
    </div>





    </>
  )
}
