import Button from "../components/Button";
import AnimatedWrapper from "../components/AnimatedWrapper";

import Macbook from "../assets/macbook.png";

import { titleAnimation, slideInRightAnimation } from "../utils/animations";

const CallToAction = () => {
  return (
    <div className="bg-sunset-violet text-white py-8 px-4 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
        <div className="flex flex-col space-y-4 lg:w-3/4">
          <AnimatedWrapper animationProps={titleAnimation}>
            <h2 className="text-yellow-gold text-[20px] font-medium leading-[22px] font-roboto ml-4 lg:ml-0 pb-4">
              Get the Sun to power your home
            </h2>
            <h1 className="font-roboto text-[32px] leading-[35.2px] ml-4 lg:ml-0 md:text-[56px] md:leading-[61.6px] font-extrabold mb-4">
              All the power that you need for{" "}
              <span className="block">your house is now available</span>
            </h1>
          </AnimatedWrapper>
        </div>
        <div className="flex flex-col items-start space-y-4 mt-4 lg:mt-0 lg:w-1/4 lg:items-end">
          <AnimatedWrapper animationProps={slideInRightAnimation}>
            <Button text="Request a Quote" color="yellow-gold" />
            <p className="text-[18px] font-normal leading-[28.8px] text-center lg:text-right font-roboto pt-4">
              Egestas fringilla aliquam leo
            </p>
          </AnimatedWrapper>
        </div>
      </div>
      <img src={Macbook} alt="Macbook" className="mt-8 w-[80%] sm:w-auto" />
    </div>
  );
};

export default CallToAction;
