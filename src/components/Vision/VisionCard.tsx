import React from "react";

const VisionCard = ({
  number,
  title,
  subheading,
}: {
  number: string;
  title: string;
  subheading: string;
}) => {
  return (
    <div className="border-l border-brand-blue p-4 flex flex-col">
      <h1 className="text-xl text-brand-blue font-bold">{number}</h1>
      <p className="pb-6 text-foreground font-bold">{title}</p>
      <p className="text-foreground">{subheading}</p>
    </div>
  );
};

export default VisionCard;
