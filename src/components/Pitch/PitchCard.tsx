import Image from "next/image";
const PitchCard = ({
  icon,
  title,
  subheading,
}: {
  icon: string;
  title: string;
  subheading: string;
}) => {
  return (
    <div className="flex flex-col gap-3 py-10 px-5 rounded-xl bg-[#F6F6F6] backdrop-blur-3xl relative overflow-hidden">
      <Image
        src="/assets/pitch/blue cloud.png"
        alt="blue cloud"
        className="absolute -left-8 -top-8 -z-10 blur-xs"
        width={150}
        height={150}
      />
      <div>
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h1 className="text-foreground font-bold">{title}</h1>
      <div className="text-foreground">{subheading}</div>
    </div>
  );
};

export default PitchCard;
