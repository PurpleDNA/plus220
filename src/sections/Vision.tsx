import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import VisionCard from "@/components/Vision/VisionCard";

const visionData = [
  {
    number: "01.",
    title: "Discovery & Strategy",
    subheading:
      "We start with a conversation to understand your business, your pain points, and your goals. Then we recommend the best solution, timeline, and approach tailored to you.",
  },
  {
    number: "02.",
    title: "Design, Build & Iterate",
    subheading:
      "Once pricing is agreed, we begin design and development. You’re kept in the loop at every stage, with unlimited revisions to make sure everything feels right.",
  },
  {
    number: "03.",
    title: "Launch & Handoff",
    subheading:
      "After final approval, we launch your solution and hand everything over smoothly,  fully functional, tested, and ready to help your business grow.",
  },
];

const Vision = () => {
  return (
    <section className="section-80 bg-[#F3F6FF] backdrop-blur-3xl space-y-12">
      <Image
        src="/assets/vision/right-ellipse.png"
        alt="vision"
        width={250}
        height={250}
        className="absolute top-0 right-0 -z-10"
      />
      <Image
        src="/assets/vision/left-ellipse.png"
        alt="vision"
        width={250}
        height={250}
        className="absolute -bottom-5 left-0 -z-10"
      />
      <div className="w-full flex justify-between flex-col lg:flex-row gap-3 ">
        <div className="flex gap-4 w-full lg:w-2/3 ">
          <Image
            src="/assets/vision/logo-half.png"
            alt="vision"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-foreground section-heading text-sm lg:text-4xl">
              How We Bring Your Vision to Life
            </h1>
            <p className="text-foreground section-subheading text-xs lg:text-lg">
              We keep things clear, collaborative, and flexible, so you always
              know what’s happening and why.
            </p>
          </div>
        </div>
        <a href="https://cal.com/plus220-studio/15-minute-chat" target="_blank">
          <Button
            variant="ghost"
            className="relative bg-white text-brand-blue hover:bg-white/90 rounded-full hover:scale-105 px-5 py-3 w-full md:w-max [box-shadow:rgb(204,219,232)_0px_3px_6px_0px_inset,rgba(255,255,255,0.5)_0px_-3px_6px_1px_inset]"
          >
            Book a Call Now
          </Button>
        </a>
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        {visionData.map((vision) => (
          <VisionCard key={vision.number} {...vision} />
        ))}
      </div>
    </section>
  );
};

export default Vision;
