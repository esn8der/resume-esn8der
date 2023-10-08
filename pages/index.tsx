import { CardEducation } from "@/components/CardEducation";
import { CardKnowledge } from "@/components/CardKnowledge";
import { LefAside } from "@/components/LeftAside";
import { RightAside } from "@/components/RightAside";
import { HireMeDialog } from "@/components/dialogs/HireMeDialog";
import { CardPortfolio } from "@/components/CardPortfolio";
import { BsDatabaseGear, BsGear } from "react-icons/bs";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineChevronRight, MdOutlineManageAccounts } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { Oxanium } from "next/font/google";
import Image from "next/image";

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
      className={`${oxanium.className} main`}
    >
      <LefAside />

      <div className="presentation-main scrollbox">
        <div className="presentation-container">
          <div className=" pt-20 pb-10">
            <h1 className="principal-title">
              Soy Esneider Ballesta,
              <br />
              un{" "}
              <span className="accent-title">
                <span className="relative text-green-800">apasionado</span>
              </span>{" "}
              estudiante
            </h1>

            <p className="profile-description">
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

        <div className="main-container-section ">
          <div className="section-container">
            <h2 className="section-title">
              Mis Conocimientos
            </h2>
            <p className="section-description">
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
          <div className="card-knowledge-container">
            <CardKnowledge knowledgeData={knowledgeData} />
            <div className="last-card-knowledge">
              <h3 className="text-text-primary">Publicidad</h3>
              <p className="text-text-secondary self-center whitespace-normal line-clamp-4">
                Integrando estrategias de marketing y publicidad para estimular
                la interacción y el crecimiento.
              </p>
              <button className="links flex items-center group cursor-pointer">
                Ordenar ya
                <MdOutlineChevronRight className="chevron" />
              </button>
            </div>
          </div>
        </div>

        <div className="main-container-section">
          <div className="section-container">
            <h2 className="section-title">
              Educación
            </h2>
            <p className="section-description">
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

        <div className="main-container-section">
          <div className="section-container">
            <h2 className="section-title">
              Portafolio
            </h2>
            <p className="section-description">
              A lo largo de mi viaje en el mundo del desarrollo de software, he
              tenido el privilegio de trabajar en una variedad de proyectos que
              abarcan desde el desarrollo backend hasta el frontend. Mi pasión
              por resolver problemas y crear soluciones se refleja en cada uno
              de los proyectos que he emprendido en mi viaje de aprendizaje y
              crecimiento.
            </p>
          </div>
          <div className="card-portfolio-container scrollbox">
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
          <div className="footer">
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
                className="text-blue-500 links"
                href="https://github.com/esn8der"
                target="_blank"
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
