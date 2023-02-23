

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slideImg1 from './images/doctor2.jpg';
import slideImg2 from './images/Doctor.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  return (
    <Swiper className='css-slide-parent'
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='css-slide'><img src={slideImg2}/></SwiperSlide>
      <SwiperSlide  className='css-slide'><img src={slideImg1}/></SwiperSlide>
     
 
      ...
    </Swiper>
  );
};
export default Slider;
