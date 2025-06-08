import colors from './../../helpers/colors';
import ImageDisplay from './../ImageDisplay';
import Image from 'next/image';
import ButtonDisplay from './../ButtonDisplay';
import DrawerUi from '../Drawer';

export default function NavBar() {
    const color = colors()
    return (
        <div className="fixed top-0 left-0 w-full h-[12dvh] bg-white z-50 shadow-sm">
            <div className="flex justify-between items-center p-5 md:px-[15em]">
                <ImageDisplay src="/Edufy-Icon.png" alt="Edufy Icon" className='mt-[-0.5em] w-[120px] md:w-[150px] ' />
                <div className="md:flex hidden items-center gap-10">
                    <a href="">About Us</a>
                    <a href="">Courses</a>
                    <a href="">Destinations</a>
                    <ButtonDisplay text="Contact Us ➜" onclick="Contact Us" />
                </div>

                <div className="md:hidden">
                    <DrawerUi />
                </div>
            </div>
        </div>
    )
}