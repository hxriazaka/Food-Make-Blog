import Grid from '@mui/material/Grid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Swiperh from '../components/swiperh';
import SwiperPs4 from '../components/swiperps4';
import SwiperXbox from '../components/swiperxbox';
import PSN from '../components/psn';




export default function Homepage() {
  
  
  
  return (
    <div className='homepage'>
      <Swiperh/>
      <div className='container swiper-ps4'>
        <SwiperPs4 />
      </div>
      <div className='container mt-24 swiper-ps4'>
        <SwiperXbox />
      </div> 
      <PSN />     
  </div>
  
  )
}