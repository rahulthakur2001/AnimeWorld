import React from "react";
import "./Slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import s1 from "../../../assets/Images/slider_1.jpg";
import s2 from "../../../assets/Images/slider_2.jpg";
import s3 from "../../../assets/Images/slider_3.png";
import s4 from "../../../assets/Images/slider_4.jpeg";
const Slider = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={s1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
