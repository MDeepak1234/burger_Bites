import React from 'react';
import back from '../assets/hero/hero-2.png';          
import yellow from '../assets/hero/price-badge-yellow.png'; 
import "../Styles/Bodystyle.css";                       

function Background() {
  return (
    <>
      <div className="heroimage">
        <div className="image-wrapper">
          <img className="burger" src={back} alt="burger" />
          <div className="img2">
            <img src={yellow} alt="badge" />
            <h1>$3.99/-</h1>
          </div>
        </div>
        <button className='order_now' style={{"transform":"translateX(-1rem)"}}>Order Now</button>
      </div>

    </>


  );
}

export default Background;
