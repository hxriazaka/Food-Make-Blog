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
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Link from 'next/link'


const SwiperPs4 = () => {

  return (
    <div className="swipergames" style={{ maxHeight: "45vh" }}>
      <h1>Meals</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      > 
            <SwiperSlide>
              <Link href='/sushi'>
                <div>      
                  <Product img='https://images.pexels.com/photos/1199982/pexels-photo-1199982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Sushi' className='img-fluid'/> 
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/pizza'>
              <div>
              <Product img='https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Pizza' className='img-fluid'/>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/burger'>
                <div>
              <Product img='https://images.pexels.com/photos/8879365/pexels-photo-8879365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Burger'  className='img-fluid'/>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/pasta'>
              <div>
              <Product img='https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Pasta' className='img-fluid'/>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/roastedchicken'>
              <div>
              <Product img='https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Roasted chicken' className='img-fluid'/>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href='/chickencurry'>
              <div>
              <Product img='https://images.pexels.com/photos/6120236/pexels-photo-6120236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Chicken curry' className='img-fluid' />
              </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/meatballs'>
              <div>            
              <Product img='https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Meatballs' className='img-fluid'/>
              </div> 
              </Link>
            </SwiperSlide>           
      </Swiper>
    </div>
  );
};

export default SwiperPs4;
