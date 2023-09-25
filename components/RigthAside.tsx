import { BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa'

const RightAside = () => {
    return (
        <aside className='flex flex-col gap-5 items-center w-[97px] h-full bg-white pt-[73px]'>

        <h3 className="text-lg font-bold bordr">Links</h3>

        <div className="flex flex-col gap-4 items-center ">
          <div className=" flex justify-center items-center bg-amarillo rounded-full h-12 w-12">
            <BsGithub className='text-2xl text-azul' />
          </div>
          <div className=" flex justify-center items-center bg-amarillo rounded-full h-12 w-12">
            <FaLinkedinIn className='text-2xl text-azul' />
          </div>
          <div className=" flex justify-center items-center bg-amarillo rounded-full h-12 w-12">
            <FaFacebookF className='text-2xl text-azul' />
          </div>
          <div className=" flex justify-center items-center bg-amarillo rounded-full h-12 w-12">
            <BsTwitter className='text-2xl text-azul' />
          </div>
          <div className=" flex justify-center items-center bg-amarillo rounded-full h-12 w-12">
            <BsYoutube className='text-2xl text-azul' />
          </div>
          <div className=" flex justify-center items-center bg-amarillo rounded-full h-12 w-12">
            <BiLogoInstagramAlt className='text-2xl text-azul' />
          </div>
        </div>
        
      </aside>
    )
}

export { RightAside }