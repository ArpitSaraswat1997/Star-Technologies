import React from "react";
import "../css/footer.css";
import image5 from "../assets/image5.png";

export default function Footer() {
  return (
    <div>
      <div className="horizontal-line">
        <hr />
      </div>
      <div className="call-back">
        <p>REQUEST A CALL BACK</p>
      </div>

      <div className="text-form">
        <input type="text" placeholder="NAME *" />
        <input type="Number" placeholder="Mobile*" />
        <input type="text" placeholder="Email *" />
      </div>

      <div>
        <button className="submit-btn">Submit</button>
      </div>

      <div className="horizontal-line2">
        <hr />
      </div>

       <div className="main"> 
        <div className="part-5">
          <img src={image5} alt="" />
        </div> 
        <div className="both-address">


        <div className="footer-main">
          <div className="enquiry">
            <h4>FOR FARIDABAD</h4>
            <p>Toll Free Number</p>
            <span class="material-symbols-outlined">remove</span>
            <p>Email</p>
          </div>

          <div className="number">
            <p>1800 212 6233</p>
            <span class="material-symbols-outlined">remove</span>
            <p>marketing@puriconstructions.com</p>
          </div>

          <div>
            <h4>MARKETING OFFICE</h4>
            
            <p>
              Puri Construction private Limited <br />
              4-7B, Ground Floor , TolStoy House, <br />
              15 & 17 ,Tolstoy Marg <br />
              New Delhi -110001 CIN: u45201DL1971PTCOO5522
            </p>
          </div>



        </div>
        <div className="footer-main1">
          <div className="enquiry1">
            <h4>FOR GURGAON</h4>
            <p>Toll Free Number</p>
            <span class="material-symbols-outlined">remove</span>
            <p>Email</p>
          </div>

          <div className="number1">
            <p>1800 123 6244</p>
            <span class="material-symbols-outlined">remove</span>
            <p>sales@puriconstructions.com</p>
          </div>

          <div className="corporate">
            <h4>COPORPRATE &REGISTERD OFFICE </h4>
            <p>
              Puri Construction private Limited <br />
             11-12A Ground Floor , TolStoy House, <br />
              15 & 17 ,Tolstoy Marg <br />
              New Delhi -110001 
            </p>
            
          </div>
        </div>



      </div>

      </div>
     </div>
  );
}
