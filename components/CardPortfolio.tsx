import Image from "next/image";

interface CardPortfolioProps {
  img: string;
  title: string;
  description: string;
}
const CardPortfolio = ({ img, title, description }: CardPortfolioProps) => {
  return (
    <div className="rounded-lg overflow-hidden bg-primaryBG hover:bg-[#00d68f] transition-colors duration-300 ease-in max-w-fit min-w-fit basis-1/3 group ">
      <div className="p-4">
        <Image
          className="rounded-lg group-hover:scale-105 transition-all duration-300 ease-in grayscale group-hover:grayscale-0 group-hover:saturate-200 group-hover:rotate-1 "
          src={img}
          alt="Imagen del repositorio"
          width={352}
          height={198}
        />
      </div>
      <div className="flex flex-col p-4 max-w-[384px] items-start">
        <h2 className="text-xl font-bold mb-2 ">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <a className="mt-2 text-text-secondary text-md font-semibold hover:underline cursor-pointer">
          Read more
        </a>
      </div>
    </div>
  );
};

export { CardPortfolio };
