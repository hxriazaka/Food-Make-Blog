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

export default function Pizza() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='foodpage'>
            <div className="container">
                <h2>Pizza</h2>
                <div className="row ">
                    <div className="col-md-6">
                        <div className='ingredients'>
                            <h1>Ingredients</h1>
                            <div>
                                <h3>Contadina(R) Quick Pizza Sauce :</h3>
                                <li>½ (12 ounce) can CONTADINA® Tomato Paste</li>
                                <li>1 teaspoon dried oregano, crushed</li>
                                <li>1 teaspoon dried basil, crushed</li>
                                <li>½ teaspoon garlic powder</li>
                                <li>½ teaspoon onion powder</li>
                                <li>½ teaspoon sugar</li> 
                                <li>½ teaspoon salt</li> 
                                <li>¼ teaspoon black pepper</li>   
                            </div>
                            <div>
                                <h3>Easy Pizza Crust :</h3>
                                <li>3 ¼ cups all-purpose flour, or more as needed</li>
                                <li>2 (.25 ounce) envelopes FLEISCHMANN'S® Pizza Crust Yeast or RapidRise® Yeast</li>
                                <li>1 tablespoon sugar</li>
                                <li>1 ½ teaspoons salt</li>
                                <li>1 ⅓ cups very warm water (120 degrees F to 130 degrees F)</li>
                                <li>⅓ cup oil</li>   
                            </div>
                            <div>
                                <h3>Toppings :</h3>
                                <li>1 (6 ounce) package HORMEL® Pepperoni</li>
                                <li>1 cup shredded mozzarella cheese, or more to taste</li>  
                            </div>
                            <h1>Directions</h1>
                                <h3>Step 1</h3>
                                <p>For sauce: Combine all sauce ingredients with 1/2 cup water in a medium bowl; 
                                    set aside for flavors to develop while making crust. Freeze remaining paste .</p> 
                                <h3>Step 2</h3>
                                <p>For crusts: Combine 2 cups of flour with the dry yeast, sugar and salt. 
                                    Add the water and oil and mix until well blended (about 1 minute).
                                     Gradually add enough remaining flour slowly, until a soft, sticky dough ball is formed.</p>
                                <h3>Step 3</h3>
                                <p>Knead for about 4 minutes, on a floured surface, until dough is smooth and elastic. Add more flour, 
                                    if needed. (If using RapidRise® Yeast, let dough rest, covered, for 10 minutes.)</p>
                                <h3>Step 4</h3>
                                <p>Divide dough in half. Pat each half (with floured hands) into a 12-inch greased pizza pan OR roll dough to fit pans.</p>
                                <h3>Step 5</h3>
                                <p>For pizzas: Preheat oven to 425 degrees F. Top crusts with sauce, pepperoni and cheese.</p>
                                <h3>Step 6</h3>
                                <p>Bake for 18 to 20 minutes until crusts are browned and cheese is bubbly. For best results, 
                                    rotate pizza pans between top and bottom oven racks halfway through baking.</p>   
                        </div>                                     
                    </div>
                    <div className="col-md-6">
                        <div className="food-swiper container">
                        <Swiper style={{'--swiper-navigation-color': 'greenyellow','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 sp1">
                        <SwiperSlide><img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>    
                        <SwiperSlide><img src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper sp2">
                        <SwiperSlide><img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
