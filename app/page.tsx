import AboutUs from "@/components/AboutUs";
import ClientLogos from "@/components/clients";
import Hero from "@/components/Hero";
import OurServices from "@/components/Services";

import Welcome from "@/components/Welcome";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <AboutUs />
      <OurServices />
      <ClientLogos />
    </div>
  );
};

export default page;
