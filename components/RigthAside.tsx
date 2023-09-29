import { BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SocialMediaLogo } from "./SocialMediaLogo";

const RightAside = () => {
  return (
    <aside className="flex flex-col gap-5 items-center rounded-lg h-full w-full max-w-[8%] min-w-fit bg-white pt-16">
      <h3 className="text-xl font-bold bordr">Links</h3>

      <div className="flex flex-col gap-4 items-center ">
        <SocialMediaLogo Icon={BsGithub} />
        <SocialMediaLogo Icon={FaLinkedinIn} />
        <SocialMediaLogo Icon={BsTwitter} />
        <SocialMediaLogo Icon={BiLogoInstagramAlt} />
        <SocialMediaLogo Icon={FaFacebookF} />
        <SocialMediaLogo Icon={BsYoutube} />
      </div>
    </aside>
  );
};

export { RightAside };
