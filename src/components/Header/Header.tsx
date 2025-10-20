import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      const headerOffset = 65; // Height of the sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close menu after clicking a link
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="w-full bg-white sticky top-0 z-50">
        <div className="flex justify-between items-center py-3 px-2 container mx-auto ">
          <img src="/assets/icons/logo.png" alt="" className="w-15" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
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
            <a
              href="https://cal.com/plus220-connect-team/15-minute-chat"
              target="_blank"
            >
              <Button className=" bg-Bblue ">Book a Call</Button>
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#081028] transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#081028] transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#081028] transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-20 pb-8 px-6">
          <nav className="flex flex-col gap-8">
            {navs.map((nav) => (
              <a
                key={nav.name}
                href={nav.link}
                onClick={(e) => handleClick(e, nav.link)}
                className={`text-2xl transition-colors font-urbanist ${
                  activeSection === nav.link.substring(1)
                    ? "text-[#081028] font-bold"
                    : "text-gray-600"
                }`}
              >
                {nav.name}
              </a>
            ))}
          </nav>

          <a
            href="https://cal.com/plus220-connect-team/15-minute-chat"
            target="_blank"
          >
            <Button className="bg-Bblue w-full py-6 text-lg">Book a Call</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
