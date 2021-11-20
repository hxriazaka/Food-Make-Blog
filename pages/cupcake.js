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
                <h2>Cupcake</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>1 (18.25 ounce) package chocolate cake mix (such as Duncan Hines® Moist Deluxe®)</li>
                                <li>1 ¼ cups water</li>
                                <li>4 eggs, divided</li>
                                <li>½ cup oil</li>
                                <li>1 (8 ounce) package cream cheese, at room temperature</li>
                                <li>⅔ cup white sugar</li>  
                                <li>¾ teaspoon Mexican vanilla extract</li>
                                <li>¾ cup miniature chocolate chips, or more to taste, divided</li> 
                                <li>1 (16 ounce) container cream cheese frosting</li>
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>Preheat oven to 350 degrees F (175 degrees C). Line 24 muffin cups with paper liners.</p> 
                                <h3>Step 2</h3>
                                <p>Combine cake mix, water, 3 eggs, and oil together in a bowl using an electric mixer until batter is smooth, about 2 minutes. Spoon batter into the prepared muffin cups.</p>
                                <h3>Step 3</h3>
                                <p>Blend cream cheese, sugar, 1 egg, and vanilla extract together in a blender until cheesecake filling is smooth; stir in 1/2 cup chocolate chips. Spoon about 1 tablespoon cheesecake filling into each cupcake.</p>   
                                <h3>Step 4</h3>
                                <p>Bake in the preheated oven until a toothpick inserted into a cupcake comes out clean, about 25 minutes. Cool cupcakes on a wire rack.</p>
                                <h3>Step 5</h3>
                                <p>Frost each cupcake with cream cheese frosting and sprinkle remaining chocolate chips over each cupcake.</p>
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/1635985/pexels-photo-1635985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/818789/pexels-photo-818789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/5846205/pexels-photo-5846205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/1635985/pexels-photo-1635985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/818789/pexels-photo-818789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/5846205/pexels-photo-5846205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
