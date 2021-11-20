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
                <h2>Pancake</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>3 cups all-purpose flour</li>
                                <li>3 tablespoons white sugar</li>
                                <li>3 teaspoons baking powder</li>
                                <li>1 ½ teaspoons baking soda</li>
                                <li>¾ teaspoon salt</li>
                                <li>3 cups buttermilk</li>
                                <li>½ cup milk</li>
                                <li>3 eggs</li>  
                                <li>⅓ cup butter, melted</li>  
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>In a large bowl, combine flour, sugar, baking powder, baking soda, and salt. In a separate bowl, beat together buttermilk, milk, eggs and melted butter. Keep the two mixtures separate until you are ready to cook.</p> 
                                <h3>Step 2</h3>
                                <p>Heat a lightly oiled griddle or frying pan over medium high heat. You can flick water across the surface and if it beads up and sizzles, its ready!</p>
                                <h3>Step 3</h3>
                                <p>Pour the wet mixture into the dry mixture, using a wooden spoon or fork to blend. Stir until its just blended together. Do not over stir! Pour or scoop the batter onto the griddle, using approximately 1/2 cup for each pancake. Brown on both sides and serve hot.</p>   
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/3702403/pexels-photo-3702403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/730922/pancakes-food-eat-breakfast-730922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/4992671/pexels-photo-4992671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/1427801/pexels-photo-1427801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/3702403/pexels-photo-3702403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/730922/pancakes-food-eat-breakfast-730922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/4992671/pexels-photo-4992671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/1427801/pexels-photo-1427801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
