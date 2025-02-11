import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Slider = ({slides}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >      
      {slides.map(slide=><SwiperSlide>{slide}</SwiperSlide>)}
    </Swiper>
  );
};

export default Slider;