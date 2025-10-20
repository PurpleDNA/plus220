import AccordionComp from "./Accordion";
import { Accordion } from "../ui/accordion";
const faqs = [
  {
    question: "What types of healthcare organizations do you work with?",
    answer:
      " We work with hospitals, clinics, specialty centers, dental offices, pharmacies, and health startups of all sizes, anywhere technology can improve patient experience or operations.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      " Timelines depend on the project’s scope. Most websites take 3–5 weeks, while mobile apps and dashboards may take 6–10 weeks.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      " Yes. We manage everything from UX/UI design and branding to front-end and back-end development, a complete, done-for-you process.",
  },
  {
    question: "Can you work with our existing systems or software?",
    answer:
      " Absolutely. We can integrate your new product with existing tools like hospital management systems, CRMs, or appointment platforms.",
  },
  {
    question: "How do we get started?",
    answer:
      " Simply book a call with our team. We’ll discuss your goals, audience, and tech needs, then send a clear project proposal.",
  },
  {
    question: "What if we need updates or support after launch?",
    answer:
      " We offer flexible post-launch support and maintenance plans to keep your digital product running smoothly and up to date.",
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
