import ProjectsCard from "./ProjectsCard";

const cardDetails = [
  {
    category: "Mobile App Development",
    name: "Doutor Fácil",
    desc: "A telemedicine platform that bridges the gap between patients and doctors in Brazil. The app provides users with a secure space to consult licensed professionals, access medical advice, and manage prescriptions, all from the comfort of their homes",
    image: "/assets/two_phones.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#F5F5F5]">
      <div className="intersection">
        <h1 className="heading">Projects We've Brought To Life</h1>
        <div>
          {cardDetails.map((card) => (
            <ProjectsCard
              category={card.category}
              name={card.name}
              image={card.image}
              desc={card.desc}
              key={card.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
