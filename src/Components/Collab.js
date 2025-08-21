import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import logo1 from '../assets/brands/brand-11.png';
import logo2 from '../assets/brands/brand-12.png';
import logo3 from '../assets/brands/brand-13.png';
import logo4 from '../assets/brands/brand-14.png';
import logo5 from '../assets/brands/brand-15.png';
import logo6 from '../assets/brands/brand-16.png';
import logo7 from '../assets/brands/brand-17.png';
import logo8 from '../assets/brands/brand-18.png';
import bg from '../assets/footer/banner-1.jpg';
import '../Styles/Collab.css';

const Collab = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <div className="collab-container" style={{ backgroundImage: `url(${bg})`,"marginTop":"2vh","borderRadius":"1rem" }}>
        <h1>Collabs:</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000 }}
        grabCursor={true}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`brand-${index}`} className="collab-logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Collab;
