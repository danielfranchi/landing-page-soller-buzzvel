import AnimatedWrapper from "../components/AnimatedWrapper";

import CirclePurple from "../assets/circle-purple.png";
import CircleOrange from "../assets/circle-orange.png";
import Desktop from "../assets/desktop.png";

import {
  titleAnimation,
  slideInRightAnimation,
  slideInLeftAnimation,
} from "../utils/animations";

import "../styles/index.css";

const Feature = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-white overflow-hidden pt-36 margin-pages overflow-x-hidden">
      <div className="text-center mb-10">
        <AnimatedWrapper animationProps={titleAnimation}>
          <h2 className="text-[20px] text-deep-orange font-medium leading-[22px] mb-2">
            No more waste
          </h2>
          <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-extrabold text-primary leading-[36px] sm:leading-[50px] md:leading-[61.6px] mb-4">
            Pick the Sun
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper animationProps={slideInLeftAnimation}>
          <p className="text-primary text-base leading-[22px] w-[691px] mx-auto mb-6 lg:mb-24 text-center">
            <span className="block md:hidden">
              Et pulvinar nec interdum integer id urna
            </span>
            <span className="block md:hidden">
              molestie porta nullam. A, donec ornare sed
            </span>
            <span className="block md:hidden">
              turpis pulvinar purus maecenas quam a. Erat
            </span>
            <span className="block md:hidden">
              porttitor pharetra sed in mauris elementum
            </span>
            <span className="block md:hidden">sollicitudin.</span>
            <span className="hidden md:block">
              Et pulvinar nec interdum integer id urna molestie porta nullam. A,
              donec ornare sed turpis pulvinar purus maecenas quam a. Erat
              porttitor pharetra sed in mauris elementum sollicitudin.
            </span>
          </p>
        </AnimatedWrapper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center w-full h-full sm:h-[250px] md:h-auto">
        <AnimatedWrapper animationProps={slideInLeftAnimation}>
          <img
            src={CircleOrange}
            alt="Círculo Laranja"
            className="circle-orange circle-orange-size"
          />
        </AnimatedWrapper>
        <img
          src={Desktop}
          alt="Demo"
          className="w-full h-auto max-w-[1800px] max-h-[1000px] object-contain image-size z-20 image-position"
        />
        <AnimatedWrapper animationProps={slideInRightAnimation}>
          <img
            src={CirclePurple}
            alt="Círculo Roxo"
            className="circle-purple"
          />
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Feature;
