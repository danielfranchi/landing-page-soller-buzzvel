import Carousel from "../components/Carousel";
import Button from "../components/Button";

import { titleAnimation, slideInRightAnimation } from "../utils/animations";
import AnimatedWrapper from "../components/AnimatedWrapper";

const Meet = () => {
  return (
    <div className="bg-royal-violet p-8 px-[5rem] pt-[5rem] text-white flex flex-col lg:flex-col items-center justify-between">
      <div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-between w-full text-center sm:text-left">
        <div className="lg:w-3/4 mb-4 lg:mb-0 container-mobile">
          <AnimatedWrapper animationProps={titleAnimation}>
            <h2 className="text-yellow-gold text-[20px] font-medium leading-[22px] font-roboto">
              Join other Sun harvesters
            </h2>
            <h1 className="font-sans text-3xl lg:text-4xl font-extrabold mt-2 sm:text-left">
              Make something awesome
            </h1>
          </AnimatedWrapper>
          <AnimatedWrapper animationProps={slideInRightAnimation}>
            <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-white mt-4">
              <span className="block">
                Dui euismod iaculis libero, aliquet vitae et elementum
                porttitor. Eleifend mi tristique
              </span>
              <span className="block">
                condimentum congue fusce nunc, donec magnis commodo.
              </span>
            </p>
          </AnimatedWrapper>
        </div>
        <div className="flex flex-col items-start space-y-4 mt-4 lg:mt-0 lg:w-1/4 lg:items-end sm:w-[220px]">
          <Button text="Request a Quote" color="yellow-gold" />
        </div>
      </div>
      <div className="w-full mt-8">
        <Carousel />
      </div>
    </div>
  );
};

export default Meet;
