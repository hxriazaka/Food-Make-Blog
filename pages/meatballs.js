import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"



// import Swiper core and required modules
import SwiperCore, {
  FreeMode,Navigation,Thumbs
} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode,Navigation,Thumbs]);

export default function Sushi() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='foodpage'>
            <div className="container">
                <h2>Meatballs</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>2 pounds extra lean ground beef</li>
                                <li>2 cups dry bread crumbs</li>
                                <li>2 eggs</li>
                                <li>½ cup minced onion</li>
                                <li>2 tablespoons chopped fresh parsley</li>
                                <li>2 teaspoons salt</li>  
                                <li>1 cup barbecue sauce</li>
                                <li>1 ½ (16 ounce) jars pineapple preserves</li>  
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>Preheat oven to 350 degrees F (175 degrees C)</p> 
                                <h3>Step 2</h3>
                                <p>In a medium-size mixing bowl, mix barbecue sauce and pineapple preserves together.</p>
                                <h3>Step 3</h3>
                                <p>In a medium-size mixing bowl, combine meat, breadcrumbs, eggs, onions, salt, and parsley. Mix well and form into bite-size balls. Arrange the balls in a single layer in a 9x13 inch baking dish. Pour the barbecue sauce mixture evenly over the meatballs.</p>   
                                <h3>Step 4</h3>
                                <p>Bake for 30 to 45 minutes, until the meat is cooked.</p>
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/5863610/pexels-photo-5863610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/5724553/pexels-photo-5724553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/6248816/pexels-photo-6248816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/8923095/pexels-photo-8923095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/5863610/pexels-photo-5863610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/5724553/pexels-photo-5724553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/6248816/pexels-photo-6248816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/8923095/pexels-photo-8923095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
