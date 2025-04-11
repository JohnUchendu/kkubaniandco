import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonial";
import React from "react";

const page = () => {
  return (
    <>
      <div className="pt-10">
        <AboutUs />
      </div>
      <Testimonials />
      <Hero/>
    </>
  );
};

export default page;
