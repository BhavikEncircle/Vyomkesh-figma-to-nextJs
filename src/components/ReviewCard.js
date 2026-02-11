import React from "react";
import FiveStars from "./ui/common/FiveStars";
import { Reviews } from "./data/Reviews";

function ReviewCard() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-10 items-center justify-center w-full mx-auto px-4 lg:px-0">
      {Reviews.map((review) => (
        <div
          key={review.id}
          className="bg-secondary py-12 lg:py-20 w-full lg:w-130 px-6 min-h-[300px] lg:h-75 flex flex-col gap-5 justify-center text-white rounded-xl shadow-sm"
        >
          <FiveStars />
          <h2 className="font-cormorant font-semibold text-2xl lg:text-3xl">
            {review.title}
          </h2>
          <p className="text-base lg:text-lg">{review.content}</p>
          <hr className="border-white/20" />
          <h5 className="font-medium text-lg">{review.author}</h5>
        </div>
      ))}
    </div>
  );
}

export default ReviewCard;
