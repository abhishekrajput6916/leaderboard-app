import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({ slides }) => {
    // const swiper = new Swiper('.swiper',{
    //     modules: [Navigation, Pagination], 
    // })
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{draggable:true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            // className='flex items-center justify-center'
        >
            {slides.map(slide => <SwiperSlide className='p-8'>{slide}</SwiperSlide>)}
        </Swiper>
    );
};

export default Slider;