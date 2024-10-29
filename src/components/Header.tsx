import Button from "./Button";

import HeadsetIcon from "../assets/headset.svg";

import { linkVariants } from "../utils/animations";

import AnimatedWrapper from "./AnimatedWrapper";

import "../styles/index.css";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white">
      <div className="flex items-center gap-4">
        <span
          className="font-roboto font-bold text-2xl leading-9 ml-10 z-20 sm:ml-4 titleMenu"
          style={{ width: "81px", height: "36px" }}
        >
          soller
        </span>
        <nav className="hidden sm:flex gap-4 md:gap-6 items-center">
          {["Products", "Solutions", "Services", "Configure"].map(
            (text, index) => (
              <AnimatedWrapper
                key={text}
                animationProps={{
                  initial: "hidden",
                  animate: "visible",
                  variants: linkVariants,
                  transition: { delay: index * 0.3, duration: 1.2 },
                }}
              >
                <a
                  href="#"
                  className={`px-2 py-3 text-sm md:text-base font-medium text-black leading-6 tracking-[0.5px] text-left hover:opacity-80 flex items-center ${
                    index >= 2 ? "hidden lg:block" : ""
                  }`}
                >
                  {text}
                </a>
              </AnimatedWrapper>
            )
          )}
        </nav>
      </div>
      <div className="flex items-center relative z-20">
        <div className="hidden lg:flex items-center">
          <img
            src={HeadsetIcon}
            alt="Phone Icon"
            className="mr-2"
            style={{ width: "20px", height: "20px" }}
          />
          <span className="font-roboto font-medium text-base leading-6 tracking-[0.5px] text-left text-custom-blue mr-14 whitespace-nowrap">
            555 818 282
          </span>
        </div>
        <div className="hidden lg:block mr-10">
          <Button text="Request a Quote" color="royal-violet" />
        </div>
      </div>
    </header>
  );
};

export default Header;
