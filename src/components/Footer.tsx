import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white px-4 pb-5 flex flex-col items-center lg:flex-row lg:justify-between w-full max-w-full mx-auto my-8">
      <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-2 lg:ml-20">
        <img src={Logo} alt="Logo" className="h-auto" />
        <p className="text-primary text-[16px] font-roboto leading-[22.4px] text-center lg:text-left">
          @ 2023 Soller, Inc. All rights reserved.
        </p>
      </div>
      <div className="flex space-x-6 text-primary text-[16px] font-roboto leading-[22.4px] mt-4 lg:mt-0 lg:mr-20">
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Support
        </a>
      </div>
    </footer>
  );
};

export default Footer;
