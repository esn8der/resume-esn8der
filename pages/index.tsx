import Image from "next/image"
import { Arimo, Inter, Oxanium } from 'next/font/google'
import { LefAside } from "@/components/LeftAside"
import { RightAside } from "@/components/RigthAside"
import { CardKnowledge } from "@/components/CardKnowledge"

import { BsArrowRightShort, BsDatabaseGear, BsGear } from 'react-icons/bs'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
import { SiSpringsecurity } from 'react-icons/si'
import { MdOutlineManageAccounts, MdOutlineChevronRight } from 'react-icons/md'

const inter = Inter({ subsets: ['latin'] })
const arimo = Arimo({ subsets: ['latin'] })
const oxanium = Oxanium({ subsets: ['latin'] })

const knowledgeData = [
  {
    Icon: LiaLaptopCodeSolid,
    title: 'Desarrollo Web',
    description: 'Webs, blogs',
  },
  {
    Icon: BsDatabaseGear,
    title: 'Gestión de Bases de Datos',
    description: 'SQL, NoSQL',
  },
  {
    Icon: BsGear,
    title: 'Desarrollo de API',
    description: 'Java, Spring Boot',
  },
  {
    Icon: SiSpringsecurity,
    title: 'Seguridad de Aplicaciones',
    description: 'Autenticación, Autorización',
  },
  {
    Icon: MdOutlineManageAccounts,
    title: 'Gestión de Proyectos de Software',
    description: 'Planificación y ejecución',
  },
];

export default function Home() {
  return (
    <main
      className={`${oxanium.className} flex flex-row h-screen justify-center bg-[#F0F0F6] gap-4`}
    >
      <LefAside />

      <div className='flex flex-col gap-11 w-[1006px] h-full items-center overflow-y-auto overflow-x-hidden'>

        <div className="flex mx-2 bg-white w-[970px] h-[468px] gap-10 pt-20">
          <div className="ml-16  w-[510px]">
            <h1 className="text-[48px] leading-10 text-text-primary font-bold relative">
              Soy Esneider Ballesta,
              <br />
              un{' '}
              <span className=" before:absolute before:-inset-1 before:-skew-y-1 before:bg-amarillo relative inline-block">
                <span className="relative text-white">apasionado</span>
              </span>{' '}estudiante
            </h1>

            <p className="text-[16px] leading-6 text-text-secondary font-normal mt-5 truncate line-clamp-3 whitespace-break-spaces hover:line-clamp-none hover:transition-all duration-300 ease-in">
              Soy un estudiante de Ingeniería de Sistemas con un fuerte interés tanto en el
              desarrollo backend, centrado en Java y Spring Boot, como en el frontend, donde
              estoy explorando tecnologías como Next.js y Tailwind CSS. Mi pasión por la
              resolución de problemas y la creación de soluciones me motiva a aprender y crecer
              en todas las áreas del desarrollo de software. Estoy comprometido con la construcción
              de aplicaciones robustas y completas que tengan un impacto positivo en el mundo.
            </p>
            <button className="bg-amarillo text-text-primary font-semibold rounded-lg px-8 py-3 mt-10 mb-16">
              Hire Me
              <BsArrowRightShort className='inline-block ml-1 text-2xl' />
            </button>
          </div>
          <div className="self-end">
            <Image
              src='/img/man.png'
              alt='hero'
              width={325}
              height={460}
            />
          </div>
        </div>

        <div className="flex flex-col w-[970px] items-center">
          <div className="flex flex-col items-center justify-center text-center w-[700px]">
            <h2 className="text-[32px] leading-10 text-text-primary font-bold">
              My Knowledge
            </h2>
            <p className="text-[15px] leading-6 text-text-secondary font-normal mt-6">
              En mis estudios y proyectos, me he centrado en el desarrollo backend, adquiriendo
              conocimientos sólidos en Java y Spring Boot. Además, he comenzado a explorar el mundo
              del frontend, particularmente con tecnologías como Next.js y Tailwind CSS.
              Mi experiencia se extiende a áreas como la creación de API, el diseño de bases
              de datos y la seguridad de aplicaciones. Como estudiante apasionado, estoy comprometido
              con el continuo aprendizaje y la mejora de mis habilidades en el desarrollo de software.
            </p>
          </div>
          <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            <CardKnowledge knowledgeData={knowledgeData} />
            <div className="flex flex-col bg-white items-center text-center pt-6 pb-10 gap-4 px-4">
              {/* <div className="space-y-4 mt-2"> */}
              <h4>Advertising</h4>
              <p className="text-text-secondary self-center">
                Integrando estrategias de marketing y publicidad
                para estimular la interacción y el crecimiento.
              </p>
              <div className="text-amarillo hover:underline cursor-pointer">
                <span>{`Order now`}
                  <MdOutlineChevronRight className='inline-block text-xl' />
                </span>
              </div>
              {/* </div> */}
            </div>

            {/* <div className="flex flex-col bg-white items-center text-center pt-6 pb-10">
              <div className="relative text-amarillo">
                <LiaLaptopCodeSolid className='text-7xl' />
              </div>
              <div className="space-y-4 mt-6">
                <h4>Optimización de Rendimiento</h4>
                <p className="text-text-secondary self-center">Mejora de aplicaciones</p>
              </div>
            </div> */}
          </div>
        </div>

      </div>
      <RightAside />

    </main>
  )
}
