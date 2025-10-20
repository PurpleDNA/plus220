// import { Button } from "../ui/button";

const ProcessCard = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="w-[90%] md:w-2/3 flex rounded-full mx-auto">
      <div className="bg-[#FDFBF0] p-3 items-center justify-center flex w-[30%]">
        <img src={image} alt="" className="w-10 aspect-square" />
      </div>
      <div className="bg-white p-3 space-y-3">
        <h3 className="font-semibold">{title}</h3>
        <p className="font-instrumental">{desc}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
