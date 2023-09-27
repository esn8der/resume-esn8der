import Image from "next/image";
import { Arimo, Inter, Oxanium } from "next/font/google";
import { LefAside } from "@/components/LeftAside";
import { RightAside } from "@/components/RigthAside";
import { CardKnowledge } from "@/components/CardKnowledge";

import { BsArrowRightShort, BsDatabaseGear, BsGear } from "react-icons/bs";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SiSpringsecurity } from "react-icons/si";
import { MdOutlineManageAccounts, MdOutlineChevronRight } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });
const arimo = Arimo({ subsets: ["latin"] });
const oxanium = Oxanium({ subsets: ["latin"] });

const knowledgeData = [
  {
    Icon: LiaLaptopCodeSolid,
    title: "Desarrollo Web",
    description: "Webs, blogs",
  },
  {
    Icon: BsDatabaseGear,
    title: "Gestión de Bases de Datos",
    description: "SQL, NoSQL",
  },
  {
    Icon: BsGear,
    title: "Desarrollo de API",
    description: "Java, Spring Boot",
  },
  {
    Icon: SiSpringsecurity,
    title: "Seguridad de Aplicaciones",
    description: "Autenticación, Autorización",
  },
  {
    Icon: MdOutlineManageAccounts,
    title: "Gestión de Proyectos de Software",
    description: "Planificación y ejecución",
  },
];

