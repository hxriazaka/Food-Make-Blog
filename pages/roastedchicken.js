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
                <h2>Roasted Chicken</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>1 (3 pound) whole chicken, giblets removed</li>
                                <li>salt and black pepper to taste</li>
                                <li>1 tablespoon onion powder, or to taste</li>
                                <li>½ cup margarine, divided</li>
                                <li>1 stalk celery, leaves removed</li>  
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>Preheat oven to 350 degrees F (175 degrees C).</p> 
                                <h3>Step 2</h3>
                                <p>Place chicken in a roasting pan, and season generously inside and out with salt and pepper.
                                     Sprinkle inside and out with onion powder. Place 3 tablespoons margarine in the chicken cavity
                                    . Arrange dollops of the remaining margarine around the chickens exterior. Cut the celery into 3 or 4 pieces,
                                     and place in the chicken cavity.</p>
                                <h3>Step 3</h3>
                                <p>Bake uncovered 1 hour and 15 minutes in the preheated oven, to a minimum internal temperature of 180 degrees F (82 degrees C).
                                     Remove from heat, and baste with melted margarine and drippings.
                                     Cover with aluminum foil, and allow to rest about 30 minutes before serving.</p>   
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/6210955/pexels-photo-6210955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/6210955/pexels-photo-6210955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
