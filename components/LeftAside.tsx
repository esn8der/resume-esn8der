import Image from "next/image";
import { ProgressBar } from "./ProgressBar";
import { SkillsSection } from "./SkillsSection";
import Tooltip from "@mui/material/Tooltip";

const skillsList = [
  "SpringBoot",
  "React, Next.js",
  "Git, Github",
  "Lógica de Programación",
];

const LeftAside = () => {
  return (
    <aside className=" flex flex-col w-full max-w-[20%] min-w-fit h-full bg-primaryBG text-white items-center rounded-lg overflow-clip">
      <section className="relative flex flex-col mx-[74px] mt-10  text-center items-center">
        <Tooltip title="Disponible para trabajar" placement="right">
          <span
            className="absolute flex h-5 w-5 bottom-24 left-[143px]"
            aria-label="Disponible para trabajar"
            role="tooltip"
          >
            <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="rounded-full h-full w-full bg-emerald-500"></span>
          </span>
        </Tooltip>
        <Image
          className="rounded-full"
          src="/profiles/perfil.jpg"
          alt="Perfil photo"
          width={150}
          height={150}
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-medium mt-4">Esneider Ballesta</h3>
          <span className="text-[15px] leading-6 text-text-secondary">
            Estudiante Ing. De Sistemas
          </span>
        </div>
      </section>

      <div className="container" role="separator">
        <hr className="mx-8 my-3" />
      </div>

      <section className="flex flex-col gap-1 min-w-full px-10 text-[15px]">
        <div className="flex justify-between">
          <h4 className="font-medium">Residencia:</h4>
          <h4 className="text-text-secondary">Apartadó, Ant</h4>
        </div>
        <div className="flex justify-between">
          <h4 className="font-medium">Practicas académicas:</h4>
          <h4 className="text-emerald-400">Disponible</h4>
        </div>
        <div className="flex justify-between">
          <h4 className="font-medium">Correo:</h4>
          <h4 className="text-text-secondary">ballesta.esneider@gmail.com</h4>
        </div>
      </section>

      <div className="container" role="separator">
        <hr className="mx-8 my-3" />
      </div>

      <section className="min-w-full space-y-1 px-10">
        <h3 className="text-lg font-medium">Idiomas</h3>
        <ProgressBar name="Español" progress="100" />
        <ProgressBar name="Inglés" progress="50" />
      </section>

      <div className="container" role="separator">
        <hr className="mx-8 my-3" />
      </div>

      <section className="min-w-full space-y-1 px-10">
        <h3 className="text-lg font-medium">Lenguajes de Programación</h3>
        <ProgressBar name="Java" progress="80" />
        <ProgressBar name="Python" progress="40" />
        <ProgressBar name="Html" progress="70" />
        <ProgressBar name="CSS" progress="50" />
      </section>

      <div className="container" role="separator">
        <hr className="mx-8 my-3" />
      </div>

      <SkillsSection skills={skillsList} />
    </aside>
  );
};

export { LeftAside };
