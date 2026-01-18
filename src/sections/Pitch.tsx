/* eslint-disable @next/next/no-img-element */
import PitchCard from "@/components/Pitch/PitchCard";
import React from "react";
// import Image from "next/image";

const pitchData = [
  {
    icon: "/assets/Pitch/barchart-blue.png",
    title: "Built for Service Businesses",
    subheading:
      "We specialize in working with HVAC companies, plumbers, salons, barbers, and other service-based businesses, so we design with your workflow in mind.",
  },
  {
    icon: "/assets/Pitch/gemini-blue.png",
    title: "Website & Mobile App Design",
    subheading:
      "Modern, fast, mobile-friendly websites designed to attract customers and convert visits into real inquiries..",
  },
];

function Pitch() {
  return (
    <section className="section-80 py-0">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="section-heading">
          Everything You Need to Run Your Business Smarter
        </h1>
        <p className="section-subheading">
          We design practical, results-driven solutions that help your business
          run smoother, supported by clean, effective web design. We focus on
          solving real operational problems with tailored digital solutions, not
          one-size-fits-all templates.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        <img
          src="/assets/Pitch/dashboardiness.png"
          alt="Dashboard analytics"
          className="w-full h-full md:w-1/2 md:h-1/2"
        />
        <div className="flex flex-col gap-4 w-full md:w-1/2 justify-between">
          {pitchData.map((item, index) => (
            <PitchCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pitch;
