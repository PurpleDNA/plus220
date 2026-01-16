import Accordeon from "@/components/FAQ/Accordeon";

const faqs = [
  {
    question: " How do we communicate during the project?",
    answer:
      "We primarily communicate via Telegram for fast, clear updates. Calls can be scheduled when needed to discuss progress or feedback.",
  },
  {
    question: " How does payment work?",
    answer:
      "We require 50% upfront to begin the project. The remaining 50% is paid upon completion, before final handoff or launch.",
  },
  {
    question: " How long does a typical project take?",
    answer:
      "Timelines vary by project scope, but most websites or platforms take 2–4 weeks from kickoff to launch.",
  },
  {
    question: " Will I be involved during the process?",
    answer:
      "Yes. You’ll receive regular updates and previews, and we’ll request your feedback at key stages to ensure everything aligns with your goals.",
  },
  {
    question: "Do you provide updates after launch?",
    answer:
      "Yes. We offer free updates and fixes for up to 7 days after launch to ensure everything runs smoothly.",
  },
  {
    question: " Do you offer ongoing support or maintenance?",
    answer:
      "At this time, we do not offer ongoing support or maintenance after the post-launch update period. Any future updates or additional work can be discussed as a new project.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We specialize in service-based businesses such as HVAC companies, plumbers, salons, barbers, and other small to medium-sized businesses.",
  },
  {
    question: " Can I request changes or revisions?",
    answer:
      "Absolutely. We offer unlimited revisions during development to make sure you’re fully satisfied before launch.",
  },
];

const FAQ = () => {
  return (
    <section className="section-80">
      <h1 className="section-heading">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {faqs.map((faq) => (
          <Accordeon key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
