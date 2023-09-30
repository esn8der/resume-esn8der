import { IconType } from "react-icons"

interface SocialMediaLogoProps {
    Icon: IconType
}
const SocialMediaLogo = ({Icon}: SocialMediaLogoProps) => {
    return (
        <div className="flex justify-center items-center bg-gradient-to-l from-[#005639]  hover:to-[#00d68f] rounded-full h-[70px] w-[70px] cursor-pointer">
          <Icon className="text-3xl text-text-primary" />
        </div>
    )
}

export { SocialMediaLogo }