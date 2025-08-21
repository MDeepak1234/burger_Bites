import React from 'react'
import logo from '../assets/logo/logo.png';
import app1 from '../assets/shop/appstore.png';
import app2 from '../assets/shop/googleplay.png';
import '../Styles/Footer.css';

function Footer() {
  return (
    <div className='main'style={{"backgroundColor":"rgba(23, 21, 21, 1)"}}>
      <div className="comlogo">
        <img src={logo} alt="" />
      </div>
      <div className="TastyIndia">
        <ul>
            <li><strong>TastyBurgers-India</strong></li>
            <li>About Us</li>
            <li>TB Care</li>
            <li>Careers</li>
            <li>Our GoldenPast</li>
            <li>Responsible</li>
            <li>Disclosure</li>
        </ul>
      </div>
      <div className="legal">
        <ul>
            <li><strong>Legal</strong></li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Caution Notice</li>
        </ul>
      </div>
      <div className="tastyfood">
        <ul>
            <li><strong>TB-Foods</strong></li>
            <li>Menu</li>
            <li>Orders</li>
            <li>Gifts</li>
            <li>Offers</li>
        </ul>
      </div>
      <div className="suport">
        <ul>
            <li><strong>Support</strong></li>
            <li>Get Help</li>
            <li>Contact Us</li>
            <li>FeedBack</li>
            <li>Ratings</li>
        </ul>
      </div>
      <div className="apps">
        <img src={app1} alt="" />
        <img src={app2} alt="" />
      </div>
    </div>
  )
}

export default Footer;