export default function Home() {
  return (
    <main
      className={`${oxanium.className} flex flex-row h-screen justify-between bg-lines gap-4 p-4 rounded-xl`}
    >
      <LefAside />

      <div className="flex flex-col gap-11 w-max rounded-lg overflow-x-hidden overflow-y-scroll scrollbox">
        <div className="grid grid-flow-col-dense bg-white w-full h-[468px] px-16 pt-20 rounded-lg">
          <div className="w-[650px]">
            <h1 className="text-[48px] leading-10 text-text-primary font-bold relative">
              Soy Esneider Ballesta,
              <br />
              un{" "}
              <span className=" before:absolute before:-inset-1 before:-skew-y-1 before:bg-amarillo relative inline-block">
                <span className="relative text-white">apasionado</span>
              </span>{" "}
              estudiante
            </h1>

            <p className="text-[16px] leading-6 text-text-secondary font-normal mt-5 {truncate line-clamp-3} {whitespace-break-spaces} {hover:line-clamp-none}">
              Soy un estudiante de Ingeniería de Sistemas con un fuerte interés
              tanto en el desarrollo backend, centrado en Java y Spring Boot,
              como en el frontend, donde estoy explorando tecnologías como
              Next.js y Tailwind CSS. Mi pasión por la resolución de problemas y
              la creación de soluciones me motiva a aprender y crecer en todas
              las áreas del desarrollo de software. Estoy comprometido con la
              construcción de aplicaciones robustas y completas que tengan un
              impacto positivo en el mundo.
            </p>
            <button className="bg-amarillo text-text-primary font-semibold rounded-lg px-8 py-3 mt-10">
              Hire Me
              <BsArrowRightShort className="inline-block ml-1 text-2xl" />
            </button>
          </div>
          <div className="place-self-center">
            <Image src="/img/man.png" alt="hero" width={280} height={380} />
          </div>
        </div>

        <div className="flex flex-col w-full items-center self-center">
          <div className="flex flex-col items-center justify-center text-center px-48 mb-12">
            <h2 className="text-[32px] leading-10 text-text-primary font-bold">
              My Knowledge
            </h2>
            <p className="text-[15px] leading-6 text-text-secondary font-normal mt-6">
              En mis estudios y proyectos, me he centrado en el desarrollo
              backend, adquiriendo conocimientos sólidos en Java y Spring Boot.
              Además, he comenzado a explorar el mundo del frontend,
              particularmente con tecnologías como Next.js y Tailwind CSS. Mi
              experiencia se extiende a áreas como la creación de API, el diseño
              de bases de datos y la seguridad de aplicaciones. Como estudiante
              apasionado, estoy comprometido con el continuo aprendizaje y la
              mejora de mis habilidades en el desarrollo de software.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <CardKnowledge knowledgeData={knowledgeData} />
            <div className="flex flex-col bg-white items-center text-center pt-8 pb-10 gap-4 px-14">
              <h4>Advertising</h4>
              <p className="text-text-secondary self-center">
                Integrando estrategias de marketing y publicidad para estimular
                la interacción y el crecimiento.
              </p>
              <div className="text-amarillo hover:underline cursor-pointer">
                <span>
                  Order now
                  <MdOutlineChevronRight className="inline-block text-xl" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center text-center px-48 mb-12">
            <h2 className="text-[32px] leading-10 text-text-primary font-bold">
              Education
            </h2>
            <p className="text-[15px] leading-6 text-text-secondary font-normal mt-6">
              En mis estudios y proyectos, me he centrado en el desarrollo
              backend, adquiriendo conocimientos sólidos en Java y Spring Boot.
              Además, he comenzado a explorar el mundo del frontend,
              particularmente con tecnologías como Next.js y Tailwind CSS. Mi
              experiencia se extiende a áreas como la creación de API, el diseño
              de bases de datos y la seguridad de aplicaciones. Como estudiante
              apasionado, estoy comprometido con el continuo aprendizaje y la
              mejora de mis habilidades en el desarrollo de software.
            </p>
          </div>
          <div className="bg-white">
            <div className="flex bg-white px-14 my-10">
              <div className="flex flex-row flex-wrap basis-2/3 gap-x-5 ">
                <h3 className="basis-full text-lg font-semibold">
                  Universidad De Antioquia
                </h3>
                <span className="self-center">Studen</span>
                <span className="bg-amarillo text-xs self-center p-1 text-white ">
                  Agosto 2017 - Actual
                </span>
              </div>
              <div className="space-y-8 basis-full">
                <h3 className="text-lg font-semibold">
                  Certificate Of Web Training
                </h3>
                <p className="text-text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque exercitationem odio laborum quis, non repellendus fuga
                  praesentium quos reiciendis totam
                </p>
              </div>
            </div>
            <div className="container">
              <hr className="m-5" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center text-center px-48 mb-12">
            <h2 className="text-[32px] leading-10 text-text-primary font-bold">
              Portfolio
            </h2>
            <p className="text-[15px] leading-6 text-text-secondary font-normal mt-6">
              A lo largo de mi viaje en el mundo del desarrollo de software, he
              tenido el privilegio de trabajar en una variedad de proyectos que
              abarcan desde el desarrollo backend hasta el frontend. Mi pasión
              por resolver problemas y crear soluciones se refleja en cada uno
              de los proyectos que he emprendido en mi viaje de aprendizaje y
              crecimiento.
            </p>
          </div>
          <div className="flex items-start justify-between text-center gap-8 overflow-x-scroll scrollbox">
            <div className="rounded-lg overflow-hidden bg-white hover:bg-teal-100 transition-colors duration-300 ease-in max-w-fit min-w-fit basis-1/3">
              <div className="p-4">
                <Image
                  className="rounded-lg"
                  src="/img/hero.jpeg"
                  alt=""
                  width={352}
                  height={198}
                />
              </div>
              <div className="p-4 max-w-[384px] self-center ">
                <h2 className="text-xl font-bold mb-2 self-center">
                  This is some title
                </h2>
                <p className="text-gray-700">
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <span className="text-text-secondary text-lg font-bold">
                  Read more
                </span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-white hover:bg-teal-100 transition-colors duration-300 ease-in max-w-fit min-w-fit basis-1/3">
              <div className="p-4">
                <Image
                  className="rounded-lg"
                  src="/img/clon.jpeg"
                  alt=""
                  width={352}
                  height={198}
                />
              </div>
              <div className="p-4 max-w-[384px]">
                <h2 className="text-xl font-bold mb-2">This is some title</h2>
                <p className="text-gray-700">
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <span className="text-text-secondary text-lg font-bold">
                  Read more
                </span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-white hover:bg-teal-100 transition-colors duration-300 ease-in max-w-fit min-w-fit basis-1/3">
              <div className="p-4">
                <Image
                  className="rounded-lg shadow-xl hover:shadow-amarillo transition-colors duration-300 ease-in"
                  src="/img/angular.jpeg"
                  alt=""
                  width={352}
                  height={198}
                />
              </div>
              <div className="p-4 max-w-[384px]">
                <h2 className="text-xl font-bold mb-2">This is some title</h2>
                <p className="text-gray-700">
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <span className="text-text-secondary text-lg font-bold">
                  Read more
                </span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-white hover:bg-teal-100 transition-colors duration-300 ease-in max-w-fit min-w-fit basis-1/3">
              <div className="p-4">
                <Image
                  className="rounded-lg"
                  src="/img/todo.jpeg"
                  alt=""
                  width={352}
                  height={198}
                />
              </div>
              <div className="p-4 max-w-[384px]">
                <h2 className="text-xl font-bold mb-2">This is some title</h2>
                <p className="text-gray-700">
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <span className="text-text-secondary text-lg font-bold">
                  Read more
                </span>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="bg-white rounded-t-lg w-full h-20">
              Footer xD
          </div>
        </footer>
      </div>
      <RightAside />
    </main>
  );
}
