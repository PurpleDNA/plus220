import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-start py-16 md:py-28 px-6 overflow-hidden flex-col space-y-6 justify-center"
    >
      <div className="absolute inset-0 -z-10 h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/heroheader/blurry-background.png"
          alt="Background gradient"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="max-w-5xl mx-auto text-center z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
          <Image
            src="/assets/heroheader/settings-logo.png"
            alt="settings icon"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span className="text-sm font-medium text-white/90 tracking-widest font-urbanist">
            Practical systems. Real results.
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight font-jakarta">
          Grow Your Business With Smart Digital Solutions Built for Local
          Businesses
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          We design practical, results-driven solutions that help service
          businesses manage operations, capture customers, and grow, supported
          by clean, effective web design.
        </p>

        <a href="https://cal.com/plus220-studio/15-minute-chat" target="_blank">
          <Button
            variant="ghost"
            className="relative bg-white text-brand-blue hover:bg-white/90 rounded-full hover:scale-105 px-5 py-3 h-auto w-full md:w-max [box-shadow:rgb(204,219,232)_0px_3px_6px_0px_inset,rgba(255,255,255,0.5)_0px_-3px_6px_1px_inset]"
          >
            Book a Call Now
          </Button>
        </a>
      </div>
    </section>
  );
}
