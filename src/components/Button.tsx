interface ButtonProps {
  text: string;
  color: string;
}

const Button = ({ text, color }: ButtonProps) => {
  const textColor =
    color === "royal-violet" ? "text-royal-violet" : "text-yellow-gold";
  const borderColor =
    color === "royal-violet" ? "border-royal-violet" : "border-yellow-gold";
  const hoverClasses =
    color === "royal-violet"
      ? "hover:bg-royal-violet hover:text-yellow-gold"
      : "hover:bg-yellow-gold hover:text-brown";

  return (
    <button
      className={`border-2 px-8 py-2 rounded-full flex items-center justify-center cursor-pointer transition duration-500 ease-in-out ${borderColor} ${textColor} ${hoverClasses}`}
    >
      <span className="mr-2 font-sans font-bold text-[16px] leading-[24px] tracking-[0.5px] text-left">
        {text}
      </span>
      <span>→</span>
    </button>
  );
};

export default Button;
