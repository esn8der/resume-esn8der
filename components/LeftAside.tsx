import Image from "next/image";
import { ProgressBar } from "./ProgressBar";
import SkillsSection from "./SkillsSection";

const skillsList = [
  "SpringBoot",
  "React, Next.js",
  "Git, Github",
  "Logica de Programación",
];

const LefAside = () => {
  return (
    <aside className=" flex flex-col w-full max-w-[20%] min-w-fit h-full bg-primaryBG text-white items-center rounded-lg ">
      <div className="relative flex flex-col h-fit mx-[74px] mt-10  text-center items-center">
        <span className="absolute flex h-5 w-5 bottom-24 left-[125px]">
          <span className="animate-ping absolute h-full w-full rounded-full bg-[#00d68f] opacity-75"></span>
          <span className="rounded-full h-full w-full bg-[#00d68f]"></span>
        </span>
        <Image
          className="rounded-full"
          src="/img/perfil.jpg"
          alt="Perfil photo"
          width={150}
          height={150}
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-[550] mt-4">Esneider Ballesta</h3>
          <p className="text-[15px] leading-6 text-[#c6c4d0] whitespace-nowrap">
            Ingeniería De Sistemas
          </p>
        </div>
      </div>

      <div className="container">
        <hr className="mx-8 my-3" />
      </div>

      <div className="flex flex-col gap-1 min-w-full px-10 text-[15px]">
        {/* <div className="flex justify-between">
          <h4>Age:</h4>
          <h4>24</h4>
        </div> */}
        <div className="flex justify-between">
          <h4>Residence:</h4>
          <h4>Apartadó, Ant</h4>
        </div>
        <div className="flex justify-between">
          <h4>Freelance:</h4>
          <h4 className="text-[#7EB942]">Available</h4>
        </div>
        <div className="flex justify-between">
          <h4>Mail:</h4>
          <h4>ballesta.esneider@gmail.com</h4>
        </div>
      </div>

      <div className="container">
        <hr className="mx-8 my-3" />
      </div>

      <div className="min-w-full space-y-1 px-10">
        <h3 className="text-lg font-[550]">Languajes</h3>
        <ProgressBar name="Spanish" progress="100" />
        <ProgressBar name="English" progress="50" />
      </div>

      <div className="container">
        <hr className="mx-8 my-3" />
      </div>

      <div className="min-w-full space-y-1 px-10">
        <h3 className="text-lg font-[550]">Programming Languages</h3>
        <ProgressBar name="Java" progress="80" />
        <ProgressBar name="Python" progress="40" />
        <ProgressBar name="Html" progress="70" />
        <ProgressBar name="CSS" progress="50" />
      </div>

      <div className="container">
        <hr className="mx-8 my-3" />
      </div>

      <SkillsSection skills={skillsList} />
    </aside>
  );
};

export { LefAside };
