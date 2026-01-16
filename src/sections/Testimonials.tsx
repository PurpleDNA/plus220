import React from "react";
import TestimonialCard from "@/components/Testimonials/TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Ayishetu Yakubu",
    position: "CEO Top Special Bakery",
    testimonial:
      "The management platform built by +220 Studios transformed how we track production, sales, and expenses across the business. We now have clear visibility into our operations, better control over daily activities, and the confidence to make informed, data-driven decisions that support our growth.",
    image: "/assets/testimonials/testiTopSpecial.png",
  },
  {
    name: "Fatah Kadiri",
    position: "Founder & CEO Aguda Partners",
    testimonial:
      "I couldn’t be happier with the incredible website +220 developed for my company! From start to finish, their team demonstrated professionalism, creativity, and an unwavering commitment to delivering a top-notch product.They took the time to understand our needs, brought innovative ideas to the table, and kept us updated throughout the process. ",
    image: "/assets/testimonials/testiAguda.png",
  },
];

const Testimonials = () => {
  return (
    <div className="section-80">
      <h1 className="section-heading">Trusted by Growing Businesses</h1>
      <p className="section-subheading">
        Don&apos;t just take our word for it, here&apos;s what business owners
        say about working with +220 studios
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full md:px-10">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
