import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Swiperh() {

    return ( 
        <Swiper spaceBetween={0} 
        pagination={{"clickable": true}} 
        autoplay={{
            "delay": 3500,
            "disableOnInteraction": false
          }}
        
        className="mySwiper container-fluid">
    <SwiperSlide className='bg-1'>
          <div className='bg-1-1'>
              <h1>Welcome to Make Food</h1>
              <h1>Blog</h1>
              <div className='bg-1-btn'>
                <button>Explore</button>
          </div>
          </div>
          <div className="blur"></div>
      <img src="https://images.pexels.com/photos/1040685/pexels-photo-1040685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='img-fluid'/>
      </SwiperSlide>
    <SwiperSlide><img src='https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt="" className='img-fluid' /></SwiperSlide>
    <SwiperSlide><img src="https://images.pexels.com/photos/674584/pexels-photo-674584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='img-fluid'/></SwiperSlide>
    <SwiperSlide><img src="https://images.pexels.com/photos/3009323/pexels-photo-3009323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='img-fluid'/></SwiperSlide>
    <SwiperSlide><img src="https://images.pexels.com/photos/724291/pexels-photo-724291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='img-fluid'/></SwiperSlide>
  </Swiper>
     );
  }