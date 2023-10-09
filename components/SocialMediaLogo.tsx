import { IconType } from "react-icons";

interface SocialMediaLogoProps {
  Icon: IconType;
}
const SocialMediaLogo = ({ Icon }: SocialMediaLogoProps) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-l from-gradient-primary  hover:to-emerald-500 rounded-full h-[70px] w-[70px] cursor-pointer group">
      <Icon className="text-3xl text-text-primary group-hover:scale-110 transition-transform ease-in duration-200 group-hover:rotate-3" />
    </div>
  );
};

export { SocialMediaLogo };
