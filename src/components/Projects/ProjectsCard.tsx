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
    <div className="bg-white rounded-md p-3 flex gap-2">
      <div className="w-1/2 flex flex-col justify-between gap-4">
        <p className="bg-[#F7F7F7] p-1 rounded-md w-fit font-urbanist">
          {category}
        </p>
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p>{desc}</p>
        </div>
        <a>View Case Study</a>
      </div>
      <div className="w-1/2">
        <img src={image} alt="" className="w-full rounded-md" />
      </div>
    </div>
  );
};

export default ProjectsCard;
