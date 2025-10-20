import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section id="about">
      <div className="bg-[#F5F5F5] ">
        <div className="intersection">
          <h1 className="heading">
            We Design Digital Products for{" "}
            <span className="text-Bblue">Modern Medical Practices</span>
          </h1>
          <p className="text-center w-[90%] md:w-3/5 text-sm md:text-base">
            We help hospitals, clinics, and specialists build custom websites,
            dashboards, and mobile apps that enhance care and patient
            experience.
          </p>
          <div className="flex gap-4 mx-auto items-center">
            <Button className="bg-Bblue">Book a Call</Button>
            <div className="bg-[#E8E8E8] rounded-full p-3">
              <img src="/assets/icons/AT.png" alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
