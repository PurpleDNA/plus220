import { ExternalLink } from "lucide-react";

const ProjectsCard = ({
  category,
  name,
  image,
  desc,
}: {
  category: string;
  name: string;
  image: string;
  desc: string;
}) => {
  return (
    <div className="bg-white rounded-md p-3 flex flex-col md:flex-row gap-4 md:gap-2 w-[90%] md:w-full mx-auto">
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
        <p className="bg-[#F7F7F7] p-1 rounded-md w-fit font-urbanist text-sm">
          {category}
        </p>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
          <p className="text-sm md:text-base">{desc}</p>
        </div>
        <a className="text-xs md:text-base font-urbanist flex gap-2 items-center cursor-pointer hover:underline">
          View Case Study <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <div className="w-full md:w-1/2">
        <img src={image} alt="" className="w-full rounded-md" />
      </div>
    </div>
  );
};

export default ProjectsCard;
