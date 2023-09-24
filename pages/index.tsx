import Image from "next/image"
import { Arimo, Inter, Oxanium } from 'next/font/google'

import {BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import { LefAside } from "@/components/LeftAside"

const inter = Inter({ subsets: ['latin'] })
const arimo = Arimo({ subsets: ['latin'] })
const oxanium = Oxanium({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${oxanium.className} flex flex-row h-screen justify-center bg-[#F0F0F6] gap-4  border border-red-500`}
    >
      <LefAside />
      <div className='w-[1006px] h-full border border-orange-700'></div>
      <aside className='flex flex-col gap-5 items-center w-[97px] h-full bg-white border border-blue-700 pt-[73px]'>

        
      </aside>

    </main>
  )
}
