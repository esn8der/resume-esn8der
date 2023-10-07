import { CardEducation } from "@/components/CardEducation";
import { CardKnowledge } from "@/components/CardKnowledge";
import { LefAside } from "@/components/LeftAside";
import { RightAside } from "@/components/RightAside";
import { HireMeDialog } from "@/components/dialogs/HireMeDialog";
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
        <div className="grid grid-flow-col bg-primaryBG w-full px-16 gap-32 rounded-lg">
          <div className=" pt-20 pb-10">
            <h1 className="text-[48px] tracking-tighter leading-snug text-text-primary font-bold relative whitespace-normal line-clamp-3">
              Soy Esneider Ballesta,
              <br />
              un{" "}
              <span className=" before:absolute before:-inset-0.5 before:-skew-y-1 before:bg-emerald-400 relative inline-block">
                <span className="relative text-green-800">apasionado</span>
              </span>{" "}
              estudiante
            </h1>

            <p className="text-[16px] leading-6 text-text-secondary font-normal mt-5 whitespace-normal line-clamp-6 ">
              Soy un estudiante de Ingeniería de Sistemas con un fuerte interés
              tanto en el desarrollo backend, centrado en Java y Spring Boot,
              como en el frontend, donde estoy explorando tecnologías como
              Next.js y Tailwind CSS. Mi pasión por la resolución de problemas y
              la creación de soluciones me motiva a aprender y crecer en todas
              las áreas del desarrollo de software. Estoy comprometido con la
              construcción de aplicaciones robustas y completas que tengan un
              impacto positivo en el mundo.
            </p>
            <HireMeDialog />
          </div>
          <div className="justify-self-center self-end ">
            <Image
              src="/profiles/man.png"
              alt="hero"
              width={280}
              height={430}
            />
          </div>
        </div>

        <div className="flex flex-col w-full ">
          <div className="flex flex-col text-center px-48 mb-12 ">
            <h2 className="text-[32px] leading-10 text-text-primary font-bold">
              Mis Conocimientos
            </h2>
            <p className="text-[15px] leading-6 text-text-secondary font-normal mt-6 whitespace-normal line-clamp-6 text-left">
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
            <div className="flex flex-col bg-primaryBG items-center justify-center text-center gap-4 px-14 py-10 mx-2 shadow-lg shadow-[#00d68f] rounded-lg hover:scale-95 ">
              <h3 className="text-text-primary">Publicidad</h3>
              <p className="text-text-secondary self-center whitespace-normal line-clamp-4">
                Integrando estrategias de marketing y publicidad para estimular
                la interacción y el crecimiento.
              </p>
              <div className="text-amarillo cursor-pointer">
                <a className="enlace flex items-center group">
                  Ordenar ya
                  <MdOutlineChevronRight className="text-xl group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col text-center px-48 mb-12 ">
            <h2 className="text-[32px] leading-10 text-text-primary font-bold">
              Educación
            </h2>
            <p className="text-[15px] leading-6 text-text-secondary font-normal mt-6 whitespace-normal line-clamp-6">
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

        <div className="flex flex-col w-full">
          <div className="flex flex-col text-center px-48 mb-12 ">
            <h2 className="text-[32px] leading-10 text-text-primary font-bold">
              Portafolio
            </h2>
            <p className="text-[15px] leading-6 text-text-secondary font-normal mt-6 whitespace-normal line-clamp-6">
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
              img="/repositories/hero.jpeg"
              title="Tour of Heroes - Api"
              description="API REST para administrar una lista de héroes. Está desarrollada con Spring Boot"
              projectStatus="Terminado"
              additionalInfo="Esta API REST ha sido creada con el propósito de servir como backend para
               la aplicación Angular del tutorial 'Tour of Heroes'. La principal función de esta API es 
               administrar una lista de héroes. Ha sido desarrollada utilizando el framework Spring Boot, 
               una elección popular debido a su eficiencia y facilidad de uso en el desarrollo de 
               aplicaciones web Java."
              languages={["Java", "Spring Boot", "PostgreSQL"]}
              link="https://github.com/esn8der/tour-of-heroes-api"
            />
            <CardPortfolio
              img="/repositories/angular.jpeg"
              title="Tour of Heroes - Frontend"
              description="Aplicación web desarrollada con Angular que demuestra mis habilidades en el frontend"
              projectStatus="Terminado"
              additionalInfo="Esta aplicación web, desarrollada con Angular, sirve como una sólida exhibición de mis 
               habilidades en el desarrollo frontend. Ofrece una experiencia de usuario atractiva, permitiendo a los 
               usuarios explorar una variedad de héroes ficticios con una interfaz de usuario simple y receptiva. Además, 
               demuestra técnicas de diseño y programación frontend, incluyendo manipulación dinámica de datos
               y navegación entre vistas para obtener información actualizada de los héroes."
              languages={["Angular", "TypeScript", "CSS", "HTML"]}
              link="https://github.com/esn8der/angular-tour-of-heroes"
            />
            <CardPortfolio
              img="/repositories/clon.jpeg"
              title="Clon layout de Spotify"
              description="Clon del Diseño de Spotify: Una recreación fiel del diseño de la interfaz de usuario de Spotify."
              projectStatus="Terminado"
              additionalInfo="Este proyecto se centra en la creación de un clon fiel del diseño de la página principal de Spotify, 
              una de las plataformas de transmisión de música más populares del mundo. La intención detrás de este esfuerzo es 
              lograr una recreación precisa de la interfaz de usuario de Spotify, capturando cada elemento visual que caracteriza 
              a la aplicación original."
              languages={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
              link="https://github.com/esn8der/spotify-sections"
            />
            <CardPortfolio
              img="/repositories/todo.jpeg"
              title="Api de una ToDo App"
              description="Una API simple de Tareas Pendientes (ToDo) desarrollada con Spring Framework."
              projectStatus="En Progreso"
              additionalInfo="Este proyecto se centra en el desarrollo de una API simple pero efectiva para la gestión de Tareas 
              Pendientes (ToDo). Ha sido diseñada y construida utilizando el framework Spring, reconocido por su robustez y versatilidad
              en el desarrollo de aplicaciones Java, el proyecto aún está en progreso"
              languages={["Java", "Spring Boot"]}
              link="https://github.com/esn8der/todo-app"
            />
          </div>
        </div>

        <footer>
          <div className="bg-primaryBG rounded-t-lg w-full py-3 px-10 text-center text-sm text-text-secondary">
            <p>
              Creado como parte de un trabajo para la materia de Ingeniería Web.
              Hecho con Next.js y Tailwind CSS.
            </p>

            <div className="container">
              <hr className="m-2" />
            </div>

            <span>
              Por{" "}
              <a
                href="https://github.com/esn8der"
                className="text-blue-500 enlace"
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
