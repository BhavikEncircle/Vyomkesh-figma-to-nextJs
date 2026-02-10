import React from "react";

function Marquee() {
  return (
    <div className="bg-secondary overflow-hidden whitespace-nowrap py-2">
      <div className="flex w-max animate-marquee items-center gap-20 text-xs text-white font-poppins">
        <div className="flex gap-20 items-center">
          <span>
            🌼 Begin Your Herbal Hair Journey with Vyomkesh – Shine the Natural
            Way🌿
          </span>
          <span>
            💚 Welcome to Vyomkesh – Nourishing Your Hair Naturally! 🌿✨
          </span>
          <span>
            🌱 Experience the Power of Nature! Our hair oil is enriched! 💆‍♀️🌟
          </span>
          <span>⭐ Welcome To Our Online Store ⭐</span>
        </div>

        <div className="flex gap-20 items-center" aria-hidden="true">
          <span>
            🌼 Begin Your Herbal Hair Journey with Vyomkesh – Shine the Natural
            Way🌿
          </span>
          <span>
            💚 Welcome to Vyomkesh – Nourishing Your Hair Naturally! 🌿✨
          </span>
          <span>
            🌱 Experience the Power of Nature! Our hair oil is enriched! 💆‍♀️🌟
          </span>
          <span>⭐ Welcome To Our Online Store ⭐</span>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
