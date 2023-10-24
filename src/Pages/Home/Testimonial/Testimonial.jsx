import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="px-32">
      <SectionTitle
        heading={"Testominals"}
        subheading={"What are our clients say"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex items-center flex-col my-12">
              <Rating
                style={{ maxWidth: 180 ,marginBottom:'12px' }}
                value={review.rating}
                readOnly
              />
              <p className="w-8/12 mb-4">{review.details}</p>
              <h1 className="uppercase font-semibold text-amber-800 text-2xl">
                {review.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
