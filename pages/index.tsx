import Image from "next/image"
import { Arimo, Inter, Oxanium } from 'next/font/google'
import { LefAside } from "@/components/LeftAside"
import { RightAside } from "@/components/RigthAside"
import { BsArrowRightShort, BsCodeSlash } from 'react-icons/bs'
import { BiCodeBlock } from 'react-icons/bi'
import { FaLaptopCode, FaFileCode } from 'react-icons/fa'
import { PiDesktop } from 'react-icons/pi'
import { CiDesktop } from 'react-icons/ci'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
import { TbDeviceImacCode } from 'react-icons/tb'

const inter = Inter({ subsets: ['latin'] })
const arimo = Arimo({ subsets: ['latin'] })
const oxanium = Oxanium({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${oxanium.className} flex flex-row h-screen justify-center bg-[#F0F0F6] gap-4`}
    >
      <LefAside />
      <div className='flex flex-col gap-11 w-[1006px] h-full items-center border border-orange-700 overflow-y-auto'>
      </div> 
      <RightAside />

    </main>
  )
}
