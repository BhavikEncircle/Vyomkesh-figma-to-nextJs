import BestSeller from "@/components/BestSeller";
import BudgetCombo from "@/components/BudgetCombo";
import Certifications from "@/components/Certifications";
import Comparision from "@/components/Comparision";
import FAQ from "@/components/FAQ";
import GrowthFormula from "@/components/GrowthFormula";
import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
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
      <Certifications />
      <BudgetCombo />
      <GrowthFormula />
      <Comparision />
      <BestSeller />
      <Testimonials />
      <FAQ />
    </div>
  );
}

export default page;
