import { IconType } from "react-icons"

interface SocialMediaLogoProps {
    Icon: IconType
}
const SocialMediaLogo = ({Icon}: SocialMediaLogoProps) => {
    return (
        <div className="flex justify-center items-center bg-amarillo rounded-full h-[70px] w-[70px]">
          <Icon className="text-3xl text-azul" />
        </div>
    )
}

export { SocialMediaLogo }