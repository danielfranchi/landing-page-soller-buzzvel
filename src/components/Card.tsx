interface CardProps {
  imageSrc: string;
  mainText: string;
  personName: string;
  mileage: string;
}

const Card = ({ imageSrc, mainText, personName, mileage }: CardProps) => {
  return (
    <div className="w-[364px] h-[442px] p-[32px] gap-[16px] border rounded-lg bg-white">
      <div className="w-[300px] h-[202px] mb-[25px]">
        <p className="font-sans text-[18px] font-normal leading-[28.8px] text-left mt-[18px] text-primary">
          {mainText}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img
          src={imageSrc}
          alt="Descrição da imagem"
          className="w-[64px] h-[64px] rounded-[100px] opacity-100"
        />
        <div>
          <p className="font-sans text-[18px] font-normal leading-[28.8px] text-left text-primary">
            {personName}
          </p>
          <p className="font-sans text-[16px] font-normal leading-[22.4px] text-left text-secondary">
            {mileage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
