import { CardEducation } from "@/components/CardEducation";
import { CardKnowledge } from "@/components/CardKnowledge";
import { LefAside } from "@/components/LeftAside";
import { RightAside } from "@/components/RigthAside";
import { Oxanium } from "next/font/google";
import Image from "next/image";

import { CardPortfolio } from "@/components/CardPortfolio";
import { BsArrowRightShort, BsDatabaseGear, BsGear } from "react-icons/bs";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineChevronRight, MdOutlineManageAccounts } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";

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
      className={`${oxanium.className} flex flex-row h-screen justify-between {bg-lines} background gap-4 p-4`}
    >
      <LefAside />

      <div className="flex flex-col gap-11 w-max rounded-t-lg overflow-x-hidden overflow-y-scroll scrollbox">
        <div className="grid grid-flow-col-dense bg-primaryBG w-full h-[468px] px-16 pt-20 rounded-lg">
          <div className="w-[650px]">
            <h1 className="text-[48px] leading-10 text-text-primary font-bold relative">
              Soy Esneider Ballesta,
              <br />
              un{" "}
              <span className=" before:absolute before:-inset-1 before:-skew-y-1 before:bg-[#00d68f] relative inline-block">
                <span className="relative text-green-800">apasionado</span>
              </span>{" "}
              estudiante
            </h1>

            <p className="text-[16px] leading-6 text-text-secondary font-normal mt-5">
              Soy un estudiante de Ingeniería de Sistemas con un fuerte interés
              tanto en el desarrollo backend, centrado en Java y Spring Boot,
              como en el frontend, donde estoy explorando tecnologías como
              Next.js y Tailwind CSS. Mi pasión por la resolución de problemas y
              la creación de soluciones me motiva a aprender y crecer en todas
              las áreas del desarrollo de software. Estoy comprometido con la
              construcción de aplicaciones robustas y completas que tengan un
              impacto positivo en el mundo.
            </p>
            <button className="bg-gradient-to-l from-[#005639]  hover:to-[#00d68f] transition-colors duration-200 ease-in text-text-secondary hover:text-text-primary font-semibold rounded-lg px-8 py-3 mt-10">
              Hire Me
              <BsArrowRightShort className="inline-block ml-1 text-2xl" />
            </button>
          </div>
          <div className="place-self-center">
            <Image src="/img/man.png" alt="hero" width={280} height={380} />
          </div>
        </div>

        <div className="flex flex-col w-full items-center self-center">
          <div className="flex flex-col items-center justify-center text-center px-48 mb-12 ">
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
            <div className="flex flex-col bg-primaryBG items-center text-center pt-8 pb-10 gap-4 px-14 mx-2 shadow-lg shadow-[#00d68f] rounded-lg hover:scale-95 ">
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
          <div className="bg-primaryBG">
            <CardEducation
              courseName="Ingeniería de Sistemas"
              institution="Universidad de Antioquia"
              participantStatus="Student"
              date="Agosto 2017 - Actual"
              description="Pronto a culminar mi programa de Ingeniería de Sistemas en la Universidad de Antioquia, 
                          he sido formado en un enfoque investigativo y centrado en competencias. Mi formación abarca 
                            tanto los fundamentos científicos y tecnológicos como la preparación para la Cuarta Revolución Industrial, 
                            incluyendo tecnologías como Blockchain, Inteligencia Artificial y el Internet de las Cosas. 
                            Estoy listo para aplicar estos conocimientos en la resolución de problemas y la innovación tecnológica."
            />

            <div className="container">
              <hr className="m-5" />
            </div>

            <CardEducation
              courseName="Introducción a la programación en JavaScript"
              institution="Universidad Distrital Francisco José de Caldas"
              participantStatus="Student"
              date="Septiembre 2023 - Actual"
              description="Actualmente, estoy cursando un programa de 50 horas que se enfoca en JavaScript y la programación web. 
                          Cubre temas esenciales como variables, tipos de datos y maquetación de aplicativos, así como temas avanzados, 
                          como interfaces web y bases de datos. El curso se destaca por su enfoque práctico y resolución de desafíos, 
                          lo que me prepara para proyectos futuros en desarrollo web."
            />
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
          <div className="flex items-start justify-between gap-8 overflow-x-scroll scrollbox">
            <CardPortfolio
              img="/img/hero.jpeg"
              title="Tour of Heroes - Api"
              description="API REST para administrar una lista de héroes. Está desarrollada con Spring Boot"
            />
            <CardPortfolio
              img="/img/angular.jpeg"
              title="Tour of Heroes - Frontend"
              description="Aplicación web desarrollada con Angular que demuestra mis habilidades en el frontend"
            />
            <CardPortfolio
              img="/img/clon.jpeg"
              title="Clon layout de Spotify"
              description="Clon del Diseño de Spotify: Una recreación fiel del diseño de la interfaz de usuario de Spotify."
            />
            <CardPortfolio
              img="/img/todo.jpeg"
              title="Api de una ToDo App"
              description="Una API simple de Tareas Pendientes (ToDo) desarrollada con Spring Framework."
            />
          </div>
        </div>
        <footer>
          <div className="bg-primaryBG rounded-t-lg w-full py-5 px-10 text-center text-sm text-text-secondary">
            <p>
              Creado como parte de un trabajo para la materia de Ingeniería Web.
              Hecho Next.js y Tailwind CSS.
            </p>

            <div className="container">
              <hr className="m-3" />
            </div>

            <span>
              Por{" "}
              <a
                href="https://github.com/esn8der"
                className="text-blue-500"
              >
                @esn8der
              </a>
            </span>
          </div>
        </footer>
      </div>
      <RightAside />
    </main>
  );
}
