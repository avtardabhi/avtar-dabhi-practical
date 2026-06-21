import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import brand1 from "../../assets/images/brand/partner1.png";
import brand2 from "../../assets/images/brand/partner2.png";
import brand3 from "../../assets/images/brand/partner3.png";
import brand4 from "../../assets/images/brand/partner4.png";
import brand5 from "../../assets/images/brand/partner5.png";
import brand6 from "../../assets/images/brand/partner6.png";
import brand7 from "../../assets/images/brand/partner7.png";
import brand8 from "../../assets/images/brand/partner9.png";

function BrandPartner() {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
  ];

  return (
    <section className="brand-partner">
      <div className="container-fluid">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={7}
          loop={true}
          autoplay={{
            delay: 2000,

            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },

            576: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 4,
            },

            992: {
              slidesPerView: 6,
            },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="brand-item">
                <img src={brand} alt="brand" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BrandPartner;
