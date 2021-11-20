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
                <h2>Sushi</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>⅔ cup water</li>
                                <li>⅓ cup medium-grain white rice, uncooked</li>
                                <li>6 tablespoons rice vinegar</li>
                                <li>4 sheets nori (dry seaweed)</li>
                                <li>4 ounces smoked salmon, cut into strips2 ounces cold cream cheese, cut into thin strips</li>
                                <li>4 scallions, sliced into thin strips</li>   
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>Bring water and rice to a boil in a saucepan. Reduce heat to medium-low, cover,
                                    and simmer until rice is tender and water has been absorbed,
                                    20 to 25 minutes. Remove from the heat and cool, about 10 minutes. Toss with vinegar.</p> 
                                <h3>Step 2</h3>
                                <p>Place 1 sheet of nori on a rolling mat, layer with 1/4 of the rice, and press rice out to the edges.
                                    Lay 1/4 of the salmon, 1/4 of the cream cheese, and 1/4 of the scallions in the center.
                                    Roll up carefully and wrap in plastic wrap. Repeat with remaining nori, rice, salmon,
                                    cream cheese, and scallions. Place in the refrigerator until chilled, at least 1 hour.</p>
                                <h3>Step 3</h3>
                                <p>Remove sushi rolls from the refrigerator, discard plastic wrap, and cut each roll into 6 slices. Layer all rolls on a platter.</p>   
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/3687447/pexels-photo-3687447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/539430/pexels-photo-539430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/8951498/pexels-photo-8951498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/4071381/pexels-photo-4071381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/3687447/pexels-photo-3687447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/539430/pexels-photo-539430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/8951498/pexels-photo-8951498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/4071381/pexels-photo-4071381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

