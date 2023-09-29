import Image from "next/image"

export default function casa() {
    return (
        <main className='flex flex-row h-screen  justify-center bg-[#F0F0F6] gap-4  border border-red-500 background'>
            <aside className="relative flex flex-col w-[305px] h-full bg-white items-center">
                <div className='flex flex-col h-fit mx-[74px] mt-[50px] mb-[60px] text-center items-center border'>
                    <div className="h-4 w-4 bg-[#7EB942] rounded-full absolute top-[172px] left-[198px]"></div>
                    <Image
                        className='rounded-full'
                        src="/img/perfil.jpg"
                        alt="Perfil photo"
                        width={150}
                        height={150}
                    />
                    <h3 className='text-lg mt-8'>Esneider Ballesta</h3>
                    <p className=''>Ingeniero de Sistemas</p>
                </div>
                <hr className="w-[220px] mb-6" />
                <div className="flex flex-col gap-2 w-[220px]">
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
                <div className='w-[220px]'>
                    <h3>Languajes</h3>
                    <div className="flex justify-between">
                        <h4>Spanish:</h4>
                        <h4>100%</h4>
                    </div>
                    <div className="border border-yellow-300 rounded-full h-[6px] p-[1px]">
                        <div className="bg-yellow-500 h-[2px] w-full rounded-full"></div>
                    </div>
                    <div className="flex justify-between">
                        <h4>English:</h4>
                        <h4>50%</h4>
                    </div>
                    <div className="border border-yellow-300 rounded-full h-[6px] p-[1px]">
                        <div className="bg-yellow-500 h-[2px] w-1/2 rounded-full"></div>
                    </div>
                    <div className="flex justify-between">
                        <h4>Portugues:</h4>
                        <h4>0%</h4>
                    </div>
                    <div className="border border-yellow-300 rounded-full h-[6px] p-[1px]">
                        <div className="bg-yellow-500 h-[2px] w-0 rounded-full"></div>
                    </div>
                </div>

            </aside>
            <div className='w-[1006px] h-full border border-orange-700'></div>
            <aside className='w-[97px] h-full bg-white border border-blue-700'></aside>


        </main>
    )
}