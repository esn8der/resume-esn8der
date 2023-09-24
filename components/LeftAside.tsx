import Image from 'next/image'
import { TbLayersIntersect } from 'react-icons/tb'
import { ProgressBar } from './ProgressBar'
import SkillsSection from './SkillsSection';

const skillsList = [
    'SpringBoot',
    'React, Next.js',
    'Git, Github',
    'Logica de Programación',
];

const LefAside = () => {
    return (
        <aside className=" flex flex-col w-[305px] h-full bg-white text-text-primary items-center">
            <div className='relative flex flex-col h-fit mx-[74px] mt-[50px] mb-[60px] text-center items-center'>
                <div className="h-4 w-4 bg-verde rounded-full absolute bottom-28 left-[125px]"></div>
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
                    <h4>CO</h4>
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

            <div className='w-[220px] space-y-[9px]'>
                <h3 className="text-lg font-[550]">Languajes</h3>
                <ProgressBar name='Spanish' progress="30" />
                <ProgressBar name='English' progress="50" />
            </div>

            <hr className="w-[220px] my-6" />

            <div className='w-[220px] space-y-[9px]'>
                <h3 className="text-lg font-[550]">Programming Languages</h3>
                <ProgressBar name='Java' progress="80" />
                <ProgressBar name='Python' progress="40" />
                <ProgressBar name='Html' progress="70" />
                <ProgressBar name='CSS' progress="50" />
            </div>
            
            <hr className="w-[220px] my-6" />

            <SkillsSection skills={skillsList} />

        </aside>
    )
}

export { LefAside }
