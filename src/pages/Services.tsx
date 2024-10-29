import AnimatedWrapper from "../components/AnimatedWrapper";

import Mobile from "../assets/mobile.png";
import BlobPurple from "../assets/blob-purple.png";

import { titleAnimation, slideInRightAnimation } from "../utils/animations";

import "../styles/index.css";

const Services = () => {
  return (
    <div className="relative grid grid-cols-1  gap-8 bg-white p-8 md:grid-cols-[1fr_1.5fr]">
      <div className="relative flex justify-center items-center order-last md:order-first">
        <img
          src={BlobPurple}
          alt="Blob Purple"
          className="absolute top-0 left-0 w-full max-w-[600px] md:max-w-[550px] sm:max-w-[300px] h-auto positioning-image-blob-purple"
        />
        <img
          src={Mobile}
          alt="Mobile Mockup"
          className="relative z-10 w-full max-w-[300px] md:max-w-[500px] h-auto rounded-lg positioning-image-mobile imagem-mobile"
        />
      </div>
      <div className="flex flex-col justify-center order-first md:order-last">
        <AnimatedWrapper animationProps={titleAnimation}>
          <h2 className="text-[20px] font-medium leading-[22px] text-deep-orange">
            Services
          </h2>
          <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-extrabold text-primary leading-[36px] sm:leading-[50px] md:leading-[61.6px] mb-4">
            Personalized services
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper animationProps={slideInRightAnimation}>
          <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-primary mt-4">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 mt-8">
          <div className="custom-width">
            <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-primary">
              Et mauris
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-primary mt-4">
              Posuere quis sed mauris non curabitur pretium elementum eget.
              Feugiat sed maecenas eu accumsan tristique.
            </p>
          </div>
          <div className="custom-width">
            <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-primary">
              Eget sit
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-primary mt-4">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="custom-width">
            <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-primary">
              Imperdiet pellentesque
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-primary mt-4">
              Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
              viverra parturient tristique nulla.
            </p>
          </div>
          <div className="custom-width">
            <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-primary">
              Non libero
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-[24px] sm:leading-[28px] text-primary mt-4">
              Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus
              ut sed eros, consectetur viverra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
