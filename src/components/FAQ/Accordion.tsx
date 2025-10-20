import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "../ui/accordion";

const AccordionComp = ({
  question,
  answer,
  value,
}: {
  question: string;
  answer: string;
  value: string;
}) => {
  return (
    <AccordionItem value={value} className="w-2/3 mx-auto">
      <AccordionTrigger className="bg-white rounded-t-md p-3 rounded-b-none">
        {question}
      </AccordionTrigger>
      <AccordionContent className="font-instrumental bg-white rounded-b-md p-3">
        <p>{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionComp;
