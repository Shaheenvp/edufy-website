'use client'
import ImageDisplay from "../ImageDisplay";
import ButtonDisplay from './../ButtonDisplay';
import Headers from './../Headers';

export default function HomeAbout() {
    return (
        <>
            <div className="w-full md:relative mt-[1em] md:mt-0">
                <ImageDisplay src='/Rectangle-Bg.png' className='md:mt-[-3em] hidden md:block md:z-[-1] ' alt='Background Image 1' width={2000} />

                <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:z-10 md:text-white md:items-center">
                    <div className="flex md:gap-[5em] gap-[3em] mb-[1em] md:mb-0 justify-center text-center">
                        <div className="md:w-[10em]">
                            <p className="font-[900] md:text-[25pt]">150+</p>
                            <p>Courses</p>
                        </div>
                        <div className="border-x md:w-[15em] w-[8em] md:border-white border-black md:px-8">
                            <p className="font-[900] md:text-[25pt]">20+</p>
                            <p>Countries</p>
                        </div>
                        <div className="md:w-[10em] md:border-white border-black md:px-8">
                            <p className="font-[900] md:text-[25pt]">30k+</p>
                            <p>Students</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <ImageDisplay src="/Gathering.jpeg" className="w-full " alt="Gathering" />
            </div>
            <div className="flex md:px-[10em] px-[1em] md:my-[3em] my-[0.5em] gap-[5em] ">
                <div className="md:grid hidden w-[50%] grid-flow-col grid-rows-6 gap-x-4">
                    <div className="col-span-1"></div>
                    <div className="row-span-4 col-span-1">
                        <ImageDisplay src="/Home-About2.png" width={400} alt="About 1" />
                    </div>
                    <div className="col-span-2 row-span-2">
                        <ImageDisplay src="/Home-About3.png" width={300} alt="About 3" />
                    </div>
                    <div className="col-span-2 row-span-4 ">
                        <ImageDisplay src="/Home-About1.png" width={350} alt="About 2" />
                    </div>
                </div>
                <div className="justify-center md:w-[50%] w-[100%] md:flex flex-col ">
                    <Headers text="About Us" className="md:text-start text-center " />
                    <p className="md:text-[13pt] text-[11pt] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <div className="md:mt-[2.5em] my-[1em] ">
                        <ButtonDisplay text="Expore More" onclick="Explore" px="px-[4em] " py="py-[1em] " />
                    </div>
                </div>
            </div>
        </>
    )
}