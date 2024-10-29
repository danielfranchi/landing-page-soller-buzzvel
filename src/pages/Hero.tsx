import Button from "../components/Button";
import AnimatedWrapper from "../components/AnimatedWrapper";

import LandingImage from "../assets/landingImage.png";
import ThumbImage from "../assets/thumb.png";

import {
  titleAnimation,
  slideInRightAnimation,
  fadeInAnimation,
  slideInLeftAnimation,
  combinedButtonAnimation,
} from "../utils/animations";

import "../styles/index.css";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6">
      <div className="md:w-1/2 text-left px-8">
        <AnimatedWrapper animationProps={titleAnimation}>
          <h1 className="font-roboto text-6xl font-extrabold leading-tight text-primary mt-120 text-center sm:text-left">
            <span className="block text-[8vw] sm:text-[8vw] md:text-[4vw]">
              Get the Sun to
            </span>
            <span className="block text-[8vw] sm:text-[4vw] md:text-[4vw]">
              Power Your Home
            </span>
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper animationProps={slideInLeftAnimation}>
          <p className="font-roboto text-xl font-normal leading-[38.4px] text-primary mt-4 font-p">
            <span className="block md:hidden span-center">
              Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque.
            </span>
            <span className="hidden md:block">
              Viverra viverra nibh enim et aliquam, enim. Tempor, sit
            </span>
            <span className="hidden md:block ">
              mus viverra orci dui consequat turpis scelerisque.
            </span>
          </p>
        </AnimatedWrapper>
        <div className="mt-6 mb-[6rem]">
          <div className="flex justify-center md:justify-start">
            <AnimatedWrapper animationProps={combinedButtonAnimation}>
              <Button text="Request a Quote" color="royal-violet" />
            </AnimatedWrapper>
          </div>
        </div>
        <AnimatedWrapper animationProps={slideInLeftAnimation}>
          <p className="font-roboto text-base font-normal leading-[28.8px] text-primary text-left md:text-left md:text-xl md:leading-[38.4px] font-p">
            <span className="block md:hidden">
              Viverra viverra nibh enim et aliquam, enim.
            </span>
            <span className="block md:hidden">
              Tempor, sit mus viverra orci dui consequat
            </span>
            <span className="block md:hidden">
              turpis scelerisque faucibus.
            </span>
            <span className="hidden md:block">
              "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui"
            </span>
            <span className="hidden md:block">
              "consequat turpis scelerisque faucibus"
            </span>
          </p>
        </AnimatedWrapper>
        <div className="mt-8 flex items-center">
          <AnimatedWrapper animationProps={fadeInAnimation}>
            <img src={ThumbImage} alt="Thumbnail" className="w-12 h-12 mr-2" />
          </AnimatedWrapper>
          <div>
            <AnimatedWrapper animationProps={fadeInAnimation}>
              <p className="font-roboto text-lg font-normal leading-[20px] text-primary mt-2">
                Rwanda Melflor
              </p>
              <p className="font-roboto text-base font-normal leading-[22.4px] text-secondary">
                zerowaste.com
              </p>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end absolute top-0 right-0">
        <AnimatedWrapper animationProps={slideInRightAnimation}>
          <img
            src={LandingImage}
            alt="Solar Panels"
            className="w-full h-auto max-w-xl img-custom"
          />
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default Hero;
