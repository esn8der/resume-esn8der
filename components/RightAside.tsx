import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SocialMediaLogo } from "./SocialMediaLogo";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const RightAside = () => {
  return (
    <aside className="flex flex-col text-text-primary gap-5 items-center rounded-lg h-full w-full max-w-[8%] min-w-fit bg-primaryBG pt-16">
      <h3 className="text-xl font-bold">Enlaces</h3>

      <div className="flex flex-col gap-4 items-center">
        <Link href="https://github.com/esn8der" target="_blank">
          <SocialMediaLogo Icon={FaGithub} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/esneider-ballesta-paredes-95340b272/"
          target="_blank"
        >
          <SocialMediaLogo Icon={FaLinkedinIn} />
        </Link>
        <Link href="mailto:ballesta.esneider@gmail.com">
          <SocialMediaLogo Icon={SiGmail} />
        </Link>
      </div>
    </aside>
  );
};

export { RightAside };
