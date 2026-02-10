import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import React from "react";

function page() {
  return (
    <div className="bg-white">
      <Topbar />
      <Navbar />
      <Hero />
      <Marquee />
      <LatestProducts />
    </div>
  );
}

export default page;
