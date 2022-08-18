import React from "react";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Slider from "./Slider";
import "swiper/css";
import { sliderData } from "./Data";

const Project = () => {
  return (
    <>
      <div id="project" className="text-white w-full h-full mx-auto my-20">
        <Header index={1} title="Projects" />
        <div className="max-w-[1000px] w-full mx-auto  my-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            speed={5000}
            loop={true}
            autoplay={{ delay: 2000 }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {sliderData.map((items) => {
              return (
                <>
                  <SwiperSlide key={items.id}>
                    <Slider items={items} />
                  </SwiperSlide>
                  ;
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Project;
