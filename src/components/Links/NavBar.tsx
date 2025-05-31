import colors from './../../helpers/colors';
import ImageDisplay from './../ImageDisplay';
import Image from 'next/image';
import ButtonDisplay from './../ButtonDisplay';

export default function NavBar() {
    const color = colors()
    return (
        <div className="fixed top-0 left-0 w-full h-[12dvh] bg-white z-50 shadow-sm">
            <div className="flex justify-between items-center p-5 px-[15em]">
                <ImageDisplay src="/Edufy-Icon.png" alt="Edufy Icon" width={150} className='mt-[-0.5em] ' />
                <div className="flex items-center gap-10">
                    <a href="">About Us</a>
                    <a href="">Course Finder</a>
                    <a href="">Our Destinations</a>
                    <ButtonDisplay text="Contact Us ➜" onclick="Contact Us" />
                </div>
            </div>
        </div>
    )
}