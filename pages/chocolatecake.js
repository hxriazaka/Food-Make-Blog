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
                <h2>Chocolate Cake</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>1 cup butter</li>
                                <li>2 cups white sugar</li>
                                <li>2 eggs</li>
                                <li>1 cup buttermilk </li>
                                <li>½ cup unsweetened cocoa powder</li>
                                <li>2 ½ cups all-purpose flour</li> 
                                <li>2 teaspoons baking soda</li> 
                                <li>½ teaspoon salt</li>  
                                <li>1 cup boiling water</li> 
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>Preheat oven to 350 degrees F (175 degrees C). If using layers, grease and line the pans with parchment paper. If using a 9 X 13 pan, grease and dust with cocoa powder. Sift together the cocoa, flour, baking soda and salt. Set aside.</p> 
                                <h3>Step 2</h3>
                                <p>In a large bowl, cream together the butter and sugar until light and fluffy. Beat in the eggs one at a time. Alternately beat in the flour mixture and the buttermilk, mixing just until incorporated. Add the boiling water and beat for one full minute.</p>
                                <h3>Step 3</h3>
                                <p>Bake in the preheated oven for 30 to 40 minutes, or until a toothpick inserted into the center of the cake comes out clean. Allow to cool.</p>   
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/3740197/pexels-photo-3740197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/112787/pexels-photo-112787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/3740197/pexels-photo-3740197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/112787/pexels-photo-112787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
