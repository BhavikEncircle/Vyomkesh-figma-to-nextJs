"use client";
import BestSeller from "@/components/BestSeller";
import BudgetCombo from "@/components/BudgetCombo";
import Certifications from "@/components/Certifications";
import Comparision from "@/components/Comparision";
import FAQ from "@/components/FAQ";
import GrowthFormula from "@/components/GrowthFormula";
import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import Marquee from "@/components/Marquee";
import Socials from "@/components/Socials";
import Testimonials from "@/components/Testimonials";
import React from "react";

import { useEffect } from "react";
function Page() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealedElements = document.querySelectorAll(".reveal");
    revealedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-white">
      <div className="reveal active">
        <Hero />
      </div>

      <Marquee />

      <div className="reveal">
        <LatestProducts />
      </div>

      <div className="reveal">
        <Certifications />
      </div>

      <div className="reveal">
        <BudgetCombo />
      </div>

      <div className="reveal">
        <GrowthFormula />
      </div>

      <div className="reveal">
        <Comparision />
      </div>

      <div className="reveal">
        <BestSeller />
      </div>
      <div className="reveal">
        <Testimonials />
      </div>
      <div className="reveal">
        <FAQ />
      </div>
      <div className="reveal">
        <Socials />
      </div>
    </div>
  );
}

export default Page;
