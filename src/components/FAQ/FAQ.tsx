import AccordionComp from "./Accordion";
import { Accordion } from "../ui/accordion";
const faqs = [
  {
    question: "What types of healthcare organizations do you work with?",
    answer:
      "We proudly collaborate with a wide range of healthcare providers — from private clinics and hospitals to telehealth startups and wellness brands. Our focus is always on creating technology that simplifies processes, enhances patient care, and supports your team in delivering exceptional service.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on size and complexity, but we always prioritize quality and clear communication. Smaller projects may take just a few weeks, while larger custom builds can span several months. Before we start, we’ll provide a detailed timeline so you know exactly what to expect at every stage.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes — we handle both! Our team brings together creative designers and skilled developers who work hand in hand to deliver visually stunning and highly functional solutions. From concept and user experience to coding and launch, everything is handled in one cohesive process.",
  },
  {
    question: "Can you work with our existing systems or software?",
    answer:
      "Absolutely. We specialize in integrating with existing tools and systems to ensure everything works seamlessly together. Whether you’re using legacy software or modern platforms, we’ll tailor our approach to fit your current setup while enhancing performance, security, and usability.",
  },
  {
    question: "How do we get started?",
    answer:
      "Getting started is simple! We begin with a quick discovery call to understand your goals, challenges, and vision. From there, we’ll create a clear plan tailored to your needs — outlining timelines, deliverables, and next steps. Once you give the green light, our team gets to work bringing your ideas to life.",
  },
  {
    question: "What if we need updates or support after launch?",
    answer:
      "We’ve got you covered long after your project goes live. Our team provides ongoing support, updates, and maintenance to ensure your solution keeps running smoothly and stays aligned with your evolving goals. Whether it’s a quick fix, new feature, or performance optimization, we’ll be right there to help you grow with confidence",
  },
];
const FAQ = () => {
  return (
    <section id="faq" className="bg-[#f5f5f5]">
      <div className="intersection">
        <h1 className="heading">Frequently Asked Questions</h1>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-2.5"
          defaultValue="item-1"
        >
          {faqs.map((faq, idx) => (
            <AccordionComp
              question={faq.question}
              answer={faq.answer}
              key={idx}
              value={String(idx + 1)}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
