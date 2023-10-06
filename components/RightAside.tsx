import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SocialMediaLogo } from "./SocialMediaLogo";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

const RightAside = () => {
  return (
    <aside className="flex flex-col text-text-primary gap-5 items-center rounded-lg h-full w-full max-w-[8%] min-w-fit bg-primaryBG pt-16">
      <h3 className="text-xl font-bold">Enlaces</h3>

      <div className="flex flex-col gap-4 items-center">
        <Tooltip title="Enlace a Github" placement="left">
          <Link
            href="https://github.com/esn8der"
            target="_blank"
            aria-label="Enlace a Github"
          >
            <SocialMediaLogo Icon={FaGithub} />
          </Link>
        </Tooltip>
        <Tooltip title="Enlace a Linkedin" placement="left">
          <Link
            href="https://www.linkedin.com/in/esneider-ballesta-paredes-95340b272/"
            target="_blank"
            aria-label="Enlace a Linkedin"
          >
            <SocialMediaLogo Icon={FaLinkedinIn} />
          </Link>
        </Tooltip>
        <Tooltip title="Enlace a Gmail" placement="left">
          <Link
            href="mailto:ballesta.esneider@gmail.com"
            aria-label="Enlace a Gmail"
          >
            <SocialMediaLogo Icon={SiGmail} />
          </Link>
        </Tooltip>
      </div>
    </aside>
  );
};

export { RightAside };
