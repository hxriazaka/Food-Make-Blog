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
                <h2>Waffle</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>2 cups milk</li>
                                <li>1 (.25 ounce) package active dry yeast</li>
                                <li>½ cup warm water (110 degrees F/45 degrees C)</li>
                                <li>½ cup butter, melted</li>
                                <li>1 teaspoon salt</li>
                                <li>1 teaspoon white sugar</li>
                                <li>3 cups sifted unbleached all-purpose flour</li>
                                <li>2 eggs, slightly beaten</li>     
                                <li>½ teaspoon baking soda</li>   
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>Warm the milk in a small saucepan until it bubbles, then remove from heat. In a small bowl, dissolve yeast in warm water. Let stand until creamy, about 10 minutes.</p> 
                                <h3>Step 2</h3>
                                <p>In a large bowl, combine milk, yeast mixture, butter, salt, sugar and flour. Mix thoroughly with rotary or electric mixer until batter is smooth. Cover and let stand at room temperature overnight.</p>
                                <h3>Step 3</h3>
                                <p>The next morning, stir beaten eggs and baking soda into the batter; beat well.</p> 
                                <h3>Step 4</h3>  
                                <p>Spray preheated waffle iron with non-stick cooking spray. Pour mix onto hot waffle iron. Cook until golden brown.</p>
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/131056/pexels-photo-131056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/3550333/pexels-photo-3550333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/5711391/pexels-photo-5711391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/4663893/pexels-photo-4663893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/131056/pexels-photo-131056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/3550333/pexels-photo-3550333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/5711391/pexels-photo-5711391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/4663893/pexels-photo-4663893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
