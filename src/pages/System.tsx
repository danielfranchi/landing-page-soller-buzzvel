import AnimatedWrapper from "../components/AnimatedWrapper";

import MobileApp from "../assets/mobile-app.png";
import BlobOrange from "../assets/blob-orange.png";

import { slideInLeftAnimation, titleAnimation } from "../utils/animations";

import "../styles/index.css";

const System = () => {
  return (
    <div className="relative grid grid-cols-1 gap-8 bg-white p-8 md:grid-cols-[1.5fr_1fr]">
      <div className="relative flex justify-center items-center order-last md:order-last">
        <img
          src={BlobOrange}
          alt="Blob Orange"
          className="absolute top-0 left-0 w-full max-w-[600px] md:max-w-[550px] sm:max-w-[300px] h-auto positioning-image-blob-orange imgage-blob-orange"
        />
        <img
          src={MobileApp}
          alt="Mobile Mockup"
          className="relative z-10 w-full max-w-[300px] md:max-w-[500px] h-auto rounded-lg positioning-image-mobile-app imagem-mobile"
        />
      </div>
      <div className="flex flex-col justify-center order-first md:order-first">
        <AnimatedWrapper animationProps={titleAnimation}>
          <h2 className="text-[20px] font-medium leading-[22px] text-deep-orange">
            System features
          </h2>
          <h1 className="text-[32px] sm:text-[56px] font-extrabold leading-tight sm:leading-[61.6px] text-primary mt-4">
            Powerful features
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper animationProps={slideInLeftAnimation}>
          <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-primary mt-4">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 mt-8">
          <div className="custom-width">
            <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-primary">
              Erat sit
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-primary mt-4">
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </p>
          </div>
          <div className="custom-width">
            <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-primary">
              Ullamcorper arcu
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-primary mt-4">
              Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
              auctor habitant duis dictum.
            </p>
          </div>
          <div className="custom-width">
            <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-primary">
              Et pellentesque
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-primary mt-4">
              Mi vitae, massa eu molestie massa euismod volutpat condimentum.
              Blandit molestie ullamcorper hendrerit purus lorem vulputate.
            </p>
          </div>
          <div className="custom-width">
            <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-primary">
              Amet egestas
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-primary mt-4">
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
              velit et, ullamcorper malesuada amet, felis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
