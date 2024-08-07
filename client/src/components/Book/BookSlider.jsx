import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./BookSlider.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";

function BookSlider({ books }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full h-full"
      >
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            <div className="py-5">
              <Link to={`/book/${book._id}`}>
                <div className="relative">
                  <img src={book.imageURL} alt={book.bookTitle} />
                  <div className="absolute top-3 right-3  bg-blue-500 hover:bg-black p-2 rounded">
                    <HiMiniShoppingCart />
                  </div>
                </div>
                <div>
                  <div>
                    <h3>{book.bookTitle}</h3>
                    <p>{book.authorName}</p>
                  </div>
                  <div>
                    <p>$10.000</p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default BookSlider;
