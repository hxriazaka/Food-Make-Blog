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
                <h2>Tiramisu</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>1 pound mascarpone cheese</li>
                                <li>1 cup white sugar</li>
                                <li>2 tablespoons amaretto liqueur, or more to taste</li>
                                <li>1 cup heavy whipping cream</li>
                                <li>1 cup cold espresso</li>
                                <li>24 ladyfingers, lightly toasted</li>
                                <li>2 (1 ounce) squares unsweetened chocolate, divided</li>   
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>Whisk mascarpone cheese, sugar, and amaretto liqueur together in a bowl until smooth</p> 
                                <h3>Step 2</h3>
                                <p>Beat cream in a glass or metal bowl until soft peaks form. Lift your beater or whisk straight up: whipped cream will form soft mounds rather than a sharp peak. Fold whipped cream into mascarpone mixture.</p>
                                <h3>Step 3</h3>
                                <p>Pour espresso into a bowl. Dip ladyfingers into espresso and arrange 12 dipped ladyfingers in an 8-inch square pan. Spread 1/2 the mascarpone mixture over ladyfingers. Grate 1 chocolate square over mascarpone layer. Repeat a second layer with remaining dipped ladyfingers, mascarpone mixture, and chocolate, respectively. Refrigerate tiramisu until set, at least 2 hours.</p>   
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/7783239/pexels-photo-7783239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/7783244/pexels-photo-7783244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/10170013/pexels-photo-10170013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/7783239/pexels-photo-7783239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/7783244/pexels-photo-7783244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/10170013/pexels-photo-10170013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
