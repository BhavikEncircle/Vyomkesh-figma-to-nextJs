"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import FiveStars from "./ui/common/FiveStars";
import { Reviews } from "./data/Reviews";

import "swiper/css";
import "swiper/css/pagination";

export default function ReviewCard() {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-14"
      >
        {Reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-secondary py-12 lg:py-20 w-full px-6 min-h-[300px] lg:h-75 flex flex-col gap-5 justify-center text-white rounded-xl shadow-sm cursor-pointer">
              <FiveStars />
              <h2 className="font-cormorant font-semibold text-2xl lg:text-3xl">
                {review.title}
              </h2>
              <p className="text-base lg:text-lg">{review.content}</p>
              <hr className="border-white/20" />
              <h5 className="font-medium text-lg">{review.author}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
