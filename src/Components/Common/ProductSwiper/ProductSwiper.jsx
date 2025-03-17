import React from "react";
import "./ProductSwiper.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import s1 from "../../../assets/Images/s1.jpeg";
import s2 from "../../../assets/Images/s2.jpeg";
import s3 from "../../../assets/Images/s3.jpeg";
import s4 from "../../../assets/Images/s4.jpeg";
import s5 from "../../../assets/Images/s5.jpeg";
import s6 from "../../../assets/Images/s6.jpeg";
import s7 from "../../../assets/Images/s7.jpeg";
import s8 from "../../../assets/Images/s8.jpeg";
import { Link } from "react-router-dom";

const ProductSwiper = () => {
  const Product = [
    { image: s1, name: "Best Headphones", price: "Grab now", link: "" },
    { image: s2, name: "", price: "", link: "" },
    { image: s3, name: "", price: "", link: "" },
    { image: s4, name: "", price: "", link: "" },
    { image: s5, name: "", price: "", link: "" },
    { image: s6, name: "", price: "", link: "" },
    { image: s7, name: "", price: "", link: "" },
    { image: s8, name: "", price: "", link: "" },
  ];

  return (
    <div>
      <div className="swper-main-cont">
          <div className="swiper-head-top">
              Best electronic items
              <div className="swiper-head-topbtn">
                <button className="btn-prev">Prev</button>
              </div>
          </div>
          <Swiper
        spaceBetween={10}
        slidesPerView={5}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="product_slider"
      >
        {Product.map((item, index) => (
          <SwiperSlide className="swiper-per-image" key={index}>
            <div className="product-box">
              <Link to={item.link}>
                <img src={item.image} alt={`imagePath${index + 1}`} />
              </Link>
              <div className="product_info">{item.name}</div>
              <div className="product_price">{item.price}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      </div>
     
    </div>
  );
};

export default ProductSwiper;
