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
                <h2>Crêpe</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>2 eggs</li>
                                <li>½ cup milk</li>
                                <li>½ cup water</li>
                                <li>¾ cup all-purpose flour</li>
                                <li>6 teaspoons white sugar</li>
                                <li>⅓ tablespoon butter or margarine</li> 
                                <li>1 fluid ounce cognac</li>
                                <li>1 (3.9 ounce) package instant chocolate pudding mix</li>
                                <li>1 teaspoon instant coffee granules</li>   
                                <li>3 cups heavy cream</li> 
                                <li>4 (1 ounce) squares bittersweet chocolate</li> 
                                <li>½ cup butter or margarine</li> 
                                <li>1 ¼ cups nonfat evaporated milk</li> 
                                <li>2 ½ cups confectioners sugar</li> 
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>Crepe batter: in a large bowl, mix together eggs, milk, water, flour, sugar, 1 teaspoon butter, and cognac.</p> 
                                <h3>Step 2</h3>
                                <p>Filling: beat pudding mix, instant coffee and whipping cream together with an electric mixer until the mixture is thick.</p>
                                <h3>Step 3</h3>
                                <p>Sauce: in a small saucepan, melt the chocolate, butter, evaporated milk, and confectioners sugar together until the mixture is a little thick.</p>   
                                <h3>Step3</h3>
                                <p>Crepes: heat a small skillet (or crepe pan) to a high temperature. Place a small amount of batter into the skillet 
                                    and swirl it around until the batter covers the bottom of the pan. When the crepe is slightly browned flip the crepe over and 
                                    let the other side brown for a few seconds. 
                                    The first crepe will most likely not turn out well, but the rest will. Stack the crepes on top of each other to let tem cool before filling.</p>
                                <h3>Step4</h3>
                                <p>Spoon the filling into the center of each crepe and roll the crepe up around it. Spoon the sauce over the crepes and serve.</p>
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/3225499/pexels-photo-3225499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/6811161/pexels-photo-6811161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/1397514/pexels-photo-1397514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/4404628/pexels-photo-4404628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/3225499/pexels-photo-3225499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/6811161/pexels-photo-6811161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/1397514/pexels-photo-1397514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/4404628/pexels-photo-4404628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
