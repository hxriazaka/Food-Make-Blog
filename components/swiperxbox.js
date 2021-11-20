import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
import Product from "../pages/product/product";
import Link from 'next/link'

const SwiperXbox = () => {

    return ( 
        <div className="swipergames swiper-xbox" style={{ maxHeight: "45vh" }}>
        <h1>Sweets</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
          <SwiperSlide>
            <Link href='/crepe'>
            <div>
            <Product img ='https://images.pexels.com/photos/3396955/pexels-photo-3396955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Crêpe' className='img-fluid'/>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/chocolatecake'>
            <div>
            <Product img ='https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Chocolate Cake' className='img-fluid'/>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link href='/cupcake'>
          <div>
            <Product img ='https://images.pexels.com/photos/6210755/pexels-photo-6210755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Cup Cake' className='img-fluid'/>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link href='/pancake'>
          <div>
            <Product img ='https://images.pexels.com/photos/7144964/pexels-photo-7144964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Pancake' className='img-fluid'/>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link href='/waffle'>
          <div>
            <Product img ='https://images.pexels.com/photos/7937489/pexels-photo-7937489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Waffle' className='img-fluid'/>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link href='/frenchtoast'>
          <div>
            <Product img ='https://images.pexels.com/photos/8143761/pexels-photo-8143761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='French toast' className='img-fluid'/>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link href='/tiramisu'>
          <div>
            <Product img ='https://images.pexels.com/photos/6328588/pexels-photo-6328588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Tiramisu' className='img-fluid'/>
            </div>
            </Link>
          </SwiperSlide>
      </Swiper>
    </div>
     );
}
 
export default SwiperXbox;