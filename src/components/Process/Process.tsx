import { Button } from "../ui/button";
import ProcessCard from "./ProcessCard";
import { motion } from "framer-motion";

const cardDetails = [
  {
    image: "/assets/icons/calendar.png",
    title: "Book a Call",
    desc: "Let's talk goals, users, and business needs. We'll hop on a quick call to understand your product and align expectations.",
  },
  {
    image: "/assets/icons/ink_icon.png",
    title: "Design",
    desc: "After our call and initial payment, we begin designing right away, keeping you in the loop with unlimited revisions.",
  },
  {
    image: "/assets/icons/dev&delivery_icon.png",
    title: "Development & Delivery",
    desc: "Once the design is approved, we move to development and deliver a polished, ready-to-launch digital product.",
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-[#F5F5F5]">
      <div className="intersection">
        <h1 className="heading">How We Bring Your Ideas To Life</h1>
        <div className="flex flex-col gap-6 mx-auto items-center w-full">
          {cardDetails.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="w-full"
            >
              <ProcessCard
                image={card.image}
                title={card.title}
                desc={card.desc}
              />
            </motion.div>
          ))}
        </div>
        {/* <div> */}
        <h1 className="heading_2">Let Us Begin from the First Step</h1>
        {/* </div> */}
        <div className="flex gap-4 mx-auto items-center">
          <Button className="bg-Bblue">Book a Call</Button>
          <div className="bg-[#E8E8E8] rounded-full p-3 hover:scale-90 cursor-pointer transition-all duration-300">
            <img src="/assets/icons/AT.png" alt="" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
