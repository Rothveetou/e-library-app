import React from "react";
// Import Swiper React components
import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Profile from "../../assets/profile.jpg";
import { Avatar } from "flowbite-react";

import "./Review.css";
import { HiStar } from "react-icons/hi2";

// import required modules

function ReviewSwiper() {
  return (
    <SwiperSlide>
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
            Unlock new levels of shopper understanding with Yogi, built for the
            consumer goods industry. Benefit from our unmatched sentiment
            analysis to delve deep into shopper perceptions of both your
            products and your competitors', uncovering the insights you need to
            succeed.
          </p>
          <Avatar
            className="w-12 mb-4"
            img={Profile}
            alt="avatar of Jese"
            rounded
          />
          <h5 className="text-lg text-start font-medium">Richhard Meng</h5>
          <p className="text-start text-base">Software Engineer</p>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default ReviewSwiper;
