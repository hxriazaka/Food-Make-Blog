import bg from '../images/bg.jpg'
import Image from 'next/dist/client/image';

const Swiperh = () => {
  return ( 
    <div className="bg-home">
        <Image src={bg} className='img-fluid'/>
    </div>
   );
}
 
export default Swiperh;