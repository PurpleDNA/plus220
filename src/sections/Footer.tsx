import Image from "next/image";
const Footer = () => {
  return (
    <footer className="text-xs my-2">
      <div className="w-full flex justify-center px-6 md:hidden py-4">
        <Image
          src="/assets/Footer/LogoFooter.png"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <div className="flex justify-between items-center px-6 relative">
        <p>&copy; {new Date().getFullYear()} Plus220 Studio 2026</p>
        <Image
          src="/assets/Footer/LogoFooter.png"
          alt="logo"
          width={100}
          height={100}
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex gap-4 md:gap-10 items-center">
          <a href="https://www.instagram.com/plus220_studio/" target="_blank">
            <Image
              src="/assets/Footer/instagram.png"
              alt="instagram"
              width={20}
              height={20}
            />
          </a>
          <a href="mailto:team@plus220.com">
            <Image
              src="/assets/Footer/mail.png"
              alt="mail"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
