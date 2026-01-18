/* eslint-disable @next/next/no-img-element */
import React from "react";

const images = [
  "/assets/Projects/top-special.png",
  "/assets/Projects/n8n.png",
  "/assets/Projects/aguda.png",
];

const Projects = () => {
  return (
    <section className="section-80">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="section-heading">Projects That Deliver Real Results</h1>
        <p className="section-subheading">
          Here are some examples of websites, dashboards, and automation systems
          we’ve built to help businesses attract more customers and manage their
          operations more efficiently.
        </p>
        <div className="flex items-center flex-col md:flex-row gap-4 justify-between    ">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Project image"
              className="w-full h-auto md:w-[30%]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
