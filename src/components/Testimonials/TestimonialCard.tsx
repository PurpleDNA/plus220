/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

interface TestimonialCardProps {
  image: string;
  name: string;
  position: string;
  testimonial: string;
}

const TestimonialCard = ({
  image,
  name,
  position,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <div className="bg-[#F6F6F6] p-4 md:p-10 rounded-md flex flex-col gap-6 md:gap-10 h-full">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 relative">
          <img src={image} alt={name} className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg md:text-2xl font-bold text-foreground font-jakarta leading-tight">
            {name}
          </h3>
          <p className="text-sm md:text-lg text-foreground/60 font-medium">
            {position}
          </p>
        </div>
      </div>

      <p className="text-sm text-foreground leading-relaxed md:leading-[1.4]">
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;
