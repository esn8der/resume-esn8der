import Image from 'next/image'
import { TbLayersIntersect } from 'react-icons/tb'
const LefAside = () => {
    return (
        <aside className="relative flex flex-col w-[305px] h-full bg-white text-text-primary border border-red-500 items-center">
        <div className='flex flex-col h-fit mx-[74px] mt-[50px] mb-[60px] text-center items-center border'>
          <div className="h-4 w-4 bg-verde rounded-full absolute top-[172px] left-[198px]"></div>
          <Image
            className='rounded-full'
            src="/img/perfil.jpg"
            alt="Perfil photo"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-3">
            <h3 className='text-lg font-[550] mt-8'>Esneider Ballesta</h3>
            <p className='text-[15px] leading-6 text-text-secondary whitespace-nowrap'>Ingeniería De Sistemas</p>
          </div>
        </div>

        <hr className="w-[220px] mb-6" />

        <div className="flex flex-col gap-2 w-[220px] text-[15px]">
          <div className="flex justify-between">
            <h4>Age:</h4>
            <h4>24</h4>
          </div>
          <div className="flex justify-between">
            <h4>Residence:</h4>
            <h4>BD</h4>
          </div>
          <div className="flex justify-between">
            <h4>Freelance:</h4>
            <h4 className="text-[#7EB942]">Available</h4>
          </div>
          <div className="flex justify-between">
            <h4>Address:</h4>
            <h4>Apartadó, Ant</h4>
          </div>
        </div>

        <hr className="w-[220px] my-6" />

        <div className='w-[220px]'>
          <h3 className="text-lg font-[550]">Languajes</h3>
          <div className="flex justify-between">
            <h4>Spanish:</h4>
            <h4>100%</h4>
          </div>
          <div className="border border-amarillo rounded-full h-[6px] p-[1px]">
            <div className="bg-amarillo h-[2px] w-full rounded-full"></div>
          </div>
          <div className="flex justify-between">
            <h4>English:</h4>
            <h4>50%</h4>
          </div>
          <div className="border border-amarillo rounded-full h-[6px] p-[1px]">
            <div className="bg-amarillo h-[2px] w-1/2 rounded-full"></div>
          </div>
          <div className="flex justify-between">
            <h4>Portugues:</h4>
            <h4>0%</h4>
          </div>
          <div className="border border-amarillo rounded-full h-[6px] p-[1px]">
            <div className="bg-amarillo h-[2px] w-0 rounded-full"></div>
          </div>
        </div>

        <hr className="w-[220px] my-6" />

        <div className="flex flex-col gap-1 w-[220px]">
          <h3 className="text-lg font-[550] mb-2">Extra Skills</h3>
          <div className="flex gap-4">
            <TbLayersIntersect className='text-amarillo text-xl scale-x-[-1]' />
            <p>SpringBoot</p>
          </div>
          <div className="flex gap-4">
            <TbLayersIntersect className='text-amarillo text-xl scale-x-[-1]' />
            <p>React, Nextjs</p>
          </div>
          <div className="flex gap-4">
            <TbLayersIntersect className='text-amarillo text-xl scale-x-[-1]' />
            <p>Git, Github</p>
          </div>
          <div className="flex gap-4">
            <TbLayersIntersect className='text-amarillo text-xl scale-x-[-1]' />
            <p>Logica de Programación</p>
          </div>

        </div>

      </aside>
    )
}

export { LefAside }
