import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
// import slide5 from '../../../assets/home/slide5.jpg'

// import './styles.css';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
         <section>
            <SectionTitle
            heading={"Order Online"}
            subheading={"From 11:00am to 1:00pm"}
            ></SectionTitle>
             <section>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-white text-3xl -mt-16  uppercase text-center'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-white text-3xl -mt-16  uppercase text-center'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-white text-3xl -mt-16  uppercase text-center'>Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-white text-3xl -mt-16  uppercase text-center'>Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-white text-3xl -mt-16  uppercase text-center'>Salads</h3>
        </SwiperSlide>
      </Swiper>
      </section>
         </section>   
       
    );
};

export default Category;