import { useRef } from "react";

import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Cameron from "../assets/cameron.png";
import Ralph from "../assets/ralph.png";
import Jane from "../assets/jane.png";
import Thumb from "../assets/thumb.png";
import PrevIcon from "../assets/prevIcon.png";
import NextIcon from "../assets/nextIcon.png";

const Carousel = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const cardsData = [
    {
      imageSrc: Jane,
      mainText:
        "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      personName: "Nome 1",
      mileage: "10kWh",
    },
    {
      imageSrc: Ralph,
      mainText:
        "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      personName: "Nome 2",
      mileage: "32kWh",
    },
    {
      imageSrc: Thumb,
      mainText:
        "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      personName: "Nome 3",
      mileage: "6kWh",
    },
    {
      imageSrc: Cameron,
      mainText:
        "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      personName: "Nome 4",
      mileage: "12kWh",
    },
    {
      imageSrc: Cameron,
      mainText:
        "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      personName: "Nome 5",
      mileage: "12kWh",
    },
  ];

  return (
    <div className="bg-royal-violet py-8">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={false}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full max-w-[100%] mx-auto"
      >
        {[...cardsData, ...cardsData].map((card, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center"
            style={{ width: "300px", marginLeft: "50px", marginRight: "32px" }}
          >
            <div className="transform transition-transform duration-300">
              <Card {...card} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-left mt-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="mx-2 mt-4 p-2 bg-royal-violet rounded"
        >
          <img src={PrevIcon} alt="Previous" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="mx-2 mt-4 p-2 bg-royal-violet rounded"
        >
          <img src={NextIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
