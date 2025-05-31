'use client'
import ImageDisplay from "../ImageDisplay";
import ButtonDisplay from './../ButtonDisplay';
import Headers from './../Headers';

export default function HomeAbout() {
    return (
        <>
            <div className="w-full relative ">
                <ImageDisplay src='/Rectangle-Bg.png' className='mt-[-3em] z-[-1] ' alt='Background Image 1' width={2000} />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white items-center">
                    <div className="flex gap-[5em] justify-center text-center">
                        <div className="w-[10em]">
                            <p className="font-[900] text-[25pt]">150+</p>
                            <p>Courses</p>
                        </div>
                        <div className="border-x w-[15em] border-white px-8">
                            <p className="font-[900] text-[25pt]">20+</p>
                            <p>Countries</p>
                        </div>
                        <div className="w-[10em] border-white px-8">
                            <p className="font-[900] text-[25pt]">30k+</p>
                            <p>Students</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex px-[10em] my-[3em] gap-[5em] ">
                <div className="grid w-[50%] grid-flow-col grid-rows-6 gap-x-4">
                    <div className="col-span-1"></div>
                    <div className="row-span-4 col-span-1">
                        <ImageDisplay src="/Home-About2.png" width={400} height={100} alt="About 1" />
                    </div>
                    <div className="col-span-2 row-span-2">
                        <ImageDisplay src="/Home-About3.png" width={300} alt="About 3" />
                    </div>
                    <div className="col-span-2 row-span-4 ...">
                        <ImageDisplay src="/Home-About1.png" width={350} height={100} alt="About 2" />
                    </div>
                </div>
                <div className="justify-center w-[50%] flex flex-col ">
                    <Headers text="About Us" />
                    <p className="text-[12.5pt] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <div className="mt-[5em] ">
                        <ButtonDisplay text="Expore More" onclick="Explore" px="px-[4em] " py="py-[1em] " />
                    </div>
                </div>
            </div>
        </>
    )
}