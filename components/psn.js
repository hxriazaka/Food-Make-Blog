import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import 'swiper/css'
import "swiper/css/effect-cards"
import Image from 'next/image'



// import Swiper core and required modules
import SwiperCore, {
  EffectCards
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);
const PSN = () => {
    return ( 
        <div className="psn container">
            <h1>Books</h1>
            <div className="row pb-12 psn-cntn">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src="https://images.pexels.com/photos/8879357/pexels-photo-8879357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" style={{width : '50%'}}/>
                </div>
                <div className="col-md-6 d-flex justify-content-center psn-2-1">
                    <Swiper effect={'cards'} grabCursor={true} className="mySwiper psn-2">
                        <SwiperSlide >
                            <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780316497350_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780358471288_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593186749_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780062962768_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593135426_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="" />
                        </SwiperSlide>
                        </Swiper>
                </div>
            </div>
        </div>
     );
}
 
export default PSN;