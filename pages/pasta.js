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

export default function Pasta() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='foodpage'>
            <div className="container">
                <h2>Pasta</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <li>1 pound Italian sausage links</li>
                                <li>½ pound lean ground beef</li>
                                <li>1 tablespoon olive oil</li>
                                <li>1 onion, chopped</li>
                                <li>1 clove garlic, chopped</li>
                                <li>1 (16 ounce) can canned tomatoes</li>   
                                <li>1 (15 ounce) can canned tomato sauce</li> 
                                <li>1 teaspoon salt</li> 
                                <li>¼ teaspoon ground black pepper</li> 
                                <li>1 teaspoon dried basil</li> 
                                <li>1 teaspoon dried oregano</li> 
                                <li>1 bay leaf</li> 
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>Removed casing from sausage links and cut into 1/2 inch slices. In a large skillet, 
                                    brown sausage over medium heat for about 10 minutes; remove and set aside.</p> 
                                <h3>Step 2</h3>
                                <p>In a large skillet, heat ground beef, olive oil, garlic and onion over medium heat until meat is nicely browned; drain.</p>
                                <h3>Step 3</h3>
                                <p>Pour in tomatoes and tomato sauce; mix in salt, ground black pepper, basil, oregano, bay leaf and cooked sausage. Simmer uncovered for 1 hour, stirring occasionally.</p>
                                <h3>Step 4</h3>
                                <p>Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain.</p>  
                                <h3>Step 5</h3>
                                <p>Mix cooked sauce with hot pasta and remove bay leaf from sauce before serving.</p>     
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/6287534/pexels-photo-6287534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/6287486/pexels-photo-6287486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/6287534/pexels-photo-6287534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/6287486/pexels-photo-6287486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
