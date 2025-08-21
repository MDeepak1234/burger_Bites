import React from 'react';
import offer from '../assets/menu/ads-2.jpg';
import "../Styles/Offers.css"; // Optional if you want to move styles

function Offers() {
  return (
    <div className="offer-container" style={{"borderRadius":"1rem"}}>
      <img src={offer} alt="Offer" className="offer-image" />
      <div className="offer-text">
        <h1>Big Burger Sale</h1>
        <h2>is Live</h2>
        <h3>Get any tasty Burgers at 50% Off on <strong style={{"color":"Red"}}>BigBurgerSale</strong> in August</h3>
      </div>
    </div>
  );
}

export default Offers;
