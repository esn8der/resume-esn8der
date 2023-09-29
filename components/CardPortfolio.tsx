import Image from "next/image";

interface CardPortfolioProps {
    img: string;
    title: string;
    description: string;
}
const CardPortfolio = ({img, title, description}: CardPortfolioProps) => {
  return (
    <div className="rounded-lg overflow-hidden bg-white hover:bg-teal-100 transition-colors duration-300 ease-in max-w-fit min-w-fit basis-1/3 group ">
      <div className="p-4">
        <Image
          className="rounded-lg group-hover:scale-105 transition-transform duration-200 ease-in"
          src={img}
          alt=""
          width={352}
          height={198}
        />
      </div>
      <div className="p-4 max-w-[384px] self-center ">
        <h2 className="text-xl font-bold mb-2 self-center">
          {title}
        </h2>
        <p className="text-gray-700">
          {description}
        </p>
        <span className="text-text-secondary text-lg font-bold">Read more</span>
      </div>
    </div>
  );
};

export { CardPortfolio };