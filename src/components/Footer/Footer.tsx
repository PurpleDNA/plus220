import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-[#081028]">
      <div className=" bg-[#081028] intersection !py-20">
        <h1 className="heading_2 text-white">Let Us Discuss </h1>
        <div className="flex gap-4 mx-auto items-center">
          <Button className="bg-white text-black transition-all duration-300">
            Book a Call
          </Button>
          <div className="bg-[#394053] rounded-full p-3 hover:scale-90 cursor-pointer transition-all duration-300 ">
            <img
              src="/assets/icons/AT-WHITE.png"
              alt=""
              className="w-5 h-5 text-white  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
