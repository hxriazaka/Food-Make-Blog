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
                <h2>Chicken Curry</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>3 cloves garlic, crushed</li>
                                <li>3 small onions, minced</li>     
                                <li>1 slice fresh ginger root</li> 
                                <li>5 tablespoons curry powder</li> 
                                <li>5 tablespoons water</li> 
                                <li>2 tablespoons olive oil</li> 
                                <li>1 cup yogurt</li> 
                                <li>1 cup coconut milk</li> 
                                <li>1 cup milk</li> 
                                <li>1 cup water</li> 
                                <li>2 large potatoes, cubed</li> 
                                <li>1 (4 pound) whole chicken, cut into 8 pieces</li> 
                                <li>salt to taste</li> 
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>In a small bowl, grind together garlic, onion and ginger. In a separate small bowl, mix together curry powder and 5 tablespoons water.</p> 
                                <h3>Step 2</h3>
                                <p>Heat oil in a large skillet over medium high heat. Saute garlic, ginger and onion until browned; add curry paste and saute together until smell is strong and fragrant.</p>
                                <h3>Step 3</h3>
                                <p>Add yogurt, coconut milk and regular milk along with 1 cup of water, and stir all together. Then add potatoes and chicken and bring to a boil; reduce heat and simmer until potatoes are tender and chicken is cooked through, about 20 to 25 minutes.</p>   
                                <h3>Step 4</h3>
                                <p>Season with salt to taste and simmer for another 2 minutes; the curry is ready!</p>    
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/5690385/pexels-photo-5690385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/5690385/pexels-photo-5690385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
