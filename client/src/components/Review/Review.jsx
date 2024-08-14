import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Profile from "../../assets/profile.jpg";
import { Avatar } from "flowbite-react";

import "./Review.css";

// import required modules
import { Pagination } from "swiper/modules";
import { HiStar } from "react-icons/hi2";

function Review() {
  return (
    <div className="my-13 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center leading-snug mb-10">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-600 flex gap-2">
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
              </div>

              <div className="mt-7">
                <p className="mb-5">
                  Unlock new levels of shopper understanding with Yogi, built
                  for the consumer goods industry. Benefit from our unmatched
                  sentiment analysis to delve deep into shopper perceptions of
                  both your products and your competitors', uncovering the
                  insights you need to succeed.
                </p>
                <Avatar
                  className="w-12 mb-4"
                  img={Profile}
                  alt="avatar of Jese"
                  rounded
                />
                <h5 className="text-lg text-start font-medium">
                  Richhard Meng
                </h5>
                <p className="text-start text-base">Software Engineer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-600 flex gap-2">
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
              </div>

              <div className="mt-7">
                <p className="mb-5">
                  Unlock new levels of shopper understanding with Yogi, built
                  for the consumer goods industry. Benefit from our unmatched
                  sentiment analysis to delve deep into shopper perceptions of
                  both your products and your competitors', uncovering the
                  insights you need to succeed.
                </p>
                <Avatar
                  className="w-12 mb-4"
                  img={Profile}
                  alt="avatar of Jese"
                  rounded
                />
                <h5 className="text-lg text-start font-medium">
                  Richhard Meng
                </h5>
                <p className="text-start text-base">Software Engineer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-600 flex gap-2">
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
              </div>

              <div className="mt-7">
                <p className="mb-5">
                  Unlock new levels of shopper understanding with Yogi, built
                  for the consumer goods industry. Benefit from our unmatched
                  sentiment analysis to delve deep into shopper perceptions of
                  both your products and your competitors', uncovering the
                  insights you need to succeed.
                </p>
                <Avatar
                  className="w-12 mb-4"
                  img={Profile}
                  alt="avatar of Jese"
                  rounded
                />
                <h5 className="text-lg text-start font-medium">
                  Richhard Meng
                </h5>
                <p className="text-start text-base">Software Engineer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
