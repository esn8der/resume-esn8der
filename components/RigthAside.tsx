import { BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const RightAside = () => {
  return (
    <aside className="flex flex-col gap-5 items-center rounded-lg h-full w-full max-w-[8%] min-w-fit bg-white pt-16">
      <h3 className="text-xl font-bold bordr">Links</h3>

      <div className="flex flex-col gap-4 items-center ">
        <div className="flex justify-center items-center bg-amarillo rounded-full h-[70px] w-[70px]">
          <BsGithub className="text-3xl text-azul" />
        </div>
        <div className=" flex justify-center items-center bg-amarillo rounded-full h-[70px] w-[70px]">
          <FaLinkedinIn className="text-3xl text-azul" />
        </div>
        <div className=" flex justify-center items-center bg-amarillo rounded-full h-[70px] w-[70px]">
          <FaFacebookF className="text-3xl text-azul" />
        </div>
        <div className=" flex justify-center items-center bg-amarillo rounded-full h-[70px] w-[70px]">
          <BsTwitter className="text-3xl text-azul" />
        </div>
        <div className=" flex justify-center items-center bg-amarillo rounded-full h-[70px] w-[70px]">
          <BsYoutube className="text-3xl text-azul" />
        </div>
        <div className=" flex justify-center items-center bg-amarillo rounded-full h-[70px] w-[70px]">
          <BiLogoInstagramAlt className="text-3xl text-azul" />
        </div>
      </div>
    </aside>
  );
};

export { RightAside };
