// import { ExternalLink } from "lucide-react";

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
    <div className="bg-white rounded-md p-3 flex flex-col md:flex-row gap-4 md:gap-2 w-[90%] md:w-full md:max-w-5xl mx-auto">
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
        <p className="bg-[#F7F7F7] p-1 rounded-md w-fit font-urbanist text-sm">
          {category}
        </p>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
          <p className="text-sm md:text-base">{desc}</p>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          <div className="h-1 w-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={image} alt="" className="w-full rounded-md" />
      </div>
    </div>
  );
};

export default ProjectsCard;
