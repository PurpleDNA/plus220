import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const navs = [
    { name: "About Us", link: "#about" },
    { name: "Our Process", link: "#process" },
    { name: "Our Projects", link: "#projects" },
    { name: "FAQ", link: "#faq" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    const targetId = link.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // Height of the sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="w-full bg-white sticky top-0 z-50">
        <div className="flex justify-between items-center py-3 px-2 container mx-auto ">
          <img src="/assets/icons/logo.png" alt="" className="w-15" />
          <div className="flex gap-8 items-center">
            <nav className="flex gap-6">
              {navs.map((nav) => (
                <a
                  key={nav.name}
                  href={nav.link}
                  onClick={(e) => handleClick(e, nav.link)}
                  className={`transition-colors font-urbanist ${
                    activeSection === nav.link.substring(1)
                      ? "text-[#081028] font-bold"
                      : "text-gray-600 hover:text-[#081028]"
                  }`}
                >
                  {nav.name}
                </a>
              ))}
            </nav>
            <Button className=" bg-Bblue ">Book a Call</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
